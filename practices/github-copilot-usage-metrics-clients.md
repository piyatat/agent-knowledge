---
id: github-copilot-usage-metrics-clients
title: Copilot usage metrics — totals_by_client (OpenCode, Claude Code, Codex)
tags: [github, observability, cli, governance]
status: active
updated: 2026-10-24
when_to_use: Reading Copilot usage-metrics totals_by_client for OpenCode, Claude Code, Codex, or other non-IDE clients
---

## Summary

Copilot **usage metrics** (2026-10-23) add a **`totals_by_client`** array that counts **server-side model traffic** from tools that use Copilot as the model provider, including ones that never sent editor telemetry. This is not named-customization arrays (`github-copilot-usage-metrics-customizations`), not the impact-dashboard industry widget (`github-copilot-impact-industry`), and not client OTel (`github-copilot-otel`). Policy **Copilot usage metrics** must be on.

## Notes

- Scope: enterprise, organization, enterprise-user, and organization-user **1-day and 28-day** reports. In aggregated 28-day reports the array sits on each `day_totals` row. Additive — existing fields are unchanged; the array is empty when there is no usage.
- Each entry: `client` (tool that sent the request), `request_count` (successful **model calls**, not prompts), `session_count`, `token_usage` (prompt / output / avg per request), and `totals_by_model` with `model_selection_mode` = `user_selected` | `auto` | `product_selected`. Modes not yet broken out are `other`; un-normalizable values are `unknown`. One prompt can trigger several model calls — do not compare `request_count` to prompt or interaction counts.
- Documented `client` values: `opencode`, `claude_code`, `codex`, `zed`, `copilot_cli`, `github_app`, `cloud_agent`, `code_review`, `vscode`, `jetbrains`. Unrecognized integrations group as `other`. Identification is the integration ID the client sends — treat `client` as **best-effort grouping**, not a verified identity.
- Contrast **agent-app activity** (jobs started by Claude/Codex **on GitHub**): `totals_by_client` measures **requests and tokens** from any tool that calls Copilot. `cloud_agent` and `code_review` report `product_selected` because the product picks the model; code-review models are `unknown`.
- Access: enterprise owners, billing managers, org owners, or a custom role with **View Copilot Metrics**. Use for tool-mix and governance, not audit or billing.

## Sources

- [Usage metrics API adds usage from tools like OpenCode](https://github.blog/changelog/2026-10-23-usage-metrics-api-adds-usage-from-tools-like-opencode/) — accessed 2026-10-24
- [Data available in Copilot usage metrics](https://docs.github.com/en/copilot/reference/copilot-usage-metrics/copilot-usage-metrics) — accessed 2026-10-24
- [REST API endpoints for Copilot usage metrics](https://docs.github.com/en/rest/copilot/copilot-usage-metrics) — accessed 2026-10-24
