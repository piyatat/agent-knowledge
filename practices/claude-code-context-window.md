---
id: claude-code-context-window
title: Claude Code context window — /compact, /context, /autocompact
tags: [claude, context, tokens, compaction]
status: active
updated: 2026-10-03
when_to_use: Managing Claude Code context with /compact or /context, or selecting a 1M window vs 200K
---

## Summary

Claude Code’s **context window** is the session’s working memory: startup files, reads, replies, and hidden tool traffic. Auto-compaction runs as you approach the limit so a full window does not end the session. `/compact [instructions]` summarizes now; `/context` shows a live category breakdown; `/autocompact <tokens>` moves the auto-pass earlier. Native **1M** windows are now the Anthropic API default for current Fable / Sonnet 5+ / Opus 4.7+ — not a rare `[1m]` add-on. Not generic compaction advice (`context-compaction`) and not `/rewind` file snapshots (`claude-code-checkpointing`).

## Notes

- Before you type: project-root `CLAUDE.md` / `AGENTS.md`, auto memory, MCP tool names, and skill descriptions load. Path-scoped rules and nested `CLAUDE.md` enter history only when a matching file is read. A subagent’s large reads stay in **its** window; you get a summary plus a small trailer (`claude-code-subagents`).
- After compaction (v2.1.198+ summarizer inherits session thinking): system prompt and output style stay; project-root `CLAUDE.md`, unscoped rules, auto memory, and the plan-mode plan re-inject from disk. Invoked skill bodies re-inject (5k tokens/skill, 25k total; oldest dropped; keep critical lines at the top of `SKILL.md`). Hooks’ earlier output is summarized; `SessionStart` hooks matching source `compact` run again. Claude re-reads up to five recently modified files; >5k tokens come back as a `Referenced file` path.
- 1M: on the Anthropic API, Fable 5.1/5, Sonnet 5.5/5, and Opus 4.7+ always use 1M (no `[1m]` variant, no extra credits for the window). Opus 4.6 / Sonnet 4.6 still need `opus[1m]` / `sonnet[1m]` and plan/credit rules. Native 1M sessions auto-compact around **967K** (`CLAUDE_CODE_AUTO_COMPACT_WINDOW`). `CLAUDE_CODE_DISABLE_1M_CONTEXT=1` hides `[1m]` rows and treats native-1M models as 200K. Behind `ANTHROPIC_BASE_URL`, Claude Code assumes the Anthropic window and cannot see a gateway’s lower cap — set `CLAUDE_CODE_AUTO_COMPACT_WINDOW=200000` if the proxy rejects >200K. `opusplan[1m]` (v2.1.265+) applies 1M to both plan and execute phases when the aliases are not already native 1M.
- Act before auto-compact: `/compact focus on the auth bug`; `/rewind` then Summarize from/up to here; `/autocompact 500k`; `/clear` when switching unrelated work. `/context` lists which `CLAUDE.md` / memory files actually loaded.

## Sources

- [Explore the context window](https://code.claude.com/docs/en/context-window) — accessed 2026-10-03
- [Model configuration](https://code.claude.com/docs/en/model-config) — accessed 2026-10-03
- [Manage sessions](https://code.claude.com/docs/en/sessions) — accessed 2026-09-12
- [Memory](https://code.claude.com/docs/en/memory) — accessed 2026-09-12
