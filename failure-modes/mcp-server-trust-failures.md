---
id: mcp-server-trust-failures
title: MCP server trust failures (passthrough, deputy, rug pull)
tags: [mcp, security, oauth, failure-modes]
status: active
updated: 2026-08-22
when_to_use: Threat-modeling remote MCP servers that proxy third-party APIs or can change their tool list after install
---

## Summary

A connected MCP server sits on the tool-trust boundary. Classic failures: **token passthrough** (forwarding client tokens downstream), **confused deputy** on OAuth-proxy servers, and **rug pulls** / tool poisoning after the user already approved the server.

## Notes

- Token passthrough is forbidden: servers MUST reject tokens not issued **for that MCP server** (audience / RFC 8707 resource) and MUST obtain a **separate** upstream token when calling third-party APIs. Forwarding the client’s token breaks rate limits, audit, and audience isolation.
- Confused deputy (official MCP security doc): an MCP proxy with a **static** third-party client ID + DCR + a leftover consent cookie can skip the consent screen and redirect an authorization code to an attacker `redirect_uri`. Mitigate with per-MCP-client consent **before** the third-party hop; prefer CIMD over DCR.
- Tool poisoning: malicious text inside tool names/descriptions/results is treated as instructions. Audit descriptions, pin versions, and do not auto-apply `tools/list_changed` expansions without re-consent.
- Rug pull: `npx`/`uvx` `@latest` or an unsigned registry pointer lets the implementation change after review. Pin digest/version; re-approve tool-set drift.
- Registry listing ≠ trust. Namespace verification only binds a name to a publisher; it does not attest runtime behavior.
- Combine with HITL for side-effecting tools, sandboxing, and prompt-injection defenses — auth bugs and poisoned descriptions stack.

## Sources

- [MCP Security Best Practices (2026-07-28)](https://modelcontextprotocol.io/docs/2026-07-28/tutorials/security/security_best_practices) — accessed 2026-08-22
- [MCP authorization security considerations](https://modelcontextprotocol.io/specification/2026-07-28/basic/authorization/security-considerations) — accessed 2026-08-22
- [MCP Security: risks and best practices (OX)](https://www.ox.security/academy/ai-security/mcp-security-risks-and-best-practices-for-model-context-protocol/) — accessed 2026-08-22
