---
id: helicone-billing-order
title: Helicone docs disagree on which key pays, and a 429 may be an empty wallet
tags: [helicone, billing, gateway, reliability]
kind: knowledge
status: active
updated: 2026-11-18
when_to_use: A Helicone gateway request is billed to the wrong account, or a 429 is not the provider rate limit you think it is
---

## Summary

Helicone's provider-routing page and its error-handling page describe the opposite order for credits versus your own provider keys. A **429** from the gateway can mean the Helicone wallet is empty, and a retry will not create capacity. Treat either page as incomplete until a live request shows which account was charged (`helicone`).

## Notes

- **Two orders.** Provider routing says your own keys are tried first, then Helicone credits. The same page repeats that under bring-your-own-keys. Error handling says the opposite: pass-through credits are tried first, and your keys are the fallback when credits fail (the example given is insufficient credits).
- **The error you see is filtered.** When both methods fail, error handling says the gateway returns the bring-your-own-key error (often **401** or **500**) and hides the credits **429**. An invalid provider key plus an empty wallet looks like a bad key. With no provider key configured, the same empty wallet is a **429** whose message is insufficient credits, which is the same status a provider rate limit uses.
- **Failover spends the other account.** Routing fails over on **429**, **401**, some **400**s (it names context-length errors), **408**, and **500+**. A bad key or a too-long prompt can move the call onto Helicone credits, or onto another provider, without a code change. Pinning `model/provider` disables that failover. A manual chain tries providers in the order written in the model string.
- **What to check.** Read the request log for which provider and which billing method ran. Confirm the wallet and the provider key before raising retry counts. `Helicone-Retry-Enabled: true` retries transient failures; it does not refill credits.

## Sources

- [Provider routing](https://docs.helicone.ai/gateway/provider-routing) — accessed 2026-11-18
- [Error handling and fallback](https://docs.helicone.ai/gateway/concepts/error-handling) — accessed 2026-11-18
