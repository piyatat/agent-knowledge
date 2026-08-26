---
id: a2a-enterprise-auth
title: A2A auth — HTTP headers, not JSON-RPC identity
tags: [a2a, auth, security, oauth]
status: active
updated: 2026-08-26
when_to_use: Declaring Agent Card securitySchemes or sending credentials on A2A JSON-RPC / gRPC / HTTP+JSON calls
---

## Summary

A2A does not invent an identity protocol. Production traffic is **TLS**; credentials go in **HTTP headers / gRPC metadata**, never in JSON-RPC payloads. The Agent Card advertises OpenAPI-shaped `securitySchemes` + `security`. Clients obtain tokens **out of band**.

## Notes

- Schemes (exactly one per object): `apiKey`, HTTP (Basic/Bearer), OAuth 2.0, OpenID Connect, **mTLS**. v1.0 adds Device Code (RFC 8628), drops implicit/password, and adds `pkce_required` on Authorization Code.
- Every request: authenticate using a declared scheme. Missing/invalid → **401** + `WWW-Authenticate`; authenticated but not allowed → **403**. Authorize per identity, skill, and data — OAuth scopes SHOULD map to skills.
- In-task extra credentials: `TASK_STATE_AUTH_REQUIRED` hands the OAuth/human-approval hop back to the client; do not stuff secondary tokens into message parts.
- Opaque agents: no shared memory/tools. Treat the peer as a normal HTTP app. HTTPS in production; clients SHOULD verify server certs (TLS 1.2+; spec recommends 1.3).
- Extended cards: `capabilities.extendedAgentCard` + **GetExtendedAgentCard** (renamed from `agent/getAuthenticatedExtendedCard`). Keep sensitive skills off the public well-known card.
- Observability rides HTTP (W3C Trace Context). Pair with signed cards (`a2a-signed-agent-cards`) so the advertised schemes themselves are authentic.

## Sources

- [A2A Enterprise-Ready Features](https://a2a-protocol.org/latest/topics/enterprise-ready/) — accessed 2026-08-26
- [A2A Protocol specification — security](https://a2a-protocol.org/latest/specification/) — accessed 2026-08-26
- [What's New in A2A v1.0](https://a2a-protocol.org/latest/whats-new-v1/) — accessed 2026-08-26
