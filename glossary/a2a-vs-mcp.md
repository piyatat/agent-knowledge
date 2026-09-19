---
id: a2a-vs-mcp
title: A2A vs MCP vs ACP vs AHP — four different agent wires
tags: [a2a, mcp, acp, ahp, glossary, orchestration]
status: active
updated: 2026-09-19
when_to_use: Choosing protocols for tools vs peer agents vs IDE↔agent embedding vs multi-client session hosts
---

## Summary

**MCP** connects an agent to tools and data. **A2A** lets opaque agents discover each other and collaborate on long-running tasks. **ACP** connects an IDE/UI client to a coding-agent **subprocess**. **AHP** connects one or more clients to a **sessions host** that outlives any window. They stack; they are not competitors.

## Notes

- MCP: model/tool primitives (`tools`, `resources`, `prompts`); typically one agent + many integrations.
- A2A: agent cards for discovery, JSON-RPC / gRPC / HTTP+JSON, task lifecycle (submit → work → complete), streaming/push for long jobs.
- ACP: JSON-RPC over stdio (HTTP draft) between editor and agent — `initialize`, `session/prompt`, client-side fs/terminal/permissions. Cursor CLI: `agent acp`. See `agent-client-protocol-acp`.
- AHP: JSON-RPC (WebSocket remotely) between a persistent host and viewers. Channels + snapshots + reducers; the agent can keep running with no client. VS Code Agent Host is the first-party implementation (`agent-host-protocol-ahp`).
- Use MCP when the agent must call APIs, files, or DBs; A2A when one agent should **delegate to another agent** without sharing internals; ACP when a host app should drive a coding agent the user already chose; AHP when several UIs must share one live session.
- Common production shape: Agents window speaks AHP to the host; an adapter inside the host may still speak ACP to a CLI agent; that agent uses MCP for tools; orchestrators speak A2A to peer specialists.
- Do not expose secrets or full tool surfaces inside A2A Agent Cards — advertise capabilities and auth schemes, not credentials.

## Sources

- [A2A project (GitHub)](https://github.com/a2aproject/A2A) — accessed 2026-08-10
- [MCP vs A2A (Auth0)](https://auth0.com/blog/mcp-vs-a2a/) — accessed 2026-08-10
- [MCP server concepts](https://modelcontextprotocol.io/docs/learn/server-concepts) — accessed 2026-08-10
- [ACP protocol overview](https://agentclientprotocol.com/protocol/overview) — accessed 2026-08-29
- [ACP v2 transports](https://agentclientprotocol.com/protocol/v2/transports) — accessed 2026-08-29
- [What is the Agent Host Protocol?](https://microsoft.github.io/agent-host-protocol/guide/what-is-ahp) — accessed 2026-09-19
- [VS Code Agent Host architecture](https://code.visualstudio.com/docs/agents/concepts/agent-host) — accessed 2026-09-19
