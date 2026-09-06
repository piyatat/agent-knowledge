---
id: openai-codex-sandbox
title: Codex sandbox — workspace-write vs approvals
tags: [openai, sandbox, permissions, security]
status: active
updated: 2026-09-06
when_to_use: Setting Codex sandbox_mode / approval_policy, or contrasting them with permission profiles
---

## Summary

Codex **sandboxing** is the OS boundary around **spawned commands** (git, package managers, tests) in the desktop app, CLI, and IDE. **Approvals** decide when the agent must ask before crossing that boundary. Default local posture is **`workspace-write` + `on-request`**. Do **not** combine this with beta **permission profiles** (`openai-codex-permissions`).

## Notes

- Modes: `read-only` (inspect; edits/commands need approval); `workspace-write` (edit + routine commands inside the workspace; network off unless `[sandbox_workspace_write].network_access = true`); `danger-full-access` (no FS/network boundary). Approvals: `untrusted` | `on-request` | `never`. Reviewer: `approvals_reviewer = "user"` (default) or `"auto_review"` (does **not** widen the sandbox). Full access = `danger-full-access` **and** `never`.
- Flags: `--sandbox` / `--ask-for-approval`. Low-friction local: `--sandbox workspace-write --ask-for-approval on-request`. Read-only CI: `--sandbox read-only --ask-for-approval never`. Extra write dirs: `sandbox_workspace_write.writable_roots` (or `--add-dir`) instead of `danger-full-access`. `/permissions` and `/status` show the live boundary (cwd + `/tmp` unless excluded).
- Platform: macOS Seatbelt out of the box. Linux/WSL2: install **`bubblewrap`** (`bwrap` on `PATH`); else a bundled helper needs unprivileged user namespaces (Ubuntu 24.04 often needs the extra AppArmor `bwrap-userns-restrict` profile). Windows: native sandbox in PowerShell; WSL2 uses the Linux path. `/setup-default-sandbox` is Windows-only when the degraded token sandbox is active.
- If any loaded config or `--sandbox` sets `sandbox_mode` / `[sandbox_workspace_write]`, **legacy sandbox wins** over `default_permissions`. Cloud internet is a different control (`openai-codex-cloud-environments`). `--dangerously-bypass-approvals-and-sandbox` / `--yolo` is VM-only.

## Sources

- [Sandbox](https://learn.chatgpt.com/docs/sandboxing) — accessed 2026-09-06
- [Agent approvals & security](https://learn.chatgpt.com/docs/agent-approvals-security) — accessed 2026-09-06
- [Configuration Reference (Codex)](https://developers.openai.com/codex/config-reference) — accessed 2026-09-06
- [Permissions (Codex)](https://learn.chatgpt.com/docs/permissions) — accessed 2026-09-06
