---
id: claude-code-output-styles
title: Claude Code output styles — role, tone, and format
tags: [claude, prompts, ux, tokens]
status: active
updated: 2026-09-09
when_to_use: Changing how Claude Code replies every turn, or authoring a custom output-styles markdown file
---

## Summary

**Output styles** change Claude Code’s **system prompt** (role, tone, default format). They do not add project facts — that is `CLAUDE.md` (`claude-code-memory`). Built-ins: Default, Proactive, Concise (v2.1.237+), Explanatory, Learning. This is not a skill (`claude-code-skills`) and not a permission mode (`claude-code-plan-mode`).

## Notes

- Pick via `/config` → Output style (writes `.claude/settings.local.json`), VS Code Output styles menu (v2.1.257+), or `"outputStyle": "Explanatory"` in a settings file (`claude-code-settings`). Standalone `/output-style` was removed in v2.1.91. From v2.1.251 a mid-session switch applies on the **next** message; older builds waited for `/clear` or a new session.
- Custom file: Markdown + frontmatter in `~/.claude/output-styles/`, project `.claude/output-styles/` (nearest-to-cwd wins on name clash), or managed policy. Fields: `name`, `description`, `keep-coding-instructions` (default **false** — custom styles **drop** built-in SWE instructions unless true), plugin-only `force-for-plugin`. Plugins ship styles under `output-styles/`. Restart the terminal CLI after editing a style file in-session.
- Proactive is stronger “just do it” guidance than auto mode and does **not** change permission prompts. Concise leads with the result but keeps full error/security/destructive confirmations. Explanatory/Learning add Insights (and Learning writes `TODO(human)`). Styles apply to the main thread and forks, **not** other subagents.
- Contrast `--append-system-prompt` (one-off append) and skills (task-scoped). Style text is cached after the first request; wordy styles raise output tokens.

## Sources

- [Output styles](https://code.claude.com/docs/en/output-styles) — accessed 2026-09-09
- [Claude Code settings](https://code.claude.com/docs/en/settings) — accessed 2026-09-09
- [What's new 2026-w34 — Concise style](https://code.claude.com/docs/en/whats-new/2026-w34) — accessed 2026-09-09
- [Modifying system prompts (Agent SDK)](https://code.claude.com/docs/en/agent-sdk/modifying-system-prompts) — accessed 2026-09-09
