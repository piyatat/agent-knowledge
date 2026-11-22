---
id: linear-mcp-token-and-readonly
title: Linear MCP returns 401, or a write is refused on a read-only session
kind: knowledge
tags: [linear, mcp, auth, oauth]
status: active
updated: 2026-11-22
when_to_use: Linear MCP returns 401, a write is refused, or a client is still pointed at the SSE endpoint
---

## Summary

Linear MCP (`linear-mcp`) binds one OAuth session to one workspace and starts with a 25-day refresh window. A read-only endpoint or a Read-only API key rejects writes. The `/sse` URL is a deprecated fallback; current clients use Streamable HTTP.

## Notes

- **401.** When the server returns HTTP `401` and `WWW-Authenticate` contains `error="invalid_token"`, the token is no longer valid. The response does not distinguish expiry from revocation. Reconnect if the client cannot refresh. A refresh can extend the 25-day window, so a healthy client does not need a manual login on that cadence.
- **Wrong workspace.** Reconnecting inside the same auth store keeps the original workspace. Point each workspace at its own auth directory when the client or `mcp-remote` supports one, and authorize each directory on its own. The docs also mention clearing `~/.mcp-auth` after an internal server error on connect, then trying again.
- **Read-only.** `https://mcp.linear.app/mcp/readonly` never lists write tools. On `https://mcp.linear.app/mcp`, requesting only the `read` scope produces a token that cannot reach write APIs. A bearer API key with only the Read permission behaves the same way. The user’s own Linear permissions still apply on a read-write session.
- **Transport.** Put new clients on `https://mcp.linear.app/mcp`. Keep `https://mcp.linear.app/sse` for a client that only speaks the older SSE transport. A dropped remote session is a client reconnect; it leaves Linear data and the auth session in place.
- **Plan mismatch.** Linear serves MCP on every plan. Claude and ChatGPT can still refuse the connector because of their own plan. Claude auto-connect needs matching emails plus Linear Business or Enterprise and Claude Team or Enterprise.

## Sources

- [Linear MCP server](https://linear.app/docs/mcp) — accessed 2026-11-22
- [AI at Linear](https://linear.app/docs/ai-at-linear) — accessed 2026-11-22
