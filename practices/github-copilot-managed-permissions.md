---
id: github-copilot-managed-permissions
title: Copilot enterprise managed permissions — deny/ask/allow
tags: [github, permissions, governance, security]
status: active
updated: 2026-10-09
when_to_use: Shipping managed-settings.json permission rules for Copilot CLI, VS Code Agent Host, or the Copilot app
---

## Summary

**Enterprise managed permissions** (GA 2026-09-09) let Copilot Business/Enterprise owners pin which **shell**, **file read/edit**, and **network domain** operations are denied, always-asked, or allowed. Users, workspace settings, auto-approve, YOLO, and saved approvals **cannot weaken** a managed restriction. Broader than hooks (`github-copilot-hooks`) and not the cloud-agent firewall (`github-copilot-coding-agent`).

## Notes

- Deploy `managed-settings.json` three ways: **server-managed** (default; review/audit; includes cloud agent), **MDM** (device groups; local clients), **file-based** (containers/Codespaces; local). Precedence: MDM → server → file → user. `sandbox` and `permissions.deny|ask|allow` compose **most restrictive** across sources.
- Selectors: `Shell(git push *)` (prefix; `Bash(...)` alias; `PowerShell(...)` case-insensitive); `Read`/`Edit` (`Write` alias) with `//` FS root, `/` workspace, `~/` home, `./` cwd, globs; `Domain(*.example.com)` (HTTPS default, case-insensitive host). Precedence deny → ask → allow. If any managed source defines a permission rule **or** an allow list, unmatched supported ops default to **ask**.
- `ask` is fresh every time — not satisfied by bypass, auto-approve, hooks, or a prior grant. `allow` lists **intersect** across sources that declare one. `permissions.disableBypassPermissionsMode`: `"disable"` blocks CLI `--yolo` / `--allow-all*` / `/permissions allow-all`, VS Code `chat.tools.global.autoApprove`, and the app “Allow all.” `"allow-auto-only"` still blocks full allow-all but **permits** CLI `/permissions assisted` (`github-copilot-assisted-permissions`). Unrecognized values **fail closed** to `"disable"` (logged). CLI **1.0.94** can also disable Assisted entirely and keep sessions in Manual Approval.
- Also in the same file: `model`, plugin/marketplace locks, OTel `telemetry` (do not put collector secrets in git), `remoteControl` (SSO-only or disable remote of sessions hosted on that device — `github-copilot-remote-control`), `allowedMcpServers` / `deniedMcpServers` (intersection allowlists), `sandbox` (CLI: users may tighten, not loosen). Team overrides use `{ "overridable": … }` on listed keys. Managed policy can disable **computer use**; a user’s `/computer on` cannot override (`github-copilot-computer-use`).
- Changelog surface: Copilot app, Copilot CLI, VS Code **Agent Host**. Pair with hooks for custom deny logic; pair with `prompt-injection-agent-defense` for untrusted issue text.

## Sources

- [Enterprise managed permissions (changelog)](https://github.blog/changelog/2026-09-09-enterprise-managed-permissions-for-github-copilot-agent-operations/) — accessed 2026-09-13
- [Enterprise managed settings reference](https://docs.github.com/en/copilot/reference/enterprise-managed-settings-reference) — accessed 2026-10-09
- [GitHub Copilot CLI command reference](https://docs.github.com/en/copilot/reference/cli-command-reference) — accessed 2026-10-09
- [GitHub Copilot CLI configuration directory](https://docs.github.com/en/copilot/reference/copilot-cli-reference/cli-config-dir-reference) — accessed 2026-10-09
- [copilot-cli changelog](https://github.com/github/copilot-cli/blob/main/changelog.md) — accessed 2026-10-09
- [Configuring enterprise-managed settings](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-agents/configure-enterprise-managed-settings) — accessed 2026-09-13
