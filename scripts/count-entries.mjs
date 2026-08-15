#!/usr/bin/env node
/**
 * Print corpus entry counts grouped by status.
 * Usage: npm run count
 *        npm run count -- --json
 *        npm run count -- --by-tag
 */
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const manifest = JSON.parse(readFileSync(join(root, "manifest.json"), "utf8"));
const entries = manifest.entries ?? [];
const json = process.argv.includes("--json");
const byTag = process.argv.includes("--by-tag");

if (byTag) {
  /** @type {Map<string, number>} */
  const tagCounts = new Map();
  for (const entry of entries) {
    const tags = Array.isArray(entry.tags) ? entry.tags : [];
    for (const tag of tags) {
      const key = String(tag);
      tagCounts.set(key, (tagCounts.get(key) ?? 0) + 1);
    }
  }

  if (json) {
    const out = Object.fromEntries([...tagCounts.entries()].sort(([a], [b]) => a.localeCompare(b)));
    out.total = entries.length;
    out.uniqueTags = tagCounts.size;
    process.stdout.write(`${JSON.stringify(out, null, 2)}\n`);
    process.exit(0);
  }

  const tags = [...tagCounts.keys()].sort((a, b) => a.localeCompare(b));
  for (const tag of tags) {
    console.log(`${tag}\t${tagCounts.get(tag)}`);
  }
  console.log(`uniqueTags\t${tagCounts.size}`);
  console.log(`total\t${entries.length}`);
  process.exit(0);
}

const byStatus = new Map();
for (const entry of entries) {
  const status = (entry.status ?? "unknown").toLowerCase();
  byStatus.set(status, (byStatus.get(status) ?? 0) + 1);
}

if (json) {
  const out = Object.fromEntries([...byStatus.entries()].sort(([a], [b]) => a.localeCompare(b)));
  out.total = entries.length;
  process.stdout.write(`${JSON.stringify(out, null, 2)}\n`);
  process.exit(0);
}

const statuses = [...byStatus.keys()].sort();
for (const status of statuses) {
  console.log(`${status}\t${byStatus.get(status)}`);
}
console.log(`total\t${entries.length}`);
