---
id: standard-webhooks-reserialized-body
title: A Standard Webhooks signature fails after the body is re-serialized
kind: knowledge
tags: [webhooks, signatures, security, idempotency]
status: active
updated: 2026-11-22
when_to_use: A webhook signature check fails on a body that parsed as JSON, or a retry is processed twice
---

## Summary

Standard Webhooks (`standard-webhooks`) signs the raw request body, the message id, and the attempt timestamp. Parsing JSON and writing it back out changes bytes, so the signature no longer matches. `webhook-id` stays the same across retries. `webhook-timestamp` does not. `v2a` also signs an endpoint id that is not in the request.

## Notes

- **Raw body.** Symmetric content is `webhook-id`, a full stop, `webhook-timestamp`, a full stop, then the exact payload bytes. A stray space or a reordered key fails verification. Read the body before any JSON parser consumes it. Compare HMAC signatures in constant time. Asymmetric verification should use a maintained library and accept the webhook if any signature in the header matches any trusted public key.
- **Asymmetric endpoint id.** `v2a` signs `endpoint_id.msg_id.timestamp.payload`. The producer gave you the endpoint id with the public key. Using an id from a header or from the payload lets a webhook signed for another endpoint verify. `v1a` is deprecated. It signed the content without an endpoint id and expected a unique key pair per endpoint. Producers should send `v2a`.
- **Replay and duplicates.** Reject a `webhook-timestamp` outside the tolerance you chose. The spec requires a tolerance and does not name the number of seconds. The id is the idempotency key: store it and skip a repeat. The attempt timestamp changes on every retry, so it is the wrong dedupe key, and it is not the event time inside the payload.
- **Status codes.** Return `2xx` only after you have accepted the event. A redirect (`3xx`) is a failure, not a successful handoff. `410` tells a compliant producer to disable the endpoint. Do not trust a public key that arrived in the same request as the signature.
- **Svix aliases.** Svix (`svix`) sends `svix-id`, `svix-timestamp`, and `svix-signature` as branded names for the same three headers. A Standard Webhooks library accepts either set. Svix does not insert `type` into the payload, so a verifier that expects the spec’s recommended shape still has to use the raw bytes the sender actually signed.

## Sources

- [Standard Webhooks specification 1.0.0](https://github.com/standard-webhooks/standard-webhooks/blob/main/spec/standard-webhooks.md) — accessed 2026-11-22
- [Svix FAQ — Standard Webhooks](https://docs.svix.com/faq) — accessed 2026-11-22
