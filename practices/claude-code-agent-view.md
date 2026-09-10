---
id: claude-code-agent-view
title: Claude Code agent view — claude agents dispatcher
tags: [claude, orchestration, session, ux]
status: active
updated: 2026-09-10
when_to_use: Dispatching or monitoring background Claude Code sessions with claude agents, or contrasting it with subagents and agent teams
---

## Summary

**Agent view** (`claude agents`) is a research-preview terminal table for **full background sessions** you dispatch and leave. Each row is an independent conversation with its own quota, not a subagent or teammate. A supervisor keeps sessions running after you close the UI. Contrast: `/agents` in a chat lists **subagents** (`claude-code-subagents`); `/workflows` lists dynamic workflow runs (`claude-code-workflows`); agent teams are a lead + mailbox (`claude-code-agent-teams`).

## Notes

- Open: `claude agents` (workspace trust first). `Esc` returns to the shell, or to the conversation you backgrounded with `←`. Dispatch: type a prompt + Enter — **every** Enter starts a new session, not a follow-up. Peek: Space; attach: Enter / `→`; detach: `←` on an empty prompt. Bring an existing chat in with `/bg` or `←`. Footer `← N agents` counts background sessions waiting on you.
- List is **cross-project** by default. `--cwd ~/proj` narrows to that tree (includes `.claude/worktrees/` under it). Interactive sessions in other terminals appear only after backgrounding. Subagents and teammates are **not** separate rows. Script: `claude agents --json` — do not scrape `~/.claude/jobs/`.
- States: working / needs input / idle / completed / failed / stopped. Icon shape: process alive (`✻`), exited but resumable (`∙`), `/loop` sleeping (`✢`). PR/MR label `#N` / `!N` (or `3 PRs`) is a link, colored by checks/review. Row summaries: Haiku-class model (or session model if no Haiku); mid-turn text refreshes from output ≤ every 15s without a request.
- Sessions survive closing agent view, closing the shell, auto-update, and machine sleep (processes resume on wake). Shutdown still stops them. Notifications use `preferredNotifChannel` and fire `Notification` hooks (`agent_needs_input`, `agent_completed`). `/loop` sessions notify only when they need input.
- Use when tasks are independent and you will attach only on blocks. Use subagents when results should return into one chat. Use teams when workers must message each other. Use workflows when a script must fan out dozens of agents.

## Sources

- [Agent view](https://code.claude.com/docs/en/agent-view) — accessed 2026-09-10
- [Run agents in parallel](https://code.claude.com/docs/en/agents) — accessed 2026-09-10
- [Remote Control](https://code.claude.com/docs/en/remote-control) — accessed 2026-09-10
