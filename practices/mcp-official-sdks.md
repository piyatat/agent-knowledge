---
id: mcp-official-sdks
title: Official MCP SDKs — TypeScript v2 and Python v2
kind: tool
tags: [mcp, sdk, typescript, python]
status: active
updated: 2026-11-16
when_to_use: Implementing an MCP server or client with the official TypeScript or Python SDK instead of FastMCP
---

## Summary

The **official MCP SDKs** are the reference TypeScript and Python implementations of the protocol. **v2** of both is the stable line for the **2026-07-28** spec. v1 packages still install and only cover the spec through **2025-11-25**. This is not FastMCP (`fastmcp`) and not the Inspector (`mcp-inspector`).

## Notes

- **TypeScript v2.** Install `@modelcontextprotocol/server` and, for a host, `@modelcontextprotocol/client`. It runs on Node.js, Bun, and Deno. Servers use `McpServer` plus `serveStdio` (or Express, Hono, Fastify, or Workers). Tool and prompt schemas are Standard Schema — the v2 quickstart imports `zod/v4`. Docs: `https://ts.sdk.modelcontextprotocol.io/v2/`.
- **TypeScript v1.** `@modelcontextprotocol/sdk` is the maintenance line (docs at the site root, source on the `v1.x` branch). It implements the spec through **2025-11-25** and does not add 2026-07-28. Bug fixes and security updates continue for at least six months after the v2 release date **2026-07-27**. A new server that `npm install`s this package name is on the old handshake (`mcp-sdk-v1-spec-mismatch`).
- **Python v2.** Package `mcp` on PyPI, **Python 3.11+**. `uv add "mcp[cli]"` or `pip install "mcp[cli]"`. The `[cli]` extra is the `mcp` command (`mcp dev`, `mcp run`, `mcp install`); a deployed server can omit it. `mcp dev` opens the Inspector and needs `npx` on `PATH`. High-level servers use `MCPServer` and decorators (`@mcp.tool()`). Transports: stdio, Streamable HTTP, and SSE. Docs: `https://py.sdk.modelcontextprotocol.io/`.
- **Python v1 pin.** v2 is a breaking major. A package that is not ready should depend on `mcp>=1.28,<2` so an unpinned resolve stays on 1.x. The old high-level import lived at `mcp.server.fastmcp`; that is not the FastMCP project.
- **Alternatives.** FastMCP when one Python server must negotiate 2026-07-28 and older clients, or when you want its auth and skills helpers. Pydantic AI (`pydantic-ai`) when the agent loop is the product and MCP is only a tool source. Publish install metadata in the official registry (`mcp-official-registry`) either way.
- **Caveats.** `@modelcontextprotocol/sdk` and `mcp` without an upper bound are different generations. v2 speaks the stateless revision (`mcp-stateless-core`); a v1 server still expects `initialize` and session headers. `mcp dev` fails closed on a machine with no Node `npx`.

## Sources

- [MCP TypeScript SDK v2](https://ts.sdk.modelcontextprotocol.io/v2/) — accessed 2026-11-16
- [typescript-sdk repository](https://github.com/modelcontextprotocol/typescript-sdk) — accessed 2026-11-16
- [MCP TypeScript SDK v1](https://ts.sdk.modelcontextprotocol.io/) — accessed 2026-11-16
- [MCP Python SDK](https://py.sdk.modelcontextprotocol.io/) — accessed 2026-11-16
- [MCP Python SDK installation](https://py.sdk.modelcontextprotocol.io/get-started/installation/) — accessed 2026-11-16
