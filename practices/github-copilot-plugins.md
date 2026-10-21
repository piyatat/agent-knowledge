---
id: github-copilot-plugins
title: GitHub Copilot plugins — plugin.json, marketplaces, Agent Plugins 1.0
tags: [github, plugins, skills, supply-chain]
status: active
updated: 2026-10-21
when_to_use: Packaging or installing a Copilot plugin (CLI, cloud agent, or Copilot app), or replacing copilot plugins --kind flags
---

## Summary

A Copilot **plugin** is a directory with `plugin.json` that bundles custom agents, skills, hooks, MCP, and LSP. Install from a marketplace, a repo, or a local path. Surfaces: Copilot CLI, cloud agent, and the Copilot app. Not a Cursor `.cursor-plugin` (`cursor-plugins`), not Claude `.claude-plugin` (`claude-code-plugins`), not Codex `.codex-plugin` (`openai-codex-plugins`). Installing a plugin runs its tools with the user’s (or the cloud sandbox’s) privileges.

## Notes

- Two formats. **Agent Plugins 1.0**: set `$schema` to `https://agent-plugins.org/schemas/1.0.0/plugin.schema.json`. Skills from `skills/`, MCP from root `mcp.json` (paths not configurable). Copilot-only extras live under `com.github.copilot/` (`agents/`, `commands/`, `rules/`, `hooks/`, `lsp.json`) so other clients can ignore them. Prefer 1.0 for new portable skills+MCP. **Legacy** (no `$schema`): configurable paths; MCP in `.mcp.json`, `.github/mcp.json`, or manifest `mcpServers`. Adding `$schema` changes discovery — existing plugins without it stay legacy.
- CLI: `copilot plugin install SPEC` / `/plugin install`, or declarative `enabledPlugins` in `~/.copilot/settings.json` or `.github/copilot/settings.json`. Also `uninstall`, `list`, `update` / `--all`, `enable` / `disable`, `marketplace add|list|browse|remove`. **`copilot plugins` (plural) is a legacy alias of `copilot plugin`** and now lists **plugins only** — not MCP, skills, instructions, or LSP. Use `copilot mcp`, `copilot skill add|list|enable|disable|remove`, `copilot instruction list`, `copilot lsp list` (inspect-only). Retired: `--kind` / `--scope` / `--mcp` / `--skill` on `copilot plugins`, and `copilot plugins install --skill`. `--json` on plugin/marketplace list emits a flat array. `PLUGINS_DASHBOARD=false` disables the dashboard **and** non-interactive `copilot plugin`. Cloud agent: only repo `.github/copilot/settings.json` (`enabledPlugins`, optional `extraKnownMarketplaces`). Copilot app: Customize → Plugins.
- Default marketplaces include `copilot-plugins` and `awesome-copilot`. A marketplace is a `marketplace.json` listing versioned plugin paths (GitHub repo, other git host, or filesystem). Enterprise admins can pin extra marketplaces and auto-install plugins.
- CLI **1.0.97:** remote marketplace and plugin fetches **retry once with the signed-in GitHub token** after HTTPS auth fails. Skills and custom agents from `--plugin-dir` reach autocomplete and invocation. After `--resume`, hooks rebuild from the **enabled** plugin list — repository-local marketplace hooks keep running; hooks from plugins you disabled no longer come back.
- CLI **1.0.99-1:** `copilot plugin install "ghapp://air/install?…"` installs **verified** Skills and plugins from GitHub install links. Treat the URL as code you chose to run (`malicious-skills-supply-chain`); prefer pinned marketplace versions when you do not need the verified-link path.
- CLI **1.0.102** (2026-10-21): marketplaces accept **git-subdir** sources (plugin lives in a subdirectory of the git repo, not only the repo root) and **long plugin descriptions**. Org plugin preparation no longer blocks sending chat messages. Still treat marketplace git as code (`malicious-skills-supply-chain`).
- Treat marketplace git as code entering a privileged runtime (`malicious-skills-supply-chain`). Prefer pinned versions. Skills inside a plugin still follow `github-copilot-skills` (`allowed-tools` / `shell` risk). Hooks inside a plugin follow `github-copilot-hooks`. A plugin can also ship **dynamic workflows** (`github-copilot-dynamic-workflows`); teammates install the plugin instead of copying `.github/extensions/`.

## Sources

- [About GitHub Copilot plugins](https://docs.github.com/en/copilot/concepts/agents/about-plugins) — accessed 2026-09-10
- [Creating a plugin for GitHub Copilot CLI](https://docs.github.com/en/copilot/how-tos/copilot-cli/customize-copilot/plugins-creating) — accessed 2026-09-10
- [GitHub Copilot CLI plugin reference](https://docs.github.com/en/copilot/reference/copilot-cli-reference/cli-plugin-reference) — accessed 2026-09-10
- [GitHub Copilot CLI command reference](https://docs.github.com/en/copilot/reference/copilot-cli-reference/cli-command-reference) — accessed 2026-09-16
- [Using dynamic workflows](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/use-dynamic-workflows) — accessed 2026-10-02
- [copilot-cli 1.0.97](https://github.com/github/copilot-cli/blob/main/changelog.md) — accessed 2026-10-13
- [copilot-cli 1.0.99-1](https://github.com/github/copilot-cli/releases/tag/v1.0.99-1) — accessed 2026-10-15
- [copilot-cli 1.0.102](https://github.com/github/copilot-cli/releases/tag/v1.0.102) — accessed 2026-10-21
