---
id: claude-code-plugins
title: Claude Code plugins and marketplaces
tags: [plugins, skills, claude, supply-chain]
status: active
updated: 2026-11-14
when_to_use: Packaging or installing Claude Code skills/hooks/MCP/LSP/mods as a plugin, or pinning engines["claude-code"] in plugin.json
---

## Summary

A **Claude Code plugin** is a directory (optional `.claude-plugin/plugin.json`) that bundles skills, agents, hooks, MCP, LSP, monitors, and (v2.1.287+) **mods**. Skills are namespaced `/plugin-name:skill`. This is not a Cursor plugin (`.cursor-plugin/` / Agent Plugins). Installing a plugin runs its hooks, MCP, and any mod with the user’s privileges — review the “Will install” list first.

## Notes

- Standalone `.claude/` is for personal/project iteration (`/hello`). Convert to a plugin when you need versioning or teammates. Test with `claude --plugin-dir ./my-plugin`. `claude plugin init` scaffolds `~/.claude/skills/<name>/` and auto-loads as `name@skills-dir` (no marketplace).
- Layout: only `plugin.json` lives under `.claude-plugin/`. At plugin root: `skills/`, `commands/` (legacy flat md), `agents/`, `hooks/hooks.json`, `.mcp.json`, `.lsp.json`, `monitors/`, `bin/` (PATH for Bash; **not** allowed via claude.ai org distribution), `settings.json`. A single-skill plugin may put `SKILL.md` at the root.
- Marketplaces: official `claude-plugins-official` is added on first interactive start (`/plugin install github@claude-plugins-official`). Community catalog is `anthropics/claude-plugins-community` (`@claude-community`); entries pin a commit SHA. Install scopes: user / project / local. Cloud sessions: `/plugin` may be unavailable — use `enabledPlugins` in `.claude/settings.json` or the desktop browser. v2.1.292+: `claude plugin install --marketplace <source>` adds the marketplace first (same policy checks as `claude plugin marketplace add`) then installs from it. `claude plugin` commands wait for managed settings on first run. Names longer than 256 characters are rejected.
- v2.1.295: `claude plugin install|enable|disable` and `marketplace add` **warn** when the settings file they write does not load. `claude plugin marketplace add` is **refused** if no plugin can be installed under that marketplace name. `/plugin` Errors tab no longer removes a failed marketplace (and its plugins) on Enter without asking. Marketplaces with large git submodules fetch **only** submodules that hold plugin files. `claude plugin validate` prints a README install line to paste when missing (never changes exit code, even `--strict`); rebound top-level `var` in a hooks module names the line and a fix.
- Official catalog includes LSP plugins (binary not bundled; no LSP in cloud sessions), prewired MCP (GitHub, Linear, …), `security-guidance` (`claude-code-security-guidance`), `claude-security` (`claude-code-security`), and workflow plugins. The Discover pane shows a **context-cost** estimate — plugins that ship always-on hooks/MCP tax every turn.
- Hooks from a plugin **stack** with the user’s hooks; neither replaces the other. Treat third-party marketplaces like `malicious-skills-supply-chain`. Cursor’s team marketplace is a different trust root (`cursor-plugins`).
- **Mods** (`claude-code-mods`): in-process JS/TS handlers that can draw UI and rewrite tool calls. `claude plugin validate` then also lists `hooks:` / `calls:`. `disableAllHooks` or org `allowManagedModsOnly` can stop the mod while leaving the rest of the plugin loaded.
- **v2.1.323** (2026-11-12): `engines["claude-code"]` in `plugin.json` is a version range. Plugins **outside** that range are not installed, updated, or loaded; install/update pick the **newest version that fits**. `claude plugin validate` type-checks a plugin’s TypeScript hooks module (each finding is a warning; `--strict` fails) and lists the `$` nouns a mod’s `engine.create` hook adds, withholds, or replaces. `claude plugin install --json` includes `unsetOptionCount` (how many `userConfig` options are still unset).
- **v2.1.325** (2026-11-13): plugin MCP bundles (`.mcpb`, `.dxt`) unpack under the **plugins directory**, not `.mcpb-cache` inside the plugin folder (read-only plugin trees load; a URL-fetched bundle downloads again once). Plugins from a remote marketplace that managed settings declare/enable/`prependPlugins`/`appendPlugins` count as the **organization’s**; `pluginDigests` is **deprecated and ignored**. `claude plugin validate` reports unsafe paths/links; nested `.claude/skills` in `--plugin-dir` plugins no longer load from a session started **above** them. Marketplace `ref` may be a full commit id (older clients cannot clone that pin).

## Sources

- [Create plugins](https://code.claude.com/docs/en/plugins) — accessed 2026-08-31
- [Discover and install plugins](https://code.claude.com/docs/en/discover-plugins) — accessed 2026-08-31
- [Plugin marketplaces](https://code.claude.com/docs/en/plugin-marketplaces) — accessed 2026-08-31
- [Plugins reference](https://code.claude.com/docs/en/plugins-reference) — accessed 2026-09-15
- [Mods overview](https://code.claude.com/docs/en/plugins/mods/overview) — accessed 2026-10-02
- [CHANGELOG.md (v2.1.292)](https://github.com/anthropics/claude-code/blob/main/CHANGELOG.md) — accessed 2026-10-06
- [v2.1.295 release notes](https://github.com/anthropics/claude-code/releases/tag/v2.1.295) — accessed 2026-10-08
- [v2.1.323 release notes](https://github.com/anthropics/claude-code/releases/tag/v2.1.323) — accessed 2026-11-12
- [CHANGELOG.md (v2.1.323)](https://github.com/anthropics/claude-code/blob/main/CHANGELOG.md) — accessed 2026-11-12
- [Claude Code changelog](https://code.claude.com/docs/en/changelog) — accessed 2026-11-14
- [v2.1.325 release notes](https://github.com/anthropics/claude-code/releases/tag/v2.1.325) — accessed 2026-11-14
