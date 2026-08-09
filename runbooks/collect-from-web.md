---
id: collect-from-web
title: Runbook — collect a web note into this repo
tags: [runbook, contributing]
status: active
updated: 2026-08-07
when_to_use: User asks to scrape/collect information into agent-knowledge (prefer /agent-knowledge-ingest)
---

## Preferred entry

In Cursor, run **`/agent-knowledge-ingest`** (skill: `agent-knowledge-ingest`). It scrapes, dedupes against the manifest, writes notes, and runs `npm run check`.

Optional args: `topic:…` `tags:…` `limit:N` `gap-fill` `dry-run` `no-push` `draft` `folder:practices|failure-modes|glossary|runbooks|decisions`.

## Steps (manual)

1. Clarify the topic / tags the user wants.
2. WebSearch + WebFetch primary sources (prefer docs, RFCs, primary blogs).
3. Write a **summary note** under `practices/`, `failure-modes/`, `glossary/`, or `runbooks/` using the CONTRIBUTING template.
4. Add URLs to the note’s `## Sources` and append `sources/bibliography.md`.
5. Update `manifest.json` (include `status`, `updated`, `related`), then run `npm run check`.
6. Do **not** paste full copyrighted pages; quote sparingly if at all.
7. Commit/push only if the user asks.

## Done when

- Note has frontmatter + when_to_use (`status` / `updated` match manifest)
- Manifest updated; `npm run check` passes (`INDEX.md` regenerated)
- Sources attributed
