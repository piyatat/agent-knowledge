---
id: corpus-freshness-revalidation
title: Revalidating knowledge corpus freshness
tags: [knowledge, ops, quality]
status: active
updated: 2026-08-15
when_to_use: Keeping agent-knowledge notes accurate as MCP/agent ecosystems change
---

## Summary

Schedule revalidation of corpus notes: check source URLs, bump `updated`, deprecate stale guidance, and gap-fill when protocols change (e.g. MCP revisions).

## Notes

- Track `updated` dates; flag notes older than N days in high-churn tags (`mcp`, `cursor`).
- Prefer primary specs over SEO blogs when revalidating.
- Mark `draft` when uncertain; never invent citations.
- Link related notes so supersessions are discoverable.
- Automate `npm run check` in CI after ingest PRs.

## Sources

- [Knowledge corpus pattern](https://github.com/piyatat/agent-knowledge/blob/main/practices/knowledge-corpus-pattern.md) — accessed 2026-08-15
- [Collect from web (corpus)](https://github.com/piyatat/agent-knowledge/blob/main/runbooks/collect-from-web.md) — accessed 2026-08-15
