---
id: loops-send-quota-and-test-inbox
title: A Loops send succeeds and delivers nothing, or the free quota stops marketing
kind: knowledge
tags: [loops, email, mcp, billing]
status: active
updated: 2026-11-24
when_to_use: A Loops transactional call returned success but no mail arrived, a campaign skipped new contacts, or MCP could not sign in
---

## Summary

Loops (`loops`) treats `@example.com` and `@test.com` as a dry run: the API succeeds and no email is sent. Free-plan marketing stops for contacts past the first 1,000 even while transactional mail continues. The MCP server can send and edit live campaigns, and it only signs in clients that present a Client ID Metadata Document.

## Notes

- **Dry-run inboxes.** Addresses at `@example.com` and `@test.com` return a normal success and are not delivered. They do not exercise a real inbox or the sending domain’s reputation. A test of delivery needs a mailbox you control.
- **Publish and variables.** A transactional send to an unpublished message returns a 400. So does a missing `transactionalId`, `email`, or required data variable, and so does calling the API before the sending domain is verified. Variable names are case-sensitive and may contain only letters, numbers, underscores, and dashes. Values are a string, a number, or an array of objects of those scalars. `boolean` and `null` fail. An optional variable may be omitted, or sent as `""`; `null` still fails. Editing a published message does not change what sends until you republish. Transactional mail uses the same verified domain as marketing. The zone-file doc says DNS can take up to 72 hours.
- **Quota versus rate.** Free accounts share 4,000 marketing and transactional sends in any rolling 30-day window, and 10 emails per second. Paid teams have no monthly send cap and queue above 1,000 emails per second. Mail over the send rate stays queued. The HTTP API is separate: 10 requests per second per team, and 60 content-API requests per 60 seconds, both answering `429`. Passing 1,000 subscribed contacts on Free does not lock the account. New contacts past that line do not receive campaign or workflow email, but they still enter workflows they qualify for. Transactional sends keep going. Audience totals can lag contact changes by up to 24 hours. One person can join at most three free teams.
- **Idempotency and audience.** `Idempotency-Key` is optional, at most 100 characters. Reusing it within 24 hours returns `409`, so a retry with the same key is not a second email. A new key is a new send. `addToAudience: true` creates a marketing contact and can move the subscribed-contact bill. A transactional recipient is not added otherwise, and unsubscribed contacts still receive transactional mail.
- **MCP and double opt-in.** The remote server can send published transactional mail and edit campaigns. Clients that demand a client secret, or that only support dynamic registration, cannot connect. Double opt-in currently gates form signups only. Create contact and Update contact are not gated yet, so an API create can be subscribed while the form path is still pending.

## Sources

- [Transactional email](https://loops.so/docs/transactional) — accessed 2026-11-24
- [Send a transactional email](https://loops.so/docs/api-reference/send-transactional-email) — accessed 2026-11-24
- [Billing](https://loops.so/docs/account/billing) — accessed 2026-11-24
- [API introduction](https://loops.so/docs/api-reference/intro) — accessed 2026-11-24
- [Loops MCP server](https://loops.so/docs/mcp-server) — accessed 2026-11-24
- [Double opt-in](https://loops.so/docs/contacts/double-opt-in) — accessed 2026-11-24
- [DNS zone file export](https://loops.so/docs/deliverability/dns-zone-file-export) — accessed 2026-11-24
