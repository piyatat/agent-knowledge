---
id: gemini-cli-trusted-folders
title: Gemini CLI trusted folders — workspace safe mode
tags: [gemini, security, config, governance]
status: active
updated: 2026-09-07
when_to_use: Enabling Gemini folder trust, or debugging CI FatalUntrustedWorkspaceError
---

## Summary

Gemini CLI **Trusted Folders** is an opt-in gate: approve a directory before the CLI loads project config from it. Off by default (`security.folderTrust.enabled`). Untrusted workspaces run **safe mode**. This is not OS sandboxing (`gemini-cli-sandboxing`) and not MCP `trust` (`gemini-cli-mcp`).

## Notes

- Enable in user `settings.json`: `security.folderTrust.enabled: true`. First run in a folder prompts: trust this folder, trust the **parent** (and all children), or don’t trust. Choice is stored in `~/.gemini/trustedFolders.json` (override path with `GEMINI_CLI_TRUSTED_FOLDERS_PATH`). Re-open the dialog with `/permissions`.
- Discovery before you choose lists project commands (`.toml`), MCP servers, hooks, skills, and setting overrides, plus warnings (YOLO / sandbox off) and parse errors. IDE Integration trust, if connected, **wins** over the local file.
- Safe mode disables: project `.gemini/settings.json`, project `.env`, extension install/update, tool auto-accept (always prompt), automatic memory from local settings, MCP connections, and **all** custom `.toml` commands (project **and** user). Grant trust to unlock the rest.
- Headless: no dialog. Untrusted + feature on → `FatalUntrustedWorkspaceError`. Session bypass: `--skip-trust` or `GEMINI_CLI_TRUST_WORKSPACE=true` (`gemini-cli-headless`). Do not set those on untrusted checkouts.

## Sources

- [Trusted Folders](https://geminicli.com/docs/cli/trusted-folders/) — accessed 2026-09-07
- [Headless mode reference](https://geminicli.com/docs/cli/headless/) — accessed 2026-09-07
- [Gemini CLI settings](https://geminicli.com/docs/cli/settings/) — accessed 2026-09-07
- [Gemini CLI for the enterprise](https://geminicli.com/docs/cli/enterprise/) — accessed 2026-09-07
