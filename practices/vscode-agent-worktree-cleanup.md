---
id: vscode-agent-worktree-cleanup
title: VS Code worktree cleanup — reclaim inactive agent checkouts
tags: [vscode, git, session, isolation]
status: active
updated: 2026-10-10
when_to_use: Reclaiming disk from VS Code agent-session worktrees, or configuring auto-cleanup after merged PRs
---

## Summary

**VS Code 1.141** (2026-10-07) adds **Chat: Open Worktree Cleanup** so you can see how much disk inactive agent-session worktrees use and remove the ones you no longer need. Cleanup marks the session **done** and deletes the worktree; the branch stays so you can restore the session later. Not Cursor worktree retention (`cursor-worktrees`) and not harness selection (`vscode-agent-harnesses`).

## Notes

- Open the editor from the Command Palette. Filter by inactivity (**7 / 15 / 30 / 60 / 90** days), review each worktree’s estimated size, and confirm. Eligible worktrees are selected by default; uncheck any you want to keep.
- Before removal, VS Code **commits uncommitted changes to the session branch**. If it cannot preserve changes or delete the folder, the worktree stays. Restore a Done session to recreate the worktree from that branch.
- Excluded: **active, running, needs-input, pinned, done, archived, untitled, error**, sessions newer than the filter, and worktrees whose size cannot be measured.
- Suggestion (experimental): `chat.agentSessions.sessionStorageCleanupSuggestion.enabled` notifies in the Agents window when inactive worktrees use **≥ 5 GiB** or **20** are eligible. Dismiss hides it for the current window; **Don't Show Again** or `Chat: Disable Session Storage Cleanup Suggestions` turns it off.
- Automatic cleanup is still **preview** and **off** by default: `chat.agentSessions.autoMarkAsDoneMergedSessionsAfterDays` then `chat.agentSessions.autoDeleteMarkedAsDoneMergedSessionsAfterDays` (docs suggest `15`; `0` disables that stage). Eligible: not in progress, last-modified older than the threshold, ≥1 merged PR, no open related PRs. **External sessions are not eligible.** Only auto-marked sessions auto-delete. Worktrees are removed only when the branch tracks upstream with no outgoing/uncommitted changes — never force-removed. VS Code checks at startup and hourly while either setting is on.
- Pair with the sessions list (`vscode-external-sessions`). Do not treat worktree isolation as a sandbox (`vscode-agent-sandboxing`).

## Sources

- [Visual Studio Code 1.141](https://code.visualstudio.com/updates/v1_141) — accessed 2026-10-10
- [Manage agent sessions in VS Code](https://code.visualstudio.com/docs/agents/run/sessions/manage-sessions) — accessed 2026-10-10
- [GitHub Copilot weekly releases — October 5](https://github.blog/changelog/2026-10-09-github-copilot-weekly-releases-october-5/) — accessed 2026-10-10
