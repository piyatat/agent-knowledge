#!/usr/bin/env node
/**
 * List related corpus entries for a given entry id (from manifest related[]).
 * Usage: npm run related -- <entry-id>
 */
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const manifest = JSON.parse(readFileSync(join(root, "manifest.json"), "utf8"));
const entries = manifest.entries ?? [];
const id = process.argv[2]?.trim();

if (!id) {
  process.stderr.write("Usage: npm run related -- <entry-id>\n");
  process.exit(1);
}

/** @type {Map<string, object>} */
const byId = new Map(entries.map((e) => [e.id, e]));
const entry = byId.get(id);

if (!entry) {
  process.stderr.write(`Unknown entry id: ${id}\n`);
  process.exit(1);
}

const relatedIds = Array.isArray(entry.related) ? entry.related : [];

const lines = [
  `# Related to \`${id}\` (${relatedIds.length})`,
  "",
  `**${entry.title ?? id}**`,
  "",
];

if (relatedIds.length === 0) {
  lines.push("_No related entries._", "");
  process.stdout.write(lines.join("\n"));
  process.exit(0);
}

lines.push("| id | title | tags |", "| --- | --- | --- |");

for (const rid of relatedIds) {
  const rel = byId.get(rid);
  if (!rel) {
    lines.push(`| \`${rid}\` | _(missing from manifest)_ | |`);
    continue;
  }
  const tags = Array.isArray(rel.tags) ? rel.tags.join(", ") : "";
  lines.push(`| \`${rel.id}\` | ${rel.title ?? ""} | ${tags} |`);
}

lines.push("");
process.stdout.write(lines.join("\n"));
