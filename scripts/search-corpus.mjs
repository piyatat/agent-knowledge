#!/usr/bin/env node
/**
 * Search corpus entries by keyword (id, title, tags, when_to_use, note body).
 * Usage: npm run search -- <query>
 *        npm run search -- progressive disclosure
 */
import { existsSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const manifest = JSON.parse(readFileSync(join(root, "manifest.json"), "utf8"));
const entries = manifest.entries ?? [];
const query = process.argv
  .slice(2)
  .join(" ")
  .trim()
  .toLowerCase();

if (!query) {
  process.stderr.write("Usage: npm run search -- <query>\n");
  process.exit(1);
}

const terms = query.split(/\s+/).filter(Boolean);

function haystackFor(entry) {
  const parts = [
    entry.id,
    entry.title,
    entry.when_to_use,
    entry.status,
    ...(Array.isArray(entry.tags) ? entry.tags : []),
    ...(Array.isArray(entry.related) ? entry.related : []),
  ];
  const notePath = join(root, entry.path ?? "");
  if (entry.path && existsSync(notePath)) {
    parts.push(readFileSync(notePath, "utf8"));
  }
  return parts.filter(Boolean).join("\n").toLowerCase();
}

const hits = [];
for (const entry of entries) {
  const hay = haystackFor(entry);
  if (terms.every((t) => hay.includes(t))) {
    hits.push(entry);
  }
}

if (hits.length === 0) {
  process.stderr.write(`No entries matching "${query}".\n`);
  process.exit(1);
}

const lines = [
  `# Search (${hits.length} hit${hits.length === 1 ? "" : "s"} for "${query}")`,
  "",
  "| id | title | tags |",
  "| --- | --- | --- |",
];

for (const entry of hits) {
  const tags = Array.isArray(entry.tags) ? entry.tags.join(", ") : "";
  lines.push(
    `| \`${entry.id}\` | ${entry.title ?? ""} | ${tags} |`,
  );
}

lines.push("");
process.stdout.write(lines.join("\n"));
