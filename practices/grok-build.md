---
id: grok-build
title: Grok Build — xAI terminal coding agent
kind: tool
tags: [grok, cli, acp, permissions]
status: active
updated: 2026-11-14
when_to_use: Running xAI's coding agent in a terminal, CI job, or ACP editor instead of Cursor Grok Bot
---

## Summary

**Grok Build** (`grok`) is xAI’s local coding agent: interactive TUI, one-shot headless runs, or ACP over stdio. Cursor **Grok Bot** is the hosted teammate on a shared cloud computer (`cursor-grok-bot`). The Grok model inside Cursor’s Agent panel is neither of those.

## Notes

- **Install:** `curl -fsSL https://x.ai/cli/install.sh | bash` (Windows: `irm https://x.ai/cli/install.ps1 | iex`), or `npm install -g @xai-official/grok` when the shell hosts are blocked. Binary lands under `~/.grok/bin`. The shell installer warns that a Cursor CLI switch file can leave the `grok` and `agent` commands running the Cursor build; it says to run `cursor-agent update --channel cursor` to point those names back at this Grok binary, or delete Cursor’s `grok-switch.json` if the Cursor CLI is gone. `grok update` (`--check`, `--version`, `--alpha`, `--stable`) updates this CLI.
- **Auth:** `grok login` (browser OIDC, refreshable). `grok login --device-auth` for SSH. Headless: `XAI_API_KEY` (not refreshable), or `model.api_key` in `~/.grok/config.toml`. Enterprise can use `auth_provider_command`. Inference for signed-in sessions uses `cli-chat-proxy.grok.com` and `auth.x.ai` (HTTPS). `api.x.ai` is the direct API-key path. `code.grok.com` is remote session sync; blocking it keeps sessions local.
- **Permissions:** default mode is **ask**. **Auto** (`/auto` when the feature is on) lets a classifier approve safe tools. **Always-approve** (`grok --always-approve`, `/always-approve`) approves tool calls. `deny` rules and PreToolUse hooks still apply in auto and always-approve. `deny` wins over `allow`. `[ui] permission_mode` is **user or managed config only** — a project `.grok/config.toml` cannot set it. A remembered “always allow” still prompts for patterns such as `rm` and `git push` unless an explicit config or CLI allow names them. Plan mode still limits edits and still shows plan review under auto or always-approve.
- **Sandbox:** off by default. Profiles: `workspace` (write CWD, `~/.grok/`, temp; network on), `read-only`, `strict` (read limited to CWD and system paths; child network blocked). Linux uses Landlock, macOS Seatbelt. **Child-network limits are Linux-only** — a no-op on macOS for `read-only` and `strict`. Model API and web tools are not blocked by the child-network setting. `~/.grok/` stays writable so sessions can persist. Built-ins do not permanently hide `~/.ssh`; add a custom `deny` list. Set with `--sandbox`, `[sandbox] profile`, or `GROK_SANDBOX`.
- **Project context:** `AGENTS.md` / `CLAUDE.md` / `.grok/rules/` (also `.claude/rules/` and `.cursor/rules/`) from repo root to cwd; deeper files win; gitignored files are skipped; no size cap. Skills from `.grok/skills/`, `~/.grok/skills/`, plugins, and `~/.agents/skills/`. `allowed-tools` on a skill does **not** grant or restrict tools. Plugins can ship skills, agents, hooks, MCP, and LSP. `grok agent stdio` speaks ACP (`agent-client-protocol-acp`). Headless: `grok -p` with `--output-format plain|json|streaming-json`; pass `--no-auto-update` in CI.
- **Pricing:** the product page offers a free try and names Grok 4.7. API-key runs bill the xAI API. This note has no plan table.
- **Alternatives:** Cursor Grok Bot when the job is a named teammate on Cursor’s cloud computer. `codex exec` or `claude -p` when the subscription and sandbox you already pay for should run the task.
- **Caveats:** sandbox off plus ask-mode is the default, so a headless `--always-approve` without `--sandbox` is the account’s full user. Treat repo rules, skills, and MCP as code (`malicious-skills-supply-chain`).

## Sources

- [Grok Build overview](https://docs.x.ai/build/overview) — accessed 2026-11-14
- [Permissions](https://docs.x.ai/build/features/permissions) — accessed 2026-11-14
- [Sandbox](https://docs.x.ai/build/features/sandbox) — accessed 2026-11-14
- [Skills, plugins, and marketplaces](https://docs.x.ai/build/features/skills-plugins-marketplaces) — accessed 2026-11-14
- [AGENTS.md](https://docs.x.ai/build/features/project-rules) — accessed 2026-11-14
- [Headless and scripting](https://docs.x.ai/build/cli/headless-scripting) — accessed 2026-11-14
- [CLI reference](https://docs.x.ai/build/cli/reference) — accessed 2026-11-14
- [Enterprise deployments](https://docs.x.ai/build/enterprise) — accessed 2026-11-14
- [Grok Build product page](https://x.ai/build) — accessed 2026-11-14
