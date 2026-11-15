---
id: ap2-payments
title: AP2 — Agent Payments Protocol
kind: protocol
tags: [ap2, payments, commerce, authorization]
status: active
updated: 2026-11-15
when_to_use: Authorizing an agent to buy from a merchant with signed checkout and payment mandates
---

## Summary

The **Agent Payments Protocol (AP2) v0.2** (Apache-2.0, `google-agentic-commerce/AP2`) is how a user authorizes an agent to complete a purchase. It defines roles and signed **mandates**; catalog and checkout APIs stay in a commerce protocol. The spec says it is built to work with the **Universal Commerce Protocol** (`ucp-commerce`). It is not x402 (`x402-payments`), which pays for an HTTP or MCP call, and not A2A task delegation (`agent-to-agent-a2a-protocol`). Samples use Google ADK (`google-adk`); the protocol does not require it.

## Notes

- **Roles.** Shopping Agent (discovers and buys), Credential Provider (issues a scoped payment credential), Merchant (owns the checkout), Merchant Payment Processor (takes payment), Trusted Surface (the UI that collects the user’s signature). One party may play several roles and may delegate. Each verifier checks the mandate aimed at it; the shopping agent assembling the payload is not that check.
- **Mandates.** A **Checkout Mandate** proves the agent may buy a specific checkout. The merchant supplies a signed checkout JWT; the closed mandate binds to it with `checkout_hash`. A **Payment Mandate** proves the agent may pay for that checkout. Closed types use `vct` `mandate.checkout.1` and `mandate.payment.1`. Open types use `mandate.checkout.open.1` and `mandate.payment.open.1`. Payment constraints in the spec include allowed payee, instrument, and PISP, an amount range, a budget paired with recurrence, an execution-date window, and a reference back to the checkout mandate.
- **Two flows.** **Human Present:** the user signs the closed mandates on a Trusted Surface. **Human Not Present:** the user signs open mandates, and the agent later presents agent-signed closed mandates inside those constraints. A merchant or credential provider can answer `unresolved_constraint` and force the user back in to sign the closed mandates.
- **Access.** The spec and Python types live in the GitHub repo. A PyPI package is **not** published yet; the README’s install is `uv pip install git+https://github.com/google-agentic-commerce/AP2.git@main`. Sample scenarios need Python 3.11+ and `uv`. Their agents authenticate with `GOOGLE_API_KEY` or Vertex (`gcloud auth application-default login`). That key runs the demo model; it is not the payment credential.
- **Alternatives.** x402 when the agent should pay per request to an API, MCP tool, or A2A endpoint. A normal merchant checkout with the user present when you do not need an agent-held mandate. Card-network agent tokens when the credential provider already issues one and AP2 is only the evidence format around it.
- **Caveats.** An open mandate is spend authority up to its constraints. A wide amount range or a missing budget is still the user’s money. v0.2 leaves the commerce APIs out of scope, so two “AP2” integrations can still disagree on the checkout object unless they both use UCP. Do not log mandate signatures. Verify on the merchant and processor side; do not trust the shopping agent’s claim that it already did.

## Sources

- [AP2 repository README](https://github.com/google-agentic-commerce/AP2/blob/main/README.md) — accessed 2026-11-15
- [Agentic Payment Protocol v0.2](https://github.com/google-agentic-commerce/AP2/blob/main/docs/ap2/specification.md) — accessed 2026-11-15
- [AP2 flows](https://github.com/google-agentic-commerce/AP2/blob/main/docs/ap2/flows.md) — accessed 2026-11-15
- [Checkout Mandate](https://github.com/google-agentic-commerce/AP2/blob/main/docs/ap2/checkout_mandate.md) — accessed 2026-11-15
- [Payment Mandate](https://github.com/google-agentic-commerce/AP2/blob/main/docs/ap2/payment_mandate.md) — accessed 2026-11-15
