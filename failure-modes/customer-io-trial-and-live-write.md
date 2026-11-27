---
id: customer-io-trial-and-live-write
title: Customer.io dropped a send, or an agent published a live campaign
kind: knowledge
tags: [customer-io, messaging, mcp, billing]
status: active
updated: 2026-11-27
when_to_use: A Customer.io trial or new Essentials account dropped mail, or an agent published a live campaign
---

## Summary

Customer.io (`customer-io`) reviews a new account before any outbound message goes out, caps a trial at 5,000 messages, and starts Essentials email at 500 a day. MCP `write` edits drafts. Publishing or sending needs `write:live` and, for items already in use, an admin toggle that is off by default. The US and EU MCP hosts are not interchangeable for every client.

## Notes

- **Nothing sends until review, and the trial is small.** The pricing FAQ says you can add data immediately, and Customer.io manually reviews the account before outbound messages can be sent. The trial is 14 days and 5,000 messages across email, SMS, push, in-app, Slack, and webhooks. The daily cap during the trial can be lower. Test email is 50 a day and at most three recipients at once. There is no plan that stays at $0 after the trial. Essentials is $100 a month at 5,000 profiles.
- **A new Essentials account is not at the plan’s email volume yet.** Warm-up starts at 500 emails a day, measured on a rolling 24 hours, not at midnight. About two weeks of healthy sending reaches 10,000 a day, and about six weeks reaches the plan limit. The cap includes transactional mail. Mail over it is marked undeliverable with the reason “Daily email limit reached for compliance tier” and is not retried, except a one-time send that has not finished, which continues on later days. A broadcast sent tonight still counts in the morning.
- **Live data is a second switch.** `write` can create drafts of automations, segments, templates, and people. It does not send or publish. `write:live` does, and only if the role allows it in that workspace. Until an admin enables Allow MCP to edit live data, a connection cannot delete people or edit an automation or segment that is already in use. That admin switch covers every connection. `cio_delete_api` has no server-side dry run. Sensitive profile attributes stay hidden until Allow MCP to access sensitive data is on and the connection has `read:sensitive`. A 403 on every tool after a successful login means an admin turned the MCP toggle off. Tokens are kept, so turning it back on restores the same session. An admin cannot revoke someone else’s connection.
- **Names and region.** If the client does not name a workspace, work lands in the home account when the connection includes it, otherwise the first account name from A to Z. A write that names the wrong account or workspace is refused and changes nothing. The approval screen starts from the previous connection’s accounts, so a new client can inherit an account you did not mean to share. EU workspaces that fail on `https://mcp.customer.io/mcp` need `https://mcp-eu.customer.io/mcp`. The App API’s 10 requests a second is a different limit from message volume and returns 429 with `Retry-After`. Track traffic over the 3,000-per-3-seconds guideline is not rejected.

## Sources

- [Customer.io pricing](https://customer.io/pricing) — accessed 2026-11-27
- [Plan features](https://docs.customer.io/accounts/billing/plan-features/) — accessed 2026-11-27
- [Get started with the Customer.io MCP server](https://docs.customer.io/ai/mcp/get-started/) — accessed 2026-11-27
- [About Customer.io’s APIs](https://docs.customer.io/integrations/api/customerio-apis/) — accessed 2026-11-27
