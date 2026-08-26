---
id: a2a-signed-agent-cards
title: A2A signed Agent Cards (JWS + RFC 8785)
tags: [a2a, security, discovery, auth]
status: active
updated: 2026-08-26
when_to_use: Publishing or verifying an A2A v1.0 Agent Card so peers can detect tampering before they delegate
---

## Summary

A2A v1.0 Agent Cards **MAY** carry `signatures[]` (`AgentCardSignature`). Sign the **RFC 8785-canonical** card **excluding** `signatures` (RFC 7515 JWS). Clients **SHOULD** verify at least one signature before trusting skills, URLs, or `securitySchemes`. Unsigned cards are still public JSON.

## Notes

- Each signature: required `protected` (base64url JWS header) + `signature`; optional unprotected `header`. Protected header MUST include `alg` (e.g. ES256/RS256), `kid`, and SHOULD `typ: "JOSE"`; MAY include `jku` (JWKS URL over HTTPS).
- Canonicalize: omit unset optional fields; keep optionals that were explicitly set (even to defaults); keep REQUIRED fields; omit empty non-required repeated fields; lexicographic keys; no insignificant whitespace. Then JWS signing input = `BASE64URL(header) || '.' || BASE64URL(payload)`.
- Verify: take a signature, resolve key via `kid`/`jku` or a trusted store, drop defaults + `signatures`, RFC 8785 again, check JWS. Multiple signatures support key rotation. Do not use expired/revoked keys.
- Python SDK: `create_agent_card_signer` / `create_signature_verifier` (pass allowed `algorithms` to avoid alg confusion). `A2ACardResolver.get_agent_card(..., signature_verifier=…)`.
- Signing ≠ authentication of RPC calls. Credentials stay in HTTP headers (`a2a-enterprise-auth`). Public cards still MUST NOT embed secrets; use GetExtendedAgentCard for private skills.

## Sources

- [A2A Protocol specification — Agent Card signing](https://a2a-protocol.org/latest/specification/) — accessed 2026-08-26
- [What's New in A2A v1.0](https://a2a-protocol.org/latest/whats-new-v1/) — accessed 2026-08-26
- [a2a.utils.signing (Python SDK)](https://a2a-protocol.org/latest/sdk/python/api/a2a.utils.signing.html) — accessed 2026-08-26
