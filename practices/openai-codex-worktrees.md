---
id: openai-codex-worktrees
title: Codex worktrees — Local vs Handoff vs managed checkouts
tags: [openai, git, isolation, orchestration]
status: active
updated: 2026-09-11
when_to_use: Running parallel Codex desktop chats in Git worktrees, or using Handoff vs Create branch
---

## Summary

Codex **worktrees** are Git worktrees the ChatGPT desktop app (or Remote-on-a-connected-computer) creates so multiple chats can edit the same project without colliding with **Local**. Default chats use a disposable Codex-managed worktree in `$CODEX_HOME/worktrees` (detached HEAD). Not Cursor `--worktree` (`cursor-worktrees`) and not Claude `--worktree` (`claude-code-worktrees`).

## Notes

- Git repos only. New chat → Worktree → pick starting branch (may include uncommitted Local changes) → Codex checks out detached HEAD. Scheduled tasks on Git projects also get a dedicated background worktree; non-git projects run in the project directory. Worktrees do **not** run on the phone — Remote drives the connected machine.
- **Handoff** moves a chat (and Git state) between Local and its associated worktree. Git allows a branch in only one worktree: after **Create branch here**, do not check that branch out in Local — Handoff instead. Returning to Worktree later reuses the same associated checkout. `.gitignore` files do not move unless listed in repo-root `.worktreeinclude` (ignored paths only; `AGENTS.override.md` is copied automatically). Local managed worktrees only — not remote or DIY `git worktree`.
- Permanent worktrees: project ⋮ menu → own sidebar project, not auto-deleted, many chats per tree. Managed: typically one chat, keep last **15** (Settings → Worktrees; configurable root). Skip auto-delete if pinned, in progress, or permanent. Archive or over-limit deletes a managed tree **after a snapshot** (restore from the chat).
- Contrast cloud environments (`openai-codex-cloud-environments`) which are isolated VMs, not local extra checkouts. Pair with `workspace-mount-boundaries` if setup scripts copy secrets via `.worktreeinclude`.

## Sources

- [Worktrees](https://learn.chatgpt.com/docs/environments/git-worktrees) — accessed 2026-09-11
- [Worktrees (Codex app)](https://developers.openai.com/codex/app/worktrees) — accessed 2026-09-11
