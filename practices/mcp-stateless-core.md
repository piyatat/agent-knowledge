---
id: mcp-stateless-core
title: MCP 2026 stateless core migration
tags: [mcp, stateless, transport, migration]
status: active
updated: 2026-08-12
when_to_use: Upgrading MCP servers/clients to the 2026-07-28 revision or debugging session breakage
---

## Summary

MCP 2026-07-28 removes protocol sessions, the initialize handshake, and SSE resumability from the core. Each HTTP request is self-contained; cross-call state belongs in tool args or server-minted handles.

## Notes

- Removed: `Mcp-Session-Id`, initialize/initialized dance, `Last-Event-ID` SSE resume, standalone GET stream.
- Added: `server/discover`, `Mcp-Method` / `Mcp-Name` headers, TTL/cache hints on list results, MRTR for mid-call input.
- Old and new revisions **do not interoperate** — support both during migration.
- Replace held-stream notifications with `subscriptions/listen` on a long-lived POST when needed.
- Design tools idempotently: broken streams mean the client reissues with a new request ID.

## Sources

- [Scaling AI Agent Infrastructure — MCP stateless (Google)](https://developers.googleblog.com/scaling-ai-agent-infrastructure-with-the-mcp-stateless-updates/) — accessed 2026-08-12
- [MCP 2026-07-28: what the stateless core removes](https://packetnebula.com/articles/mcp-2026-07-28-what-stateless-removes/) — accessed 2026-08-12
- [MCP stateless migration guide](https://hashnode.com/blog/mcp-stateless-migration) — accessed 2026-08-12
