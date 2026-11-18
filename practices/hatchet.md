---
id: hatchet
title: Hatchet — durable tasks on workers you run
kind: service
tags: [hatchet, durability, orchestration, workflows]
status: active
updated: 2026-11-18
when_to_use: Running an agent loop as durable tasks on workers you operate, in Hatchet Cloud or on an engine you host
---

## Summary

**Hatchet** schedules tasks for workers you run, in Python, TypeScript, Go, or Ruby. Hatchet Cloud operates the engine. The same code talks to a self-hosted engine (MIT, PostgreSQL). A durable task checkpoints sleeps, event waits, and child runs so an agent loop can resume. Code in the durable function itself runs again on resume (`hatchet-durable-side-effects`). Inngest (`inngest`) and Trigger.dev (`trigger-dev`) host the steps. Temporal (`temporal`) is the other engine you pair with your own workers.

## Notes

- **Access.** Register at the Cloud URL in `links`, then create an organization and a tenant (one tenant per environment). Workers and triggers use an API token from that tenant. The docs also describe a local engine with no Cloud account. The Cloud quickstart points at a CLI that can register a local MCP server for a coding agent; that is optional.
- **Auth.** Create tokens in Settings → API Tokens. The secret is shown once. An unrestricted token registers workers and completes tasks over gRPC. It bypasses tenant member role checks on the REST API, and it cannot list, create, or revoke tokens. A read-only token has the tenant VIEWER REST permissions and gets `PermissionDenied` on every gRPC call, including worker registration. Task inputs, outputs, event payloads, and logs are visible to API tokens even when a member's "can view payloads" setting is off. You cannot edit a token's access; revoke it and create another. Workers read `HATCHET_CLIENT_TOKEN`.
- **Plans (pricing page, 2026-11-18).** Pay-as-you-go has two rows. **No card:** **2,000** task runs and **2,000** events per day, **10** workers, **2,000** slots, **10,000** queued tasks, **10** webhooks, **10** crons, **500 MB** active storage, **500 MB** logs, **1-day** retention, **1** tenant, **3** users. **Card on file:** **1 million** runs and **1 million** events included each month, then **$30** per million runs and **$5** per million events; **100** workers, **10,000** slots, **1,000,000** queued tasks, **100** webhooks, **1,000** crons; **10 GB** of active storage per day then **$0.03** per GB-hour; **10 GB** of logs then **$0.0004** per GB-hour; **7-day** retention; **10** tenants; **50** users then **$10** per user. Durable streams require a card and cost **$0.10** per GB published and again for each subscriber they are delivered to. Spawning a child counts as another task run. A failed execution counts; retries of that execution do not. Custom covers about **100 million** runs a month, SSO, HIPAA, dedicated capacity, or a self-hosted or bring-your-own-cloud engine. SOC 2 Type II is on every Cloud plan. Past the included cap, new tasks are dropped.
- **Where code runs.** The Cloud control plane is in **aws-us-west-2**. Data planes listed as live: Oregon, N. Virginia, Ireland, and Sydney. Your workers run the agent code, so model keys and tool credentials stay with those processes. Self-host when the engine itself must sit in a network you operate.
- **Alternatives.** Temporal when you want its Workflow and Activity model and Cloud Actions billing. Inngest or Trigger.dev when you do not want to operate workers. LangGraph (`langgraph`) when the loop is a graph you checkpoint yourself.
- **Caveats.** A model call or a database write inside the durable function runs again after eviction (`hatchet-durable-side-effects`). A read-only token cannot start a worker. A full queue rejects new tasks (**10,000** with no card, **1,000,000** with one).

## Sources

- [Hatchet Cloud quickstart](https://docs.hatchet.run/v1/quickstart) — accessed 2026-11-18
- [Cloud vs OSS](https://docs.hatchet.run/v1/cloud-vs-oss) — accessed 2026-11-18
- [API tokens](https://docs.hatchet.run/v1/api-tokens) — accessed 2026-11-18
- [Pricing](https://hatchet.run/pricing) — accessed 2026-11-18
- [Region availability](https://docs.hatchet.run/v1/region-availability) — accessed 2026-11-18
- [Durable tasks](https://docs.hatchet.run/v1/durable-tasks) — accessed 2026-11-18
