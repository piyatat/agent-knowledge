---
id: polar-live-mcp-and-refund-fees
title: Polar MCP hit the live organization, or a refund kept the fee
kind: knowledge
tags: [polar, payments, mcp, billing]
status: active
updated: 2026-11-23
when_to_use: A Polar test charge moved real money, a refund left the fee, or an agent-created organization disappeared before anyone claimed it
---

## Summary

Polar (`polar`) production and sandbox are different servers, different users, and different MCP URLs. A token or OAuth grant from one does not work on the other. `execute` on the production server can refund, revoke a subscription, or delete a customer. Transaction fees are not returned on a refund, and a dispute costs $15 either way. An organization an agent created stays unclaimed until a person enters the code.

## Notes

- **Live versus sandbox.** The production MCP URL is `https://mcp.polar.sh/mcp/polar-mcp`. The sandbox URL is `https://mcp.polar.sh/mcp/polar-sandbox`. Name the sandbox server something other than `polar` so a client does not send a test prompt at the live organization. Sandbox API calls use `https://sandbox-api.polar.sh` and a token created in the sandbox. A production access token is rejected there. Sandbox limits are not production limits. Customer-facing sandbox email is delivered only to members of that organization.
- **Writes are code, not a single button.** The agent finds an operation with `search`, then `execute` runs JavaScript that calls `polar.request`. That can chain calls. Customer deletion cancels active subscriptions and revokes benefits immediately; `anonymize=true` is a separate flag for personal data. License-key rotation invalidates the previous key string at once. Products that already have orders can be archived, not deleted. `?readonly=true` limits the grant to reads. Without it, a client approval of `execute` covers whatever the snippet calls.
- **Fees stay.** The plan fee (Starter 5% + 50¢, or the paid-plan rate) is not refunded, because the card network already charged it. International cards add 1.5% on top. Polar may issue its own refund for up to 60 days after purchase to reduce disputes. A dispute is $15 regardless of outcome and is taken from the balance. A high dispute rate can get the account suspended. Leaving the Early Member rate (organizations created before 27 May 2026, at 4% + 40¢ plus 0.5% on subscriptions) is permanent: a later downgrade to Starter is 5% + 50¢, not the old rate.
- **Agent sign-up is not a claimed business.** Following `https://polar.sh/auth.md` creates an identity that can set up one organization and its catalog before a person claims it. Customers, orders, refunds, payouts, and webhooks stay blocked until the claim. The claim code and link last 7 days. Starting a new claim replaces them. The sign-up assertion lasts 30 days; after it expires, sign up again if nobody has claimed it. After a claim, that first assertion stops working and the agent acts for the person. Do not put the claim token in a repo or a prompt that other tools can read.
- **Telemetry.** Each tool call can send an intent sentence and, for `search`, a script error. Redaction looks for shapes such as emails and keys. A customer name written as ordinary words can still leave. `?telemetry=false` drops intent and the feedback tool. Request logs for operating the service remain.

## Sources

- [Polar MCP](https://polar.sh/docs/integrate/mcp) — accessed 2026-11-23
- [Sandbox environment](https://polar.sh/docs/integrate/sandbox) — accessed 2026-11-23
- [Polar pricing](https://polar.sh/docs/merchant-of-record/fees) — accessed 2026-11-23
- [auth.md](https://polar.sh/auth.md) — accessed 2026-11-23
