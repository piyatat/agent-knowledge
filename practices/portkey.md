---
id: portkey
title: Portkey — model gateway, guardrails, and MCP proxy
kind: service
tags: [portkey, gateway, mcp, observability]
status: active
updated: 2026-11-17
when_to_use: Routing an agent's model calls through one gateway with fallbacks, budgets, and a shared MCP front door
---

## Summary

**Portkey** is a hosted control plane and an OpenAI-compatible gateway in front of many model providers, with logs, routing, guardrails, and an MCP proxy. An open-source gateway can run locally. The company site says Palo Alto Networks has completed the acquisition and that the enterprise product is **Prisma AIRS AI Gateway**.

## Notes

- **Access.** The app shell is `https://app.portkey.ai/`. Create a Portkey API key under Settings, then add a provider in Model Catalog and call models as `@provider-slug/model-name`. The getting-started and product pages linked from `links` are the setup guides. The open-source gateway package is `@portkey-ai/gateway`.
- **Auth.** One Portkey API key reaches the providers stored in Model Catalog. Provider credentials stay in Portkey. **Virtual keys** have moved to Model Catalog; the old idea (one Portkey key, many providers) remains, with org-level credentials, budgets, rate limits, and model allow-lists. MCP clients call `https://mcp.portkey.ai/{server-slug}/mcp` with `Authorization: Bearer` set to a Portkey API key. The key decides which servers and tools that caller can use. Upstream OAuth, API keys, or identity headers are injected by the gateway.
- **Plans (pricing page, 2026-11-17).** **Developer** is free: the plan card says **10,000** recorded logs a month, requests past that still run, and further logs are dropped. Log retention is **3 days**; metrics **30 days**. Deterministic guardrails and simple caching (1-day TTL) are included. The same page's comparison table also lists Developer as **10,000** requests a month with no overage. Read the live meter before assuming which cap binds. **Production** is **$49/month**: **100,000** recorded logs, then **$9** per extra **100,000** requests, **30-day** logs and **90-day** metrics, LLM and partner guardrails, semantic caching, and role-based access plus service-account keys. **Enterprise** is custom (SSO, private cloud, HIPAA/GDPR paperwork). The open-source column lists unlimited requests and a basic local dashboard. The Developer card says it is for prototypes, not production workloads.
- **MCP gateway.** Register a server, set its upstream auth, and provision it to workspaces. The gateway logs the caller, parameters, and response, and can throttle by request count or tokens. Tool results are still untrusted content (`prompt-injection-agent-defense`).
- **Alternatives.** LiteLLM proxy (`litellm-proxy`) when the gateway must run entirely on hosts you operate. OpenRouter (`openrouter`) when you want one vendor key and no gateway of your own. Ollama (`ollama`) when the weights stay on the machine.
- **Caveats.** The homepage control labeled "Get started for free" targets `https://app.portkey.ai/signup`. On **17 November 2026** that URL redirected to a Palo Alto Networks Prisma AIRS contact page. The app at `https://app.portkey.ai/` still loads the Portkey shell. Bring-your-own-key text is sent to the selected provider. Free-tier logs expire in three days, so a trace you need later may already be gone.

## Sources

- [Portkey](https://portkey.ai/) — accessed 2026-11-17
- [Announcing the General Availability of Prisma AIRS AI Gateway](https://www.paloaltonetworks.com/blog/2026/07/announcing-general-availability-of-prisma-airs-ai-gateway/) — accessed 2026-11-17
- [AI Gateway](https://portkey.ai/docs/product/ai-gateway) — accessed 2026-11-17
- [Getting started with AI Gateway](https://portkey.ai/docs/guides/getting-started/getting-started-with-ai-gateway) — accessed 2026-11-17
- [Virtual keys](https://portkey.ai/docs/product/ai-gateway/virtual-keys) — accessed 2026-11-17
- [MCP Gateway](https://portkey.ai/docs/product/mcp-gateway) — accessed 2026-11-17
- [Portkey pricing](https://portkey.ai/pricing) — accessed 2026-11-17
