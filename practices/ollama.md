---
id: ollama
title: Ollama — local model server and cloud API
kind: tool
tags: [ollama, models, cli, local]
status: active
updated: 2026-11-16
when_to_use: Running a local model server for Codex --oss, Copilot BYOK, or an agent SDK, or calling Ollama cloud without a local install
---

## Summary

**Ollama** serves open models on your machine and can also call **Ollama cloud** models. The local server defaults to `http://127.0.0.1:11434` with **no authentication**. The same process speaks the Ollama API (`/api`), an OpenAI-compatible API (`/v1`), and an Anthropic-compatible `/v1/messages` base. It is the runtime behind Codex `--oss` (`openai-codex-exec`, `openai-codex-model-providers`), not a coding agent and not OpenRouter (`openrouter`).

## Notes

- **Install.** macOS and Windows apps update themselves (menubar or taskbar → Restart to update). Linux upgrades re-run the documented install script (`curl -fsSL https://ollama.com/install.sh | sh`). The Docker image is `ollama/ollama`. GPU passthrough in Docker works on Linux and Windows WSL2 with the NVIDIA container toolkit; Docker Desktop on macOS has no GPU passthrough.
- **Auth.** The local API does not require a key. Cloud inference at `https://ollama.com/api` and `https://ollama.com/v1` requires `Authorization: Bearer` with `OLLAMA_API_KEY` (keys do not expire; revoke them in settings). `x-api-key` alone is not accepted on the hosted Anthropic-compatible endpoint. `ollama signin` lets the local server run cloud model names (the docs use `gpt-oss:120b-cloud`) without putting the key on each request. Creating or deleting models still needs a local server.
- **Bind and cloud off-switch.** Default bind is **127.0.0.1:11434**. `OLLAMA_HOST=0.0.0.0:11434` (set via `launchctl` on the macOS app, a systemd drop-in on Linux, or the user environment on Windows, then restart) exposes an unauthenticated model API. `OLLAMA_ORIGINS` adds browser origins; the server already allows `127.0.0.1` and `0.0.0.0`. Set `OLLAMA_NO_CLOUD=1` or `"disable_ollama_cloud": true` in `~/.ollama/server.json` to drop cloud models and web search. Logs should then show `Ollama cloud disabled: true`.
- **Context and queue.** The default context is **4096** tokens (`OLLAMA_CONTEXT_LENGTH`, `/set parameter num_ctx`, or API `options.num_ctx`). A coding-agent transcript that assumes a large window will be truncated here. Models stay loaded **5 minutes** (`OLLAMA_KEEP_ALIVE`, or per-request `keep_alive`; `0` unloads, negative keeps). A full queue returns **503**; `OLLAMA_MAX_QUEUE` defaults to **512**. Parallel requests multiply context memory (`OLLAMA_NUM_PARALLEL`, default 1).
- **Privacy and proxies.** The FAQ says local prompts and answers are not sent to ollama.com. Cloud models are processed to serve the request and are not stored, logged, or used for training. Pulls use HTTPS: set `HTTPS_PROXY`, not `HTTP_PROXY` (the FAQ says `HTTP_PROXY` can interrupt client connections to the server). Model files live under `~/.ollama/models` (macOS), `/usr/share/ollama/.ollama/models` (Linux), or `%USERPROFILE%\.ollama\models` (Windows); move them with `OLLAMA_MODELS`.
- **Alternatives.** LM Studio when Codex `oss_provider` should be `lmstudio`. A host provider key (OpenAI, Anthropic, Google) when you do not want weights on disk. OpenRouter (`openrouter`) when one key should fan out across many hosted providers.
- **Caveats.** Do not publish port 11434. Do not put `OLLAMA_API_KEY` in a repo. A 4096 default context will silently drop earlier agent turns. Cloud model names still need a sign-in or API key even when the request hits localhost.

## Sources

- [Ollama local FAQ](https://docs.ollama.com/faq) — accessed 2026-11-16
- [Ollama authentication](https://docs.ollama.com/api/authentication) — accessed 2026-11-16
- [Ollama API introduction](https://docs.ollama.com/api/introduction) — accessed 2026-11-16
