---
id: claude-code-memory
title: Claude Code memory — CLAUDE.md vs auto MEMORY.md
tags: [claude, memory, rules, context]
status: active
updated: 2026-09-04
when_to_use: Authoring CLAUDE.md / .claude/rules, or deciding whether auto memory should persist across sessions
---

## Summary

Claude Code has two memory layers, both loaded as **context** (not enforcement): **CLAUDE.md** (you write) and **auto memory** (Claude writes `MEMORY.md`). Must-never policy belongs in a PreToolUse hook (`claude-code-hooks`, `memory-files-vs-enforcement-hooks`). Claude Code does **not** read `AGENTS.md` unless you import it.

## Notes

- CLAUDE.md load order (broad → specific): managed policy (`/etc/claude-code/CLAUDE.md` or `claudeMd` in managed settings) → `~/.claude/CLAUDE.md` → `./CLAUDE.md` or `./.claude/CLAUDE.md` → `CLAUDE.local.md` (gitignore). Walk-up files load in full at launch; subdirectory CLAUDE.md loads when Claude reads files there. Target under ~200 lines. `@path` imports expand at launch (max four hops); first external import needs approval.
- Path-scoped rules: `.claude/rules/*.md` with `paths:` frontmatter load when matching files are read. Rules without `paths` load at launch like `.claude/CLAUDE.md`. User rules live in `~/.claude/rules/`. `claudeMdExcludes` skips monorepo ancestors; managed CLAUDE.md cannot be excluded.
- Portable repos: put `@AGENTS.md` at the top of `CLAUDE.md` (or symlink). `/init` can seed from `AGENTS.md`, `.cursorrules`, and similar. `CLAUDE_CODE_NEW_INIT=1` adds a reviewable multi-phase setup (CLAUDE.md, skills, hooks).
- Auto memory (v2.1.59+): on by default. Store is `~/.claude/projects/<sanitized-git-path>/memory/` — shared across worktrees of the same repo, **not** across machines or cloud. First 200 lines or 25KB of `MEMORY.md` load at session start; topic files are on-demand. Toggle via `/memory` or `autoMemoryEnabled` / `CLAUDE_CODE_DISABLE_AUTO_MEMORY=1`. Custom dir: `autoMemoryDirectory` (absolute or `~/`; project settings need workspace trust).
- Treat auto-memory writes as untrusted input (`agent-memory-poisoning`). Subagents can keep their own auto memory.

## Sources

- [How Claude remembers your project](https://code.claude.com/docs/en/memory.md) — accessed 2026-09-04
- [Create custom subagents](https://code.claude.com/docs/en/sub-agents) — accessed 2026-09-04
