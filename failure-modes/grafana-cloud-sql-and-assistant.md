---
id: grafana-cloud-sql-and-assistant
title: Grafana Cloud MCP changes a database, or Assistant seats run out
kind: knowledge
tags: [grafana, observability, mcp, billing]
status: active
updated: 2026-11-24
when_to_use: A Grafana query changed rows, MCP lists no tools, a second stack never connects, or Assistant chats stop on the free plan
---

## Summary

Grafana Cloud (`grafana-cloud`) MCP can run SQL that modifies a data source when Query is granted, and Write includes that Query scope. Connecting the server counts as an active Grafana Assistant user even when the tool calls spend no tokens. Free stops new Assistant chats after three active AI users or the included tokens, and it does not bill the overage. A second stack that reuses the same endpoint URL is dropped by some clients.

## Notes

- **SQL is not a read.** Read access can query Prometheus, Loki, Tempo, and Pyroscope. Query access is separate because those tools forward the statement unchanged to ClickHouse, Snowflake, Athena, InfluxDB, and similar sources. A modifying statement runs if the data-source credential allows it. Clearing Write and leaving Query selected still allows that. Write includes Query and Read, so a write grant is not dashboard-only. Editors can approve Read and Query on the consent page. Only an organization Admin can approve Write. If a checkbox is missing, the user’s role does not include it.
- **Seats and tokens.** Each person who connects through MCP is an active AI user for the month, once across every stack in the organization, whether or not they spend tokens. A tool call spends Assistant tokens only when it invokes an Assistant model, such as `ask_assistant` or starting an investigation. Read-only Cloud MCP does not spend tokens. Free is limited to 3 active AI users (40 million tokens each) and 25 million tokens of service-account usage. Past that allowance, Free does not bill; new chats and investigations are blocked until the next billing period, and existing chat history stays. Unused per-user tokens do not move to someone else and do not carry over. Pro’s $19 platform fee includes the same three users and the 25 million service-account tokens, then $20 per extra active user and $2 per extra million tokens. System-initiated usage does not count as an active user and does not get the per-user allowance.
- **The wrong stack, or no server.** Self-hosted Grafana does not answer `https://mcp.grafana.com/mcp`. Two client entries that share that URL and differ only by `X-Grafana-URL` can collapse to one connection. Put each stack host in the path instead, and authorize each entry. SSE clients fail because only Streamable HTTP is supported. The OAuth access token lasts 1 hour and the refresh lasts 30 days; after that the user has to approve again. Assistant terms that were never accepted leave the server with nothing to call. A query older than 14 days on Free, or 30 days for logs and traces on Pro, is past the retention on the pricing cards.

## Sources

- [Grafana Cloud MCP server](https://grafana.com/docs/grafana-cloud/ai-tools/mcp-servers/cloud-mcp/) — accessed 2026-11-24
- [Grafana Assistant pricing](https://grafana.com/docs/grafana-cloud/platform/pricing-and-usage/assistant/) — accessed 2026-11-24
- [Grafana Cloud pricing](https://grafana.com/pricing/) — accessed 2026-11-24
- [Logs pricing](https://grafana.com/docs/grafana-cloud/platform/pricing-and-usage/logs/) — accessed 2026-11-24
- [Traces pricing](https://grafana.com/docs/grafana-cloud/platform/pricing-and-usage/traces/) — accessed 2026-11-24
