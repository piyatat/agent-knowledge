---
id: claude-code-jetbrains
title: Claude Code in JetBrains — plugin plus hidden ide MCP
tags: [claude, acp, interoperability, ux]
status: active
updated: 2026-09-12
when_to_use: Installing Claude Code in IntelliJ/PyCharm/WebStorm, or allowlisting the hidden ide MCP tools
---

## Summary

Claude Code in JetBrains is a **Marketplace plugin + your PATH `claude`**, not a bundled CLI and not Cursor’s ACP Registry agent (`cursor-jetbrains-acp`). The plugin starts `claude` in the IDE terminal and exposes a hidden local MCP server named `ide` (filtered from `/mcp`) so diffs, selection, and diagnostics reach the CLI. Works with IntelliJ IDEA, PyCharm, Android Studio, WebStorm, PhpStorm, GoLand.

## Notes

- Install CLI first, then the plugin; set Claude command if `claude` is not on the IDE PATH (`wsl -d Ubuntu -- bash -lic "claude"` on WSL). Launch from the integrated terminal, or `/ide` from an external terminal (installs the plugin if missing). Remote Development: install on the **host** (Settings → Plugin (Host)), not the local client.
- Features: `Cmd/Ctrl+Esc` quick launch; IDE diff viewer (`/config` → Diff tool `auto` vs `terminal` — entry appears only while connected); current selection/tab as context (`Read` deny rules block both the text and the open-file notice); `Cmd+Option+K` / `Alt+Ctrl+K` inserts `@file#L1-99`; `getDiagnostics` is the only model-visible MCP tool (`mcp__ide__getDiagnostics`).
- Security: `acceptEdits` / Auto can edit IDE config files that the IDE later executes — prefer Manual on untrusted prompts. `ide` listens on an ephemeral port with a per-start token in `~/.claude/ide/.lock` (or `$CLAUDE_CONFIG_DIR/ide/`) sent as `X-Claude-Code-Ide-Authorization`. Transport is unencrypted `ws://`. Default bind is `127.0.0.1`; **Accept connections from all network interfaces** exposes the port on the LAN in cleartext — use only for WSL2 NAT / remote-IDE, prefer mirrored networking. PreToolUse MCP allowlists must include `mcp__ide__getDiagnostics`.

## Sources

- [JetBrains IDEs](https://code.claude.com/docs/en/jetbrains) — accessed 2026-09-12
- [Permissions](https://code.claude.com/docs/en/permissions) — accessed 2026-09-12
