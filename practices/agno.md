---
id: agno
title: Agno — Python agent SDK and AgentOS
kind: tool
tags: [agno, sdk, python, orchestration]
status: active
updated: 2026-11-17
when_to_use: Building a Python agent, team, or workflow and serving it as an API or MCP server you host
---

## Summary

**Agno** (formerly Phidata) is a Python SDK with three primitives — **Agent**, **Team**, and **Workflow** — plus **AgentOS**, a FastAPI runtime that serves the same objects over HTTP and MCP. You run AgentOS in your own cloud. The control plane at `os.agno.com` is optional. The archived `agno-agi/phidata` repo tells you to move off `phi.*` imports.

## Notes

- **Install.** `uv pip install -U agno` (extras such as `agno[openai,sqlite]` for a local example). You bring the model key (`OPENAI_API_KEY` or another provider). Docs describe 30+ model providers, tools, skills, Pydantic structured I/O, sessions, and human-approval pauses. Register the same objects with `AgentOS` to get the API.
- **AgentOS.** Starter repos (`agentos-docker` and the other `agno-agi/agentos-*` templates) clone a platform that includes Postgres, an MCP server, and a `setup-platform` skill. Read that skill before running it; it is repository-supplied code (`malicious-skills-supply-chain`). Connect the deployment to `os.agno.com` when you want the hosted UI. Company OS (projects, tasks, routines) is part of that platform, not of a one-file `Agent()` script.
- **Auth.** With no JWT and no `OS_SECURITY_KEY`, central auth is off. `authorization=True` checks JWTs (env `JWT_VERIFICATION_KEY`, or `AuthorizationConfig` with your public keys). Scopes gate routes: `agents:read`, `agents:*:run`, `agent_os:admin`, and the same shape for teams and workflows. Control-plane tokens use owner/admin/member roles; custom roles are an Enterprise control-plane feature. Self-host by verifying tokens you or an IdP (WorkOS, Auth0, Okta) sign. `/`, `/health`, `/info`, and the OpenAPI docs routes skip the JWT check.
- **MCP.** `mcp=True` serves `/mcp`. With no security key, JWT, or `mcp_auth`, that endpoint accepts anonymous calls and restricts hosts to localhost. Set `OS_SECURITY_KEY`, JWT auth, a service-account token (`agno_pat_...`), or MCP OAuth before you expose it. Each MCP tool is checked against the scope of the matching REST route. `MCPConfig.allowed_hosts` is the DNS-rebinding guard; an authenticated server skips host checks unless you set the list.
- **Alternatives.** Pydantic AI for a typed Python agent without this runtime (`pydantic-ai`). LangGraph when the control flow must be an explicit durable graph (`langgraph`). The Claude Agent SDK or Codex SDK when the loop should be that product’s coding agent (`claude-agent-sdk`, `openai-codex-sdk`).
- **Caveats.** Open `/mcp` on a reachable host is an unauthenticated agent endpoint. A shared `OS_SECURITY_KEY` proves possession of the key only — it has no per-route scopes. Slack, Telegram, and WhatsApp routes use their own verification, not the central JWT middleware.

## Sources

- [Welcome to Agno](https://docs.agno.com/) — accessed 2026-11-17
- [Agno SDK](https://docs.agno.com/sdk/introduction) — accessed 2026-11-17
- [AgentOS as MCP server](https://docs.agno.com/agent-os/mcp/mcp) — accessed 2026-11-17
- [Security and auth](https://docs.agno.com/features/security-and-auth) — accessed 2026-11-17
- [Self-hosted authorization](https://docs.agno.com/agent-os/security/authorization/self-hosted) — accessed 2026-11-17
- [Phidata repository (archived)](https://github.com/agno-agi/phidata) — accessed 2026-11-17
