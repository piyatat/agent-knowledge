---
id: cloudflare-workflows
title: Cloudflare Workflows — durable steps on Workers
kind: service
tags: [cloudflare, durability, orchestration, workflows]
status: active
updated: 2026-11-19
when_to_use: Running a multi-step agent on Workers that must retry a step and wait days for an approval event
---

## Summary

**Cloudflare Workflows** runs a `WorkflowEntrypoint` on Workers. Each `step.do` persists its result and retries on failure. `step.sleep`, `step.sleepUntil`, and `step.waitForEvent` pause without holding a request open. This is the Workers primitive, separate from Cloudflare Agents (`cloudflare-agents`) and from AI Gateway (`cloudflare-ai-gateway`). Vercel documents a migration from this API onto Vercel Workflows (`vercel-workflows`).

## Notes

- **Access.** Included on Workers Free and Workers Paid. The getting-started guide linked from the docs is the setup page. You bind a Workflow class in Wrangler and start instances from a Worker, Wrangler, or the HTTP API. Instances can be paused, resumed, and terminated.
- **Auth.** The binding uses the Worker’s own credentials. The HTTP API uses the account’s Cloudflare API token. Event delivery is `instance.sendEvent` or the Events HTTP endpoint. `waitForEvent` matches on `type` (up to 100 characters; letters, digits, `-`, and `_`). A `.` in the type is rejected as `workflow.invalid_event_type`.
- **Pricing (pricing page, 2026-11-19).** CPU time and requests follow Workers. Steps and storage are extra. The page says step and storage billing starts **2026-08-10** and that Cloudflare will not bill those two before the date in the billing changelog. Free: 100,000 requests/day shared with Workers, 10 ms CPU per invocation, 1 GB-month storage, 3,000 steps/day. Paid: 10 million requests included then $0.30 per extra million; 30 million CPU-ms included then $0.02 per extra million; 1 GB-month included then $0.20 per GB-month; 500,000 steps included then $0.80 per extra 100,000. Sleep, idle I/O, and waiting do not consume CPU. Retries and rollback handlers are not counted as steps. Storage includes running, errored, sleeping, and completed instances.
- **Limits (limits page).** Free CPU is 10 ms per step, which is too small for a model call. Paid default is 30 seconds of CPU, configurable to 5 minutes via `limits.cpu_ms`. Wall clock per step is unlimited. Non-stream step results and event payloads cap at 1 MiB. Persisted state: 100 MB (Free) or 1 GB (Paid). Steps per instance: 1,024 (Free) or 10,000 (Paid), configurable to 25,000. `step.sleep` and `step.sleepUntil` do not count toward that step cap. Concurrency: 100 (Free) or 50,000 (Paid) per account. Instances in `waiting` do not hold a concurrency slot. Creation rate: 100/s (Free); on Paid, 300/s per account and 100/s per workflow. Completed state is kept 3 days (Free) or 7 days (Paid), configurable up to 30 days on Paid. Some Paid workflows created before the default changed still default to 30 days.
- **Alternatives.** Vercel Workflows when the app already deploys on Vercel. Cloudflare Agents when you want the Agents SDK’s SQLite session rather than a step class. Temporal or Restate when the workers are yours (`durable-agent-workflows`).
- **Caveats.** A `waitForEvent` timeout fails the instance unless you catch it (`cloudflare-workflow-event-timeout`). A 1 MiB step result will not hold a large model trace. Free-plan CPU will not finish an inference call inside `step.do`.

## Sources

- [Cloudflare Workflows](https://developers.cloudflare.com/workflows/) — accessed 2026-11-19
- [Getting started](https://developers.cloudflare.com/workflows/get-started/guide/) — accessed 2026-11-19
- [Workers API](https://developers.cloudflare.com/workflows/build/workers-api/) — accessed 2026-11-19
- [Events and parameters](https://developers.cloudflare.com/workflows/build/events-and-parameters/) — accessed 2026-11-19
- [Limits](https://developers.cloudflare.com/workflows/reference/limits/) — accessed 2026-11-19
- [Pricing](https://developers.cloudflare.com/workflows/reference/pricing/) — accessed 2026-11-19
