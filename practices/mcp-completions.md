---
id: mcp-completions
title: MCP completion/complete for prompts and resource templates
tags: [mcp, ux, prompts, resources]
status: active
updated: 2026-08-22
when_to_use: Adding host autocomplete for prompt arguments or resource URI template variables
---

## Summary

`completion/complete` is host UX, not a model tool. Servers that advertise `completions` suggest values for **prompt arguments** and **resource template** variables as the user types. It does not complete `tools/call` arguments.

## Notes

- Refs: `ref/prompt` + prompt `name`, or `ref/resource` + URI / URI template. `argument.name` / `argument.value` is the field being typed. Pass already-filled fields in `context.arguments` so suggestions can depend on prior picks (language → framework).
- Result: `values` (max 100), optional `total`, `hasMore`. Rank by relevance; return `None`/empty when there is nothing to offer (not an error). Missing capability ⇒ JSON-RPC `-32601`.
- Advertise `completions: {}` in server capabilities (SDKs often do this when you register a handler). One handler per server is typical — branch on ref type and argument name.
- Clients should debounce, cache short-lived results, and rate-limit. Servers **MUST** validate inputs and avoid leaking sensitive names through suggestions (paths, tenant ids, secrets).
- This is complementary to tools/resources/prompts: prompts stay user-triggered templates; completions only fill their args. Do not invent a “complete this tool schema” RPC — that is not this primitive.

## Sources

- [MCP completion (2026-07-28)](https://modelcontextprotocol.io/specification/2026-07-28/server/utilities/completion) — accessed 2026-08-22
- [MCP TypeScript SDK — Completion](https://ts.sdk.modelcontextprotocol.io/v2/servers/completion.html) — accessed 2026-08-22
- [MCP Python SDK — Completions](https://py.sdk.modelcontextprotocol.io/v2/servers/completions/) — accessed 2026-08-22
