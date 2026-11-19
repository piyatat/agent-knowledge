---
id: deepseek-reasoning-and-peak
title: A DeepSeek tool loop drops reasoning, or the call bills peak and search tokens
kind: knowledge
tags: [deepseek, tools, billing, reasoning]
status: active
updated: 2026-11-19
when_to_use: A DeepSeek tool call returns 400, sampling settings do nothing, or the bill is twice the off-peak rate
---

## Summary

DeepSeek (`deepseek-api`) thinks by default. A later turn that includes `tools` must send back every earlier `reasoning_content`, or the API returns HTTP 400. The same call can also cost the peak rate, or bill web pages as tokens after the 2026-11-18 search-fee change.

## Notes

- **Tool loops keep the chain of thought.** In thinking mode the trace comes back as `reasoning_content` beside `content`. If the request includes `tools`, pass that field back on every later turn, including turns where the model did not call a tool. Dropping it is a 400. If the request has no `tools`, earlier `reasoning_content` is ignored and is not put back into the context, even when you send it.
- **Effort names are not the effort you get.** Default effort is `high`. `minimal` maps to `low`. `medium`, `high`, and `xhigh` map to `high`. `max` and `ultra` map to `max`. OpenAI chat uses `thinking.type` plus `reasoning_effort`. Anthropic uses `output_config.effort`. Responses uses `reasoning.effort`, and `none` turns thinking off.
- **Sampling is silently ignored.** In thinking mode, `temperature`, `presence_penalty`, and `frequency_penalty` do not error and do not apply. On Flash, `top_p` applies only while thinking, and anything under `0.95` is treated as `0.95`. In non-thinking mode Flash fixes `top_p` at `1.0`. On V4-Pro, `top_p` is ignored while thinking (fixed at `0.95` when tools are enabled, otherwise `1.0`) and applies only when thinking is off. `tool_choice: none` disables tools even if `tools` is present.
- **Peak hours double the token price.** Off-peak is half of peak. Peak is 01:00–04:00 and 06:00–10:00 UTC on weekdays that are not Chinese public holidays. Weekends and those holidays are off-peak all day. A scheduler that assumes “night is cheap” in US time can land inside the UTC peak window.
- **Old ids and search fees.** `deepseek-v4-flash` and `deepseek-v4-flash-vision-exp` still answer, on V4.1-Flash, at the Flash price. V4-Pro does not take images. From 12:00 Beijing time on 2026-11-18, server-side search and page fetch inside a model call are not a per-call fee. The returned pages are extra input tokens, including Anthropic and Responses `web_search`. The standalone Search and Fetch APIs stay $0.75 per 1,000 successful calls.
- **Wait handling.** A slow start sends empty lines, or `: keep-alive` on a stream. A parser that treats a blank line as the end of the body will drop the real JSON. The server closes the connection if inference has not started after 10 minutes. Concurrency is per account: another key on the same account shares the 2,500 (Flash) or 500 (V4-Pro) in-flight cap.

## Sources

- [Thinking mode](https://api-docs.deepseek.com/guides/thinking_mode) — accessed 2026-11-19
- [Models and pricing](https://api-docs.deepseek.com/quick_start/pricing) — accessed 2026-11-19
- [Rate limit and isolation](https://api-docs.deepseek.com/quick_start/rate_limit) — accessed 2026-11-19
- [Search and Fetch](https://api-docs.deepseek.com/guides/search) — accessed 2026-11-19
