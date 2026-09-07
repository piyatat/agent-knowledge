---
id: cursor-checkpoints
title: Cursor Agent checkpoints — local file snapshots
tags: [cursor, session, ux, git]
status: active
updated: 2026-09-07
when_to_use: Restoring a Cursor Agent checkpoint, or deciding checkpoints vs git / Claude /rewind
---

## Summary

Cursor **checkpoints** snapshot files Agent is about to change so you can preview and restore from the chat timeline. They are local and **not** git. Restore reverts files only — messages stay. This is not Claude `/rewind` (`claude-code-checkpointing`) and not a Cloud Agent VM snapshot (`cursor-environment-builds`).

## Notes

- Agent creates a checkpoint automatically before significant edits (all files it is modifying). Restore: click a checkpoint in the timeline, **Restore Checkpoint** on a previous request, or the + control when hovering a message. Preview first, then restore.
- Scope: files in the workspace that Agent changed. Use git for durable history, branches, and anything outside the session. Exploratory refactors and iterative UI work are the intended use.
- CLI / subagents: completed subagents persist checkpoints so `resume` reloads that child context instead of an empty thread (`cursor-custom-subagents`, `cursor-cli-headless`). Do not treat a checkpoint restore as undoing shell side effects (pushes, `rm` outside the snapshot set).
- Contrast worktrees (`cursor-worktrees`) when you want an isolated checkout rather than rewind-in-place. Cloud Agents keep their own VM disk / PR artifacts (`cursor-cloud-pr-artifacts`).

## Sources

- [Cursor Agent overview](https://cursor.com/docs/agent/overview) — accessed 2026-09-07
- [Subagents](https://cursor.com/docs/subagents) — accessed 2026-09-07
- [Using Agent in CLI](https://cursor.com/docs/cli/using) — accessed 2026-09-07
- [CLI Changelog](https://cursor.com/docs/cli/changelog) — accessed 2026-09-07
