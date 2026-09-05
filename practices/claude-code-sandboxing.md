---
id: claude-code-sandboxing
title: Claude Code sandbox — OS isolation for Bash
tags: [claude, sandbox, security, permissions]
status: active
updated: 2026-09-05
when_to_use: Enabling Claude Code /sandbox, or deciding OS isolation vs permission rules
---

## Summary

The Claude Code **Bash sandbox** is OS-enforced filesystem and network isolation for Bash and its children (macOS Seatbelt; Linux/WSL2 bubblewrap + socat). It does **not** gate the built-in Read/Edit tools. Native Windows is unsupported — use WSL2. Complementary to `claude-code-permissions`.

## Notes

- `/sandbox` Mode: **auto-allow** (sandboxed commands skip a bare `Bash` ask) vs **regular** (still prompt). Deny rules, content-scoped ask (`Bash(git push *)`), and `rm`/`rmdir` of critical paths still prompt. In **plan** mode, auto-allow does not widen approvals (v2.1.212+).
- Default writable: cwd, session `$TMPDIR`, `--add-dir` / `permissions.additionalDirectories`. Merge `sandbox.filesystem.allowWrite` / deny lists across settings scopes. Network: first new domain prompts (or the auto classifier). `WebFetch(domain:…)` rules merge into the sandbox host lists; a bare `WebFetch` allow does **not**.
- Escape hatch: Claude may retry with `dangerouslyDisableSandbox` after a violation — that run uses the normal permission flow. Set `allowUnsandboxedCommands: false` (Strict) to ignore it. `failIfUnavailable: true` makes a missing sandbox a hard fail (managed deployments).
- Linux: install `bubblewrap` + `socat`; Ubuntu 24.04+ may need an AppArmor `bwrap` userns profile. Optional `@anthropic-ai/sandbox-runtime` adds Unix-socket blocking. WSL1 is unsupported. Persist mode in `.claude/settings.local.json`; org-wide via managed `sandbox.enabled`.
- Not a substitute for deny rules on Read/Edit, MCP trust, or a VM. Unsandboxed commands inherit the host `$TMPDIR`.

## Sources

- [Configure the sandboxed Bash tool](https://code.claude.com/docs/en/sandboxing) — accessed 2026-09-05
- [Configure permissions](https://code.claude.com/docs/en/permissions) — accessed 2026-09-05
