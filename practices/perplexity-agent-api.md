---
id: perplexity-agent-api
title: Perplexity Agent API — grounded research and multi-provider models
kind: service
tags: [perplexity, search, agents, models]
status: active
updated: 2026-11-18
when_to_use: Giving an agent a cited web answer, or calling several model providers through one Perplexity key
---

## Summary

The **Perplexity Agent API** is a hosted research loop at `POST https://api.perplexity.ai/v1/agent` (`POST /v1/responses` is the same surface, which is what an OpenAI SDK hits). One call can search, fetch pages, run code, and call your functions, then return a trace plus answer text. It is the product to use when the agent should come back with a cited answer. The **Search API** returns ranked JSON and no generated answer. The **Orchestrator API** is the OpenAI- or Anthropic-shaped model router on the same key (`perplexity-agent-search-opt-in`).

## Notes

- **Access.** Sign in at the API console linked from `links`. Sign-in creates a Perplexity account and does not create a project; the setup wizard does. Keys are bearer tokens (`PERPLEXITY_API_KEY`). Official Python and TypeScript SDKs are linked from the Agent API quickstart. A Pro or Max subscription does not include API credits and is not required.
- **Auth and billing.** Credits are prepaid and shared by every key in the project. A one-time sign-up credit, on accounts that receive one, expires **60 days** after it is added and is spent before purchased credits. That credit does not unlock the Agent API, the Orchestrator API, or batch creation — purchase credits first. An empty balance blocks keys until you add credits. Usage tiers follow lifetime credit purchases: tier 0 at **$0**, tier 1 at **$50**, then **$250**, **$500**, **$1,000**, and **$5,000**. A tier, once reached, stays.
- **What a call costs.** Token rates are per model on the Agent API Models page. Tool fees are separate: `web_search` **$0.0025** per call (**$0.001** with `search_type: "fast"`), `fetch_url` **$0.0005**, `image_search` **$0.0025** per successful call, `people_search` and `finance_search` **$0.005**. `sandbox` is **$0.03** per container session (a 20-minute billing window, not a runtime cap) plus **$0.0025** per SDK search made inside it. `flex` (0.5×) and `priority` (2×) change token rates only for models that list that tier. Tool fees stay the same. A completed response can report `usage.cost.total_cost`.
- **Effort.** `effort` is `fast`, `low`, `medium`, `high`, `xhigh`, or `ultra`. A bare name tracks Perplexity’s current bundle (model, tools, prompt). Pin a release with a version suffix, or copy the fields into the request and omit `effort`. A request cannot set both `effort` and `profile`. This is separate from the model’s `reasoning` effort.
- **Limits.** Agent API request limits are per organization, shared by every key and by both URL paths: tier 0 is **1** query per second, then **3**, **8**, **17**, and **33** (tiers 4 and 5). Polls, cancels, resumes, and file downloads count. Token limits are per model (or per effort name when you send only an effort): tier 0 is **5M** tokens per minute and **300M** per hour. A `429` sets `Retry-After` and `error.type` of `request_rate_limit_exceeded`, `token_rate_limit_exceeded`, or `overloaded`.
- **Alternatives.** Exa or Tavily when your own model should read search results. Firecrawl when the job is crawling one site. OpenRouter when you need a model router and no Perplexity search tools.
- **Caveats.** A request that names only `model` and `input` does not search. Page text in the trace is untrusted (`prompt-injection-agent-defense`). Sonar chat completions remain live on their old paths while you migrate.

## Sources

- [Agent API quickstart](https://docs.perplexity.ai/docs/agent-api/quickstart) — accessed 2026-11-18
- [Effort levels](https://docs.perplexity.ai/docs/agent-api/effort) — accessed 2026-11-18
- [Pricing](https://docs.perplexity.ai/docs/getting-started/pricing) — accessed 2026-11-18
- [Projects and billing](https://docs.perplexity.ai/docs/getting-started/projects) — accessed 2026-11-18
- [Rate limits and usage tiers](https://docs.perplexity.ai/docs/admin/rate-limits-usage-tiers) — accessed 2026-11-18
- [API platform overview](https://docs.perplexity.ai/docs/getting-started/overview) — accessed 2026-11-18
