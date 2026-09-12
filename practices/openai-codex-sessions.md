---
id: openai-codex-sessions
title: Codex sessions — resume, fork, archive, /app
tags: [openai, session, cli, ux]
status: active
updated: 2026-09-12
when_to_use: Resuming or forking a Codex TUI chat, archiving it, or continuing in the ChatGPT desktop app
---

## Summary

Codex **interactive sessions** persist under `$CODEX_HOME/sessions` (default `~/.codex/sessions`). Resume with `codex resume` / `/resume`, fork with `codex fork` / `/fork`, hide with `/archive` + `codex unarchive`, or delete with `codex delete` / `/delete`. `/app` (macOS/Windows) continues the same chat in the ChatGPT desktop app; `codex app` launches that app. Not `codex exec resume` (`openai-codex-exec`) and not Claude `--resume` (`claude-code-sessions`).

## Notes

- `codex resume` / `codex fork` take a session ID or `--last` (cwd unless `--all`). Same global flags as `codex` (model, sandbox). If cwd ≠ saved directory, Codex asks; persist the choice with `tui.resume_cwd` = `"current"` or `"session"` (`--cd` wins). `/rename` sets a picker name; IDs beat names for archive/unarchive/delete.
- `/archive` hides the thread without deleting the transcript (unavailable while a task is running) and exits the TUI; restore with `codex unarchive <SESSION>`. Archived files live under `$CODEX_HOME/archived_sessions`. `/delete` removes the transcript and descendant sessions; `codex delete <UUID> --force` skips the name-ambiguity prompt.
- `/app` errors if the desktop app is missing. `codex app` opens it (macOS can pass a workspace path; Windows prints the path). `/new` starts a fresh chat in the same process; `/clear` resets visible UI and context. Transcripts are local — treat them as secret-bearing (`agent-session-transcript-audit`).

## Sources

- [Command line options – Codex CLI](https://developers.openai.com/codex/cli/reference) — accessed 2026-09-12
- [Slash commands in Codex CLI](https://developers.openai.com/codex/cli/slash-commands) — accessed 2026-09-12
- [Troubleshooting – Codex app](https://developers.openai.com/codex/app/troubleshooting) — accessed 2026-09-12
