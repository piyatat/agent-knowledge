---
id: parallel-search-default-mode
title: A Parallel search bills advanced mode, or the v1 body returns 422
kind: knowledge
tags: [parallel, search, billing, mcp]
status: active
updated: 2026-11-20
when_to_use: A Parallel search costs five times the fast rate, returns 422, or the EU host rejects the mode
---

## Summary

Parallel Search (`parallel-search`) defaults to `advanced` when `mode` is omitted: about 3 seconds and **$5 / 1,000** requests, five times `fast` or `turbo`. New `/v1/search` and `/v1/extract` bodies also reject the older field layout with **422**. The hosted MCP `web_search` tool does not share that default: it uses `fast` unless an override sets `mode`.

## Notes

- **Set the mode.** Docs tell most agents to send `"mode": "fast"` (~700 ms, **$1 / 1,000**). Use `turbo` (~200 ms, same price) for high-volume lookups. `turbo` currently covers English and Japanese; other languages should use `basic` or `advanced`. `basic` and `advanced` are **$5 / 1,000**, and each result past the included 10 adds **$1 / 1,000**. The quickstart sample omits `mode`, so it runs `advanced`. Scale’s 1,500/min Search cap excludes Turbo.
- **v1 shape.** `search_queries` is required: one to five keyword queries, and the docs want 3–6 words each. A request with only `objective` returns **422**. Queries after the fifth are dropped with a warning. `max_results`, `source_policy`, and `fetch_policy` belong inside `advanced_settings`. The same top-level v1beta names on `/v1/search` return **422**. On `/v1/extract`, `full_content`, `fetch_policy`, and `excerpt_settings` also move under `advanced_settings`. Keep FindAll and Ingest on their documented paths.
- **Query shape.** Copying the user’s question into both `objective` and the only `search_queries` entry is the pitfall the eval guide calls out. `objective` is the goal (up to 5,000 characters). Each query is a short keyword string (max 200 characters).
- **Region and retention.** `https://eu.parallel.ai` supports only `basic`. Zero data retention is off unless Scale Hybrid ZDR is enabled by a signed agreement (synchronous APIs then keep no content; asynchronous APIs may keep it up to 8 days) or an Enterprise contract says otherwise. MCP `web_research` follow-ups are unavailable for organizations with zero data retention on.
- **Which bill.** Launch MCP calls without a key are free and rate-limited. OAuth and API-key calls spend signup credit and the **$5** monthly allowance before published rates. Scale monthly credits expire at the end of the paid month.

## Sources

- [Search modes](https://docs.parallel.ai/search/modes) — accessed 2026-11-20
- [Search API best practices](https://docs.parallel.ai/search/best-practices) — accessed 2026-11-20
- [Search API quickstart](https://docs.parallel.ai/search/search-quickstart) — accessed 2026-11-20
- [API pricing](https://docs.parallel.ai/getting-started/pricing) — accessed 2026-11-20
- [Pricing](https://parallel.ai/pricing) — accessed 2026-11-20
- [Parallel MCP server](https://docs.parallel.ai/integrations/mcp/quickstart) — accessed 2026-11-20
