---
id: notion-mcp-plan-and-rate-limit
title: Notion MCP drops a filter, rate-limits, or the SSE URL fails
kind: knowledge
tags: [notion, mcp, rate-limit, plans]
status: active
updated: 2026-11-21
when_to_use: Notion MCP returns rate_limited, drops a search filter, or a client still uses the SSE endpoint
---

## Summary

Notion MCP (`notion-mcp`) is on every plan, but several tools and the request budget are not. A client still pointed at the legacy SSE URL stops working on **23 February 2027**.

## Notes

- **Who can connect.** Only workspace members can complete authorization. A guest sees a refusal. MCP tokens exist on Business and Enterprise, and only a workspace owner can create one. Enterprise-managed authorization needs Enterprise plus SAML SSO. Other plans stay on interactive OAuth.
- **Silent plan gaps.** Connected-source search (`notion-connector-search`) needs Business or Enterprise with Notion AI. SQL queries are unlimited only on those same plans; other plans get a limited number of SQL queries on one data source at a time. Search filters such as last edited by and last edited date are Business and Enterprise only. On other plans Notion drops those filters and the tool result says so. A search that looks complete may have ignored the filter.
- **Rate limits.** Each tool call spends the API budget: 600 requests per minute per connection on Business and Enterprise, 180 on other plans, in a fixed 60-second window. A second limit is shared by every connection in the workspace, so one busy connection can throttle another. `Retry-After` for the per-connection window is at most 60 seconds; the workspace limit can ask for longer. Notion MCP retries once only when that wait is 2 seconds or less. Otherwise the tool error is `rate_limited`, with `retry_after_seconds` when known and `rate_limit_reason` naming the limit (`mcp_tool_rate_limit` is one of the reasons). Parallel tool calls are what usually hit it.
- **SSE.** `https://mcp.notion.com/sse` retires on 23 February 2027. Move the client to Streamable HTTP at `https://mcp.notion.com/mcp` and sign in again. A client that can only speak SSE needs a newer client. `GET /mcp` is not the transport; Notion returns HTTP 405 for that request.

## Sources

- [Connect to Notion MCP](https://developers.notion.com/guides/mcp/get-started-with-mcp) — accessed 2026-11-21
- [Notion MCP rate limits](https://developers.notion.com/guides/mcp/rate-limits) — accessed 2026-11-21
- [Request limits](https://developers.notion.com/reference/request-limits) — accessed 2026-11-21
- [Build an MCP client for Notion](https://developers.notion.com/guides/mcp/build-mcp-client) — accessed 2026-11-21
