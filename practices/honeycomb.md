---
id: honeycomb
title: Honeycomb — traces, events, and a regional MCP server
kind: service
tags: [honeycomb, observability, tracing, mcp]
status: active
updated: 2026-11-24
when_to_use: Querying production traces in Honeycomb, or letting an agent investigate a team through MCP
---

## Summary

**Honeycomb** stores traces, events, and time-series metrics. Each span in a trace counts as one event. Free includes 20 million events and 100 million metric data points a month, plus the MCP server. Pro starts at $150 a month for 50 million events on the 2026 pricing page. The remote MCP server is regional and stays dark until a team owner turns on Honeycomb Intelligence. Use Honeycomb when the task is wide traces under a monthly event cap. Use Datadog (`datadog`) when that org is already the source of truth, or Axiom (`axiom`) for usage-priced event storage. Use Grafana Cloud (`grafana-cloud`) when metrics, logs, and traces should stay in one Grafana stack.

## Notes

- **Access.** Sign up at `links.get` and pick North America or the European Union on that page. Honeycomb stores the team’s data in the region chosen then. Unattended access is a management key, and only a team owner can create one. The key is a key id and a key secret. Scopes on that key cannot be changed later. Prefer OAuth when the client can open a browser. The setup guide is `links.docs`.
- **MCP.** US: `https://mcp.honeycomb.io/mcp`. EU: `https://mcp.eu1.honeycomb.io/mcp`. Point the client at the region that holds the data. OAuth consent is read-all, read-and-write-all, or a custom set of resource scopes. Every connection receives `environments:read` and `queries:read`. A write scope includes read on that resource, and the agent only sees tools its scopes allow. A management key needs read on both Model Context Protocol and Environments for any call, and write on Model Context Protocol to change boards, triggers, SLOs, recipients, or Canvas. Send the key as a bearer token of `id:secret`. Some clients want the word Bearer only as the scheme; others need it inside the value. Send `X-MCP-Toolset` only as `all`, `query`, or `canvas`. Any other value, including an empty one, rejects every request that carries the header. The header does not grant access.
- **Plans (pricing page and 2026 Pro changes, 2026-11-24).** Free is $0: 20 million events, 100 million metric data points, 2 triggers, tracing, and MCP. Pro starts at $150 a month for 50 million events and 250 million metric data points, up to 750 million events and 3.75 billion data points. Pro includes 100 triggers and 2 SLOs. The 2026 Pro rate is $3.00 per million events, against $1.30 per million on legacy Pro. Teams still on legacy Pro can stay through the grace period that ends 2026-12-31. Doing nothing moves them, at the next billing boundary, to the 2026 tier that matches the current plan, not measured usage. An annual commitment during the grace period keeps the legacy rate plus 20% for that year. There is no monthly legacy option. The Enterprise list includes Service Map and the Query Data API; the Free and Pro lists do not. Enterprise is exempt from ingest throttling. Events and logs are kept 60 days from ingest, not from the timestamp inside the event. Metrics default to 13 months.
- **Caveats.** Intelligence off means no MCP tools, a second month over the cap can drop nine of every ten events, and a 90-day trace query is past retention. Details: `honeycomb-intelligence-and-throttle`.

## Sources

- [Connect to Honeycomb MCP](https://docs.honeycomb.io/integrations/mcp/configuration-guide) — accessed 2026-11-24
- [Honeycomb MCP tools](https://docs.honeycomb.io/integrations/mcp/tools) — accessed 2026-11-24
- [Troubleshooting Honeycomb MCP](https://docs.honeycomb.io/integrations/mcp/troubleshooting) — accessed 2026-11-24
- [Manage team API keys](https://docs.honeycomb.io/configure/teams/manage-api-keys) — accessed 2026-11-24
- [How Honeycomb calculates usage](https://docs.honeycomb.io/get-started/manage-costs/how-honeycomb-calculates-usage) — accessed 2026-11-24
- [2026 Pro plan changes](https://docs.honeycomb.io/get-started/honeycomb/2026-pro-plan-changes) — accessed 2026-11-24
- [Honeycomb pricing](https://www.honeycomb.io/pricing) — accessed 2026-11-24
- [Sign up for Honeycomb](https://docs.honeycomb.io/get-started/create-account) — accessed 2026-11-24
- [Honeycomb](https://www.honeycomb.io/) — accessed 2026-11-24
