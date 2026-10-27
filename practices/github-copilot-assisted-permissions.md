---
id: github-copilot-assisted-permissions
title: Copilot Assisted permissions — LLM judge vs allow-all
tags: [github, cli, permissions, approvals, security]
status: active
updated: 2026-10-27
when_to_use: Switching Copilot CLI/app/VS Code to Assisted permissions, or setting --assisted-approval / defaultPermissionMode
---

## Summary

**Assisted permissions** (GA **2026-10-26** in Copilot CLI, Copilot app, and VS Code) is a permission **mode**: an **LLM safety judge** auto-approves eligible tool/path/URL requests it scores as safe; the rest still prompt. It is not `--allow-all` / `/yolo`, not Autopilot, and not JetBrains assisted approvals (`github-copilot-jetbrains`). VS Code Agent Host details: `vscode-assisted-permissions`.

## Notes

- Modes: **default** (your allow/deny + saved approvals), **assisted** (judge recommendation + prompt; auto-run when the judge accepts), **allow-all** (`/allow-all` and `/yolo` remain aliases). CLI **1.0.94** (2026-10-08): the judge is shown the **visible shell code**, so it no longer falls back to a manual prompt just because the command text was hidden. The judge **can be wrong** — not a security boundary (`prompt-injection-agent-defense`).
- Managed `permissions.disableBypassPermissionsMode`: `"disable"` suppresses `--yolo` / `--allow-all*` and `/permissions allow-all`. `"allow-auto-only"` still blocks full allow-all but **permits** `/permissions assisted`. Unrecognized values **fail closed** to `"disable"` (logged). CLI **1.0.94** also lets managed policy **disable Assisted** entirely and keep sessions in Manual Approval; startup bypass flags that policy suppresses now show a warning instead of failing silently (`github-copilot-managed-permissions`).
- Three sources, increasing permanence: user `~/.copilot/settings.json` (machine; survives account switch), server-managed settings (account; cleared on switch), MDM plist/registry/file (device; never cleared). An MDM `"disable"` always wins.
- **`assistedApprovalInstructions`** (CLI **1.0.101**, 2026-10-20) is a user/repo settings string that steers the judge’s confirmation decisions (`github-copilot-cli-settings`). It is guidance, not a policy gate — managed deny/ask still win. **1.0.101** also takes **extension capability** requests off the Assisted judge (explicit approval only) and explains permission-escalation causes on the prompt.
- CLI **1.0.104** (2026-10-27; pre-release **1.0.104-0** on 2026-10-23): Assisted is available **without** `/experimental on`. Interactive: `/permissions assisted` (or `/permissions` then pick). Default for **new** interactive sessions: `defaultPermissionMode: "assisted"` in `~/.copilot/settings.json` (`/settings`). Managed `permissions.defaultMode` wins; `--allow-all` / `--yolo` still wins if policy allows; if the default is blocked, the session starts **manual**. Resumed sessions keep their saved mode. Non-interactive (`-p` / no TTY): `--assisted-approval` or `COPILOT_ASSISTED_APPROVAL=true` — do **not** pass `--assisted-approval` on an interactive start (CLI exits). Denied reviews in `-p` / Autopilot are returned to the model as an explanation, not a prompt.
- Surfaces: Copilot app — mode picker → Tool permissions → Assisted (also Settings → Sessions). `/permissions assisted` in the app is session-only. Cloud app sessions have no tool-permission picker. VS Code — permissions picker → Assisted permissions (`vscode-assisted-permissions`). Enterprise: `disableBypassPermissionsMode: "disable"` can block Allow all while leaving Assisted; `disableAssistedPermissionsMode: true` turns Assisted off. Developers may still pick another permitted mode.
- Judge order: existing allow/deny/human grants first; then the review model (may differ from the chat model; BYOK uses the session model). Enterprise **ask** rules for shell/read/write/URL can be satisfied by a confident review in the CLI; **deny** still wins. The judge does **not** cover sandbox-bypass or other tools that policy always asks. Unavailable review → normal handling. The judge **can be wrong** — not a security boundary (`prompt-injection-agent-defense`). `--assisted-approval` does not loosen `--allow-all-paths` / `--allow-all-urls`. If policy blocks Assisted, the CLI warns on stderr and does **not** cancel a separate `--allow-all-tools`.
- Independent of **sandboxing** (`github-copilot-sandbox`). Pair with deny/ask/allow selectors when you need a hard gate the judge cannot satisfy. Do not treat Assisted as a substitute for `--allow-all` in CI.

## Sources

- [GitHub Copilot assisted permissions generally available](https://github.blog/changelog/2026-10-26-github-copilot-assisted-permissions-generally-available/) — accessed 2026-10-27
- [Allowing safe commands to run without manual approval](https://docs.github.com/en/copilot/concepts/customizations/allowing-safe-commands) — accessed 2026-10-27
- [Allowing and denying tool use](https://docs.github.com/en/copilot/how-tos/copilot-cli/use-copilot-cli/allowing-tools) — accessed 2026-10-27
- [Working with agent sessions in the GitHub Copilot app](https://docs.github.com/en/copilot/how-tos/github-copilot-app/agent-sessions) — accessed 2026-10-27
- [GitHub Copilot CLI command reference](https://docs.github.com/en/copilot/reference/cli-command-reference) — accessed 2026-10-09
- [Enterprise managed settings](https://docs.github.com/en/copilot/reference/enterprise-managed-settings-reference) — accessed 2026-10-09
- [GitHub Copilot CLI configuration directory](https://docs.github.com/en/copilot/reference/copilot-cli-reference/cli-config-dir-reference) — accessed 2026-10-09
- [copilot-cli changelog](https://github.com/github/copilot-cli/blob/main/changelog.md) — accessed 2026-10-27
- [copilot-cli 1.0.104](https://github.com/github/copilot-cli/releases/tag/v1.0.104) — accessed 2026-10-27
- [copilot-cli 1.0.101](https://github.com/github/copilot-cli/releases/tag/v1.0.101) — accessed 2026-10-20
