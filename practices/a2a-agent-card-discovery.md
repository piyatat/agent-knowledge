---
id: a2a-agent-card-discovery
title: A2A Agent Card discovery and well-known URIs
tags: [a2a, discovery, orchestration, security]
status: active
updated: 2026-09-20
when_to_use: Publishing or consuming an Agent2Agent Agent Card so peers can find skills and auth without a shared tool loop
---

## Summary

A2A standardizes **what** an agent advertises (the Agent Card JSON) but not a single global registry. Clients discover cards via a well-known URI, a curated catalog, or private config. The well-known path serves the card; the **interface URL(s) inside the card** are where you send RPCs.

## Notes

- Card contents: identity (`name`, `description`, `provider`), capabilities (`streaming`, `pushNotifications`, optional `extendedAgentCard`), auth schemes, and `AgentSkill` objects (`id`, modes, examples). Use the card to decide suitability and how to authenticate; do not embed static secrets.
- Well-known (RFC 8615): `https://{domain}/.well-known/agent-card.json` (media type `application/a2a+json` in v1.0; older SDKs still look at `/.well-known/agent.json` — publish both during migration). Client GETs that path, then calls `message/send` / `message/stream` / `tasks/get` on an **interface URL**, not the well-known path.
- v1.0 transport: prefer `supportedInterfaces[]` (`url`, `protocolBinding`, `protocolVersion`; first entry is preferred) over a lone top-level `url`. A v1.0 client that only looks for `supportedInterfaces` treats a v0.x card as having **no reachable interface**. Bindings and `A2A-Version` are `a2a-protocol-bindings`.
- Registries: useful for enterprise governance and skill/tag search. A2A does **not** prescribe a registry API — treat catalogs as policy layers, not protocol. Private/direct config is fine for static topologies; any card change forces client reconfiguration.
- Sensitive cards: protect the HTTP endpoint (mTLS, network allowlists, OAuth). Prefer an **authenticated extended** card over stuffing internals into the public card. Cache with `Cache-Control` / `ETag` (often derived from `version` or a hash); clients should conditional-GET. Extended cards are session-scoped — see spec §8.6.

## Sources

- [Agent Discovery (A2A Protocol)](https://a2a-protocol.org/latest/topics/agent-discovery/) — accessed 2026-09-20
- [What's New in A2A v1.0](https://a2a-protocol.org/latest/whats-new-v1/) — accessed 2026-09-20
- [A2A Protocol specification](https://a2a-protocol.org/latest/specification/) — accessed 2026-09-20
