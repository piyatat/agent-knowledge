#!/usr/bin/env node
/**
 * Show full metadata for one corpus entry by id.
 * Usage: npm run show -- <entry-id>
 */
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const manifest = JSON.parse(readFileSync(join(root, "manifest.json"), "utf8"));
const entries = manifest.entries ?? [];
const id = process.argv[2]?.trim();

if (!id) {
  process.stderr.write("Usage: npm run show -- <entry-id>\n");
  process.exit(1);
}

const entry = entries.find((e) => e.id === id);

if (!entry) {
  process.stderr.write(`Unknown entry id: ${id}\n`);
  process.exit(1);
}

const tags = Array.isArray(entry.tags) ? entry.tags.join(", ") : "";
const related = Array.isArray(entry.related)
  ? entry.related.length
    ? entry.related.map((r) => `\`${r}\``).join(", ")
    : "_none_"
  : "_none_";

const lines = [
  `# ${entry.title ?? entry.id}`,
  "",
  `| field | value |`,
  `| --- | --- |`,
  `| id | \`${entry.id}\` |`,
  `| path | \`${entry.path ?? ""}\` |`,
  `| status | ${entry.status ?? ""} |`,
  `| updated | ${entry.updated ?? ""} |`,
  `| tags | ${tags} |`,
  `| related | ${related} |`,
  "",
  "## when_to_use",
  "",
  entry.when_to_use ?? "_not set_",
  "",
];

process.stdout.write(lines.join("\n"));
