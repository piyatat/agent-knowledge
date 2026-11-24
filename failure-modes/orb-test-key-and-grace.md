---
id: orb-test-key-and-grace
title: An Orb test key misses live usage, or a late event never reaches the invoice
kind: knowledge
tags: [orb, billing, usage, mcp]
status: active
updated: 2026-11-24
when_to_use: Orb usage is missing from an invoice, a test key changed the wrong account, or an agent granted credits it should only have read
---

## Summary

Orb (`orb`) live and test accounts share a login and share nothing else. A key created in one mode cannot read or change the other. Events older than the account grace period (usually 12 hours) are rejected, and a usage invoice waits out that same window before it can be issued. The MCP server can write subscriptions, credits, and invoices, and it cannot ingest or amend events.

## Notes

- **Two accounts.** Test mode cannot attach a production payment processor. It can still send email when someone triggers that action by hand, including from an agent. Deleting a test customer with issued invoices also deletes those subscriptions and invoices. A live customer who already has an issued invoice cannot be deleted. Promoting a test configuration to live is a copy, when Orb offers it, and it is a separate step from calling the API with a live key.
- **Grace period and timestamps.** The usual grace period is 12 hours and is set for the whole account during onboarding. An event timestamp more than that far in the past, or more than 5 minutes in the future, fails validation. Usage invoices become eligible only after the period ends plus that grace period. Invoices that contain only fixed prices have no grace period. Threshold and other partial invoices skip it. Changing the window means asking Orb support, and Orb may refuse. A pending end-of-period invoice can still change until the grace period passes.
- **Idempotency.** Ingest accepts a given idempotency key at most once. Sending the same key again is a duplicate, not a second event. Two events in one batch that reuse a key and differ in body reject the whole batch. A 4xx validation failure does not consume the key, so a corrected body can reuse it. A 5xx should be retried as the same request. `Idempotency-Key` on other POST and PATCH calls lasts 48 hours and then may run again. Backfill idempotency keys are not compared with ordinary ingest keys. Amendments archive the old event and keep it queryable. A single-event amendment cannot change the timestamp or the customer. Avoid backfilling before the current billing period when the customer uses the credit ledger: Orb will not rewrite deductions already on an issued invoice.
- **MCP limits.** Event search needs the idempotency key and a window of at most 30 days. Price evaluation is one customer and cannot start more than 100 days ago. Ask for a smaller page when a result hits the about-1 MB cap. Scope the key to read if the agent should explain a bill and not grant credits or issue an invoice.

## Sources

- [Core concepts](https://docs.withorb.com/core-concepts) — accessed 2026-11-24
- [Orb MCP server](https://docs.withorb.com/api-reference/mcp-server) — accessed 2026-11-24
- [Ingest events](https://docs.withorb.com/api-reference/event/ingest-events) — accessed 2026-11-24
- [Backfill and amend events](https://docs.withorb.com/events-and-metrics/reporting-errors) — accessed 2026-11-24
- [Invoice issuance](https://docs.withorb.com/invoicing/invoice-issuance) — accessed 2026-11-24
- [Request idempotency](https://docs.withorb.com/api-reference/idempotency) — accessed 2026-11-24
