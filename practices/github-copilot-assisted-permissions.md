---
id: github-copilot-assisted-permissions
title: Copilot CLI Assisted permissions — LLM judge vs allow-all
tags: [github, cli, permissions, approvals, security]
status: active
updated: 2026-10-09
when_to_use: Switching Copilot CLI to /permissions assisted, or setting disableBypassPermissionsMode allow-auto-only
---

## Summary

**Assisted permissions** in **GitHub Copilot CLI** is a permission **mode**: every tool request still prompts, but an **LLM safety judge** can auto-approve calls it scores as acceptable. It is not `--allow-all` / `/yolo`, not VS Code Agent Host Assisted (`vscode-assisted-permissions`), and not JetBrains assisted approvals (`github-copilot-jetbrains`). Canonical switch: `/permissions [default|assisted|allow-all|show]`.

## Notes

- Modes: **default** (your allow/deny + saved approvals), **assisted** (judge recommendation + prompt; auto-run when the judge accepts), **allow-all** (`/allow-all` and `/yolo` remain aliases). CLI **1.0.94** (2026-10-08): the judge is shown the **visible shell code**, so it no longer falls back to a manual prompt just because the command text was hidden. The judge **can be wrong** — not a security boundary (`prompt-injection-agent-defense`).
- Managed `permissions.disableBypassPermissionsMode`: `"disable"` suppresses `--yolo` / `--allow-all*` and `/permissions allow-all`. `"allow-auto-only"` still blocks full allow-all but **permits** `/permissions assisted`. Unrecognized values **fail closed** to `"disable"` (logged). CLI **1.0.94** also lets managed policy **disable Assisted** entirely and keep sessions in Manual Approval; startup bypass flags that policy suppresses now show a warning instead of failing silently (`github-copilot-managed-permissions`).
- Three sources, increasing permanence: user `~/.copilot/settings.json` (machine; survives account switch), server-managed settings (account; cleared on switch), MDM plist/registry/file (device; never cleared). An MDM `"disable"` always wins.
- Independent of **sandboxing** (`github-copilot-sandbox`). Pair with deny/ask/allow selectors when you need a hard gate the judge cannot satisfy. Do not treat Assisted as a substitute for `--allow-all` in CI — use explicit `--allow-tool` / `--deny-tool` or a sandbox.

## Sources

- [GitHub Copilot CLI command reference](https://docs.github.com/en/copilot/reference/cli-command-reference) — accessed 2026-10-09
- [Allowing and denying tool use](https://docs.github.com/en/copilot/how-tos/copilot-cli/use-copilot-cli/allowing-tools) — accessed 2026-10-09
- [Enterprise managed settings](https://docs.github.com/en/copilot/reference/enterprise-managed-settings-reference) — accessed 2026-10-09
- [GitHub Copilot CLI configuration directory](https://docs.github.com/en/copilot/reference/copilot-cli-reference/cli-config-dir-reference) — accessed 2026-10-09
- [copilot-cli changelog](https://github.com/github/copilot-cli/blob/main/changelog.md) — accessed 2026-10-09
