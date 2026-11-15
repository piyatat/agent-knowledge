---
id: x402-payments
title: x402 — HTTP 402 payments for agents
kind: protocol
tags: [x402, payments, http, mcp]
status: active
updated: 2026-11-15
when_to_use: Letting an agent pay for an HTTP, MCP, or A2A resource with the x402 payment-required flow
---

## Summary

**x402** (protocol **version 2**) is an open payment flow for clients, including agents. A resource server answers an unpaid request with a payment-required signal; the client retries with a signed payload; a **facilitator** verifies and settles. The core messages are independent of transport. HTTP, MCP, and A2A are transport mappings, not different protocols. It does not replace API keys for private APIs that are not for sale, and it is not A2A task delegation (`agent-to-agent-a2a-protocol`).

## Notes

- **HTTP shape:** unpaid response is **HTTP 402** with a base64 `PaymentRequired` object in the **`PAYMENT-REQUIRED`** header (`x402Version` **must be 2**). The retry sends **`PAYMENT-SIGNATURE`**. A successful response can include **`PAYMENT-RESPONSE`** with settlement details. The same objects are what an MCP or A2A binding has to carry; only the envelope changes.
- **Roles:** the resource server prices the work, the client (your agent) signs, and the facilitator exposes **`/verify`** (read-only) and **`/settle`** (commits payment state, often on a ledger). `/settle` can run more than once when the scheme escrows then charges.
- **Schemes and flow:** documented schemes include `exact`, `upto`, `batch-settlement`, and `auth-capture`. **`authorization`** verifies, runs the resource, then settles. **`upfront`** and **`escrow`** commit funds before the handler. If a resource offers both, clients **SHOULD prefer `authorization`**. Clients **MUST NOT** build a payment for a `paymentFlow` they do not recognize. The exact EVM payload includes a **32-byte nonce** so a captured signature is not replayed as a second payment.
- **Where to read the spec:** the v2 text used here is in the Coinbase repo (`specs/x402-specification-v2.md`). That repo’s README says issues and PRs moved to **`x402-foundation/x402`** and that Coinbase’s copy is a development fork. Confirm which tree your SDK vendor tracks before pinning a commit.
- **Alternatives:** a normal API key or OAuth token when the service bills on an account instead of per request. An agent wallet product when you need budgets and allowlists the spec leaves as “implementation-specific.”
- **Caveats:** the spec does not cap spend. An agent that auto-signs every 402 will pay whatever `accepts[]` asked. Facilitator trust matters: a verify that your code skips, or a facilitator you do not mean to use, settles value you cannot pull back from the ledger. Do not log `PAYMENT-SIGNATURE`.

## Sources

- [x402 protocol specification v2](https://github.com/coinbase/x402/blob/main/specs/x402-specification-v2.md) — accessed 2026-11-15
- [HTTP transport v2](https://github.com/coinbase/x402/blob/main/specs/transports-v2/http.md) — accessed 2026-11-15
- [coinbase/x402 repository](https://github.com/coinbase/x402/) — accessed 2026-11-15
- [How x402 works](https://docs.cdp.coinbase.com/x402/core-concepts/how-it-works) — accessed 2026-11-15
