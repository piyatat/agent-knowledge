---
id: cursor-sandbox-json
title: Cursor sandbox.json and Auto-review run modes
tags: [cursor, sandbox, security, permissions]
status: active
updated: 2026-08-24
when_to_use: Constraining local Cursor agent shell/network/filesystem (not Cloud Agent VMs)
---

## Summary

Local Cursor agents combine **Run Modes** (when to ask) with **sandboxing** (what a sandboxed shell can reach). `permissions.json` steers Auto-review; `sandbox.json` sets network and extra paths. Neither file weakens team-admin or hardcoded protections. Cloud Agents skip Run Modes — they already run on a dedicated VM.

## Notes

- Desktop modes (Settings → Agents → Approvals & Execution): **Auto-review** (allowlist immediately; other shells sandbox when possible; else a classifier — **not** a security boundary), **Allowlist**, **Run Everything** (no sandbox, no classifier). Ask Every Time is deprecated; empty Allowlist is the equivalent.
- Merge order: per-user `~/.cursor/sandbox.json` < per-repo `.cursor/sandbox.json` < team-admin < hardcoded. `networkPolicy.default` `"deny"` wins; deny lists always union; team allowlists replace (not union) local allows.
- Defaults: `type` `workspace_readwrite`; network default **deny**; RFC1918, IPv6 ULA/link-local, and `169.254.169.254` blocked. Network UI modes: sandbox.json only, sandbox.json + Cursor package-manager defaults, or allow all.
- Always write-protected: `.cursor/*.json`, `.claude/*.json`, `.vscode/**`, `.git/hooks/**`, `.git/config`, `.cursorignore`. Writable under `.cursor`: `rules/`, `commands/`, `worktrees/`, `skills/`, `agents/`.
- Linux sandbox remaps UID to 0 inside the user namespace — use `CURSOR_ORIG_UID` / `CURSOR_ORIG_GID` for Docker `--user`. macOS: Seatbelt. Linux: Landlock+seccomp (kernel 6.2+). CLI/remote may need the Cursor AppArmor package.
- Extra protections still prompt: Browser, file-deletion, external-file. Auto-review classifier needs Haiku 4.5 or GPT-5.4 Mini allowed for the team.

## Sources

- [sandbox.json reference](https://cursor.com/docs/reference/sandbox.md) — accessed 2026-08-24
- [Run Modes](https://cursor.com/docs/agent/security/run-modes.md) — accessed 2026-08-24
- [Implementing a secure sandbox for local agents](https://cursor.com/blog/agent-sandboxing) — accessed 2026-08-24
