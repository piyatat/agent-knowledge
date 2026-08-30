---
id: agent-client-protocol-acp
title: ACP — Agent Client Protocol (IDE ↔ coding agent)
tags: [acp, glossary, orchestration, interoperability]
status: active
updated: 2026-08-30
when_to_use: Connecting a coding agent to an IDE (or exposing Cursor via agent acp) versus MCP tools or A2A peers
---

## Summary

**ACP** is the open JSON-RPC contract between a **client** (IDE/UI) and a **coding agent** subprocess — “LSP for agents.” It is not MCP (agent ↔ tools/data) and not A2A (agent ↔ agent). Cursor’s CLI speaks it as `agent acp` over stdio (**v1** method names today). ACP **v2 is draft** (`acp-v2-session-lifecycle`).

## Notes

- Typical v2-shaped turn: client `initialize` → optional `auth/login` → `session/new` (or `session/resume`) → `session/prompt`. The agent streams `session/update`. The client answers permission RPCs. `session/cancel` is a notification. Cursor docs still show v1 `authenticate` / `session/load` (`cursor-acp-extensions`).
- Transport today is **stdio** (newline-delimited JSON-RPC; stdout is protocol only; stderr is logs). Streamable HTTP is a draft. JSON-RPC batches are allowed, but do not batch lifecycle methods (`initialize`, `auth/login`, `session/new`, `session/resume`, `session/prompt`).
- v2 uses the same `capabilities` / `info` field names in both directions; `info` is required. If `authMethods` is omitted or empty, clients must not call `auth/login` or `auth/logout`. Paths are absolute; line numbers are 1-based. In v2, `session/prompt` only acknowledges; stop reason arrives on `state_update`.
- Extensibility: `_meta` bags, underscore-prefixed custom methods, capabilities advertised at initialize. Cursor adds `cursor/*` methods. Do not invent a second wire format and call it ACP.
- Hosts: Zed (origin), JetBrains AI Assistant (ACP Registry; Cursor is installable there), Cursor CLI as an agent. An ACP agent still uses MCP *inside* its loop for tools.

## Sources

- [ACP protocol overview](https://agentclientprotocol.com/protocol/overview) — accessed 2026-08-29
- [ACP v2 overview](https://agentclientprotocol.com/protocol/v2/overview) — accessed 2026-08-29
- [ACP v2 transports](https://agentclientprotocol.com/protocol/v2/transports) — accessed 2026-08-29
- [Migrating from ACP v1](https://agentclientprotocol.com/protocol/v2/migration) — accessed 2026-08-29
- [Using Agent in CLI](https://cursor.com/docs/cli/using) — accessed 2026-08-29
- [Cursor joined the ACP Registry (JetBrains)](https://blog.jetbrains.com/ai/2026/03/cursor-joined-the-acp-registry-and-is-now-live-in-your-jetbrains-ide/) — accessed 2026-08-29
