---
id: cursor-agent-sdk
title: Cursor Agent SDK — agents as a versioned bot/ project
tags: [cursor, sdk, orchestration, evals]
status: active
updated: 2026-10-27
when_to_use: Defining a Cursor agent as a bot/ TypeScript project with evals, or choosing it instead of Automations or @cursor/sdk
---

## Summary

**Cursor Agent SDK** (`@grok/agent-sdk`, formerly `@cursor/bdk`) is a **folder of Markdown + TypeScript** that Cursor’s harness runs: instructions, typed tools, skills, MCP, channels, evals, then `agent-sdk deploy` or self-host. It is the same harness as Bugbot, Security Review, Approval Bot, and Rollouts. Not `cursor-sdk` (Python `Agent.create`), not `@cursor/sdk` (`cursor-sdk-typescript`), not the HTTP Cloud Agents API (`cursor-cloud-agents-api`), and not a dashboard Automation (`cursor-automations`). Node **22.13+**; never Bun.

## Notes

- Scaffold: `npm install --global @grok/agent-sdk` then `agent-sdk init ./my-bot` and `agent-sdk dev`. Docs ship as Markdown (`…/docs/agent-sdk.md` plus `.md` on each page). Choose Agent SDK when you want **reviewed, versioned code** around model judgment. Choose an Automation when a prompt + trigger is enough. Choose Grok Bot when you want an in-app agent with no project.
- Layout: agent files under `bot/` (`agent.ts`, required root `instructions.md`, `tools/*.ts`, `skills/*`, `mcp-connections/`, `host-connections/` the model never sees, `subagents/`, `extensions/`, `channels/`, observe-only `hooks/`, `schedules/`, `reminders/`, `artifacts.ts`). **Evals** live in sibling `evals/` (`evals.config.ts` + `*.eval.ts`) — never inside `bot/`. Legacy `agent/` roots still load. Multi-agent slugs: `[A-Za-z0-9][A-Za-z0-9_-]*`, not `v1` / `playground` / `docs`.
- Local loop: `agent-sdk validate --dir .` (nonzero on errors; `serve` refuses errors; warnings do not block). `agent-sdk info` matches `GET /v1/info`. Default model is `grok-4.5` (`effort=high`, `fast=true`). `hosting.egressDomains` are lowercase hostnames (port only for raw TCP). `hosting.secretNames` are names only — never `CURSOR_*` or `NAME=VALUE` on `secret set`.
- Evals call the **real** agent. Guard writes. `agent-sdk eval --dir . --tag smoke` (exit 1 failed cases, 2 bad options / no match). Model turns need a Cursor credential.
- Deploy builds a **pushed** Git ref (`agent-sdk deploy`). Uncommitted changes do not ship. Needs a team with agent hosting; a team service-account key with agent access can deploy. **Privacy Mode** works; **Privacy Mode (Legacy)** refuses deploy, hosted sessions, and evals. Redeploy replaces watched repos — repeat every `--cursor-events-repo`. Sessions, `ctx.host.kv`, and `ctx.host.files` survive replacements; other disk writes may not. First deploy prints an alias token once; rotate with `deployment rotate-token`.
- Access (Deployed Agents): Viewer / `viewer`; Editor / `deployer`; Owner / `admin`. First deploy grants Owner to the deployer and Viewer to the team; later deploys do not change access. A CI service-account deploy grants Owner to the **person who created the account**. Self-host: `agent-sdk serve` on 127.0.0.1 behind TLS/auth, persistent `--state-root`, `--bearer-token` unless a proxy authenticates every caller; enable schedules in **one** process per project.

## Sources

- [Agent SDK](https://cursor.com/docs/agent-sdk) — accessed 2026-10-27
- [Project layout](https://cursor.com/docs/agent-sdk/reference/project-layout) — accessed 2026-10-27
- [Deploy an Agent SDK project](https://cursor.com/docs/agent-sdk/deployment) — accessed 2026-10-27
- [Access](https://cursor.com/docs/agent-sdk/reference/access) — accessed 2026-10-27
- [Evals](https://cursor.com/docs/agent-sdk/evals) — accessed 2026-10-27
- [Agent SDK CLI](https://cursor.com/docs/agent-sdk/reference/cli) — accessed 2026-10-27
- [Agent config](https://cursor.com/docs/agent-sdk/reference/agent-config) — accessed 2026-10-27
- [What's New in Cursor](https://cursor.com/changelog) — accessed 2026-10-27
