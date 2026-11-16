---
id: litellm-proxy
title: LiteLLM proxy — self-hosted model gateway
kind: tool
tags: [litellm, gateway, models, mcp]
status: active
updated: 2026-11-16
when_to_use: Running your own OpenAI-compatible model gateway with budgets and virtual keys instead of calling OpenRouter
---

## Summary

The **LiteLLM proxy** (`litellm`) is a gateway you run. One OpenAI-compatible base URL (default `http://0.0.0.0:4000`) fronts many providers, with optional virtual keys, spend limits, and an MCP front door. It is not hosted OpenRouter (`openrouter`) and not the AAIF policy proxy (`agentgateway-aaif`).

## Notes

- **Install.** `uv tool install 'litellm[proxy]'`, then `litellm --model <provider/model>` or `litellm --config config.yaml`. **LiteLLM 1.84.0+** requires **Python 3.10+**. `uv tool install` provisions that interpreter. A bare `pip install` on an older Python does not error: it resolves the last release that still allowed that interpreter (the docs name **1.83.9** for the previous floor). Point the OpenAI SDK `base_url` at the proxy. The docs say calling `litellm.completion` against your own proxy duplicates logic and is not the recommended client.
- **Auth and budgets.** A process started with only `--model` has **no database**, so no virtual keys, spend tracking, or Admin UI. Those need `general_settings.database_url` (Postgres) and a **master key** that starts with `sk-` (`general_settings.master_key` or `LITELLM_MASTER_KEY`). Generate caller keys with `POST /key/generate` using the master key. Give every caller a virtual key and a budget; the master key is the admin credential.
- **MCP.** Register servers in config or the Admin UI, then grant them on a key or team via `object_permission` (`mcp_servers`, access groups, toolsets, or per-server tool allowlists). Clients speak Streamable HTTP at `/mcp` (all granted servers) or `/{server_name}/mcp` (one server). Send the virtual key in **`x-litellm-api-key`**. `Authorization: Bearer` also authenticates the gateway, but a server that forwards `Authorization` upstream can receive the LiteLLM key. Selecting a server with a header or URL only narrows access the key already has.
- **Alternatives.** OpenRouter when you want a hosted router and one vendor key. Ollama (`ollama`) when weights stay on the machine and you do not need a multi-tenant key store. The LiteLLM **SDK** (`import litellm`) when one process calls providers and you do not want a shared proxy.
- **Caveats.** Pip on Python 3.9 silently installs an old proxy. A proxy with no database has no per-caller budget. An MCP client that puts the virtual key in `Authorization` can leak it to the upstream server. Provider API keys in `config.yaml` are secrets; do not commit them.

## Sources

- [LiteLLM proxy CLI quick start](https://docs.litellm.ai/docs/proxy/quick_start) — accessed 2026-11-16
- [Virtual keys](https://docs.litellm.ai/docs/proxy/virtual_keys) — accessed 2026-11-16
- [Grant MCP access](https://docs.litellm.ai/docs/mcp_grant_access) — accessed 2026-11-16
- [MCP configuration reference](https://docs.litellm.ai/docs/mcp_config_reference) — accessed 2026-11-16
