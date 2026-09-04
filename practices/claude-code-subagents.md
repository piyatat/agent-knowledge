---
id: claude-code-subagents
title: Claude Code subagents — .claude/agents vs built-ins
tags: [claude, subagent, orchestration, isolation]
status: active
updated: 2026-09-04
when_to_use: Authoring .claude/agents markdown, choosing Explore/Plan vs custom, or setting isolation: worktree
---

## Summary

Claude Code **subagents** run in their own context window and return a summary to the parent. Built-ins (**Explore**, **Plan**, **general-purpose**, plus helpers) exist to keep search/plan noise out of the main chat. Custom ones are markdown + YAML in `.claude/agents/` (project, walked up to the repo root) or `~/.claude/agents/` (user). This is not Cursor `.cursor/agents` (`cursor-custom-subagents`) and not a full parallel session (`claude-code-worktrees`).

## Notes

- Priority on name clash: managed settings → `--agents` JSON → project `.claude/agents/` (closest to cwd) → `~/.claude/agents/` → plugin `agents/`. Plugin ids are scoped (`my-plugin:review:security`). Plugin frontmatter ignores `hooks`, `mcpServers`, and `permissionMode`.
- Frontmatter: `name`, `description` (delegation hint), `tools` / `disallowedTools`, `model`, `permissionMode` (`default`, `acceptEdits`, `auto`, `dontAsk`, `bypassPermissions`, `plan`), `isolation: worktree`, `background`, `hooks`, `skills`, `memory`, `effort`. `/agents` no longer opens a wizard as of v2.1.198 — ask Claude or edit the file. A new `agents/` directory needs a restart; later edits hot-reload.
- Built-ins: Explore and Plan are read-only and skip CLAUDE.md / parent git status. Explore inherits the parent model (capped at Opus on the Claude API). Deny a type with `permissions.deny`, deny the `Agent` tool to block all delegation, or set `CLAUDE_CODE_DISABLE_EXPLORE_PLAN_AGENTS=1`.
- Isolation: default cwd is the parent checkout; `cd` does not persist across Bash calls. `isolation: worktree` uses a temp worktree from the default branch (or `worktree.baseRef: "head"`). Background is the default as of v2.1.198 and keeps a smaller built-in tool set; permission prompts surface in the parent. Parent `bypassPermissions` / `acceptEdits` / auto mode cannot be loosened by the child.
- Forks (`/subtask` / `/fork`) inherit the parent transcript — they are not input-isolated. Parent must pack the brief (`subagent-context-isolation`).

## Sources

- [Create custom subagents](https://code.claude.com/docs/en/sub-agents) — accessed 2026-09-04
- [Run parallel sessions with worktrees](https://code.claude.com/docs/en/worktrees) — accessed 2026-09-04
