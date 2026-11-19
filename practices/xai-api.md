---
id: xai-api
title: xAI API — Grok models, tools, and the Responses API
kind: service
tags: [xai, grok, models, tools]
status: active
updated: 2026-11-19
when_to_use: Calling Grok from an agent with an API key, including web search or a stateful Responses thread
---

## Summary

The **xAI API** is the hosted Grok inference API. The quickstart’s preferred text path is `POST /v1/responses` on `https://api.x.ai/v1`, with an OpenAI-compatible client or the Vercel AI SDK. Grok Build (`grok-build`) is the terminal agent. Cursor Grok Bot is the hosted teammate. This entry is the API those products call, and the API other agents call directly.

## Notes

- **Access.** Create an account at the console URL in `links`, add credits, and create an API key. Send it as `Authorization: Bearer`. Management keys are a separate credential on `https://management-api.x.ai`. The US regional base is `https://us.api.x.ai/v1`.
- **Auth.** One API key per caller. There is no documented end-user OAuth on the inference request. Keys are team-scoped. Zero Data Retention, when a team admin turns it on, applies to every key on the team.
- **Models and price (pricing page, 2026-11-19).** Text is priced per 1M tokens, and a prompt at or above 200k tokens is billed entirely at the long-context rate. `grok-4.7` and `grok-4.6`: 500k context, $2 / $0.50 cached / $6 output below 200k, and $4 / $1 / $12 at or above. `grok-4.3` and the `grok-4.20-0309` family: 1M context, $1.25 / $0.20 / $2.50, doubling at the long-context threshold. `grok-build-0.1`: 256k, $1 / $0.20 / $2, doubling past 200k. Batch text is 20% off for the models the pricing page lists, usually within 24 hours, and those requests do not count toward rate limits. `grok-build-0.1` is not in that discount list. Priority processing is 2× token rates and is billed only when the response says `"service_tier": "priority"`. The US endpoint is 1.1× and, on that page, serves only `grok-4.7` and `grok-4.6`. Grok 4.7 Fast is 2× (1.5× on long context) and the pricing page says it is only in Cursor and Grok Build, not on the public API.
- **Tools.** Server-side tools add a per-call fee on top of tokens. Web search and code execution are $5 per 1,000 calls. X search is $5 per 1,000 posts and $10 per 1,000 profiles. Collections search is $2.50 per 1,000 calls. The pricing page says every tool name works on the Responses API, and that the gRPC Python SDK does not support `code_interpreter` or `file_search`. Custom functions are yours to run. Remote MCP is token-priced, not per call.
- **Limits.** Tiers follow cumulative spend since 2026-01-01 and do not downgrade. Tier 0 `grok-4.7` is 150 requests/second and 50M tokens/minute. Cached and reasoning tokens still count toward TPM. A 429 is the over-limit signal. Voice is capped by concurrent sessions, not TPM.
- **Alternatives.** Grok Build when the job is a repo on the developer’s machine. OpenAI, Groq, Cerebras, or Together when the agent should not depend on this key (`groq-cloud`, `cerebras-inference`, `together-ai`).
- **Caveats.** Responses are stored for 30 days unless you set `store: false` (`xai-responses-retention`). A usage-guideline block that the Responses API catches before generation still costs $0.05. File storage is $0.025/GiB/day and collection storage is $0.10/GiB/day.

## Sources

- [Quickstart](https://docs.x.ai/developers/quickstart) — accessed 2026-11-19
- [Pricing](https://docs.x.ai/developers/pricing) — accessed 2026-11-19
- [Rate limits](https://docs.x.ai/developers/rate-limits) — accessed 2026-11-19
- [Generate text](https://docs.x.ai/developers/model-capabilities/text/generate-text) — accessed 2026-11-19
- [Tools overview](https://docs.x.ai/developers/tools/overview) — accessed 2026-11-19
- [API security FAQ](https://docs.x.ai/developers/faq/security) — accessed 2026-11-19
