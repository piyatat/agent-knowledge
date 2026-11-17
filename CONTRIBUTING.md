# Contributing / collecting

## Entry template

```markdown
---
id: kebab-id
title: Short title
tags: [tag1, tag2]
kind: knowledge  # tool | service | protocol | knowledge (optional here; manifest is authoritative)
status: active   # active | draft | deprecated
updated: YYYY-MM-DD
when_to_use: One line — when an agent should open this page
---

## Summary
…

## Notes
…

## Sources
- [Title](URL) — accessed YYYY-MM-DD
```

## Rules

1. **Summarize** — do not paste full articles.
2. **Attribute** — every factual claim cluster needs a source URL.
3. **One topic per file** — keep under ~150 lines when possible.
4. Prefer `status: active` for notes agents should open; use `draft` or `deprecated` otherwise.
5. Edit `manifest.json` as the **single source of truth** (include `kind`, `status`, `updated`, `related: []`). Sync the note’s frontmatter `status` / `updated` to match. Then run `npm run check` to validate and regenerate `INDEX.md`.
6. Add or update a row in `sources/bibliography.md`.
7. **Scheduled ingest** (cron / Cursor automation) lands on **`main`**: after `npm run check`, commit and `git push origin main`. Do not create a feature branch or pull request. Interactive collection still waits for an explicit push request.

## Choosing `kind`

- `tool` — installed or run locally: coding agents, CLIs, SDKs, plugins, IDE integrations.
- `service` — hosted platform or integration: cloud agents, managed review, forges, marketplaces.
- `protocol` — open spec or standard.
- `knowledge` — practices, failure modes, glossary, runbooks, decisions (default).

## Where to get it (`links`)

Tool and service entries may carry `links` in `manifest.json` — official https URLs only, no install commands or instructions:

```json
"links": { "get": "https://…install-or-signup-page", "docs": "https://…", "home": "https://…" }
```

`get` = where a person installs the tool or signs up for the service. The repo only points there; the user decides whether and how to proceed. Do not paste install scripts or setup steps into notes.

Write `when_to_use` as the task an agent would be planning ("Hosting repos for agents without GitHub"), since `npm run lookup` and `DIRECTORY.md` surface it.

## Scripts

```bash
npm run validate   # corpus integrity (manifest ↔ notes ↔ disk)
npm run index      # regenerate INDEX.md from manifest
npm run directory  # regenerate DIRECTORY.md from manifest
npm run lookup -- "<task>"  # pre-flight search grouped by kind
npm run check      # validate && index && directory
```
