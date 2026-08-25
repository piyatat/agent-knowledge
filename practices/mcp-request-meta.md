---
id: mcp-request-meta
title: MCP per-request _meta (protocolVersion, capabilities, logLevel)
tags: [mcp, stateless, transport, observability]
status: active
updated: 2026-08-25
when_to_use: Debugging 400/-32602 on MCP 2026-07-28 or implementing clients that no longer send initialize
---

## Summary

After sessions/`initialize` went away, **every client request** carries protocol identity in `_meta`. Required: `io.modelcontextprotocol/protocolVersion` and `io.modelcontextprotocol/clientCapabilities`. Optional: `clientInfo`, `logLevel`. Missing required fields → JSON-RPC `-32602` and HTTP **400**. Servers SHOULD echo `io.modelcontextprotocol/serverInfo` on results.

## Notes

- `clientCapabilities` is **per request**. Empty object = no extra client features. If the server needs a capability the client omitted, return `MissingRequiredClientCapabilityError` (`-32021`) with `data.requiredCapabilities`; HTTP 400.
- `clientInfo` / `serverInfo` are for logs/UI. SHOULD send `clientInfo` unless configured off. MUST NOT use them for security decisions (self-reported).
- **Logging (deprecated):** `io.modelcontextprotocol/logLevel` opts that request into `notifications/message` on **its** response stream only. Absent ⇒ server MUST NOT emit log notifications for that request. `logging/setLevel` and `ping` are gone. New code SHOULD log to stderr (stdio) or OpenTelemetry instead of adopting Logging. Invalid level → `-32602`.
- `progressToken` and OTel `traceparent`/`tracestate`/`baggage` are also `_meta` (see sibling notes). Subscription notifications MUST include `io.modelcontextprotocol/subscriptionId`.
- Reserved key prefixes (`io.modelcontextprotocol/`, …) are not for app fields. Vendor extensions use their own prefix.
- Header `Mcp-Protocol-Version` still applies on HTTP; body `_meta` protocolVersion must match the revision the server will speak.

## Sources

- [MCP Basic — _meta (2026-07-28)](https://modelcontextprotocol.io/specification/2026-07-28/basic) — accessed 2026-08-25
- [MCP Logging (deprecated)](https://modelcontextprotocol.io/specification/2026-07-28/server/utilities/logging) — accessed 2026-08-25
- [MCP changelog 2026-07-28](https://modelcontextprotocol.io/specification/2026-07-28/changelog) — accessed 2026-08-25
