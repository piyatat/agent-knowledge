---
id: a2a-agent-card-discovery
title: A2A Agent Card discovery and well-known URIs
tags: [a2a, discovery, orchestration, security]
status: active
updated: 2026-08-23
when_to_use: Publishing or consuming an Agent2Agent Agent Card so peers can find skills and auth without a shared tool loop
---

## Summary

A2A standardizes **what** an agent advertises (the Agent Card JSON) but not a single global registry. Clients discover cards via a well-known URI, a curated catalog, or private config. The card’s `url` is the RPC endpoint — not the well-known path that serves the card.

## Notes

- Card contents: identity (`name`, `description`, `provider`), service `url`, capabilities (`streaming`, `pushNotifications`, optional `extendedAgentCard`), auth schemes, and `AgentSkill` objects (`id`, modes, examples). Use the card to decide suitability and how to authenticate; do not embed static secrets.
- Well-known (RFC 8615): `https://{domain}/.well-known/agent-card.json`. Client GETs that path, then sends `message/send` / `message/stream` / `tasks/get` to the **card’s** `url`. Confusing those two URLs is the usual deploy bug.
- Registries: useful for enterprise governance and skill/tag search. A2A does **not** prescribe a registry API — treat catalogs as policy layers, not protocol.
- Private/direct config: fine for static topologies; any card change forces client reconfiguration.
- Sensitive cards: protect the HTTP endpoint (mTLS, network allowlists, OAuth). Prefer an **extended** card (authenticated, extra private skills) over stuffing internals into the public card. Cache with `Cache-Control` / `ETag`; clients should conditional-GET expired cards.

## Sources

- [Agent Discovery (A2A Protocol)](https://a2a-protocol.org/latest/topics/agent-discovery/) — accessed 2026-08-23
- [A2A Agent Cards (StackA2A)](https://stacka2a.dev/blog/a2a-agent-card-explained) — accessed 2026-08-23
- [A2A Agent Card Specification (StackA2A)](https://stacka2a.dev/learn/agent-card-spec) — accessed 2026-08-23
