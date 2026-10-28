---
id: openai-codex-model-providers
title: Codex model_provider — OpenAI, Bedrock, Vertex, OSS
tags: [openai, models, config, cli]
status: active
updated: 2026-10-28
when_to_use: Setting model_provider in Codex config.toml, or routing Codex through Bedrock, Vertex AI, Ollama, or LM Studio
---

## Summary

Codex CLI picks an inference backend with **`model_provider`** (default **`openai`**) plus optional `[model_providers.<id>]` tables in **user** `~/.codex/config.toml`. Built-ins include **OpenAI**, **Ollama**, **LM Studio**, **Amazon Bedrock**, and (Codex **0.165.0**, 2026-10-27) **Google Cloud Vertex AI** (`gcp`). Not Copilot Fusion (`github-copilot-hydrafusion`) and not a ChatGPT Work Cloud environment (`openai-codex-cloud-environments`). `wire_api` is **`responses` only**.

## Notes

- Set `model_provider = "<id>"` then `model = "<id>"`. Custom providers live under `[model_providers.<id>]` (`name`, `base_url`, `env_key`, `http_headers` / `env_http_headers`, `model_catalog_url`, retries/timeouts). `auth.command` may print a bearer token to stdout; do **not** combine it with `env_key`, `experimental_bearer_token`, or `requires_openai_auth`. `experimental_bearer_token` is discouraged. Reserved IDs in the published config reference: **`openai`**, **`ollama`**, **`lmstudio`** (cannot be overridden). Sample config also documents **`amazon-bedrock`**. Project `.codex/config.toml` **cannot** set `model_provider` / `model_providers` / `openai_base_url` — those stay in user config (`openai-codex-agents-md`).
- **OpenAI**: default. `openai_base_url` overrides the built-in endpoint. ChatGPT sign-in vs API key: `openai-codex-access-tokens`. `--oss` uses `oss_provider` (`ollama` | `lmstudio`) and needs that runtime running (`openai-codex-exec`).
- **Amazon Bedrock**: `model_provider = "amazon-bedrock"` plus `[model_providers.amazon-bedrock.aws]` `profile` / `region`. Pick a Bedrock model id (`openai.gpt-6.1-sol`, `openai.gpt-6.1-terra`, …). Separate from Claude apps gateway (`claude-code-gateway`).
- **Vertex AI (`gcp`)**: Codex **0.165.0** adds a built-in Google Cloud Vertex AI provider (`model_provider = "gcp"`). The published sample config still omits this id — use the 0.165.0 notes. Endpoint comes from `GOOGLE_CLOUD_PROJECT` + `GOOGLE_CLOUD_LOCATION` (default **`global`**). Default auth shells out to `gcloud auth application-default print-access-token`. `[model_providers.gcp]` may set `project_id` / `location` (win over env), or `base_url` / `auth` / `http_headers`. Static Vertex catalog; remote compaction **v2**. **Off** on this provider: reasoning summaries, Responses Lite, custom tools, web search, image generation. Needs ADC/`gcloud`; does not require OpenAI login.
- Managed **Local computer access** with Work Cloud requirements **rejects** `model_provider` / `model_providers` (custom gateways do not carry over). Treat provider output and local OSS weights as untrusted (`prompt-injection-agent-defense`).

## Sources

- [Configuration Reference (Codex)](https://developers.openai.com/codex/config-reference) — accessed 2026-10-28
- [Sample Configuration](https://learn.chatgpt.com/docs/config-file/config-sample.md) — accessed 2026-10-28
- [ChatGPT & Codex changelog](https://learn.chatgpt.com/docs/changelog) — accessed 2026-10-28
- [Codex 0.165.0](https://github.com/openai/codex/releases/tag/rust-v0.165.0) — accessed 2026-10-28
- [Add a built-in Google Cloud Vertex AI provider (#56265)](https://github.com/openai/codex/commit/3fd148a20c18cfc72beb7dedfa52951b1f9c4cb1) — accessed 2026-10-28
- [Allow configuring GCP project and location (#56560)](https://github.com/openai/codex/commit/970111f6cb62cc02fe36a82ea7d71b37a2889c97) — accessed 2026-10-28
