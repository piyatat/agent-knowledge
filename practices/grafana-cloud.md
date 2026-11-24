---
id: grafana-cloud
title: Grafana Cloud — metrics, logs, traces, and a hosted MCP server
kind: service
tags: [grafana, observability, mcp, metrics]
status: active
updated: 2026-11-24
when_to_use: Querying metrics, logs, and traces in a Grafana Cloud stack, or letting an agent use that stack through MCP
---

## Summary

**Grafana Cloud** hosts metrics, logs, traces, and profiles (Prometheus, Loki, Tempo, and Pyroscope) with dashboards and alerts. On the pricing page, Free is limited to 10,000 active series and 50 GB ingested a month each for logs, traces, and profiles, kept 14 days. Pro is a $19 monthly platform fee that includes those amounts, then usage. The hosted MCP server is `https://mcp.grafana.com/mcp` (Streamable HTTP, OAuth). Use Grafana Cloud when the task is one Grafana stack. Use Datadog (`datadog`), Honeycomb (`honeycomb`), or Axiom (`axiom`) when that org is already the source of truth.

## Notes

- **Access.** Create an account at `links.get`. The MCP guide is `links.docs`. The cloud server works only with Grafana Cloud. A self-hosted Grafana uses the local open-source MCP server instead. Assistant has to be available on the stack, and any required Assistant terms have to be accepted before tools appear. The signed-in user needs the Assistant Cloud MCP User role or `grafana-assistant-app.cloud-mcp:access`. Editor and above have that permission by default. The agent’s tools are limited to that user’s Grafana RBAC. Put the stack in the `X-Grafana-URL` header or in the path (`https://mcp.grafana.com/mcp/<stack>.grafana.net`) so consent skips asking for the URL. SSE is not supported.
- **Consent.** The consent page splits Read, Query, and Write, and each box can be cleared. Read covers dashboards, alerts, incidents, and Prometheus, Loki, Tempo, and Pyroscope queries. Query sends SQL to data sources such as ClickHouse, Snowflake, Athena, and InfluxDB unchanged, so a statement that modifies data runs if the data-source credential allows it. Write creates and changes dashboards, alerts, incidents, data sources, and Assistant investigations, and it includes Query and Read. Clearing only Write still leaves SQL. An Editor can grant Read and Query. An organization Admin grants Write. Some clients that need a pre-registered OAuth client have a separate registration step; each user still connects as themselves.
- **Several stacks.** One client entry per stack, with the host in the path. Reusing `https://mcp.grafana.com/mcp` and only changing `X-Grafana-URL` makes some clients, including Cursor and Claude Code, treat the entries as duplicates and load one of them. Each path entry authorizes on its own. The access token lasts 1 hour and refreshes for 30 days; after that the user signs in again. Revoke a connection under Assistant Settings → Connectors → MCP clients.
- **Plans (pricing page, 2026-11-24).** Free is $0 and does not ask for a card: 10,000 active series, 50 GB of logs, 50 GB of traces, and 50 GB of profiles ingested a month, 14-day retention. Pro’s $19 platform fee includes those same amounts, then pay as you go: metrics from $6.50 per 1,000 series, and logs, traces, and profiles from $0.05 per GB processed, $0.40 per GB written, and $0.10 per GB retained. Pro retention on the cards is 13 months for metrics and 30 days for logs, traces, and profiles. The logs and traces pricing docs set the minimum retention at 14 days on free accounts and 30 days on paid accounts; keeping data past 30 days is charged per extra 30-day increment, and a longer window does not bring back data already aged out. Grafana Assistant, which the MCP server belongs to, is capped at 3 active AI users a month on Free (40 million tokens each) plus 25 million tokens for service-account usage. Pro includes the same three users and 25 million tokens, then $20 per extra active AI user (40 million tokens included) and $2 per extra million tokens.
- **Caveats.** Query consent can change a SQL warehouse, connecting MCP spends an Assistant seat even when the tool call spends no tokens, and a self-hosted Grafana will not answer this URL. Details: `grafana-cloud-sql-and-assistant`.

## Sources

- [Grafana Cloud MCP server](https://grafana.com/docs/grafana-cloud/ai-tools/mcp-servers/cloud-mcp/) — accessed 2026-11-24
- [Grafana Assistant pricing](https://grafana.com/docs/grafana-cloud/platform/pricing-and-usage/assistant/) — accessed 2026-11-24
- [Grafana Cloud pricing](https://grafana.com/pricing/) — accessed 2026-11-24
- [Logs pricing](https://grafana.com/docs/grafana-cloud/platform/pricing-and-usage/logs/) — accessed 2026-11-24
- [Traces pricing](https://grafana.com/docs/grafana-cloud/platform/pricing-and-usage/traces/) — accessed 2026-11-24
- [Metrics pricing](https://grafana.com/docs/grafana-cloud/platform/pricing-and-usage/metrics/) — accessed 2026-11-24
- [Create a Grafana Cloud account](https://grafana.com/auth/sign-up/create-user) — accessed 2026-11-24
- [Grafana Cloud](https://grafana.com/products/cloud/) — accessed 2026-11-24
