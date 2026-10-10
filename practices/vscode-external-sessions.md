---
id: vscode-external-sessions
title: VS Code sessions list — external chats, compact view, auto-cleanup
tags: [github, vscode, session, orchestration]
status: active
updated: 2026-10-10
when_to_use: Opening a Copilot CLI, Copilot app, Claude Code, or Codex session inside VS Code, or managing a large Agents-window session list
---

## Summary

VS Code can **discover local sessions** started outside the editor (Copilot CLI, Copilot app, Claude Code, Codex) and continue them in Chat view or the Agents window. The session stays **external** until you send a message; then Agent Host **adopts** it. **1.141** (2026-10-07) picks up new Copilot CLI/app chats as soon as the first request is sent, and continues Codex chats with an exclusive-write lock. Not harness selection (`vscode-agent-harnesses`).

## Notes

- Filter: sessions-list **External** → None / Recent (two in last 7 days) / Last 24 Hours / Last 7 Days / All. Default hides them. Setting: `chat.agentSessions.showExternal`. **1.141** also filters independently by **Environment** (local / cloud / remote), **Harness**, and **Created In** (VS Code / Copilot CLI / Copilot app). Copilot discovery is repo-associated sessions updated in the last seven days. Opening one in the Agents window shows a one-time banner.
- **1.141:** new Copilot CLI / Copilot app conversations appear automatically once you send the first request, even if the Agents window is already open. After you send a message, the session is no longer external. Chat view and Agents window share the same session objects (`agent-host-protocol-ahp`).
- **Codex exclusive write:** only one app can send at a time. If ChatGPT or Codex CLI still has the chat open, VS Code keeps the transcript, draft, and attachments but disables send/queue/resend and shows **This chat is open in another app**. Fully quit the other app, then **Retry** (checks access without sending). You can switch back later.
- Archive / Mark as Done hides without delete. For a worktree session, VS Code commits uncommitted changes to the session branch before removing the worktree folder; if that fails the worktree stays. **Delete** is permanent; Copilot worktrees go away when the last linked session is deleted or archived — commit first. Bulk reclaim: `vscode-agent-worktree-cleanup`.
- Preview cleanup (both off by default): `chat.agentSessions.autoMarkAsDoneMergedSessionsAfterDays` and `chat.agentSessions.autoDeleteMarkedAsDoneMergedSessionsAfterDays` (docs suggest `15`). Eligible: not in progress, last-modified older than the threshold, ≥1 merged PR, no open related PRs. **External sessions are not eligible.** Only auto-marked sessions auto-delete; a manual Done is kept. Worktrees are removed only when the branch tracks upstream with no outgoing/uncommitted changes — never force-removed.
- Agent Host sessions (Copilot/Claude; Codex when on the host) expose session-management tools: list, create session/chat, read another session’s recent context, send a follow-up. **Sending to another session always confirms.** Burst-capped; cannot message the current chat; archived sessions omitted unless asked. `chat.agentHost.agentOrchestrationLimits` (`on` default) caps fan-out.
- 1.139 list UX (Agents window): Agent Host keeps lightweight session/chat metadata in a **central catalog**. **Compact View** shows title at rest and workspace details on hover. Rename with double-click, context menu, or F2. Preview `sessions.showChatTabs`: **Multiple** vs **Single**. **1.141** adds a two-dimensional **session grid** (`vscode-agent-harnesses`).

## Sources

- [Manage agent sessions in VS Code](https://code.visualstudio.com/docs/agents/run/sessions/manage-sessions) — accessed 2026-10-10
- [Visual Studio Code 1.141](https://code.visualstudio.com/updates/v1_141) — accessed 2026-10-10
- [Understand agent sessions and handoff](https://code.visualstudio.com/docs/agents/concepts/sessions) — accessed 2026-09-20
- [Visual Studio Code 1.139](https://code.visualstudio.com/updates/v1_139) — accessed 2026-09-26
- [GitHub Copilot weekly releases — October 5](https://github.blog/changelog/2026-10-09-github-copilot-weekly-releases-october-5/) — accessed 2026-10-10
