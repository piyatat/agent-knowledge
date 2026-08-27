---
id: mcp-state-handle-hijacking
title: MCP state-handle hijacking (cart IDs, workflow IDs)
tags: [mcp, security, stateless, failure-modes]
status: active
updated: 2026-08-27
when_to_use: Minting cross-request IDs in a 2026-07-28 MCP tool (cart, job, conversation) that the client sends back later
---

## Summary

Stateless MCP has no protocol session. Cross-call state is an ID in tool args. **Possession of that handle is not authentication.** If the server does not bind the handle to the verified caller, anyone who guesses or steals it operates on another user's state.

## Notes

- Pattern: server mints a shopping-cart / workflow ID, returns it in the tool result, client sends it on the next `tools/call`. Attacker obtains or guesses the ID and calls the same tools.
- Servers that implement authorization **MUST** verify every inbound request and **MUST NOT** treat the handle as proof of identity. Bind server-side as `<user_id>:<handle>` where `user_id` comes from the **token**, not from client-supplied fields. Reject handles presented by any other principal.
- Use cryptographically random, non-sequential IDs; expire them. Predictable integers are enumerable.
- Same class as MRTR `requestState`: the client is an untrusted courier. If the blob affects auth or business logic, HMAC/AEAD it and reject failed verification (`mcp-mrtr-input-required`).
- Pre-2026 `Mcp-Session-Id` hijacking is a different (legacy) control; do not revive sessions to paper over missing handle binding.

## Sources

- [MCP Security Best Practices — State Handle Hijacking](https://modelcontextprotocol.io/docs/2026-07-28/tutorials/security/security_best_practices) — accessed 2026-08-27
- [MCP Base Protocol — Statelessness (2026-07-28)](https://modelcontextprotocol.io/specification/2026-07-28/basic) — accessed 2026-08-27
- [MCP MRTR — requestState integrity](https://modelcontextprotocol.io/specification/2026-07-28/basic/patterns/mrtr) — accessed 2026-08-27
