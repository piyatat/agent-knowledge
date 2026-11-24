---
id: honeycomb-intelligence-and-throttle
title: Honeycomb MCP shows no tools, or ingest starts dropping events
kind: knowledge
tags: [honeycomb, observability, mcp, billing]
status: active
updated: 2026-11-24
when_to_use: Honeycomb MCP authenticates but lists no tools, a query misses older spans, or ingest accepts only one event in ten
---

## Summary

Honeycomb (`honeycomb`) MCP needs Honeycomb Intelligence, the region that holds the data, and scopes that cannot be widened on an existing management key. Free and Pro teams that stay over their monthly event or metric cap for a second month can be throttled to one accepted event in ten. Burst protection hides at most three spike days a month from the cap, and it still stores those events.

## Notes

- **No tools.** An authenticated session with no tools, or every call denied, usually means Honeycomb Intelligence is off. Only a team owner can turn it on. A US client pointed at an EU team, or the reverse, is on the wrong host. OAuth sessions can time out after 24 hours; start a new client session rather than retrying the expired one. A management key has to be `id:secret`, colon included. On the Integrations tab, an OAuth session needs `mcp:read`, or both `environments:read` and `queries:read`.
- **Writes and call caps.** The agent does not see a write tool its scopes omit. Grant OAuth again with write selected. A read-only Honeycomb role cannot grant write. A management key’s scopes are fixed at creation. `X-MCP-Toolset` set to anything other than `all`, `query`, or `canvas` fails the whole connection. Most tools allow 50 calls a minute. `get_service_map` allows 10, and `create_trigger` and `canvas_agent_invoke` allow 20. The error includes when to retry. Limits are subject to change. An API key’s limit is shared by every client using that key. An OAuth limit is per person, across that person’s sessions. The pricing page caps Free at 2 triggers and does not list SLOs or Service Map on Free. Pro lists 2 SLOs and 100 triggers. Service Map and the Query Data API are on the Enterprise list.
- **Ingest, separate from the query.** Each span counts as one event, so a trace with 150 spans is 150 events. Counts use the calendar month, not the billing date. One month over the cap is a warning email. A second consecutive month starts a 10-day warning, then the Event API keeps one event in ten and drops the rest until incoming traffic stays under the daily target for 72 hours. Events and metric data points are tracked apart, and both have to stay under their targets for those 72 hours before throttling stops. Enterprise plans are exempt. Burst protection, up to three days a month for events and three for data points, stops counting the part of a day past twice the daily target. Those events are still stored. A fourth spike counts in full. Events and logs are kept 60 days from ingest time, so a query window older than that is empty even when the timestamp inside the span looks newer.

## Sources

- [Troubleshooting Honeycomb MCP](https://docs.honeycomb.io/integrations/mcp/troubleshooting) — accessed 2026-11-24
- [Connect to Honeycomb MCP](https://docs.honeycomb.io/integrations/mcp/configuration-guide) — accessed 2026-11-24
- [Honeycomb MCP tools](https://docs.honeycomb.io/integrations/mcp/tools) — accessed 2026-11-24
- [Manage team API keys](https://docs.honeycomb.io/configure/teams/manage-api-keys) — accessed 2026-11-24
- [How Honeycomb calculates usage](https://docs.honeycomb.io/get-started/manage-costs/how-honeycomb-calculates-usage) — accessed 2026-11-24
- [Honeycomb pricing](https://www.honeycomb.io/pricing) — accessed 2026-11-24
- [2026 Pro plan changes](https://docs.honeycomb.io/get-started/honeycomb/2026-pro-plan-changes) — accessed 2026-11-24
