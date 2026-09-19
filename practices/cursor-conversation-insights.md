---
id: cursor-conversation-insights
title: Cursor Conversation Insights — on-device work classifiers
tags: [cursor, observability, privacy, ops]
status: active
updated: 2026-09-19
when_to_use: Reading Enterprise Conversation Insights (or the Analytics API slice), not raw chat export
---

## Summary

**Conversation Insights** classifies Enterprise agent sessions into work categories so admins can see **what kind of work** the team is doing, without reading transcripts. On by default for Enterprise; disable with **Disable Conversation Insights**. Not OTLP usage export (`cursor-otel-export`) and not Grok Bot’s separate job/automation dimensions.

## Notes

- Dashboard lives under Usage Analytics (Team + Enterprise). Analytics **API** is Enterprise-only. Client data starts at desktop **1.5+**. Conversation Insights endpoint: `GET /analytics/team/conversation-insights` with required `include` (`intents`, `complexity`, `categories`, `guidanceLevels`, `workTypes`). Optional `users=` emails/ids. If Disable Conversation Insights is on, the endpoint returns **401**. Returns aggregates — **not** raw conversation content.
- Cursor dimensions: Category (Bug Fixing, Refactoring, New Features, Testing, …), Work Type (KTLO / Bug Fixing / New Features), Complexity, Specificity. Enterprise can extend or replace categories. Compare slices teams vs people. Classification **runs on-device**; default classifiers keep PII off-box; outputs that fail the expected-value check are discarded.
- Grok Bot Insights (rolling out where Grok Bot is on) uses Type of Work (Customer Support, Sales, …) and Level of Automation (not / semi / fully). Toggle Cursor vs Grok Bot at the top of the dashboard. Same privacy rule: aggregates only.
- Pricing: free in preview; inference billed from **2026-01-01**. Cursor Token Rate applies when the underlying request is a third-party model (including Auto routing to one). AI-share-of-commit tracking is a different on-device signature feature and still **excludes** Background Agents and the CLI.

## Sources

- [Usage Analytics](https://cursor.com/docs/account/teams/analytics) — accessed 2026-09-19
- [Analytics API](https://cursor.com/docs/account/teams/analytics-api) — accessed 2026-09-19
