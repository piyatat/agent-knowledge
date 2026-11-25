---
id: tinybird-free-query-and-mcp-token
title: Tinybird stopped an LLM call, or MCP kept using the token in the URL
kind: knowledge
tags: [tinybird, analytics, mcp, billing]
status: active
updated: 2026-11-25
when_to_use: A Tinybird query returned 429, an MCP SQL call returned 403, or text-to-SQL stopped after the free credits
---

## Summary

Tinybird (`tinybird`) meters daily queries, vCPU burst, and LLM credits separately. A free organization is emailed after 1,000 queries a day, and that page does not say those queries are rejected. A burst past 3× vCPU returns HTTP 429, and LLM calls stop when the $25 credits are gone. The hosted MCP server prefers a token in the URL over the `Authorization` header, and a JWT without a regional host fails closed.

## Notes

- **Three meters.** The limits page emails a free organization after 75% and after 100% of 1,000 queries a day. It does not say the query over the cap is rejected. The free-plan page calls the 3× vCPU burst a hard limit: requests past it return HTTP 429. LLM use inside MCP and Explorations stops when the $25 of credits for the cycle are gone and starts again next cycle. Developer plans include $100 of LLM credits and then bill at cost. Free queries are limited to 10 seconds. Developer queries are limited to 20 seconds, and a burst past the plan’s ceiling also returns HTTP 429.
- **Which 429.** Cluster Control can cap a single endpoint and return HTTP 429 while the cluster is under memory or CPU pressure. Ingestion and query rate limits return HTTP 429 with `Retry-After`. The limits page allows 1,000 `POST /v0/events` calls a second. The pricing table lists the Developer Events API at 100 requests a second. Plan against the lower figure until those pages match. Fast endpoints whose p90 stayed at or under 200 ms for 48 hours are forced to one thread. A `SETTINGS max_threads` clause in the pipe does not lift that. A `max_threads` query parameter or the pipe template function does, up to the plan’s thread cap. Free is already capped at one thread.
- **MCP auth.** If the MCP URL contains `token`, the server ignores `Authorization`. Rotating the header does not rotate the credential the server uses. A JWT used outside the default region needs `host` set to a Tinybird regional API host. Without it the error is an invalid token and “Workspace with ID … not found.” An admin token exposes `execute_query`. The Query API returns HTTP 403 for a token that lacks a read scope, even when the SQL names no data source. A second region is a new organization with its own plan, not a workspace on the current bill.

## Sources

- [Tinybird free plan](https://www.tinybird.co/docs/forward/pricing/free) — accessed 2026-11-25
- [Tinybird Developer plan](https://www.tinybird.co/docs/forward/pricing/developer) — accessed 2026-11-25
- [Tinybird limits](https://www.tinybird.co/docs/forward/pricing/limits) — accessed 2026-11-25
- [Tinybird MCP](https://www.tinybird.co/docs/forward/query-data/mcp) — accessed 2026-11-25
- [Tinybird Query API](https://www.tinybird.co/docs/forward/query-data/sql-api) — accessed 2026-11-25
- [Tinybird pricing](https://www.tinybird.co/pricing) — accessed 2026-11-25
