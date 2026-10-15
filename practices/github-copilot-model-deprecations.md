---
id: github-copilot-model-deprecations
title: Copilot model deprecations — Oct/Nov 2026 pin updates
tags: [github, models, deprecation, routing]
status: active
updated: 2026-10-15
when_to_use: A Copilot chat/agent/completion pin or workflow names a retired model, or an admin model policy still lists Oct/Nov 2026 retirements
---

## Summary

GitHub retires **Copilot** models in waves across Chat, inline edits, Ask/Agent, and completions — not only one surface. **2026-10-02** already shipped; **2026-10-19** was the mid-October wave; **2026-11-16** (announced 2026-10-15) removes Claude Opus 4.8/5 and GPT-5.6 Terra. This is not Copilot Auto tiers (`github-copilot-auto-model`) and not HydraFusion (`github-copilot-hydrafusion`). Codex’s GPT-5.5 ChatGPT-sign-in retirement is separate (`openai-codex-gpt-55-retirement`).

## Notes

- Removed 2026-10-02: Gemini 3.5 Flash → Gemini 3.8 Flash; Gemini 3.6 Flash → Gemini 3.8 Flash; Kimi K2.7 Code → Kimi K3; Claude Opus 4.7 → Claude Opus 5.5. No action is required to delete the old names from the picker.
- Scheduled 2026-10-19 (announced 2026-09-18): Gemini 3.7 Flash → Gemini 3.8 Flash; GPT-5.5 / GPT-5.4 → GPT-5.6 Sol; GPT-5.4 mini / GPT-5 mini → GPT-5.6 Luna; Grok 4.5 → Grok 4.6.
- Scheduled **2026-11-16** (announced 2026-10-15): Claude Opus 4.8* → Claude Opus 5.5; Claude Opus 5 → Claude Opus 5.5; GPT-5.6 Terra → GPT-6.1 Sol or GPT-6 Luna. *Opus 4.8 **stays** for individual Copilot subscribers on **annual** plans so they keep an Opus offering; that exception is not documented for Business/Enterprise.
- Enterprise/Business: alternatives under default model enablement turn on unless the admin disabled the global default or the specific model. If the global default is off, enable the replacement in Copilot model policy. Confirm the picker on VS Code and github.com after the policy save. After deprecation, GitHub does not require you to delete the old names.
- Update pinned workflows, custom agents, and `-p` / SDK model strings before the date. Auto routing still bills the **selected** model (`github-copilot-auto-model`).

## Sources

- [Upcoming deprecation of selected GitHub Copilot models in mid-November](https://github.blog/changelog/2026-10-15-upcoming-deprecation-of-selected-github-copilot-models-in-mid-november/) — accessed 2026-10-15
- [Selected models in GitHub Copilot deprecated](https://github.blog/changelog/2026-10-02-selected-models-in-github-copilot-deprecated/) — accessed 2026-10-04
- [Upcoming deprecation of selected GitHub Copilot models in mid-October](https://github.blog/changelog/2026-09-18-upcoming-deprecation-of-selected-github-copilot-models-in-mid-october/) — accessed 2026-10-04
