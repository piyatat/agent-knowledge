---
id: cursor-rules-layers
title: Cursor rules — team, project, user, AGENTS.md
tags: [cursor, rules, agents-md, tokens]
status: active
updated: 2026-08-25
when_to_use: Authoring .cursor/rules/*.mdc, Team Rules, or nested AGENTS.md and deciding precedence vs alwaysApply
---

## Summary

Cursor injects **rules** into Agent (Chat) context. Four layers: **Team Rules** (dashboard) → **Project Rules** (`.cursor/rules/*.mdc`) → **User Rules** (Customize). `AGENTS.md` is the portable markdown alternative. Rules do **not** apply to Tab or Inline Edit (Cmd/Ctrl+K). They are guidance, not a sandbox.

## Notes

- Project rules **must** be `.mdc`. A plain `.md` in `.cursor/rules` is ignored (no frontmatter). Folders are allowed. Create via `/create-rule` or Customize → Rules.
- Frontmatter: `alwaysApply: true` always-on (globs/description ignored). `alwaysApply: false` + `globs` auto-attaches when matching files are in context. `false` + `description` only = agent-selected (“Apply Intelligently”). `false` with neither = `@`-mention only.
- Keep rules under **500 lines**; split; `@filename` instead of pasting code. Do not dump style guides a linter already covers. Check rules into git.
- **Team Rules** (Team/Enterprise): free-form text from the dashboard, optional globs, apply across repos. **Enable immediately** vs draft. **Enforce** = members cannot disable in Customize. Precedence on conflict: Team → Project → User. Do not treat enforced rules as the only security control.
- Nested `AGENTS.md` combines parent + child; **more specific directories win**. User Rules are global style/prefs for Agent Chat only.
- Import GitHub `.mdc` trees into `.cursor/rules/imported/<repoName>/`. Rule deeplinks (`cursor.com/link/rule` or `cursor://…/rule`) require user confirm; max URL 8,000 chars. Never put secrets in shared rule text.

## Sources

- [Cursor Rules](https://cursor.com/docs/rules.md) — accessed 2026-08-25
- [Customize Cursor](https://cursor.com/docs/customize-cursor) — accessed 2026-08-25
- [Deeplinks](https://cursor.com/docs/reference/deeplinks.md) — accessed 2026-08-25
