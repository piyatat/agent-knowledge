---
id: github-copilot-plugins
title: GitHub Copilot plugins — plugin.json, marketplaces, Agent Plugins 1.0
tags: [github, plugins, skills, supply-chain]
status: active
updated: 2026-09-10
when_to_use: Packaging or installing a Copilot plugin (CLI, cloud agent, or Copilot app), or choosing Agent Plugins 1.0 vs the legacy manifest
---

## Summary

A Copilot **plugin** is a directory with `plugin.json` that bundles custom agents, skills, hooks, MCP, and LSP. Install from a marketplace, a repo, or a local path. Surfaces: Copilot CLI, cloud agent, and the Copilot app. Not a Cursor `.cursor-plugin` (`cursor-plugins`), not Claude `.claude-plugin` (`claude-code-plugins`), not Codex `.codex-plugin` (`openai-codex-plugins`). Installing a plugin runs its tools with the user’s (or the cloud sandbox’s) privileges.

## Notes

- Two formats. **Agent Plugins 1.0**: set `$schema` to `https://agent-plugins.org/schemas/1.0.0/plugin.schema.json`. Skills from `skills/`, MCP from root `mcp.json` (paths not configurable). Copilot-only extras live under `com.github.copilot/` (`agents/`, `commands/`, `rules/`, `hooks/`, `lsp.json`) so other clients can ignore them. Prefer 1.0 for new portable skills+MCP. **Legacy** (no `$schema`): configurable paths; MCP in `.mcp.json`, `.github/mcp.json`, or manifest `mcpServers`. Adding `$schema` changes discovery — existing plugins without it stay legacy.
- CLI: `copilot plugin install SPEC` / `/plugin install`, or declarative `enabledPlugins` in `~/.copilot/settings.json` or `.github/copilot/settings.json`. Also `uninstall`, `list`, `update` / `--all`, `enable` / `disable`, `marketplace add|list|browse|remove`. Inspect discovery with `copilot plugins list` (grouped by kind and scope). Cloud agent: only repo `.github/copilot/settings.json` (`enabledPlugins`, optional `extraKnownMarketplaces`). Copilot app: Customize → Plugins.
- Default marketplaces include `copilot-plugins` and `awesome-copilot`. A marketplace is a `marketplace.json` listing versioned plugin paths (GitHub repo, other git host, or filesystem). Enterprise admins can pin extra marketplaces and auto-install plugins.
- Treat marketplace git as code entering a privileged runtime (`malicious-skills-supply-chain`). Prefer pinned versions. Skills inside a plugin still follow `github-copilot-skills` (`allowed-tools` / `shell` risk). Hooks inside a plugin follow `github-copilot-hooks`.

## Sources

- [About GitHub Copilot plugins](https://docs.github.com/en/copilot/concepts/agents/about-plugins) — accessed 2026-09-10
- [Creating a plugin for GitHub Copilot CLI](https://docs.github.com/en/copilot/how-tos/copilot-cli/customize-copilot/plugins-creating) — accessed 2026-09-10
- [GitHub Copilot CLI plugin reference](https://docs.github.com/en/copilot/reference/copilot-cli-reference/cli-plugin-reference) — accessed 2026-09-10
- [GitHub Copilot CLI command reference](https://docs.github.com/en/copilot/reference/copilot-cli-reference/cli-command-reference) — accessed 2026-09-10
