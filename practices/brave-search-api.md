---
id: brave-search-api
title: Brave Search API — web search and LLM context for agents
kind: service
tags: [brave, search, web, x402]
status: active
updated: 2026-11-19
when_to_use: Giving an agent web search or extracted page context from Brave’s index, with an API key or a per-request payment
---

## Summary

The **Brave Search API** serves Brave’s own web index to applications and agents. The Search plan covers web, news, image, video, and local results, plus **LLM Context** (`/res/v1/llm/context`), which returns extracted chunks for a model instead of short snippets. The Answers plan returns a grounded answer and bills tokens as well as requests. There is no standalone free plan. Exa, Tavily, and Firecrawl are other agent web tools (`exa`, `tavily`, `firecrawl`). Perplexity’s agent API returns a cited answer from its own stack (`perplexity-agent-api`).

## Notes

- **Access.** Create an account at the dashboard URL in `links`, activate a plan, and add an API key. The keyed host is `https://api.search.brave.com`. Send the key in `X-Subscription-Token`. A key belongs to one plan. You can hold up to ten keys on a plan. Agents can skip the account and pay per request on `https://search.agent.s.brave.app` (`x402-payments`).
- **Auth.** Keyed calls require the subscription header. The payment proxy does not. A request there with no payment gets HTTP 402. The signed payment is the credential. Read `https://search.agent.s.brave.app/llms.txt` before paying. The 402 challenge is the price of that request, and a challenge is payable for 300 seconds. As of the agent-payments guide and that file (2026-11-19), the proxy sells web search, LLM Context, news, video, image, and the local place endpoints. Answers, Autosuggest, and Spellcheck still need an API key. The summarizer is not sold there.
- **Plans (Brave Search API page and help FAQ, 2026-11-19).** Search is $5 per 1,000 requests, with a stated capacity of 50 queries per second. Answers is $4 per 1,000 requests plus $5 per million input and output tokens, at 2 queries per second, and is OpenAI-SDK compatible. Each plan includes $5 of credits that renew monthly. That credit is not a free tier: activating a plan still needs a card, including a $0 prepay (a $0 or $1 authorization hold that Brave says is refunded). Purchased credits do not expire. Unused free monthly credits are replaced, not rolled over. Brave does not refund unused purchased credits. New signups are prepaid. An existing postpaid plan can stay, but cancelling it cannot be undone, and the replacement prepaid plan needs a new key. Enterprise is the path for custom capacity, invoicing, and full-funnel zero data retention.
- **Limits.** Rate limits use a one-second sliding window and are counted when the request arrives, not when it finishes. Over the limit is HTTP 429. Response headers `X-RateLimit-Limit`, `X-RateLimit-Policy`, `X-RateLimit-Remaining`, and `X-RateLimit-Reset` name each window. Only successful responses count toward quota and billing. The header examples in the rate-limit guide (1 request per second, 15,000 per month) are illustrations. Use the headers on your own response, and the plan capacities above, for the cap you actually have.
- **Alternatives.** Exa or Tavily when the agent should search and extract through those APIs. Firecrawl when the job is crawl-then-markdown of known URLs. DeepSeek’s own Search and Fetch (`deepseek-api`) when the model call should search inside that provider. The x402 proxy when the agent should not hold a Brave key.
- **Caveats.** A prepaid balance of $0 pauses the API until you add funds (`brave-search-prepaid-pause`). The help FAQ prohibits retaining data received from the API, including storing results or training on them, unless you arrange that with Brave. Do not write Brave payloads into a durable store by default.

## Sources

- [Brave Search API](https://brave.com/search/api/) — accessed 2026-11-19
- [Create an account](https://api-dashboard.search.brave.com/register) — accessed 2026-11-19
- [Quickstart](https://api-dashboard.search.brave.com/documentation/quickstart) — accessed 2026-11-19
- [Authentication](https://api-dashboard.search.brave.com/documentation/guides/authentication) — accessed 2026-11-19
- [Rate limiting](https://api-dashboard.search.brave.com/documentation/guides/rate-limiting) — accessed 2026-11-19
- [Help and feedback](https://api-dashboard.search.brave.com/documentation/resources/help-feedback) — accessed 2026-11-19
- [Agent payments](https://api-dashboard.search.brave.com/documentation/guides/agent-payments) — accessed 2026-11-19
- [Payment proxy description](https://search.agent.s.brave.app/llms.txt) — accessed 2026-11-19
