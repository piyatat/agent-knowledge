---
id: mcp-cancellation
title: MCP cancellation — close SSE vs notifications/cancelled
tags: [mcp, transport, reliability, stateless]
status: active
updated: 2026-08-25
when_to_use: Implementing client abort, request timeouts, or tearing down subscriptions/listen on MCP 2026-07-28
---

## Summary

How you cancel an MCP request depends on **transport**. Streamable HTTP: **closing the SSE response stream** is cancellation (no `notifications/cancelled` expected). stdio: the client **MUST** send `notifications/cancelled` with the in-flight request `id`. Servers send `notifications/cancelled` **only** to end a `subscriptions/listen` stream.

## Notes

- Client payload (stdio): `method: "notifications/cancelled"`, `params.requestId`, optional `reason`. Core protocol defines **no** client→server notifications over Streamable HTTP; disconnect is the signal.
- Server on cancel SHOULD stop work, free resources, and **not** send a result. MAY ignore unknown, already-finished, or un-cancellable IDs. Client SHOULD ignore a late success/error for a cancelled id (races are normal).
- Invalid/malformed cancel notifications SHOULD be ignored (fire-and-forget).
- Timeouts: senders SHOULD cancel after no success/error. MAY reset the clock on `notifications/progress`, but still cap with a maximum timeout.
- `subscriptions/listen`: server MUST emit `notifications/cancelled` referencing the **listen** request id when it tears down that stream; MUST NOT use this notification for anything else.
- `ping` is removed in 2026-07-28 — do not wait for pings as liveness; use timeouts + cancel.

## Sources

- [MCP Cancellation (2026-07-28)](https://modelcontextprotocol.io/specification/2026-07-28/basic/patterns/cancellation) — accessed 2026-08-25
- [MCP Streamable HTTP](https://modelcontextprotocol.io/specification/2026-07-28/basic/transports/streamable-http) — accessed 2026-08-25
- [MCP changelog 2026-07-28](https://modelcontextprotocol.io/specification/2026-07-28/changelog) — accessed 2026-08-25
