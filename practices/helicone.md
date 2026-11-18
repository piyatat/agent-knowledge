---
id: helicone
title: Helicone — AI gateway and request logs
kind: service
tags: [helicone, gateway, observability, models]
status: active
updated: 2026-11-18
when_to_use: Routing an agent's model calls through one OpenAI-compatible gateway that also logs every request
---

## Summary

**Helicone** is a hosted LLM gateway and observability product. One OpenAI-compatible endpoint, `https://ai-gateway.helicone.ai`, reaches models across providers, and every request is logged with cost and latency. You can pay Helicone in credits (they hold the provider keys) or attach your own provider keys. The gateway and the logging app are open source and can be self-hosted. It is a different product from OpenRouter (`openrouter`), Portkey (`portkey`), and a self-hosted LiteLLM proxy (`litellm-proxy`).

## Notes

- **Access.** Create an account at the US app sign-up linked from `links`, then create a Helicone API key. The quickstart shows how to point an OpenAI SDK at the gateway URL. The pricing page says Helicone is now part of Experiential Labs, with details still to come.
- **Auth.** Gateway calls use the Helicone API key. Bring-your-own-key mode stores each provider key in Helicone provider settings. Requests for a model the registry does not know route only through those keys.
- **Plans (pricing page, 2026-11-18).** **Hobby** is free: **10,000** requests a month, **1 GB**, **1** seat, **1** organization, **7-day** retention, **10** logs/minute ingested, **10** API calls/minute. **Pro** is **$79/month** (7-day trial): unlimited seats, alerts, reports, HQL, **1 month** retention, **1,000** logs/minute, still **1** organization, and usage-based pricing past the free request and storage allowance. **Team** is **$799/month**: **5** organizations, SOC 2 and HIPAA, a dedicated Slack channel, **3-month** retention, **15,000** logs/minute. Enterprise adds a custom MSA, SAML SSO, and on-prem. Credits for pass-through model spend are separate and are advertised at **0%** markup.
- **Routing.** By default the gateway picks the cheapest provider for a model and fails over on rate limits, auth errors, some 400s, timeouts, and 5xx. A model id can pin one provider (`model/provider`), name a deployment, set a fallback chain, or exclude a provider.
- **Alternatives.** OpenRouter when you only need a multi-provider key. Portkey when the gateway should also be the MCP front door. Langfuse (`langfuse`) when you already have traces and want scores, and the gateway is someone else's.
- **Caveats.** Two official pages disagree on whether credits or your own keys are tried first (`helicone-billing-order`). The platform overview comparison table still quotes a per-seat price the pricing page does not. Gateway marketing says credits skip provider rate limits; Helicone's own log ingestion and API caps still apply. A self-hosted Jawn no longer proxies LLM traffic: the AI Gateway has to run beside it. The self-host guide includes a local demo login; change it before anyone else can reach the instance.

## Sources

- [Helicone quickstart](https://docs.helicone.ai/getting-started/quick-start) — accessed 2026-11-18
- [AI Gateway overview](https://docs.helicone.ai/gateway/overview) — accessed 2026-11-18
- [Provider routing](https://docs.helicone.ai/gateway/provider-routing) — accessed 2026-11-18
- [Helicone pricing](https://www.helicone.ai/pricing) — accessed 2026-11-18
- [Manual self-hosting](https://docs.helicone.ai/getting-started/self-host/manual) — accessed 2026-11-18
- [Platform overview](https://docs.helicone.ai/getting-started/platform-overview) — accessed 2026-11-18
