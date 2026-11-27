---
id: customer-io
title: Customer.io — lifecycle messaging and a hosted MCP server
kind: service
tags: [customer-io, messaging, email, mcp]
status: active
updated: 2026-11-27
when_to_use: Sending lifecycle email, push, or SMS from one audience, or letting an agent draft a Customer.io campaign
---

## Summary

**Customer.io** is hosted messaging for people and objects: email, push, in-app, SMS, WhatsApp, and webhooks, plus journeys that send them. The MCP server can read the workspace and, with extra scopes, create drafts or publish live sends. There is no permanent free plan. A 14-day trial allows 5,000 messages. Essentials starts at $100 a month. Use Customer.io when one audience drives several channels. Use Intercom (`intercom`) when the job is the support inbox. Use Loops (`loops`) or Resend (`resend`) when the job is email. Use Knock (`knock`) when your app owns the workflow and Customer.io is only a downstream channel.

## Notes

- **Access.** Sign up from `links.get`. The homepage links there. On 2026-11-27 that URL stayed on itself with HTTP 200 and said no card is required. The data center, US or EU, is chosen at signup. MCP is `https://mcp.customer.io/mcp`. If an EU account does not connect, use `https://mcp-eu.customer.io/mcp`. An account admin turns MCP on under Account settings → AI. That toggle is separate from Customer.io’s own in-product AI. Each person signs in as themselves. OAuth can dynamically register a client. A private API key (`sk_`) is shown once and is for the App, Track, and Pipelines APIs, not a substitute the MCP docs describe for the hosted server. A terminal agent can use the Customer.io CLI documented beside MCP. This repo does not carry an install command.
- **Plans.** The pricing page read on 2026-11-27 lists Essentials from $100 a month for 5,000 profiles (people plus objects), then $0.009 per extra profile. Email is 1 million a month, then $0.12 per extra 1,000. Push and in-app are unlimited on the comparison table. Essentials has two workspaces and unlimited seats. Premium starts at $1,000 a month, billed yearly, with custom volume. Enterprise is a conversation. The comparison lists the MCP server on all three. A startup program offers up to 12 months free for companies that raised under $10 million. The plan-features page’s trial is 14 days, 5,000 messages across every channel, at most three test recipients at once, and 50 test emails a day. The daily send cap during a trial can be lower than 5,000.
- **What a connection may change.** `read` is always granted and excludes sensitive attributes. `write` creates and edits drafts. `write:live` sends messages and publishes automations. `configure` changes integrations and channel settings. `read:sensitive` needs the admin toggle Allow MCP to access sensitive data and a role that can view it. By default, connections cannot delete people or edit live automations and segments. An admin must turn on Allow MCP to edit live data, and that toggle applies to every MCP connection on the account. `cio_write_api` is POST, PUT, and PATCH. `cio_delete_api` is DELETE and has no dry-run preview. Unknown body fields return 422. A write or delete must name the account and workspace, and the server refuses the call when those names do not match the target.
- **Limits.** The pricing table says monthly API calls are unlimited and must follow the fair-use policy. The App API is 10 requests a second. Over that it returns 429 and `Retry-After`. Design Studio render and preview calls share 5 a second. API-triggered broadcasts are one request every 10 seconds per workspace. Track and Pipelines are a guideline of 3,000 requests per 3 seconds. Crossing that guideline does not return 429. Transactional App API sends are not on the 10-per-second cap.
- **Caveats.** A new Essentials account starts at 500 emails a day, and outbound mail waits on a manual review. A `write` scope does not publish a live campaign. Details: `customer-io-trial-and-live-write`.

## Sources

- [Customer.io pricing](https://customer.io/pricing) — accessed 2026-11-27
- [Plan features](https://docs.customer.io/accounts/billing/plan-features/) — accessed 2026-11-27
- [Get started with the Customer.io MCP server](https://docs.customer.io/ai/mcp/get-started/) — accessed 2026-11-27
- [About Customer.io’s APIs](https://docs.customer.io/integrations/api/customerio-apis/) — accessed 2026-11-27
- [How agents authenticate](https://customer.io/auth.md) — accessed 2026-11-27
- [Create your account](https://fly.customer.io/signup) — accessed 2026-11-27
- [Customer.io](https://customer.io/) — accessed 2026-11-27
