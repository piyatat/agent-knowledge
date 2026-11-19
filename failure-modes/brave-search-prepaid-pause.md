---
id: brave-search-prepaid-pause
title: A Brave Search call pauses at a zero balance, or an x402 payment hits an endpoint that is not for sale
kind: knowledge
tags: [brave, billing, x402, retention]
status: active
updated: 2026-11-19
when_to_use: Brave Search starts rejecting calls after the credits run out, or a pay-per-request search returns 404 instead of 402
---

## Summary

Brave Search (`brave-search-api`) on a prepaid plan stops when the balance hits $0. The pay-per-request host sells only some paths. Saving the JSON into your own store is outside the default terms.

## Notes

- **Zero balance pauses the keyed API.** On a prepaid plan, usage after the monthly credits draws the prepaid balance. At $0, further requests are rejected until you add funds. Auto-reload can buy a fixed amount (minimum $5) when the balance crosses a threshold you set. Leaving the monthly auto-reload cap empty does not cap those charges. A bank that blocks automatic or international charges leaves the top-up incomplete, and the API stays paused. Credits you buy do not expire and are not refundable. The $5 that renews each month is replaced, not carried over. A card is still required to use only that $5, with a $0 or $1 authorization hold Brave says is refunded.
- **Switching off postpaid needs a new key.** Cancelling a postpaid plan cannot be undone. The prepaid replacement does not keep the old key. Adding a prepaid copy of a plan you already have as postpaid moves the $5 monthly credit onto the prepaid plan. It does not double it.
- **The payment proxy is not the whole API.** `https://search.agent.s.brave.app` answers a request that has no payment with HTTP 402. The challenge is the price, it lasts 300 seconds, and a later retry must be the same request with the payment header. Paths outside the sold list are HTTP 404, not a 402 you can pay. As of the agent-payments guide and `llms.txt` (2026-11-19), web search, LLM Context, news, video, image, and the local place endpoints are sold at the Search rate of $5 per 1,000 ($0.005, 5000 base units of USDC on Base). Answers, Autosuggest, and Spellcheck are not sold there. The summarizer is not sold there either. Pay the challenge you just received. Do not reuse an old one.
- **Do not store the payload.** The help FAQ prohibits retaining any data received through the API. Storing results, or training on them, needs an arrangement with Brave. A custom plan is the marketing page’s route for storage rights. Caching a snippet in the current turn is not the same as writing the response into a database, a log archive, or a memory service.

## Sources

- [Help and feedback](https://api-dashboard.search.brave.com/documentation/resources/help-feedback) — accessed 2026-11-19
- [Agent payments](https://api-dashboard.search.brave.com/documentation/guides/agent-payments) — accessed 2026-11-19
- [Payment proxy description](https://search.agent.s.brave.app/llms.txt) — accessed 2026-11-19
- [Brave Search API](https://brave.com/search/api/) — accessed 2026-11-19
- [Rate limiting](https://api-dashboard.search.brave.com/documentation/guides/rate-limiting) — accessed 2026-11-19
