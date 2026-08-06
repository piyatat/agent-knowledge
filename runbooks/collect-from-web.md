---
id: collect-from-web
title: Runbook — collect a web note into this repo
tags: [runbook, contributing]
status: active
updated: 2026-08-06
when_to_use: User asks to scrape/collect information into agent-knowledge
---

## Steps

1. Clarify the topic / tags the user wants.
2. WebSearch + WebFetch primary sources (prefer docs, RFCs, primary blogs).
3. Write a **summary note** under `practices/`, `failure-modes/`, `glossary/`, or `runbooks/` using the CONTRIBUTING template.
4. Add URLs to the note’s `## Sources` and append `sources/bibliography.md`.
5. Update `manifest.json` and `INDEX.md`.
6. Do **not** paste full copyrighted pages; quote sparingly if at all.
7. Commit/push only if the user asks.

## Done when

- Note has frontmatter + when_to_use
- Manifest/index updated
- Sources attributed
