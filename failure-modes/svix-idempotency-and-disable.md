---
id: svix-idempotency-and-disable
title: A Svix retry sends the event twice, or a failing endpoint turns itself off
kind: knowledge
tags: [svix, webhooks, idempotency, billing]
status: active
updated: 2026-11-22
when_to_use: A Svix send duplicated an event, a customer endpoint stopped receiving, or the message count jumped with payload size
---

## Summary

Svix (`svix`) delivers at least once. The official SDK fills `Idempotency-Key` with a new UUID on each POST unless you pass one, so a retried create is a second message. A customer endpoint that fails for days is disabled. Payloads are billed in 64 KiB chunks, and the event type is not added to the body.

## Notes

- **Idempotency.** Pass your own `Idempotency-Key` on the POST. The same auth token and the same key replay the first successful status and body for up to 12 hours. Idempotency applies only to POST. `eventId` must be unique inside one application, and the docs say not to use it as a substitute for the idempotency key. Receivers should dedupe on `webhook-id` (the same id on every retry of that message). Re-parsing the body and signing it again fails verification (`standard-webhooks-reserialized-body`).
- **What counts as success.** A `2xx` within 30 seconds. A `3xx` is a failure. The schedule after a failure is immediate, 5 seconds, 5 minutes, 30 minutes, 2 hours, 5 hours, 10 hours, and another 10 hours. Then the attempt is exhausted and Svix emits `message.attempt.exhausted`. `webhook-delivery: abort-message` stops retries of that message. `webhook-delivery: disable` disables the endpoint. `Retry-After` is best-effort and is capped at 7 days.
- **Auto-disable.** If every attempt to an endpoint fails for 5 days, Svix disables it and sends `EndpointDisabledEvent`. The clock starts only after several failures inside 24 hours, with at least 12 hours between the first and the last. Environment settings can turn this off. Removing or disabling an endpoint stops further attempts.
- **Billing.** Only attempted messages count. Messages filtered because nothing is subscribed, and retries, are free. Each 64 KiB of payload is one message, so a large body spends the 50,000-message allowance faster. Free lists no on-demand price above that allowance. The quickstart asks for payloads under 40 KiB.
- **Agent access.** Dashboard MCP can read ingest signing secrets and message payloads, and its replay and rotate tools send real traffic or change live config. Revoking a grant stops refresh immediately, but the credential already held keeps working for up to an hour. App Portal tokens last 7 days unless expired sooner, and that server is off until an admin enables it for the environment. Accepting an org invite leaves the account the person was already in.

## Sources

- [Idempotency](https://docs.svix.com/idempotency) — accessed 2026-11-22
- [Svix quickstart](https://docs.svix.com/quickstart) — accessed 2026-11-22
- [Retry schedule](https://docs.svix.com/retries) — accessed 2026-11-22
- [Svix pricing](https://www.svix.com/pricing/) — accessed 2026-11-22
- [Dashboard MCP](https://docs.svix.com/ai/dashboard-mcp) — accessed 2026-11-22
- [Connecting your coding agent](https://docs.svix.com/receiving/using-app-portal/connecting-your-coding-agent) — accessed 2026-11-22
- [Managing member access](https://docs.svix.com/account/org-members) — accessed 2026-11-22
