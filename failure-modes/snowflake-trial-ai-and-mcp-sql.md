---
id: snowflake-trial-ai-and-mcp-sql
title: A Snowflake trial has no Cortex, or MCP SQL was not what it looked like
kind: knowledge
tags: [snowflake, mcp, billing, warehouse]
status: active
updated: 2026-11-27
when_to_use: A Snowflake trial rejected Cortex, an MCP analyst call did not return rows, or a SQL tool changed data
---

## Summary

Snowflake (`snowflake`) leaves AI features off on a self-service trial until a credit card is added. That card does not upgrade the account. A Cortex Analyst MCP tool returns SQL text and does not run it. The SQL execution tool runs queries, and it can write when `read_only` is turned off. The server speaks MCP revision `2025-11-25` and returns tool results as a stream.

## Notes

- **A new trial cannot call Cortex.** The trial-accounts page says AI features are disabled by default. Adding a credit card enables them. The same page says that card does not end the trial and does not convert the account to paid. Upgrade is a later action. After the trial ends without an upgrade, login still works and queries do not. Unused free usage expires.
- **Analyst output is not a result set.** A directly exposed Cortex Analyst tool generates SQL and returns the statement to the client. Rows appear only if something executes that statement. The SQL execution tool does run queries. `read_only` defaults to true. If it is false, and the account parameter has not forced read-only, the tool can change data. It uses the configured warehouse or the user’s default warehouse, and that warehouse bills Platform Credits.
- **The client has to speak this server’s revision.** Snowflake supports MCP revision `2025-11-25`. It does not support dynamic client registration, resources, prompts, roots, or sampling. Since 2026-08-20, `tools/call` answers with Server-Sent Events, not one JSON body. A synchronous call times out after 15 minutes. A run that needs longer sets `background` to true and polls the supplementary status tool. An omitted permission decision is a denial.
- **The hostname and the role are easy to get wrong.** The account URL uses hyphens. An underscore in the host does not reach the server. The OAuth session uses the user’s `DEFAULT_ROLE` when the client requests `session:role:all`, which some clients always do. Agent runs through MCP share the account limit of 1,000 requests per minute plus a 500-request burst. HTTP 429 is that shared limit, not a per-tool limit.

## Sources

- [Trial accounts](https://docs.snowflake.com/en/user-guide/admin-trial-account) — accessed 2026-11-27
- [Snowflake-managed MCP server](https://docs.snowflake.com/en/user-guide/snowflake-cortex/cortex-agents-mcp) — accessed 2026-11-27
- [Cortex Agents](https://docs.snowflake.com/en/user-guide/snowflake-cortex/cortex-agents) — accessed 2026-11-27
- [Snowflake AI pricing](https://docs.snowflake.com/en/user-guide/snowflake-cortex/pricing) — accessed 2026-11-27
