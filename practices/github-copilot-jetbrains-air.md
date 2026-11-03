---
id: github-copilot-jetbrains-air
title: Copilot in JetBrains Air — ACP agent, local and Air Teams cloud
tags: [github, acp, jetbrains, sandbox]
status: active
updated: 2026-11-03
when_to_use: Delegating Copilot tasks from JetBrains Air (IDE or Air Teams cloud) instead of the Copilot plugin, AI Assistant, or GitHub-hosted cloud sandbox
---

## Summary

**GitHub Copilot in JetBrains Air** (2026-11-03) is Copilot as an **ACP agent** inside Air’s task list. Local tasks run in a JetBrains IDE; **Air Teams** cloud tasks run Copilot in a **fresh VM Docker container** and bill the **Copilot plan**, not JetBrains AI credits. Wire protocol is Copilot CLI’s ACP server (`github-copilot-cli`). Not the Copilot plugin / AI Assistant ACP / CLI-in-terminal trio (`github-copilot-jetbrains`), not GitHub’s cloud sandbox (`github-copilot-sandbox`), and not Junie (`jetbrains-junie`).

## Notes

- **Local:** install Air in a JetBrains IDE, pick GitHub Copilot in Air’s agent picker, connect a Copilot account. Track parallel sessions, use project context and IDE tools, review diffs in-editor. Use alongside the Copilot plugin — Air does not replace completions/NES/review.
- **Cloud (Air Teams):** needs a JetBrains account in an Air Teams-enabled **business** org, a Copilot subscription, and Copilot **enabled by an Air administrator**. Start from the browser (Air → Settings → VCS Providers → GitHub, then repo + remote branch + Copilot) or from the IDE plugin (environment selector → **Cloud**).
- Cloud isolation: Copilot runs in a Docker container on a fresh VM. All traffic goes through a proxy. **No state carries over** between tasks. The agent can build, test, and install packages without touching the laptop.
- Billing / governance: connecting Copilot to Air does **not** request GitHub Copilot permissions; Air may only check subscription/credits when the cloud environment starts (missing credits fail the task). You **cannot** pick personal vs org Copilot plan per task. Air governance/analytics **do not** include Copilot usage. Air admins can **disable** Copilot via policy but **cannot** set Copilot spend limits inside Air.
- ACP: Air runs the official Copilot CLI (`copilot --acp`). Prefer stdio when the IDE spawns the server; `--port` is for a longer-lived socket. `session/new` can set cwd and MCP servers; tool filters and `--effort` are **server-start** flags, not per-session. Interactive slash pickers (`/diff`, `/resume`, `/login`, …) do not run over ACP — if a command is missing from `available_commands_update`, Air will send it to the model as prose.

## Sources

- [GitHub Copilot is now available in JetBrains Air](https://github.blog/changelog/2026-11-03-github-copilot-is-now-available-in-jetbrains-air/) — accessed 2026-11-03
- [Copilot CLI ACP server](https://docs.github.com/en/copilot/reference/copilot-cli-reference/acp-server) — accessed 2026-11-03
- [GitHub Copilot in IDEs](https://docs.github.com/en/copilot/concepts/copilot-surfaces/copilot-in-ides) — accessed 2026-11-03
- [ACP protocol overview](https://agentclientprotocol.com/protocol/overview) — accessed 2026-11-03
