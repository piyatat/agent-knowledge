---
id: a2a-vs-mcp
title: A2A vs MCP vs ACP — three different agent wires
tags: [a2a, mcp, acp, glossary, orchestration]
status: active
updated: 2026-08-29
when_to_use: Choosing protocols for multi-agent collaboration vs tool/data access vs IDE↔agent embedding
---

## Summary

**MCP** connects an agent to tools and data. **A2A** lets opaque agents discover each other and collaborate on long-running tasks. **ACP** connects an IDE/UI client to a coding-agent subprocess. They stack; they are not competitors.

## Notes

- MCP: model/tool primitives (`tools`, `resources`, `prompts`); typically one agent + many integrations.
- A2A: agent cards for discovery, JSON-RPC / gRPC / HTTP+JSON, task lifecycle (submit → work → complete), streaming/push for long jobs.
- ACP: JSON-RPC over stdio (HTTP draft) between editor and agent — `initialize`, `session/prompt`, client-side fs/terminal/permissions. Cursor CLI: `agent acp`. See `agent-client-protocol-acp`.
- Use MCP when the agent must call APIs, files, or DBs; A2A when one agent should **delegate to another agent** without sharing internals; ACP when a host app should drive a coding agent the user already chose.
- Common production shape: IDE speaks ACP to the coding agent; that agent uses MCP for tools; orchestrators speak A2A to peer specialists.
- Do not expose secrets or full tool surfaces inside A2A Agent Cards — advertise capabilities and auth schemes, not credentials.

## Sources

- [A2A project (GitHub)](https://github.com/a2aproject/A2A) — accessed 2026-08-10
- [MCP vs A2A (Auth0)](https://auth0.com/blog/mcp-vs-a2a/) — accessed 2026-08-10
- [MCP server concepts](https://modelcontextprotocol.io/docs/learn/server-concepts) — accessed 2026-08-10
- [ACP protocol overview](https://agentclientprotocol.com/protocol/overview) — accessed 2026-08-29
- [ACP v2 transports](https://agentclientprotocol.com/protocol/v2/transports) — accessed 2026-08-29
