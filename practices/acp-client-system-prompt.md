---
id: acp-client-system-prompt
title: ACP client-provided system prompt — append vs override
tags: [acp, session, interoperability, prompts]
status: active
updated: 2026-11-10
when_to_use: Sending session-scoped system instructions over ACP, or replacing _meta / user-message persona hacks
---

## Summary

ACP **Client-Provided System Prompt** is **Completed** (stabilized 2026-11-06). Agents that advertise `systemPrompt` accept a `systemPrompt` object (`mode` + `content`) on session setup so clients deliver persona and platform instructions at **system** level instead of stuffing them into `session/prompt` user content. Protocol **v2 remains draft overall**; this field is stable on both v1 and v2. Not session notices (`acp-session-notices`) and not compaction (`acp-session-compaction`).

## Notes

- Capability: omitted/`null` = unsupported, `{}` = supported (**append** required). **v1:** `agentCapabilities.sessionCapabilities.systemPrompt`. **v2:** `capabilities.session.systemPrompt`. Clients MUST NOT send `systemPrompt` unless advertised. **override** is double opt-in via `mode.override`.
- Request: required `mode` (`append` | `override`) plus `content` as `ContentBlock[]` — **text only** for now. Same field on `session/new` and the other lifecycle methods clients already re-send (`cwd`, `mcpServers`): v1 `session/load` / `resume`; v2 `resume`. `session/fork` itself is still unstable, so the field on fork stays behind `unstable_session_fork`. Mid-turn mutation is out of scope.
- **append**: add client text to the agent’s own instructions at system/developer precedence; placement is implementation-defined. **override**: replace the agent’s built-in default prompt only — not tools, MCP, or permissions. Workspace files such as `AGENTS.md` MAY still be included. Clients that override take on any safety/tool guidance the default prompt had.
- Empty `content` is forbidden (agents MAY reject with `-32602` and **not** create/resume). Unadvertised mode, unsupported content type, or over-limit → JSON-RPC error (`invalid_params` recommended) and do not create/load/resume. Unknown modes: `_` prefix = implementation extension; an agent that cannot apply one still errors rather than silently treating it as append. On resume, clients SHOULD resend the same object; a change MAY wait until the next prompt rebuild (e.g. after compaction).
- Shipping adapters: Claude Agent adapter (v0.92.0) advertises append+override; Codex adapter (v2.3.0) advertises append only (developer instructions). Do not use `_meta.systemPrompt` (claude-agent-acp) or Goose `_goose/unstable/session/system-prompt/set` for new work — `_meta` is not a contract.

## Sources

- [Client-provided system prompts are stabilized](https://agentclientprotocol.com/announcements/client-system-prompt-stabilized) — accessed 2026-11-10
- [Client-Provided System Prompt RFD](https://agentclientprotocol.com/rfds/client-system-prompt) — accessed 2026-11-10
- [ACP v2 session setup — system prompt](https://agentclientprotocol.com/protocol/v2/session-setup) — accessed 2026-11-10
- [Rust Crate v1.16.0](https://github.com/agentclientprotocol/agent-client-protocol/releases/tag/v1.16.0) — accessed 2026-11-10
