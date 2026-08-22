---
id: memory-files-vs-enforcement-hooks
title: Memory files vs enforcement hooks
tags: [memory, hooks, cursor, rules]
status: active
updated: 2026-08-22
when_to_use: Choosing CLAUDE.md/AGENTS.md memory versus a PreToolUse (or equivalent) hook that must actually block an action
---

## Summary

Project memory files are **context**, not configuration. Agents treat them as advice. If an action must be blocked regardless of what the model decides — including bypass permission modes — put it in a lifecycle **hook** that can deny the tool call.

## Notes

- Claude Code loads complementary memory at session start (managed / user / project `CLAUDE.md` or `.claude/CLAUDE.md`). Subdirectory `CLAUDE.md` and path-scoped `.claude/rules` load **on demand** when a matching file is read — not at launch, not on write.
- Keep root memory short (~200 lines). Move playbooks into skills; move path-specific conventions into `paths:` rules so they do not occupy every turn. After compaction, on-demand rules disappear until the matching file is read again.
- Hooks live in settings (`hooks` key), not in markdown. `PreToolUse` can `deny` / `ask` / `allow`; the most restrictive decision wins. A `deny` still applies in `bypassPermissions` / `--dangerously-skip-permissions`.
- Exit 0 on `PreToolUse` is **not** an allow — the normal permission flow still runs. Use structured `permissionDecision: "deny"` when policy must hard-stop.
- Do not implement “never rm -rf / never leak .env” only in CLAUDE.md. Prompt injection and instruction conflict will override advice; they will not override a deny hook.
- Cursor/AGENTS.md follows the same split: steering files for conventions; CI secret scanning, sandbox, and approval gates for must-never.

## Sources

- [Claude Code memory](https://code.claude.com/docs/en/memory) — accessed 2026-08-22
- [Claude Code hooks guide](https://code.claude.com/docs/en/hooks-guide) — accessed 2026-08-22
- [Which CLAUDE.md files actually load](https://dev.to/rulestack/which-claudemd-files-claude-code-actually-loads-and-in-what-order-3be0) — accessed 2026-08-22
