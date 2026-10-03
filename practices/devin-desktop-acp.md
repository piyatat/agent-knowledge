---
id: devin-desktop-acp
title: Devin Desktop — ACP host, Spaces, Agent Command Center
tags: [devin, acp, ux, orchestration]
status: active
updated: 2026-10-03
when_to_use: Running Codex/Claude/OpenCode/Gemini as ACP agents inside Devin Desktop, or grouping sessions into Spaces
---

## Summary

**Devin Desktop** (the Windsurf successor) is an **ACP client**: third-party coding agents run as local stdio subprocesses inside the **Agent Command Center**. **Spaces** group local + cloud Devin sessions, PRs, files, and shared context. Not Cascade rules/MCP (`windsurf-cascade`), not `devin` CLI config (`.devin/` — `devin-cli`), and not Zed’s ACP Registry (`zed-external-agents`).

## Notes

- ACP agents (Pro / Max / Teams; Enterprise needs an admin enable): Codex CLI, Claude Agent, OpenCode, Junie, Gemini CLI, or a custom agent. Enable under Devin User Settings → Agents, then restart. They appear next to Cascade and Devin Local. Restricted Mode disables Cascade, Devin Local, **and** ACP agents (hooks also do not load).
- Local registry: macOS/Linux `~/.windsurf/acp/registry.json` (Next: `~/.windsurf-next/acp/registry.json`); Windows `%USERPROFILE%\AppData\Roaming\Code\User\acp\registry.json`. Command Palette: “Open Local ACP Registry Config”. Devin Local via CLI is `devin acp`. Team admins can push a static “ACP Registry Config”. **Desktop does not download** `distribution.binary.*.archive` URLs — the binary must already be on `PATH`.
- Auth is the agent’s own: `/login` in that agent, or env via the Agents tab / `devin.acp.agentEnv.*` in `settings.json`. Desktop privacy/billing terms do **not** cover the third-party agent. Custom agents must implement `initialize`, `session/new`, `session/prompt`, `session/cancel`. Desktop does not expose ACP session modes (use a `"mode"` config option) or terminal capabilities — run commands in the agent process and stream `tool_call` updates.
- Browser preview works the same as Cascade: the agent proxies the local dev server into the built-in pane; captured elements/console become pending context.
- Spaces: every session is its own Space until you group (drag a session onto another, `Cmd/Ctrl+\` split + New Session, or `Cmd/Ctrl+T`). New sessions inherit Space context when `devin.spaces.shareContext` is on. Kanban columns mix local Cascade sessions and cloud Devin VMs.

## Sources

- [Agent Client Protocol (Devin Desktop)](https://docs.devin.ai/desktop/acp) — accessed 2026-10-03
- [Building a custom ACP agent](https://docs.devin.ai/desktop/acp-custom) — accessed 2026-10-03
- [Spaces](https://docs.devin.ai/desktop/spaces) — accessed 2026-10-03
- [Agent Command Center](https://docs.devin.ai/desktop/agent-command-center) — accessed 2026-10-03
- [Windsurf is now Devin Desktop](https://devin.ai/blog/windsurf-is-now-devin-desktop) — accessed 2026-10-03
