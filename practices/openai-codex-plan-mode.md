---
id: openai-codex-plan-mode
title: Codex /plan vs /goal — plan then durable objective
tags: [openai, orchestration, cli, ux]
status: active
updated: 2026-09-09
when_to_use: Switching Codex into plan mode, or choosing /plan vs /goal for a long task
---

## Summary

Codex **`/plan`** (also Shift+Tab in the TUI) switches the thread into **plan mode**: gather context, ask questions, propose a reviewable sequence **before** implementation. **`/goal`** attaches a durable, measurable objective to the thread and keeps working across turns. Neither widens sandbox or approval policy (`openai-codex-sandbox`). Not Claude plan mode (`claude-code-plan-mode`) and not Cursor Plan (`cursor-agent-modes`).

## Notes

- `/plan` with optional inline prompt (images/paste allowed). Unavailable **while a task is already running**. Use when the approach is unclear; ask Codex to interview you and write success criteria, then hand off to `/goal`.
- `/goal <text>` sets the objective (non-empty, **≤ 4000** chars — put longer briefs in a file). `/goal` views; `pause` / `resume` / `clear` manage lifecycle. Starting a goal does not auto-approve tools; it pauses for decisions. Parallel chats each have their own goal — use worktrees so they do not edit the same files.
- Long-horizon docs: write outcome + constraints + verification. Plan-only work should not trigger goal continuation. Budget limits stop substantive work and summarize; that is not “done.”
- Contrast `/review` after implementation (`openai-codex-review`) and `AGENTS.md` standing rules (`openai-codex-agents-md`). For hours-long unattended work see Goal mode docs rather than looping `/plan`.

## Sources

- [Slash commands in Codex CLI](https://developers.openai.com/codex/cli/slash-commands) — accessed 2026-09-09
- [Long-running work](https://developers.openai.com/codex/long-running-work) — accessed 2026-09-09
- [Using Goals in Codex](https://developers.openai.com/cookbook/examples/codex/using_goals_in_codex) — accessed 2026-09-09
- [Run long horizon tasks with Codex](https://developers.openai.com/blog/run-long-horizon-tasks-with-codex) — accessed 2026-09-09
