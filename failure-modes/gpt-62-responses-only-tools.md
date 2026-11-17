---
id: gpt-62-responses-only-tools
title: GPT-6.2 tool calls fail on Chat Completions and on effort none
kind: knowledge
tags: [openai, tools, responses, models]
status: active
updated: 2026-11-17
when_to_use: A GPT-6.2 request returns no tool call, rejects reasoning effort, or forgets earlier reasoning after a prompt edit
---

## Summary

`gpt-6.2-astra` and `gpt-6.2-sol` accept Chat Completions, but tool calling is Responses-only. The API also rejects reasoning effort `none`, and it drops prior reasoning when the conversation prefix changes.

## Notes

- **Tools.** Web search, file search, MCP, computer use, hosted shell, apply_patch, skills, and tool search are listed as Responses tools. A Chat Completions request can still name the model and return text. Move the loop to `v1/responses` before expecting a function call (`openai-gpt-62-astra-sol`).
- **Effort.** Requests that set reasoning effort to `none` are rejected. Replace `none` or `minimal` with `low`. New integrations should start at `medium` (`reasoning.effort` on Responses, `reasoning_effort` on Chat Completions).
- **Prefix edits.** GPT-6.2 drops reasoning items when the history prefix changes, the model is downgraded, or the end user or organization changes. The reply can get worse and spend more tokens redoing work. Keep instructions and earlier tool calls stable and append new turns. With Zero Data Retention, `store` is treated as false, so those reasoning items have to be sent back by the client or they are gone.
- **Sampling params.** Migrated Chat Completions calls should omit `temperature`, `top_p`, `logprobs`, and `top_logprobs`. Responses calls should omit `temperature`, `top_p`, and `top_logprobs`.

## Sources

- [Using GPT-6.2](https://developers.openai.com/api/docs/guides/latest-model) — accessed 2026-11-17
- [GPT-6.2 Astra](https://developers.openai.com/api/docs/models/gpt-6.2-astra) — accessed 2026-11-17
- [GPT-6.2 Sol](https://developers.openai.com/api/docs/models/gpt-6.2-sol) — accessed 2026-11-17
- [API changelog](https://developers.openai.com/api/docs/changelog) — accessed 2026-11-17
