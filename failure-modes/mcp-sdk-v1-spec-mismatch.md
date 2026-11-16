---
id: mcp-sdk-v1-spec-mismatch
title: MCP SDK v1 against a 2026-07-28 peer
kind: knowledge
tags: [mcp, sdk, migration, failure-modes]
status: active
updated: 2026-11-16
when_to_use: An MCP server or client built from the v1 package fails to handshake with a 2026-07-28 peer
---

## Summary

Installing the **v1** package name does not implement the **2026-07-28** MCP revision. TypeScript v1 is `@modelcontextprotocol/sdk`. Python v1 is an unpinned `mcp` resolve that is still below 2. The peer that speaks only the stateless revision will not complete the old `initialize` session (`mcp-stateless-core`, `mcp-official-sdks`).

## Notes

- TypeScript v2 ships as `@modelcontextprotocol/server` and `@modelcontextprotocol/client`. The v1 package remains installable, implements the spec through **2025-11-25**, and is documented as not gaining 2026-07-28. A template, lockfile, or tutorial that still says `npm install @modelcontextprotocol/sdk` stays on that line.
- Python v2 is a breaking major of the same `mcp` name. Without an upper bound, a fresh resolve can jump; a project that meant to stay on v1 needs `mcp>=1.28,<2`. The reverse failure is a v2-only server dropped into a host that still requires the old handshake.
- v1 security updates are time-boxed: TypeScript v1 gets bug and security fixes for at least six months after **2026-07-27**, not a new protocol. Do not treat “the install succeeded” as “this speaks stateless MCP”.
- Check the import, not the README title. `McpServer` from `@modelcontextprotocol/server`, or `MCPServer` from `mcp.server`, is v2. `Server` from `@modelcontextprotocol/sdk` is v1. FastMCP (`fastmcp`) is a third package and is not either import.

## Sources

- [MCP TypeScript SDK v2](https://ts.sdk.modelcontextprotocol.io/v2/) — accessed 2026-11-16
- [MCP TypeScript SDK v1](https://ts.sdk.modelcontextprotocol.io/) — accessed 2026-11-16
- [typescript-sdk repository](https://github.com/modelcontextprotocol/typescript-sdk) — accessed 2026-11-16
- [MCP Python SDK installation](https://py.sdk.modelcontextprotocol.io/get-started/installation/) — accessed 2026-11-16
