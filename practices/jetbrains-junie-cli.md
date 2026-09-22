---
id: jetbrains-junie-cli
title: Junie CLI — terminal agent, headless CI, ACP
tags: [jetbrains, cli, ci, acp]
status: active
updated: 2026-09-22
when_to_use: Running Junie from a terminal or CI, or connecting Junie CLI to a JetBrains IDE over ACP
---

## Summary

**Junie CLI** is the same JetBrains agent as the IDE plugin, in a terminal TUI (Linux/macOS/Windows). Headless one-shots are for CI. Auth: JetBrains AI login, `JUNIE_API_KEY` (junie.jetbrains.com/cli), BYOK (OpenAI, Anthropic, Google, xAI, OpenRouter, GitHub Copilot), or local endpoints. Not `cursor-cli-headless` and not `kiro-cli`. CLI docs still mark the CLI as **EAP**; the IDE agent is GA.

## Notes

- Install from the official scripts (`junie.jetbrains.com/install.sh` / `install.ps1`). Interactive: Plan mode (`Shift+Tab` or `/plan`) writes a design doc before edits; Debug mode (`/debug`) needs a connected JetBrains IDE. `/ide` attaches the CLI to a supported IDE. Model and effort are session knobs.
- **Headless**: `junie --auth="$JUNIE_API_KEY" "…"`. Interactive launches **ask project trust** before loading project MCP, hooks, agents, skills, and guidelines. Non-interactive, piped, **ACP**, and Gateway runs are **trusted by design** — only use them in repos you trust. Trust markers live under the CLI trust dir; delete to revoke.
- ACP is how the GA IDE integration talks to the same engine (`agent-client-protocol-acp`). Headless/ACP inherit project-scoped config without a prompt — treat that as a supply-chain surface (`malicious-skills-supply-chain`).
- Config the agent can load: MCP servers, hooks, custom agents, skills, `AGENTS.md` (`jetbrains-junie`). Pair CI reviews with a scoped token, not a personal IDE login. `--review` is the CLI/plugin review entry (`jetbrains-junie`).

## Sources

- [Junie CLI quickstart](https://junie.jetbrains.com/docs/junie-cli.html) — accessed 2026-09-22
- [Junie headless mode](https://junie.jetbrains.com/docs/junie-headless.html) — accessed 2026-09-22
- [Junie leaves Beta](https://blog.jetbrains.com/junie/2026/06/junie-coding-agent-out-of-beta/) — accessed 2026-09-22
