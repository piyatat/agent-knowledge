---
id: openai-codex-plugins
title: Codex plugins and marketplaces
tags: [openai, plugins, skills, supply-chain]
status: active
updated: 2026-11-13
when_to_use: Installing or packaging Codex/ChatGPT plugins (.codex-plugin or root plugin.json) instead of Cursor or Claude Code plugin formats
---

## Summary

A **Codex/ChatGPT plugin** bundles skills, optional MCP, hooks, and assets. Prefer a **root `plugin.json`** (Agent Plugins schema) plus `mcp.json`; `.codex-plugin/plugin.json` remains a compatibility fallback (`@plugin-creator` still scaffolds that layout). Public listings go to the **shared ChatGPT + Codex** directory. Local/repo marketplaces (`marketplace.json`) are a different trust root. **Not** in the Codex **IDE extension**. Not a Cursor plugin (`.cursor-plugin/`) and not a Claude Code plugin (`.claude-plugin/`). Installing a plugin runs its tools with the user’s privileges.

## Notes

- Manifest: kebab-case `name` + `version` + `description`; `skills` points at `skills/<id>/SKILL.md`. OpenAI-specific presentation, registered MCP mappings, and hook settings live under `extensions.com.openai` in root `plugin.json`. `@plugin-creator` (ChatGPT Work / Codex `$plugin-creator`) scaffolds `.codex-plugin/plugin.json` plus optional `.mcp.json` / `.app.json` / `hooks/` and can add a personal marketplace entry. Don’t rename `.mcp.json` to portable `mcp.json` without adding a transport `type` per server. MCP UI/auth stay on the server (`.app.json` holds a `plugin_asdk_app…` id from ChatGPT developer mode).
- Surfaces: ChatGPT web/desktop/mobile (Chat and Work), Codex in the ChatGPT desktop app, and Codex CLI (`/plugins`). Desktop-only plugins can be discovered on the web but install only in the desktop app. Hooks are **not** supported in cloud-orchestrated ChatGPT Work (synced Work allows only admin-defined MCP hooks). API-key Codex sign-in can browse curated plugins; some OAuth connection flows are unavailable.
- Marketplaces: repo `$REPO_ROOT/.agents/plugins/marketplace.json`, personal `~/.agents/plugins/marketplace.json`, plus a legacy-compatible `$REPO_ROOT/.claude-plugin/marketplace.json`. Workspace admins can import/sync a GitHub marketplace. Codex CLI: `codex plugin marketplace add|list|upgrade|remove`. **0.169.0** marketplace **upgrade reuses Git objects already on disk**. `codex plugin add PLUGIN@MARKETPLACE`. Cache: `~/.codex/plugins/cache/$MARKETPLACE/$PLUGIN/$VERSION/`.
- Treat remote marketplace Git as code entering a privileged runtime (`malicious-skills-supply-chain`). Pin `--ref` / commit SHAs for team catalogs. Sign in with ChatGPT (beta) shares name/email/picture with the partner — it does **not** grant plugin data access; review the plugin’s permissions separately. App-server reconnect after a drop is session recovery, not proof a side-effecting plugin tool is safe to replay (`agent-retry-idempotency`).

## Sources

- [Plugins](https://developers.openai.com/codex/plugins) — accessed 2026-11-13
- [Package your plugin](https://developers.openai.com/plugins/build/plugins) — accessed 2026-11-13
- [Codex 0.169.0](https://github.com/openai/codex/releases/tag/rust-v0.169.0) — accessed 2026-11-13
- [Codex CLI developer commands](https://developers.openai.com/codex/cli/reference.md) — accessed 2026-09-03
