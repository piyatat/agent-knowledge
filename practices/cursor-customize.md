---
id: cursor-customize
title: Cursor Customize — scoped plugins, skills, and MCP
tags: [cursor, plugins, skills, ux]
status: active
updated: 2026-10-12
when_to_use: Installing or scoping plugins, skills, MCP, rules, subagents, commands, or hooks from the Customize sidebar
---

## Summary

**Customize** is the Cursor sidebar that installs and toggles extension pieces at **user**, **workspace**, or **team** scope. It is the UI over plugins, skills, MCP, rules, subagents, commands, and hooks — not a fifth chat mode (`cursor-agent-modes`) and not the plugin packaging format (`cursor-plugins`). IDE **3.24** routes MCP / plugins / rules / hooks settings here and shows MCP **auth status** on each server.

## Notes

- Open Customize from the sidebar. Filter by scope to see what is installed for you, this workspace, or the team. Add official and community plugins, connect MCP (including custom servers), and turn individual rules / skills / subagents / commands / hooks on or off without hopping settings pages.
- **Marketplace leaderboard** lists popular plugins, skills, and MCPs across the team and the community. One click adds an entry. Full catalog: cursor.com/marketplace. Community plugins/MCP: cursor.directory. A leaderboard rank is discovery, not a trust root (`mcp-registry-admission`, `malicious-skills-supply-chain`).
- Team MCP servers shared through the Default marketplace can be installed here for Agent Window, IDE, and CLI. Linking a Team MCP server does **not** enable it for every developer; each user may still authenticate (`cursor-plugins`).
- MCP rows show a **yellow status dot** when the server needs sign-in, is connecting, or is degraded. Cloud MCP sign-in completes through a **local browser redirect** (up to **15 minutes** for consent); Customize refreshes auth status when you return. Removing a cloud account asks for confirmation. Servers that reject localhost redirects can finish via a Cursor-hosted callback (`cursor-mcp-json`).
- Plugin pages that this Cursor version cannot install show a **disabled Install** button with a reason. Pages list the author’s declared **version**, homepage, and repository. Plugin **canvases** are shared setup templates inside an installed plugin — open them from Customize after install.
- Components you can add alone or via a plugin bundle: **Plugins** (rules + skills + subagents + commands + MCP + hooks), **Rules** / `AGENTS.md` (`cursor-rules-layers`), **Skills** (`skills-invocation-modes`), **Subagents** (`cursor-custom-subagents`), **Hooks** (`cursor-hooks-json`), **Commands** (`cursor-slash-commands`), plus MCP (`cursor-mcp-json`). Personal `~/.cursor/skills/` still need Sync Skills for Cloud Agents (`cursor-skills-cloud-sync`).

## Sources

- [Customize Cursor](https://cursor.com/docs/customize-cursor) — accessed 2026-10-12
- [Cursor IDE release notes](https://cursor.com/docs/release-notes/ide) — accessed 2026-10-12
- [Plugins](https://cursor.com/docs/plugins) — accessed 2026-10-12
- [Agent Skills](https://cursor.com/docs/skills) — accessed 2026-10-12
- [Cursor MCP](https://cursor.com/docs/mcp) — accessed 2026-10-12
