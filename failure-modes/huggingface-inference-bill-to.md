---
id: huggingface-inference-bill-to
title: A Hugging Face inference call misses org credits, or a free token has none
kind: knowledge
tags: [huggingface, billing, routing, auth]
status: active
updated: 2026-11-20
when_to_use: An Inference Providers call fails on a free token, bills the user, or ignores a Team credit pool
---

## Summary

Hugging Face Inference Providers (`huggingface-inference-providers`) gives free accounts **no** monthly credits. PRO, Team, and Enterprise credits are **$2** a month, or **$2 per seat**, and they are shared with other Hugging Face compute. An organization pool applies only when the request sets `X-HF-Bill-To`.

## Notes

- **No credits on a free token.** Pay-as-you-go for a free user requires purchased credits. A token with the Inference Providers permission still cannot spend included credit the account does not have. PRO’s **$2**, and a Team or Enterprise seat’s **$2**, are general compute credits: Inference Endpoints, Spaces hardware, ZeroGPU past quota, and Jobs draw the same balance. Inference can be at zero while the subscription is active.
- **Bill-to header.** Team and Enterprise included credits apply when the request sends `X-HF-Bill-To` with the organization name, or a resource-group id for an Enterprise group the user belongs to. Hub clients pass that as `bill_to` or `billTo`. A call that omits it uses the user’s own billing. Organization settings then do not apply either: enabled and disabled providers follow the user, and the org spend limit is not the one enforced.
- **Disabled provider.** When the request is billed to an organization, that organization’s provider list wins. Asking for a provider the organization disabled returns an error, even if the user enabled it personally.
- **Usage lag.** The organization usage API is Enterprise and above. It needs a token that can read org billing. Rows can appear up to **two hours** later, and each row’s cost is rounded to the nearest cent, so a sum of rows can differ from the invoice. Token counts in that API are reported for chat completions.
- **hf-inference.** Selecting provider `hf-inference` bills hardware time, and the July 2025 docs limit that provider mostly to CPU tasks (embeddings, ranking, classification, small historical models). A large chat model should name a GPU provider or leave routing on the default policy.

## Sources

- [Pricing and billing](https://huggingface.co/docs/inference-providers/pricing) — accessed 2026-11-20
- [Inference Providers](https://huggingface.co/docs/inference-providers/index) — accessed 2026-11-20
