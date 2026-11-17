---
id: vllm
title: vLLM — OpenAI-compatible model server
kind: tool
tags: [vllm, models, serving, openai]
status: active
updated: 2026-11-17
when_to_use: Serving an open model with an OpenAI-compatible API for agents on a GPU host you control
---

## Summary

**vLLM** serves open models behind an HTTP API that speaks OpenAI-style chat, completions, responses, embeddings, and audio routes. The quickstart targets Linux and Python **3.11–3.14**. macOS uses **vLLM-Metal** on Apple Silicon. The default server is `http://localhost:8000` and hosts **one model at a time**.

## Notes

- **Access.** Install from the GPU guide linked in `links` (NVIDIA, AMD ROCm, Intel, TPU, and others are separate paths). The server command is `vllm serve <model>`. The official CUDA image is `vllm/vllm-openai` on Docker Hub. Point an OpenAI SDK `base_url` at `http://localhost:8000/v1`. The server applies `generation_config.json` from the model repo unless you pass `--generation-config vllm`.
- **Auth.** `--api-key` or `VLLM_API_KEY` checks a bearer token, and you can pass more than one key. That check covers only `/v1`, `/v2`, `/inference`, and `/cohere`. Other routes on the same port, including `/invocations`, stay open (`vllm-api-key-gaps`).
- **Network.** Multi-node traffic (PyTorch distributed, KV transfer, tensor and pipeline parallel) is unauthenticated and unencrypted. Keep those ports on an isolated network and firewall everything except the API port you mean to publish. `--allowed-media-domains` limits which hosts multimodal URLs may fetch. `VLLM_MEDIA_URL_ALLOW_REDIRECTS=0` stops a redirect from leaving that list. Download and decode size caps exist; setting one to `0` removes it.
- **Tools.** No tool server is on unless you pass `--tool-server`. `--tool-server demo` wires the separate `gpt-oss` package (a Docker Python tool, and a browser that needs `EXA_API_KEY`). Per-request multimodal processor overrides are rejected unless you set `--trust-request-mm-kwargs`.
- **Alternatives.** Ollama (`ollama`) when you want a local app and a smaller install on a laptop. OpenRouter (`openrouter`) or Portkey (`portkey`) when someone else should host the GPUs. LiteLLM (`litellm-proxy`) when one process should fan out to many providers, including a vLLM base URL.
- **Caveats.** Do not publish port 8000 with only `--api-key`. Leave `VLLM_SERVER_DEV_MODE` unset. A 4096-style context on the model, not on vLLM's HTTP layer, still truncates long agent transcripts. Weights and the Hugging Face cache are local files; a gated model needs `HF_TOKEN` on the server.

## Sources

- [vLLM quickstart](https://docs.vllm.ai/en/stable/getting_started/quickstart/) — accessed 2026-11-17
- [Installation](https://docs.vllm.ai/en/stable/getting_started/installation/) — accessed 2026-11-17
- [OpenAI-compatible server](https://docs.vllm.ai/en/stable/serving/online_serving/openai_compatible_server/) — accessed 2026-11-17
- [Security](https://docs.vllm.ai/en/stable/usage/security/) — accessed 2026-11-17
- [Using Docker](https://docs.vllm.ai/en/stable/deployment/docker/) — accessed 2026-11-17
