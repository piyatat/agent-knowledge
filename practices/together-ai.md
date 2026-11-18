---
id: together-ai
title: Together AI — OpenAI-compatible inference for open models
kind: service
tags: [together, models, inference, tools]
status: active
updated: 2026-11-18
when_to_use: Calling open models from an agent through an OpenAI-compatible API, including tools and a US-only endpoint
---

## Summary

**Together AI** hosts open models behind `https://api.together.ai/v1`. Chat completions, tools, vision, images, speech, and the Responses API are on that base URL. Assistants, threads, and runs are not. You run the tool loop. **Together Link** (`together-link`) is the separate launcher for Claude Code, Codex, OpenCode, and Pi. Dedicated GPU endpoints and clusters share the same account and the same prepaid balance (`together-prepaid-and-compat`).

## Notes

- **Access.** Sign in at the console linked from `links` with Google or GitHub, and keep using that same provider. The account docs say LinkedIn sign-in was removed; that email can sign in with Google or GitHub instead. There is no free trial. Until the organization buys at least **$15** of credits, the playground, API keys, and teammate invites stay closed. Free credits on the balance do not count toward that minimum. A new key is shown once. The Python and TypeScript SDKs read `TOGETHER_API_KEY`. The Together CLI uses its own login, not that variable.
- **Auth.** Keys are scoped to a project. A key still works after the member who created it is removed. Admins and members can create and revoke keys. There is no per-key spend cap or rate limit; both apply to the organization. Keys created before multi-project support sit on the organization's default project.
- **Prices (pricing page and credits docs, 2026-11-18).** Prepaid credits, unless a Scale or Enterprise contract says otherwise. Credits do not expire. Later purchases are a **$5** minimum. Serverless is priced per million tokens; the page lists MiniMax M3.1 Flash at **$0.15** input, **$0.015** cached, **$0.60** output, gpt-oss-120B at **$0.15 / $0.60**, and GLM-5.3 at **$1.40 / $0.26** cached / **$4.40**. Dedicated inference is per GPU-hour (H100 on-demand **$5.49**). The US endpoint is **1.25×** serverless rates and only the models listed on the geo page. A zero balance suspends the API.
- **Tools.** Pass `tools` on chat completions. The model returns `tool_calls`; your process runs them and appends the results. Which models accept tools is the serverless and dedicated catalogs, not every id. Image, speech, and Responses calls use the matching OpenAI SDK methods. Embeddings on `/v1/embeddings` are dedicated endpoints only.
- **Alternatives.** Groq or Cerebras when you want one fast shared model and a smaller catalog. OpenRouter when the agent must fail over across vendors. Fireworks Nexus (`fireworks-nexus`) or Together Link when the caller is an existing coding harness. vLLM when the weights must stay on a host you control.
- **Caveats.** Flat OpenAI ids such as `gpt-4o` return **404**. Model ids are namespaced (`MiniMaxAI/MiniMax-M3.1-Flash`). See `together-prepaid-and-compat` for redirects, the US **404**, and the missing spend caps.

## Sources

- [Quickstart](https://docs.together.ai/docs/quickstart) — accessed 2026-11-18
- [OpenAI compatibility](https://docs.together.ai/docs/inference/openai-compatibility) — accessed 2026-11-18
- [Authentication](https://docs.together.ai/docs/api-keys-authentication) — accessed 2026-11-18
- [Manage your account](https://docs.together.ai/docs/account-management) — accessed 2026-11-18
- [Credits](https://docs.together.ai/docs/billing-credits) — accessed 2026-11-18
- [Pricing](https://www.together.ai/pricing) — accessed 2026-11-18
- [Function calling](https://docs.together.ai/docs/inference/function-calling) — accessed 2026-11-18
