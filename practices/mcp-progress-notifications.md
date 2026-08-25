---
id: mcp-progress-notifications
title: MCP progressToken and notifications/progress
tags: [mcp, transport, ux, reliability]
status: active
updated: 2026-08-25
when_to_use: Adding long-running MCP request progress bars or debugging missing notifications/progress
---

## Summary

MCP progress is **opt-in and request-scoped**. The client puts a unique `progressToken` in the request `_meta`. The server **MAY** then emit `notifications/progress` on **that request’s response stream** (not on `subscriptions/listen`). After the final result, progress **MUST** stop.

## Notes

- Token: string or integer, unique among **active** requests. Include it only when the client will display/rate-limit updates.
- Notification params: same `progressToken`, `progress` (MUST increase each time even if total is unknown), optional `total`, optional human `message`. Values MAY be floats.
- Server MAY send nothing, MAY omit `total`, MAY pick any frequency. Clients/servers SHOULD rate-limit to avoid flooding.
- Do not look for progress on `subscriptions/listen`. List/resource change events live there; progress and `notifications/message` stay on the originating RPC’s SSE/stdio stream.
- Timeouts (see `mcp-cancellation`) MAY reset when a progress notification arrives, but implementations SHOULD still enforce a **maximum** timeout so a chatty misbehaving peer cannot hang forever.
- Not a Tasks extension substitute: progress is for one in-flight JSON-RPC request. Multi-hour work belongs in `io.modelcontextprotocol/tasks` plus poll/`tasks/get`.

## Sources

- [MCP Progress (2026-07-28)](https://modelcontextprotocol.io/specification/2026-07-28/basic/patterns/progress) — accessed 2026-08-25
- [MCP Streamable HTTP](https://modelcontextprotocol.io/specification/2026-07-28/basic/transports/streamable-http) — accessed 2026-08-25
- [MCP changelog 2026-07-28](https://modelcontextprotocol.io/specification/2026-07-28/changelog) — accessed 2026-08-25
