---
id: cursor-plugins
title: Cursor plugins and team marketplaces
tags: [cursor, plugins, skills, supply-chain]
status: active
updated: 2026-08-24
when_to_use: Packaging or installing rules/skills/MCP/hooks as a Cursor or Agent Plugin instead of loose files
---

## Summary

A **plugin** is a Git-distributed bundle: skills and MCP (both formats) plus, for Cursor Plugins, rules, agents, commands, hooks, and variables. Official marketplace listings are open source and manually reviewed; community catalogs and team repos are not the same trust root. Installation still grants the plugin’s tools — review before Required/Default On.

## Notes

- **Agent Plugins** (open standard): root `plugin.json` with `$schema` `https://agent-plugins.org/schemas/1.0.0/plugin.schema.json`; skills + MCP. Spec-conformant plugins load in Cursor unchanged.
- **Cursor Plugins**: `.cursor-plugin/plugin.json` (name required); extra Cursor-only components. Local iterate: `~/.cursor/plugins/local/<name>` or a symlink; reload the window. Publish: cursor.com/marketplace/publish.
- Install from Customize (user or project scope) or cursor.com/marketplace. Community plugins/MCP: cursor.directory. Manifest detection is automatic (`plugin.json` vs `.cursor-plugin/plugin.json`).
- Team marketplaces (Teams: 1, Enterprise: unlimited) import a GitHub repo from Dashboard → Plugins. Modes: **Default Off** (opt-in), **Default On** (opt-out), **Required** (cannot uninstall). Access can be limited to Organization Groups (SCIM).
- Default team marketplace can link Team MCP servers already used by Cloud Agents so IDE/CLI users can install them — linking does not auto-enable for every developer. Removing a linked MCP plugin can delete the Team MCP server for local **and** cloud; read the confirm dialog.
- Auto Refresh (GitHub App) re-indexes at most every 10 minutes. Marketplace review ≠ runtime allowlist: plugins still obey MCP allow/block lists; blocked servers install but cannot call. Treat third-party plugins as code you chose to run.

## Sources

- [Cursor Plugins](https://cursor.com/docs/plugins.md) — accessed 2026-08-24
- [Plugins help](https://cursor.com/help/customization/plugins.md) — accessed 2026-08-24
- [Agent Plugins standard](https://agent-plugins.org) — accessed 2026-08-24
