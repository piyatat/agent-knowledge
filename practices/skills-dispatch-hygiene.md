---
id: skills-dispatch-hygiene
title: Skill description and dispatch hygiene
tags: [skills, cursor, dispatch, tokens]
status: active
updated: 2026-08-09
when_to_use: Authoring Cursor/Claude skills so they trigger reliably without bloating always-on context
---

## Summary

Skill discovery hinges on the description field (~100 tokens). Write concrete triggers and anti-triggers; keep SKILL.md lean and push references to progressive files.

## Notes

- Include WHAT and WHEN in third person; list user phrases that should fire the skill.
- Vague descriptions cause silent misses; overlapping skills cause wrong loads.
- Keep bodies under ~500 lines; move long refs to linked files loaded only when needed.
- `disable-model-invocation: true` for explicit slash/command skills; omit only when ambient auto-invoke is desired.
- Project AGENTS.md/rules should name critical skills so dispatch is not pure luck.

## Sources

- [MCP Servers vs Agent Skills — progressive disclosure](https://www.developersdigest.tech/blog/mcp-servers-vs-agent-skills-2026) — accessed 2026-08-09
- [Tools vs MCP vs Skills](https://sujaltangde.hashnode.dev/tools-mcp-and-skills-what-each-one-actually-does) — accessed 2026-08-09
- [Claude Code skills architecture / progressive loading](https://www.mindstudio.ai/blog/claude-code-skills-architecture-progressive-context-loading) — accessed 2026-08-09
