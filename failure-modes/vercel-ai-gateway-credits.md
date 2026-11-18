---
id: vercel-ai-gateway-credits
title: Buying Vercel AI Gateway credits ends the free monthly credit
tags: [vercel, billing, gateway, byok]
kind: knowledge
status: active
updated: 2026-11-18
when_to_use: A Vercel AI Gateway purchase, budget, or BYOK key does not cap spend the way you expect
---

## Summary

Purchasing any AI Gateway Credits moves the team to the paid tier, and the monthly free credit no longer applies. A budget still does not cap bring-your-own-key token spend. With fallback left on, a failed provider key is retried on Vercel's keys and billed to your credit balance (`vercel-ai-gateway`).

## Notes

- **Free credit.** The free tier is a monthly included credit for a subset of models, with lower per-model limits. A limit returns **429**. The credit starts when you make the first gateway request. One credit purchase ends it. There is no obligation to keep buying, and the free credit does not come back while you are on the paid tier. Purchased credits expire one year after purchase. A **403** with `customer_verification_required` means free credits need a payment method on file first. A **403** that names the free tier means that model is outside the free subset.
- **BYOK is paid.** Using your own provider key requires purchased credits and a positive balance. Provider subscription grants (ChatGPT or Claude API credits) stay in that provider organization. They do not fill the AI Gateway balance, and they do not satisfy the purchased-credit requirement. Exhausting a grant does not necessarily stop traffic: the provider's own balance or auto-recharge can keep paying, and the gateway can charge its balance after a fallback.
- **Budgets.** Budgets cover spend billed through Vercel's keys. BYOK token spend is metered apart and does not count, so a provider-side limit is still required. The exception is the fee for BYOK with fallback turned off (**$0.20** per 1,000 requests), which is deducted from credits and does count toward budgets. A **402** whose type is `quota_for_entity_exceeded` is a budget, and it rejects every request in that scope, including BYOK. A **402** with any other type means the team has no positive credit balance, and that check applies to BYOK requests too.
- **Surcharges on a blocked response.** A per-request surcharge applies to each request the gateway bills, including a response the provider blocks for safety and still charges. Requests the gateway does not bill have no surcharge. Team-wide zero data retention and the team-wide provider allowlist are **$0.10** per 1,000. Regional endpoints add **5%** of the request's inference cost at market rate, including BYOK, and that 5% is charged to AI Gateway Credits. Hobby teams and Pro trials cannot use regional endpoints.

## Sources

- [AI Gateway pricing](https://vercel.com/docs/ai-gateway/pricing) — accessed 2026-11-18
- [Vercel AI Gateway](https://vercel.com/docs/ai-gateway) — accessed 2026-11-18
- [AI Gateway FAQ](https://vercel.com/docs/ai-gateway/faq) — accessed 2026-11-18
