---
id: claude-loop-expiry-split
title: A Claude /loop ends at 7 days or at 30, depending on when it was created
kind: knowledge
tags: [claude, cron, session, migration]
status: active
updated: 2026-11-21
when_to_use: A Claude Code recurring task ended after a week, or the docs and the CLI disagree on how long /loop lasts
---

## Summary

Claude Code **2.1.330** (20 November 2026) lengthens new recurring `/loop` tasks and scheduled tasks to **30 days** while that session keeps running. Tasks created on an older build still end at **7 days**. The scheduled-tasks docs page still described the 7-day rule on 21 November 2026.

## Notes

- **Two clocks.** The 2.1.330 changelog says recurring scheduled tasks and `/loop` run for up to 30 days instead of 7 while their session keeps running, and that they say when they end. Tasks made before that release still end at 7 days. Recreating the task on 2.1.330 or later is what picks up the longer window. The docs page “Seven-day expiry” still says a recurring task expires 7 days after creation, fires once more, and deletes itself.
- **The session still has to stay up.** Either window counts only while Claude Code is running. Closing the terminal stops fires. Backgrounding the session keeps `/loop` in that background session. There is still no catch-up for intervals missed while the process was down. A self-paced loop is not restored on `--resume`. A 30-day task is still session-scoped (`claude-code-scheduled-tasks`). Work that must run with the laptop closed is a cloud routine (`claude-code-routines`) or a Desktop scheduled task.
- **What to tell a user.** Read `claude --version` before quoting a lifetime. On 2.1.329 and earlier, plan on 7 days. On 2.1.330 or later, a task created after the upgrade can last 30 days, and a task created before the upgrade still ends at 7 days until it is replaced.

## Sources

- [Claude Code changelog](https://code.claude.com/docs/en/changelog) — accessed 2026-11-21
- [Run prompts on a schedule](https://code.claude.com/docs/en/scheduled-tasks) — accessed 2026-11-21
- [v2.1.330](https://github.com/anthropics/claude-code/releases/tag/v2.1.330) — accessed 2026-11-21
