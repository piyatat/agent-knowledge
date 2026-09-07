---
id: claude-code-plan-mode
title: Claude Code plan mode — research then approve
tags: [claude, permissions, orchestration, ux]
status: active
updated: 2026-09-07
when_to_use: Starting Claude Code in plan mode, or reviewing the plan-approval flow before edits
---

## Summary

**Plan mode** is a Claude Code permission mode: Claude reads and explores, writes a plan, and does **not** edit source until you approve. Enter with `Shift+Tab`, `/plan [task]`, or `claude --permission-mode plan`. This is the plan-specific surface of `claude-code-permissions`, not Cursor Plan mode (`cursor-agent-modes`).

## Notes

- Modes (config value): `default` (UI: Manual; reads only), `acceptEdits`, `plan`, `auto` (classifier), `dontAsk` (CI allowlist), `bypassPermissions` (VM only). Deny rules still win in every mode, including bypass. Pro/Max/Team built-in start is `auto` (v2.1.228+); `-p` / SDK / Enterprise start in Manual. `auto` / `bypassPermissions` in **project** settings are ignored.
- In plan mode, source edits stay blocked unless bypass is on the mode cycle. Shell: if auto mode is available and `useAutoModeDuringPlan` is on (default), the classifier approves/blocks explore commands; otherwise non-read-only commands prompt. Sandbox auto-allow does **not** widen plan-mode approvals.
- Approve prompt: Yes + auto (or accept-edits / bypass if those apply); Yes + manual; No, keep planning. `Ctrl+G` edits the plan in your editor. Approving **exits** plan mode. `Shift+Tab` again leaves without approving. Project default: `"permissions": {"defaultMode": "plan"}` in `.claude/settings.json` (VS Code uses `claudeCode.initialPermissionMode` instead).
- Cycle from auto: first `Shift+Tab` → Manual, then Manual → acceptEdits → plan → (optional bypass) → (auto). `dontAsk` is flag-only. Asking Claude in chat to change mode does nothing. Pair with `/ultraplan` for a browser-reviewed remote plan when that skill is available.

## Sources

- [Choose a permission mode](https://code.claude.com/docs/en/permission-modes) — accessed 2026-09-07
- [Configure permissions](https://code.claude.com/docs/en/permissions) — accessed 2026-09-07
- [Commands reference](https://code.claude.com/docs/en/commands) — accessed 2026-09-07
- [Common workflows](https://code.claude.com/docs/en/common-workflows) — accessed 2026-09-07
