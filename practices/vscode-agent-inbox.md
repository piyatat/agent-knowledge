---
id: vscode-agent-inbox
title: VS Code Inbox mode — triage sessions that need attention
tags: [vscode, session, ux, orchestration]
status: active
updated: 2026-11-11
when_to_use: Enabling sessions.list.inboxEnabled, snoozing Agents-window sessions, or running Fix Checks from the list
---

## Summary

**VS Code 1.146** (2026-11-11, Experimental) **Inbox mode** regroups the Agents-window sessions list by *what needs you next*, across workspaces. Enable `sessions.list.inboxEnabled` (off by default), then **Filter Sessions → Grouping → Inbox Mode**. It does not archive sessions, stop agents, or replace custom groups. Not Cursor’s iOS cloud inbox (`cursor-ios`) and not worktree reclaim (`vscode-agent-worktree-cleanup`).

## Notes

- Categories (Pinned and Inbox sit above the rest): **Inbox** (questions, approval requests, errors, failing PR checks, completed replies to review); **Working** (agent still running); **Ready to merge** (relevant open PRs are all non-draft with passing CI and no other attention requests — failed/pending/absent checks do **not** qualify; passing CI is not mergeability); **On hold** (held or snoozed); **Done** (dismissed or earlier completed — **not** the same as archived).
- Triage (multi-select ok): **Dismiss from Inbox** → Done without archiving (new activity can bounce it back); **Return to Inbox** clears the choice; **Put on Hold** until you return it; **Snooze** → On hold until a chosen time or new activity; **Mark Session as Done** **archives** (and can clean a worktree/container). The row’s close icon is Dismiss; the checkmark is Mark Done. Undo the notification to reverse. Choices persist across reload. Switching grouping or turning the setting off keeps custom groups and saved triage.
- Dismiss / hold / snooze does **not** stop the agent. Use Inbox when you want attention across projects; keep workspace grouping when you want to find a conversation (`vscode-external-sessions`).
- **Inline actions** (separate Experimental `sessions.list.inlineActions`, off by default): **Fix Checks**, **Address Comments**, or both run in that row’s chat **without opening it**. Works in any grouping, not only Inbox. Top-level row → main chat; multi-select does **not** fan out. Needs a finished, requestable chat with failed required checks or supported review feedback; remote sessions must be connected. Does **not** enable Agent Merge or change permissions; the PR action hides when Agent Merge already owns that blocker (`github-copilot-agent-merge`).

## Sources

- [Visual Studio Code 1.146](https://code.visualstudio.com/updates/v1_146) — accessed 2026-11-11
- [Organize and triage agent sessions](https://code.visualstudio.com/docs/agents/run/sessions/organize-sessions) — accessed 2026-11-11
