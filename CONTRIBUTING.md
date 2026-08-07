# Contributing / collecting

## Entry template

```markdown
---
id: kebab-id
title: Short title
tags: [tag1, tag2]
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
5. Edit `manifest.json` as the **single source of truth** (include `status`, `updated`, `related: []`). Sync the note’s frontmatter `status` / `updated` to match. Then run `npm run check` to validate and regenerate `INDEX.md`.
6. Add or update a row in `sources/bibliography.md`.

## Scripts

```bash
npm run validate   # corpus integrity (manifest ↔ notes ↔ disk)
npm run index      # regenerate INDEX.md from manifest
npm run check      # validate && index
```
