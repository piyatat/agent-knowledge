---
id: vercel-ai-gateway
title: Vercel AI Gateway — one key across model providers
kind: service
tags: [vercel, gateway, routing, models]
status: active
updated: 2026-11-18
when_to_use: Routing an agent's model calls through Vercel with one key, budgets, and provider failover
---

## Summary

**Vercel AI Gateway** is a hosted model API at `https://ai-gateway.vercel.sh`. One Vercel credential calls many providers, logs each attempt, and fails over. Token prices are the provider list price with no markup, including bring-your-own-key. The app does not have to run on Vercel. The AI SDK (`vercel-ai-sdk`) uses this gateway when the model is a plain `provider/model` string. OpenRouter (`openrouter`), Helicone (`helicone`), Portkey (`portkey`), and Cloudflare AI Gateway (`cloudflare-ai-gateway`) are other routers.

## Notes

- **Access.** Create a Vercel account at the signup URL in `links`, then an AI Gateway API key in the dashboard. You do not need a Vercel project unless the caller is a Vercel deployment using OIDC. The gateway is on every Vercel plan. Each provider's terms still apply.
- **Auth.** Send `Authorization: Bearer` with `AI_GATEWAY_API_KEY`, or an OIDC token. A key works from a laptop, CI, or another cloud. It does not expire unless you set a date or revoke it. When a team member leaves, Vercel deactivates keys that person created. On a Vercel deployment, the AI SDK sends the project OIDC token when `AI_GATEWAY_API_KEY` is unset. Other clients must pass `getVercelOidcToken()` from `@vercel/oidc` themselves. A provider key (BYOK) authenticates Vercel to the provider. It does not authenticate your app to the gateway.
- **Calling.** OpenAI Chat Completions and Responses use base URL `https://ai-gateway.vercel.sh/v1`. Anthropic Messages uses `https://ai-gateway.vercel.sh` (no `/v1`). Modalities include text, image, video, speech, transcription, realtime, embeddings, reranking, and decisions. `caching: 'auto'` is the provider's prompt cache, billed at that provider's cache-read rate. Caching a full response is the application's job. Regional hosts are `eu.ai-gateway.vercel.sh` and `us.ai-gateway.vercel.sh`.
- **Plans (pricing page, 2026-11-18).** Free and paid tiers both charge list price. The free tier is a monthly credit for a subset of models, with lower per-model rate limits (`429`). The credit starts at the first gateway request. Buying AI Gateway Credits moves the team to paid, raises limits, and the monthly free credit stops. Purchased credits expire one year after purchase. The gateway deletes prompt and response content when the request finishes and keeps request metadata; routing-attempt detail in Logs is kept for 30 days. BYOK is paid-only: purchased credits and a positive balance. Failed BYOK requests fall back to Vercel's keys by default, and that usage hits your credit balance. Turning fallback off costs **$0.20** per 1,000 BYOK requests. A private model with no Vercel-provided fallback pays the same fee. Team-wide provider allowlist and team-wide zero data retention are **$0.10** per 1,000 requests. A per-request `only` filter and per-request zero data retention have no surcharge. Regional hosting is **5%** of inference cost (Pro and Enterprise; Hobby and a Pro trial get **403**). You also pay card processing fees. Enterprise can invoice. ChatGPT or Claude subscription API credits stay at that provider; they do not top up AI Gateway Credits.
- **Budgets.** A budget can cover a team, project, API key, or member. It counts spend through Vercel's provider keys. BYOK token spend is outside that cap, except the no-fallback fee, which does count. After a budget is exceeded, the gateway rejects every request in that scope with **402**, including BYOK.
- **Alternatives.** OpenRouter when you want that catalog and key. Cloudflare AI Gateway when the account and logs should live on Cloudflare. Helicone or Portkey when the gateway should also be the observability product. LiteLLM (`litellm-proxy`) when you run the proxy. Call the provider SDK when you do not want a router in the path.
- **Caveats.** Buying credits ends the monthly free credit (`vercel-ai-gateway-credits`). A budget does not cap BYOK token spend, and the default BYOK fallback can spend Vercel credits after your provider key fails. A team-wide allowlist removes failover to providers outside the list; the per-request `only` option does the same restriction without the surcharge.

## Sources

- [Vercel AI Gateway](https://vercel.com/docs/ai-gateway) — accessed 2026-11-18
- [AI Gateway pricing](https://vercel.com/docs/ai-gateway/pricing) — accessed 2026-11-18
- [Authentication and BYOK](https://vercel.com/docs/ai-gateway/authentication-and-byok) — accessed 2026-11-18
