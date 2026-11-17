---
id: vllm-api-key-gaps
title: vLLM's API key leaves inference and control routes open
tags: [vllm, auth, security, serving]
kind: knowledge
status: active
updated: 2026-11-17
when_to_use: A vLLM server has an API key set and is still callable without that key
---

## Summary

`--api-key` and `VLLM_API_KEY` authenticate only `/v1`, `/v2`, `/inference`, and `/cohere`. The same HTTP server still serves inference and operational routes with no token. A reachable port plus an API key is not a private model.

## Notes

- **Same inference, no token.** `/invocations` runs the same inference functions as the `/v1` routes. `/generative_scoring`, `/pooling`, `/classify`, `/score`, and `/rerank` (the non-`/v1` paths) are also open. The security guide says an API key alone is not enough.
- **Control plane.** When the server supports generation, `/pause`, `/resume`, `/abort_requests`, `/scale_elastic_ep`, and `/update_weights` do not require the key. Pause and abort stop in-flight work. Weight updates change the model. `/metrics` is open and includes throughput, queue, and KV-cache stats.
- **Flags that add more.** `--enable-tokenizer-info-endpoint` exposes `/tokenizer_info` (chat templates and tokenizer config). `VLLM_SERVER_DEV_MODE=1` adds `/collective_rpc`, cache resets, and `/sleep`. Profiling flags add `/start_profile` and `/stop_profile`. Leave those off on any shared host.
- **What to put in front.** Put a reverse proxy in front that allowlists the routes clients need, blocks the rest, and does its own auth and rate limit. Firewall PyTorch distributed and KV-transfer ports so only the API port is reachable (`vllm`).
- **Separate from the key.** `n` on chat and completions defaults to a cap of **16384** sequences (`VLLM_MAX_N_SEQUENCES`). A public server should set a much smaller cap. Multimodal URLs can reach internal addresses until `--allowed-media-domains` is set.

## Sources

- [vLLM security](https://docs.vllm.ai/en/stable/usage/security/) — accessed 2026-11-17
- [OpenAI-compatible server](https://docs.vllm.ai/en/stable/serving/online_serving/openai_compatible_server/) — accessed 2026-11-17
