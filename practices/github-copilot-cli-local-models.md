---
id: github-copilot-cli-local-models
title: Copilot CLI local models — Ollama discovery vs BYOK
tags: [github, cli, models, privacy]
status: active
updated: 2026-10-07
when_to_use: Discovering a running Ollama model in Copilot CLI /model, or configuring BYOK / COPILOT_OFFLINE
---

## Summary

Copilot CLI **1.0.94-0** (2026-10-07) can **discover** models from a running **Ollama** instance in `/model`, next to GitHub-hosted models. Discovery does **not** install a runtime or pull weights. BYOK still uses `COPILOT_PROVIDER_*` env vars (OpenAI-compatible, Azure, Anthropic). Choosing a local model does **not** enable offline mode — that is `COPILOT_OFFLINE=true`. Not Copilot Auto tiers (`github-copilot-auto-model`) and not VS Code Foundry Local.

## Notes

- `/model` lists discovered Ollama models plus configured and GitHub-hosted ones. Pick a model, review provider/endpoint, then **Add and use for this session** or **Add without switching**. The session can use it without restart. Connection failures show in the picker. Models must support **tool calling and streaming** (≥128k context recommended). Sub-agents (`/review`, `/task`, explore, `/fleet`) inherit the provider; `/delegate` still needs GitHub sign-in and sends the session to GitHub-hosted Copilot, not your local endpoint.
- Env BYOK (required when not using discovery): `COPILOT_PROVIDER_BASE_URL`, `COPILOT_MODEL` (or `--model`). Optional: `COPILOT_PROVIDER_TYPE` (`openai` default — Ollama, vLLM, Foundry Local; `azure`; `anthropic`), `COPILOT_PROVIDER_API_KEY` (omit for unauthenticated Ollama), `COPILOT_PROVIDER_BEARER_TOKEN`, Azure `COPILOT_PROVIDER_AZURE_API_VERSION` / `COPILOT_PROVIDER_WIRE_MODEL` (deployment name). Ollama example: `COPILOT_PROVIDER_BASE_URL=http://localhost:11434` and `COPILOT_MODEL=<pulled-name>`. `copilot help providers` has more examples.
- **Offline**: `COPILOT_OFFLINE=true` skips GitHub auth and GitHub telemetry. Isolation holds only if the provider is also local. A remote `COPILOT_PROVIDER_BASE_URL` still receives prompts and code. Without offline, BYOK still sends telemetry. GitHub auth is not required for BYOK inference; it is required for GitHub-hosted features.
- Copilot **app**: Settings → **Model providers** is the same idea (add a supported provider). GitHub announced intelligent routing with local models separately; treat availability as TBD. Cost estimates hide on BYOK; token counts still show.

## Sources

- [Discover local models in GitHub Copilot CLI](https://github.blog/changelog/2026-10-07-discover-local-models-in-github-copilot-cli/) — accessed 2026-10-07
- [Adding LLM models to GitHub Copilot CLI](https://docs.github.com/en/copilot/how-tos/copilot-cli/customize-copilot/use-byok-models) — accessed 2026-10-07
- [About GitHub Copilot CLI](https://docs.github.com/en/copilot/concepts/agents/copilot-cli/about-copilot-cli) — accessed 2026-10-07
- [Authenticating GitHub Copilot CLI](https://docs.github.com/en/copilot/how-tos/copilot-cli/set-up-copilot-cli/authenticate-copilot-cli) — accessed 2026-10-07
