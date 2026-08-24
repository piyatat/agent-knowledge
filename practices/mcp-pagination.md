---
id: mcp-pagination
title: MCP opaque cursor pagination
tags: [mcp, transport, reliability, tokens]
status: active
updated: 2026-08-24
when_to_use: Implementing or consuming tools/list, prompts/list, resources/list, or resources/templates/list with large catalogs
---

## Summary

MCP list RPCs use **opaque cursor** pagination, not page numbers or a client `limit`. The server chooses page size. Clients **MUST** treat `cursor` / `nextCursor` as tokens: never parse, mint, or guess them.

## Notes

- Paginated methods: `resources/list`, `resources/templates/list`, `prompts/list`, `tools/list`. First request omits `cursor`. More pages exist iff `nextCursor` is present.
- A missing `nextCursor` ends the list. An **empty string** is still a valid cursor and **MUST NOT** be treated as end-of-results.
- Invalid cursors **SHOULD** be JSON-RPC `-32602`. Servers **SHOULD** keep cursors stable for a given result set and handle stale tokens gracefully.
- Clients **SHOULD** support both one-shot (small lists, no cursor) and drain-until-absent loops. Do not assume a fixed page size across servers or calls.
- Each page is independently cacheable: own `ttlMs` clock; `cacheScope` **MUST** match across pages of one list. Include `cursor` in the cache key.
- Large tool catalogs: paginate at the protocol, then apply progressive disclosure / tool search in the host so page 1 is not dumped into the model prefix.
- Python SDK: high-level `MCPServer` often returns everything in one page; pagination is opt-in on the low-level `Server`.

## Sources

- [MCP pagination (2026-07-28)](https://modelcontextprotocol.io/specification/2026-07-28/server/utilities/pagination) — accessed 2026-08-24
- [MCP tools/list pagination](https://modelcontextprotocol.io/specification/2026-07-28/server/tools) — accessed 2026-08-24
- [MCP Python SDK — Pagination](https://py.sdk.modelcontextprotocol.io/v2/advanced/pagination/) — accessed 2026-08-24
