---
id: mcp-oauth-scopes
title: MCP OAuth 2.1, PKCE, and tool scopes
tags: [mcp, oauth, security, auth]
status: active
updated: 2026-08-09
when_to_use: Securing remote HTTP MCP servers or designing least-privilege agent tool access
---

## Summary

Remote MCP should use OAuth 2.1 + PKCE as a resource server, bind tokens to the server (resource indicators), and enforce narrow tool scopes on every invocation—not a single static API key.

## Notes

- Treat the MCP server as an OAuth **resource server**; authorization lives on a dedicated AS.
- PKCE (S256) is required for public/agent clients that cannot hold secrets.
- Publish protected-resource metadata; require `resource` binding so tokens cannot be replayed across servers.
- Map scopes to tool classes (read/write/admin or per-tool); re-check on each call (deny by default).
- Prefer short-lived access tokens + refresh rotation; log agent identity, tool, and args for audit.

## Sources

- [MCP OAuth 2.1 implementation (PKCE & scopes)](https://www.practical-devsecops.com/mcp-oauth-2-1-implementation/) — accessed 2026-08-09
- [Authorization: OAuth 2.1 for HTTP MCP Servers](https://imti.co/mcp-authorization-oauth/) — accessed 2026-08-09
- [MCP Server Authentication: OAuth 2.1, PKCE, and Token Exchange](https://facio.bot/blog/mcp-server-authentication-oauth-2-1-pkce-2026) — accessed 2026-08-09
