---
id: snowflake
title: Snowflake — governed warehouse with a managed MCP server
kind: service
tags: [snowflake, warehouse, mcp, analytics]
status: active
updated: 2026-11-27
when_to_use: Querying a warehouse that already holds the data, or exposing Cortex tools to an external agent
---

## Summary

**Snowflake** is a hosted data warehouse. Each account can expose a managed MCP server that serves Cortex Analyst, Cortex Search, Cortex Agents, a coding agent, custom tools, and SQL. The server speaks MCP revision `2025-11-25` and does not support dynamic client registration. Agent runs bill AI Credits. SQL still bills a virtual warehouse in Platform Credits. A self-service trial leaves AI features off until a credit card is on the account. Use Snowflake when the tables and the governance already live there. Use Airbyte (`airbyte`) to load those tables on a schedule. Use ClickHouse Cloud (`clickhouse-cloud`) or MotherDuck (`motherduck`) for a separate analytics database.

## Notes

- **Access.** Sign up at `links.get`. On 2026-11-27 that URL stayed on itself with HTTP 200 and the title Snowflake Trial. The trial-accounts page says a valid email is enough and no payment method is required. Signup chooses the cloud, region, and edition. The MCP URL is `https://<account_url>/api/v2/databases/{database}/schemas/{schema}/mcp-servers/{name}`. The account host uses hyphens, not underscores. Auth is OAuth. There is no dynamic client registration. A confidential client (Cursor, VS Code) sends a client secret. A public client (Claude Desktop) uses PKCE. One security integration can be shared across users and MCP servers in the account. Each user still signs in as themselves.
- **Trial.** The trial lasts 30 days from signup or until the free usage balance is gone, whichever is first. The trial-accounts page does not print a dollar amount for that balance. When it ends, the account is suspended: login still works, and warehouses, loads, and queries do not. A suspended trial needs a card and then an upgrade. Adding a card turns AI features on and does not end the trial or convert the account. Upgrade is a separate step. It ends the trial, moves the account to on-demand billing, and keeps any remaining free credits. Unused balance expires if the account is not upgraded before the trial ends. Trial accounts also lack external network access, hybrid tables, outbound private connectivity, Snowflake Openflow, and Duo MFA. Details: `snowflake-trial-ai-and-mcp-sql`.
- **What you pay.** AI Credits are $2.00 each with global routing (`ANY_REGION`, `AWS_GLOBAL`, `GCP_GLOBAL`, or `AZURE_GLOBAL`) and $2.20 with regional routing. Capacity discounts do not apply to AI Credits. Cortex Agents bill AI Credits per million tokens. The page does not print one rate for every model. The cost of the tools the agent calls is added on top. Cortex Search serving and embedding stay at the regional AI Credit price even when cross-region routing is on. A standalone Cortex Analyst API call is billed per 1,000 messages in Platform Credits. Running the SQL it produces still uses a warehouse. Platform Credit prices vary by edition and region. The pricing example uses $3.00 per Enterprise Platform Credit and is an illustration, not a universal rate.
- **What MCP can change.** A Cortex Analyst tool returns a SQL statement to the client. It does not run that statement. The SQL execution tool runs queries. Its `read_only` setting defaults to true, so only `SELECT` is allowed, unless the account forces read-only. With read-only off, the tool can change data. The tool uses the warehouse in its configuration, or the connecting user’s default warehouse. The role needs `SNOWFLAKE.CORTEX_USER` or `SNOWFLAKE.CORTEX_AGENT_USER`, plus `USAGE` on that warehouse. An agent tool can wait on a permission prompt. A missing decision is treated as a denial. `background: true` returns a run handle. Supplementary tools can read status, fetch the result, or cancel. They are added automatically and do not count toward the 50-tool cap.
- **Limits.** Cortex Agents REST calls, including MCP agent runs, share 1,000 requests per minute per account, with a 500-request burst. Each run counts once, no matter how many tools it calls. Over the limit the API can return HTTP 429. A synchronous `tools/call` times out after 15 minutes. Since 2026-08-20, tool results are a Server-Sent Events stream, with a keep-alive comment about every 5 seconds. The server does not implement resources, prompts, roots, or sampling. Generic-tool and SQL responses truncate at 250 KB. MCP arguments cannot pass the per-request variables the REST API uses for people who do not have Snowflake users. The session’s primary role is the user’s `DEFAULT_ROLE` unless the client can request another advertised scope. Some clients always request `session:role:all`.

## Sources

- [Snowflake-managed MCP server](https://docs.snowflake.com/en/user-guide/snowflake-cortex/cortex-agents-mcp) — accessed 2026-11-27
- [Cortex Agents](https://docs.snowflake.com/en/user-guide/snowflake-cortex/cortex-agents) — accessed 2026-11-27
- [Cortex Agents Run API](https://docs.snowflake.com/en/user-guide/snowflake-cortex/cortex-agents-run) — accessed 2026-11-27
- [Snowflake AI pricing](https://docs.snowflake.com/en/user-guide/snowflake-cortex/pricing) — accessed 2026-11-27
- [Trial accounts](https://docs.snowflake.com/en/user-guide/admin-trial-account) — accessed 2026-11-27
- [Snowflake trial sign-up](https://signup.snowflake.com/) — accessed 2026-11-27
- [Snowflake](https://www.snowflake.com/) — accessed 2026-11-27
