---
id: orb
title: Orb — usage-based billing, with an API-key MCP server
kind: service
tags: [orb, billing, usage, mcp]
status: active
updated: 2026-11-24
when_to_use: Rating raw usage events into invoices and credits, or letting an agent inspect a bill and change a plan
---

## Summary

**Orb** rates raw usage events into billable metrics, prices, subscriptions, credits, and invoices. You remain the seller. Orb can collect through Stripe or Adyen, and it can sync invoices to an accounting system. A remote MCP server at `https://mcp.withorb.com/mcp` forwards an Orb API key. Live and test are separate accounts that share a login and need separate keys. Use Orb when the product bills on raw events and you issue the invoice. Use Stripe (`stripe`) when Stripe Billing should own the subscription. Use Polar (`polar`) or Paddle (`paddle`) when a merchant of record should sell the software.

## Notes

- **Access.** Sign up at `links.get`. Each person starts with a live account and a test account. Test mode cannot connect a production payment processor. Create the API key in the mode you mean to call (Developers → API keys). Scopes are per area (customers and credits, subscriptions, invoices, plans and prices, and so on) at none, read, or write. The ingest API is `POST https://api.withorb.com/v1/ingest` with `Authorization: Bearer`.
- **MCP.** Streamable HTTP, API key only. OAuth is not available yet. The server holds no credential of its own, so a tool cannot exceed the key. A missing or wrong key fails the first call with 401. There is no ingest, amend, or deprecate tool. Event search looks up idempotency keys inside a 30-day window and does not search by customer or event name. Price evaluation runs one customer at a time, on ranges that start no more than 100 days ago. A tool result is capped at about 1 MB. Writes that POST accept an optional `idempotency_key`. Calls count against the account’s normal API rate limits. A full key can create subscriptions, grant credits, issue invoices, and mark invoices paid.
- **Events and metrics.** An event needs an idempotency key, exactly one of `customer_id` or `external_customer_id`, an event name, and an ISO 8601 UTC timestamp. `external_customer_id` may arrive before the customer exists and is linked when that customer is subscribed. `customer_id` must already exist. Properties are scalars only: strings, numbers, or booleans, with no nested objects or arrays. Numbers must fit in a signed 64-bit integer. A metric is a query (count, sum, max, or count distinct) over those events, separate from the price. The same metric can carry different prices per plan.
- **Plans (pricing and consumption pages, 2026-11-24).** Business is $6 per credit, and getting started includes 100 credits. One credit is $1,000 of billings processed, or 200,000 ingested events. Live and test events share that meter. Exporting 500,000 rows costs 2 credits. Every meter draws the same balance. Billings are the invoice total, including fixed fees, usage, taxes, and other amounts. Enterprise is custom and adds customer hierarchies, commitments, license allocations, NetSuite, Salesforce, custom roles, audit logs, and a 99.9% uptime SLA. The comparison table includes SSO and Admin, Editor, and Viewer roles on Business. Custom collections sequences, recognized-revenue reports, and accounting period locks are Enterprise. Business includes default dunning.
- **Caveats.** A test key never sees live events, a late event misses the invoice, and a manual test-mode action can still email a customer. Details: `orb-test-key-and-grace`.

## Sources

- [Orb MCP server](https://docs.withorb.com/api-reference/mcp-server) — accessed 2026-11-24
- [Core concepts](https://docs.withorb.com/core-concepts) — accessed 2026-11-24
- [Ingest events](https://docs.withorb.com/api-reference/event/ingest-events) — accessed 2026-11-24
- [Backfill and amend events](https://docs.withorb.com/events-and-metrics/reporting-errors) — accessed 2026-11-24
- [Invoice issuance](https://docs.withorb.com/invoicing/invoice-issuance) — accessed 2026-11-24
- [Request idempotency](https://docs.withorb.com/api-reference/idempotency) — accessed 2026-11-24
- [Orb pricing](https://www.withorb.com/pricing) — accessed 2026-11-24
- [Orb credit consumption](https://www.withorb.com/pricing/consumption-table) — accessed 2026-11-24
- [Orb sign-up](https://app.withorb.com/signup) — accessed 2026-11-24
- [Orb](https://www.withorb.com/) — accessed 2026-11-24
