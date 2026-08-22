---
id: mcp-list-caching
title: MCP list/read caching (ttlMs and cacheScope)
tags: [mcp, caching, tokens, transport]
status: active
updated: 2026-08-22
when_to_use: Implementing or consuming 2026-07-28 tools/list, prompts/list, resources/*, or server/discover without leaking cross-user cache
---

## Summary

On MCP 2026-07-28, complete results for `server/discover`, `tools/list`, `prompts/list`, `resources/list`, `resources/templates/list`, and `resources/read` **MUST** carry `ttlMs` and `cacheScope`. That is HTTP-style freshness for *protocol lists*, not LLM prompt-prefix caching.

## Notes

- `ttlMs` is a freshness **hint** (like `max-age`), not a promise the data is unchanged. `0` or absent (old servers) = immediately stale. Negative values: treat as `0`. Do not use TTL as a polling interval; if you poll, add jitter.
- `cacheScope`: `"public"` may be stored and served to **any** user (including via a shared gateway). `"private"` is reusable only in the same authorization context (different access token ⇒ different cache). Never use `cacheScope` as an access-control lock.
- Mark tool/prompt/template lists `"public"` only when identical for every caller. User-filtered lists and most `resources/read` bodies should be `"private"`. A `"public"` authenticated `tools/list` **may** be reused across tokens.
- Cache key = method + result-affecting params (`uri`, list `cursor`). **MUST NOT** cache MRTR retries (`inputResponses` / `requestState`) or `input_required` interim results.
- Pagination: each page has its own TTL clock; `cacheScope` **MUST** be the same on every page of one list. A `list_changed` (or equivalent) notification **invalidates** a still-fresh cache. SDK defaults are often `ttlMs: 0`, `cacheScope: "private"` (always safe).
- Stable `tools/list` order (spec SHOULD) also helps *prompt* cache hits — complementary, not the same mechanism.

## Sources

- [MCP caching (2026-07-28)](https://modelcontextprotocol.io/specification/2026-07-28/server/utilities/caching) — accessed 2026-08-22
- [SEP-2549 TTL for list results](https://modelcontextprotocol.io/seps/2549-TTL-for-list-results) — accessed 2026-08-22
- [MCP Python SDK — caching hints](https://py.sdk.modelcontextprotocol.io/client/caching/) — accessed 2026-08-22
