---
id: claude-code-worktrees
title: Claude Code worktrees — --worktree vs isolation
tags: [claude, git, isolation, orchestration]
status: active
updated: 2026-09-04
when_to_use: Running parallel Claude Code sessions, or isolating a subagent in its own git checkout
---

## Summary

`claude --worktree` / `-w` starts a session in an isolated git checkout so parallel edits do not collide. Default path is `.claude/worktrees/<name>/` on a new `worktree-<name>` branch. This is not a subagent (same session, `claude-code-subagents`) and not Cursor `agent --worktree` (`cursor-worktrees`). Desktop sessions get a worktree automatically.

## Notes

- Interactive `--worktree` requires workspace trust first; `claude -p --worktree` skips the dialog. Omit the name for an auto slug. `#1234`, a GitHub PR URL, or a GitLab MR URL fetches that change from `origin` into `.claude/worktrees/pr-<n>/`. Add `.claude/worktrees/` to `.gitignore`.
- Isolation checks (session + every child subagent): block Edit/Write/NotebookEdit into the main checkout; block Bash/PowerShell/Monitor whose cwd is the main tree; block git redirects (`-C`, `--git-dir`, `GIT_DIR` / `GIT_WORK_TREE`); refuse unverifiable command shapes (brace expansion, unquoted heredocs). PowerShell only gets the cwd check. `EnterWorktree` to a path outside `.claude/worktrees/` always prompts unless `bypassPermissions`.
- Gitignored files (`.env`) are missing unless listed in `.worktreeinclude` (gitignore syntax; only ignored matches copy). `worktree.baseRef`: `"fresh"` (default, remote default branch) or `"head"` (current local HEAD — use when subagents must see in-progress work). Hooks: `${CLAUDE_PROJECT_DIR}` stays at the launch root; hook JSON `cwd` follows the worktree.
- Cleanup: clean unnamed interactive worktrees are removed on exit; named or dirty ones prompt. `-p` does not auto-remove (unlock + `git worktree remove` if needed). Subagent `isolation: worktree` temps are swept after `cleanupPeriodDays` if empty; Claude Code `git worktree lock`s an in-use tree. `WorktreeCreate` / `WorktreeRemove` hooks replace git logic and skip `.worktreeinclude`.
- Resume (`--continue` / `--resume` / SDK) re-enters a still-valid worktree. `--fork-session` starts in the launch directory and leaves the original tree alone.

## Sources

- [Run parallel sessions with worktrees](https://code.claude.com/docs/en/worktrees) — accessed 2026-09-04
- [Create custom subagents](https://code.claude.com/docs/en/sub-agents) — accessed 2026-09-04
- [Common workflows](https://code.claude.com/docs/en/common-workflows) — accessed 2026-09-04
