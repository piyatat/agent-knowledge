---
id: svix
title: Svix — customer webhooks, ingest, and dashboard MCP
kind: service
tags: [svix, webhooks, mcp, messaging]
status: active
updated: 2026-11-25
when_to_use: Sending webhooks to your customers, or letting an agent debug Svix deliveries and ingest
---

## Summary

**Svix** is a hosted webhook platform. You send messages to a consumer application (usually one per customer), and Svix delivers them to that customer’s endpoints. It also ingests webhooks from providers such as Stripe or GitHub and forwards the verified payload to your handler. Two MCP servers exist: Dashboard MCP for your environment, and App Portal MCP for one customer application. Use Svix when you operate the webhook sender. Use Hookdeck (`hookdeck`) when the job is receiving provider webhooks into your own services. Use Standard Webhooks (`standard-webhooks`) when you only need the signature scheme. Use Inngest (`inngest`) when the job is a durable workflow, not customer delivery.

## Notes

- **Access.** Sign up at `links.get`. API keys are per environment. Every org starts with a development environment whose key is for testing, not production. Requests use `Authorization: Bearer` with that token. Viewer cannot see API keys. Member manages applications and endpoints. Admin also manages members. Accepting an invitation to another org removes the person from the account they are in now.
- **What you send.** A message names an application, an `eventType`, an optional `eventId` unique to that application, and a JSON payload. Svix does not insert the event type into the payload. Delivery is at least once. A `2xx` within 30 seconds succeeds. Anything else, including a `3xx`, fails and follows the retry schedule. Retries are free. Messages with no endpoint are not billed. Each 64 KiB chunk of payload counts as one message. The quickstart asks senders to stay under 40 KiB.
- **Plans (pricing page, 2026-11-22).** Free is $0 with no card: 50 messages a second, 7-day retention, and 50,000 messages a month, with no on-demand rate listed. Basic starts at $20 a month: 99.9% SLA, 200 messages a second, 30-day retention, 50,000 included, then $0.0001 each. Professional starts at $490 a month: 99.99% SLA, 800 messages a second, 90-day retention, an unbranded portal, static source IPs, and object-storage endpoints. Enterprise is custom. Environments, applications, and transformations are unlimited on those plans. Connectors are 1 on Free and Basic, 3 on Professional.
- **Agents.** Dashboard MCP is `https://mcp.<region>.svix.com/dashboard` (`us`, `eu`, `ca`, or `au`), OAuth, and one environment. It can create ingest sources, read signing secrets and payloads, replay failures, and change endpoints. The grant lasts 30 days. It is Svix Cloud only. App Portal MCP is off by default on existing accounts. Turn it on per environment. A customer token is application-scoped, shown once, and valid for 7 days by default. Expire revokes it immediately.
- **Signing.** Svix implements Standard Webhooks. `svix-id`, `svix-timestamp`, and `svix-signature` are aliases of `webhook-id`, `webhook-timestamp`, and `webhook-signature`.
- **Caveats.** A fresh SDK idempotency key does not dedupe a retry, and a failing endpoint can disable itself. Details: `svix-idempotency-and-disable`.

## Sources

- [Svix quickstart](https://docs.svix.com/quickstart) — accessed 2026-11-22
- [Svix API keys](https://docs.svix.com/api-keys) — accessed 2026-11-22
- [Svix pricing](https://www.svix.com/pricing/) — accessed 2026-11-22
- [Retry schedule](https://docs.svix.com/retries) — accessed 2026-11-22
- [Idempotency](https://docs.svix.com/idempotency) — accessed 2026-11-22
- [Svix FAQ — Standard Webhooks](https://docs.svix.com/faq) — accessed 2026-11-22
- [Dashboard MCP](https://docs.svix.com/ai/dashboard-mcp) — accessed 2026-11-22
- [Consumer App Portal MCP](https://docs.svix.com/ai/app-portal-mcp) — accessed 2026-11-22
- [Connecting your coding agent](https://docs.svix.com/receiving/using-app-portal/connecting-your-coding-agent) — accessed 2026-11-22
- [Managing member access](https://docs.svix.com/account/org-members) — accessed 2026-11-22
- [Svix sign-up](https://dashboard.svix.com/signup) — accessed 2026-11-22
