#!/usr/bin/env node
/**
 * List unique tags from manifest.json with entry counts and ids.
 * Usage: npm run tags
 *        npm run tags -- mcp
 */
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const manifest = JSON.parse(readFileSync(join(root, "manifest.json"), "utf8"));
const entries = manifest.entries ?? [];
const filter = process.argv[2]?.toLowerCase();

/** @type {Map<string, string[]>} */
const byTag = new Map();

for (const entry of entries) {
  const tags = Array.isArray(entry.tags) ? entry.tags : [];
  for (const tag of tags) {
    const key = String(tag);
    if (!byTag.has(key)) byTag.set(key, []);
    byTag.get(key).push(entry.id);
  }
}

const tags = [...byTag.keys()].sort((a, b) => a.localeCompare(b));
const selected = filter ? tags.filter((t) => t.toLowerCase().includes(filter)) : tags;

if (selected.length === 0) {
  process.stderr.write(
    filter ? `No tags matching "${filter}".\n` : "No tags in manifest.\n",
  );
  process.exit(1);
}

const lines = [
  `# Tags (${selected.length}${filter ? ` matching "${filter}"` : ""})`,
  "",
  "| tag | count | entry ids |",
  "| --- | ---: | --- |",
];

for (const tag of selected) {
  const ids = byTag.get(tag) ?? [];
  lines.push(`| \`${tag}\` | ${ids.length} | ${ids.join(", ")} |`);
}

lines.push("");
process.stdout.write(lines.join("\n"));
