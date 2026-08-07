#!/usr/bin/env node
/**
 * Validate corpus integrity: manifest ↔ note frontmatter ↔ on-disk notes.
 * Soft-warns when note Source URLs are missing from sources/bibliography.md.
 */
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const manifestPath = join(root, "manifest.json");
const bibliographyPath = join(root, "sources", "bibliography.md");

const NOTE_DIRS = [
  "practices",
  "failure-modes",
  "glossary",
  "runbooks",
  "decisions",
];

const EXEMPT_BASENAMES = new Set([
  "README.md",
  "LICENSE",
  "LICENSE.md",
  "CONTRIBUTING.md",
  "AGENTS.md",
  "INDEX.md",
  "bibliography.md",
]);

const errors = [];
const warnings = [];

function fail(msg) {
  errors.push(msg);
}

function warn(msg) {
  warnings.push(msg);
}

function parseFrontmatter(text) {
  if (!text.startsWith("---\n") && !text.startsWith("---\r\n")) return null;
  const end = text.indexOf("\n---", 4);
  if (end === -1) return null;
  const block = text.slice(4, end);
  const fields = {};
  for (const line of block.split(/\r?\n/)) {
    const m = line.match(/^([a-z_]+):\s*(.*)$/i);
    if (!m) continue;
    let value = m[2].trim();
    if (value.startsWith("[") && value.endsWith("]")) {
      value = value
        .slice(1, -1)
        .split(",")
        .map((s) => s.trim().replace(/^["']|["']$/g, ""))
        .filter(Boolean);
    } else {
      value = value.replace(/^["']|["']$/g, "");
    }
    fields[m[1]] = value;
  }
  return fields;
}

function walkMarkdown(dir, out = []) {
  if (!existsSync(dir)) return out;
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    const st = statSync(full);
    if (st.isDirectory()) {
      if (name === "node_modules" || name === ".git" || name === ".roundtable") {
        continue;
      }
      walkMarkdown(full, out);
    } else if (name.endsWith(".md") && !EXEMPT_BASENAMES.has(name)) {
      out.push(full);
    }
  }
  return out;
}

function extractUrls(text) {
  const urls = new Set();
  const re = /https?:\/\/[^\s\)\]>"']+/g;
  let m;
  while ((m = re.exec(text)) !== null) {
    urls.add(m[0].replace(/[.,;:]+$/, ""));
  }
  return urls;
}

function reportAndExit(entryCount = 0) {
  for (const w of warnings) console.warn(`WARN: ${w}`);
  for (const e of errors) console.error(`ERROR: ${e}`);
  if (errors.length) {
    console.error(
      `\nvalidate-corpus: ${errors.length} error(s), ${warnings.length} warning(s)`,
    );
    process.exit(1);
  }
  console.log(
    `validate-corpus: ok (${entryCount} entries, ${warnings.length} warning(s))`,
  );
  process.exit(0);
}

if (!existsSync(manifestPath)) {
  fail(`Missing manifest.json at ${manifestPath}`);
  reportAndExit(0);
}

const manifest = JSON.parse(readFileSync(manifestPath, "utf8"));
const entries = manifest.entries ?? [];

const seenIds = new Map();
const manifestPaths = new Set();

for (const entry of entries) {
  if (!entry.id) {
    fail(`Manifest entry missing id: ${JSON.stringify(entry)}`);
    continue;
  }
  if (seenIds.has(entry.id)) {
    fail(`Duplicate id in manifest: ${entry.id}`);
  } else {
    seenIds.set(entry.id, entry);
  }

  if (!entry.path) {
    fail(`Manifest entry ${entry.id} missing path`);
    continue;
  }
  if (manifestPaths.has(entry.path)) {
    fail(`Duplicate path in manifest: ${entry.path}`);
  }
  manifestPaths.add(entry.path);

  for (const field of ["status", "updated", "related"]) {
    if (!(field in entry)) {
      fail(`Manifest entry ${entry.id} missing required field: ${field}`);
    }
  }
  if ("related" in entry && !Array.isArray(entry.related)) {
    fail(`Manifest entry ${entry.id}: related must be an array`);
  }

  const notePath = join(root, entry.path);
  if (!existsSync(notePath)) {
    fail(`Note file missing for ${entry.id}: ${entry.path}`);
    continue;
  }

  const body = readFileSync(notePath, "utf8");
  const fm = parseFrontmatter(body);
  if (!fm) {
    fail(`Note ${entry.path} missing YAML frontmatter`);
    continue;
  }
  if (fm.id !== entry.id) {
    fail(
      `Id mismatch: manifest has "${entry.id}" but ${entry.path} frontmatter has "${fm.id}"`,
    );
  }
  if (fm.status && entry.status && fm.status !== entry.status) {
    fail(
      `Status mismatch for ${entry.id}: manifest="${entry.status}" frontmatter="${fm.status}"`,
    );
  }
  if (fm.updated && entry.updated && fm.updated !== entry.updated) {
    fail(
      `Updated mismatch for ${entry.id}: manifest="${entry.updated}" frontmatter="${fm.updated}"`,
    );
  }
}

for (const entry of entries) {
  if (!Array.isArray(entry.related)) continue;
  for (const rid of entry.related) {
    if (!seenIds.has(rid)) {
      fail(`Manifest entry ${entry.id} related id not in manifest: ${rid}`);
    }
  }
}

const onDiskNotes = [];
for (const dir of NOTE_DIRS) {
  walkMarkdown(join(root, dir), onDiskNotes);
}

for (const full of onDiskNotes) {
  const rel = relative(root, full).replace(/\\/g, "/");
  if (!manifestPaths.has(rel)) {
    fail(`Note on disk not in manifest: ${rel}`);
  }
}

let bibliographyUrls = new Set();
if (existsSync(bibliographyPath)) {
  bibliographyUrls = extractUrls(readFileSync(bibliographyPath, "utf8"));
} else {
  warn("sources/bibliography.md missing — skipping bibliography soft checks");
}

for (const entry of entries) {
  const notePath = join(root, entry.path);
  if (!existsSync(notePath)) continue;
  const body = readFileSync(notePath, "utf8");
  const sourcesSection = body.match(/## Sources\n([\s\S]*?)(?=\n## |\n*$)/);
  if (!sourcesSection) continue;
  const noteUrls = extractUrls(sourcesSection[1]);
  for (const url of noteUrls) {
    if (!bibliographyUrls.has(url)) {
      warn(`Source URL in ${entry.path} missing from bibliography: ${url}`);
    }
  }
}

reportAndExit(entries.length);
