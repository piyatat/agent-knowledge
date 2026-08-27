---
id: mcp-localhost-dns-rebinding
title: Local MCP HTTP — Origin/Host checks vs DNS rebinding
tags: [mcp, security, transport, failure-modes]
status: active
updated: 2026-08-27
when_to_use: Serving Streamable HTTP MCP on localhost, or reviewing a server bound to 0.0.0.0 without Origin checks
---

## Summary

A local Streamable HTTP MCP server is reachable from the user's browser. Without **Origin** (and usually **Host**) validation, a remote page can DNS-rebind to `127.0.0.1` and call tools as the user. This is separate from OAuth SSRF on discovery URLs.

## Notes

- Spec: servers **MUST** validate `Origin` on incoming Streamable HTTP connections. Invalid Origin → HTTP **403**. Body **MAY** be a JSON-RPC error with no `id`. Local binds **SHOULD** use `127.0.0.1`, not `0.0.0.0`.
- TypeScript SDK: framework factories (`createMcpExpressApp` / Hono / Fastify) arm Host+Origin guards on localhost. Bare `node:http` must compose `localhostHostValidation` + `localhostOriginValidation`. Binding `0.0.0.0` turns auto-protection **off**.
- Missing `Origin` is expected from non-browser clients and typically **passes**; the Host check is what stops a rebound browser request. Do not treat header checks as authentication.
- One-click local install: clients **MUST** show the full startup command and require consent. Malicious `npx` lines and leftover localhost servers are the other local-compromise paths.
- Related: Playwright/browser MCP on `0.0.0.0:8931` is a full browser on the wire — same class of mistake.

## Sources

- [MCP Streamable HTTP — security warning (2026-07-28)](https://modelcontextprotocol.io/specification/2026-07-28/basic/transports/streamable-http) — accessed 2026-08-27
- [MCP Security Best Practices — Local MCP Server Compromise](https://modelcontextprotocol.io/docs/2026-07-28/tutorials/security/security_best_practices) — accessed 2026-08-27
- [MCP TypeScript SDK — Serve over HTTP](https://ts.sdk.modelcontextprotocol.io/v2/serving/http.html) — accessed 2026-08-27
