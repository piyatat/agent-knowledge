---
id: mcp-2026-roadmap
title: MCP 2026 roadmap — five priority areas
tags: [mcp, roadmap, identity, transport]
status: active
updated: 2026-08-23
when_to_use: Deciding whether a missing MCP feature is already in 2026-07-28 or still roadmap (DPoP, WIF, HTTP-over-stdio)
---

## Summary

The official MCP roadmap (updated 2026-08-22) is **direction, not a ship date**. SEPs inside five priority areas get expedited review. Do not implement custom “agent identity” or assume DPoP/WIF are in the current spec.

## Notes

- **Already shipped in 2026-07-28** (looking back): stateless core (SEP-2575/2567), `server/discover`, list caching (SEP-2549), Tasks as `io.modelcontextprotocol/tasks` (SEP-2663), MRTR (SEP-2322), auth hardening (iss, issuer-bound credentials, CIMD), Enterprise-Managed Authorization as a stable extension. Server Cards (`.well-known` MCP metadata) are still a Working Group.
- **1. Agentic messaging:** compose Tasks, `subscriptions/listen`, and progress; add server-initiated events (webhooks/channels) so clients stop polling.
- **2. HTTP-native transport:** one binding — Streamable HTTP also over stdio (HTTP/2 multiplex); caching extended with ETags for primitive results.
- **3. Agent identity:** today’s OAuth assumes a browser user. Next: finalize DPoP; opinionated agent/delegation path via Workload Identity Federation (SEP-1933), ID-JAG / Enterprise-Managed Authorization, RFC 8693 token exchange (IETF OAuth + WIMSE). Human-presence attestation is “under discussion,” not committed.
- **4. Improved primitives:** one `tools/call` result contract; **progressive discovery** so catalogs are not dumped up front; revisit content annotations (SEP-2200). File Uploads WG continues separately.
- **5. SDK DX:** extension contract (which role binds); experiment generating a Tier 1 SDK + quickstarts from the spec + conformance suite.

## Sources

- [MCP development roadmap](https://modelcontextprotocol.io/development/roadmap) — accessed 2026-08-23
- [The New MCP Roadmap (blog)](https://blog.modelcontextprotocol.io/posts/mcp-roadmap/) — accessed 2026-08-23
