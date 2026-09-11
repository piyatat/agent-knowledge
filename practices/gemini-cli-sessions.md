---
id: gemini-cli-sessions
title: Gemini CLI sessions — --resume, retention, and /resume
tags: [gemini, session, cli, memory]
status: active
updated: 2026-09-11
when_to_use: Resuming a Gemini CLI chat, setting retention, or contrasting /resume with checkpointing
---

## Summary

Gemini CLI **automatically records** each project’s conversation (prompts, replies, tool I/O, token stats, thoughts) under `~/.gemini/tmp/<project_hash>/chats/`. Resume with `--resume` / `-r` or interactive `/resume`. This is not shadow-git checkpointing (`gemini-cli-checkpointing`) and not Auto Memory / GEMINI.md (`gemini-cli-auto-memory`, `gemini-cli-gemini-md`).

## Notes

- Scope is **per project root hash**. Changing directories switches history. `--resume` with no arg loads the latest; `--resume 1` uses the `--list-sessions` index; `--resume <uuid>` loads by id. `--list-sessions` / `--delete-session <index-or-id>` manage from the shell. Interactive `/resume` (aliases `/chat`) opens a Session Browser: preview, `/` search, Enter to load, `x` to delete.
- Manual named branch points: `/resume save <tag>`, `/resume list`, `/resume resume <tag>` (also `/chat …` and `/resume checkpoints …` during migration). These are conversation tags, not file snapshots.
- Retention (`general.sessionRetention`): `enabled` default true; `maxAge` default `"30d"`; optional `maxCount`; `minRetention` default `"1d"` (cleanup will not delete newer). Deleting a session also drops associated plans, task trackers, tool outputs, and activity logs. Configure via `/settings` or `settings.json`.
- `model.maxSessionTurns`: default `-1` (unlimited). At the cap, interactive mode stops sending to the model (start a new session); headless exits with an error (`gemini-cli-headless`).
- Parallel tasks: use Git worktrees so each session has its own checkout. Rewind / replay is a separate feature from resume. Pair with checkpointing when you need to undo a tool write, not just reopen the chat.

## Sources

- [Session management](https://geminicli.com/docs/cli/session-management.md) — accessed 2026-09-11
- [Checkpointing](https://geminicli.com/docs/cli/checkpointing/) — accessed 2026-09-11
- [Manage context and memory](https://geminicli.com/docs/cli/tutorials/memory-management/) — accessed 2026-09-11
