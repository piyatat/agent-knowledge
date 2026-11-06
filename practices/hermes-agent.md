---
id: hermes-agent
title: Hermes Agent — gateway-owned sessions, MCP, skills
tags: [hermes, cli, mcp, skills]
status: active
updated: 2026-11-06
when_to_use: Installing Nous Hermes Agent, attaching MCP/skills, or contrasting its single-gateway sessions with Cursor/Claude/Codex
---

## Summary

**Hermes Agent** (Nous Research; `hermes`) is a multi-surface coding agent: classic CLI, TUI (`hermes --tui`), Desktop, optional **Webapp**, ACP editors, messaging bots, and cron. **v0.23.0** (2026-11-05, “Hearth”) makes **one gateway per machine own every session** — CLI/TUI/Desktop/ACP/bots/cron attach as clients instead of each running its own agent against the same chat. Not Cursor Cloud Agents, not goose (`goose-aaif-agent`), not Crush (`crush-agent`).

## Notes

- First run: `hermes setup --portal` then `hermes` / `hermes chat`. One-shot: `hermes chat -q "…"` or `--query-file` (stdin with `-`). Isolated git worktree: `hermes -w` (interactive) or `hermes -w -z "…"`. Resume: `-r` / `--resume` by id or title; `-c` continues the latest. Skills: Agent Skills `SKILL.md` (`hermes skills`, `hermes chat -s name`). Context files auto-load: `.hermes.md`, `AGENTS.md`, `CLAUDE.md`, `SOUL.md`, `.cursorrules`. Default model when unset: **GLM-5.3**.
- MCP in `~/.hermes/config.yaml` `mcp_servers` (stdio `command`/`args` or remote HTTP). `hermes mcp` installs from a Nous-reviewed catalog (disabled until you pick one); `hermes mcp add` for custom servers. **v0.23.0:** paid MCP tools can declare a per-call cost and a **per-chat spend limit** — the approval prompt shows price + running total and still asks over-limit even in YOLO. `hermes mcp serve` moved to the **`mcp-serve` plugin** (`hermes mcp-serve`); clients must change the command. Treat MCP output as untrusted (`mcp-server-trust-failures`).
- Gateway: every local surface shares one queue and history per profile. **Webapp** serves the Desktop workspace from that gateway (`webapp.enabled` / Settings → Web Access) — **off by default**; Docker/Nix ship it. Desktop keeps every registered gateway connected (this machine, SSH, URL). Rewind: Esc Esc or `/rewind` in TUI/classic CLI (edit/resend or fork; original session unchanged).
- Breaking on upgrade: old built-in `browser_*` tools are gone — use `browser_exec` (Camofox homes get the plugin auto-installed). Desktop needs **macOS 13+** / 64-bit Windows (Electron 44). Word/PowerPoint/Excel skills merged into `microsoft-office`. Plugin catalog grew to 1,050+ entries with a **Verified** vendor tier. ACP: VS Code / Zed / JetBrains (`agent-client-protocol-acp`).

## Sources

- [Hermes Agent v0.23.0](https://github.com/NousResearch/hermes-agent/releases/tag/v0.23.0) — accessed 2026-11-06
- [Features overview](https://hermes-agent.nousresearch.com/docs/user-guide/features/overview) — accessed 2026-11-06
- [MCP](https://hermes-agent.nousresearch.com/docs/user-guide/features/mcp) — accessed 2026-11-06
- [CLI interface](https://hermes-agent.nousresearch.com/docs/user-guide/cli) — accessed 2026-11-06
