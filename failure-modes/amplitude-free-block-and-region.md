---
id: amplitude-free-block-and-region
title: Amplitude kept events the charts cannot show, or MCP used the wrong region
kind: knowledge
tags: [amplitude, analytics, billing, mcp]
status: active
updated: 2026-11-26
when_to_use: An Amplitude chart is missing events, MCP signed into the wrong region, or a free org lost its charts
---

## Summary

Amplitude (`amplitude`) still ingests events after a free org passes its monthly allowance, and those extra events stay out of charts until the next month or an upgrade. A third month over the limit blocks charts and dashboards. The product MCP cannot send the events that would fill the gap, and a US MCP URL will not see an EU org.

## Notes

- **Free allowance.** The pricing page meters Free at 2 million events a calendar month. The count resets on the first of the month. Any ingested event counts, including hidden, inactive, and backfilled events. Identify and Group Identify calls do not. Blocked or deleted event types are never ingested, so they do not count, and the data sent while they were blocked is gone. Events past the per-project event-type limit still count and are queryable through the Export API. The instrumentation guide says a month over the limit still ingests, and the extra data stays unavailable until you upgrade or the next month begins. Free accounts are emailed and warned in product at 80%, 90%, and 100%. Paid accounts also get a 110% notice and can be charged overage. The plans page says Plus charges usage fees when included monthly tracked users or event volume is passed, at the plan’s per-unit rate. That page does not print the rate. The annual Plus comparison copy says the event-volume tier up to 20 million has no overage penalties. Read Plans & Billing on the org. The plans page’s rule for Free is: exceed the monthly limit three times and charts and dashboards are blocked, while admin functions such as the User API remain. Keep exceeding without upgrading and the account is deleted six months after the first block.
- **MCP misses.** The product MCP does not ingest. `manage_amp_events` only registers taxonomy. A chart an agent builds will not contain events the SDK never sent, or events Amplitude has ingested but will not query because the month is over the allowance. A dashboard query can use the chart’s default settings and ignore the dashboard’s saved filters. Large charts can be truncated by the AI client. Use MCP (write) is required for edits. The tool remains listed when the role lacks it, and the call fails. Viewer is read. A role without the action fails even for an org admin. The MCP URL must match the region chosen at sign-up. That region cannot be changed. Signing into more than one Amplitude org during OAuth can fail the flow. Guides and surveys created through MCP stay unpublished drafts.
- **Scholarship volume.** The one-year Growth scholarship is 200,000 monthly tracked users or 100 million events. Repeated overages can downgrade that org to Free. The downgrade is not triggered by a single overage on its own.

## Sources

- [Amplitude limits and quotas](https://amplitude.com/docs/data/limits-and-quotas) — accessed 2026-11-26
- [Amplitude plans and billing](https://amplitude.com/docs/admin/billing-use/plans-and-billing) — accessed 2026-11-26
- [Track instrumentation progress](https://amplitude.com/docs/get-started/track-your-progress) — accessed 2026-11-26
- [MTU billing guide](https://amplitude.com/docs/admin/billing-use/mtu-guide) — accessed 2026-11-26
- [Amplitude pricing](https://amplitude.com/pricing) — accessed 2026-11-26
- [Amplitude MCP](https://amplitude.com/docs/amplitude-ai/amplitude-mcp) — accessed 2026-11-26
