---
id: acp-v2-session-lifecycle
title: ACP v2 session and prompt lifecycle (draft)
tags: [acp, session, orchestration, migration]
status: draft
updated: 2026-08-30
when_to_use: Implementing or migrating an ACP client/agent to protocolVersion 2 session semantics
---

## Summary

ACP **v2 is still draft**. The stable-looking schema (`schema/v2/schema.json`) already changes turn completion: `session/prompt` **acknowledges** the prompt; foreground progress and the stop reason arrive later as `state_update` (`running` / `idle` / `requires_action`). Keep serving v1 until peers negotiate `protocolVersion: 2`.

## Notes

- Negotiation is unchanged: client sends its latest version; agent echoes it or its own latest. One connection = one version after `initialize`. Support both sides; dropping v1 cuts existing IDEs/agents.
- Session methods that are **required** in v2 (no capability bit): `session/new`, `session/list`, `session/resume`, `session/close`, `session/prompt`, `session/cancel`. `session/load` is **gone** — resume with `replayFrom: { "type": "start" }` for full replay.
- Auth: `authenticate` → `auth/login`, plus `auth/logout`. If `authMethods` is omitted or empty, clients must call neither. Modes moved to config options (`session/set_mode` removed).
- Updates are **upserts** keyed by id: omit = unchanged, `null` = clear, value = replace, chunks append. `tool_call` create is just the first `tool_call_update`. `plan` → `plan_update`. Client `fs/*` and `terminal/*` **execution** APIs are removed; agent-owned display terminals are a separate surface. Use client-provided MCP for client-side tools.
- Cursor’s `agent acp` docs still describe the **v1** flow (`authenticate`, `session/load`). See `cursor-acp-extensions` for Cursor-only methods; do not assume v2 when talking to current Cursor CLI.

## Sources

- [ACP v2 overview](https://agentclientprotocol.com/protocol/v2/overview) — accessed 2026-08-30
- [Migrating from ACP v1](https://agentclientprotocol.com/protocol/v2/migration) — accessed 2026-08-30
- [ACP v2 draft announcement](https://github.com/agentclientprotocol/agent-client-protocol/blob/main/docs/announcements/acp-v2-draft.mdx) — accessed 2026-08-30
