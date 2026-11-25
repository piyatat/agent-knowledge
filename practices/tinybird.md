---
id: tinybird
title: Tinybird — managed ClickHouse queries published as APIs
kind: service
tags: [tinybird, analytics, clickhouse, mcp]
status: active
updated: 2026-11-25
when_to_use: Publishing SQL over event data as an API, or letting an agent query a Tinybird workspace
---

## Summary

**Tinybird** hosts ClickHouse and turns SQL into HTTP endpoints, plus a remote MCP server agents can call. A free organization has no time limit and shares one plan across its workspaces in a single region. Use Tinybird when the product is the API in front of the table. Use ClickHouse Cloud (`clickhouse-cloud`) when you want the warehouse and a read-only MCP. Use MotherDuck (`motherduck`) when the workload is DuckDB and the agent may write.

## Notes

- **Access.** Sign up at `links.get`. On 2026-11-25 that URL redirected to the Tinybird login with `screen_hint=signup` and no one-time token. `https://www.tinybird.co/signup` redirects there. API calls use a static token or a JWT as `Authorization: Bearer`. The hosted MCP server is `https://mcp.tinybird.co` (Streamable HTTP). A `token` query parameter is accepted, and if it is present the server ignores the `Authorization` header. JWTs do not carry a region. Outside the default region the URL also needs `host` set to a Tinybird regional API hostname; other hosts are rejected.
- **What the agent can run.** Tool list follows the token. An admin token exposes every tool, including `execute_query`, which sends the caller’s SQL to the Query API (`/v0/sql`). The Query API expects a token with a read scope. A token without one, such as an append-only token, gets HTTP 403 even when the SQL names no data source. `text_to_sql` spends LLM credits. `call_endpoint` calls a published endpoint and rejects parameters that endpoint does not define.
- **Plans (docs and pricing page, 2026-11-25).** Free is shared infrastructure, 0.25 vCPU with burst up to 3×, 1,000 requests a day per organization, 10 GB storage, 1 thread, and $25 of LLM credits per billing cycle. The pricing page shows two Developer starting figures: a card at $49 a month for 0.5 vCPU, and a table header of starting at $25 a month with sizes from 0.25 to 8 vCPUs. The Developer doc says you pick the size in billing. Developer includes 25 GB, then storage at $0.058/GB, vCPU overage at $0.0002 a second, and $100 of LLM credits then billed at cost. Developer and SaaS list unlimited queries a day. Another region is a separate organization and its own plan. SaaS and Enterprise are sales contracts.
- **Caveats.** The daily query cap, the vCPU burst, and the LLM credits are different meters. Details: `tinybird-free-query-and-mcp-token`.

## Sources

- [Tinybird free plan](https://www.tinybird.co/docs/forward/pricing/free) — accessed 2026-11-25
- [Tinybird Developer plan](https://www.tinybird.co/docs/forward/pricing/developer) — accessed 2026-11-25
- [Tinybird limits](https://www.tinybird.co/docs/forward/pricing/limits) — accessed 2026-11-25
- [Tinybird MCP](https://www.tinybird.co/docs/forward/query-data/mcp) — accessed 2026-11-25
- [Tinybird Query API](https://www.tinybird.co/docs/forward/query-data/sql-api) — accessed 2026-11-25
- [Tinybird pricing](https://www.tinybird.co/pricing) — accessed 2026-11-25
- [Tinybird sign-up](https://cloud.tinybird.co/signup) — accessed 2026-11-25
- [Tinybird](https://www.tinybird.co/) — accessed 2026-11-25
