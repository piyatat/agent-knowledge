---
id: cloudflare-ai-gateway
title: Cloudflare AI Gateway — logs, cache, and unified model billing
kind: service
tags: [cloudflare, gateway, routing, models]
status: active
updated: 2026-11-18
when_to_use: Proxying Workers AI or a third-party model through Cloudflare with logs, cache, or one bill
---

## Summary

**Cloudflare AI Gateway** sits in front of Workers AI and third-party models. It logs requests, caches identical responses, rate-limits, and can retry or fall back. Core analytics, caching, and rate limiting are free on every Cloudflare plan. Unified Billing is optional prepaid credits for Workers AI and supported providers, with a **5%** fee on the credit purchase and provider list prices passed through. Cloudflare Agents (`cloudflare-agents`) is the Durable Object agent runtime. Vercel AI Gateway (`vercel-ai-gateway`) and OpenRouter (`openrouter`) are other hosted routers.

## Notes

- **Access.** Sign up at the dashboard URL in `links`, then open **AI > AI Gateway** or send an authenticated request. A missing gateway id `default` is created on the first authenticated call. Workers AI requests always send `cf-aig-gateway-id`. Third-party calls can omit it and use `default`. A gateway name is at most **64** characters. Free accounts can have **10** gateways; paid accounts **20**. The auto-created gateway bills Workers AI as Standard (the Cloudflare account, at the end of the cycle). Prepaid credits require that gateway's Workers AI setting set to Unified billing.
- **Auth.** A Cloudflare API token calls the REST API. The get-started token for a Workers AI call includes **AI Gateway Read**, **AI Gateway Edit**, and **Workers AI Read**. Creating a gateway through the API needs Read and Edit. Provider credentials are separate: a key on the request, a key stored on the gateway (BYOK), or Cloudflare-managed credentials under Unified Billing. Order: request key, then the stored key under the `default` alias, then Unified Billing if fallback is allowed. On Anthropic Messages, only `x-api-key` counts as a provider key. `Authorization: Bearer` on that endpoint does not, so a bearer header alone can fall through to a stored key or to Unified Billing.
- **Calling.** Account REST is `https://api.cloudflare.com/client/v4/accounts/{account_id}/ai/v1/chat/completions`, plus `/ai/v1/responses` and `/ai/run`. Provider-native URLs are `https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/{provider}`. The unified path (`env.AI.run()` and `/ai/v1/chat/completions`) consults only the `default` BYOK alias. `cf-aig-byok-alias` selects another alias on provider-native requests. Caching is off until you enable it. It applies to identical text and image requests, up to **25 MB**, with a TTL from **60 seconds** to one month. Two identical requests at once can both miss.
- **Plans (pricing and limits, 2026-11-18).** Core gateway features are free. Unified Billing credits are bought with a credit or debit card set as the primary method. PayPal, Apple Pay, and Google Pay are not accepted for that purchase. A **$100** credit purchase charges **$105**. The balance can go negative; Cloudflare then charges the card at the start of the next month for the previous month. Unified Billing requests are limited to **200** per **60 seconds** per gateway (**429**, error `2018`). That limit does not apply to BYOK. Logs depend on when the account created its first gateway. On or after **24 September 2026**, logs are Workers Logs and follow that product's price and retention. Earlier accounts use Legacy Logs: **100,000** logs total on Workers Free, **10 million** per gateway on Workers Paid, **10 MB** per log, kept until you delete them. Logpush is up to **4** jobs per account and **1 MB** per log, billed as Logpush.
- **Zero data retention.** ZDR on Unified Billing sends those Cloudflare-managed requests to provider endpoints that do not retain prompts. It does not apply to BYOK, and it does not turn off AI Gateway's own logs. Disable logging separately. Require provider credentials (`byok_only`) or the header `cf-aig-no-wholesale: true` to refuse Unified Billing fallback. Missing credentials then fail (HTTP **400**, error `2044` when the gateway cannot find a key). That setting does not block Workers AI. `Payment-Method: x402` is a separate pay-per-request path (`x402-payments`); without it, credential precedence still applies.
- **Alternatives.** Vercel AI Gateway when the key, budgets, and failover should live on Vercel. OpenRouter, Helicone (`helicone`), or Portkey (`portkey`) for their catalogs. Workers AI directly when you do not need the gateway log. The Cloudflare API MCP server at `https://mcp.cloudflare.com/mcp` is the MCP entry for the account. The older AI Gateway MCP host is deprecated; its tools still answer for now.
- **Caveats.** A request that does not present a recognized provider key can spend Unified Billing credits (`cloudflare-ai-gateway-billing`). An auto-created gateway does not put Workers AI on those credits until you change its billing setting. ZDR is not a log deletion.

## Sources

- [Cloudflare AI Gateway](https://developers.cloudflare.com/ai-gateway/) — accessed 2026-11-18
- [Getting started](https://developers.cloudflare.com/ai-gateway/get-started/) — accessed 2026-11-18
- [Pricing](https://developers.cloudflare.com/ai-gateway/reference/pricing/) — accessed 2026-11-18
- [Limits](https://developers.cloudflare.com/ai-gateway/reference/limits/) — accessed 2026-11-18
- [Unified Billing](https://developers.cloudflare.com/ai-gateway/features/unified-billing/) — accessed 2026-11-18
- [Caching](https://developers.cloudflare.com/ai-gateway/features/caching/) — accessed 2026-11-18
- [Cloudflare's own MCP servers](https://developers.cloudflare.com/agents/model-context-protocol/cloudflare/servers-for-cloudflare/) — accessed 2026-11-18
- [mcp-server-cloudflare](https://github.com/cloudflare/mcp-server-cloudflare) — accessed 2026-11-18
