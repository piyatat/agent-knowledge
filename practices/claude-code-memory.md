---
id: claude-code-memory
title: Claude Code memory — CLAUDE.md vs auto MEMORY.md
tags: [claude, memory, rules, context]
status: active
updated: 2026-09-25
when_to_use: Authoring CLAUDE.md / AGENTS.md / .claude/rules, or deciding whether auto memory should persist across sessions
---

## Summary

Claude Code has two memory layers, both loaded as **context** (not enforcement): **instruction files** you write (`CLAUDE.md` and, as of v2.1.277, **`AGENTS.md`**) and **auto memory** (Claude writes `MEMORY.md`). Must-never policy belongs in a PreToolUse hook (`claude-code-hooks`, `memory-files-vs-enforcement-hooks`).

## Notes

- CLAUDE.md load order (broad → specific): managed policy (`/etc/claude-code/CLAUDE.md` or `claudeMd` in managed settings) → `~/.claude/CLAUDE.md` → `./CLAUDE.md` or `./.claude/CLAUDE.md` → `CLAUDE.local.md` (gitignore). Walk-up files load in full at launch; subdirectory CLAUDE.md loads when Claude reads files there. Target under ~200 lines. `@path` imports expand at launch (max four hops); first external import needs approval.
- Path-scoped rules: `.claude/rules/*.md` with `paths:` frontmatter load when matching files are read. Rules without `paths` load at launch like `.claude/CLAUDE.md`. User rules live in `~/.claude/rules/`. `claudeMdExcludes` skips monorepo ancestors; managed CLAUDE.md cannot be excluded.
- **AGENTS.md** (v2.1.277+): default `claude-md-or-agents-md`. If no `CLAUDE.md`, `.claude/CLAUDE.md`, or `CLAUDE.local.md` exists in cwd or ancestors, Claude loads every `AGENTS.md` / `.claude/AGENTS.md` on that walk (and nested files when Read hits that tree). User `~/.claude/CLAUDE.md`, managed CLAUDE.md, and `.claude/rules/` do **not** block AGENTS.md. If any counted CLAUDE.md exists, **CLAUDE.md wins** and AGENTS.md is skipped unless imported. `/config` → Project instructions: `claude-md-and-agents-md` (both; CLAUDE.md first), `claude-md`, or `managed-only`. Changelog: not yet on Bedrock / Vertex / Foundry. Some sessions still cannot read AGENTS.md — import it. Not read: `AGENTS.local.md`, `AGENTS.override.md`, `.agents/`. A gitignored `CLAUDE.local.md` **blocks** the AGENTS.md fallback until you switch the setting. `/init` can seed from AGENTS.md. `CLAUDE_CODE_NEW_INIT=1` adds a reviewable multi-phase setup.
- Auto memory (v2.1.59+): on by default. Store is `~/.claude/projects/<sanitized-git-path>/memory/` — shared across worktrees of the same repo, **not** across machines or cloud. First 200 lines or 25KB of `MEMORY.md` load at session start; topic files are on-demand. Toggle via `/memory` or `autoMemoryEnabled` / `CLAUDE_CODE_DISABLE_AUTO_MEMORY=1`. Custom dir: `autoMemoryDirectory` (absolute or `~/`; project settings need workspace trust).
- Treat auto-memory writes as untrusted input (`agent-memory-poisoning`). Subagents can keep their own auto memory.

## Sources

- [How Claude remembers your project](https://code.claude.com/docs/en/memory) — accessed 2026-09-25
- [Create custom subagents](https://code.claude.com/docs/en/sub-agents) — accessed 2026-09-04
- [Claude Code changelog (AGENTS.md, v2.1.277)](https://raw.githubusercontent.com/anthropics/claude-code/main/CHANGELOG.md) — accessed 2026-09-25
