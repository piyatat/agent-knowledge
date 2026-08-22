---
id: tool-search-defer-loading
title: Tool search and defer_loading
tags: [tools, tokens, mcp, caching]
status: active
updated: 2026-08-22
when_to_use: Large function/MCP catalogs blow the prefix or invalidate prompt cache when the tool list changes
---

## Summary

OpenAI **tool search** (gpt-5.4+) keeps a lean index in context and loads full schemas only after the model searches. Mark expensive definitions with `defer_loading: true` and inject discovered tools at the **end** of the window so the cached prefix survives.

## Notes

- Enable with `{ "type": "tool_search" }` plus `defer_loading: true` on functions, namespace members, or the MCP server tool. Calling a deferred tool before search fails schema validation.
- Prefer **namespaces** or **MCP servers** over a flat list of deferred functions: models are trained to search those surfaces, and the prefix then shows only the namespace/server name + description (not every parameter schema).
- Keep namespaces small (OpenAI guidance: under ~10 functions) with a high-level description of what is inside.
- Hosted tool search: the provider loads matches in the same response. Client-executed search: the model emits `tool_search_call`; your app returns `tool_search_output` (use this when availability depends on tenant, permissions, or an internal registry).
- Loaded schemas append rather than rewrite the tools array — that is the cache-preservation trick. Mutating the front-of-prompt tools list on every turn busts the cache.
- Tool search is a top-level Responses tool, not callable from inside programmatic JS. Load deferred tools **before** starting a program that needs them.

## Sources

- [Tool search (OpenAI)](https://developers.openai.com/api/docs/guides/tools-tool-search) — accessed 2026-08-22
- [API deployment checklist — use tool_search](https://developers.openai.com/api/docs/guides/deployment-checklist) — accessed 2026-08-22
- [Programmatic Tool Calling (deferred tools vs programs)](https://developers.openai.com/api/docs/guides/tools-programmatic-tool-calling) — accessed 2026-08-22
