---
id: cursor-ignore-files
title: .cursorignore vs .cursorindexingignore
tags: [cursor, indexing, privacy, filesystem]
status: active
updated: 2026-08-26
when_to_use: Blocking Agent/Tab/@ access to secrets, or keeping large generated files out of semantic search without hiding them
---

## Summary

**`.cursorignore`** is a hard block: listed paths are invisible to Agent, Tab, Inline Edit, and `@` mentions. **`.cursorindexingignore`** is index-only: files stay readable and `@`-mentionable but drop out of codebase search. Neither is a security boundary for **terminal or MCP** tools.

## Notes

- Syntax is `.gitignore`. Cursor also honors `.gitignore` plus a built-in default ignore list (lockfiles, `node_modules/`, `.env*`, media, binaries) for **indexing**. Re-include with `!` in `.cursorignore`.
- Use `.cursorignore` for secrets (`**/.env*`, keys, `credentials.json`). Official docs: complete protection is **not** guaranteed because of LLM unpredictability — still keep secrets out of the repo.
- Use `.cursorindexingignore` for huge generated/vendored trees you may still `@` occasionally. Prefer this over `.cursorignore` when the user must be able to attach the file.
- Hierarchical ignore: Settings → Indexing → Ignore Files → Hierarchical Cursor Ignore (moved from Features → Editor in 3.11) walks parent `.cursorignore` files. Global ignore patterns live in user settings (empty by default).
- Negation cannot re-include a file under a directory excluded with `*`; excluded dirs are not traversed (same as gitignore). Test with `git check-ignore -v`.
- Sandbox always write-protects `.cursorignore` itself; do not expect the agent to edit it away.

## Sources

- [Cursor ignore file](https://cursor.com/docs/reference/ignore-file) — accessed 2026-08-26
- [sandbox.json reference](https://cursor.com/docs/reference/sandbox.md) — accessed 2026-08-26
- [@ mentions and context (help)](https://cursor.com/help/customization/context.md) — accessed 2026-08-26
