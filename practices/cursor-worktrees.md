---
id: cursor-worktrees
title: Cursor Git worktrees for isolated agent runs
tags: [cursor, git, isolation, orchestration]
status: active
updated: 2026-08-24
when_to_use: Running parallel Cursor agents or comparing models without colliding on the main checkout
---

## Summary

Cursor worktrees are isolated Git checkouts so an agent can install, edit, and test without touching your current branch. CLI: `agent --worktree` / `-w`. Agents Window creates them for you. IDE: `/worktree` and `/best-of-n`. Setup is `.cursor/worktrees.json`; cleanup is machine-wide.

## Notes

- CLI checkouts land under `~/.cursor/worktrees/<repo>/<name>` (name optional). `--workspace` sets the repo root; `--worktree` only changes where edits go. Same retention as editor worktrees.
- `.cursor/worktrees.json` is read from the worktree path, then project root. Keys: `setup-worktree-unix`, `setup-worktree-windows`, fallback `setup-worktree` — each an argv-style command array **or** a script path next to the JSON. `$ROOT_WORKTREE_PATH` is the main checkout (copy `.env` from there; do not symlink `node_modules` into the worktree).
- Setup runs only after workspace trust (prompt, saved decision, or `--trust` in headless). Untrusted workspaces skip setup with a notice.
- `/worktree …` keeps the rest of that chat in the isolated checkout. `/apply-worktree` brings changes back; `/delete-worktree` tears down. `/best-of-n sonnet,gpt,composer …` fans the same prompt across models, each in its own worktree — it does **not** merge winners for you.
- Cleanup (Cursor 3.5+): `cursor.worktreeCleanupIntervalHours` (default interval 6h) and `cursor.worktreeMaxCount` (default 25 **per machine**, all workspaces). Exceeding the cap triggers immediate cleanup. Worktrees created by skills or `git worktree add` are eligible for deletion.
- Debug: editor Output panel → **Worktrees Setup**. List: `git worktree list`.

## Sources

- [CLI worktrees](https://cursor.com/docs/cli/using) — accessed 2026-08-24
- [Worktrees (Agents Window / IDE)](https://cursor.com/docs/configuration/worktrees.md) — accessed 2026-08-24
- [CLI changelog — Git worktrees](https://cursor.com/docs/cli/changelog) — accessed 2026-08-24
