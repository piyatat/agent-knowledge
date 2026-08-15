---
id: mcp-elicitation-modes
title: MCP elicitation form vs URL mode
tags: [mcp, elicitation, security, ux]
status: active
updated: 2026-08-12
when_to_use: Designing MCP tools that need structured user input or out-of-band auth/payment
---

## Summary

Elicitation supports **form** mode (JSON Schema fields in-client) and **URL** mode (open external page for sensitive flows). Pick mode by whether input should pass through the MCP client.

## Notes

- **Form** — collect structured fields (confirmations, enums, short text) with `requestedSchema`.
- **URL** — direct user to browser for OAuth, payments, or third-party consent; MCP bearer token stays unchanged.
- URL mode is for authorization *on behalf of the user*, not MCP server OAuth itself.
- Clients declare `elicitation.form` / `elicitation.url` capabilities; degrade gracefully when unsupported.
- Never put secrets in elicitation messages; URL mode avoids routing credentials through the agent transcript.

## Sources

- [MCP elicitation specification](https://modelcontextprotocol.io/specification/2026-07-28/client/elicitation) — accessed 2026-08-12
- [FastMCP elicitation guide](https://gofastmcp.com/servers/elicitation) — accessed 2026-08-12
