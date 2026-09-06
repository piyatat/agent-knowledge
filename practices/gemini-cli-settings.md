---
id: gemini-cli-settings
title: Gemini CLI settings.json — scopes and system overrides
tags: [gemini, config, governance, security]
status: active
updated: 2026-09-06
when_to_use: Choosing user vs workspace vs system Gemini settings, or enforcing YOLO/sandbox/MCP allowlists
---

## Summary

Gemini CLI **settings** live in `settings.json` (and a system **defaults** file). Interactive `/settings` edits them. They are not `GEMINI.md` (`gemini-cli-gemini-md`) and not extension manifests (`gemini-cli-extensions`). Cloud/enterprise hosts should treat **system overrides** as the last word.

## Notes

- Four layers, low → high for **scalars** (theme, auth): `system-defaults.json` → user `~/.gemini/settings.json` → workspace `.gemini/settings.json` → **system overrides** `settings.json` (Linux `/etc/gemini-cli/settings.json`, macOS `/Library/Application Support/GeminiCli/settings.json`, Windows `C:\ProgramData\gemini-cli\settings.json`, or `GEMINI_CLI_SYSTEM_SETTINGS_PATH`). Arrays (`includeDirectories`) concatenate in that order; objects (`mcpServers`) merge, same key = higher layer wins.
- Users can point `GEMINI_CLI_SYSTEM_SETTINGS_PATH` elsewhere — enterprises wrap the binary so the var is always set. Isolate shared-CI state with `GEMINI_CLI_HOME=/tmp/job` (creates `$GEMINI_CLI_HOME/.gemini`).
- Safety keys: `general.defaultApprovalMode` is `default` | `auto_edit` | `plan` — **YOLO is CLI-only** (`--yolo` / `--approval-mode=yolo`) and `security.disableYoloMode` blocks it. `security.disableAlwaysAllow`, `security.folderTrust.enabled`, `security.blockGitExtensions` / `allowedExtensions`. Enforce sandbox with `tools.sandbox` (`gemini-cli-sandboxing`). MCP: define servers **and** `mcp.allowed` or users can add extras (`gemini-cli-mcp`).
- Other knobs agents hit: `context.fileName` / `discoveryMaxDirs` / ignore flags; `tools.truncateToolOutputThreshold` (default 40000); `model.compressionThreshold` (default 0.5); `skills.enabled`; `hooksConfig.enabled`. `advanced.autoConfigureMemory` is **user-file only**. Unpaid-tier Antigravity CLI replacement still applies — verify the binary before baking managed settings.

## Sources

- [Gemini CLI settings](https://geminicli.com/docs/cli/settings/) — accessed 2026-09-06
- [Gemini CLI for the enterprise](https://geminicli.com/docs/cli/enterprise/) — accessed 2026-09-06
- [Gemini CLI configuration](https://geminicli.com/docs/reference/configuration/) — accessed 2026-09-06
