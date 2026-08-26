---
id: mcp-authorization-discovery
title: MCP OAuth discovery — RFC 9728 PRM and WWW-Authenticate
tags: [mcp, oauth, auth, discovery]
status: active
updated: 2026-08-26
when_to_use: Implementing 401 handling or Protected Resource Metadata so an MCP client can find the authorization server
---

## Summary

Remote MCP is an OAuth **resource server**. Clients discover the AS via **RFC 9728 Protected Resource Metadata** (`authorization_servers`), preferably from a `401` `WWW-Authenticate` `resource_metadata` parameter, else well-known URIs. Then they fetch AS metadata (RFC 8414 / OIDC Discovery) and run OAuth 2.1. This is the lookup path; scopes/PKCE/CIMD are `mcp-oauth-scopes`.

## Notes

- Servers MUST ship PRM with at least one `authorization_servers` entry. Multiple AS values are independent issuers — **do not reuse client credentials across them**.
- Discovery order: parse `WWW-Authenticate` `resource_metadata` on 401; else GET `/.well-known/oauth-protected-resource{path}` then `/.well-known/oauth-protected-resource`. Optional `scope` in the challenge feeds scope selection.
- AS metadata: for issuer `https://auth.example.com/tenant1` try (1) `/.well-known/oauth-authorization-server/tenant1` (2) `/.well-known/openid-configuration/tenant1` (3) `/tenant1/.well-known/openid-configuration`. Pathless issuers: RFC 8414 then OIDC at the origin.
- **Issuer check:** the document’s `issuer` MUST equal the identifier used to build the well-known URL. Reject `attacker.example` metadata that claims `"issuer": "https://honest.example"`.
- After tokens: send `Authorization: Bearer` and RFC 8707 `resource` as in `mcp-oauth-scopes`. Discovery is not authorization.

## Sources

- [MCP Authorization Server Discovery (2026-07-28)](https://modelcontextprotocol.io/specification/2026-07-28/basic/authorization/authorization-server-discovery) — accessed 2026-08-26
- [MCP Authorization (2026-07-28)](https://modelcontextprotocol.io/specification/2026-07-28/basic/authorization) — accessed 2026-08-26
- [RFC 9728 OAuth 2.0 Protected Resource Metadata](https://datatracker.ietf.org/doc/html/rfc9728) — accessed 2026-08-26
