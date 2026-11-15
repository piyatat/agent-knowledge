---
id: ucp-commerce
title: UCP — Universal Commerce Protocol
kind: protocol
tags: [ucp, commerce, checkout, discovery]
status: active
updated: 2026-11-15
when_to_use: Letting an agent discover a merchant and check out over UCP instead of scraping a storefront
---

## Summary

The **Universal Commerce Protocol (UCP)** (Apache-2.0, `Universal-Commerce-Protocol/ucp`) is how a platform (an agent or app) and a business agree on shopping operations: discovery, cart, checkout, fulfillment, and order. The release read here is **2026-08-25**. Payment *authorization* stays in AP2 (`ap2-payments`); paying an HTTP or MCP call stays in x402 (`x402-payments`). Google documents UCP for direct buying in AI Mode and the Gemini app.

## Notes

- **Discovery.** A business publishes a JSON profile at `/.well-known/ucp`. A platform names its own profile on each request with the `UCP-Agent` header (`profile="https://…"`). `ucp.version`, `ucp.services`, and `ucp.payment_handlers` are required (the two registries may be empty). `ucp.capabilities` is optional. Profiles may be cached. There is no central registry and no required prior signup — a business can still refuse a caller.
- **Transports.** Each service binding is `rest` (OpenAPI 3.x), `mcp` (OpenRPC), `a2a` (Agent Card URL in `endpoint`), or `embedded` (OpenRPC). `endpoint` is `https`, without a trailing slash; REST paths append to it (`POST {endpoint}/checkout-sessions`). The `a2a` binding is peer delegation (`agent-to-agent-a2a-protocol`), not a second checkout schema.
- **Names and schemas.** Capability and service names are reverse-domain (`dev.ucp.shopping.checkout`). A `schema` URL must be `https`, must not use userinfo, and its host must be a label-aligned match for the name. Platforms must reject a mismatch **before** fetching and must not follow redirects. A public-suffix host (`github.io`, a shared bucket domain) does not prove you control the namespace. A `spec` URL is documentation only.
- **Auth.** Both sides publish verification keys on the profile (`keys[]`, including an EC P-256 key used for AP2 merchant authorization). HTTP Message Signatures (RFC 9421) prove the signer. API keys, OAuth, and mTLS are allowed only when the authenticated principal is allowed to act as the profile in `UCP-Agent` — a mismatch is a reject. Amounts are minor units (cents). Dates are RFC 3339.
- **Google.** Merchant docs describe native checkout on AI Mode and Gemini, plus an optional embedded (iframe) checkout for approved merchants. Their profile example still shows version **2026-04-08**. Negotiate the version the business advertises; do not assume every merchant is on 2026-08-25.
- **Alternatives.** AP2 when the missing piece is a signed mandate, not the catalog. A normal merchant API when both sides already share one. x402 when the agent is paying for a tool call rather than a cart.
- **Caveats.** Authority binding proves who published a schema, not that the schema is safe to trust. Fetching `/.well-known/ucp` or a `schema` URL is still an outbound request — apply the spec’s fetch-safety rules so discovery cannot be aimed at link-local or cloud-metadata addresses. Do not log mandate signatures or payment-handler config.

## Sources

- [UCP specification overview (2026-08-25)](https://ucp.dev/2026-08-25/specification/overview/) — accessed 2026-11-15
- [UCP release v2026-08-25](https://github.com/Universal-Commerce-Protocol/ucp/releases/tag/v2026-08-25) — accessed 2026-11-15
- [UCP Apache-2.0 license](https://raw.githubusercontent.com/Universal-Commerce-Protocol/ucp/main/LICENSE) — accessed 2026-11-15
- [Get started with UCP on Google](https://developers.google.com/merchant/ucp) — accessed 2026-11-15
- [Create a UCP profile (Google)](https://developers.google.com/merchant/ucp/implementation/2026-04-08/publish-profile) — accessed 2026-11-15
