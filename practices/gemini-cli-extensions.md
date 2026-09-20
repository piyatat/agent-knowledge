---
id: gemini-cli-extensions
title: Gemini CLI extensions — gemini-extension.json packages
tags: [gemini, extensions, mcp, skills]
status: active
updated: 2026-09-20
when_to_use: Packaging or installing a Gemini CLI extension instead of loose settings.json MCP or skills
---

## Summary

A Gemini CLI **extension** is a directory with **`gemini-extension.json`**, loaded from `~/.gemini/extensions` (and workspace copies). It can ship MCP servers, `GEMINI.md` context, custom `/commands`, hooks, Skills, sub-agents, Policy Engine rules, and themes. Not Cursor/Claude plugin formats (`cursor-plugins`, `claude-code-plugins`).

## Notes

- Manage outside interactive mode: `gemini extensions install <git-url|path>` (`--ref`, `--auto-update`, `--consent`, `--skip-settings`). `update`, `uninstall`, `enable`/`disable --scope user|workspace`, `link` (symlink for live edit), `new <path> [mcp-server|context|custom-commands]`. Interactive `/extensions list` only. Restarts apply command/skill changes.
- Manifest: `name` (kebab, match dir), `version`, `description`. `mcpServers` same shape as settings except **`trust` is forbidden**; `${extensionPath}` / `${workspacePath}` / `${/}` substitute. Same server name in `settings.json` **wins**. `contextFileName` or a default `GEMINI.md` in the extension dir. `excludeTools` can restrict `run_shell_command(rm -rf)`. `migratedTo` auto-moves installs to a new repo.
- Extras (not all in the manifest): `commands/*.toml` → `/deploy` or `/gcs:sync`; conflicts with user/project commands become `/ext.deploy`. `hooks/hooks.json`. `skills/**/SKILL.md`. `agents/*.md`. `policies/*.toml` (tier 2 — below user/admin, above defaults; extension `allow` / `yolo` decisions are **ignored**). Install `settings[]` (`envVar`, `sensitive`) land in a `.env` / keychain; extensions **do not** inherit the full shell env — only safe vars plus declared `envVar`s.
- v0.60.0: loader **path/boundary** checks; **consent** when an extension changes environment; sanitizes runtime-altering env vars. Experimental explore UI: `experimental.extensionRegistry` (default false) + `experimental.extensionRegistryURI` (default `https://geminicli.com/extensions.json`).
- Enterprise: `security.blockGitExtensions` or `security.allowedExtensions` regex allowlist; v0.60 also tightens ownership checks on system-wide config paths. Treat git-install URLs as `malicious-skills-supply-chain`. Pair MCP servers with `mcp.allowed` (`gemini-cli-mcp`).

## Sources

- [Extension reference](https://geminicli.com/docs/extensions/reference/) — accessed 2026-09-20
- [Gemini CLI configuration](https://geminicli.com/docs/reference/configuration/) — accessed 2026-09-20
- [Latest stable release v0.60.0](https://geminicli.com/docs/changelogs/latest/) — accessed 2026-09-20
