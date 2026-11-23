---
id: polar
title: Polar — merchant of record for software, with an OAuth MCP server
kind: service
tags: [polar, payments, billing, mcp]
status: active
updated: 2026-11-23
when_to_use: Selling a software product while a merchant of record collects tax, or letting an agent manage Polar products and orders
---

## Summary

**Polar** is a hosted billing platform and merchant of record for software. It sells the product, calculates VAT and sales tax, and handles refunds and chargebacks, then pays the developer out. Starter has no monthly fee and charges 5% + 50¢ per transaction. The MCP server signs in with OAuth. Production is `https://mcp.polar.sh/mcp/polar-mcp` and the sandbox is a different host and a different user. Use Polar when someone else should be the seller of record. Use Stripe (`stripe`) when the app’s own Stripe account should charge the card.

## Notes

- **Access.** Sign up at `links.get` (GitHub, Google, or email; the docs say no card). The MCP guide is `links.docs`. OAuth opens a browser; do not paste an API key into the agent. An agent can also register on its own by following `https://polar.sh/auth.md`, then hand the organization to a person with a claim code. Until that claim, the agent may create one organization and its products, benefits, discounts, meters, and checkout links. It cannot touch customers, orders, subscriptions, refunds, payouts, or webhooks. The sign-up assertion lasts 30 days. The claim link lasts 7 days.
- **Plans (fees page, 2026-11-23).** Starter is free at 5% + 50¢. Pro is $20 a month at 3.8% + 40¢. Growth is $100 at 3.6% + 35¢. Scale is $400 at 3.4% + 30¢ and includes SSO. The rate changes as soon as the plan changes. Polar’s published breakeven versus Starter is about $1,379 a month of sales for Pro. International cards add 1.5%. Organizations created before 27 May 2026 keep an Early Member rate of 4% + 40¢, plus 0.5% on subscriptions, until they leave it. A new organization created on or after that date starts on Starter even if the person already had an older organization. Paid plans unlock preview features: shared Slack channels, a `reset` proration mode, and off-session charges.
- **Sandbox.** `sandbox.polar.sh` is a separate server, not a test mode on the live organization. It needs its own user, organization, and access token. The API base is `https://sandbox-api.polar.sh`. The MCP URL is `https://mcp.polar.sh/mcp/polar-sandbox`. Checkout uses Stripe test cards. Customer emails in the sandbox go only to organization members.
- **MCP tools.** The server does not dump every operation into the prompt. `search` looks up the API spec, and `execute` runs a short JavaScript snippet that calls `polar.request` inside a sandbox with no other network. `search_docs` and `read_docs_page` read the docs. Writes include refunds, subscription revocation, and customer deletion. Add `?readonly=true` so the grant and the tool list stay read-only. Tool-call telemetry is on unless the URL has `?telemetry=false`.
- **Money that does not come back.** A refund does not return the transaction fee. Polar may refund a charge on its own for up to 60 days to head off a dispute. A dispute costs $15 either way and comes out of the balance. Payout fees are Stripe’s, not an extra Polar markup: $2 per month with an active payout, plus 0.25% + $0.25 per payout. Details: `polar-live-mcp-and-refund-fees`.
- **Alternatives.** Stripe (`stripe`) when you are the merchant and want Checkout, Billing, or Treasury on your own account. x402 (`x402-payments`) when an agent pays per HTTP request.

## Sources

- [Polar introduction](https://polar.sh/docs/introduction) — accessed 2026-11-23
- [Polar MCP](https://polar.sh/docs/integrate/mcp) — accessed 2026-11-23
- [Polar pricing](https://polar.sh/docs/merchant-of-record/fees) — accessed 2026-11-23
- [Sandbox environment](https://polar.sh/docs/integrate/sandbox) — accessed 2026-11-23
- [auth.md](https://polar.sh/auth.md) — accessed 2026-11-23
- [Polar sign-up](https://polar.sh/signup) — accessed 2026-11-23
- [Polar](https://polar.sh/) — accessed 2026-11-23
