---
id: openai-gpt-62-astra-sol
title: GPT-6.2 Astra and Sol — Work, Codex, and the API
kind: knowledge
tags: [openai, models, codex, tools]
status: active
updated: 2026-11-20
when_to_use: Pinning gpt-6.2-astra or gpt-6.2-sol, or moving a tool-calling app onto GPT-6.2
---

## Summary

**GPT-6.2 Astra** (`gpt-6.2-astra`) and **GPT-6.2 Sol** (`gpt-6.2-sol`) shipped on **2026-11-17**. Astra is the frontier model for the hardest coding and professional work. Sol is the everyday agent model and keeps GPT-6.1 Sol’s token prices. Both are in ChatGPT Work, Codex, and the OpenAI API. Tool calls require the Responses API (`gpt-62-responses-only-tools`).

## Notes

- **Where.** Plus, Pro, Enterprise, and Edu in ChatGPT Work and Codex. Enterprise and Edu need a workspace admin to enable them. Codex CLI **0.171.0** (2026-11-20) lists both ids in the model catalog and selects **Sol** as the default catalog model (`openai-codex-exec`). Pro **$500** can use Ultrafast on either model. Pro **$200** gets Ultrafast on Sol. The API exposes both ids the same day, with Ultrafast. Codex instructions were updated because, in two alignment tests, these models were more likely to omit a blocker such as a missing file or a search tool that was down.
- **API shape.** Text and image in, text out. Context window **1,050,000** tokens, max input **922,000**, max output **128,000**. Knowledge cutoff is **2026-05-18** for Astra and **2026-06-01** for Sol. No audio, video, Realtime, or fine-tuning. The API rejects reasoning effort `none`; a migration from `none` or `minimal` should use `low`, and new apps should start at `medium`. Chat Completions accepts the model, but tools (including MCP, computer use, shell, skills, and tool search) are Responses-only. Drop `temperature`, `top_p`, and logprobs fields when moving an old request.
- **Price, per million tokens, Standard.** Astra: input **$8**, cached input **$0.40**, 30-minute cache write **$10**, output **$40**. Sol: input **$2**, cached input **$0.10**, 30-minute cache write **$2.50**, output **$10**. Above **272k** input tokens, input and cache rates double and output is **1.5×** for the whole request. Batch is half of Standard. Fast is **2×**. Ultrafast is **3×** through **2027-02-28** (Pacific) and **6×** from **2027-03-01**. Build-tier Standard limits on the model pages are **5,000** RPM and **1,000,000** TPM.
- **Caching and ZDR.** From GPT-6.2, the API drops reasoning items when it sees a prefix edit, a model downgrade, or a change of end user or organization. Quality can fall and token use can rise. Keep the prefix stable and append new turns. Top-level `instructions` are appended **after** `input`, so a reusable prompt belongs in a developer message at the start of `input` if it should cache. Approved orgs can use Zero Data Retention on eligible endpoints; Responses then treats `store` as false, so replay prior output items, including encrypted reasoning. Background mode still stores the request temporarily in that case (`gpt-62-background-and-instructions`).
- **Background windows.** Astra and Sol have no Flex tier. Public-beta completion windows on Astra, Sol, Terra, and Luna are `2h` (30% below Standard model-token rates) and `8h` (40% below), with `background` true and Standard processing. The default `soonest` window has no discount.
- **Regions and cyber.** Standard, Fast, and Batch support US and EU residency. Ultrafast is US only. Both models meet OpenAI’s Critical cybersecurity threshold and the High biological and chemical threshold; Astra also meets High for AI self-improvement. Safeguards are tighter than on the previous generation. Daybreak still serves GPT-6 Sol (Blue), a GPT-6 Astra alpha, and GPT-6 Cyber (Red). The announcement says GPT-6.2 is not on Daybreak yet (`openai-codex-daybreak`).
- **Choosing.** Astra when the task is a long codebase change, a document that must follow a template, or computer use. Sol when the same paid plan must finish more ordinary agent turns. Older Terra vs Sol guidance stays in `openai-gpt-61-terra-agents`.

## Sources

- [Introducing GPT-6.2 Astra and Sol](https://openai.com/index/introducing-gpt-6-2-astra-sol) — accessed 2026-11-17
- [ChatGPT and Codex changelog](https://learn.chatgpt.com/docs/changelog) — accessed 2026-11-20
- [Codex CLI 0.171.0](https://github.com/openai/codex/releases/tag/rust-v0.171.0) — accessed 2026-11-20
- [Using GPT-6.2](https://developers.openai.com/api/docs/guides/latest-model) — accessed 2026-11-17
- [GPT-6.2 Astra](https://developers.openai.com/api/docs/models/gpt-6.2-astra) — accessed 2026-11-17
- [GPT-6.2 Sol](https://developers.openai.com/api/docs/models/gpt-6.2-sol) — accessed 2026-11-17
- [API changelog](https://developers.openai.com/api/docs/changelog) — accessed 2026-11-20
- [Background mode](https://developers.openai.com/api/docs/guides/background) — accessed 2026-11-20
- [Pricing](https://developers.openai.com/api/docs/pricing) — accessed 2026-11-20
