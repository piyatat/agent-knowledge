---
id: kiro-cli
title: Kiro CLI — Amazon Q Developer CLI successor
tags: [kiro, cli, mcp, amazon]
status: active
updated: 2026-09-22
when_to_use: Installing or migrating to kiro-cli from Amazon Q Developer CLI, or adding MCP / custom agents under .kiro/
---

## Summary

**Kiro CLI** (`kiro-cli`, still accepts `q` / `q chat`) is AWS’s terminal coding agent — the next release of Amazon Q Developer CLI. New features land only on Kiro. Same subscription families (Q Developer + Kiro). Not the Agents API (`openai-agents-api`), not Junie (`jetbrains-junie-cli`). Default in-memory agent is `kiro_default`.

## Notes

- Surfaces: Default (coding), **Plan** (`Shift+Tab`), **Guide** (`/guide` — versioned docs + can write agents/prompts/steering). Custom agents are YAML under `.kiro/agents/` (user `~/.kiro/agents`). `/agent swap <name>`. Subagents: `Ctrl+G` crew monitor. Approvals: `y`/`n`/Tab; `/tools trust|untrust|reset`; trust patterns for routine commands.
- MCP: user `~/.kiro/settings/mcp.json`, workspace `.kiro/settings/mcp.json`. Transports stdio + remote HTTP/SSE on IDE/CLI/Web (not Mobile). `kiro://` install links show command/args and **hide** env/header values before write. Per-agent `mcpServers` + `includeMcpJson`. Tool names must match `^[a-zA-Z][a-zA-Z0-9_]*$` and stay ≤64 chars with prefix; empty descriptions are dropped; >10k-char descriptions warn (`tool-description-hygiene`).
- Q → Kiro one-time copy: `~/.aws/amazonq` prompts/agents → `~/.kiro`; `mcp.json` → `~/.kiro/settings/mcp.json` (skip conflicts); rules → `~/.kiro/steering`. Project `.amazonq/` still read; **if both `.kiro` and `.amazonq` exist, `.kiro` wins**. New project agents/prompts save under `.kiro/`. Tool aliases: `fs_read`→`read`, `fs_write`→`write`, `execute_bash`→`shell`, `use_aws`→`aws`. License changed Apache → AWS IP License.
- Auth: Builder ID, IAM Identity Center, plus GitHub/Gmail. `kiro-cli doctor` / `kiro-cli issue`. Logs: `$TMPDIR/kiro-log` (override `KIRO_CHAT_LOG_FILE`). Proxies from v1.8.0 (`HTTP(S)_PROXY`, `NO_PROXY`). Steering/skills: `kiro-steering`, `kiro-skills`. Treat MCP output as untrusted (`mcp-server-trust-failures`).

## Sources

- [Kiro CLI setup](https://kiro.dev/docs/cli/setup/) — accessed 2026-09-22
- [Kiro MCP](https://kiro.dev/docs/mcp/) — accessed 2026-09-22
- [Upgrading from Q CLI](https://kiro.dev/docs/upgrade-guides/migrating-from-q/) — accessed 2026-09-22
- [Upgrade to Kiro (AWS)](https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/upgrade-to-kiro.html) — accessed 2026-09-22
