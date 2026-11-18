---
id: cloudflare-ai-gateway-billing
title: A Cloudflare AI Gateway call can spend Unified Billing when the provider key is missed
tags: [cloudflare, billing, gateway, byok]
kind: knowledge
status: active
updated: 2026-11-18
when_to_use: An AI Gateway call bills Cloudflare credits, or zero data retention still leaves prompts in logs
---

## Summary

AI Gateway spends Unified Billing credits when it does not see a provider key it recognizes and fallback is allowed. A bearer token on Anthropic Messages, or a BYOK alias other than `default` on the unified REST path, does not count. Zero data retention does not stop the gateway from storing the prompt (`cloudflare-ai-gateway`).

## Notes

- **Credential order.** A provider key on the request wins. Otherwise the gateway uses the stored key under the `default` alias. Otherwise, if fallback is allowed, Cloudflare-managed credentials pay from the credit balance. On `env.AI.run()` and `/ai/v1/chat/completions`, aliases other than `default` are ignored. `cf-aig-byok-alias` applies on provider-native URLs only.
- **Anthropic Messages.** The recognized header is `x-api-key`. `Authorization: Bearer` on `/anthropic/v1/messages` is not a provider credential, so the request can use a stored key or Unified Billing. Chat completions for Anthropic do use the bearer header.
- **How to refuse fallback.** Turn on Require provider credentials (`byok_only: true`), or send `cf-aig-no-wholesale: true` on one request. The header cannot turn the gateway setting off. Missing credentials then return HTTP **400** (error `2044` when no key applies). Workers AI does not use provider keys, and this setting does not block it or change the gateway's Workers AI billing mode.
- **Which bill.** A gateway created on the first request uses Standard billing for Workers AI: the Cloudflare account at the end of the cycle, not prepaid credits. Prepaid Workers AI requires the gateway's Workers AI billing set to Unified. A **429** with error `2018` is the Unified Billing limit (**200** requests per **60 seconds** per gateway). BYOK traffic is not under that cap, so `2018` means the call was on Cloudflare credentials. Credit purchases add a **5%** fee. The balance can go negative and is charged the next month.
- **Logs versus ZDR.** ZDR applies only to Unified Billing requests on Cloudflare-managed credentials, and only for models that support it. It does not apply to BYOK, and it does not disable AI Gateway logging. Turn logging off on its own. Accounts whose first gateway was created on or after **24 September 2026** store logs as Workers Logs. Older accounts use Legacy Logs, which keep entries until you delete them.

## Sources

- [Unified Billing](https://developers.cloudflare.com/ai-gateway/features/unified-billing/) — accessed 2026-11-18
- [Getting started](https://developers.cloudflare.com/ai-gateway/get-started/) — accessed 2026-11-18
- [Limits](https://developers.cloudflare.com/ai-gateway/reference/limits/) — accessed 2026-11-18
- [Pricing](https://developers.cloudflare.com/ai-gateway/reference/pricing/) — accessed 2026-11-18
