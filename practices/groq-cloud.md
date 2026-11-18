---
id: groq-cloud
title: GroqCloud — fast OpenAI-compatible inference
kind: service
tags: [groq, models, inference, tools]
status: active
updated: 2026-11-18
when_to_use: Calling a fast OpenAI-compatible inference API, including server-side tool use, from an agent
---

## Summary

**GroqCloud** serves open models behind an OpenAI-compatible API at `https://api.groq.com/openai/v1`. The current production text models on the free and developer tiers are `openai/gpt-oss-120b` and `openai/gpt-oss-20b`. The same API can run a tool loop locally, or run built-in tools and remote MCP tools on Groq's side in one call. It is the inference API, separate from a gateway you operate (`helicone`, `openrouter`) and from a model server you host (`vllm`, `ollama`).

## Notes

- **Access.** Create an account in the Groq console linked from `links`, then create an API key. Requests send that key as a bearer token. The overview shows both Chat Completions and the Responses shape. List live model ids with `GET /openai/v1/models` rather than copying an old sample.
- **Auth and plans.** One organization shares rate limits and spend across its keys. The free tier has the lower limits. Developer is pay-as-you-go after a payment method is added: higher limits, chat support, Batch, Flex, and spend limits. Upgrading does not charge immediately. New developer accounts invoice at **$1**, **$10**, **$100**, **$500**, and **$1,000** cumulative spend, then monthly; India billing addresses stop at **$1**, **$10**, and then every **$100**. Downgrading needs the final invoice paid. Spend limits are owner-only, organization-wide, and lag **10–15 minutes**; over the cap the API returns **400** `blocked_api_access`.
- **Prices and limits (models page, 2026-11-18, developer column).** `openai/gpt-oss-120b`: **$0.15 / $0.60** per million input/output tokens, **250K** TPM, **1K** RPM, **131,072** context, **65,536** max completion. `openai/gpt-oss-20b`: **$0.075 / $0.30**, same context and the same **250K / 1K** limits, about **1000** tokens/second. Cached tokens do not count toward rate limits. Some orgs also have separate input and output token caps. The rate-limits page prints a much lower table and still calls it the developer base; use the Limits page in the account (`groq-retired-model-ids`). Flex, paid only, is **10×** the on-demand limits at the same price and fails with **498** `capacity_exceeded` when flex capacity is gone.
- **Tools.** `openai/gpt-oss-20b` and `openai/gpt-oss-120b` support local tools, JSON mode, and built-in browser search and code execution. They do not support parallel tool calls. Remote MCP is a server URL plus auth headers sent to Groq; Groq discovers and runs the tools. `qwen/qwen3.8-27b` is the preview model that does support parallel tool calls.
- **Alternatives.** Together (`together-ai`) when you need a wider open-model catalog, including vision and speech, on a prepaid balance. OpenRouter or Helicone when the agent must fail over across vendors. vLLM or Ollama when the weights must stay on a host you control.
- **Caveats.** Preview models can be removed with little notice. Several ids in the official quickstart and in older deprecation rows already fail on free and developer accounts. Built-in tools and remote MCP send tool traffic, including MCP credentials, to Groq. Enterprise Llama ids remain on the models page as contact-sales.

## Sources

- [GroqCloud overview](https://console.groq.com/docs/overview) — accessed 2026-11-18
- [Supported models](https://console.groq.com/docs/models) — accessed 2026-11-18
- [Quickstart](https://console.groq.com/docs/quickstart) — accessed 2026-11-18
- [Tool use](https://console.groq.com/docs/tool-use) — accessed 2026-11-18
- [Billing FAQs](https://console.groq.com/docs/billing-faqs) — accessed 2026-11-18
- [Spend limits](https://console.groq.com/docs/spend-limits) — accessed 2026-11-18
- [Flex processing](https://console.groq.com/docs/flex-processing) — accessed 2026-11-18
