---
id: openai-gpt-61-terra-agents
title: GPT-6.1 Terra — everyday agent coding vs Sol
tags: [openai, github, models, computer-use]
status: active
updated: 2026-10-26
when_to_use: Pinning GPT-6.1 Terra in Copilot, Codex, or ChatGPT Work, or choosing it instead of GPT-6.1 Sol
---

## Summary

**GPT-6.1 Terra** (`gpt-6.1-terra`) is OpenAI’s lower-cost everyday model for **agentic coding, terminal work, writing, and computer use**. Generally available **2026-10-26** in GitHub Copilot and in ChatGPT **Work / Codex**. Not Auto routing (`github-copilot-auto-model`), not a deprecation pin table (`github-copilot-model-deprecations`), and not GPT-5.6 Terra (still scheduled to leave Copilot on **2026-11-16**).

## Notes

- **Copilot** (changelog 2026-10-26): designed for focused, consolidated steps on well-scoped tasks; early testing solved more **terminal and C#** tasks than GPT-5.6 Terra; billed at **provider list price** under usage-based billing (cheaper than GPT-6.1 Sol). Plans: Pro, Pro+, Max, Business, Enterprise. Picker surfaces: VS Code, Visual Studio, Copilot CLI, cloud agent, Copilot app, github.com, GitHub Mobile, JetBrains, Xcode, Eclipse. Gradual rollout. Business/Enterprise: default model enablement turns it on unless an admin disabled the global default or this model (`github-copilot-model-policy-api`).
- **ChatGPT Work / Codex** (same day): Plus, Pro, Business, Enterprise, Edu. Strong **image / screen** understanding plus **browser and computer use**. Pick it under **Advanced** in the desktop app or Work on the web; Work also offers it on mobile. **Not in Chat**. No **UAE inference residency**. Enterprise depends on workspace availability and admin controls. CLI: Codex **0.159.0+**, `codex -m gpt-6.1-terra` or `/model`.
- When to pick Terra vs neighbors: Terra = everyday writing, visuals, computer use, well-scoped terminal/agent work. **GPT-6.1 Sol** = longer / harder coding at higher cost. **Astra** = longest-horizon autonomous work. **Luna** = cheap focused extraction. Do not treat Terra as a drop-in for Sol-class refactors. Auto still bills the **selected** model (`github-copilot-auto-model`).
- Update saved pins, custom agents, scheduled tasks, and `-p` / `codex exec --model` scripts that still name GPT-5.6 Terra before 2026-11-16. Confirm the picker after admin policy changes.

## Sources

- [GPT-6.1 Terra in GitHub Copilot](https://github.blog/changelog/2026-10-26-gpt-6-1-terra-in-github-copilot/) — accessed 2026-10-26
- [AI model comparison (Copilot)](https://docs.github.com/en/copilot/reference/ai-models/model-comparison) — accessed 2026-10-26
- [ChatGPT & Codex changelog](https://learn.chatgpt.com/docs/changelog) — accessed 2026-10-26
- [Models (ChatGPT Work and Codex)](https://learn.chatgpt.com/docs/models) — accessed 2026-10-26
- [Upcoming deprecation of selected GitHub Copilot models in mid-November](https://github.blog/changelog/2026-10-15-upcoming-deprecation-of-selected-github-copilot-models-in-mid-november/) — accessed 2026-10-26
