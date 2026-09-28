---
id: claude-code-settings
title: Claude Code settings.json — scopes and precedence
tags: [claude, config, permissions, governance]
status: active
updated: 2026-09-28
when_to_use: Choosing user vs project vs managed settings, restricting models, or debugging which file won
---

## Summary

Claude Code **settings** are strict JSON files that change runtime behavior (model, permissions, hooks, plugins). They are not `CLAUDE.md` (`claude-code-memory`) and not MCP scopes (`claude-code-mcp`). Cloud / web sessions read only a subset.

## Notes

- Scopes: user `~/.claude/settings.json`; shared project `.claude/settings.json` (commit); project local `.claude/settings.local.json` (gitignored; standing Bash/WebFetch approvals); **managed** (`managed-settings.json` / MDM / claude.ai console) — nothing you set overrides it except a few security-sensitive keys. Fifth file `~/.claude.json` is host-owned (login, MCP, trust). `CLAUDE_CONFIG_DIR` relocates the home files.
- Precedence (high → low): managed → CLI `--settings` / flags → project local → shared project → user. List keys such as `permissions.allow` **merge**. `defaultMode` values `auto` and `bypassPermissions` are ignored from project/local (set user/managed or `--permission-mode`).
- v2.1.282+: project and local `env` **cannot turn telemetry on**, pick an OTLP endpoint, or capture content (`CLAUDE_CODE_ENABLE_TELEMETRY`, `OTEL_LOG_*`, `OTEL_EXPORTER_OTLP_*`). User, managed, and process env still can. A repo may still set exporters to `none` / off. Startup, `/status`, and `claude doctor` list ignored or off-switch telemetry vars. Enable export from managed settings or the user file (`telemetry-redaction-genai`).
- v2.1.283+ managed model gates: `deniedModels` blocks listed models even when `availableModels` would allow them. `availableModelsMatch: "exact"` means each allowlist entry matches only that version — newer releases stay blocked until you add them. Invalid managed `availableModels` is enforced as an empty allowlist (Default only) until fixed (`claude-code-doctor`). v2.1.284 gateway warns when managed `availableModels` is empty or omits the startup model without `model` / `enforceAvailableModels`.
- Most keys hot-reload (permissions, hooks, `apiKeyHelper`) and fire `ConfigChange`. `model` / `effortLevel` / `outputStyle` wait for `/model`, `/effort`, `/clear`, or restart. `/status` lists loaded sources; `claude doctor` lists skipped entries.
- Broken user/project/local JSON: interactive dialog; `-p` skips the file and continues. Broken `~/.claude.json`: backup + prompt, or `-p` exits. Schema: `https://json.schemastore.org/claude-code-settings.json` (may lag the CLI).
- Shared project `enableAllProjectMcpServers` / allow rules wait for workspace trust. Local-file allow rules apply without trust **while the file is untracked**.

## Sources

- [Claude Code settings](https://code.claude.com/docs/en/settings) — accessed 2026-09-27
- [Monitoring usage (OpenTelemetry)](https://code.claude.com/docs/en/monitoring-usage) — accessed 2026-09-27
- [Claude Code CHANGELOG](https://raw.githubusercontent.com/anthropics/claude-code/main/CHANGELOG.md) — accessed 2026-09-28
- [Configure permissions](https://code.claude.com/docs/en/permissions) — accessed 2026-09-05
