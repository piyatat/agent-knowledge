---
id: cursor-custom-subagents
title: Cursor custom subagents (.cursor/agents)
tags: [cursor, subagent, orchestration, isolation]
status: active
updated: 2026-08-25
when_to_use: Adding markdown subagents under .cursor/agents, choosing Explore/Bash/Browser vs custom, or /in-cloud handoff
---

## Summary

Cursor **subagents** run in their own context window and return a result to the parent. Built-ins (**Explore**, **Bash**, **Browser**) exist to keep noisy search/shell/DOM out of the main chat. Custom ones are markdown + YAML in `.cursor/agents/` (project) or `~/.cursor/agents/` (user). Use a **Skill** for one-shot repeatable prompts; use a subagent when you need isolation, parallelism, or a different model.

## Notes

- Also loads `.claude/agents/` and `.codex/agents/` for compatibility. On name clash: project beats user; `.cursor/` beats Claude/Codex dirs.
- Frontmatter: `name` (kebab-case), `description` (Task-tool hint; “use proactively” encourages auto-delegate), `model` (`inherit` or a model id, optional `[effort=high,context=300k]`), `readonly`, `is_background`. Team/plan limits may fall back to another model.
- Invoke: parent auto-delegates, `/verifier …`, or natural language. Parallel = multiple Task calls in one turn. Resume via returned agent id.
- Isolation: default is the **parent checkout** (parallel editors can clobber). Ask for isolated copies → worktree or dedicated cloud VM+branch; parent merges. `/in-cloud` runs the next task as a cloud subagent; `/babysit` drives a PR on a cloud VM. Cloud MCP comes from **team** cursor.com/agents config, not the local `mcp.json`.
- Built-ins: Explore uses a faster model for many searches; Bash isolates verbose command output; Browser filters DOM/screenshots. No config required.
- Parent must pack the brief — children do not see prior chat (`subagent-context-isolation`).

## Sources

- [Cursor Subagents](https://cursor.com/docs/subagents) — accessed 2026-08-25
- [Agent mode help](https://cursor.com/help/ai-features/agent) — accessed 2026-08-25
- [Customize Cursor](https://cursor.com/docs/customize-cursor) — accessed 2026-08-25
