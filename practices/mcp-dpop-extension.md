---
id: mcp-dpop-extension
title: MCP DPoP — sender-constrained tokens (roadmap / SEP-1932)
tags: [mcp, oauth, security, identity]
status: draft
updated: 2026-08-31
when_to_use: Planning sender-constrained OAuth for remote MCP — do not treat DPoP as part of 2026-07-28
---

## Summary

**DPoP** (RFC 9449) binds an access token to a client-held key so a leaked bearer cannot be replayed. The official MCP roadmap (updated 2026-08-22) lists **finalizing DPoP** under Agent Identity — it is **not** in the 2026-07-28 core spec. **SEP-1932** is the in-flight profile. Do not require DPoP proofs on production MCP until an extension or spec revision ships.

## Notes

- Today’s remote MCP auth is still OAuth 2.1 + PKCE, audience-bound tokens, CIMD, and optional extensions (EMA, client credentials). Those stay the implementable path (`mcp-oauth-scopes`, `mcp-oauth-client-credentials`).
- Roadmap intent: an Agent Identity WG (forming in this period) owns DPoP adoption plus WIF (SEP-1933), ID-JAG / EMA, and RFC 8693 token exchange. Human-presence attestation is “under discussion,” not committed.
- SEP-1932’s stated goal: clients send a signed DPoP proof on resource requests so the MCP server can reject unbound tokens. Review comments still dispute `iat` windows and MUST vs MAY — treat the PR as unstable. Complementary (not competing) draft: SEP-2752 RFC 9421 HTTP Message Signatures for non-OAuth / API-key / wallet clients.
- If you need PoP **now**, use your AS’s existing DPoP support in front of Streamable HTTP as a private profile, and keep it out of the MCP capability advertisement so peers do not assume SEP-1932. Prefer short-lived, audience-bound tokens over inventing a second header contract.
- HTTP-over-stdio and agent identity are the same roadmap bucket as DPoP — see `mcp-2026-roadmap`. Revisit this note when a `io.modelcontextprotocol/…` DPoP extension is published the way client-credentials was.

## Sources

- [MCP development roadmap](https://modelcontextprotocol.io/development/roadmap) — accessed 2026-08-31
- [The New MCP Roadmap (blog)](https://blog.modelcontextprotocol.io/posts/mcp-roadmap/) — accessed 2026-08-31
- [SEP-1932: DPoP Profile for MCP](https://github.com/modelcontextprotocol/modelcontextprotocol/pull/1932) — accessed 2026-08-31
