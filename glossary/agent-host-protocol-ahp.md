---
id: agent-host-protocol-ahp
title: AHP — Agent Host Protocol (sessions server ↔ clients)
tags: [ahp, glossary, orchestration, interoperability]
status: active
updated: 2026-09-19
when_to_use: Distinguishing AHP from ACP/MCP/A2A, or connecting a UI to a persistent agent-host process
---

## Summary

**AHP** (Agent Host Protocol) is the open JSON-RPC contract between a **sessions host** (source of truth) and one or more **clients** (IDE windows, Agents window, custom UIs). The host owns agent sessions so they outlive any one editor. Not ACP (IDE ↔ coding-agent subprocess), not MCP (agent ↔ tools), not A2A (agent ↔ agent). VS Code’s Agent Host speaks it; spec is under active development.

## Notes

- Host can run as a local utility process (message-port IPC) or a standalone server (`code agent host`, token-gated localhost; `--tunnel` for a dev tunnel). Remote: AHP JSON-RPC over **WebSocket**. File edits and commands run **where the host is** (machine, Dev Container, SSH).
- Channels are URI-addressed subscriptions: `ahp-root://`, `ahp-session:/…`, `ahp-chat:/…`, `ahp-terminal:/…`, `ahp-changeset:/…`. Every command/notification carries `channel`. Clients get a snapshot, then ordered **actions** through shared **reducers**. Reconnect replays missed actions or a fresh snapshot.
- Agent-agnostic: adapters inside the host map Copilot, Claude, and other harnesses onto the same session model. Clients may contribute tools (browser, extension tools); the host routes those calls back. The agent can keep a turn going with **no client connected**.
- VS Code: Agent Host sessions apply edits to the session folder/worktree (review then commit). Extension-host sessions still use keep/undo pending edits. Host reads harness-agnostic MCP from `.mcp.json` / `~/.copilot/mcp-config.json`; it does not read `.vscode/mcp.json` directly (VS Code forwards most servers, except `${input:…}`). Shared multi-window sessions, multiple chats per session, and remote hosting are Agent Host–only.

## Sources

- [What is the Agent Host Protocol?](https://microsoft.github.io/agent-host-protocol/guide/what-is-ahp) — accessed 2026-09-19
- [VS Code Agent Host architecture](https://code.visualstudio.com/docs/agents/concepts/agent-host) — accessed 2026-09-19
- [Introducing the Agent Host](https://code.visualstudio.com/blogs/2026/08/26/agent-host-architecture) — accessed 2026-09-19
