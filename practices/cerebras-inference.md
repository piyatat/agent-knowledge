---
id: cerebras-inference
title: Cerebras Inference — fast OpenAI-compatible shared models
kind: service
tags: [cerebras, models, inference, openai]
status: active
updated: 2026-11-18
when_to_use: Calling a fast OpenAI-compatible chat API for gpt-oss-120b or Qwen 3.8 27B
---

## Summary

**Cerebras Inference** serves a short shared catalog behind an OpenAI-compatible API at `https://api.cerebras.ai/v1`. On 2026-11-18 the shared models are `gpt-oss-120b` and `qwen-3.8-27b`. Dedicated Inference is reserved capacity and a larger catalog, addressed by an endpoint id rather than the shared model id. It is a single-vendor inference API (`groq-cloud`), separate from a gateway you operate and from Nexus routing (`fireworks-nexus`).

## Notes

- **Access.** Create an account in the Cloud Console linked from `links`, then a key. Requests send `Authorization: Bearer`. The official Python package is `cerebras-cloud-sdk` and the Node package is `@cerebras/cerebras_cloud_sdk`. An OpenAI client uses base URL `https://api.cerebras.ai/v1`. Pass `reasoning_format` and `clear_thinking` through `extra_body`. List live ids rather than trusting an old sample (`cerebras-retired-model-ids`).
- **Plans.** There is no renewing free tier. Adding a payment method grants a one-time **$5** credit that expires **30 days** after activation. You are not charged or enrolled in paid usage by that step. Playground and API stay inactive until a payment method is added, and they pause when the credit expires or runs out until you buy Pay as You Go credits. The first purchase moves the org to the Developer tier. Promotional credits are non-transferable and can be withheld for duplicate accounts.
- **Prices and limits (model pages, 2026-11-18).** `gpt-oss-120b`: **$0.35 / $0.75** per million input/output tokens, about **3000** tokens/second, context **65k** free / **131k** paid, max output **32k** / **40k**. Free-trial limits **5** RPM, **30K** uncached TPM, **90K** total TPM, **1M** TPD. Developer: **1K** RPM, **500K** uncached TPM, **1.5M** total TPM, no daily cap. `qwen-3.8-27b`: **$0.99 / $1.49**, about **1850** tokens/second, context **64k** (65,536) free / **128k** (131,072) paid, same **32k / 40k** output split. Free-trial and Developer rate limits match: **300** RPM, **150K** uncached TPM, **750K** total TPM (temporarily up from **450K**), no hourly or daily cap. Images: **2** per request on the free trial, **10** on Pay as You Go, **10 MiB** payload.
- **Rate-limit shape.** Limits are per organization and per model. Two token buckets apply: uncached TPM, and total TPM (default **3×** uncached; Qwen’s total is temporarily **5×**). A **429** says which bucket. The estimate before the call includes input plus `max_completion_tokens` or an analyzed output bound, so a huge completion cap can 429 before any token is generated. Quota refills continuously. The Limits page in the console can differ from the docs when a project cap is set.
- **Tools and reasoning.** Both shared models support streaming, structured outputs, tool calling, and prompt caching. Qwen also supports parallel tool calls and images. Defaults: GPT OSS `reasoning_effort` **medium** (cannot be `none`); Qwen **high**, which selects Qwen’s native `xhigh`, and `none` disables it. `reasoning_format: "none"` does not disable reasoning. Reasoning tokens count toward `max_completion_tokens`.
- **Alternatives.** GroqCloud for a different fast catalog and server-side MCP tools. OpenRouter or a gateway when the agent must fail over. vLLM when the weights must stay on a host you control. Dedicated Inference when you need a model that is no longer on the shared catalog.
- **Caveats.** GPT OSS may call a tool you did not declare; the model page says to reprompt that it is hallucinating a tool call. The API maps the `system` role to developer-level instructions for that model. `min_tokens` can make it emit EOS tokens that break a parser. Cached tokens still count toward the total TPM bucket.

## Sources

- [Cerebras quickstart](https://inference-docs.cerebras.ai/quickstart) — accessed 2026-11-18
- [Model catalog](https://inference-docs.cerebras.ai/models/overview) — accessed 2026-11-18
- [OpenAI GPT OSS](https://inference-docs.cerebras.ai/models/openai-oss) — accessed 2026-11-18
- [Qwen 3.8 27B](https://inference-docs.cerebras.ai/models/qwen-3.8-27b) — accessed 2026-11-18
- [Rate limits](https://inference-docs.cerebras.ai/support/rate-limits) — accessed 2026-11-18
- [Reasoning](https://inference-docs.cerebras.ai/capabilities/reasoning) — accessed 2026-11-18
- [OpenAI compatibility](https://inference-docs.cerebras.ai/resources/openai) — accessed 2026-11-18
- [Authentication](https://inference-docs.cerebras.ai/api-reference/authentication) — accessed 2026-11-18
