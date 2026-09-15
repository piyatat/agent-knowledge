---
id: github-copilot-agent-merge
title: VS Code Agent Merge — drive a PR to merge-ready
tags: [github, review, orchestration, ux]
status: active
updated: 2026-09-15
when_to_use: Enabling Agent Merge on a VS Code agent session to clear review comments, failed checks, and merge conflicts
---

## Summary

**Agent Merge** (VS Code 1.136 public preview) asks an agent to finish a **pull request**: address review feedback, fix failed checks and merge conflicts, rerun workflows, and repeat until the PR is merge-ready. It does **not** merge for you. Not Copilot cloud agent (`github-copilot-coding-agent`), not Copilot code review (`github-copilot-code-review`), and not “Merge Changes” on a worktree session.

## Notes

- Enable `chat.agentMerge.enabled`. Turn it on **per session** from the **Agents window**: command **Enable Agent Merge for Active Session**, or the Agent Merge button in the title bar. Preview only — expect the surface to move.
- Loop: review comments → CI/check failures → conflicts → rerun workflows. Stop when the PR is ready to merge under existing branch protection. Required reviewers, CODEOWNERS, and status checks still apply.
- Distinct from Agents-window **Merge** on a Git worktree session (merge the agent’s branch into your workspace / open a PR). Agent Merge is the PR-finishing loop after a PR already exists.
- Related 1.136 agent-host work: Copilot and Claude sessions can nest related chats under a parent session; notifications can fire when a session needs input (`chat.notifyWindowOnConfirmation`). Multi-root Chat sessions are experimental (`chat.agentHost.copilotAgent.multiRootEnabled` / `claudeAgent.multiRootEnabled`) and scoped to the editor window; hooks still load from one primary folder.
- Always read the resulting diff. Do not treat Agent Merge as a merge gate.

## Sources

- [Visual Studio Code 1.136 — Agent Merge](https://code.visualstudio.com/updates/v1_136) — accessed 2026-09-15
- [GitHub Copilot weekly releases — August 31](https://github.blog/changelog/2026-09-04-github-copilot-weekly-releases-august-31/) — accessed 2026-09-15
- [Use the Agents window (Preview)](https://code.visualstudio.com/docs/agents/agents-window) — accessed 2026-09-15
