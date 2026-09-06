---
id: claude-code-checkpointing
title: Claude Code checkpointing — /rewind file snapshots
tags: [claude, session, ux, git]
status: active
updated: 2026-09-06
when_to_use: Using /rewind to undo Claude Code edits, or deciding checkpoints vs git
---

## Summary

Claude Code **checkpointing** snapshots files **before each user prompt** so `/rewind` (aliases `/undo`, `/checkpoint`; empty-prompt **Esc Esc**) can restore code, conversation, or both. Checkpoints ride with the session. They are **not** git and they **do not** track Bash-mutated files.

## Notes

- Menu actions: restore code+conversation; conversation only; code only (hidden if no tracked edits after that prompt); **Summarize from here** / **up to here** (targeted compact; original messages stay in the transcript). After restore/summarize-from-here, the selected prompt is put back in the input. `/clear` then rewind (v2.1.191+) shows `/resume (previous session)` at the top until you exit or resume another session.
- Retention: last **100** checkpoints per session. Dropping an older checkpoint deletes unreferenced snapshots except each file’s **first** snapshot (VS Code session-diff baseline). Snapshots are swept with the session (~**30 days** after last save; `cleanupPeriodDays`). Rewind after sweep can fail with `No files were restored`.
- **Not restored:** files changed only by Bash (`rm`/`mv`/`cp`); most **subagent** edits (background forks, `/code-review --fix`). Exception: a **foreground** `context: fork` skill (`background: false`) edits the working tree on your turn and *is* restored. External/concurrent edits usually ignored unless they touch the same files. **Symlinks / hard links** (dotfile managers, pnpm) are skipped with `Restored the code, but skipped N files` — `/debug` lists paths in `~/.claude/debug/`.
- Summarize ≠ `/branch` or `claude --continue --fork-session` (those keep the original session intact). Checkpoints are session recovery; use git for durable history. VS Code: hover a message → rewind (fork conversation / rewind code / both).

## Sources

- [Checkpointing](https://code.claude.com/docs/en/checkpointing) — accessed 2026-09-06
- [Claude Code VS Code](https://code.claude.com/docs/en/vs-code) — accessed 2026-09-06
