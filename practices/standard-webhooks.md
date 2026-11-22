---
id: standard-webhooks
title: Standard Webhooks — signed webhook headers and retries
kind: protocol
tags: [webhooks, signatures, http, interoperability]
status: active
updated: 2026-11-22
when_to_use: Verifying or sending webhooks with Standard Webhooks headers instead of a vendor-specific signature
---

## Summary

**Standard Webhooks** is an open specification (version 1.0.0, Apache-2.0) for how a producer signs and retries an HTTP webhook. The body stays the producer’s payload. Authenticity lives in `webhook-id`, `webhook-timestamp`, and `webhook-signature`. Svix (`svix`) co-created the spec and sends those headers, plus `svix-id`, `svix-timestamp`, and `svix-signature` as aliases. Use the spec when you verify or emit webhooks yourself. Use Svix when a hosted sender should store endpoints, retry, and fan out.

## Notes

- **Headers.** `webhook-id` is stable across retries of the same event and is the idempotency key. `webhook-timestamp` is the unix time of this attempt, in seconds, and changes when the attempt is retried. It is not the event time inside the payload. `webhook-signature` is a space-separated list so a producer can sign with the current key and the previous key during rotation. Symmetric signatures are `v1` (HMAC-SHA256). Asymmetric signatures are `v2a` (ed25519 over the SHA-256 of the signed content). `v1a` is deprecated.
- **What is signed.** Symmetric: `msg_id.timestamp.payload`, with the raw body bytes. Asymmetric: `endpoint_id.msg_id.timestamp.payload`. The endpoint id is shared when the endpoint is created. It is not a request header, and a verifier must not take it from the request. Symmetric secrets are unique per endpoint, base64, and prefixed `whsec_`. Asymmetric public keys are `whpk_`. The spec recommends one asymmetric key pair per environment, not one per endpoint.
- **Payload.** Shape is a recommendation, not a requirement: JSON with `type`, an ISO-8601 event `timestamp`, and `data`. The spec suggests keeping payloads under about 20 KB and sending a URL for large assets. A thin payload (identifiers only) makes data access auditable. A full payload avoids a follow-up fetch.
- **Delivery.** Success is any `2xx`. A `3xx` is a failure. Do not follow redirects. `410 Gone` means stop and disable the endpoint. `429`, `502`, and `504` should throttle. A recommended producer timeout is 15 to 30 seconds. The spec’s example retry schedule runs for a little over three days, with jitter advised. Consumers should reject timestamps outside a tolerance they choose. The spec does not fix that window.
- **SSRF.** Producers that let customers set the URL should block internal networks. The spec points at a filtering proxy and a subnet that cannot reach internal services.
- **Caveats.** Parsing the body as JSON and serializing it again breaks the signature. Details: `standard-webhooks-reserialized-body`.

## Sources

- [Standard Webhooks specification 1.0.0](https://github.com/standard-webhooks/standard-webhooks/blob/main/spec/standard-webhooks.md) — accessed 2026-11-22
- [Standard Webhooks](https://www.standardwebhooks.com/) — accessed 2026-11-22
- [Svix FAQ — Standard Webhooks](https://docs.svix.com/faq) — accessed 2026-11-22
