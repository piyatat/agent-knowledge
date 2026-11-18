---
id: together-prepaid-and-compat
title: Together stays locked until $15, and OpenAI clients still 404 on several routes
kind: knowledge
tags: [together, billing, openai, deprecation]
status: active
updated: 2026-11-18
when_to_use: A Together request 404s, bills past zero, or an OpenAI sample fails on the Together base URL
---

## Summary

A Together organization can show a balance and still refuse to mint keys, and an OpenAI SDK pointed at `https://api.together.ai/v1` still fails on Assistants, embeddings, and flat model ids. Serverless ids also move: some old ids redirect, and some disappear (`together-ai`).

## Notes

- **The $15 gate.** There is no free trial. Free credits do not unlock the console. Until the organization purchases at least **$15**, you cannot open the playground, create an API key, or invite teammates. After that, a zero balance suspends API access until you add credits. Scale and Enterprise accounts follow their contract instead. Metering lags, so usage can land after the balance hits zero, and you still owe it. Credits bought after an invoice do not pay a past-due balance. A positive balance made only of free credits still does not unlock the platform.
- **Nothing caps one key.** Projects share the organization balance. API keys have no spend limit and no rate limit of their own. Auto-recharge fills the balance up to a target; it does not stop spend. If the default payment method is a US bank account (ACH), auto-recharge turns off even when a card is saved. Organization and project budgets are documented as not available yet. The prepaid hard stop is the zero balance, and it hits every project, including production.
- **Routes that are not OpenAI.** Assistants, threads, and runs are not implemented. OpenAI-shaped batch and fine-tuning jobs are not on `/v1`; Together has its own batch and files APIs. `moderations.create` returns **404**. `embeddings.create` is dedicated endpoints only (the compatibility page names `BAAI/bge-base-en-v1.5` as the example deploy). `service_tier`, `store`, `metadata`, and `prediction` are accepted and ignored. `seed` is best-effort. `logit_bias` is unsupported on most models. `n` is not on every model. `logprobs` uses Together's shape. Error objects look like OpenAI's, but `type` and `code` are Together's; match the HTTP status (**400**, **401**, **404**, **429**, **500**, **503**).
- **Reasoning and token counts.** Reasoning text is a `reasoning` or `reasoning_content` field on the message, and the name depends on the model. Send it back under the same key on the next turn. Cached and reasoning token counts are nested under `usage.*_details` on some reasoning models and a flat `cached_tokens` on some others. A client that reads only one shape reports **0**.
- **US endpoint.** `https://us-api.together.ai/v1` is **1.25×** and a short model list. A model that is not in that geography returns **404** `region_unavailable` and does not fall back to `api.together.ai`. The guarantee is where the request is processed, not where logs are stored. Together SDK samples set the host without `/v1`; an OpenAI SDK client needs the `/v1` base. High demand on the global host returns **429** (slow down) or **503** (retry). Serverless throughput is best-effort.
- **Ids that move.** An upgrade in the same family, with a price change of **10%** or less, redirects the old id after **3 days** of notice. A new model (different modality or architecture, or a larger price or behavior change) does not redirect; both ids stay for about **two weeks**, then you must switch. Preview models can go with under **24 hours** of notice after **30 days**. The deprecations page, read 2026-11-18, still lists removal dates that have passed, including `MiniMaxAI/MiniMax-M3` on **2026-11-06** and `Qwen/Qwen3.8-2.4T-A95B` on **2026-11-04**. A model can remain in a catalog while the route is disabled. Treat a live error and that page as the check. Sign-in is locked to the provider used at signup. Deleting the account blocks that email from registering again.

## Sources

- [Credits](https://docs.together.ai/docs/billing-credits) — accessed 2026-11-18
- [Spend controls](https://docs.together.ai/docs/billing-spend-controls) — accessed 2026-11-18
- [Authentication](https://docs.together.ai/docs/api-keys-authentication) — accessed 2026-11-18
- [OpenAI compatibility](https://docs.together.ai/docs/inference/openai-compatibility) — accessed 2026-11-18
- [Geo-specific inference](https://docs.together.ai/docs/serverless/geo-specific-inference) — accessed 2026-11-18
- [Rate limits](https://docs.together.ai/docs/serverless/rate-limits) — accessed 2026-11-18
- [Deprecations](https://docs.together.ai/docs/deprecations) — accessed 2026-11-18
- [Manage your account](https://docs.together.ai/docs/account-management) — accessed 2026-11-18
