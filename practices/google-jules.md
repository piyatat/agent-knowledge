---
id: google-jules
title: Google Jules — async GitHub agent, AGENTS.md, vetted MCP
tags: [jules, google, mcp, agents-md]
status: active
updated: 2026-09-25
when_to_use: Starting a Jules GitHub task, authoring root AGENTS.md for Jules, or calling the Jules API / MCP toolkit
---

## Summary

**Jules** is Google’s **asynchronous** cloud coding agent for GitHub repos (jules.google.com). It clones into a VM, proposes a plan, then edits. Always-on repo guidance is root **`AGENTS.md`**. MCP is a **vetted allowlist**, not arbitrary servers. Not Gemini CLI (`gemini-cli-gemini-md`), not Antigravity (`antigravity-cli`), and not Cursor Cloud Agents.

## Notes

- Start: Google login → Connect GitHub (all or selected repos) → pick repo/branch → prompt → optional environment setup script → **Give me a plan**. Approve the plan before code changes. Leave the tab; enable Settings → notifications for done / needs-input. Docs still call Jules experimental.
- **AGENTS.md**: Jules reads a **repository-root** `AGENTS.md` (agents/tools, I/O conventions, how to work the repo). Keep it current; Jules uses it for plans and completions. Nested copies are not documented as auto-loaded.
- MCP (2026-02-02+): Settings → MCP, **API key** per allowed server. Launch set: Linear, Stitch, Neon, Tinybird, Context7, Supabase. Jules will not attach an unlisted community MCP — the cloud VM is connected to your GitHub tree. Request additions in Settings.
- Automation: CI Fixer retries Jules-created PRs when GitHub Actions fail. Commit authorship (user-wide): Jules-only (default), co-authored, or user-only. A Planning Critic reviews auto-approved plans before execution.
- API: `POST https://jules.googleapis.com/v1alpha/sessions` with `x-goog-api-key`. Supports GitHub-backed and **repoless** sessions (ephemeral image with Node/Python/Rust/Bun; download file outputs). Orchestrate from another agent with `@google/jules-mcp` (`create_session`, `get_session_state`, `send_reply`, diffs). Treat issue/PR text as untrusted (`prompt-injection-agent-defense`).

## Sources

- [Getting started](https://jules.google/docs/) — accessed 2026-09-25
- [Jules changelog](https://jules.google/docs/changelog/) — accessed 2026-09-25
- [Jules API types](https://jules.google/docs/api/reference/types/) — accessed 2026-09-25
- [@google/jules-mcp](https://www.npmjs.com/package/@google/jules-mcp) — accessed 2026-09-25
