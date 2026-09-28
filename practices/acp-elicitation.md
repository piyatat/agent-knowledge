---
id: acp-elicitation
title: ACP elicitation — form vs URL on the IDE wire
tags: [acp, elicitation, security, ux]
status: active
updated: 2026-09-28
when_to_use: Implementing ACP elicitation/create in an IDE or coding agent, or contrasting it with MCP elicitation
---

## Summary

**ACP elicitation** (stabilized 2026-07-24; in schema 1.7.0) lets a coding **agent** ask the **IDE client** for structured input. Same two modes as MCP 2026-07-28 — **form** (restricted JSON Schema, non-sensitive) and **URL** (out-of-band OAuth/payment) — but ACP sends `elicitation/create` **directly** on the persistent IDE↔agent connection. Not MCP server elicitation (`mcp-elicitation-modes`) and not ACP terminal login (`acp-terminal-auth`).

## Notes

- Client advertises `capabilities.elicitation` at `initialize`. Form support exists only when `form` is present and non-null; URL only when `url` is. `{}` and all-null objects advertise **no** modes. That is the opposite of MCP, where `{}` still means form-only. Agents MUST NOT request an unadvertised mode (JSON-RPC `-32602`).
- Agent sends `elicitation/create` with an explicit `mode` (no omitted-mode form default). Scope is flattened: `sessionId` (optional `toolCallId`) or `requestId` outside a session. Bind state to the receiving Client connection and a verified user — a session id alone is not enough.
- Form: flat object schemas, user can review/edit before send. MUST NOT collect secrets (passwords, API keys, tokens, private keys, recovery codes, payment). If the client has no URL mode, do **not** fall back to form — fail or use another safe flow.
- URL: `accept` means the user consented to **open** the URL, not that the external flow finished. ACP keeps `elicitationId` plus optional `elicitation/complete` to the same client. Do not put credentials in the URL; clients must show the full URL, get consent, and open it in a context the model cannot inspect. Tokens obtained out-of-band MUST NOT come back over ACP or into model context.
- Responses: `accept` / `decline` / `cancel`. Agents MUST handle decline, cancel, and failure. Clients MUST name the requesting agent and offer decline/cancel.

## Sources

- [ACP elicitation](https://agentclientprotocol.com/protocol/v2/elicitation) — accessed 2026-09-28
- [Elicitation is stabilized](https://agentclientprotocol.com/announcements/elicitation-stabilized) — accessed 2026-09-28
- [MCP elicitation (2026-07-28)](https://modelcontextprotocol.io/specification/2026-07-28/client/elicitation) — accessed 2026-09-28
