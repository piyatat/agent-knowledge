---
id: mcp-streamable-http-transport
title: MCP Streamable HTTP transport
tags: [mcp, transport, stateless]
status: active
updated: 2026-08-15
when_to_use: Choosing or migrating MCP remote transport away from legacy HTTP+SSE
---

## Summary

Prefer **Streamable HTTP** for remote MCP. Legacy HTTP+SSE is deprecated; the 2026-07-28 core is stateless and expects method/name headers per request.

## Notes

- Carry `Mcp-Protocol-Version`, `Mcp-Method`, and `Mcp-Name` on POSTs; reject header/body mismatches.
- Do not rely on session ids or SSE Last-Event-ID resume.
- Use subscriptions/listen for change notifications instead of a standalone GET stream.
- Dual-support old and new revisions during migration — they do not interoperate.
- Pair with MRTR for mid-call user input on stateless servers.

## Sources

- [MCP 2026-07-28 specification blog](https://blog.modelcontextprotocol.io/posts/2026-07-28/) — accessed 2026-08-15
- [Google: MCP stateless updates](https://developers.googleblog.com/scaling-ai-agent-infrastructure-with-the-mcp-stateless-updates/) — accessed 2026-08-15
