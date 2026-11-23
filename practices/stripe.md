---
id: stripe
title: Stripe — payments API and hosted MCP for agents
kind: service
tags: [stripe, payments, mcp, billing]
status: active
updated: 2026-11-23
when_to_use: Letting an agent create Stripe customers, Checkout sessions, or subscriptions, or look up a payment
---

## Summary

**Stripe** is the hosted payments API for charges, customers, subscriptions, invoices, and Checkout. Its MCP server at `https://mcp.stripe.com` exposes search, read, and write tools plus documentation search, so an agent can call the API without a local proxy. Interactive clients use OAuth. An unattended client uses an agent API key. The older Agent Toolkit packages are retired. Use Stripe for card and billing operations. Use x402 (`x402-payments`) or AP2 (`ap2-payments`) when the payment protocol is the point, not the Stripe account.

## Notes

- **Access.** Create an account at `links.get`. The MCP guide (`links.docs`) is the client pointer. OAuth opens Stripe’s consent page and can grant live mode and sandboxes with different permissions. An agent API key is for a client that cannot do OAuth; the Dashboard marks those keys with an Agent badge, and the key is sent as a bearer token. Prefer the narrowest permissions. Admins can turn MCP off for the whole team, separately for live mode and for sandboxes.
- **What an agent can do.** `stripe_api_search` and `stripe_api_details` find methods. `stripe_api_read` calls GET methods and `stripe_api_write` calls POST, PATCH, PUT, and DELETE. Other tools search Stripe’s docs, plan an integration, and, in preview, query analytics. Some writes, including creating a refund and moving Treasury funds, stop for a person to approve them in the Dashboard. That check is separate from the MCP client’s own tool approval. The client shows the tool name, which can cover both actions that need confirmation and actions that do not.
- **Connected accounts.** Tools default to the account on the OAuth session or API key. Acting for a connected account does not use OAuth. Authenticate with a platform agent API key and pass the connected account id in the `Stripe-Account` header.
- **Retired packages.** `@stripe/agent-toolkit`, `stripe-agent-toolkit`, and the local `@stripe/mcp` proxy get no further updates, including security fixes. Point the client at the hosted server.
- **Pricing.** Card and billing fees are Stripe’s published processing rates; this note does not restate them. The MCP cutoff and the 14-day OAuth session are in `stripe-mcp-key-and-confirmation`.
- **Alternatives.** Polar (`polar`) or Paddle (`paddle`) when a merchant of record should collect tax and resell the software. x402 (`x402-payments`) when an agent pays an HTTP or MCP resource per request. AP2 (`ap2-payments`) and UCP (`ucp-commerce`) when a merchant checkout uses those protocols. Clerk (`clerk`) can bill app plans through a connected Stripe account, but those plans are configured in Clerk.
- **Caveats.** Stripe tells you to keep client-side tool approval on and to be careful combining this server with others because of prompt injection. Revoking a session applies only to the account and the live-or-sandbox environment you are viewing.

## Sources

- [Stripe MCP](https://docs.stripe.com/mcp) — accessed 2026-11-21
- [Stripe tools README](https://raw.githubusercontent.com/stripe/ai/main/tools/README.md) — accessed 2026-11-21
- [Stripe sign-up](https://dashboard.stripe.com/register) — accessed 2026-11-21
