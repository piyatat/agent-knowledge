---
id: mcp-stdio-transport
title: MCP stdio transport — stdout is protocol, stderr is logs
tags: [mcp, transport, stdio, reliability]
status: active
updated: 2026-08-26
when_to_use: Implementing or debugging a local MCP subprocess (npx/python/docker) whose stdout must stay JSON-RPC
---

## Summary

On **stdio**, the host launches the server as a subprocess: newline-delimited JSON-RPC on **stdin/stdout**. **stdout is protocol-only** — banners, `print()`, or library logs there are parse errors. Log to **stderr**. `ping` is gone on 2026-07-28; health is process lifetime + retries.

## Notes

- Framing: one JSON-RPC message per line, **no embedded newlines**. Client writes requests/notifications only (never responses). Server writes responses plus request-scoped notifications (`notifications/progress`, `notifications/message`) and `subscriptions/listen` events on the **same** stdout. Server **MUST NOT** emit JSON-RPC *requests* on stdout (use MRTR `InputRequiredResult` instead).
- stderr MAY carry UTF-8 logs; clients MAY ignore it and **SHOULD NOT** treat stderr as failure. Logging capability is deprecated — new servers should not send `notifications/message` unless the request set `io.modelcontextprotocol/logLevel`.
- No HTTP headers: `_meta` (protocolVersion, clientCapabilities, …) lives in the JSON body. Cancellation is `notifications/cancelled` (there is no per-request SSE stream to close).
- Shutdown: client closes stdin, waits, then SIGTERM/SIGKILL (POSIX) or TerminateProcess (Windows). Servers SHOULD exit on stdin EOF. Unexpected exit: client SHOULD restart; in-flight calls are lost (stateless); re-open `subscriptions/listen`.
- Mixed-era clients: probe `server/discover` first. `DiscoverResult` or `UnsupportedProtocolVersionError` (−32022) ⇒ modern; any other error/timeout ⇒ legacy `initialize`. Do not key fallback on one error code.

## Sources

- [MCP stdio (2026-07-28)](https://modelcontextprotocol.io/specification/2026-07-28/basic/transports/stdio) — accessed 2026-08-26
- [MCP changelog 2026-07-28](https://modelcontextprotocol.io/specification/2026-07-28/changelog) — accessed 2026-08-26
- [MCP Logging (deprecated)](https://modelcontextprotocol.io/specification/2026-07-28/server/utilities/logging) — accessed 2026-08-26
