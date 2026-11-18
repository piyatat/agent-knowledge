---
id: cerebras-retired-model-ids
title: Cerebras replacement ids were removed, and reasoning_effort none does not stop GPT OSS
kind: knowledge
tags: [cerebras, models, deprecation, reasoning]
status: active
updated: 2026-11-18
when_to_use: A Cerebras model id from an old guide 404s, or reasoning_effort none still returns thinking tokens
---

## Summary

Cerebras shared inference on **2026-11-18** serves `gpt-oss-120b` and `qwen-3.8-27b`. Older deprecation rows name replacements that were later removed. `reasoning_effort: "none"` does not turn reasoning off on GPT OSS, and `reasoning_format: "none"` does not turn it off on any model (`cerebras-inference`).

## Notes

- **The shared catalog is two ids.** The model catalog page lists only those two for Free Trial and Pay as You Go. Other families in the reasoning guide (Kimi, GLM 5.3 Flash, Gemma 4 31B) are Dedicated Inference: send the endpoint id your org was assigned, not the shared catalog id.
- **Replacement rows point at models that later left.** The **2026-02-16** row tells you to move `qwen-3-32b` and `llama-3.3-70b` to GPT OSS, and several 2025 rows also name `llama-3.3-70b`. That id is the one deprecated on **2026-02-16**. The **2026-01-20** row sends `zai-glm-4.6` to Z.ai GLM 4.7; `zai-glm-4.7` was deprecated on **2026-08-17**. The **2026-09-03** row removes `gemma-4-31b` from shared inference and names `qwen-3.8-27b`; Gemma remains on Dedicated only. The page itself says older migration advice reflects availability on the announcement date.
- **`none` is not one switch.** On `gpt-oss-120b`, `reasoning_effort` accepts `low`, `medium` (default), and `high`. `none` is not supported, so the model always emits reasoning tokens and they count as completion tokens. Setting `reasoning_format` to `none` selects the model’s default format; it does not disable reasoning. To disable reasoning, the model must support `reasoning_effort: "none"`. Qwen 3.8 27B does. GPT OSS does not.
- **Qwen parameters that now fail.** Do not send `disable_reasoning`, `enable_thinking`, `preserve_thinking`, or `thinking_budget`. Use `reasoning_effort` and `clear_thinking`. Qwen’s `high` effort is its native `xhigh` mode, and `high` is the default, so a request that omits effort spends reasoning tokens. `hidden` is not supported on Qwen. `clear_thinking: true` drops historical assistant reasoning and keeps the final answer; omitting it preserves the reasoning you replayed. Chat Completions is stateless, so you resend that history yourself.
- **Dedicated models ignore or reject the same fields.** Kimi K2.7 Code accepts `reasoning_effort` and ignores the value, including `none`. Kimi K3 and GLM 5.3 Flash reject `none`. Kimi K3 and Kimi K3.1 Pro accept only `parsed` reasoning format. Do not send `clear_thinking` to the Kimi ids.
- **Tool calls you did not declare.** The GPT OSS model page says the model may call tools that are not in the request, and that a follow-up saying it is hallucinating a tool call can make it correct itself. Treat an unexpected tool name as a model behavior, not as proof that a tool exists (`tool-call-failures`).

## Sources

- [Model catalog](https://inference-docs.cerebras.ai/models/overview) — accessed 2026-11-18
- [Deprecations](https://inference-docs.cerebras.ai/support/deprecation) — accessed 2026-11-18
- [Reasoning](https://inference-docs.cerebras.ai/capabilities/reasoning) — accessed 2026-11-18
- [OpenAI GPT OSS](https://inference-docs.cerebras.ai/models/openai-oss) — accessed 2026-11-18
- [Qwen 3.8 27B](https://inference-docs.cerebras.ai/models/qwen-3.8-27b) — accessed 2026-11-18
