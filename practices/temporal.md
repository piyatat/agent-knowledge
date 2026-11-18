---
id: temporal
title: Temporal — durable workflows for agent loops
kind: service
tags: [temporal, durability, orchestration, workflows]
status: active
updated: 2026-11-18
when_to_use: Running an agent loop that must survive a worker crash and wait days for approval
---

## Summary

**Temporal** is a durable execution system. A Workflow resumes after a crash, a timeout, or a multi-day wait for a person to approve a step. The Workflow holds the agent loop. Model calls, tool I/O, and other side effects run as Activities, which are recorded once and replayed from history (`temporal-workflow-io`). Temporal Cloud is the hosted service. The same Workflow model runs on a server you operate. Inngest (`inngest`) and Trigger.dev (`trigger-dev`) cover the same job on their own runtimes.

## Notes

- **Access.** Sign up at the Cloud URL in `links`. You can also subscribe through AWS Marketplace or GCP Marketplace, with billing on that cloud account. Create a Namespace, then connect Clients and Workers. The durable-AI docs list cookbook recipes (tool calling, MCP, structured output, human approval) and integrations for the Vercel AI SDK, Claude Agent SDK, Google ADK, LangGraph, Mastra, OpenAI Agents, Pydantic AI, Strands, and Spring AI.
- **Auth.** Each Namespace uses API keys or mTLS. The Cloud get-started guide recommends API keys unless you already run a private CA. The gRPC endpoint is `<namespace>.<account_id>.tmprl.cloud:7233`, and the namespace argument is `<namespace>.<account_id>`. The CLI reads `TEMPORAL_API_KEY`. The create response returns the secret once. A new or re-enabled key can answer `Request unauthorized` until it propagates, usually within a minute. An API-key Namespace cannot later turn mTLS on beside keys; switching methods is one change, and API-key clients stop as soon as you save.
- **Plans (pricing page, 2026-11-18).** Consumption is Actions, storage, and a support plan. **Developer:** no base fee, or 10% of usage, whichever is greater; Actions stay **$50 per million** at every volume. **Business:** the greater of **$500/month** or 10% of usage, with **2.5 million** Actions, **2.5 GB** active storage, and **100 GB** retained storage included, then volume discounts (**$50** per million for the first 5 million over the allocation, down to **$25** per million between 100 million and 200 million). Enterprise and Mission Critical are annual. Active storage above the allocation is **$0.042** per GB-hour; retained storage is **$0.00105** per GB-hour. Closed histories stay for a retention period you set per Namespace, up to **90 days**; longer retention uses Export.
- **What an agent run costs.** Starting a Workflow, scheduling or retrying an Activity, a Signal, an accepted or rejected Update, a Timer, and a Heartbeat that reaches the server are Actions. Replay on the Worker is not billed. A Query is billed, including opening the call stack in the Cloud UI. The `__temporal_workflow_metadata` query is excluded. SDKs throttle Activity heartbeats; the default is 80% of the heartbeat timeout. Action metrics can differ from the bill by up to **5%**. Use the usage dashboard or Billing API for the metered total. One Schedule fire is three Actions.
- **Alternatives.** Inngest when the durable steps should also be written in Python or Go on that platform. Trigger.dev when the loop is TypeScript `chat.agent` on the Vercel AI SDK. Hatchet (`hatchet`) when the loop should spawn child tasks from Python, TypeScript, Go, or Ruby workers you run. LangGraph (`langgraph`) when you want an explicit checkpointed graph. Cloudflare Agents (`cloudflare-agents`) when the durable state should be that platform's SQLite.
- **Caveats.** A model call or a tool that does I/O inside Workflow code runs again on replay (`temporal-workflow-io`). A chatty heartbeat on a long model Activity multiplies Actions. A long-lived agent should continue-as-new so Event History does not grow without a bound. Fairness, while enabled, adds **0.1** Action per Action per hour on that Namespace.

## Sources

- [Durable AI](https://docs.temporal.io/ai) — accessed 2026-11-18
- [Get started with Temporal Cloud](https://docs.temporal.io/cloud/get-started) — accessed 2026-11-18
- [Temporal Cloud pricing](https://docs.temporal.io/cloud/pricing) — accessed 2026-11-18
- [Temporal Cloud Actions](https://docs.temporal.io/evaluate/cloud/actions) — accessed 2026-11-18
- [Manage API keys](https://docs.temporal.io/cloud/api-keys) — accessed 2026-11-18
- [Namespaces](https://docs.temporal.io/cloud/namespaces) — accessed 2026-11-18
- [Temporal design patterns](https://docs.temporal.io/design-patterns) — accessed 2026-11-18
- [OpenAI Agents SDK integration](https://docs.temporal.io/develop/python/integrations/openai-agents) — accessed 2026-11-18
