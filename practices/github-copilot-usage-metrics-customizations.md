---
id: github-copilot-usage-metrics-customizations
title: Copilot usage metrics — named skills, agents, MCP, slash commands
tags: [github, observability, mcp, skills]
status: active
updated: 2026-10-23
when_to_use: Reading Copilot usage-metrics API arrays for internal skills, custom agents, MCP servers, slash commands, or plugins
---

## Summary

Copilot **usage metrics** (2026-10-22) now emit the **configured name** of customer-defined skills, custom agents, MCP servers, slash commands, and plugins instead of grouping them as `other` / `custom`. This is the **API / NDJSON** surface, not the impact-dashboard industry widget (`github-copilot-impact-industry`) and not client OTel (`github-copilot-otel`). Policy **Copilot usage metrics** must be on.

## Notes

- Arrays: `totals_by_skill`, `totals_by_custom_agent`, `totals_by_mcp`, `totals_by_slash_cmd`, `totals_by_plugin`. Each entry has a name field (`skill`, `custom_agent`, `mcp`, `slash_cmd`, `plugin`) plus `interaction_count`. They appear on enterprise and organization **per-user 1-day / 28-day** reports, **aggregated 1-day** reports, and each `day_totals` row in aggregated 28-day reports (and matching per-user NDJSON). Dashboard charts do **not** list these names.
- Cap: each array keeps the **top 25** named entries by `interaction_count` (was five). Overflow is a trailing `other` (can sit **beside** the 25). `custom` is separate — slash commands whose configured names are unavailable. An absent name is **not** zero usage; do not compute exact adoption from the capped arrays.
- What a count means: skill **invocations**; custom-agent **starts**; MCP **connect / reconnect** attempts (success **or** fail — tool calls on an already-connected server do **not** increment); slash-command invocations; plugin-associated skill invocations. Plugin counts are a **subset** of skill counts — do not add them. Distinct `distinct_*_use_count` fields count **identifiers**, not users; they include hidden overflow IDs. Aggregated distinct counts are not sums of per-user distincts. `interaction_count` math did not change.
- Coverage: Copilot CLI (interactive + `-p`), the Copilot app, ACP hosts such as JetBrains, and the Copilot SDK. Prompt mode / app / ACP need CLI **1.0.97+**; SDK **v1.0.21+** (and if the SDK overrides its bundled CLI, that CLI must also be 1.0.97+). IDE **built-in chat telemetry does not report names** — only IDE agent experiences on SDK v1.0.21+. Names are trimmed to **128** characters; path-like names stay in `other` / `custom`. Review names before exporting. History is **not** backfilled — only report days processed after the rollout. Client telemetry can undercount (old clients, blocked upload).
- Access: enterprise owners, billing managers, org owners, or a custom role with **View Copilot Metrics**. Use for adoption trends, not audit or billing.

## Sources

- [Custom skills, agents, and MCP servers in usage metrics API](https://github.blog/changelog/2026-10-22-custom-skills-agents-and-mcp-servers-in-usage-metrics-api/) — accessed 2026-10-23
- [Data available in Copilot usage metrics](https://docs.github.com/en/copilot/reference/copilot-usage-metrics/copilot-usage-metrics) — accessed 2026-10-23
- [REST API endpoints for Copilot usage metrics](https://docs.github.com/en/rest/copilot/copilot-usage-metrics) — accessed 2026-10-23
