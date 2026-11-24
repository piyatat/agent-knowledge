---
id: axiom
title: Axiom — event storage, APL queries, and an OAuth MCP server
kind: service
tags: [axiom, observability, logs, mcp]
status: active
updated: 2026-11-24
when_to_use: Storing and querying event data in Axiom, or letting an agent investigate datasets and manage monitors
---

## Summary

**Axiom** is hosted event and log storage queried with Axiom Processing Language, plus metrics, monitors, and dashboards. Personal is free with hard caps. Axiom Cloud is a monthly platform fee plus usage past an allowance. The remote MCP server queries as the signed-in member and can manage dashboards, monitors, and notifiers. An agent can also provision a temporary organization and hand back a claim link. Use Axiom when the task is event search on usage-priced storage. Use Honeycomb (`honeycomb`) when the question is a wide trace under a monthly event cap. Use Datadog (`datadog`) or Sentry (`sentry`) when the source of truth is already that vendor’s org.

## Notes

- **Access.** Sign up at `links.get`. API calls use a personal token (`xapt-`) or an organization token (`xaat-`) as a Bearer credential. Remote MCP prefers browser OAuth so the agent never sees the token. Revoke a connected app under Settings → Profile; access ends within 5 minutes. Header auth, for a client that cannot do OAuth, sends the bearer token and `x-axiom-org-id` (or `org-id` on the URL).
- **MCP.** US: `https://mcp.axiom.co/mcp`. EU: `https://mcp.eu.axiom.co/mcp`. Both sign in the same way, and each query runs in the edge that holds the dataset. The US server handles query results worldwide. The EU server handles query results only in the EU, and only that path keeps results in-region for a dataset in EU Central 1. Both servers send sign-in and non-query calls, including listing datasets and monitors, to the US API. OAuth sessions can use the OpenTelemetry tool family. Header-auth sessions get those tools only with `with-otel=1`. The server can query with APL and MPL and can manage dashboards, monitors, and notifiers.
- **Plans (pricing page and limits reference, 2026-11-24).** Personal is $0 and needs no card: 500 GB of data-loading compute a month, 10 GB-hours of query compute, 25 GB of storage, 30-day retention, 3 datasets, 256 fields per dataset, 1 user, and 3 monitors. That 500 GB figure is also the maximum, so Personal does not bill overage. Axiom Cloud is $25 a month plus usage, with an allowance of 1 TB of data loading, 100 GB-hours of query, and 100 GB of storage. Past that, the pricing page’s pay-as-you-go rate is $1 per compute credit, with graduated discounts. A spending limit pauses usage beyond it instead of billing it. Query-cost limits on a token or role exist only on Axiom Cloud and Enterprise Cloud.
- **Caveats.** An unclaimed agent organization is deleted at 24 hours, and a query that looks cheap can still stop on a role cap or a 1,000-row default. Details: `axiom-unclaimed-org-and-query-cap`.

## Sources

- [Axiom MCP server](https://axiom.co/docs/console/intelligence/mcp-server) — accessed 2026-11-24
- [Agent-created organizations](https://axiom.co/docs/console/intelligence/agent-created-orgs) — accessed 2026-11-24
- [Set query cost limits for AI agents](https://axiom.co/docs/console/intelligence/query-cost-limits) — accessed 2026-11-24
- [Limits](https://axiom.co/docs/reference/limits) — accessed 2026-11-24
- [Axiom pricing](https://axiom.co/pricing) — accessed 2026-11-24
- [Axiom sign-up](https://app.axiom.co/register) — accessed 2026-11-24
- [Axiom](https://axiom.co/) — accessed 2026-11-24
