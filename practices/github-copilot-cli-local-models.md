---
id: github-copilot-cli-local-models
title: Copilot CLI local models — Ollama discovery vs BYOK
tags: [github, cli, models, privacy]
status: active
updated: 2026-10-28
when_to_use: Discovering a running Ollama model in Copilot CLI /model, configuring BYOK / COPILOT_OFFLINE, or enabling Fusion local routing
---

## Summary

Copilot CLI **1.0.94-0** (2026-10-07) can **discover** models from a running **Ollama** instance in `/model`, next to GitHub-hosted models. Discovery does **not** install a runtime or pull weights. BYOK still uses `COPILOT_PROVIDER_*` env vars (OpenAI-compatible, Azure, Anthropic). Choosing a local model does **not** enable offline mode — that is `COPILOT_OFFLINE=true`. **Copilot Fusion** can route **Standard** effort to a supported on-device model (experimental, 2026-10-28) (`github-copilot-hydrafusion`). Not Copilot Auto tiers by themselves (`github-copilot-auto-model`).

## Notes

- `/model` lists discovered Ollama models plus configured and GitHub-hosted ones. Pick a model, review provider/endpoint, then **Add and use for this session** or **Add without switching**. The session can use it without restart. Connection failures show in the picker. Models must support **tool calling and streaming** (≥128k context recommended). Sub-agents (`/review`, `/task`, explore, `/fleet`) inherit the provider; `/delegate` still needs GitHub sign-in and sends the session to GitHub-hosted Copilot, not your local endpoint.
- Env BYOK (required when not using discovery): `COPILOT_PROVIDER_BASE_URL`, `COPILOT_MODEL` (or `--model`). Optional: `COPILOT_PROVIDER_TYPE` (`openai` default — Ollama, vLLM, Foundry Local; `azure`; `anthropic`), `COPILOT_PROVIDER_API_KEY` (omit for unauthenticated Ollama), `COPILOT_PROVIDER_BEARER_TOKEN`, Azure `COPILOT_PROVIDER_AZURE_API_VERSION` / `COPILOT_PROVIDER_WIRE_MODEL` (deployment name). Ollama example: `COPILOT_PROVIDER_BASE_URL=http://localhost:11434` and `COPILOT_MODEL=<pulled-name>`. `copilot help providers` has more examples.
- **Offline**: `COPILOT_OFFLINE=true` skips GitHub auth and GitHub telemetry. Isolation holds only if the provider is also local. A remote `COPILOT_PROVIDER_BASE_URL` still receives prompts and code. Without offline, BYOK still sends telemetry. GitHub auth is not required for BYOK inference; it is required for GitHub-hosted features.
- Copilot **app**: Settings → **Model providers** is the same idea (add a supported provider). Cost estimates hide on BYOK; token counts still show.
- **Fusion local routing** (experimental preview, 2026-10-28): Fusion **Standard** may pick a supported on-device model vs cloud. Enable `/experimental on` (CLI) or Copilot-app **Local model auto routing**. **Windows ML** can download **MAI Code 1.1 Flash** (CLI `/model` prompts; app Settings → Model providers; VS Code `chat.copilot.localModel.enabled`). CLI on Windows/macOS/Linux can also route a **manually** configured MAI Code 1.1 Flash or **Qwen3.8 Flash Next** (must appear as `qwen3.8-flash-next-local`). **BYOK discovery does not** make a model Fusion-eligible. App intelligent routing currently supports **managed Windows ML** only (BYOK still selectable directly). Fusion **still decides in the cloud** — local inference is not `COPILOT_OFFLINE`. Local models may lack Copilot cloud safety filters (`vscode-on-device-models`).

## Sources

- [Discover local models in GitHub Copilot CLI](https://github.blog/changelog/2026-10-07-discover-local-models-in-github-copilot-cli/) — accessed 2026-10-07
- [Adding LLM models to GitHub Copilot CLI](https://docs.github.com/en/copilot/how-tos/copilot-cli/customize-copilot/use-byok-models) — accessed 2026-10-07
- [About GitHub Copilot CLI](https://docs.github.com/en/copilot/concepts/agents/copilot-cli/about-copilot-cli) — accessed 2026-10-07
- [Authenticating GitHub Copilot CLI](https://docs.github.com/en/copilot/how-tos/copilot-cli/set-up-copilot-cli/authenticate-copilot-cli) — accessed 2026-10-07
- [GitHub Copilot Fusion now supports selection of local models](https://github.blog/changelog/2026-10-28-github-copilot-fusion-now-supports-selection-of-local-models/) — accessed 2026-10-28
- [About GitHub Copilot Fusion](https://docs.github.com/en/copilot/concepts/models/copilot-fusion) — accessed 2026-10-28
