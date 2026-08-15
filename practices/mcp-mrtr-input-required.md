---
id: mcp-mrtr-input-required
title: MCP Multi Round-Trip Requests (input_required)
tags: [mcp, elicitation, stateless, tools]
status: active
updated: 2026-08-12
when_to_use: Building stateless MCP tools that need user confirmation or missing params mid-call
---

## Summary

MCP 2026-07-28 replaces server-initiated elicitation/sampling pushes with **Multi Round-Trip Requests (MRTR)**: the tool returns `resultType: "input_required"` plus `inputRequests` and `requestState`; the client retries the same call with `inputResponses`.

## Notes

- Stateless servers cannot hold a stream open to ask the user mid-flight — they must **return early** with structured input needs.
- Carry opaque `requestState` across retries; re-enter the handler and branch on supplied answers.
- `inputRequests` may mix elicitation, roots, and sampling-shaped asks — answers arrive keyed in `inputResponses`.
- New tools should use MRTR; legacy push elicitation is deprecated (≥12 month window).
- Test both first call (needs input) and retry path (answers attached) — most migrations are handler branching, not transport hacks.

## Sources

- [MCP elicitation (2026-07-28)](https://modelcontextprotocol.io/specification/2026-07-28/client/elicitation) — accessed 2026-08-12
- [MCP round-trip requests replace elicitation](https://www.channel.tel/blog/mcp-round-trip-requests-replace-elicitation) — accessed 2026-08-12
- [The 2026-07-28 Specification (MCP Blog)](https://blog.modelcontextprotocol.io/posts/2026-07-28/) — accessed 2026-08-12
