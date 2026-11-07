---
id: github-copilot-usage-metrics-telemetry
title: Copilot usage metrics — client telemetry and version gaps
tags: [github, observability, telemetry, governance]
status: active
updated: 2026-11-07
when_to_use: Diagnosing empty Copilot usage-metrics breakdowns, or reading client_telemetry_present / usage_metrics_requirements
---

## Summary

The Copilot **usage metrics API** (2026-11-05) flags users whose **client telemetry never arrived** or whose IDE/extension is **below the metrics minimum**. They still count as active via **server-side** signals; feature, language, model, and lines-of-code breakdowns stay thin. Not addressed-rate (`github-copilot-usage-metrics-review`), not BYOK breakout (`github-copilot-usage-metrics-byok`), and not how to export traces (`github-copilot-otel`). Policy **Copilot usage metrics** must be on.

## Notes

- Per-user (enterprise and organization **user** reports, 1-day and 28-day): `client_telemetry_present` is `false` when Copilot saw activity that day but **no qualifying editor events** arrived. Null/omitted means unknown (including users with only cloud-agent or code-review activity, and days before this field). `true` is not a completeness guarantee.
- `usage_metrics_requirements` lists each identifiable IDE and Copilot extension in exactly one of `met` / `unmet` / `unknown` against the documented minimum versions (examples: `vscode`, `vscode/copilot-chat`). Independent of telemetry: a user can meet every minimum and still have `client_telemetry_present: false` (proxy, `telemetry.telemetryLevel` off, firewall).
- Aggregate counts (enterprise and organization **1-day** reports, and each `day_totals` in 28-day reports): `missing_client_telemetry_user_count` (`false` only — nulls not counted); `below_usage_metrics_minimum_user_count` (at least one `unmet`; `unknown`-only users are not counted). A user can appear in **both**. Do **not** add the two counts, and do **not** sum across days for unique users. `0` is a measured zero; null means unavailable.
- Common causes of empty breakdowns: IDE telemetry off, proxy/VPN blocking the Copilot telemetry endpoint, unsupported client. Server-side telemetry still marks the user active. Wait **two full UTC days** before treating a gap as missing data. Access: enterprise owners, billing managers, org owners, or a custom role with **View Copilot Metrics**. Not billing or audit.

## Sources

- [Usage metrics API flags telemetry and version gaps](https://github.blog/changelog/2026-11-05-usage-metrics-api-flags-telemetry-and-version-gaps/) — accessed 2026-11-07
- [Data available in Copilot usage metrics](https://docs.github.com/en/copilot/reference/copilot-usage-metrics/copilot-usage-metrics) — accessed 2026-11-07
- [GitHub Copilot usage metrics (concepts)](https://docs.github.com/en/copilot/concepts/billing-and-usage/copilot-usage-metrics/copilot-metrics) — accessed 2026-11-07
- [REST API endpoints for Copilot usage metrics](https://docs.github.com/en/rest/copilot/copilot-usage-metrics) — accessed 2026-11-07
