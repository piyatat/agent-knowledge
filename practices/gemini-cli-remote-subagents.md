---
id: gemini-cli-remote-subagents
title: Gemini CLI remote subagents — A2A cards and auth
tags: [gemini, a2a, subagent, auth]
status: active
updated: 2026-09-15
when_to_use: Pointing Gemini CLI at a remote A2A agent via .gemini/agents, or configuring apiKey/http/oauth/google-credentials
---

## Summary

Gemini CLI can delegate to **remote** specialists over **A2A**. Define them as Markdown in `.gemini/agents/` (project) or `~/.gemini/agents/` (user) with `kind: remote` plus an Agent Card URL or inline JSON. This is not a local `kind: local` child (`gemini-cli-subagents`) and not Gemini’s own `@google/gemini-cli-a2a-server` package (that **exposes** the CLI as an A2A service).

## Notes

- Required: `name` (slug) and either `agent_card_url` or `agent_card_json`. One file can list **multiple remote** agents; mixed local+remote or multiple locals in one file are **not** supported. Prefer the YAML `|` block scalar for multiline cards. Traffic honors `general.proxy` / `HTTP_PROXY` / `HTTPS_PROXY`.
- Auth (optional `auth` block, aligned with A2A `securitySchemes`): `apiKey` (header, default `X-API-Key`); `http` Bearer / Basic / raw IANA scheme; `google-credentials` (ADC; access token for `*.googleapis.com`, identity token for `*.run.app`; **only those hosts**); `oauth` Authorization Code + PKCE (browser, tokens on disk). Secrets for `apiKey`/`http`: `$ENV_VAR`, `!command`, or literal; `$$` / `!!` escape. Prefer env/command over committed keys.
- Card fetch is unauthenticated first; `401`/`403` retries with auth (public card, protected tasks). All providers retry `401`/`403` up to twice (re-run `!command`). Config is validated against the card’s schemes; `google-credentials` counts as HTTP Bearer.
- `/agents list|reload|enable|disable`. Remote agents are **on** by default; `experimental.enableAgents: false` disables **all** agents (local and remote). `@cli_help` can walk configuration. Treat remote peers as untrusted HTTP apps (`a2a-enterprise-auth`, `prompt-injection-agent-defense`).

## Sources

- [Remote Subagents](https://geminicli.com/docs/core/remote-agents/) — accessed 2026-09-15
- [Subagents](https://geminicli.com/docs/core/subagents/) — accessed 2026-09-15
- [Gemini CLI releases — A2A server package](https://geminicli.com/docs/releases/) — accessed 2026-09-15
