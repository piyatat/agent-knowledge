---
id: claude-code-subagents
title: Claude Code subagents — .claude/agents vs built-ins
tags: [claude, subagent, orchestration, isolation]
status: active
updated: 2026-10-16
when_to_use: Authoring .claude/agents markdown, choosing Explore/Plan vs custom, or setting isolation: worktree
---

## Summary

Claude Code **subagents** run in their own context window and return a summary to the parent. Built-ins (**Explore**, **Plan**, **general-purpose**, plus helpers) keep search/plan noise out of the main chat. Custom ones are markdown + YAML in `.claude/agents/` (project, walked up to the repo root) or `~/.claude/agents/` (user). This is not Cursor `.cursor/agents` (`cursor-custom-subagents`) and not a full parallel session (`claude-code-worktrees`).

## Notes

- Priority on name clash: managed settings → `--agents` JSON → project `.claude/agents/` (closest to cwd) → `~/.claude/agents/` → plugin `agents/`. Plugin ids are scoped (`my-plugin:review:security`). Plugin frontmatter ignores `hooks`, `mcpServers`, and `permissionMode`. `--add-dir` also loads that folder’s `.claude/agents/`. Combined custom `description` fields over **15,000 tokens** warn at startup but still load — move detail into the system-prompt body.
- Frontmatter: `name`, `description` (required), `tools` / `disallowedTools`, `model`, `permissionMode` (`default`, `acceptEdits`, `auto`, `dontAsk`, `bypassPermissions`, `plan`), `isolation: worktree`, `background`, `hooks`, `skills`, `memory`, `effort`, `mcpServers`, `maxTurns`, `initialPrompt`, `omitClaudeMd` (v2.1.271+; skips user/project/local CLAUDE.md, managed policy still loads). `experimental.cacheTtl` (`5m` / `1h`; v2.1.248+). `/agents` no longer opens a wizard as of v2.1.198 — ask Claude or edit the file. A new `agents/` directory needs a restart; later edits hot-reload.
- Built-ins: Explore and Plan are read-only and skip CLAUDE.md / parent git status. Explore inherits the parent model except on subscription / Console / `ANTHROPIC_BASE_URL`, where it uses the `opus` alias. Deny a type with `permissions.deny`, deny the `Agent` tool to block all delegation, or set `CLAUDE_CODE_DISABLE_EXPLORE_PLAN_AGENTS=1`.
- Isolation: default cwd is the parent checkout; `cd` does not persist across Bash calls. `isolation: worktree` uses a temp worktree from the default branch (or `worktree.baseRef: "head"`). A command whose cwd resolves to the main checkout now **fails** (v2.1.203+). Background is the default in interactive fork mode and keeps a smaller built-in tool set (MCP tools stay; `LSP` since v2.1.280). Permission prompts surface in the parent. Parent `bypassPermissions` / `acceptEdits` / auto mode cannot be loosened by the child.
- Effort: frontmatter `effort` overrides the session level but not `CLAUDE_CODE_EFFORT_LEVEL`. A per-invocation `effort` parameter (v2.1.292+) overrides the field and survives resume. `CLAUDE_CODE_WORKFLOW_SUBAGENT_MODEL` (v2.1.296) pins every **workflow** agent to one model while other subagents keep theirs. `autoCompactWindow` on frontmatter / `--agents` (v2.1.296) lets a child auto-compact earlier than the parent (`claude-code-context-window`).
- Forks (`/subtask` / `/fork`) inherit the parent transcript — they are not input-isolated. Parent must pack the brief (`subagent-context-isolation`). v2.1.302: `subagent_type: "fork"` is **on by default** in `claude -p`, the Agent SDK, Desktop, and VS Code (already the terminal default). `CLAUDE_CODE_FORK_SUBAGENT=0` turns it off. `claude mcp serve` never offers forks. Desktop / VS Code always run the **main** conversation’s subagents in the background (Claude no longer chooses); a subagent’s own Agent calls in `-p` / SDK / Desktop / VS Code now default to **foreground**. Env-vars docs still describe the older “interactive only” default — trust the 2.1.302 notes for those hosts.

## Sources

- [Create custom subagents](https://code.claude.com/docs/en/sub-agents) — accessed 2026-10-10
- [CHANGELOG.md](https://github.com/anthropics/claude-code/blob/main/CHANGELOG.md) — accessed 2026-10-16
- [v2.1.302 release notes](https://github.com/anthropics/claude-code/releases/tag/v2.1.302) — accessed 2026-10-16
- [Run parallel sessions with worktrees](https://code.claude.com/docs/en/worktrees) — accessed 2026-09-04
