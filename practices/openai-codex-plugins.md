---
id: openai-codex-plugins
title: Codex plugins and marketplaces
tags: [openai, plugins, skills, supply-chain]
status: active
updated: 2026-09-03
when_to_use: Installing or packaging Codex/ChatGPT plugins (.codex-plugin) instead of Cursor or Claude Code plugin formats
---

## Summary

A **Codex plugin** is a folder with `.codex-plugin/plugin.json` that bundles skills, optional MCP (`.mcp.json` / `.app.json`), and hooks. Public listings go to the **shared ChatGPT + Codex** directory. Local/repo marketplaces (`marketplace.json`) are a different trust root. This is not a Cursor plugin (`.cursor-plugin/`) and not a Claude Code plugin (`.claude-plugin/`). Installing a plugin runs its tools with the user’s privileges.

## Notes

- Manifest: kebab-case `name` + `version` + `description`; `skills` points at `skills/<id>/SKILL.md`. `@plugin-creator` (ChatGPT Work / Codex `$plugin-creator`) scaffolds the folder and can add a personal marketplace entry. MCP UI/auth stay on the server; the plugin only wires the connection (`.app.json` holds a `plugin_asdk_app…` id from ChatGPT developer mode).
- Marketplaces: repo `$REPO_ROOT/.agents/plugins/marketplace.json`, personal `~/.agents/plugins/marketplace.json`, plus a legacy-compatible `$REPO_ROOT/.claude-plugin/marketplace.json`. One catalog can list many plugins. ChatGPT desktop reads these; Codex CLI manages snapshots with `codex plugin marketplace add|list|upgrade|remove`.
- CLI: `codex plugin marketplace add` accepts `owner/repo[@ref]`, HTTPS/SSH Git URLs, or a local root; `--ref` pins; repeat `--sparse PATH` for Git sparse checkout. Then `codex plugin add PLUGIN@MARKETPLACE` (or `--marketplace`). `--json` emits `pluginId`, `authPolicy`, `installPolicy`. Cache path: `~/.codex/plugins/cache/$MARKETPLACE/$PLUGIN/$VERSION/` (`local` for local plugins). `/plugins` in the TUI lists and toggles enabled state.
- Treat remote marketplace Git as code entering a privileged runtime (`malicious-skills-supply-chain`). Pin `--ref` / commit SHAs for team catalogs. App-server reconnect after a drop is session recovery, not proof a side-effecting plugin tool is safe to replay (`agent-retry-idempotency`).

## Sources

- [Package your plugin](https://developers.openai.com/plugins/build/plugins) — accessed 2026-09-03
- [Codex CLI developer commands](https://developers.openai.com/codex/cli/reference.md) — accessed 2026-09-03
- [Codex CLI 0.153.0 release](https://github.com/openai/codex/releases) — accessed 2026-09-03
