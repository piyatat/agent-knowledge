---
id: letta-code
title: Letta Code — memory-backed coding CLI
kind: tool
tags: [letta, cli, memory, skills]
status: active
updated: 2026-11-15
when_to_use: Running a terminal coding agent that keeps memory across machines, or calling Letta agents from another MCP client
---

## Summary

**Letta Code** (`letta`) is Letta’s terminal coding agent. A local agent is created on first run and stores state on the machine with no Letta login. Sign in when the same agent should be reachable from `chat.letta.com`, other computers, or another MCP client. It is not Claude Code, Codex, or a stateless one-shot script unless you pass `--ephemeral`.

## Notes

- **Install.** Node.js **22.19+**: `npm install -g @letta-ai/letta-code`. An older Node can silently install an older CLI. Do not use `sudo` for that npm install — root ownership blocks the CLI’s self-update. Alternative: `uv tool install letta` or `pipx install letta` (Python 3.9+; wheels are glibc Linux 2.28+ x86-64/ARM64, macOS 14+, Windows x64). Alpine/musl, 32-bit, and Windows ARM64 are unsupported. The CLI checks for updates and installs them in the background; they apply on the next start.
- **Auth and backends.** First run asks local vs sign-in. `letta --backend local` keeps agents on disk. `letta --backend cloud` (or `/login`) uses Letta’s host. `letta backend local|cloud` changes the saved default; `letta setup` reopens the menu. Headless scripts can set `LETTA_API_KEY`. `/connect` attaches provider API keys, coding plans (the docs name ChatGPT/Codex, Kimi, and Z.AI), or a local inference server.
- **Permissions.** The interactive CLI **starts in `unrestricted`** (auto-allow except explicit denies and safety guards). `Shift+Tab` cycles `unrestricted`, `acceptEdits`, and `standard`. `standard` asks for shell, edits, and subagents. `acceptEdits` auto-allows file edits. `strict` asks for every call, including reads, and is **not** in the Shift+Tab cycle — pass `--permission-mode strict`. `--yolo` is unrestricted. Legacy `default` maps to `standard`; `bypassPermissions` maps to `unrestricted`. Deny rules in `.letta/settings.json` still apply. Another agent’s memory directory is denied even in unrestricted mode unless this parent process was started with `--disable-memory-guard` (subagents ignore that flag). `--tools` removes tools from context; it is not only a prompt gate.
- **Headless.** `letta -p "…"` for one prompt; pipe input the same way. `--ephemeral` does not create or save an agent, memory blocks, or MemFS. `--output-format text|json|stream-json`.
- **Skills and memory.** Open Agent Skills (`agent-skills-open-standard`). Project skills live in `.agents/skills/`, computer skills in `~/.letta/skills/`, and agent skills in that agent’s git-backed MemFS so they travel with the agent. `/init` bootstraps memory. `letta install <source> --agent <id>` accepts a GitHub skill directory, a Hermes-style `official/…` skill, or a ClawHub skill. Treat third-party skills as code (`malicious-skills-supply-chain`).
- **Plans (pricing page, 2026-11-15).** **Free:** $0, up to 3 stateful agents, 5 MiB per memory repository, bring your own keys or buy credits. **Pro:** $20/month, $20 of credits, up to 20 agents, 50 MiB per repository, remote sandboxes billed to credits. **Teams Pro:** $20/seat/month, shared agents. **Enterprise:** custom, SAML/OIDC. Letta-hosted model and CPU tool time spend credits; bash in the CLI runs on your machine and does not. The docs’ own guide: heavy coding often exceeds the $20 credit, so pair the CLI with an external coding plan.
- **Hosted MCP.** Any client that can send a bearer header can use `https://api.letta.com/mcp` with `Authorization: Bearer <LETTA_API_KEY>` to list, create, and message agents. OAuth-only clients are not supported. Those messages run on a **cloud computer in unrestricted mode**.
- **Alternatives.** Claude Code or Codex when you already pay for that subscription and do not need Letta’s agent memory. A framework SDK (`pydantic-ai`, `langgraph`) when you are embedding a loop, not adopting this CLI.
- **Caveats.** Default unrestricted mode plus a cloud MCP session means tool calls are not waiting for a person. Free accounts stop at three agents. Do not commit `LETTA_API_KEY` or skill secrets.

## Sources

- [Letta Code CLI](https://docs.letta.com/platform/cli/index.md) — accessed 2026-11-15
- [CLI reference](https://docs.letta.com/platform/cli/reference/index.md) — accessed 2026-11-15
- [Headless mode](https://docs.letta.com/platform/cli/headless/index.md) — accessed 2026-11-15
- [Configuration](https://docs.letta.com/reference/settings/index.md) — accessed 2026-11-15
- [Permissions](https://docs.letta.com/configuration/permissions/index.md) — accessed 2026-11-15
- [Skills](https://docs.letta.com/configuration/skills/index.md) — accessed 2026-11-15
- [Pricing](https://docs.letta.com/pricing/index.md) — accessed 2026-11-15
- [Hosted Letta MCP server](https://docs.letta.com/platform/hosted-mcp/index.md) — accessed 2026-11-15
