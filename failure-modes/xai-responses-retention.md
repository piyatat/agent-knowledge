---
id: xai-responses-retention
title: xAI stores Responses for 30 days, and Zero Data Retention turns that thread off
kind: knowledge
tags: [xai, retention, privacy, tools]
status: active
updated: 2026-11-19
when_to_use: An xAI Responses follow-up lost its thread after 30 days, or store:false or Zero Data Retention broke a stateful call
---

## Summary

The xAI Responses API (`xai-api`) stores the prompt, reasoning, and model output on xAI’s servers by default so a later call can continue from the response id. That copy lasts 30 days. Turning storage off, or enabling Zero Data Retention for the team, removes the features that depend on it.

## Notes

- **Default retention.** The text guide says storage is on unless the request sets `store: false`. The response id retrieves or continues the conversation for 30 days, then the stored response is removed. To continue after that, keep the history and the encrypted thinking content yourself and send them on a new request. The security FAQ describes a separate 30-day encrypted audit copy of requests and responses, says xAI does not train on it, and says that audit retention does not apply to a team with Zero Data Retention.
- **What `store: false` changes.** The call is no longer a server-side thread. A follow-up that only sends the previous response id will not find that state. Resend the conversation yourself. The AI SDK’s documented continuation also assumes storage is left on.
- **Zero Data Retention is team-wide.** A team admin switches it in the console. It covers every API key. There is no per-key setting. The security FAQ says it disables features that need stored data, including the stateful Responses API, Files and Collections, and the Batch API. Content deleted under ZDR cannot be produced again by xAI. The FAQ recommends leaving the default 30-day retention unless a compliance rule requires ZDR.
- **US endpoint is not the same product surface.** `https://us.api.x.ai/v1` keeps request handling, inference, moderation, and retained request data in the United States, at 1.1× token rates. The pricing page limits it to `grok-4.7` and `grok-4.6`, with no image, video, or voice APIs. Files, Collections, server-side tools, and the network path to the endpoint are outside that guarantee.
- **Cost that is easy to miss.** Server-side tools bill per invocation on top of tokens (web search and code execution are $5 per 1,000 calls). A guideline violation the Responses API catches before generation still costs $0.05. Long-context rates apply to every token once the prompt reaches 200k, not only the overflow.

## Sources

- [Generate text](https://docs.x.ai/developers/model-capabilities/text/generate-text) — accessed 2026-11-19
- [API security FAQ](https://docs.x.ai/developers/faq/security) — accessed 2026-11-19
- [Pricing](https://docs.x.ai/developers/pricing) — accessed 2026-11-19
