---
id: openai-codex-team-tasks
title: ChatGPT Team Tasks — service-account scheduled work
tags: [openai, automations, cron, governance]
status: active
updated: 2026-10-25
when_to_use: Setting up shared ChatGPT/Codex Team Tasks, workspace connections, or contrasting them with personal scheduled tasks
---

## Summary

**Team Tasks** are shared scheduled or event-triggered runs owned by a ChatGPT **team**. They execute in the cloud under the **team’s service account** plus configured app connections — not the creator’s personal login, memories, or Custom Instructions. Business / Enterprise. Not a personal Codex scheduled task (`openai-codex-automations`), not Cursor Automations (`cursor-automations`), and not Copilot repo automations (`github-copilot-automations`).

## Notes

- Permissions (workspace settings or custom roles): **Create teams**; **Create and manage team tasks** (Learn docs also call the latter **Create and manage team automations** — same gate). A ChatGPT **team** is not a SCIM **group**. Membership is not imported from Slack/Teams/IdP; join links show the name and member list before join. New members see **all** earlier runs and generated files — no per-task ACL. Only the team owner deletes the team.
- Connections: workspace admin authorizes company-managed accounts; team owner selects which ones the team may use. Plugins supply tools/skills; connections supply app access. Sharing a plugin does **not** share a personal OAuth grant. The connected account’s permissions may exceed a member’s personal access — review membership with each connection. Unattended runs **cannot** complete a new app sign-in; in-app action approvals still apply.
- Create: Scheduled → **+ New Task** → Team toggle + owning team, or the team’s Scheduled section. Trigger is a time schedule (own timezone) **or** a supported app event (Gmail / Slack / …), not both. Instructions must name sources, output, and guardrails; a shared Space is **not** auto-injected. Pick a model the **team service account** can use (personal models may be unavailable). `@ChatGPT` in Slack/Teams can draft a task — still verify owning team and connections.
- Runtime: cloud — ChatGPT does not need to stay open. Pause/delete does **not** reliably stop an in-progress run. A missing model pauses the task until you pick another and Resume. Writes (Slack post, file edit) use the connection. Treat trigger text as untrusted (`prompt-injection-agent-defense`). Offboarding: transfer owner first; connections the new owner cannot use disable for the **whole** team. Tasks are designed to persist after the creator leaves.
- Billing: workspace credits; team spending limits are **separate** from personal scheduled-task caps (Help: 3–15 active personal tasks by plan). Contrast: desktop personal tasks can touch a local folder/worktree; Team Tasks cannot. Codex CLI / IDE still do not manage the Scheduled inbox.

## Sources

- [Set up and manage teams and Team Tasks](https://learn.chatgpt.com/docs/enterprise/teams) — accessed 2026-10-25
- [Creating and managing team tasks in ChatGPT](https://help.openai.com/en/articles/20001540-creating-and-managing-team-tasks-in-chatgpt) — accessed 2026-10-25
- [Scheduled tasks](https://learn.chatgpt.com/docs/automations) — accessed 2026-10-25
- [Workspace connections](https://learn.chatgpt.com/docs/enterprise/shared-connections) — accessed 2026-10-25
- [What's new](https://learn.chatgpt.com/docs/whats-new) — accessed 2026-10-25
