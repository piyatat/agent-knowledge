---
id: agent-host-protocol-ahp
title: AHP — Agent Host Protocol (sessions server ↔ clients)
tags: [ahp, glossary, orchestration, interoperability]
status: active
updated: 2026-11-02
when_to_use: Distinguishing AHP from ACP/MCP/A2A, or connecting a UI to a persistent agent-host process
---

## Summary

**AHP** (Agent Host Protocol) **1.0.0** (2026-10-02) is the open JSON-RPC contract between a **sessions host** (source of truth) and one or more **clients** (IDE, Agents window, CLI, browser). The host owns agent sessions so they outlive any one editor. Not ACP (IDE ↔ coding-agent subprocess), not MCP (agent ↔ tools), not A2A (agent ↔ agent). VS Code’s Agent Host is the first-party implementation (`vscode-agent-host`).

## Notes

- Host can run as a local utility process (message-port IPC) or a standalone server (`code agent host`, token-gated localhost; `--tunnel` for a dev tunnel; `--github-environment` registers the machine with GitHub Environments). Remote: AHP JSON-RPC over **WebSocket**. File edits and commands run **where the host is**.
- Channels are URI-addressed subscriptions: `ahp-root://`, `ahp-session:/…`, `ahp-chat:/…`, `ahp-terminal:/…`, `ahp-changeset:/…`. Every command/notification carries `channel`. Clients get a snapshot, then ordered **actions** through shared **reducers**. Reconnect replays missed actions or a fresh snapshot. Write-ahead: clients apply locally, then reconcile the server echo.
- Agent-agnostic adapters map Copilot, Claude, and other harnesses onto the same session model. Clients may contribute tools; the host routes those calls back — those tools need the contributing client. The agent can keep a turn going with **no client connected**.
- 1.0 adds chat catalog fields (archived/read without a full subscription), changeset `Recomputing`, automation `disableConditions` / captured customizations, MCP `blocking` startup + `session/mcpServerBackgroundRequested`, chat-owned background work, and `moveChat`. Spec: github.com/microsoft/agent-host-protocol. Client libraries: TypeScript, Rust, Go, Kotlin, Swift, .NET.

## Sources

- [What is the Agent Host Protocol?](https://microsoft.github.io/agent-host-protocol/guide/what-is-ahp) — accessed 2026-11-02
- [AHP releases (1.0.0)](https://github.com/microsoft/agent-host-protocol/releases) — accessed 2026-11-02
- [VS Code Agent Host architecture](https://code.visualstudio.com/docs/agents/concepts/agent-host) — accessed 2026-11-02
- [Introducing the Agent Host](https://code.visualstudio.com/blogs/2026/08/26/agent-host-architecture) — accessed 2026-09-19
