---
id: openrouter
title: OpenRouter — one API across model providers
kind: service
tags: [openrouter, routing, models, api]
status: active
updated: 2026-11-16
when_to_use: Routing an agent through many model providers with one OpenAI-compatible key, or failing over when a provider errors
---

## Summary

**OpenRouter** is a hosted inference API. One key calls many providers through an OpenAI-compatible base URL, `https://openrouter.ai/api/v1`. You pick a `provider/model` id, optional provider routing, and optional model fallbacks. It is not Codex `model_provider` (`openai-codex-model-providers`) and not Copilot Fusion (`github-copilot-hydrafusion`).

## Notes

- **Auth.** Send `Authorization: Bearer` with one credential. An API key looks like `sk-or-v1-` plus 64 hex characters (73 characters total), created on the API keys page or via OAuth PKCE. Anthropic SDK clients may send that **API key** in `x-api-key`; an access token does not go there. OpenRouter access tokens are short-lived JWTs (at most 15 minutes) from workload identity federation (`iss` `https://openrouter.ai`) or from OpenRouter sign-in (`iss` `https://clerk.openrouter.ai`, `inference` scope). Other issuers are rejected. Some endpoints accept only an API key.
- **Calling.** Point the OpenAI SDK `base_url` at `https://openrouter.ai/api/v1` and pass the OpenRouter key explicitly (`OPENROUTER_API_KEY`). If you omit the key, those SDKs fall back to `OPENAI_API_KEY` or `ANTHROPIC_API_KEY` and OpenRouter returns 401 `Invalid API key: this is not an OpenRouter API key`. Omitting `model` uses the user or payer default. Optional `HTTP-Referer` and `X-OpenRouter-Title` attribute the app on rankings. There is also `@openrouter/sdk`.
- **Limits and spend.** Set a credit limit on every key. A key with no limit can spend the whole balance, including auto top-ups. Once a limit is hit, requests fail until you raise it or a daily, weekly, or monthly limit resets. Keys created during onboarding get a **$100** credit limit and expire after **180 days**. Keys can also expire on a date you set (`API key expired`). OpenRouter is a GitHub secret-scanning partner; a detected leak emails you — delete the key and create another. Do not put keys in client-side code.
- **Routing.** By default each request is spread across providers using measured price, throughput, time to first token, 429s, reliability, and tool-call quality, not list price alone. Override with a `provider` object: `order`, `only`, `ignore`, `allow_fallbacks` (default true), `require_parameters`, `data_collection` (`allow` or `deny`), `zdr`, `sort`, `max_price`. A `models` array fails over to the next model. You are billed for the model that actually ran, including when a `:free` model falls through to a paid one. Catalog `region=eu|us` only filters the list; inference can still leave the region unless you call `https://eu.openrouter.ai` or `https://us.openrouter.ai` and enforce a guardrail. BYOK traffic goes to wherever that deployment runs.
- **Alternatives.** Call the provider SDK directly when you do not want a router in the path. Ollama (`ollama`) when the weights should stay on the machine. Codex built-in Bedrock or Vertex providers when the coding agent is Codex and the config must live in `config.toml`.
- **Caveats.** A leaked unlimited key spends the account. A fallback list that ends on a paid model is not a free request. A catalog region filter does not pin the endpoint. `pricing.prompt` of `-1` on router models (`openrouter/auto` and similar) is a sentinel, not a dollar price.

## Sources

- [OpenRouter authentication](https://openrouter.ai/docs/api_reference/authentication) — accessed 2026-11-16
- [OpenRouter API overview](https://openrouter.ai/docs/api_reference/overview) — accessed 2026-11-16
- [Provider routing](https://openrouter.ai/docs/guides/routing/provider-selection) — accessed 2026-11-16
- [Model fallbacks](https://openrouter.ai/docs/guides/routing/model-fallbacks) — accessed 2026-11-16
- [Models API](https://openrouter.ai/docs/api_reference/models) — accessed 2026-11-16
