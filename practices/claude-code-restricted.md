---
id: claude-code-restricted
title: Claude Code --restricted — drop shell and ignore local settings
tags: [claude, permissions, cli, security]
status: active
updated: 2026-10-01
when_to_use: Starting claude --restricted, or choosing it versus --bare or --safe-mode
---

## Summary

**`--restricted`** (`CLAUDE_CODE_RESTRICTED=1`, v2.1.248+) is a launch lock-down: drop built-in **command/code-execution** tools and **WebFetch** unless named in `--tools`, keep file tools inside the working directory, **refuse `bypassPermissions`**, and **ignore user, project, and local settings files**. Not `--bare` (CI skip discovery, still has Bash) and not `--safe-mode` (debug drop customizations, tools/permissions stay) (`claude-code-headless`, `claude-code-doctor`).

## Notes

- Use when the host must not run shell or fetch URLs even if a checked-in `.claude/settings.json` would allow them. Managed/MDM policy is a separate layer (`claude-code-settings`); do not assume `--restricted` replaces org deny rules (`claude-code-permissions`).
- Re-add a removed tool only with `--tools`. File Read/Edit stay, but stay inside the working directory. Pair with `dontAsk` + an explicit `--allowedTools` allowlist for CI if you still need a few shell prefixes — that is **not** the same flag.
- `bypassPermissions` / `--dangerously-skip-permissions` is refused for the whole session. In auto mode, the classifier **cannot** approve protected-path writes (`.git`, `.claude`, shell rc, `.mcp.json`, …) when the session started restricted.
- Contrast: `--bare` / `CLAUDE_CODE_SIMPLE` skips hooks, skills, plugins, MCP, auto memory, and `CLAUDE.md` but leaves Bash/Read/Edit. `--safe-mode` keeps auth, model, built-ins, and permissions and still applies managed hooks/settings. `--restricted` is about **what the process can do**, not about isolating a broken config.
- Still not a kernel sandbox (`claude-code-sandboxing`). Pair with OS isolation if the remaining file tools are enough to matter.

## Sources

- [v2.1.248 release notes](https://github.com/anthropics/claude-code/releases/tag/v2.1.248) — accessed 2026-10-01
- [Choose a permission mode](https://code.claude.com/docs/en/permission-modes) — accessed 2026-10-01
- [CLI reference](https://code.claude.com/docs/en/cli-reference) — accessed 2026-10-01
