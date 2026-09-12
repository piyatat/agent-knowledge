---
id: claude-code-sessions
title: Claude Code sessions — --resume, --continue, /branch
tags: [claude, session, cli, memory]
status: active
updated: 2026-09-12
when_to_use: Resuming a Claude Code CLI conversation, branching it, or locating JSONL transcripts
---

## Summary

A Claude Code **session** is a saved conversation tied to a project directory (JSONL under `~/.claude/projects/<dir>/`). Resume with `--continue` (most recent in this cwd), `--resume` / `/resume` (picker or name/ID/path), or `--from-pr`. Desktop, web, and VS Code keep **their own** history (`claude-code-desktop`, `claude-code-on-the-web`). Not Gemini `--resume` (`gemini-cli-sessions`) and not `/rewind` checkpoints (`claude-code-checkpointing`).

## Notes

- Picker skips `claude -p` / Agent SDK sessions (resume those by ID) and conversations whose **first** prompt was `/loop`. `--continue` also skips a still-running background session (v2.1.257+ can open a **finished** background one). ID lookup (v2.1.223+) searches this project, its worktrees, then other projects when exactly one match exists.
- Restored: transcript, model (unless retired / `--model` / provider deployment IDs), `--agent` (trusted original dir, then resume cwd), permission mode on direct terminal `--continue` / `--resume <id|unique-name>` without `-p` (picker and in-session `/resume` start in the **current** default; `bypassPermissions` and `plan` do not restore on that terminal path). Active `/goal` carries over with counters reset. Unexpired `/loop` cron tasks restore; self-paced `/loop`, background Bash, and Monitor do not. Re-pass `--mcp-config`, `--settings`, `--plugin-dir`, `--add-dir`.
- `/branch [name]` copies the transcript in-process (session grants follow; in-flight background work and Remote Control move with you). `--fork-session` starts a new process without those grants. `/export` is human text; scripts should use `claude -p --resume <id> --output-format json`. Retention: `cleanupPeriodDays` (default 30); `claude project purge` deletes a project’s transcripts. `CLAUDE_CODE_PROJECT_DIR_NAME` needs `CLAUDE_CONFIG_DIR`.

## Sources

- [Manage sessions](https://code.claude.com/docs/en/sessions) — accessed 2026-09-12
- [Explore the context window](https://code.claude.com/docs/en/context-window) — accessed 2026-09-12
- [Run prompts on a schedule](https://code.claude.com/docs/en/scheduled-tasks) — accessed 2026-09-12
