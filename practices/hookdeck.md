---
id: hookdeck
title: Hookdeck — inbound event gateway and a hosted MCP server
kind: service
tags: [hookdeck, webhooks, events, mcp]
status: active
updated: 2026-11-25
when_to_use: Receiving provider webhooks into your own services, or letting an agent inspect and retry Hookdeck deliveries
---

## Summary

**Hookdeck** is hosted webhook infrastructure. The Event Gateway receives HTTP from a provider, runs filters and transformations, and delivers to your destinations with at-least-once attempts. Outpost, a second product with its own plan, sends webhooks to your customers. Event Gateway Developer is $0 for 10,000 events a month and one user; past that allowance the dashboard locks. A remote MCP server at `https://mcp.hookdeck.com` (24 November 2026) signs in with Hookdeck and defaults to read-only, except that pause is still available. Use Hookdeck when provider webhooks must be queued into your app. Use Svix (`svix`) when you operate the sender. Use QStash (`qstash`) when you only schedule your own HTTP calls.

## Notes

- **Access.** Sign up at `links.get`. That page stayed on the URL on 2026-11-25 and is titled Sign Up with Hookdeck. No card is required. Event Gateway and Outpost are separate plans and, when both are paid, separate invoices. A 14-day trial only lets you invite teammates; Developer usage limits still apply. Remote MCP is OAuth to `https://mcp.hookdeck.com` for both products. At sign-in you pick organizations, projects, expiry, and Read only (the default) or Read and write. A bearer key from Keys & Sessions is the path for clients that cannot sign in. Revoke a session under Settings → Account → Keys & Sessions.
- **What is billed.** An inbound HTTP call to a source is a request. It becomes an event only after it is tied to a connection, and only events that pass every rule are queued. One request can become zero, one, or many events. A delivery to a destination is an attempt. Retries are included in the event price. Filtered or disabled traffic counts as a discarded request, not an event. Delivery above the project throughput queues inside the retention window; it does not drop those events. Raising the included 5 events per second per destination requires a paid plan. Outpost throughput is not capped.
- **Event Gateway plans (pricing page, 2026-11-25).** Developer is $0: 10,000 events, 100,000 discarded requests, 3-day retention, 1 user, and a dash where paid plans show additional events. Team starts at $39 a month: the same included events, then metered delivery, 7-day retention, unlimited users. Growth starts at $499: 30-day retention, uptime and latency SLAs, metrics export, a read-only role, SSO, and HIPAA. Enterprise is custom. Extra delivered events on paid plans start at $3 per 100,000 up to 5 million a month, then step down. Extra discarded requests on the paid columns are $2.50 per million. Throughput from 6 to 25 events per second is $3 per event per second, prorated, and lower per unit above that.
- **Agents.** Read-only MCP can list and search requests, events, attempts, issues, and metrics, test a transformation, and estimate a bulk retry. It can also pause a connection; Hookdeck holds those events until you resume. Write access adds retry, cancel, mute, bulk retry, and changes to connections, sources, destinations, and transformations. A bearer key gets the write tools that user can use and stays on its own project. Switching the active project is stored on the OAuth sign-in, so every chat using that sign-in follows. Most credentials in answers are `[redacted]`. A tenant token, a tenant portal link, and an Outpost destination signing secret on create or update are returned, and so is `raw_body` and any credential the server does not recognize. Publishing to Outpost is not an OAuth tool. The CLI MCP still runs and will be deprecated. Inspect URLs capture a payload with no account.
- **Delivery.** Handlers should be idempotent. The source gets Hookdeck’s own HTTP response, not the destination’s body. A destination timeout for an agent run can be set up to 15 minutes. There is no debounce: a deduplicate window does not extend when later events arrive, and the delivered payload is the first one in the window. Multipart attachments are malformed. Details: `hookdeck-developer-lock-and-mcp-write`.

## Sources

- [Event Gateway pricing](https://hookdeck.com/pricing) — accessed 2026-11-25
- [Billing](https://hookdeck.com/docs/platform/billing) — accessed 2026-11-25
- [Hookdeck basics](https://hookdeck.com/docs/hookdeck-basics) — accessed 2026-11-25
- [MCP and skills](https://hookdeck.com/docs/mcp) — accessed 2026-11-25
- [Remote MCP server](https://hookdeck.com/changelog/remote-mcp) — accessed 2026-11-25
- [Sign up for Hookdeck](https://dashboard.hookdeck.com/signup) — accessed 2026-11-25
- [Hookdeck](https://hookdeck.com/) — accessed 2026-11-25
- [Hookdeck docs](https://hookdeck.com/docs) — accessed 2026-11-25
