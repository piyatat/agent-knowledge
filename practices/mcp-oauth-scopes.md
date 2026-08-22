---
id: mcp-oauth-scopes
title: MCP OAuth 2.1, CIMD, PKCE, and tool scopes
tags: [mcp, oauth, security, auth]
status: active
updated: 2026-08-22
when_to_use: Securing remote HTTP MCP servers or designing least-privilege agent tool access
---

## Summary

Remote MCP should use OAuth 2.1 + PKCE as a resource server, bind tokens to the server (RFC 8707 resource / audience), prefer **Client ID Metadata Documents (CIMD)** over Dynamic Client Registration, and enforce narrow tool scopes on every invocation—not a static API key.

## Notes

- Treat the MCP server as an OAuth **resource server**; authorization lives on a dedicated AS.
- PKCE (S256) is required for public/agent clients that cannot hold secrets.
- Clients MUST send the `resource` parameter; servers MUST reject tokens not issued for themselves and MUST NOT pass client tokens through to upstream APIs.
- 2026-07-28 auth hardening: validate `iss` on the authorization response (RFC 9207) before redeeming a code; bind client credentials to the issuing AS; set `application_type` if still using DCR so localhost CLI redirects are not rejected.
- CIMD is the preferred registration mechanism; DCR is deprecated and kept only for AS that cannot do CIMD. Confused-deputy risk is worse when DCR + a static third-party client ID share a consent cookie.
- Map scopes to tool classes (read/write/admin or per-tool); re-check on each call (deny by default). Prefer short-lived access tokens + refresh rotation; log agent identity, tool, and args.

## Sources

- [MCP Authorization (2026-07-28)](https://modelcontextprotocol.io/specification/2026-07-28/basic/authorization) — accessed 2026-08-22
- [The 2026-07-28 Specification (MCP Blog)](https://blog.modelcontextprotocol.io/posts/2026-07-28/) — accessed 2026-08-22
- [MCP OAuth 2.1 implementation (PKCE & scopes)](https://www.practical-devsecops.com/mcp-oauth-2-1-implementation/) — accessed 2026-08-09
- [Authorization: OAuth 2.1 for HTTP MCP Servers](https://imti.co/mcp-authorization-oauth/) — accessed 2026-08-09
