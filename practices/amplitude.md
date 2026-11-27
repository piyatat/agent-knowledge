---
id: amplitude
title: Amplitude — product analytics with a hosted MCP server
kind: service
tags: [amplitude, analytics, mcp, experiments]
status: active
updated: 2026-11-27
when_to_use: Querying product events and editing Amplitude charts from an agent, or choosing Amplitude instead of PostHog
---

## Summary

**Amplitude** is a hosted product-analytics platform: events, session replay, feature flags, experiments, guides, and surveys. The product MCP lets an agent read and edit that organization. It does not ingest events. A separate Docs MCP serves public documentation with no sign-in. Free includes 2 million events a month, needs no card, and has no time limit. Use Amplitude when the job is product events, replays, and charts. Use PostHog (`posthog`) when analytics, flags, and error tracking should share one project and a free org should drop events past the allowance. Use Mixpanel (`mixpanel`) when a free org should pause queries past 1 million events instead of keeping charts and hiding the extra events. Use Statsig (`statsig`) or GrowthBook (`growthbook`) when gates and experiments are the product.

## Notes

- **Access.** Create the org at `links.get`. On 2026-11-26 that URL stayed in place and the page offers Google or an email sign-up. During sign-up you choose United States or European Union storage. That choice cannot be changed later. The product MCP is `https://mcp.amplitude.com/mcp` for US data and `https://mcp.eu.amplitude.com/mcp` for EU data. OAuth acts as the signed-in user and adds no extra project access. Sign in to one organization during that flow. A second signed-in org can make the flow fail. A URL for the wrong region fails sign-in or returns no projects. Service accounts and, for Claude, enterprise-managed auth cover non-interactive clients. The Docs MCP is `https://amplitude.com/docs/api/mcp`, with tools `get_page`, `list_pages`, and `search_docs`.
- **What an agent can do.** Search and edit charts, dashboards, notebooks, cohorts, experiments, flags, and taxonomy. `manage_amp_events` registers event definitions in the tracking plan. It does not stream events. Send events with an SDK or the HTTP V2 API. Creating a guide or survey makes an unpublished draft. Publishing, scheduling, and testing stay in the UI. MCP is on for the org by default. An admin can block it for every user. Writes need the Use MCP (write) action. Viewer includes read. Member, Manager, and Admin include read and write until a role is edited. A missing action fails the call and leaves the tool in the list. Org admin status does not bypass the action. Add `?discovery=progressive` when the client should load tools on demand. ChatGPT otherwise receives a curated subset.
- **Plans (pricing page, 2026-11-26).** Every listed plan includes unlimited seats and unlimited feature flags. Free is 2 million events a month, 10,000 session replays, 5,000 agent sessions, 2,000 AI feedback records, 1 active experiment, 10 saved charts per org, 1-year data access, and 1 month of replay retention. Plus requires a card, starts at $0, includes the first 2 million events, and the comparison table caps it at 700,000 monthly tracked users or 70 million events, with 2-year data access and the same 10,000 replays. Growth and Enterprise are custom event pricing. The comparison table lists their data access as Unlimited. The plans-and-billing page still says 7 years for both and says the pricing page is current. Read the org’s Plans & Billing before relying on either number. The plans page does not publish a per-event dollar rate. A startup with under $10 million in funding and fewer than 20 employees can apply for one free year of Growth, metered at 200,000 monthly tracked users or 100 million events.
- **Caveats.** Passing the free event allowance does not stop ingest, and three months over the limit can block the org. The MCP will not backfill the missing events. Details: `amplitude-free-block-and-region`.

## Sources

- [Amplitude pricing](https://amplitude.com/pricing) — accessed 2026-11-26
- [Amplitude plans and billing](https://amplitude.com/docs/admin/billing-use/plans-and-billing) — accessed 2026-11-26
- [Amplitude limits and quotas](https://amplitude.com/docs/data/limits-and-quotas) — accessed 2026-11-26
- [Create a new account](https://amplitude.com/docs/get-started/create-a-new-account) — accessed 2026-11-26
- [Amplitude MCP](https://amplitude.com/docs/amplitude-ai/amplitude-mcp) — accessed 2026-11-26
- [Get started with Amplitude](https://amplitude.com/get-started) — accessed 2026-11-26
- [Amplitude](https://amplitude.com/) — accessed 2026-11-26
