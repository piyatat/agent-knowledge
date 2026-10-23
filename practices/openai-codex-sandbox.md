---
id: openai-codex-sandbox
title: Codex sandbox — workspace-write vs approvals
tags: [openai, sandbox, permissions, security]
status: active
updated: 2026-10-23
when_to_use: Setting Codex sandbox_mode / approval_policy, or contrasting them with permission profiles
---

## Summary

Codex **sandboxing** is the OS boundary around **spawned commands** (git, package managers, tests) in the desktop app, CLI, and IDE. **Approvals** decide when the agent must ask before crossing that boundary. Default local posture is **`workspace-write` + `on-request`**. Do **not** combine this with beta **permission profiles** (`openai-codex-permissions`).

## Notes

- Modes: `read-only` (inspect; edits/commands need approval); `workspace-write` (edit + routine commands inside the workspace; network off unless `[sandbox_workspace_write].network_access = true`); `danger-full-access` (no FS/network boundary). Approvals: `on-request` | `never` | `{ granular = { … } }` (`openai-codex-granular-approvals`). **Do not set `approval_policy = "untrusted"`** — Codex/ChatGPT Work retired that value and it can **prevent the client from starting**. For the old “approve most commands” posture, omit `approval_policy` and set `[projects."/path"].trust_level = "untrusted"`, or use `read-only` + `on-request`. Reviewer: `approvals_reviewer = "user"` (default) or `"auto_review"` (does **not** widen the sandbox). Full access = `danger-full-access` **and** `never`.
- Flags: `--sandbox` / `--ask-for-approval`. Low-friction local: `--sandbox workspace-write --ask-for-approval on-request`. Read-only CI: `--sandbox read-only --ask-for-approval never`. Extra write dirs: `sandbox_workspace_write.writable_roots` (or `--add-dir`) instead of `danger-full-access`. `/permissions` and `/status` show the live boundary (cwd + `/tmp` unless excluded).
- Platform: macOS Seatbelt out of the box. Linux/WSL2: install **`bubblewrap`** (`bwrap` on `PATH`); else a bundled helper needs unprivileged user namespaces (Ubuntu 24.04 often needs the extra AppArmor `bwrap-userns-restrict` profile). Windows: native sandbox in PowerShell; WSL2 uses the Linux path. `/setup-default-sandbox` is Windows-only when the degraded token sandbox is active.
- If any loaded config or `--sandbox` sets `sandbox_mode` / `[sandbox_workspace_write]`, **legacy sandbox wins** over `default_permissions`. Cloud internet is a different control (`openai-codex-cloud-environments`). `--dangerously-bypass-approvals-and-sandbox` / `--yolo` is VM-only.
- **0.164.0** (2026-10-23): remote Bash (exec-server) and **Zsh snapshot** sessions **mask credentials**, including those from custom providers. Substitution is scoped to **trusted origins and placeholders**; when masking is unavailable the unified exec path **falls back** rather than leaking. Hardened checks reject **case-variant metadata paths** on macOS and **replaceable symlinks** used to locate executables. Do not treat masking as a reason to pass live secrets into the remote command line (`agent-output-secret-scanning`).

## Sources

- [Sandbox](https://learn.chatgpt.com/docs/sandboxing) — accessed 2026-09-06
- [Agent approvals & security](https://developers.openai.com/codex/agent-approvals-security) — accessed 2026-09-14
- [Configuration Reference (Codex)](https://developers.openai.com/codex/config-reference) — accessed 2026-09-14
- [Permissions (Codex)](https://learn.chatgpt.com/docs/permissions) — accessed 2026-09-06
- [Codex 0.164.0](https://github.com/openai/codex/releases/tag/rust-v0.164.0) — accessed 2026-10-23
- [ChatGPT & Codex changelog](https://learn.chatgpt.com/docs/changelog) — accessed 2026-10-23
