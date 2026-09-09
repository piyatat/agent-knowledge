---
id: claude-code-statusline
title: Claude Code status line — local stdin JSON bar
tags: [claude, ux, cli, observability]
status: active
updated: 2026-09-09
when_to_use: Authoring a Claude Code statusLine command, or debugging a missing/stale footer bar
---

## Summary

The Claude Code **status line** is a **local** shell command: JSON session data on stdin, printed lines on stdout. It does not call the API and does not replace `CLAUDE.md` or hooks. CLI-only (not the VS Code/Cursor extension chrome). Configure `statusLine` in settings (`claude-code-settings`) or generate a script with `/statusline`.

## Notes

- Settings: `{ "statusLine": { "type": "command", "command": "~/.claude/statusline.sh", "padding": 0 } }`. Optional `refreshInterval` (min 1s) for clocks / idle subagent git; `hideVimModeIndicator` when the script already prints `vim.mode`. Inline `jq` commands are valid. `/statusline <nl>` writes `~/.claude/` and updates settings; `/statusline clear` removes the field.
- Runs at session start/resume, then on assistant messages, `/compact`, permission-mode or vim-mode changes, command edits, `refreshInterval`, and when last-seen `resets_at` / prompt-cache `expires_at` fire. 300ms debounce; in-flight scripts are cancelled. Read `COLUMNS`/`LINES` — `tput cols` cannot see the terminal. Hides during autocomplete, help, and permission prompts. A custom bar **drops** most footer keyboard hints; use `footerLinksRegexes` for clickable IDs without a script.
- Useful stdin fields: `model.*`, `workspace.*` (incl. `git_worktree`, `repo`), `cost.*`, `context_window.used_percentage`, `rate_limits.*`, `prompt_cache` (v2.1.251+), `session_id` / `session_name`, `output_style.name`, `effort.level`, `fast_mode`, `agent.name`, `worktree.name`, `pr.*`. Cost is client-side list price and resets on `/clear` (v2.1.211+).
- Pair with output styles (`claude-code-output-styles`) and context compaction. Do not put secrets in the printed bar (transcripts and screenshots leak).

## Sources

- [Customize your status line](https://code.claude.com/docs/en/statusline) — accessed 2026-09-09
- [Claude Code settings](https://code.claude.com/docs/en/settings) — accessed 2026-09-09
