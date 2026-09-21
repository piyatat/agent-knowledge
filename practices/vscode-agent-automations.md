---
id: vscode-agent-automations
title: VS Code agent automations — local schedule and .automation.md
tags: [vscode, automations, cron, orchestration]
status: active
updated: 2026-09-21
when_to_use: Scheduling a recurring VS Code Agents-window task, or contrasting it with Cursor / Copilot / Codex automations
---

## Summary

VS Code **Automations** (Preview) run a saved prompt + session config on demand or on a local clock. They live in the **Agents window** sidebar. Not Copilot **cloud-agent** automations (`github-copilot-automations`), not Cursor Automations (`cursor-automations`), and not Codex scheduled tasks (`openai-codex-automations`). The machine and agent must stay up — quitting VS Code (or stopping Agent Host) stops the clock.

## Notes

- Enable `chat.automations.enabled` (off by default on Stable; on in Insiders). Gradual rollout — if the sidebar has no Automations entry, check the setting. Create from Automations → Create, or start from a **template** (built-in or Agent Plugin; Plugin badge; blue marker = new template). Templates expand when you have none saved. Disabling a plugin hides its templates; already-created automations stay.
- Config: Name, Prompt, workspace or **No workspace**, agent, model, permissions, optional **New Worktree** + base branch when the harness supports isolation (`vscode-agent-harnesses`). Saving does **not** bypass org policy or guarantee unattended approval. Review permissions before enabling a schedule. First save as **Manual**, **Run now**, inspect History, then schedule.
- Recurrence: Manual / Hourly / Daily (local time) / Weekly (day + local time). Agent Host schedules need a **running Agent Host**; other schedules need a **running VS Code window**. A missed tick **may** catch up once — do not assume replay of every miss. One session at a time per automation. Each run bills the selected model. Disable does not stop an in-flight run; Stop it from History.
- Share as `.automation.md` (Markdown + YAML): name, prompt, schedule, format version, portable id. **Omits** workspace, provider, model, permissions, enabled flag, and history. Import (or drag onto the view) opens New Automation with Enabled **cleared**. Unsupported files are rejected rather than silently remapped. Duplicate / Edit / Delete (delete wipes history).
- Treat the saved prompt and any issue text the agent reads as untrusted (`prompt-injection-agent-defense`). For unattended terminals, pair with `vscode-agent-sandboxing` rather than Allow all.

## Sources

- [Create and manage agent automations](https://code.visualstudio.com/docs/agents/run/automations) — accessed 2026-09-21
- [Choose and use an agent harness](https://code.visualstudio.com/docs/agents/run/agent-harnesses) — accessed 2026-09-21
- [Understand trust and safety for AI agents](https://code.visualstudio.com/docs/agents/concepts/trust-and-safety) — accessed 2026-09-21
