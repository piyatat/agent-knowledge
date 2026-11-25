---
id: huggingface-inference-providers
title: Hugging Face Inference Providers — one token for many model hosts
kind: service
tags: [huggingface, routing, models, inference]
status: active
updated: 2026-11-25
when_to_use: Calling open models from an agent through one Hugging Face token, with failover across hosts
---

## Summary

**Hugging Face Inference Providers** routes chat, embeddings, and other open models through one token. Hugging Face says routing is powered by OpenRouter: a request goes to a provider that serves the model and moves to another if that provider is down or rate limited. The OpenAI-compatible base URL is `https://router.huggingface.co/v1`. Provider rates pass through with no Hugging Face markup. Dedicated GPUs you rent are Inference Endpoints. A server you run is `vllm`.

## Notes

- **Access.** Create an account at `links.get`. The Inference Providers docs are the integration pointer for the Hub clients and for an OpenAI-compatible client. `hf models ls --warm` lists models that at least one provider is serving.
- **Auth.** Send a Hugging Face token as a bearer key. The docs say to create a **fine-grained** token with the **Make calls to Inference Providers** permission. Team and Enterprise charges need the header `X-HF-Bill-To` set to the organization name, or to a resource-group id when the token’s user belongs to that group. Hub clients take the same value as `bill_to` or `billTo`.
- **Price.** Free accounts have **no** included credits and buy credits or upgrade before pay-as-you-go works. PRO includes **$2** a month. Team and Enterprise include **$2 per seat**, shared by members. Those credits also pay for Inference Endpoints, Spaces hardware (including ZeroGPU past quota), and Jobs, and they apply before pay-as-you-go. Organization admins can set a spend limit and disable providers. A provider the organization disables returns an error even when the user still has it enabled.
- **Routing.** The default policy balances price, speed, and reliability. Append `:fastest`, `:cheapest`, or a provider name to the model id (`org/model:novita`). The `hf-inference` provider is the old serverless Inference API. As of July 2025 the docs say it focuses on CPU work: embeddings, ranking, classification, and small historical models. Its bill is hardware price times compute time, after included credits.
- **Alternatives.** OpenRouter (`openrouter`), Together (`together-ai`), Groq (`groq-cloud`), Cerebras (`cerebras-inference`), or Fireworks (`fireworks-nexus`) when you want that vendor’s own key. fal (`fal`) when the job is generated image, video, or audio. vLLM (`vllm`) when the GPU is yours.
- **Caveats.** A personal call that omits `X-HF-Bill-To` does not draw the organization’s included credits. Details: `huggingface-inference-bill-to`.

## Sources

- [Join Hugging Face](https://huggingface.co/join) — accessed 2026-11-20
- [Hugging Face](https://huggingface.co/) — accessed 2026-11-20
- [Inference Providers](https://huggingface.co/docs/inference-providers/index) — accessed 2026-11-20
- [Pricing and billing](https://huggingface.co/docs/inference-providers/pricing) — accessed 2026-11-20
