---
id: github-copilot-plugin-only-customizations
title: Copilot plugin-only customizations — enterprise managed setting
kind: knowledge
tags: [github, plugins, governance, mcp]
status: active
updated: 2026-11-17
when_to_use: Requiring Copilot skills, agents, hooks, MCP, or executable extensions to come from plugins or managed settings
---

## Summary

On **2026-11-16** GitHub announced `strictPluginOnlyCustomization` for enterprise-managed Copilot settings. It blocks **standalone** user and project customizations in the categories you select. Plugins that pass your other policy, and managed settings, still apply. This is for GitHub Enterprise Cloud members who have a Copilot Business or Copilot Enterprise seat from the enterprise or one of its organizations (`github-copilot-managed-permissions`).

## Notes

- **Categories.** The changelog lists five: skills, custom agents, hooks, MCP servers, and executable Copilot extensions. You can restrict all five or a subset (for example MCP servers and extensions only). “Extensions” here means executable canvas providers, not VS Code Marketplace extensions.
- **What it does not do.** Plugin-only is not “enterprise-managed plugins only,” and it is not a marketplace allowlist. Pair it with `strictKnownMarketplaces` to limit marketplace sources (that key also disables the built-in marketplaces; an empty array is a full lockdown). `extraKnownMarketplaces` and `enabledPlugins` still supply and require or block specific plugins (`github-copilot-plugins`).
- **Shape.** The changelog names the setting. The enterprise managed-settings reference fetched the same day did **not** yet document the key or the JSON for selecting categories. Do not invent the value shape; confirm it in current docs or the managed-settings UI before shipping a file.
- **Adjacent locks that are documented.** `allowedMcpServers` / `deniedMcpServers` still govern which MCP servers may run (deny wins; the built-in GitHub MCP server is exempt from deny). Those lists apply to user and repository settings, not to MCP servers declared inside repository custom-agent profiles — use the Copilot firewall for those domains.

## Sources

- [Control where GitHub Copilot customizations come from](https://github.blog/changelog/2026-11-16-control-where-github-copilot-customizations-come-from/) — accessed 2026-11-17
- [Enterprise managed settings](https://docs.github.com/en/copilot/reference/enterprise-administrators/enterprise-managed-settings) — accessed 2026-11-17
- [Managing plugin marketplaces and plugins](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-enterprise/use-managed-settings/manage-plugin-marketplaces-and-plugins) — accessed 2026-11-17
