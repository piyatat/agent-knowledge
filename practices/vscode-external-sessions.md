---
id: vscode-external-sessions
title: VS Code external sessions — discover CLI/app chats and auto-cleanup
tags: [github, vscode, session, orchestration]
status: active
updated: 2026-09-20
when_to_use: Opening a Copilot CLI, Copilot app, Claude Code, or Codex session inside VS Code, or auto-archiving merged sessions
---

## Summary

VS Code can **discover local sessions** started outside the editor (Copilot CLI, Copilot app, Claude Code, Codex) and continue them in Chat view or the Agents window. The session stays **external** until you send a message; then Agent Host **adopts** it. Not harness selection (`vscode-agent-harnesses`) and not Claude’s in-process `SendMessage` (`claude-code-cross-session`).

## Notes

- Filter: sessions-list **External** → None / Recent (two in last 7 days) / Last 24 Hours / Last 7 Days / All. Default hides them. Setting: `chat.agentSessions.showExternal`. Copilot discovery is repo-associated sessions updated in the last seven days. Opening one in the Agents window shows a one-time banner.
- After you send a message, the session is no longer external and the filter no longer hides it. Chat view and Agents window share the same session objects (`agent-host-protocol-ahp`).
- Archive / Mark as Done hides without delete. For a worktree session, VS Code commits uncommitted changes to the session branch before removing the worktree folder; if that fails the worktree stays. **Delete** is permanent; Copilot worktrees go away when the last linked session is deleted or archived — commit first.
- Preview cleanup (both off by default): `chat.agentSessions.autoMarkAsDoneMergedSessionsAfterDays` and `chat.agentSessions.autoDeleteArchivedMergedSessionsAfterDays` (docs suggest `15`). Eligible: not in progress, last-modified older than the threshold, ≥1 merged PR, no open related PRs. **External sessions are not eligible.** Only auto-marked sessions auto-delete; a manual Done is kept. Worktrees are removed only when the branch tracks upstream with no outgoing/uncommitted changes — never force-removed.
- Agent Host sessions (Copilot/Claude; Codex when on the host) expose session-management tools: list, create session/chat, read another session’s recent context, send a follow-up. **Sending to another session always confirms.** Burst-capped; cannot message the current chat; archived sessions omitted unless asked.

## Sources

- [Manage agent sessions in VS Code](https://code.visualstudio.com/docs/agents/run/sessions/manage-sessions) — accessed 2026-09-20
- [Understand agent sessions and handoff](https://code.visualstudio.com/docs/agents/concepts/sessions) — accessed 2026-09-20
- [GitHub Copilot weekly releases — September 14](https://github.blog/changelog/2026-09-18-github-copilot-weekly-releases-september-14/) — accessed 2026-09-20
