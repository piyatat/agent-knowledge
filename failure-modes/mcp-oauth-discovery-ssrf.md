---
id: mcp-oauth-discovery-ssrf
title: OAuth discovery and CIMD fetch SSRF
tags: [mcp, security, oauth, failure-modes]
status: active
updated: 2026-08-28
when_to_use: Implementing MCP OAuth metadata fetch or an authorization server that resolves URL client_ids (CIMD)
---

## Summary

MCP OAuth makes the **client** (and, with CIMD, the **authorization server**) fetch attacker-influenced URLs. Unvalidated fetches reach RFC1918 space, `169.254.169.254` metadata, localhost services, or follow redirects/DNS rebinding. Block private ranges, require HTTPS, pin DNS, and do not reflect internal response bodies in errors.

## Notes

- Client-side: a malicious MCP server’s `401` `resource_metadata`, PRM `authorization_servers`, or AS metadata endpoints (`token_endpoint`, …) can point at internal URLs (`mcp-authorization-discovery`). POST to a “token” URL can mutate internal services. Error text and OAuth redirects leak the body back to the attacker.
- AS-side (CIMD): the AS GETs the URL-shaped `client_id`. A malicious client uses that as an open proxy into the AS network. Same IP/HTTPS/redirect rules apply (`mcp-oauth-scopes`).
- Mitigations: HTTPS only (loopback HTTP opt-in for dev); block `10/8`, `172.16/12`, `192.168/16`, `127/8`, `169.254/16`, `fc00::/7`, `fe80::/10`; validate **each redirect hop**; egress proxy (e.g. Smokescreen). Do not hand-roll IP parsers (octal/hex/IPv4-mapped IPv6). Pin DNS between check and fetch (TOCTOU).
- CIMD trust: allowlist domains for protected AS; open AS may accept any HTTPS `client_id` but MUST still SSRF-harden the fetch. Show hostnames on the consent screen (phishing). Exact `client_id` match to the fetched URL; allowlist `redirect_uris`.
- Pair with Origin/Host checks on local MCP HTTP (`mcp-localhost-dns-rebinding`) and token-audience rules (`mcp-server-trust-failures`).

## Sources

- [MCP Security Best Practices — SSRF](https://modelcontextprotocol.io/docs/2026-07-28/tutorials/security/security_best_practices) — accessed 2026-08-28
- [MCP Client Registration (CIMD)](https://modelcontextprotocol.io/specification/2026-07-28/basic/authorization/client-registration) — accessed 2026-08-28
- [SEP-991 — CIMD](https://modelcontextprotocol.io/seps/991-enable-url-based-client-registration-using-oauth-c) — accessed 2026-08-28
