---
id: acp-client-system-prompt
title: ACP client-provided system prompt — append vs override
tags: [acp, session, interoperability, prompts]
status: draft
updated: 2026-10-15
when_to_use: Sending session-scoped system instructions over ACP, or replacing _meta / user-message persona hacks
---

## Summary

ACP’s **Client-Provided System Prompt** RFD (moved to **Draft** 2026-10-12) adds a capability-gated `systemPrompt` object on session lifecycle requests so clients can deliver persona, platform, and behavioral instructions at **system** level instead of stuffing them into `session/prompt` user content. It is not session notices (`acp-session-notices`) and not compaction (`acp-session-compaction`). Schema exists behind `unstable_session_system_prompt` until Preview.

## Notes

- Capability: omitted/`null` = unsupported, `{}` = supported. **v1:** `agentCapabilities.sessionCapabilities.systemPrompt`. **v2:** `capabilities.session.systemPrompt`. Clients MUST NOT send `systemPrompt` unless advertised.
- Request object: required `mode` (`append` | `override`) plus `content` as `ContentBlock[]` (text is the baseline). Same field on `session/new` and the other lifecycle methods clients already re-send (`cwd`, `mcpServers`): v1 `session/load` / `resume` / `fork`; v2 `resume` / `fork`. Mid-turn mutation is out of scope.
- **append** (required if advertised): add client text to the agent’s own instructions at system/developer precedence; placement and wrapping are implementation-defined. **override**: replace the agent’s built-in default prompt only — not tools, MCP, or permissions. Workspace files such as `AGENTS.md` MAY still be included. Override is double opt-in via `mode.override`.
- Failure: unadvertised mode, unsupported content type, or over-limit content → JSON-RPC error (`invalid_params` recommended) and **do not** create/load/resume/fork. Unknown modes are parsed and forwarded (underscore prefix = implementation extension); an agent that cannot apply one still errors rather than silently treating it as append.
- Do not use `_meta.systemPrompt` (claude-agent-acp) or Goose `_goose/unstable/session/system-prompt/set` for new work — `_meta` is explicitly not a contract. Status is **draft**: treat shipping adapters as unstable until Preview.

## Sources

- [Client-Provided System Prompt RFD](https://agentclientprotocol.com/rfds/client-system-prompt) — accessed 2026-10-15
- [RFD Updates](https://agentclientprotocol.com/rfds/updates) — accessed 2026-10-15
