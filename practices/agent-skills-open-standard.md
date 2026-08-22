---
id: agent-skills-open-standard
title: Agent Skills open standard (SKILL.md)
tags: [skills, mcp, tokens, architecture]
status: active
updated: 2026-08-22
when_to_use: Authoring portable SKILL.md packages or implementing skill discovery across Cursor/Claude/Codex-class agents
---

## Summary

Agent Skills is an open folder format: a directory with required `SKILL.md` (YAML frontmatter + markdown body) plus optional `scripts/`, `references/`, and `assets/`. Agents load **name + description** at startup (~100 tokens), the body on activation, and extra files only as needed.

## Notes

- Required frontmatter: `name` (1–64 chars, `[a-z0-9-]`, no leading/trailing/consecutive hyphens, **must match directory name**) and `description` (1–1024 chars, what **and** when). Optional: `license`, `compatibility`, `metadata`, experimental `allowed-tools`.
- Discovery paths commonly include `.agents/skills/` (cross-client) and client-specific `skills/` trees. Validate with `skills-ref validate`.
- Progressive disclosure: keep `SKILL.md` under ~500 lines / prefer <5000 tokens in the body; push long refs one level deep (`references/FOO.md`). Deep nested chains waste activation context.
- Description is the entire dispatch surface at rest — vague “helps with PDFs” misses; keyword-rich when-to-use text is the trigger. Complementary to (not a replacement for) MCP: skills teach procedure, MCP exposes live tools.
- Bundled `scripts/` are real code the agent may execute — sandbox them. `allowed-tools` is experimental and client-dependent; do not assume it is an enforcement boundary.
- Skills compose with code-mode: saving a working wrapper plus `SKILL.md` turns an ad-hoc script into a reusable capability.

## Sources

- [Agent Skills specification](https://agentskills.io/specification) — accessed 2026-08-22
- [Agent Skills overview](https://agentskills.io/home) — accessed 2026-08-22
- [Equipping agents with Agent Skills (Anthropic)](https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills) — accessed 2026-08-22
