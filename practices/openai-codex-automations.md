---
id: openai-codex-automations
title: Codex scheduled tasks — time and Gmail/Slack/GitHub events
tags: [openai, automations, cron, orchestration]
status: active
updated: 2026-10-25
when_to_use: Scheduling a Codex/ChatGPT Work task, or contrasting it with Cursor/Copilot/Claude automations
---

## Summary

Codex **scheduled tasks** (docs title “Scheduled tasks”; formerly “Automations”) run a saved prompt on a cadence or on **Gmail / Slack / GitHub** events. Manage them from **Scheduled** in ChatGPT web, mobile, or the desktop app — **not** Codex CLI or the IDE extension. Shared Business/Enterprise work uses **Team Tasks** (`openai-codex-team-tasks`). Not Cursor Automations (`cursor-automations`), not Copilot automations (`github-copilot-automations`), and not Claude routines (`claude-code-routines`).

## Notes

- Surfaces: ChatGPT web/mobile create and list tasks; desktop can run them against a **local project** or a dedicated worktree (`openai-codex-worktrees`) while the machine and app stay up. CLI/IDE can draft a prompt or skill first. Web tasks use uploads, connected tools, skills, and plugins — they do **not** keep a local folder between runs. ChatGPT Work / Codex desktop tasks can use plugins; pin a skill with `$skill-name`.
- Two shapes: a **standalone** task starts a new chat each run (inbox in Scheduled; one task can cover several projects). A **task inside a chat** reuses that chat’s context (minute/daily/weekly follow-up). Skills can create or update tasks. Custom cadence: RFC 5545 `RRULE`.
- Event triggers (eligible plans; web/mobile only — not desktop/CLI/IDE): Gmail (new mail, optional sender/subject); Slack (selected channels, optional author **and whether thread replies are included**; no reactions/edits/DMs; add `@ChatGPT` to each channel); GitHub (PR activity — filter PR/author/title/label; reviews/comments/commits/merges). One task can stack event triggers **or** a time schedule, not both. Bursts may coalesce; **Run now** drains pending. Admin gate: **Allow event-triggered scheduled tasks**.
- Isolation: Git repos choose local checkout vs a new worktree; non-git runs in the project dir. Frequent schedules create worktrees — archive unused runs. Unattended sign-in cannot complete a new app OAuth.
- Security: unattended runs use default sandbox; they set `approval_policy = "never"` when org policy allows, else the selected permission mode (`openai-codex-sandbox`). `read-only` / `workspace-write` will fail network or out-of-workspace writes. Treat Gmail/Slack/GitHub text as untrusted (`prompt-injection-agent-defense`). GPT-5.5 left Codex ChatGPT-login on **2026-10-14**; pin replacements to `gpt-6.1-sol` when the workspace has it (API-key Codex is unaffected).

## Sources

- [Scheduled tasks](https://learn.chatgpt.com/docs/automations) — accessed 2026-10-25
- [Scheduled tasks (Codex app)](https://developers.openai.com/codex/app/automations) — accessed 2026-10-25
- [Set up and manage teams and Team Tasks](https://learn.chatgpt.com/docs/enterprise/teams) — accessed 2026-10-25
- [Worktrees (Codex app)](https://developers.openai.com/codex/app/worktrees) — accessed 2026-09-20
- [Sandbox (Codex)](https://developers.openai.com/codex/agent-approvals-security) — accessed 2026-09-20
