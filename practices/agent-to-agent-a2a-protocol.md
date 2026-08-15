---
id: agent-to-agent-a2a-protocol
title: Using A2A for agent-to-agent delegation
tags: [a2a, orchestration, mcp]
status: active
updated: 2026-08-15
when_to_use: Delegating work to peer agents via Agent2Agent instead of stuffing everything into one tool loop
---

## Summary

Use A2A when one opaque agent should collaborate with another (discovery via Agent Cards, task lifecycle). Keep MCP for tools/data inside each agent.

## Notes

- Publish capability cards without secrets or full tool dumps.
- Prefer task-oriented APIs with streaming/push for long jobs.
- Isolate contexts per peer; return summaries, not full transcripts.
- Auth identity between agents separately from tool OAuth scopes.
- Do not reinvent A2A as ad-hoc HTTP without task states.

## Sources

- [A2A project](https://github.com/a2aproject/A2A) — accessed 2026-08-15
- [MCP vs A2A (Auth0)](https://auth0.com/blog/mcp-vs-a2a/) — accessed 2026-08-15
