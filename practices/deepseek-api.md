---
id: deepseek-api
title: DeepSeek API — OpenAI-compatible models, tools, and search
kind: service
tags: [deepseek, models, tools, search]
status: active
updated: 2026-11-19
when_to_use: Calling DeepSeek from an agent with an OpenAI-compatible key, including tools and web search
---

## Summary

The **DeepSeek API** is DeepSeek’s hosted inference API. OpenAI-format calls go to `https://api.deepseek.com`. Anthropic-format calls go to `https://api.deepseek.com/anthropic`. The current ids are `deepseek-flash` (DeepSeek-V4.1-Flash) and `deepseek-v4-pro`. Thinking is on by default. Claude Code, GitHub Copilot, and OpenCode can use this API as a model backend. Groq, Cerebras, Together, and xAI are other OpenAI-compatible hosts (`groq-cloud`, `cerebras-inference`, `together-ai`, `xai-api`).

## Notes

- **Access.** Create an account at the platform URL in `links`, then create an API key. The signup page can limit a region to email registration. Send the key as `Authorization: Bearer`. The first-call page also points harness authors at a developer-preview DeepSeek Harness. This entry is the inference API.
- **Auth.** One bearer key per request. There is no documented end-user OAuth on the inference call. Limits are per account, not per key. Optional `user_id` (Anthropic format: `metadata.user_id`) separates content safety, KV cache, and scheduling. Use ASCII letters, digits, `_`, and `-`, at most 512 UTF-8 bytes, and do not put personal data in it. On an account with a raised quota, an empty id is its own concurrency bucket.
- **Models and price (pricing page, 2026-11-19).** Both models: 1M context, up to 384K output, JSON, tools, the Responses API, the Anthropic API, and beta chat-prefix completion. FIM completion is beta and only in non-thinking mode. Vision is on Flash only. Prices are per 1M tokens. Off-peak is half of peak. Peak is 01:00–04:00 and 06:00–10:00 UTC, Monday–Friday, excluding Chinese public holidays. Flash, off-peak then peak: cache-hit input $0.003 / $0.006, cache-miss $0.15 / $0.30, output $0.60 / $1.20. V4-Pro: $0.022 / $0.044, $0.66 / $1.32, $1.98 / $3.96. Granted balance is spent before topped-up balance. Call Flash as `deepseek-flash`. The retired names `deepseek-v4-flash` and `deepseek-v4-flash-vision-exp` still route to V4.1-Flash and bill at the Flash price.
- **Search.** Standalone Search and Fetch are `POST /v1/tools/search` and `POST /v1/tools/fetch` on the same host, $0.75 per 1,000 successful requests. Account QPS is 100 for Search and 25 for Fetch, and Fetch also has a per-domain cap. From 12:00 on 2026-11-18 Beijing time (UTC+8), server-side search and page-fetch **inside a model call** are no longer billed as tool calls. The pages they return are billed as model tokens. That covers the web tools, Anthropic `web_search`, and Responses `web_search`. Image search is not on the standalone Search API yet.
- **Limits.** In-flight concurrency is 2,500 for Flash and 500 for V4-Pro, counted until the response finishes. Over the cap is HTTP 429. A higher cap is requested, not bought as a tier. If inference has not started after 10 minutes, the server closes the connection. While it waits, a non-streaming response sends empty lines and a stream sends `: keep-alive` comments.
- **Alternatives.** Groq, Cerebras, Together, or xAI when the agent should not depend on this account. Exa, Tavily, or Brave Search (`brave-search-api`) when search should be a tool you call and pay for yourself. OpenRouter when one key should fail over across providers.
- **Caveats.** Thinking mode silently ignores sampling parameters, and a tool loop that drops `reasoning_content` returns HTTP 400 (`deepseek-reasoning-and-peak`). HTTP 402 means the balance is empty. Do not retry other Search or Fetch 4xx responses without changing the request.

## Sources

- [Your first API call](https://api-docs.deepseek.com/) — accessed 2026-11-19
- [Models and pricing](https://api-docs.deepseek.com/quick_start/pricing) — accessed 2026-11-19
- [Rate limit and isolation](https://api-docs.deepseek.com/quick_start/rate_limit) — accessed 2026-11-19
- [Thinking mode](https://api-docs.deepseek.com/guides/thinking_mode) — accessed 2026-11-19
- [Search and Fetch](https://api-docs.deepseek.com/guides/search) — accessed 2026-11-19
- [DeepSeek platform signup](https://platform.deepseek.com/sign_up) — accessed 2026-11-19
