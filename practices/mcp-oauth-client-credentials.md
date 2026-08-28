---
id: mcp-oauth-client-credentials
title: MCP OAuth Client Credentials extension (M2M)
tags: [mcp, oauth, extensions, ci]
status: active
updated: 2026-08-28
when_to_use: Connecting a CI job, daemon, or backend to a remote MCP server with no human in the loop
---

## Summary

Official extension `io.modelcontextprotocol/oauth-client-credentials`. The client proves **application** identity to the AS (`client_credentials` or RFC 7523 JWT bearer) and sends `Authorization: Bearer` to the MCP server. No browser, no user. Prefer JWT assertions over long-lived `client_secret`.

## Notes

- Use for schedulers, CI, server-to-server. If a person should click Approve, use core OAuth. If employees should inherit IdP policy, use EMA (`mcp-enterprise-managed-auth`).
- JWT bearer (recommended): `grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer` with `iss`/`sub` = client id, `aud` = token endpoint, short `exp`. AS verifies against the client’s registered public key. Secrets: `grant_type=client_credentials` + id/secret — store in a secrets manager, rotate, least privilege; leaked secret is silent impersonation until rotation.
- Client: advertise the extension in `_meta` clientCapabilities; obtain a token **before** MCP calls; refresh before expiry (M2M tokens are often shorter than user tokens). Official TS/Python SDKs ship providers that refresh for you.
- Server: validate JWT/introspection on every request; enforce scopes; advertise the extension on `server/discover` so clients can detect M2M support. Tokens still MUST be audience-bound to this MCP server (`mcp-oauth-scopes`).
- Opt-in via `mcp-extensions-framework`. Do not paste secrets into repo config or agent transcripts.

## Sources

- [OAuth Client Credentials extension](https://modelcontextprotocol.io/extensions/auth/oauth-client-credentials) — accessed 2026-08-28
- [Authorization extensions overview](https://modelcontextprotocol.io/extensions/auth/overview) — accessed 2026-08-28
- [RFC 7523 JWT Bearer](https://datatracker.ietf.org/doc/html/rfc7523) — accessed 2026-08-28
