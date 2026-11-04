---
id: github-copilot-usage-metrics-byok
title: Copilot usage metrics — local BYOK vs enterprise custom models
tags: [github, observability, models, governance]
status: active
updated: 2026-11-04
when_to_use: Separating Copilot-hosted usage from local BYOK or admin-configured custom models in the usage-metrics API
---

## Summary

The Copilot **usage metrics API** (2026-11-03) splits **bring-your-own-key** traffic from Copilot-hosted totals. **Local BYOK** is a developer’s client key or on-box model (Ollama, Foundry Local, LM Studio, llama-server). **Enterprise custom models** are admin-configured keys that still route **through GitHub**. This is not named-customization arrays (`github-copilot-usage-metrics-customizations`), not `totals_by_client` grouping (`github-copilot-usage-metrics-clients`), and not how to **configure** BYOK (`github-copilot-cli-local-models`). Policy **Copilot usage metrics** must be on.

## Notes

- Scope: enterprise and organization **user and aggregate** reports, **1-day and 28-day**. Existing totals are **unchanged** — new fields are a **breakout**, not extra usage. Local BYOK is a subset of `totals_by_cli` / `totals_by_copilot_app`; custom-model usage is already inside `totals_by_client`.
- **Local BYOK** (CLI and Copilot **app** only; client telemetry): `used_local_byok` (user-level: any local BYOK request that day); `totals_by_local_byok` (sessions, requests, prompts, tokens by `byok_kind` = `local_managed` | `local_user` | `local_auto` | `remote_user` and `surface` = `copilot_cli` | `copilot_app`); aggregate `daily_` / `weekly_` / `monthly_active_local_byok_users`. **Not** broken out by model name. Undercounts when telemetry is off or the local provider omits token counts.
- **Enterprise custom models** (server-observed, **every client including IDEs**): `is_custom_enterprise_model` on each `totals_by_client[].totals_by_model[]` row. The same model name used both as Copilot-hosted and as a custom model appears as **two** rows. Real request and token counts. Unrecognized names normalize to `unknown`. **No backfill** for days before this release.
- Access: enterprise owners, billing managers, org owners, or a custom role with **View Copilot Metrics**. Use to check BYOK policy and spend mix — not as a complete bill. User-configured IDE BYOK can be disabled by org policy (`github-copilot-cli-local-models`).

## Sources

- [BYOK and enterprise custom models in the Copilot usage API](https://github.blog/changelog/2026-11-03-byok-and-enterprise-custom-models-in-the-copilot-usage-api/) — accessed 2026-11-04
- [Bring your own key for GitHub Copilot](https://docs.github.com/en/copilot/concepts/models/bring-your-own-key) — accessed 2026-11-04
- [Data available in Copilot usage metrics](https://docs.github.com/en/copilot/reference/copilot-usage-metrics/copilot-usage-metrics) — accessed 2026-11-04
- [REST API endpoints for Copilot usage metrics](https://docs.github.com/en/rest/copilot/copilot-usage-metrics) — accessed 2026-11-04
