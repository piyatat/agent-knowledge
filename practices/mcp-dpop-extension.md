---
id: mcp-dpop-extension
title: MCP DPoP — sender-constrained tokens (roadmap / SEP-1932)
tags: [mcp, oauth, security, identity]
status: draft
updated: 2026-09-28
when_to_use: Planning sender-constrained OAuth for remote MCP — do not treat DPoP as part of 2026-07-28
---

## Summary

**DPoP** (RFC 9449) binds an access token to a client-held key so a leaked bearer cannot be replayed. The official MCP roadmap still lists **finalizing DPoP** under Agent Identity — it is **not** in the 2026-07-28 core spec. **SEP-1932** remains the in-flight profile. TypeScript SDK client/server PRs exist; conformance still treats DPoP as an **unscored extension**. Do not require DPoP proofs on production MCP until an extension or spec revision ships.

## Notes

- Today’s remote MCP auth is still OAuth 2.1 + PKCE, audience-bound tokens, CIMD, and optional extensions (EMA, client credentials). Those stay the implementable path (`mcp-oauth-scopes`, `mcp-oauth-client-credentials`).
- Roadmap intent: an Agent Identity WG owns DPoP adoption plus WIF (SEP-1933), ID-JAG / EMA, and RFC 8693 token exchange. Human-presence attestation is “under discussion,” not committed.
- SDK work (opt-in, not a core 2026-07-28 feature): typescript-sdk `#2629` (client) implements `OAuthClientProvider.dpop()` → `DpopSession`, signs proofs on token + resource requests, retries once on `use_dpop_nonce`. `#2630` (server) validates RFC 9449 proofs and rejects a DPoP-bound token presented as Bearer. Hosts that omit `dpop()` stay Bearer-only.
- Tier 1 TS SDK assessment still lists `auth/dpop` and `auth/dpop-nonce` as expected extension failures. Complementary (not competing) draft: SEP-2752 RFC 9421 HTTP Message Signatures for non-OAuth / API-key clients.
- If you need PoP **now**, use your AS’s existing DPoP support in front of Streamable HTTP as a private profile, and keep it out of the MCP capability advertisement so peers do not assume SEP-1932. Prefer short-lived, audience-bound tokens over inventing a second header contract. Revisit when a published `io.modelcontextprotocol/…` DPoP extension exists.

## Sources

- [MCP development roadmap](https://modelcontextprotocol.io/development/roadmap) — accessed 2026-09-28
- [The New MCP Roadmap (blog)](https://blog.modelcontextprotocol.io/posts/mcp-roadmap/) — accessed 2026-08-31
- [SEP-1932: DPoP Profile for MCP](https://github.com/modelcontextprotocol/modelcontextprotocol/pull/1932) — accessed 2026-09-28
- [typescript-sdk DPoP client PR](https://github.com/modelcontextprotocol/typescript-sdk/pull/2629) — accessed 2026-09-28
- [typescript-sdk DPoP server PR](https://github.com/modelcontextprotocol/typescript-sdk/pull/2630) — accessed 2026-09-28
- [TypeScript SDK Tier 1 Assessment](https://github.com/modelcontextprotocol/modelcontextprotocol/issues/3268) — accessed 2026-09-28
