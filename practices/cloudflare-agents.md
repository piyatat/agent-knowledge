---
id: cloudflare-agents
title: Cloudflare Agents — durable agents on Workers
kind: service
tags: [cloudflare, hosting, durable, pi]
status: active
updated: 2026-11-14
when_to_use: Hosting a durable agent with SQLite state and schedules on Cloudflare
---

## Summary

**Cloudflare Agents** is an SDK and runtime for agents on **Durable Objects**. Each named instance has its own SQLite database, WebSockets, schedules, and a harness that calls models and tools. The documented harness is **Pi** (`pi-coding-agent`), which keeps running after the object is evicted. This is Cloudflare hosting, not the local `pi` CLI and not a Linux VM sandbox (`e2b-sandboxes`).

## Notes

- **Install:** a Cloudflare account, Node.js **22.19+**, and Wrangler. `npm i agents` plus the Pi peers the `agents` release resolves (`@earendil-works/pi-durable`, `pi-ai`, `pi-schema`, `chord`, about `~1.5.0`). Pi Durable is **experimental**; each `agents` release supports one Pi minor. The Worker needs `nodejs_compat`, an `ai` binding for the Workers AI examples, and a Durable Object class exported with `"storage": "sqlite"` (`new_sqlite_classes` in migrations). `Lifecycle.install` owns `fetch` and `alarm` — do not define those yourself. Route with `routeAgentRequest` at `/agents/:agent-name/:instance-name`.
- **Auth and models:** the quick start uses **Workers AI** through the `AI` binding and needs no model API key. Other providers go through **AI Gateway** (`agents/models/pi-ai`). A Pi session stores only provider and model id, then looks them up in the registry you registered. Wrangler deploy uses the Cloudflare account you are logged into.
- **What the runtime gives you:** per-instance SQL, WebSockets, a scheduler, MCP client, and optional tools (workspace and code execution via Cloudflare Computer, browser, web fetch, web search, AI Search, payments, Code Mode). Channels documented include chat, email, voice, Slack, and webhooks. State cap in the limits table is **1 GB** per agent. CPU time is **30 seconds**, refreshed by an HTTP request, a scheduled task, or an incoming WebSocket message; wall-clock waits (including an LLM response) are not that CPU cap.
- **Pi harness limits:** there is **no approval step** for tool calls. `abort()` waits until the session is idle. A single model request that streams longer than **15 minutes** can be cut off (alarms run up to 15 minutes; the harness hands off about every 10). Eviction, crash, or a deploy mid-run restarts from the last checkpoint via the wake-up job. Tools marked `replay: "safe"` run again; other in-flight tools return an interrupted result instead of replaying. Partial streamed text is kept and retried under `settings.retry`.
- **Pricing:** you pay Cloudflare for Workers, Durable Objects, and any model or AI Gateway usage. The docs do not publish a single Agents SKU in the pages cited here.
- **Alternatives:** run `pi` locally when the files are on a developer machine. E2B when the job is an isolated Linux VM with pause/resume. Foundry Agent Service or Bedrock AgentCore when the agent must live in Azure or AWS (`foundry-agent-service`, `bedrock-agentcore`).
- **Caveats:** a tool with no approval gate plus a workspace is remote code execution on that object. Pin the Pi minor your `agents` version expects. Untrusted channel text is still untrusted input (`prompt-injection-agent-defense`).

## Sources

- [Cloudflare Agents](https://developers.cloudflare.com/agents/) — accessed 2026-11-14
- [Build your first Durable Agent](https://developers.cloudflare.com/agents/getting-started/quick-start/) — accessed 2026-11-14
- [Pi harness](https://developers.cloudflare.com/agents/harnesses/pi/) — accessed 2026-11-14
- [Limits](https://developers.cloudflare.com/agents/platform/limits/) — accessed 2026-11-14
- [Agent class](https://developers.cloudflare.com/agents/agent-class/) — accessed 2026-11-14
