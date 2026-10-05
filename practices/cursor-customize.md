---
id: cursor-customize
title: Cursor Customize — scoped plugins, skills, and MCP
tags: [cursor, plugins, skills, ux]
status: active
updated: 2026-10-05
when_to_use: Installing or scoping plugins, skills, MCP, rules, subagents, commands, or hooks from the Customize sidebar
---

## Summary

**Customize** is the Cursor sidebar that installs and toggles extension pieces at **user**, **workspace**, or **team** scope. It is the UI over plugins, skills, MCP, rules, subagents, commands, and hooks — not a fifth chat mode (`cursor-agent-modes`) and not the plugin packaging format (`cursor-plugins`).

## Notes

- Open Customize from the sidebar. Filter by scope to see what is installed for you, this workspace, or the team. Add official and community plugins, connect MCP (including custom servers), and turn individual rules / skills / subagents / commands / hooks on or off without hopping settings pages.
- **Marketplace leaderboard** lists popular plugins, skills, and MCPs across the team and the community. One click adds an entry. Full catalog: cursor.com/marketplace. Community plugins/MCP: cursor.directory. A leaderboard rank is discovery, not a trust root (`mcp-registry-admission`, `malicious-skills-supply-chain`).
- Team MCP servers shared through the Default marketplace can be installed here for Agent Window, IDE, and CLI. Linking a Team MCP server does **not** enable it for every developer; each user may still authenticate (`cursor-plugins`).
- Plugin **canvases** are shared setup templates inside an installed plugin. Open them from Customize after install.
- Components you can add alone or via a plugin bundle: **Plugins** (rules + skills + subagents + commands + MCP + hooks), **Rules** / `AGENTS.md` (`cursor-rules-layers`), **Skills** (`skills-invocation-modes`), **Subagents** (`cursor-custom-subagents`), **Hooks** (`cursor-hooks-json`), **Commands** (`cursor-slash-commands`), plus MCP (`cursor-mcp-json`). Personal `~/.cursor/skills/` still need Sync Skills for Cloud Agents (`cursor-skills-cloud-sync`).

## Sources

- [Customize Cursor](https://cursor.com/docs/customize-cursor) — accessed 2026-10-05
- [Plugins](https://cursor.com/docs/plugins) — accessed 2026-10-05
- [Agent Skills](https://cursor.com/docs/skills) — accessed 2026-10-05
