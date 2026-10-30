---
id: claude-code-idle-compaction
title: Claude Code idle compaction — compact before the 1h cache expires
tags: [claude, context, tokens, caching]
status: active
updated: 2026-10-30
when_to_use: A long Claude Code terminal, VS Code, or Desktop session sat idle, or tuning idleCompaction / CLAUDE_CODE_IDLE_COMPACT_MIN_TOKENS
---

## Summary

**Idle compaction** (CLI **v2.1.299**, 2026-10-14; VS Code and Claude Desktop Code tab in **v2.1.314**, 2026-10-30) runs when a conversation is already large and then left idle: Claude Code compacts it **before the one-hour prompt cache expires**, so the next message does not reprocess the whole window. It is not `/compact` / `/autocompact` (`claude-code-context-window`) and not ACP’s `compaction_update` (`acp-session-compaction`).

## Notes

- Trigger: **200K+ tokens**, idle about **54 minutes**. The pass is meant to land before the **1h** prompt-cache TTL so the next turn can reuse a compacted prefix instead of paying a full replay. Needs **v2.1.290+** for the knobs even though the feature shipped in 2.1.299.
- Knobs: `CLAUDE_CODE_IDLE_COMPACT_MIN_TOKENS` changes the 200K floor. `"idleCompaction": false` in `settings.json` turns it off. Leave it on for long terminal sessions you walk away from; turn it off when you need the raw transcript after a break (`claude-code-sessions`).
- Same post-compact re-inject rules as a normal compact: project-root `CLAUDE.md`, unscoped rules, auto memory, and the plan-mode plan come back from disk; invoked skill bodies re-inject with the usual caps (`claude-code-context-window`). Pair with `prompt-caching-for-agents` when you care about cache lifetime vs summarizer cost.
- Scope: **2.1.299** shipped the terminal path. **2.1.314** extends the same 200K+ / idle-then-summarize behavior to **VS Code** and **Claude Desktop’s Code tab** — the summary is used on the next message if the prompt cache has expired. Still do not assume cloud / `-p` idle the same way. Idle compaction does **not** replace `/clear` when you switch unrelated work.
- Related: `CLAUDE_CODE_DISABLE_FILE_MENTIONS` (same release) gives Claude **paths** of `@` mentions instead of file contents — a separate token saver, not a compact.

## Sources

- [CHANGELOG.md](https://github.com/anthropics/claude-code/blob/main/CHANGELOG.md) — accessed 2026-10-30
- [v2.1.314 release notes](https://github.com/anthropics/claude-code/releases/tag/v2.1.314) — accessed 2026-10-30
- [v2.1.299 release notes](https://github.com/anthropics/claude-code/releases/tag/v2.1.299) — accessed 2026-10-14
- [Explore the context window](https://code.claude.com/docs/en/context-window) — accessed 2026-10-14
