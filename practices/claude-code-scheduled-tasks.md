---
id: claude-code-scheduled-tasks
title: Claude Code /loop — session-scoped cron vs routines
tags: [claude, automations, cron, session]
status: active
updated: 2026-09-12
when_to_use: Polling in an open Claude Code session with /loop, or choosing /loop vs Desktop tasks vs cloud routines
---

## Summary

**`/loop`** is session-scoped scheduling: Claude re-runs a prompt on an interval **while this conversation is alive**. Minimum 1 minute; restored on `--resume` / `--continue` except self-paced loops, expired jobs, and background Bash/Monitor. Not a cloud **routine** (`claude-code-routines`), not a Desktop local scheduled task (app open, min 1 minute, persists), and not Cursor Automations (`cursor-automations`). For event push instead of poll, use channels (`claude-code-channels`). For turn-by-turn toward a condition, use `/goal`.

## Notes

- `/loop 5m check the deploy` — fixed cron. `/loop check the deploy` — Claude picks 1–60 minutes each iteration (or uses Monitor when available). Bare `/loop` runs the built-in maintenance prompt (unfinished work → current-branch PR/CI → cleanup) or `.claude/loop.md` then `~/.claude/loop.md` (plain Markdown, 25k-byte cap; ignored when you pass a prompt). Skills in the prompt must be model-invocable; `/permissions`, `disable-model-invocation`, Skill deny, and MCP prompts arrive as text.
- Tools: `CronCreate` / `CronList` / `CronDelete` (8-char ids, 50-task cap). One-shot reminders via natural language. Fires between turns, local timezone, vixie-cron 5-field (`L`/`W`/`MON` unsupported). Recurring jitter up to 30 minutes (or half the interval); `:00`/`:30` one-shots may fire up to 90s early. Recurring tasks expire after 7 days. `Esc` cancels a waiting self-paced loop only.
- Limits: no catch-up for missed fires; closing the terminal stops them (backgrounding the session keeps `/loop` in the background session). `CLAUDE_CODE_DISABLE_CRON=1` hides the tools. Scheduled `/code-review` never launches `ultra`.

## Sources

- [Run prompts on a schedule](https://code.claude.com/docs/en/scheduled-tasks) — accessed 2026-09-12
- [Automate work with routines](https://code.claude.com/docs/en/routines) — accessed 2026-09-12
- [Schedule recurring tasks in Claude Code Desktop](https://code.claude.com/docs/en/desktop-scheduled-tasks) — accessed 2026-09-12
