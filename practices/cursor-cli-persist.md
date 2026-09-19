---
id: cursor-cli-persist
title: Cursor CLI persist — detach and reattach a running agent
tags: [cursor, cli, session, durability]
status: active
updated: 2026-09-19
when_to_use: Keeping a Cursor CLI agent running after disconnect, or choosing persist vs resume vs & cloud handoff
---

## Summary

**`agent persist`** (CLI changelog, 2026-08-26) starts a **local persistent session**: the agent keeps running after you disconnect. Detach with `/detach`, reconnect with `agent persist attach`. Not `agent ls` / `--resume` (reload a saved transcript after exit) and not `&` cloud handoff (`cursor-cli-cloud-handoff`).

## Notes

- Lifecycle: `agent persist` to start; `/detach` to leave the process up; `agent persist attach` to reconnect. `agent persist list` / `stop` manage sessions. `agent persist --resume` continues an existing chat inside persist rather than starting empty.
- Contrast: `agent ls`, `agent resume`, `--continue`, `/resume` reopen **saved chats** (cross-workspace picker as of the same release). Those reload conversation state; they do not keep a live agent after you quit. `&` moves the thread to a Cloud Agent VM.
- Same release: subagent checkpoints survive resume; completed background subagents include their final message in the completion notice. Transport errors show a “Reconnecting…” retry. `--continue` is the most-recent-chat shortcut; transcripts stay on disk for tooling and hooks.
- Overview/using docs still lead with `agent ls` / `--resume` and `&`. Treat persist as the stay-local durability path; treat `&` as the stay-away cloud path. Headless `-p` is a one-shot print run (`cursor-cli-headless`), not a detachable persist session.

## Sources

- [CLI Changelog](https://cursor.com/docs/cli/changelog) — accessed 2026-09-19
- [Cursor CLI overview](https://cursor.com/docs/cli/overview) — accessed 2026-09-19
- [Using Agent in CLI](https://cursor.com/docs/cli/using) — accessed 2026-09-19
