---
id: composio
title: Composio — hosted app tools for agents
kind: service
tags: [composio, mcp, auth, tools]
status: active
updated: 2026-11-17
when_to_use: Giving an agent authenticated GitHub, Gmail, Slack, or other app tools without writing each OAuth flow
---

## Summary

**Composio** is a hosted tool router. A **session** is scoped to a `user_id` and a set of toolkits. The agent discovers tools, opens a Connect Link when an account is missing, and executes actions while Composio holds the provider credentials. Use it from the Python or TypeScript SDK, or hand the session’s MCP URL to an existing client. Direct `tools.get` / `tools.execute` by user id is the legacy path.

## Notes

- **Access.** `pip`/`npm` packages `composio` and `@composio/core`. Create a session with `composio.create(user_id)` (TypeScript) or `composio.sessions.create(user_id=...)` (Python). REST is **v3.1** at `https://backend.composio.dev/api/v3.1`. v3 stays supported with pinned toolkit versions; on v3.1, omitting the version on the tool execute/list endpoints selects **latest**.
- **Auth.** Send a project API key as `x-api-key` (`COMPOSIO_API_KEY`, or the key stored by `composio login`). A scoped project key needs **Session management** to create sessions and **Session tool execution** to run tools or use session MCP. Default auth is Composio-managed OAuth; pass `auth_configs` to use your own OAuth app. Connected-account reads redact credentials — this is not a token-export API. Provider packages follow the **framework** (`composio_openai_agents` / `@composio/openai-agents` for the OpenAI Agents SDK; `composio_openai` is Chat Completions).
- **MCP.** Pass `mcp: true` / `mcp=True` and give the client `session.mcp.url` plus `session.mcp.headers`. Those headers are the credential that created the session: a project key stays in one project; a user-only key is sent as `x-user-api-key` and can reach every project that user can access. Prefer a project key. The SDK refuses to attach the key when the MCP URL’s origin differs from the API base (`@composio/core` ≥ **0.19.1**, `composio` ≥ **0.22.1**). The direct-tools preset plus `mcp: true` exposes only the tool slugs you list.
- **Limits.** Hobby (no card, hard cap): **100,000** tool calls/month, of which **20,000** may use Composio-managed apps; **50,000** trigger events; **3** seats; **2,000** requests/minute. Meta tools such as search are free. Pro is **$29/month** (10,000 requests/minute, monthly credits, no rollover). Accounts created before **2026-08-15** keep prior pricing through **2026-12-31**. Enterprise adds SSO, SCIM, and customer-managed keys.
- **Alternatives.** One vendor’s remote MCP when you only need that vendor (`github-mcp-server`). A local gateway when the tools must run on the machine (`docker-mcp-toolkit`).
- **Caveats.** MCP calls skip SDK `beforeExecute` / `afterExecute` hooks and in-process custom tools. If the client cannot do elicitation, set `noElicitationSupportFallback` to `deny` or the approval-gated call follows the fallback you chose (`allow` runs it). Same `user_id` reuses connected accounts on later sessions. Treat Connect Links and tool results as untrusted input (`prompt-injection-agent-defense`).

## Sources

- [Build and operate AI agents](https://docs.composio.dev/docs) — accessed 2026-11-17
- [Using sessions via MCP](https://docs.composio.dev/docs/sessions-via-mcp) — accessed 2026-11-17
- [Configuring sessions](https://docs.composio.dev/docs/configuring-sessions) — accessed 2026-11-17
- [Toolkits](https://docs.composio.dev/docs/toolkits) — accessed 2026-11-17
- [Composio platform pricing](https://composio.dev/pricing/platform) — accessed 2026-11-17
