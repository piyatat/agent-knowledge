---
id: claude-code-plugins
title: Claude Code plugins and marketplaces
tags: [plugins, skills, claude, supply-chain]
status: active
updated: 2026-08-31
when_to_use: Packaging or installing Claude Code skills/hooks/MCP/LSP as a plugin instead of loose .claude/ files
---

## Summary

A **Claude Code plugin** is a directory (optional `.claude-plugin/plugin.json`) that bundles skills, agents, hooks, MCP, LSP, and monitors. Skills are namespaced `/plugin-name:skill`. This is not a Cursor plugin (`.cursor-plugin/` / Agent Plugins). Installing a plugin runs its hooks and MCP with the user’s privileges — review the “Will install” list first.

## Notes

- Standalone `.claude/` is for personal/project iteration (`/hello`). Convert to a plugin when you need versioning or teammates. Test with `claude --plugin-dir ./my-plugin`. `claude plugin init` scaffolds `~/.claude/skills/<name>/` and auto-loads as `name@skills-dir` (no marketplace).
- Layout: only `plugin.json` lives under `.claude-plugin/`. At plugin root: `skills/`, `commands/` (legacy flat md), `agents/`, `hooks/hooks.json`, `.mcp.json`, `.lsp.json`, `monitors/`, `bin/` (PATH for Bash; **not** allowed via claude.ai org distribution), `settings.json`. A single-skill plugin may put `SKILL.md` at the root.
- Marketplaces: official `claude-plugins-official` is added on first interactive start (`/plugin install github@claude-plugins-official`). Community catalog is `anthropics/claude-plugins-community` (`@claude-community`); entries pin a commit SHA. Install scopes: user / project / local. Cloud sessions: `/plugin` may be unavailable — use `enabledPlugins` in `.claude/settings.json` or the desktop browser.
- Official catalog includes LSP plugins (binary not bundled; no LSP in cloud sessions), prewired MCP (GitHub, Linear, …), `security-guidance`, and workflow plugins. The Discover pane shows a **context-cost** estimate — plugins that ship always-on hooks/MCP tax every turn.
- Hooks from a plugin **stack** with the user’s hooks; neither replaces the other. Treat third-party marketplaces like `malicious-skills-supply-chain`. Cursor’s team marketplace is a different trust root (`cursor-plugins`).

## Sources

- [Create plugins](https://code.claude.com/docs/en/plugins) — accessed 2026-08-31
- [Discover and install plugins](https://code.claude.com/docs/en/discover-plugins) — accessed 2026-08-31
- [Plugin marketplaces](https://code.claude.com/docs/en/plugin-marketplaces) — accessed 2026-08-31
- [Plugins reference](https://code.claude.com/docs/en/plugins-reference) — accessed 2026-08-31
