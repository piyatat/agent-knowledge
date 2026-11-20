---
id: cursor-sandbox-json
title: Cursor sandbox.json — network, paths, and readBoundary
tags: [cursor, sandbox, security, permissions]
status: active
updated: 2026-11-20
when_to_use: Constraining local Cursor agent shell/network/filesystem (not Cloud Agent VMs)
---

## Summary

`sandbox.json` sets **what a sandboxed local shell can reach** (network, extra paths, temp writes, **readBoundary**). **When** Cursor asks is Run Modes (`cursor-run-modes`); **which** MCP/shell prefixes skip review is `permissions.json` (`cursor-permissions-json`). Neither file weakens team-admin or hardcoded protections. Cloud Agents skip this stack — they already run on a dedicated VM.

## Notes

- Merge order: per-user `~/.cursor/sandbox.json` < per-repo `.cursor/sandbox.json` < team-admin < hardcoded. `networkPolicy.default` `"deny"` wins; deny lists always union; team allowlists replace (not union) local allows. A `sandbox.json` value **replaces** the matching Settings control; Settings then show which file owns it.
- Defaults: `type` `workspace_readwrite`; network default **deny**; RFC1918, IPv6 ULA/link-local, and `169.254.169.254` blocked. Network UI modes: sandbox.json only, sandbox.json + Cursor package-manager defaults, or allow all.
- Always write-protected: `.cursor/*.json`, `.claude/*.json`, `.vscode/**`, `.git/hooks/**`, `.git/config`, `.cursorignore`. Writable under `.cursor`: `rules/`, `commands/`, `worktrees/`, `skills/`, `agents/`.
- **Read Access** (Cursor 3.23+): `readBoundary` `"system"` (default) vs `"workspace"`, plus `additionalReadPaths` for the Read Allowlist. Workspace mode asks before reads outside the workspace; sandboxed commands get a private temp dir. Full product behavior: `cursor-run-modes`.
- **Temp and caches (sandbox reference, 2026-11-20):** `disableTmpWrite: true` removes the default write access to `/tmp` and system temp directories. `enableSharedBuildCache: true` redirects npm, cargo, pip, and similar caches to a shared tmpdir so sandboxed and unsandboxed commands share them. Restrictive booleans (`disableTmpWrite`, `networkPolicyStrict`) merge as `true` wins.
- **CLI v2026.11.17 `privateTmp`:** with `"privateTmp": true` and `readBoundary` `"workspace"`, `/tmp` inside a sandboxed Linux command is that workspace’s scratch folder (the same one `$TMPDIR` points to). Files stay for the next command in that workspace. Other workspaces cannot see them. macOS ignores the setting. The sandbox.json reference page does not list `privateTmp`. Attribute the field to the CLI changelog.
- Linux sandbox remaps UID to 0 inside the user namespace — use `CURSOR_ORIG_UID` / `CURSOR_ORIG_GID` for Docker `--user`. Env: `CURSOR_SANDBOX` (`seatbelt` / `native`), `CURSOR_SANDBOX_LANDLOCK_STATUS` (`fully_enforced` / `bubblewrap`). macOS: Seatbelt. Linux: Landlock+seccomp (kernel 6.2+). CLI/remote may need the Cursor AppArmor package (0.6.0). Extra protections still prompt: Browser, file-deletion, external-file.

## Sources

- [sandbox.json reference](https://cursor.com/docs/reference/sandbox) — accessed 2026-11-20
- [Cursor CLI changelog](https://cursor.com/docs/cli/changelog) — accessed 2026-11-20
- [Run Modes](https://cursor.com/docs/agent/security/run-modes) — accessed 2026-10-06
- [Implementing a secure sandbox for local agents](https://cursor.com/blog/agent-sandboxing) — accessed 2026-08-24

