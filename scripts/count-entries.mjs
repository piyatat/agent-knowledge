#!/usr/bin/env node
/**
 * Print corpus entry counts grouped by status.
 * Usage: npm run count
 */
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const manifest = JSON.parse(readFileSync(join(root, "manifest.json"), "utf8"));
const entries = manifest.entries ?? [];

const byStatus = new Map();
for (const entry of entries) {
  const status = (entry.status ?? "unknown").toLowerCase();
  byStatus.set(status, (byStatus.get(status) ?? 0) + 1);
}

const statuses = [...byStatus.keys()].sort();
for (const status of statuses) {
  console.log(`${status}\t${byStatus.get(status)}`);
}
console.log(`total\t${entries.length}`);
