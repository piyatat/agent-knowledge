---
id: agents-md-and-rules-budget
title: AGENTS.md vs Cursor rules — context budget
tags: [cursor, agents-md, rules, tokens]
status: active
updated: 2026-08-06
when_to_use: Writing project steering files or debugging instruction bloat
---

## Summary

Standing instructions are useful; **always-on walls of text** tax every turn. Keep a thin portable `AGENTS.md`, scope Cursor `.mdc` rules with globs, and link out to deep docs (including this knowledge repo) instead of inlining manuals.

## Notes

- **`AGENTS.md`**: portable, plain markdown; nested copies apply under that directory. Good default cross-tool source of truth.
- **`.cursor/rules/*.mdc`**: Cursor-specific activation (`alwaysApply`, `globs`, agent-requested). Use for scoped conventions, not a second full copy of AGENTS.md.
- Avoid stacking many `alwaysApply: true` rules — each burns context every request; models start averaging/partially ignoring them.
- Practical sizing heuristics from 2026 guides (treat as guidance, not hard law):
  - Always-on / AGENTS body: aim roughly **hundreds to low thousands of tokens**, not novels
  - Prefer short imperative rules; long files get treated as docs and ignored
- Put durable decisions and runbooks in a **lookup corpus** (this repo) and link from AGENTS.md: “see agent-knowledge `practices/…`”.

## Sources

- [Cursor rules tutorial (AI Tools Guidebook)](https://aitoolsguidebook.com/en/articles/cursor-rules-tutorial/) — accessed 2026-08-06
- [Cursor Rules complete guide (Vibe Coding Academy)](https://www.vibecodingacademy.ai/blog/cursor-rules-complete-guide) — accessed 2026-08-06
- [AGENTS.md vs .cursorrules vs Skills (BuildBetter)](https://blog.buildbetter.ai/agents-md-vs-cursorrules-vs-claude-skills-2026-comparison/) — accessed 2026-08-06
- [AGENTS.md vs CLAUDE.md vs Cursor Rules (CoderSera)](https://codersera.com/blog/agents-md-vs-claude-md-vs-cursor-rules-comparison-2026/) — accessed 2026-08-06
