---
id: acp-v2-session-lifecycle
title: ACP v2 session and prompt lifecycle (draft)
tags: [acp, session, orchestration, migration]
kind: protocol
status: draft
updated: 2026-11-15
when_to_use: Implementing or migrating an ACP client/agent to protocolVersion 2 session semantics
---

## Summary

ACP **v2 is still draft**. Current protocol pages (2026-11-15) keep the turn split: `session/prompt` **acknowledges** the prompt; foreground progress and the stop reason arrive later as `state_update`. `session/load` is gone. Session methods are gated by **`capabilities.session`**, not unconditional. Check `cursor-acp-extensions` before assuming Cursor’s `agent acp` speaks v2. Client system prompts are a separate, stabilized field (`acp-client-system-prompt`).

## Notes

- Negotiation is unchanged: the client sends its latest version; the agent echoes it or its own latest. One connection is one version after `initialize`. Request ids are a string or an integer, never `null`, except an error whose id could not be parsed. ACP does not use JSON-RPC batches.
- **Auth:** a non-empty `authMethods` list means the agent MUST implement `auth/login` and `auth/logout`. If the list is omitted or empty, clients MUST NOT call either. Session methods may fail with `auth_required` (`-32000`) until auth finishes.
- **Capability:** `session/*` requires `capabilities.session`. An agent that advertises it MUST support `session/resume`. `session/set_config_option` is required when the agent advertises config options. `session/delete` requires `session.delete`. `session/cancel` is a notification and only cancels **foreground** work; it is ignored when the session is not active. An idle `state_update` still ends the foreground turn if background work continues.
- **Lifetime:** a session lasts until the agent discards it. On a connection it is active from a successful `session/new` or `session/resume` until `session/close` or the connection ends. Close does not discard. Resuming a session the agent no longer has fails with **`-32002`**. Resuming one that is already active replaces MCP servers and workspace roots; ongoing work continues. Two connections at once is up to the agent.
- **Replay:** omit `replayFrom` (or send null) and the agent MUST NOT replay history. It still sends a current-state snapshot, which is live sync, not history. `{ "type": "start" }` replays retained history and is inclusive. New sessions default to `idle`. Clients MUST NOT overwrite a state already reported when the `session/new` response arrives. Agents should put `configOptions` and `availableCommands` on that response rather than notifying before it.
- **Lists:** those two fields are the complete lists. Omission or `[]` means none; agents MUST NOT send `null`. The client replaces what it held, including updates that arrived before the response. Later `config_option_update` and `available_commands_update` notifications each replace the whole list.
- **Upserts and paths:** on an upsert, omitting a field leaves it unchanged and `null` clears it. Elsewhere, omit and `null` are equivalent when the schema allows null. File paths are absolute in the agent machine’s native syntax, not URIs. Line numbers are 1-based. `_`-prefixed extension values are implementation-specific.

## Sources

- [ACP v2 overview](https://agentclientprotocol.com/protocol/v2/overview) — accessed 2026-11-15
- [ACP v2 session setup](https://agentclientprotocol.com/protocol/v2/session-setup) — accessed 2026-11-15
- [Migrating from ACP v1](https://agentclientprotocol.com/protocol/v2/migration) — accessed 2026-08-30
- [ACP v2 Proposal (RFD overview)](https://agentclientprotocol.com/rfds/v2/overview) — accessed 2026-10-18
