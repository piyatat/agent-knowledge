---
id: mcp-enterprise-managed-auth
title: MCP Enterprise-Managed Authorization (ID-JAG)
tags: [mcp, oauth, identity, extensions]
status: active
updated: 2026-08-28
when_to_use: Replacing per-server OAuth consent with corporate IdP policy for employee MCP access
---

## Summary

Official extension `io.modelcontextprotocol/enterprise-managed-authorization` (`ext-auth`, SEP-990). The **enterprise IdP** (Okta, Entra, …) decides which MCP servers an employee may use. The client exchanges an Identity Assertion for an **ID-JAG**, then the MCP Authorization Server exchanges that for an MCP access token. **Do not** send the user to the MCP AS authorize endpoint.

## Notes

- Use for employees + org policy, onboarding/offboarding, audit. Use core OAuth code+PKCE for consumer/user-driven consent (`mcp-oauth-scopes`). Use client credentials for daemons (`mcp-oauth-client-credentials`).
- Flow: user SSO to the MCP **client** → store ID Token / SAML assertion → on EMA-required server, request ID-JAG from the IdP (policy evaluated here) → POST ID-JAG to the MCP AS token endpoint → call the MCP resource with the access token.
- Client: declare the extension in per-request `_meta` clientCapabilities; configure IdP endpoints at **org** scope, not per user; honor IdP scopes (they may differ from the MCP catalog).
- MCP AS: verify ID-JAG signature (IdP JWKS), `aud` / `iss` / `exp`. Map claims to permissions. Link accounts with `sub` as the stable id; `email` only as a fallback for pre-EMA users.
- Server: advertise EMA in authorization metadata so clients skip the interactive AS. Optional: publish a resource descriptor for IdP admin catalogs. Opt-in; never default-on (`mcp-extensions-framework`).

## Sources

- [Enterprise-Managed Authorization](https://modelcontextprotocol.io/extensions/auth/enterprise-managed-authorization) — accessed 2026-08-28
- [Authorization extensions overview](https://modelcontextprotocol.io/extensions/auth/overview) — accessed 2026-08-28
- [MCP Authorization (2026-07-28)](https://modelcontextprotocol.io/specification/2026-07-28/basic/authorization) — accessed 2026-08-28
