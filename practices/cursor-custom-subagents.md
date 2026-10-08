---
id: cursor-custom-subagents
title: Cursor custom subagents (.cursor/agents)
tags: [cursor, subagent, orchestration, isolation]
status: active
updated: 2026-10-08
when_to_use: Adding markdown subagents under .cursor/agents, choosing Explore/Bash/Browser vs custom, or /in-cloud / /autopilot handoff
---

## Summary

Cursor **subagents** run in their own context window and return a result to the parent. Built-ins (**Explore**, **Bash**, **Browser**) exist to keep noisy search/shell/DOM out of the main chat. Custom ones are markdown + YAML in `.cursor/agents/` (project) or `~/.cursor/agents/` (user). Use a **Skill** for one-shot repeatable prompts; use a subagent when you need isolation, parallelism, or a different model. Editor, CLI, and Cloud Agents all spawn them.

## Notes

- Also loads `.claude/agents/` and `.codex/agents/` for compatibility. On name clash: project beats user; `.cursor/` beats Claude/Codex dirs.
- Frontmatter: `name` (kebab-case), `description` (Task-tool hint; “use proactively” encourages auto-delegate), `model` (`inherit` or a model id), `readonly`, `is_background`. The parent picker (including Auto) does **not** apply to the child. Named third-party models bill the Other Models pool (Teams/Enterprise: Cursor Token Rate too). Team admins can block models.
- Invoke: parent auto-delegates, `/verifier …`, or natural language. Parallel = multiple Task calls in one turn. **Foreground** blocks until done; **background** returns immediately. Resume via returned agent id (background agents write state as they run).
- Isolation: default is the **parent checkout** (parallel editors can clobber). Ask for isolated copies → worktree or dedicated cloud VM+branch; parent merges. `/in-cloud` runs the **next** task as a cloud subagent (own VM+branch). `/autopilot` (or the PR pill) hands a pull request to a cloud subagent to iterate toward merge. Older `/babysit` wording is gone from current docs. Cloud MCP comes from **team** cursor.com/agents config, not the local `mcp.json`. Cloud subagents start from the Agents Window (`cursor-agents-window`). CLI `&` transfers **this** thread instead (`cursor-cli-cloud-handoff`).
- Built-ins: Explore uses a faster model for many searches; Bash isolates verbose command output; Browser filters DOM/screenshots. No config required.
- Parent must pack the brief — children do not see prior chat (`subagent-context-isolation`).

## Sources

- [Subagents](https://cursor.com/docs/subagents) — accessed 2026-10-08
- [Agents Window](https://cursor.com/docs/agent/agents-window) — accessed 2026-09-13
- [Customize Cursor](https://cursor.com/docs/customize-cursor) — accessed 2026-10-05
