---
id: restate
title: Restate — durable agent steps on a journaled runtime
kind: service
tags: [restate, durability, orchestration, workflows]
status: active
updated: 2026-11-19
when_to_use: Running an agent loop on Restate so each model call and tool call survives a crash
---

## Summary

**Restate** journals each step of a handler so a crash resumes at the first unfinished step. You run the agent code; Restate Cloud, Bring Your Own Cloud (BYOC), or a server you operate holds the journal. Fine-grained agent integrations exist for the Vercel AI SDK, OpenAI Agents SDK, Google ADK, Pydantic AI, LangChain, and LiteLLM. Parallel tool calls, streaming inside a step, and errors the agent SDK swallows break that journal (`restate-agent-journal`). Temporal (`temporal`) and DBOS (`dbos`) are the other engines that checkpoint the loop beside your own workers.

## Notes

- **Access.** Sign up at the Cloud URL in `links` (free tier, no card). An environment is one managed cluster. The service process still runs on your compute: Kubernetes, Cloud Run, Lambda, Vercel, Cloudflare Workers, or a container. Cloud can reach a public endpoint, or your process can open a tunnel so the handler stays off the public internet. The same handlers run against a Restate server you install yourself. SDKs: TypeScript, Python, Java/Kotlin, Go, Rust, and Ruby.
- **Auth.** Create an API key in the Cloud UI Developers tab and send it as a bearer token on the environment ingress. The ingress host is `https://<env>.env.<region>.restate.cloud` with region `us` or `eu`; calls use port 8080 and the admin API uses port 9070. The CLI session from `restate cloud login` is separate from that key. Lambda and Cloud Run can use the platform's native identity instead of a key you mint. Enterprise adds SSO, directory sync, and role-based access. Client-side encryption is optional so Cloud operators cannot read payloads.
- **Plans (pricing and cloud pages, 2026-11-19).** An action is a handler start or completion, a `ctx.run` step, an awakeable, a durable sleep, an RPC or message, a durable promise, or a state read or write. A payload action counts once per started 64KiB. **Free:** 100,000 actions a month, community support, no card. Paid Cloud plans start at **$75/month**; each tier includes an allotment, then overage per million, and throughput is rate-limited with burst headroom. BYOC is capacity-priced inside your AWS or GCP account and is the path when payloads must stay in your VPC. Self-hosting the open-source server is free of Restate charges; the pricing page describes that license as permissive and production-usable. The September 2025 launch post cited 50,000 free actions; the pricing page now says 100,000.
- **Where code runs.** Cloud and BYOC operate the journal. Your handler runs the model call and the tools, so provider keys stay with that process. BYOC keeps journals, state, and secrets in your cloud; the control plane receives metrics and operational metadata. The cloud page lists SOC 2 and a HIPAA BAA.
- **Alternatives.** Temporal when you want Workflows and Activities and Actions billing. DBOS when the checkpoint store should be Postgres you already run. Hatchet (`hatchet`) when workers pull tasks from Hatchet Cloud. Inngest (`inngest`) or Trigger.dev (`trigger-dev`) when you do not want to run a journal server.
- **Caveats.** A model call or a tool that is not inside `ctx.run` runs again on replay (`restate-agent-journal`). Every step and state access spends the action allotment. Wrapping the whole agent in one step saves actions and loses per-tool recovery.

## Sources

- [Durable agents](https://docs.restate.dev/ai/patterns/durable-agents) — accessed 2026-11-19
- [Integrating Restate with agent SDKs](https://docs.restate.dev/ai/sdk-integrations/integration-guide) — accessed 2026-11-19
- [Restate Cloud getting started](https://docs.restate.dev/cloud/getting-started) — accessed 2026-11-19
- [Choose how to run Restate](https://docs.restate.dev/hosting/overview) — accessed 2026-11-19
- [Restate pricing](https://restate.dev/pricing) — accessed 2026-11-19
- [Restate Cloud](https://restate.dev/cloud) — accessed 2026-11-19
- [Restate Cloud public launch](https://restate.dev/blog/announcing-restate-cloud-public) — accessed 2026-11-19
