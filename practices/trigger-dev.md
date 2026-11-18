---
id: trigger-dev
title: Trigger.dev — durable TypeScript tasks and chat agents
kind: service
tags: [trigger, durability, orchestration, typescript]
status: active
updated: 2026-11-18
when_to_use: Running a TypeScript agent that must survive a deploy, wait for approval, and resume after a crash
---

## Summary

**Trigger.dev** runs durable TypeScript tasks on its cloud or on a server you host. A task can wait, retry, and keep going with no default timeout. `chat.agent` is one long-lived task per conversation: it wakes on a message, checkpoints while idle, and streams to the Vercel AI SDK. The current major is v4. It overlaps Inngest (`inngest`) for durable agent steps, and it expects the AI SDK (`vercel-ai-sdk`) when the workload is a multi-turn chat.

## Notes

- **Access.** Create a cloud account at the login linked from `links`, or follow the self-hosting guide. The docs describe the CLI, a GitHub integration, and a Vercel integration for deploys. Current docs are v4. Pages under `/docs/v2` and `/docs/v3` are older majors. The platform core is Apache-2.0 and `@trigger.dev/sdk` is MIT. Some cloud features are plan-gated.
- **Auth.** Production and staging each have their own API keys. The deployment guide says to create a named key with trigger-only access and set it as `TRIGGER_SECRET_KEY` in the backend that starts runs. Preview branches are separate environments. Chat sessions use a short-lived access token the app mints per chat id.
- **Plans (pricing page, 2026-11-18).** **Free:** **$5** of credits a month, **20** concurrent runs, **5** members, dev and prod, **10** schedules, **1-day** logs and query history, **10** concurrent Realtime connections. When the **$5** is gone, runs stop until you upgrade. **Hobby** is **$10/month**: **$10** credits included, **50** concurrent runs, staging, **5** preview branches, **7-day** logs. **Pro** is **$50/month**: **$50** credits, **200** concurrent runs then **$10** per extra **50**, **25** seats then **$20** per seat, **30-day** logs, Slack support, AWS PrivateLink. Paid plans keep running past included credits and bill the overage. A HIPAA BAA add-on is **$500/month**. Every plan is capped at **1,500** API requests per minute; `batchTrigger` fits up to **1,000** tasks in one call. Staging deploys on cloud require Hobby or Pro.
- **What a run costs.** An invocation is **$0.000025** plus machine time. The default Small 1x machine is **0.5** vCPU and **0.5 GB** at **$0.0000338** per second. Dev runs are not charged. Waits longer than **5 seconds**, and a parent waiting on a child, are checkpointed and are not compute. Concurrency counts only while code is executing.
- **Agents.** Import `chat.agent` from `@trigger.dev/sdk/ai`. The run callback receives `streamText`. Dashboard spans are recorded for AI SDK `generateText`, `streamText`, and `generateObject`. A raw `fetch` or a provider SDK call is not a span. Slack and Linear channels are separate packages. A waiting approval does not use compute. An out-of-memory crash ends the run as `CRASHED` and is not retried.
- **Alternatives.** Inngest when the same durable steps should also be written in Python or Go. LangGraph (`langgraph`) when the loop is a graph you host. Cloudflare Agents (`cloudflare-agents`) when the durable state should be that platform's SQLite.
- **Caveats.** A run stays on the version it started with (`trigger-dev-version-lock`). Python runs only as a build extension inside a TypeScript task. Idempotency keys dedupe the triggers and waits you key, so a reused key does not run a second time.

## Sources

- [Trigger.dev introduction](https://trigger.dev/docs/introduction) — accessed 2026-11-18
- [Pricing](https://trigger.dev/pricing) — accessed 2026-11-18
- [Deployment](https://trigger.dev/docs/deployment/overview) — accessed 2026-11-18
- [AI agents](https://trigger.dev/docs/ai-chat/overview) — accessed 2026-11-18
