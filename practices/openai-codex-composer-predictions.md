---
id: openai-codex-composer-predictions
title: Codex composer predictions — next-message drafts in the desktop app
tags: [openai, ux, session, cli]
status: active
updated: 2026-10-19
when_to_use: Debugging missing Codex next-message suggestions, or turning Show predictions off in the desktop app
---

## Summary

**Composer predictions** (beta, 2026-10-09) suggest a **complete next message** in the Codex **desktop app** after Codex finishes a turn. Tab accepts an editable draft; it does **not** send. This is not CLI mid-turn steer (`openai-codex-sessions`), not new-conversation starter chips, and not Cursor’s follow-up queue (`cursor-message-queue`).

## Notes

- Eligibility: age **18+**, **personal ChatGPT Pro**, supported regions, **local or SSH** threads, models **GPT-6 Astra** or **GPT-6.1 Sol**. Not Chat on web/Desktop. Work threads may show predictions only for **local Work** conversations. Custom `model_providers` threads can be skipped even on a supported model ID.
- On by default for eligible users. Settings → General → Composer → **Show predictions**. Accept with **Tab**, then edit or send. Typing your own message skips the wait. Predictions can take several seconds (longer in long threads) and may be omitted.
- Context: current thread only. Memories/connected apps inform a prediction **only if already in the thread**. Memory can stay off. During beta, generating a prediction does **not** consume Codex usage/credits; **sending** (including an accepted draft) bills normally.
- Predictions do not auto-continue a task and do not complete a message word-by-word. macOS does not need extra keyboard permissions for this feature. If suggestions never appear: update the app, confirm Show predictions, account/model/thread type.

## Sources

- [Composer predictions in Codex](https://help.openai.com/en/articles/20001601-composer-predictions-in-codex) — accessed 2026-10-19
- [ChatGPT & Codex changelog](https://learn.chatgpt.com/docs/changelog) — accessed 2026-10-19
- [Codex app: support composer predictions with a custom model provider](https://github.com/openai/codex/issues/52910) — accessed 2026-10-19
