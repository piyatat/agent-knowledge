---
id: github-copilot-cli-settings
title: Copilot CLI settings.json — /settings vs config.json
tags: [github, cli, config, permissions]
status: active
updated: 2026-10-05
when_to_use: Changing Copilot CLI user/repo/local settings, or debugging a leftover ~/.copilot/config.json
---

## Summary

Copilot CLI user preferences live in **`~/.copilot/settings.json`** (JSONC). Interactive **`/settings`** (`/config` alias) edits them. Older user-editable keys in `config.json` migrate on startup. Not managed org policy (`github-copilot-managed-permissions`) and not `mcp-config.json` (`github-copilot-mcp`).

## Notes

- Scopes: user `$COPILOT_HOME/settings.json` (default `~/.copilot`); repo `.github/copilot/settings.json` (committable); local `.github/copilot/settings.local.json`. `/settings --repo` / `--local` target those files; only repo-overridable keys can be set that way. Managed/MDM rows are read-only and tagged `(managed)`.
- `/settings` opens a searchable editor (User / Repo / Repo local / Problems tabs). `/settings KEY VALUE` sets inline (booleans `on`/`off`; dotted paths like `footer.showBranch`). `/settings KEY` lists valid values. `/settings show KEY` prints the current value and **masks** secret-named fields. `/config unset KEY` removes a user key. Restart-required keys (e.g. `experimental`, proxy) say so.
- Inline set **excludes** security-sensitive keys (credential stores, shell-running settings) and list/structured values — open the file with Ctrl+E from the editor. CLI **1.0.92-4** also adds out-of-session `copilot config` list/read/set/remove.
- `trustedFolders` and path/URL allowlists are still documented on the configure page (`config.json` for the trusted-folder array). `--config-dir` is deprecated; use `COPILOT_HOME`. Invalid `settings.json` is ignored with a Problems-tab warning; recognized leftover `config.json` keys still merge.
- Common keys: `autoUpdate`, `theme`, `renderMarkdown`, `banner`, `beep`, `includeCoAuthoredBy`, `footer.showBranch`, `sandbox.enabled` (`github-copilot-sandbox`). Do not put tokens in committed repo settings.

## Sources

- [Changing settings with the /settings command](https://docs.github.com/en/copilot/how-tos/copilot-cli/customize-copilot/change-settings) — accessed 2026-10-05
- [GitHub Copilot CLI configuration directory](https://docs.github.com/en/copilot/reference/copilot-cli-reference/cli-config-dir-reference) — accessed 2026-10-05
- [GitHub Copilot CLI command reference](https://docs.github.com/en/copilot/reference/copilot-cli-reference/cli-command-reference) — accessed 2026-10-05
- [Configuring GitHub Copilot CLI](https://docs.github.com/en/copilot/how-tos/copilot-cli/set-up-copilot-cli/configure-copilot-cli) — accessed 2026-10-05
- [copilot-cli v1.0.92-4](https://github.com/github/copilot-cli/releases/tag/v1.0.92-4) — accessed 2026-10-05
