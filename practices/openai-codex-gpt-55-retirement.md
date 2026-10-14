---
id: openai-codex-gpt-55-retirement
title: Codex GPT-5.5 retirement — ChatGPT sign-in vs API key
tags: [openai, models, deprecation, cli]
status: active
updated: 2026-10-14
when_to_use: A Codex config, custom agent, or exec script still names gpt-5.5 after the 2026-10-14 ChatGPT-sign-in retirement
---

## Summary

**GPT-5.5** retired from **Codex with ChatGPT sign-in** on **2026-10-14 at 19:00 UTC** (noon PDT). The **OpenAI API** and Codex sessions authenticated with an **API key** are unaffected. This is not Copilot’s mid-October pin wave (`github-copilot-model-deprecations`) and not HydraFusion (`github-copilot-hydrafusion`).

## Notes

- ChatGPT-sign-in replacements: Plus / Pro / Business / Enterprise / Edu → **GPT-6.1 Sol** (`gpt-6.1-sol`) when the plan and client show it. Free / Go → **GPT-6 Luna** (`gpt-6-luna`) in the desktop app when available. Enterprise / Edu keep Sol **off by default** until an admin enables it. Prefer Sol for long agentic work; Luna for focused, high-volume tasks. Astra stays the strongest (and costliest) pick (`openai-codex-exec`).
- Sweep `gpt-5.5` out of workspace defaults, saved model settings, managed configuration, custom agents, scheduled tasks (`openai-codex-automations`), and `codex` / `codex exec -m` / `--model` strings. Changing a default does **not** grant access — confirm the picker on each client. Earlier ChatGPT-sign-in retirements still worth grepping: `gpt-5.4` → `gpt-6-sol`, `gpt-5.4-mini` → `gpt-6-luna`, plus already-gone `gpt-5.3-codex-spark` / `gpt-5.2` / `gpt-5.3-codex`.
- CLI: `/model` or `codex --model gpt-6.1-sol` / `codex exec -m gpt-6.1-sol "…"`. Persist with `model = "gpt-6.1-sol"` in the shared `config.toml` (desktop, CLI, IDE). API-key sessions follow the API org/project catalog — GPT-5.5 can remain there.
- **Ultrafast** (2026-10-08 for Sol) is a **speed tier**, not a 5.5 replacement. Supports GPT-6 Astra and GPT-6.1 Sol on Pro $500 and eligible Enterprise / Edu. Enterprise off by default. Included-limit multiplier **8×** Standard; purchased / PAYG credits **6×**. Sol Ultrafast residency: US and Europe (EEA + Switzerland); Astra Ultrafast: US only. Do not confuse Ultrafast with **Ultra** reasoning (subagents) or `/fast`.

## Sources

- [Models (ChatGPT Learn)](https://learn.chatgpt.com/docs/models) — accessed 2026-10-14
- [Speed — Fast and Ultrafast](https://learn.chatgpt.com/docs/agent-configuration/speed) — accessed 2026-10-14
- [ChatGPT & Codex changelog](https://learn.chatgpt.com/docs/changelog) — accessed 2026-10-14
- [Workspace model availability](https://learn.chatgpt.com/docs/enterprise/workspace-model-availability) — accessed 2026-10-14
