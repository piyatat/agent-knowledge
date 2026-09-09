---
id: gemini-cli-checkpointing
title: Gemini CLI checkpointing — shadow-git /restore
tags: [gemini, session, git, ux]
status: active
updated: 2026-09-09
when_to_use: Enabling Gemini CLI checkpoints, or restoring files+chat before a tool write
---

## Summary

Gemini CLI **checkpointing** (off by default) snapshots the project in a **shadow Git repo** plus conversation + the pending tool call **before** an approved filesystem-mutating tool (`write_file`, `replace`). `/restore` reverts files **and** the chat, then re-offers that tool. This is not the project’s `.git`, not `/resume` chat saves, and not Claude `/rewind` or Cursor checkpoints (`claude-code-checkpointing`, `cursor-checkpoints`).

## Notes

- Enable only in `settings.json`: `"general": { "checkpointing": { "enabled": true } }`. The `--checkpointing` flag was **removed in 0.11.0**. Shadow repo: `~/.gemini/history/<project_hash>`. Conversation + tool JSON: `~/.gemini/tmp/<project_hash>/checkpoints`. All local.
- `/restore` lists `timestamp-filename-tool` ids; `/restore <checkpoint_file>` applies immediately. Restored files match the pre-tool snapshot; the original prompt reappears so you can rerun, edit, or skip. Does **not** undo non-file side effects (network, installed packages) unless those files were in the snapshot.
- `/chat save` / `/resume` are **manual conversation** checkpoints under `~/.gemini/tmp/<project_hash>/` — different feature (`gemini-cli` commands). Pair with Plan mode when you want read-only research first (`gemini-cli-plan-mode`).
- Verify the Gemini vs Antigravity binary before relying on this in CI (`gemini-cli-settings`). Treat shadow-git history as sensitive if the workspace had secrets.

## Sources

- [Checkpointing](https://geminicli.com/docs/cli/checkpointing/) — accessed 2026-09-09
- [Gemini CLI commands — /restore](https://geminicli.com/docs/reference/commands/) — accessed 2026-09-09
- [Gemini CLI settings](https://geminicli.com/docs/cli/settings/) — accessed 2026-09-09
