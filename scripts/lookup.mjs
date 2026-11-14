#!/usr/bin/env node
/**
 * Pre-flight lookup for agents: given a task description, return ranked
 * tools, services, protocols and knowledge to read before acting.
 *
 * Usage: npm run lookup -- "<task description>" [--kind tool,service] [--tag mcp]
 *                          [--limit 5] [--all] [--bodies] [--json]
 *
 * Output is grouped by kind. Failure-mode notes matching the task are always
 * surfaced under "watch out for" so they are seen during planning.
 */
import { existsSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const manifest = JSON.parse(readFileSync(join(root, "manifest.json"), "utf8"));
const entries = manifest.entries ?? [];
const byId = new Map(entries.map((e) => [e.id, e]));

const KIND_ORDER = ["tool", "service", "protocol", "knowledge"];
const KIND_LABEL = {
  tool: "Tools (installable agents, CLIs, SDKs, plugins)",
  service: "Services (hosted platforms, integrations, APIs)",
  protocol: "Protocols and open standards",
  knowledge: "Knowledge (practices, how-tos, glossary)",
};

const STOPWORDS = new Set(
  "a an and are as at be by can do does for from how i in into is it its me my of on or our should so that the their then there these this to up use using want we what when where which with without would you your need needs make build set setup get got via".split(
    " ",
  ),
);

function parseArgs(argv) {
  const opts = { limit: 5, kinds: null, tags: [], json: false, all: false, bodies: false };
  const words = [];
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === "--json") opts.json = true;
    else if (a === "--all") opts.all = true;
    else if (a === "--bodies") opts.bodies = true;
    else if (a === "--limit") opts.limit = Number(argv[++i]) || opts.limit;
    else if (a === "--kind") opts.kinds = (argv[++i] ?? "").split(",").filter(Boolean);
    else if (a === "--tag") opts.tags.push(...(argv[++i] ?? "").split(",").filter(Boolean));
    else words.push(a);
  }
  return { opts, query: words.join(" ").trim() };
}

function stem(t) {
  if (t.length > 4 && t.endsWith("ies")) return t.slice(0, -3) + "y";
  if (t.length > 3 && t.endsWith("s") && !t.endsWith("ss")) return t.slice(0, -1);
  return t;
}

function tokenize(text) {
  return text
    .toLowerCase()
    .split(/[^a-z0-9]+/)
    .filter((t) => t.length > 1 && !STOPWORDS.has(t))
    .map(stem);
}

const bodyCache = new Map();
function bodyTokens(entry) {
  if (bodyCache.has(entry.id)) return bodyCache.get(entry.id);
  const p = join(root, entry.path ?? "");
  const set = new Set(existsSync(p) ? tokenize(readFileSync(p, "utf8")) : []);
  bodyCache.set(entry.id, set);
  return set;
}

const docFreq = new Map();
for (const e of entries) {
  const seen = new Set(
    tokenize([e.id, e.title, (e.tags ?? []).join(" "), e.when_to_use].join(" ")),
  );
  for (const t of seen) docFreq.set(t, (docFreq.get(t) ?? 0) + 1);
}
const idf = (t) => Math.log(1 + entries.length / (1 + (docFreq.get(t) ?? 0)));

function score(entry, terms) {
  const idToks = new Set(tokenize(entry.id));
  const titleToks = new Set(tokenize(entry.title ?? ""));
  const tagToks = new Set((entry.tags ?? []).flatMap(tokenize));
  const useToks = new Set(tokenize(entry.when_to_use ?? ""));
  const body = bodyTokens(entry);
  let s = 0;
  const matched = new Set();
  for (const t of terms) {
    let hit = 0;
    if (idToks.has(t)) hit = Math.max(hit, 5);
    if (titleToks.has(t)) hit = Math.max(hit, 4);
    if (tagToks.has(t)) hit = Math.max(hit, 4);
    if (useToks.has(t)) hit = Math.max(hit, 3);
    if (body.has(t)) hit = Math.max(hit, 1);
    if (hit) matched.add(t);
    s += hit * idf(t);
  }
  if (matched.size === 0) return { score: 0, matched: [] };
  s *= 0.5 + matched.size / terms.length;
  if (matched.size === 1 && terms.length > 2) s *= 0.5;
  if (entry.status === "draft") s *= 0.6;
  return { score: s, matched: [...matched] };
}

