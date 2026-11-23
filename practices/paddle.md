---
id: paddle
title: Paddle Billing — merchant of record, with sandbox and live MCP servers
kind: service
tags: [paddle, payments, billing, mcp]
status: active
updated: 2026-11-23
when_to_use: Selling software while Paddle is the merchant of record, or letting an agent change a Paddle catalog and subscriptions
---

## Summary

**Paddle Billing** is a merchant of record for SaaS and other digital products. Paddle sells the product, handles sales tax, and pays the supplier. The pricing page lists **5% + 50¢** per Checkout transaction and no monthly fee. Agents reach an account through two hosted MCP servers: sandbox at `https://sandbox-mcp.paddle.com/mcp` (API key only) and live at `https://mcp.paddle.com/mcp` (OAuth or a live API key). A live OAuth grant starts read-only. Use Paddle when a merchant of record should resell the software. Use Polar (`polar`) for another merchant-of-record catalog. Use Stripe (`stripe`) when the app’s own account charges the card.

## Notes

- **Access.** Live sign-up is `links.get` (the page stayed on that URL on 2026-11-23). Sandbox sign-up is a different account: the go-live checklist links `https://sandbox-vendors.paddle.com/signup`, which redirects to `https://sandbox-login.paddle.com/signup`. A sandbox account uses test cards and does not need business verification. A live account has to be verified, and the domain approved, before customers can check out. Paddle’s sign-up screen says it sells SaaS and digital products.
- **MCP.** The server does not list every API call. `search` looks up a method, and `execute` runs a JavaScript async function that can chain calls. Variables do not persist between `execute` calls. `report_missing_tool` only tells Paddle something is missing. `show_metrics_chart` draws a chart in clients that support MCP Apps. Sandbox keys start with `pdl_sdbx_` and authenticate only against the sandbox URL. Live keys authenticate only against the live URL. A mismatch fails authentication. The sandbox server has no OAuth.
- **Writes.** A live OAuth connection starts with read access to whatever that Paddle user’s role already allows. Grant or remove writes under **Paddle > Connectors > MCPs**. An API key’s permission list is the hard scope for that key. The server does not block destructive operations. It marks them with `destructiveHint` and adds a `warning` on the `execute` result. A client in auto mode can still run them. Details: `paddle-sandbox-key-and-live-writes`.
- **Price (pricing page, 2026-11-23).** Pay as you go is 5% + 50¢ per Checkout transaction. That page describes the fee as covering payments, tax, fraud, chargebacks, and buyer support, with no monthly fee. The FAQ says sellers of products under $10 can ask for a bespoke rate. Higher volume is custom pricing. There is no second published rate on that page.
- **Alternatives.** Polar (`polar`) when the merchant of record should be Polar. Stripe (`stripe`) when you are the merchant. x402 (`x402-payments`) when an agent pays per HTTP request.

## Sources

- [Paddle MCP server](https://developer.paddle.com/sdks/ai/paddle-mcp/) — accessed 2026-11-23
- [Connect the live Paddle MCP server with OAuth](https://developer.paddle.com/changelog/2026/paddle-mcp-oauth/) — accessed 2026-11-23
- [Go-live checklist](https://developer.paddle.com/build/go-live-checklist/) — accessed 2026-11-23
- [Paddle pricing](https://www.paddle.com/pricing) — accessed 2026-11-23
- [Paddle sign-up](https://login.paddle.com/signup) — accessed 2026-11-23
- [Paddle](https://www.paddle.com/) — accessed 2026-11-23
