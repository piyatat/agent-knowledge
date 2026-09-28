---
id: mcp-elicitation-modes
title: MCP elicitation form vs URL mode
tags: [mcp, elicitation, security, ux]
status: active
updated: 2026-09-28
when_to_use: Designing MCP tools that need structured user input or out-of-band auth/payment
---

## Summary

MCP **elicitation** (2026-07-28) lets a **server** ask the **client** for user input while a tool/prompt is in flight. Two modes: **form** (restricted JSON Schema, non-sensitive) and **URL** (open an external page so secrets never transit the MCP client). Not ACP’s IDE-wire `elicitation/create` (`acp-elicitation`) and not MCP server OAuth (`mcp-oauth-scopes`).

## Notes

- Clients declare `elicitation` under `_meta.io.modelcontextprotocol/clientCapabilities` on **each** request. Advertise `form` and/or `url` objects. For backwards compatibility, `{}` still means **form only** — ACP does the opposite (`{}` advertises no modes). Clients MUST support at least one advertised mode. Servers MUST NOT request an unadvertised mode.
- **Form** — structured fields (`requestedSchema`) for confirmations, enums, short text. User reviews/edits before send. MUST NOT collect secrets (passwords, API keys, tokens, payment). Ordinary profile fields (name, email, username) are not categorically banned.
- **URL** — user consents to navigate; the interaction happens out of band (OAuth, payments, third-party consent). MCP bearer token stays unchanged. This authorizes work **on behalf of the user**, not the MCP server’s own OAuth.
- Clients MUST name the requesting server, offer decline/cancel, show the URL host before navigation, and keep credentials out of the agent transcript. Pair long tool waits with MRTR (`mcp-mrtr-input-required`).

## Sources

- [MCP elicitation specification (2026-07-28)](https://modelcontextprotocol.io/specification/2026-07-28/client/elicitation) — accessed 2026-09-28
- [ACP elicitation](https://agentclientprotocol.com/protocol/v2/elicitation) — accessed 2026-09-28
- [FastMCP elicitation guide](https://gofastmcp.com/servers/elicitation) — accessed 2026-08-12
