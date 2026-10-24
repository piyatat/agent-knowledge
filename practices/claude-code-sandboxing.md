---
id: claude-code-sandboxing
title: Claude Code sandbox — OS isolation for Bash
tags: [claude, sandbox, security, permissions]
status: active
updated: 2026-10-24
when_to_use: Enabling Claude Code /sandbox, or deciding OS isolation vs permission rules
---

## Summary

The Claude Code **Bash sandbox** is OS-enforced filesystem and network isolation for Bash and its children (macOS Seatbelt; Linux/WSL2 bubblewrap + socat). It does **not** gate the built-in Read/Edit tools. Native Windows is unsupported — use WSL2. Complementary to `claude-code-permissions`.

## Notes

- `/sandbox` Mode: **auto-allow** (sandboxed commands skip a bare `Bash` ask) vs **regular** (still prompt). Deny rules, content-scoped ask (`Bash(git push *)`), and `rm`/`rmdir` of critical paths still prompt. In **plan** mode, auto-allow does not widen approvals (v2.1.212+).
- Default writable: cwd, session `$TMPDIR`, `--add-dir` / `permissions.additionalDirectories`. Merge `sandbox.filesystem.allowWrite` / deny lists across settings scopes. Network: first new domain prompts (or the auto classifier). `WebFetch(domain:…)` rules merge into the sandbox host lists; a bare `WebFetch` allow does **not**.
- Escape hatch: Claude may retry with `dangerouslyDisableSandbox` after a violation — that run uses the normal permission flow. Set `allowUnsandboxedCommands: false` (Strict) to ignore it. `failIfUnavailable: true` makes a missing sandbox a hard fail (managed deployments).
- Linux: install `bubblewrap` + `socat`; Ubuntu 24.04+ may need an AppArmor `bwrap` userns profile. **v2.1.310** (2026-10-23): `/sandbox` and the sandbox startup warning **name Ubuntu’s AppArmor user-namespace restriction** and how to lift it when it keeps bubblewrap from starting. Optional `@anthropic-ai/sandbox-runtime` adds Unix-socket blocking. WSL1 is unsupported. Persist mode in `.claude/settings.local.json`; org-wide via managed `sandbox.enabled`.
- **Nested user namespaces** (v2.1.305): Linux sandboxed commands **cannot** create a user namespace unless `sandbox.allowNestedUserNamespaces` is true. A nested userns can undo the sandbox’s write denies (Chromium, rootless Podman, nested bwrap need it — at that cost). When the setting is off and bwrap supports it, Claude Code passes `--disable-userns`. If neither that flag nor a seccomp helper is available, it warns that bwrap ≥ 0.8.0 (non-setuid, no `enableWeakerNestedSandbox`) is required.
- **v2.1.309** (2026-10-22): sandboxed Bash on macOS/Linux no longer sources the shell’s **startup files outside** the sandbox before each command. macOS `denyWrite` globs apply at the path’s **real** location when the folder is reached through a symlink. Sandboxed commands and auto-accepted edits **cannot** modify the MCP config file passed with `--mcp-config`. Commands the settings **exclude from the sandbox** now **ask** before writing to sandbox write-list paths while the sandbox is enabled but cannot run — the unsandboxed fallback is **refused** there. `sed -i` is a real Bash prompt (not a simulated file-edit preview) and is **not** restored by `/rewind`. In Desktop / VS Code **bypass permissions**, dangerous `rm` / `rmdir` is **denied immediately** with a rewrite hint so unattended sessions keep going.
- Not a substitute for deny rules on Read/Edit, MCP trust, or a VM. Unsandboxed commands inherit the host `$TMPDIR`.

## Sources

- [Configure the sandboxed Bash tool](https://code.claude.com/docs/en/sandboxing) — accessed 2026-10-20
- [Configure permissions](https://code.claude.com/docs/en/permissions) — accessed 2026-09-05
- [Claude Code changelog](https://code.claude.com/docs/en/changelog) — accessed 2026-10-24
- [v2.1.310 release notes](https://github.com/anthropics/claude-code/releases/tag/v2.1.310) — accessed 2026-10-24
- [v2.1.309 release notes](https://github.com/anthropics/claude-code/releases/tag/v2.1.309) — accessed 2026-10-23
- [v2.1.305 release notes](https://github.com/anthropics/claude-code/releases/tag/v2.1.305) — accessed 2026-10-20
