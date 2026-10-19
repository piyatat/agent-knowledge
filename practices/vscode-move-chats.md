---
id: vscode-move-chats
title: VS Code move chats — folder or new worktree without losing history
tags: [vscode, git, session, isolation]
status: active
updated: 2026-10-19
when_to_use: Asking a VS Code Agents-window chat to continue in another folder or a new Git worktree
---

## Summary

**VS Code 1.142** (2026-10-14) can **move** an Agents-window chat to another folder or a **new Git worktree** and keep conversation history. It is an **agent-tool** request, not a button. Not worktree disk reclaim (`vscode-agent-worktree-cleanup`), not harness handoff (`vscode-agent-harnesses`), and not a session fork.

## Notes

- Prerequisites: **Agent Host** session with **one chat** and **one local folder**. Docs: **Copilot** harness, or **Codex on Agent Host** (experimental) in **Interactive** mode. Confirm destination, tool approval, and Workspace Trust. The agent finishes the current turn, moves, shows a workspace-change notice, then continues — wait for that before sending more prompts.
- Folder move uses files **already** at the destination; it does not copy the source tree. New worktree starts from **committed** Git state (repo must have ≥1 commit). Uncommitted changes stay in the original folder except files copied by `git.worktreeIncludeFiles`. Edits/commands then run at the destination.
- Do not confuse with **New Worktree** at session start, **fork** (history split, often same worktree), or **new session**. Two chats in one folder still collide on files (`vscode-agent-sandboxing`). Cleanup of leftover worktrees is `vscode-agent-worktree-cleanup`.

## Sources

- [Manage agent sessions in VS Code](https://code.visualstudio.com/docs/agents/run/sessions/manage-sessions/) — accessed 2026-10-19
- [Visual Studio Code 1.142](https://code.visualstudio.com/updates/v1_142/) — accessed 2026-10-19
- [Understand sessions and chats](https://code.visualstudio.com/docs/agents/concepts/sessions) — accessed 2026-10-19
- [Choose an agent harness](https://code.visualstudio.com/docs/agents/run/agent-harnesses) — accessed 2026-10-19
