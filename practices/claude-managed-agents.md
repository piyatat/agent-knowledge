---
id: claude-managed-agents
title: Claude Managed Agents — hosted harness, sessions, vaults
tags: [claude, api, sandbox, orchestration]
status: active
updated: 2026-10-20
when_to_use: Calling Anthropic’s hosted agent REST/SDK instead of the Messages API or Claude Agent SDK, or running /claude-api managed-agents-secure
---

## Summary

**Claude Managed Agents** (beta, header `managed-agents-2026-04-01`) is Anthropic’s **hosted harness**: you define an agent, an environment, and a session; the platform runs tools, compaction, and a sandbox. It is not the Messages API (you own the loop), not the Claude Agent SDK (`claude-agent-sdk`), and not Claude Code cloud sessions (`claude-code-on-the-web`). Stateful by design — **not** Zero Data Retention or HIPAA BAA.

## Notes

- Four objects: **Agent** (model, system prompt, tools, MCP, skills); **Environment** (`config.type` `cloud` or self-hosted); **Session** (one agent + one environment; persist files and history); **Events** (you send `user.*` / `system.message`; stream `agent.*` / session status over SSE). Create the session, then send events — or pass `initial_events`. Open the stream **before** the first user event. Stop on `session.status_idle`. Webhooks use different names (`session.status_idled`).
- Built-in toolset `agent_toolset_20260401`: `bash`, `read`, `write`, `edit`, `glob`, `grep`, `web_fetch`, `web_search` (all on by default). `default_config.enabled: false` then enable only what you need. Custom tools run **in your app** (or the self-hosted worker); names must not start with `mcp__` / `ant__`. Tool output over ~100k characters is spilled to a sandbox file. MCP uses the connector, not a custom-tool wrapper, except inside a self-hosted network.
- Security guide (check with Claude Code **`/claude-api managed-agents-secure`** — read-only): prefer cloud unless tools must run on your hosts; set `networking.type: limited` + `allowed_hosts` on every create (omitting `networking` can yield `unrestricted`); keep vault credentials in request headers and scoped hosts; allowlist `web_fetch` / `web_search` domains; `permission_policy` `auto` for reversible sandbox tools, `always_ask` when you cannot undo; no `always_allow` write/shell tool on an agent that reads untrusted input; set a session `budget`. Self-hosted: you own isolation; env-var vault credentials are not supported; web tools still run on Anthropic.
- Author with `ant apply` (version-controlled agent/environment YAML) or `client.beta.{agents,environments,sessions,vaults,deployments}.*`. MCP tunnels and dreaming are a narrower research preview. Delete sessions and uploaded files when you no longer need them.

## Sources

- [Claude Managed Agents overview](https://platform.claude.com/docs/en/managed-agents/overview) — accessed 2026-10-20
- [Secure your Managed Agents deployment](https://platform.claude.com/docs/en/managed-agents/secure-deployment) — accessed 2026-10-20
- [Managed Agents tools](https://platform.claude.com/docs/en/managed-agents/tools) — accessed 2026-10-20
- [Start a session](https://platform.claude.com/docs/en/managed-agents/sessions) — accessed 2026-10-20
- [Session event stream](https://platform.claude.com/docs/en/managed-agents/events-and-streaming) — accessed 2026-10-20
- [v2.1.304 release notes](https://github.com/anthropics/claude-code/releases/tag/v2.1.304) — accessed 2026-10-20
