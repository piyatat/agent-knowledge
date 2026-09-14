---
id: openai-codex-apps
title: Codex apps — ChatGPT connectors via /apps and $app-slug
tags: [openai, mcp, plugins, ux]
status: active
updated: 2026-09-14
when_to_use: Attaching a ChatGPT connector in Codex with /apps, or gating apps.* in config.toml
---

## Summary

**Codex apps** are ChatGPT **connectors** (GitHub, Slack, Drive, …) exposed as tools inside Codex. `/apps` inserts `$app-slug` into the prompt. Behind the flag `features.apps` (experimental). This is not an MCP Apps iframe (`mcp-apps-extension`), not a `.codex-plugin` (`openai-codex-plugins`), and not Cursor MCP Apps (`cursor-mcp-apps`).

## Notes

- CLI: type `/apps`, pick a connector, Codex inserts `$app-slug`. Custom clients call app-server `app/list` (`cursor`, `limit`, optional `threadId`, `forceRefetch`). Each row has `isAccessible` (account) vs `isEnabled` (`config.toml`). `app/list/updated` fires when accessible-apps or directory-apps finish loading. `threadId` snapshots `features.apps` for that thread.
- Config: `features.apps = true` to enable. `apps._default.enabled` / per-id `apps.<id>.enabled`. Tool gates: `destructive_enabled`, `open_world_enabled`, `default_tools_enabled`, `default_tools_approval_mode` (`auto` | `prompt` | `approve`), plus per-tool `apps.<id>.tools.<name>.enabled` / `approval_mode`. Destructive-hint app/MCP calls still prompt unless a read annotation wins (`openai-codex-granular-approvals`).
- Plugins may ship `.app.json` with a `plugin_asdk_app…` id from ChatGPT developer mode; the plugin only wires the connection. Treat connector results as untrusted (`prompt-injection-agent-defense`, `mcp-server-trust-failures`).
- `tool_suggest.disabled_tools` / `discoverables` can hide or allow suggestion of `type = "connector"` ids. Project `.codex/config.toml` cannot set `apps_mcp_product_sku` (host-owned). Do not put connector secrets in git.

## Sources

- [Slash commands in Codex CLI](https://developers.openai.com/codex/cli/slash-commands) — accessed 2026-09-14
- [App Server – Apps (connectors)](https://developers.openai.com/codex/app-server) — accessed 2026-09-14
- [Configuration Reference](https://developers.openai.com/codex/config-reference) — accessed 2026-09-14
- [Plugins (connectors vs plugins)](https://developers.openai.com/codex/plugins) — accessed 2026-09-14
