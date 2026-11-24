---
id: loops
title: Loops — marketing and transactional email, with an OAuth MCP server
kind: service
tags: [loops, email, mcp, messaging]
status: active
updated: 2026-11-24
when_to_use: Sending product email and lifecycle campaigns from one audience, or letting an agent manage Loops contacts and transactional mail
---

## Summary

**Loops** is hosted email for a software product: campaigns, workflows, and transactional mail share one audience. The plan price follows subscribed contacts, not seats, and paid plans do not charge per send. A remote MCP server at `https://mcp.loops.so` signs in with OAuth and can change contacts, campaigns, and sends. Use Loops when marketing and product mail belong in one audience. Use Resend (`resend`) when the job is a sending API with inbound mail and no marketing audience.

## Notes

- **Access.** Sign up at `links.get`. The REST API takes a Bearer API key from Settings → API. That key is shown once. Do not put it in client-side code. The base URL is `https://app.loops.so/api`. The baseline limit is 10 requests per second per team. Content routes (`/v1/campaigns/*`, transactional-email management, workflows, and the other content paths listed in the API intro) are 60 requests per 60 seconds per team. A burst returns `429` with `x-ratelimit-limit` and `x-ratelimit-remaining`.
- **MCP.** `https://mcp.loops.so` is Streamable HTTP. The client identifies itself with a Client ID Metadata Document. Loops has no client id or secret to paste, and it rejects dynamic client registration. The browser sign-in is the credential, so the client config does not hold an API key. The server can find and edit contacts, change mailing lists, send events, send a published transactional email, and create or edit campaigns, workflows, and email content. Those writes are live.
- **Plans (pricing page and billing doc, 2026-11-24).** Free is $0: up to 1,000 subscribed contacts, 4,000 marketing and transactional sends combined in any rolling 30 days, a Loops footer, and 10 emails per second. The pricing page’s Growth card is $49/month for up to 5,000 subscribed contacts, with higher contact tiers through 1.5 million and Enterprise above that. Paid plans drop the footer, raise the send rate to 1,000 emails per second, and do not cap monthly send volume. Unsubscribed contacts never count. A transactional recipient is not an audience contact unless the send sets `addToAudience` to true. Confirm the current tier price on the pricing page before quoting a bill.
- **Caveats.** A successful API response can still mean no message left the account, and a free plan stops marketing before it stops transactional mail. Details: `loops-send-quota-and-test-inbox`.

## Sources

- [Loops MCP server](https://loops.so/docs/mcp-server) — accessed 2026-11-24
- [API introduction](https://loops.so/docs/api-reference/intro) — accessed 2026-11-24
- [Loops pricing](https://loops.so/pricing) — accessed 2026-11-24
- [Billing](https://loops.so/docs/account/billing) — accessed 2026-11-24
- [Transactional email](https://loops.so/docs/transactional) — accessed 2026-11-24
- [Loops sign-up](https://app.loops.so/register) — accessed 2026-11-24
- [Loops](https://loops.so/) — accessed 2026-11-24
