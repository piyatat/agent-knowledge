---
id: claude-code-context-window
title: Claude Code context window — /compact, /context, /autocompact
tags: [claude, context, tokens, compaction]
status: active
updated: 2026-09-12
when_to_use: Managing Claude Code context with /compact or /context, or deciding what survives compaction
---

## Summary

Claude Code’s **context window** is the session’s working memory: startup files, reads, replies, and hidden tool traffic. Auto-compaction runs as you approach the limit so a full window does not end the session. `/compact [instructions]` summarizes now; `/context` shows a live category breakdown; `/autocompact <tokens>` moves the auto-pass earlier. Not generic compaction advice (`context-compaction`) and not `/rewind` file snapshots (`claude-code-checkpointing`).

## Notes

- Before you type: project-root `CLAUDE.md`, auto memory, MCP tool names, and skill descriptions load. Path-scoped rules and nested `CLAUDE.md` enter history only when a matching file is read. A subagent’s large reads stay in **its** window; you get a summary plus a small trailer (`claude-code-subagents`).
- After compaction (v2.1.198+ summarizer inherits session thinking): system prompt and output style stay; project-root `CLAUDE.md`, unscoped rules, auto memory, and the plan-mode plan re-inject from disk. Invoked skill bodies re-inject (5k tokens/skill, 25k total; oldest dropped; keep critical lines at the top of `SKILL.md`). Hooks’ earlier output is summarized; `SessionStart` hooks matching source `compact` run again. Claude re-reads up to five recently modified files; >5k tokens come back as a `Referenced file` path.
- Act before auto-compact: `/compact focus on the auth bug`; `/rewind` then Summarize from/up to here; `/autocompact 500k`; `/clear` when switching unrelated work. Fable, Sonnet 5, Opus 4.6+, and Sonnet 4.6 can use a 1M window — compaction still applies. `/context` lists which `CLAUDE.md` / memory files actually loaded.

## Sources

- [Explore the context window](https://code.claude.com/docs/en/context-window) — accessed 2026-09-12
- [Manage sessions](https://code.claude.com/docs/en/sessions) — accessed 2026-09-12
- [Memory](https://code.claude.com/docs/en/memory) — accessed 2026-09-12
