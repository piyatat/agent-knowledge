---
id: mcp-server-lifecycle-health
title: MCP server lifecycle and health checks
tags: [mcp, ops, reliability]
status: active
updated: 2026-08-15
when_to_use: Running remote MCP servers with startup, readiness, and dependency health signals
---

## Summary

Treat MCP servers like any other service: readiness before advertising tools, liveness for the process, and dependency checks for DBs/APIs the tools need.

## Notes

- Fail tool listing closed if critical backends are down.
- Separate process liveness from "tools are safe to call" readiness.
- Version and drain connections on deploy; avoid mid-call process kills without MRTR-safe retries.
- Expose /health for orchestrators; include protocol version.
- Rate-limit and auth before expensive tool work.

## Sources

- [MCP server concepts](https://modelcontextprotocol.io/docs/learn/server-concepts) — accessed 2026-08-15
- [Heartbeat dead-man-switch (corpus)](https://github.com/piyatat/agent-knowledge/blob/main/practices/heartbeat-dead-man-switch.md) — accessed 2026-08-15
