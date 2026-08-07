#!/usr/bin/env node
/**
 * List all corpus entries (id + title) from manifest.json.
 * Usage: npm run list
 *        npm run list -- active   # filter by status
 */
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const manifest = JSON.parse(readFileSync(join(root, "manifest.json"), "utf8"));
const entries = manifest.entries ?? [];
const statusFilter = process.argv[2]?.trim().toLowerCase();

const filtered = statusFilter
  ? entries.filter((e) => (e.status ?? "").toLowerCase() === statusFilter)
  : entries;

if (filtered.length === 0) {
  process.stderr.write(
    statusFilter
      ? `No entries with status "${statusFilter}".\n`
      : "No entries in manifest.\n",
  );
  process.exit(1);
}

const lines = [
  `# Entries (${filtered.length}${statusFilter ? ` · status=${statusFilter}` : ""})`,
  "",
  "| id | title | status |",
  "| --- | --- | --- |",
];

for (const entry of filtered) {
  lines.push(
    `| \`${entry.id}\` | ${entry.title ?? ""} | ${entry.status ?? ""} |`,
  );
}

lines.push("");
process.stdout.write(lines.join("\n"));
