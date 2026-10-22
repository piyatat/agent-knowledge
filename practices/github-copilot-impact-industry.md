---
id: github-copilot-impact-industry
title: Copilot impact dashboard — industry comparison (opt-in)
tags: [github, observability, governance, evals]
status: active
updated: 2026-10-22
when_to_use: Comparing Copilot agentic adoption/leverage to peers, or deciding whether to opt into industry benchmarks
---

## Summary

The Copilot **impact dashboard** (Insights → Copilot impact) now has an **Industry comparison** widget (2026-10-22). Enterprises, and orgs **not** owned by an enterprise, can opt in to aggregated **agentic adoption** and **leverage** benchmarks. This is not the Copilot usage metrics API / NDJSON export, not an agent eval harness (`agent-eval-harness`), and not client OTel (`github-copilot-otel`). Off by default.

## Notes

- Metrics (28-day window): **agentic adoption** = share of active users who are agent-first or multi-agent; **leverage** = PR merge rate per user per month for agentic users vs non-agentic users. Rankings vs peer **median** first; **top decile** after the cohort grows. Self-reported company size (`1–999` / `1,000–4,999` / `5,000+`) and one of ten industries. You can switch the widget between your industry and **all industries**; if the industry group is too small, GitHub widens to same size × all industries and labels which cohort it used. Same-size only — there is no industry-only cohort.
- Policy: **Copilot metrics industry comparison**. Enable from the widget or enterprise/org Copilot policies (same setting). Opt-out hides comparisons immediately and excludes your data from the **next daily** refresh. Aggregates contain no identifying data and are deleted after **30 days**. Copilot **usage metrics** policy must already be on.
- Who: enterprise owners, or owners of standalone orgs. Orgs inside an enterprise participate **through the enterprise**. Enterprises used only to assign Copilot Business seats **cannot** participate (leverage cannot be calculated). GHEC **data residency**: peers are **same region only**. Anyone who can view the impact dashboard can see results. Very-small-active-user tenants can view but are **not** counted in cohorts.
- Rankings are omitted when the peer group is too small, or when **your** score cannot be computed (no active users, or everyone already agent-first/multi-agent so leverage has no non-agentic baseline). Comparisons are **dashboard-only** — not in the usage metrics API, NDJSON, or downloads. Treat leverage as a PR-throughput ratio, not a quality or cost eval.

## Sources

- [Industry comparisons in the Copilot impact dashboard](https://github.blog/changelog/2026-10-22-industry-comparisons-in-the-copilot-impact-dashboard/) — accessed 2026-10-22
- [Viewing the Copilot impact dashboard](https://docs.github.com/en/copilot/how-tos/administer-copilot/view-impact-dashboard) — accessed 2026-10-22
- [GitHub Copilot usage metrics](https://docs.github.com/en/copilot/concepts/billing-and-usage/copilot-usage-metrics/copilot-metrics) — accessed 2026-10-22
