---
id: github-copilot-sdk
title: GitHub Copilot SDK — embed the CLI agent runtime
kind: tool
tags: [github, sdk, copilot, orchestration]
status: active
updated: 2026-11-14
when_to_use: Embedding Copilot's coding agent in an app instead of spawning the CLI
---

## Summary

The **GitHub Copilot SDK** (`@github/copilot-sdk` and siblings) is a programmatic client for the **same agent runtime as Copilot CLI**: planning, tools, file edits, streaming, multi-turn sessions. GA since **2026-06-02**. Not the HTTP Cloud Agents API, not Cursor Agent SDK (`cursor-agent-sdk`), not Claude Agent SDK. Node/Python/.NET bundle the CLI; Go/Java/Rust need a CLI install or their bundler.

## Notes

- **Install:** TypeScript `npm install @github/copilot-sdk` (Node **^20.19 or ≥22.12**). Python `pip install github-copilot-sdk` (3.11+). Go `go get github.com/github/copilot-sdk/go` (1.24+). .NET `dotnet add package GitHub.Copilot.SDK` (8.0+). Rust `cargo add github-copilot-sdk`. Java Maven `com.github:copilot-sdk-java` (17+). Quickstart: create a `CopilotClient`, `createSession`, `sendAndWait` / event handlers, then `stop`.
- **Auth:** signed-in CLI user (default); OAuth/`gho_`/`ghu_`/`github_pat_` via `gitHubToken` + `useLoggedInUser: false` (classic `ghp_` is **not** supported); env `COPILOT_GITHUB_TOKEN` → `GH_TOKEN` → `GITHUB_TOKEN`; org **installation token** (`github-copilot-s2s-auth`); **BYOK** (Foundry/OpenAI/Anthropic — no Copilot seat). Priority: explicit token → `GITHUB_COPILOT_API_TOKEN`+`COPILOT_API_URL` → env → stored CLI login → `gh auth`. Multi-user: per-session token or `gitHubTokenProvider` (`expiresIn` required; no fallback to ambient creds).
- **Limits / pricing:** Copilot subscribers including **Free**; non-subscribers use BYOK and pay the provider. Org S2S bills the org under its model policy/budget. Session tools and MCP inherit CLI permission/sandbox policy (`github-copilot-managed-permissions`, `github-copilot-sandbox`).
- **Capabilities:** custom tools, MCP stdio/HTTP (`github-copilot-mcp`), prompt-section edits, hooks, OpenTelemetry, cloud/remote sessions, fleet (`github-copilot-fleet`). `mode: "empty"` plus unique session IDs for multi-tenant hosts.
- **Alternatives:** drive `copilot -p` (`github-copilot-cli`); Cursor `@grok/agent-sdk` / `@cursor/sdk`; Claude Agent SDK; OpenAI Agents / Codex SDK. Choose this SDK when you need Copilot’s runtime **inside your process**, not a terminal.
- **Caveats:** Node/.NET ship a pinned CLI snapshot; `COPILOT_CLI_PATH` overrides. Do not `approveAll` when managed settings are on. Treat prompts and MCP output as untrusted (`prompt-injection-agent-defense`). npm README may still say “technical preview” — GitHub’s changelog is GA.

## Sources

- [Copilot SDK is now generally available](https://github.blog/changelog/2026-06-02-copilot-sdk-is-now-generally-available/) — accessed 2026-11-14
- [Build your first Copilot-powered app](https://docs.github.com/en/copilot/get-started/sdk-quickstart) — accessed 2026-11-14
- [Authentication (Copilot SDK)](https://docs.github.com/en/copilot/how-tos/copilot-sdk/auth/authenticate) — accessed 2026-11-14
- [Using MCP servers with the GitHub Copilot SDK](https://docs.github.com/en/copilot/how-tos/copilot-sdk/features/mcp) — accessed 2026-11-14
- [Server-to-server authentication](https://docs.github.com/en/copilot/how-tos/copilot-sdk/auth/server-to-server-tokens) — accessed 2026-11-14
- [github/copilot-sdk](https://github.com/github/copilot-sdk) — accessed 2026-11-14
