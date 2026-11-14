---
id: pi-coding-agent
title: Pi — minimal terminal coding agent
kind: tool
tags: [pi, cli, skills, extensions]
status: active
updated: 2026-11-14
when_to_use: Running a minimal terminal coding agent you extend with packages, or embedding the Pi SDK
---

## Summary

**Pi** (`pi`, package `@earendil-works/pi-coding-agent`) is Earendil’s terminal coding agent: a small harness you extend with skills, prompt templates, extensions, and Pi packages. It also runs headless (print, JSON, or RPC) and as a TypeScript SDK. Hosted durable runs of the same loop are Cloudflare’s Pi harness (`cloudflare-agents`). OpenClaw is a documented integration (`openclaw-agent`).

## Notes

- **Install:** macOS, Linux, or Windows via `curl -fsSL https://pi.dev/install.sh | sh` (Windows: the PowerShell installer). The installer pins dependencies; `pi update` updates that install. npm (`npm install -g --ignore-scripts @earendil-works/pi-coding-agent`) needs **Node.js 22.19+** and does not pin transitive dependencies. Nix: `nix profile add github:earendil-works/pi/stable` (`pi update` does not update a Nix install). Uninstall leaves `~/.pi/agent/` (credentials, sessions, packages) in place.
- **Auth:** bring a subscription, API key, or local model. `/login` (or `pi auth login <provider>`) stores credentials in `auth.json`. `--no-browser` uses a device code or pasted redirect for SSH. `pi auth logout` drops the stored credential only — it does not unset env vars or revoke the provider token. CI can set a provider env var (for example `ANTHROPIC_API_KEY`) so Pi does not store the key. `auth.json` holds keys and OAuth tokens; do not commit it. `pi auth print-api-key` and `print-bearer-token` write secrets to stdout.
- **Instructions and tools:** persistent folder instructions start with `AGENTS.md` (also `CLAUDE.md`; `AGENTS.override.md` replaces those in the same directory). Context files load **even when project trust is declined** unless you pass `--no-context-files`. Skills are `SKILL.md` folders (name and description in the prompt; full text on demand). MCP: `pi mcp add` (stdio or streamable HTTP); user servers live in `~/.pi/agent/mcp.json`, project servers in `.pi/mcp.json` after trust. Packages: `pi install npm:…` or `git:…` (user `~/.pi/agent/settings.json`, or `--local` → `.pi/settings.json`). Packages can run extension code. A failed package install warns and skips that package; Pi retries next start.
- **Trust is not a sandbox.** Pi reads, edits, and runs commands as the OS user that started it, and **does not ask before every tool call**. Project trust only decides whether `.pi` settings, MCP, extensions, skills, prompts, themes, and project `.agents/skills` load. `--approve` / `--no-approve` override that decision. Print, JSON, and RPC cannot show the trust prompt: with `defaultProjectTrust` at its default `"ask"` (or `"never"`) and no saved decision, they **skip** protected project resources. Pi reads `sessionDir` **before** trust is resolved. The practical boundary is a container or VM that does not receive host credentials (`agent-code-sandboxing`).
- **Pricing:** the harness is free. You pay the model provider (or run a local model).
- **Alternatives:** `claude -p` or `codex exec` when you want a vendor permission and sandbox model. Aider when the job is git diffs without an extension host (`aider-agent`). Cloudflare Agents when the same Pi loop must survive eviction on a Durable Object.

## Sources

- [Pi quickstart](https://pi.dev/docs/latest/quickstart) — accessed 2026-11-14
- [Run Pi safely](https://pi.dev/docs/latest/security) — accessed 2026-11-14
- [Providers](https://pi.dev/docs/latest/providers) — accessed 2026-11-14
- [Pi packages](https://pi.dev/docs/latest/packages) — accessed 2026-11-14
- [Command line](https://pi.dev/docs/latest/cli) — accessed 2026-11-14
- [Configuration](https://pi.dev/docs/latest/configuration) — accessed 2026-11-14
- [Pi (GitHub)](https://github.com/earendil-works/pi) — accessed 2026-11-14
