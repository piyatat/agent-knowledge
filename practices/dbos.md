---
id: dbos
title: DBOS — agent checkpoints in Postgres you operate
kind: tool
tags: [dbos, durability, orchestration, postgres]
status: active
updated: 2026-11-19
when_to_use: Checkpointing an agent loop in Postgres you operate, with optional Conductor recovery across workers
---

## Summary

**DBOS Transact** is an open-source library that checkpoints workflow inputs and step outputs in a database you run. After a crash, the workflow function runs again and each finished step returns its checkpoint. Python defaults to SQLite; production and the TypeScript library use Postgres. **DBOS Conductor** is the optional control plane for multi-worker recovery, the console, and retention. A model or tool call that is not a step runs again (`dbos-step-replay`). Restate (`restate`) and Temporal (`temporal`) keep that journal in their own server.

## Notes

- **Access.** Install from the quickstart linked in `links`. The library needs no DBOS account. Python, TypeScript, Go, and Java are the documented languages. Agent wrappers exist for Pydantic AI, LlamaIndex, the OpenAI Agents SDK, Google ADK, and the Vercel AI SDK (`@dbos-inc/vercel-ai` requires DBOS v4.27+ or v5, AI SDK v7+, and Postgres). Conductor is a separate signup at the DBOS Console. Conductor sits off the execution path: workflows keep running while the websocket is down, and recovery resumes when it reconnects.
- **Auth.** Conductor API keys are created in the console, do not expire unless you revoke them, and the secret is shown once. The app name in configuration must match the name registered in Conductor. Set the key as `DBOS_CONDUCTOR_KEY` (or the language's conductor field) and install the enterprise package at the same minor version as Transact. Use one Conductor app per environment. Metadata-only mode (Teams and above) sends workflow metadata and withholds inputs and outputs; the app can force that mode itself. Conductor does not read your Postgres database.
- **Plans (pricing page, 2026-11-19).** Transact itself is free. Conductor is billed in checkpoints: one per workflow start (including an enqueue) and one per step, including sleeps, notifications, events, streams, and workflow-management calls made inside a workflow. **Pro** is **$99/month**: 2 seats, 3 apps, 2 workspaces, **1 million** checkpoints then **$50** per million, plus Conductor, distributed recovery, auto-upgrade, suspension, and external checkpoint storage. **Teams** is **$499/month**: 10 seats then **$50** per seat, 10 apps then **$50** per app, 2 workspaces then **$100** per workspace, **10 million** checkpoints then **$40** per million, RBAC, OpenMetrics, metadata-only mode, SOC 2 Type 2, and HIPAA. **Enterprise** adds sharded Postgres, SSO/SAML, and self-hosted Conductor. Self-hosted Conductor is a proprietary license; a trial key is for development, and production needs a paid key.
- **Where state lives.** Checkpoints stay in your system database. Conductor's hosted console receives workflow metadata over the websocket and, unless metadata-only mode is on, the inputs and outputs needed to draw the run. The vendor's privacy claim is that Conductor does not store application data.
- **Alternatives.** Restate when the journal should be a dedicated server or Restate Cloud. Temporal when you want its Cloud and Activity model. Inngest (`inngest`) when the steps should run on Inngest's runtime. LangGraph (`langgraph`) when the loop is a graph you checkpoint yourself.
- **Caveats.** Custom tools and model calls that are not steps re-execute on replay (`dbos-step-replay`). A second worker does not adopt a crashed run until Conductor (or another coordinator) is connected. Python on the default SQLite file is a single-process store. Self-hosted Conductor with OAuth left off treats every caller as a local admin and does not check API keys on the websocket.

## Sources

- [DBOS AI quickstart](https://docs.dbos.dev/ai/ai-quickstart) — accessed 2026-11-19
- [DBOS architecture](https://docs.dbos.dev/architecture) — accessed 2026-11-19
- [DBOS quickstart](https://docs.dbos.dev/quickstart) — accessed 2026-11-19
- [Vercel AI SDK integration](https://docs.dbos.dev/integrations/vercel-ai) — accessed 2026-11-19
- [DBOS Conductor overview](https://docs.dbos.dev/conductor/overview) — accessed 2026-11-19
- [Self-hosting Conductor](https://docs.dbos.dev/conductor/self-hosting/hosting-conductor) — accessed 2026-11-19
- [DBOS pricing](https://www.dbos.dev/dbos-pricing) — accessed 2026-11-19
- [DBOS Console](https://console.dbos.dev/) — accessed 2026-11-19