const { opts, query } = parseArgs(process.argv.slice(2));
if (!query) {
  process.stderr.write(
    'Usage: npm run lookup -- "<task description>" [--kind tool,service] [--tag mcp] [--limit 5] [--all] [--json]\n',
  );
  process.exit(1);
}

const terms = [...new Set(tokenize(query))];
if (!terms.length) {
  process.stderr.write("No searchable terms in query.\n");
  process.exit(1);
}

const kindOf = (e) => e.kind ?? "knowledge";
const ranked = entries
  .filter((e) => opts.all || e.status === "active" || e.status === "draft")
  .filter((e) => !opts.kinds || opts.kinds.includes(kindOf(e)))
  .filter((e) => opts.tags.every((t) => (e.tags ?? []).includes(t)))
  .map((e) => ({ entry: e, ...score(e, terms) }))
  .filter((r) => r.score > 0)
  .sort((a, b) => b.score - a.score);

const isFailureMode = (e) => e.path?.startsWith("failure-modes/");
const pools = new Map(KIND_ORDER.map((k) => [k, []]));
const warnings = [];
for (const r of ranked) {
  if (isFailureMode(r.entry)) {
    if (warnings.length < opts.limit) warnings.push(r);
    continue;
  }
  pools.get(kindOf(r.entry))?.push(r);
}

const result = {
  query,
  terms,
  groups: KIND_ORDER.map((kind) => ({
    kind,
    hits: (pools.get(kind) ?? []).slice(0, opts.limit).map(toHit),
  })).filter((g) => g.hits.length),
  watch_out_for: warnings.map(toHit),
};

function toHit(r) {
  const e = r.entry;
  return {
    id: e.id,
    kind: kindOf(e),
    path: e.path,
    title: e.title,
    status: e.status,
    updated: e.updated,
    when_to_use: e.when_to_use,
    matched: r.matched,
    related: e.related ?? [],
    score: Math.round(r.score * 10) / 10,
  };
}

if (opts.json) {
  process.stdout.write(JSON.stringify(result, null, 2) + "\n");
  process.exit(result.groups.length || result.watch_out_for.length ? 0 : 1);
}

if (!result.groups.length && !result.watch_out_for.length) {
  process.stderr.write(
    `No corpus entries match "${query}". Proceed from primary docs; consider noting the gap (runbooks/collect-from-web.md).\n`,
  );
  process.exit(1);
}

const out = [`# Pre-flight lookup: ${query}`, `terms: ${terms.join(", ")}`, ""];
const render = (h) => {
  out.push(`- \`${h.id}\` — ${h.title} [${h.status}, ${h.updated}]`);
  out.push(`  open: \`${h.path}\``);
  if (h.when_to_use) out.push(`  use when: ${h.when_to_use}`);
  if (h.related.length) {
    const known = h.related.filter((r) => byId.has(r)).slice(0, 4);
    if (known.length) out.push(`  related: ${known.join(", ")}`);
  }
};
for (const g of result.groups) {
  out.push(`## ${KIND_LABEL[g.kind]}`, "");
  g.hits.forEach(render);
  out.push("");
}
if (result.watch_out_for.length) {
  out.push("## Watch out for (failure modes)", "");
  result.watch_out_for.forEach(render);
  out.push("");
}
out.push(
  "Next: open only the top 1-3 pages above, then plan. Project-local AGENTS.md / code win on conflict.",
);
process.stdout.write(out.join("\n") + "\n");
