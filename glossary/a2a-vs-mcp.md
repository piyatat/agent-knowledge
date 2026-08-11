---
id: a2a-vs-mcp
title: A2A vs MCP — agent-to-agent vs agent-to-tool
tags: [a2a, mcp, glossary, orchestration]
status: active
updated: 2026-08-10
when_to_use: Choosing protocols for multi-agent collaboration vs tool/data access
---

## Summary

**MCP** connects an agent to tools and data sources. **A2A** (Agent2Agent) lets opaque agents discover each other and collaborate on long-running tasks. They are complementary, not competitors.

## Notes

- MCP: model/tool primitives (`tools`, `resources`, `prompts`); typically one agent + many integrations.
- A2A: agent cards for discovery, JSON-RPC over HTTP, task lifecycle (submit → work → complete), streaming/push for long jobs.
- Use MCP when the agent must call APIs, files, or DBs; use A2A when one agent should **delegate to another agent** without sharing internals.
- Common production shape: orchestrator agents speak A2A to peers; each peer uses MCP for its own tools.
- Do not expose secrets or full tool surfaces inside Agent Cards — advertise capabilities and auth schemes, not credentials.

## Sources

- [A2A project (GitHub)](https://github.com/a2aproject/A2A) — accessed 2026-08-10
- [MCP vs A2A (Auth0)](https://auth0.com/blog/mcp-vs-a2a/) — accessed 2026-08-10
- [MCP server concepts](https://modelcontextprotocol.io/docs/learn/server-concepts) — accessed 2026-08-10
