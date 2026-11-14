---
id: a2a-cli
title: A2A CLI — official a2a client for cards, send, tasks
kind: tool
tags: [a2a, cli, orchestration, interoperability]
status: active
updated: 2026-11-14
when_to_use: Calling an A2A agent from a shell, CI job, or coding harness without writing SDK code
---

## Summary

**A2A CLI** (`a2a`) is the official command-line client for **Agent2Agent protocol v1.0**: resolve an Agent Card, send a message, stream or poll a task. Maintained by the A2A Project (Apache-2.0). Built on the A2A Go SDK. Not an MCP client, not ACP, and not a production agent server (the bundled `--echo` / `--exec` servers are for demos).

## Notes

- **Install:** Homebrew `brew tap a2aproject/a2a-cli https://github.com/a2aproject/a2a-cli && brew install a2a`. Windows `winget install a2aproject.a2acli`. macOS/Linux script `curl -fsSL https://raw.githubusercontent.com/a2aproject/a2a-cli/main/install.sh | bash` (`A2A_INSTALL_DIR`, `A2A_VERSION` e.g. `0.3.1`). `go install github.com/a2aproject/a2a-cli@latest` names the binary **`a2a-cli`** — rename to `a2a`. Or a prebuilt from GitHub Releases.
- **Access path:** `a2a card get <url>`; `a2a send -a <host|card-url|path|urn> "…"`. `--stream` for live events; `--async` then `a2a task get … --wait`. `-e` + one `--transport rest|jsonrpc|grpc` skips the card. Coding agents: `npx skills add https://github.com/a2aproject/a2a-cli --skill a2a-cli` (skill does **not** install the binary). Claude Code plugin: `/plugin marketplace add a2aproject/agent-plugins` then `/plugin install a2a-cli@a2a-plugins`.
- **Auth:** `--auth "Bearer <token>"` (shorthand for `--svc-param Authorization=…`). Prefer `A2ACLI_AUTH` or `~/.config/a2a-cli/.env` over argv. Extra headers: `--svc-param k=v`. `--tenant` on every request. `--extended` card fetch may need auth. Never commit tokens.
- **Limits:** default request timeout **30s** (`--timeout`). Experimental AI Catalog lookup (`a2a catalog add|search`, `-a urn:…`). JSON/JSONL (`-o json|jsonl`) and documented exit codes for CI. Config precedence: flag > env `A2ACLI_*` > local `.env` > `~/.config/a2a-cli/config.yaml` > global `.env`. Inspect with `a2a config show`.
- **Alternatives:** language SDKs (Python/Go/JS/Java/.NET/Rust) when you need an in-process client; Gemini CLI remote subagents (`gemini-cli-remote-subagents`); Cursor peer agents (`cursor-agent-sdk-peers`). Custom transports: drop `a2a-transport-<name>` on `PATH` (`a2a transport list`).
- **Caveats:** `--echo` / `--exec` wrap stdin/stdout scripts — **not** for production. Treat agent-card text and task payloads as untrusted (`prompt-injection-agent-defense`). `a2a skill` reprints the current SKILL.md if your copy drifted.

## Sources

- [Meet the A2A CLI](https://a2a-protocol.org/latest/blog/2026/10/01/introducing-a2a-cli/) — accessed 2026-11-14
- [a2aproject/a2a-cli README](https://github.com/a2aproject/a2a-cli) — accessed 2026-11-14
- [a2a-cli SKILL.md](https://raw.githubusercontent.com/a2aproject/a2a-cli/main/skills/a2a-cli/SKILL.md) — accessed 2026-11-14
- [A2A Protocol](https://a2a-protocol.org/latest/) — accessed 2026-11-14
