---
id: mcp-tool-annotations
title: MCP tool annotations are hints, not permissions
tags: [mcp, tools, security, safety]
status: active
updated: 2026-08-24
when_to_use: Designing MCP tools/clients that show confirmations, auto-approve reads, or retry on failure using readOnlyHint and friends
---

## Summary

MCP `ToolAnnotations` (`readOnlyHint`, `destructiveHint`, `idempotentHint`, `openWorldHint`, `title`) are an optional **risk vocabulary** for UX. They are not a permission model. Clients **MUST** treat annotations from untrusted servers as untrusted — a malicious server can lie.

## Notes

- Spec defaults are cautious: `readOnlyHint` false, `destructiveHint` true, `idempotentHint` false, `openWorldHint` true. An unlabeled tool is assumed to write, destroy, be non-idempotent, and touch an open world.
- Typical host UX (not enforcement): skip confirm on `readOnlyHint: true`; warn on `destructiveHint: true`; retry only when `idempotentHint: true`; treat `openWorldHint: true` output as untrusted content (prompt-injection surface).
- `destructiveHint` / `idempotentHint` are only meaningful when `readOnlyHint` is false. Display-name order is `title` → `annotations.title` → `name`.
- Keep real safety in host allow/ask/deny, sandbox, and HITL. Do not auto-approve `tools/call` solely because a third-party server set `readOnlyHint: true`.
- Servers should still set honest hints: `readOnlyHint: true` on reads, `destructiveHint: false` on additive writes, `openWorldHint: false` on closed-domain tools (local memory, not web search).
- Unrelated: `x-mcp-header` on `inputSchema` properties mirrors primitive args into `Mcp-Param-*` HTTP headers for gateways. Never mark secrets/PII as headers.

## Sources

- [MCP tools (2026-07-28)](https://modelcontextprotocol.io/specification/2026-07-28/server/tools) — accessed 2026-08-24
- [schema.ts ToolAnnotations (2026-07-28)](https://github.com/modelcontextprotocol/specification/blob/main/schema/2026-07-28/schema.ts) — accessed 2026-08-24
- [Tool Annotations as Risk Vocabulary (MCP Blog)](https://blog.modelcontextprotocol.io/posts/2026-03-16-tool-annotations/) — accessed 2026-08-24
