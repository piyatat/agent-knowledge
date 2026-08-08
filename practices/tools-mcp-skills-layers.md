---
id: tools-mcp-skills-layers
title: Tools vs MCP vs Skills (three layers)
tags: [mcp, skills, tools, architecture]
status: active
updated: 2026-08-08
when_to_use: Deciding whether to build a skill, an MCP server, or a local tool for an agent capability
---

## Summary

Tools are callable actions; MCP is how remote tools are discovered/served; Skills are on-demand playbooks. They compose—they are not rivals.

## Notes

- From the model’s view, MCP tools look like any other tools (name + schema + description).
- Skills ship procedure/judgment/reference with progressive disclosure (~metadata always; body only on match).
- Choose MCP when you need a live capability, auth boundary, or shared remote integration.
- Choose a Skill when the value is workflow text, checklists, or large reference that should stay cold until triggered.
- Skill `description` quality decides load/miss the same way tool descriptions decide selection.

## Sources

- [Tools vs MCP vs Skills](https://sujaltangde.hashnode.dev/tools-mcp-and-skills-what-each-one-actually-does) — accessed 2026-08-08
- [MCP Servers vs Agent Skills (Developers Digest)](https://www.developersdigest.tech/blog/mcp-servers-vs-agent-skills-2026) — accessed 2026-08-08
- [Skills vs MCP vs Tools (Agentmelt)](https://agentmelt.com/blog/ai-agent-skills-vs-mcp-vs-tools/) — accessed 2026-08-08
