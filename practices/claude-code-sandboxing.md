---
id: claude-code-sandboxing
title: Claude Code sandbox — OS isolation for Bash
tags: [claude, sandbox, security, permissions]
status: active
updated: 2026-11-14
when_to_use: Enabling Claude Code /sandbox, or deciding OS isolation vs permission rules
---

## Summary

The Claude Code **Bash sandbox** is OS-enforced filesystem and network isolation for Bash and its children (macOS Seatbelt; Linux/WSL2 bubblewrap + socat). It does **not** gate the built-in Read/Edit tools. Native Windows is unsupported — use WSL2. Complementary to `claude-code-permissions`.

## Notes

- `/sandbox` Mode: **auto-allow** (`sandbox.autoAllowBashIfSandboxed: true` — sandboxed commands skip a bare `Bash` ask) vs **regular** (still prompt). **Default is regular (`false`) as of v2.1.324** (changelog groups it with **2.1.325**, 2026-11-13). Before 2.1.324 the default was **true** — managed settings that only set `sandbox.enabled` now prompt until you also set `autoAllowBashIfSandboxed: true` in the highest-ranking managed source. Deny rules, content-scoped ask (`Bash(git push *)`), and `rm`/`rmdir` of critical paths still prompt. `CLAUDE_CODE_SUBPROCESS_ENV_SCRUB` turns auto-allow off. In **plan** mode, auto-allow does not widen approvals (v2.1.212+).
- **v2.1.325:** sandboxed Bash follows the normal permission flow unless auto-allow is on. Sandboxed writes to `.claude` settings/skills/agents/commands/hooks are refused in **`--add-dir` trees**, not only the launch folder. Isolated worktrees cannot run `git bisect run`, `git maintenance register|start`, or `scalar` setup. Hosted Claude Code / cloud `/loop` / Cowork **start despite** `sandbox.failIfUnavailable` (no command sandbox in the container). Sandbox helper processes (network bridge, ripgrep, local git) no longer inherit sign-in tokens, API keys, or the mTLS client-key passphrase.
- Default writable: cwd, session `$TMPDIR`, `--add-dir` / `permissions.additionalDirectories`. Merge `sandbox.filesystem.allowWrite` / deny lists across settings scopes. Network: first new domain prompts (or the auto classifier). `WebFetch(domain:…)` rules merge into the sandbox host lists; a bare `WebFetch` allow does **not**.
- Escape hatch: Claude may retry with `dangerouslyDisableSandbox` after a violation — that run uses the normal permission flow. Set `allowUnsandboxedCommands: false` (Strict) to ignore it. `failIfUnavailable: true` makes a missing sandbox a hard fail (managed deployments).
- Linux: install `bubblewrap` + `socat`; Ubuntu 24.04+ may need an AppArmor `bwrap` userns profile. **v2.1.310** (2026-10-23): `/sandbox` and the sandbox startup warning **name Ubuntu’s AppArmor user-namespace restriction** and how to lift it when it keeps bubblewrap from starting. Optional `@anthropic-ai/sandbox-runtime` adds Unix-socket blocking. WSL1 is unsupported. Persist mode in `.claude/settings.local.json`; org-wide via managed `sandbox.enabled`.
- **Nested user namespaces** (v2.1.305): Linux sandboxed commands **cannot** create a user namespace unless `sandbox.allowNestedUserNamespaces` is true. A nested userns can undo the sandbox’s write denies (Chromium, rootless Podman, nested bwrap need it — at that cost). When the setting is off and bwrap supports it, Claude Code passes `--disable-userns`. If neither that flag nor a seccomp helper is available, it warns that bwrap ≥ 0.8.0 (non-setuid, no `enableWeakerNestedSandbox`) is required.
- **v2.1.309** (2026-10-22): sandboxed Bash on macOS/Linux no longer sources the shell’s **startup files outside** the sandbox before each command. macOS `denyWrite` globs apply at the path’s **real** location when the folder is reached through a symlink. Sandboxed commands and auto-accepted edits **cannot** modify the MCP config file passed with `--mcp-config`. Commands the settings **exclude from the sandbox** now **ask** before writing to sandbox write-list paths while the sandbox is enabled but cannot run — the unsandboxed fallback is **refused** there. `sed -i` is a real Bash prompt (not a simulated file-edit preview) and is **not** restored by `/rewind`. In Desktop / VS Code **bypass permissions**, dangerous `rm` / `rmdir` is **denied immediately** with a rewrite hint so unattended sessions keep going.
- Not a substitute for deny rules on Read/Edit, MCP trust, or a VM. Unsandboxed commands inherit the host `$TMPDIR`.

## Sources

- [Configure the sandboxed Bash tool](https://code.claude.com/docs/en/sandboxing) — accessed 2026-11-14
- [All settings — sandbox.autoAllowBashIfSandboxed](https://code.claude.com/docs/en/settings-reference) — accessed 2026-11-14
- [Configure permissions](https://code.claude.com/docs/en/permissions) — accessed 2026-11-14
- [Claude Code changelog](https://code.claude.com/docs/en/changelog) — accessed 2026-11-14
- [v2.1.325 release notes](https://github.com/anthropics/claude-code/releases/tag/v2.1.325) — accessed 2026-11-14
- [v2.1.310 release notes](https://github.com/anthropics/claude-code/releases/tag/v2.1.310) — accessed 2026-10-24
- [v2.1.309 release notes](https://github.com/anthropics/claude-code/releases/tag/v2.1.309) — accessed 2026-10-23
- [v2.1.305 release notes](https://github.com/anthropics/claude-code/releases/tag/v2.1.305) — accessed 2026-10-20
