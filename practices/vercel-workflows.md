---
id: vercel-workflows
title: Vercel Workflows — durable steps that pause and resume
kind: service
tags: [vercel, durability, orchestration, workflows]
status: active
updated: 2026-11-19
when_to_use: Running an agent loop on Vercel that must retry one step, wait for approval, and resume after a deploy
---

## Summary

**Vercel Workflows** is the managed durability service for the open-source Workflow SDK (`workflow` on npm, and the Python `vercel-workflow` package, which is in beta). You write `"use workflow"` and `"use step"` functions. Vercel Functions run the code, Vercel Queues dispatch it, and managed storage keeps the event log. The same code runs on the SDK’s Local World with no setup, or on another host through a World adapter such as Postgres World. `WorkflowAgent` in the AI SDK turns a tool loop into those steps (`vercel-ai-sdk`).

## Notes

- **Access.** Sign up at the Vercel URL in `links`. JavaScript and TypeScript setup guides cover Next.js, Vite, React Router, Astro, Express, Fastify, Hono, Nitro, Nuxt, SvelteKit, and TanStack Start. NestJS is in beta. Python marks workflows and steps with decorators instead of directives. The SDK getting-started page is the library walkthrough.
- **Auth.** Runs execute inside a Vercel project. Team owners can read decrypted run payloads. A non-owner needs the Workflow Run Data Viewer extended permission. Run payloads (inputs, outputs, errors, hook bodies, streams) are encrypted. Run metadata (names, statuses, timestamps, attributes, hook tokens) is not.
- **Pricing (pricing page, 2026-11-19).** Three Workflow resources, plus normal Functions and Queues charges. Hobby includes 50,000 events and 1 GB written per month. Data retained is not available on Hobby. On-demand: $0.02 per 1,000 events, $0.50 per GB written, $0.50 per GB-month retained. A successful step writes three events (`step_created`, `step_started`, `step_completed`); a retry adds `step_retrying`. A suspended sleep or hook uses no compute. Vercel bills the full retention period when the run finishes. Deleting the run later does not refund that charge. Start with auto-delete to skip the retention charge.
- **Limits.** On the default Node runtime, 25,000 events and 10,000 steps per run. Past that the run fails with `MAX_EVENTS_EXCEEDED` and does not resume. QuickJS with snapshotting is exempt from those two caps. Replay can slow after 2,000 events, and an orchestration attempt longer than 240 seconds can abort. Payload cap is 50 MB. Entity storage cap is 2 GB per run, excluding streams. A run is pinned to one region for its life. 4.x runs stay in `iad1`. Multi-region needs `workflow` 5.0.0-beta.33 or later.
- **Retention.** Payloads stay readable for 1 day (Hobby), 7 days (Pro), or 30 days (Enterprise) after the run finishes, and Vercel deletes every copy by 66, 96, or 126 days. Metadata can remain up to a year.
- **Alternatives.** Cloudflare Workflows (`cloudflare-workflows`) on Workers. Inngest, Temporal, Restate, Hatchet, or DBOS when the journal should not be Vercel’s (`durable-agent-workflows`).
- **Caveats.** Values that cross a step boundary must serialize, and the workflow function cannot call Node, the network, or `Date.now()` (`vercel-workflow-serialization`). Runs are pinned to the deployment that started them.

## Sources

- [Vercel Workflows](https://vercel.com/docs/workflows) — accessed 2026-11-19
- [Workflow Pricing and Limits](https://vercel.com/docs/workflows/pricing) — accessed 2026-11-19
- [Workflow Data Retention](https://vercel.com/docs/workflows/retention) — accessed 2026-11-19
- [Workflow SDK getting started](https://workflow-sdk.dev/docs/getting-started) — accessed 2026-11-19
- [Serialization](https://workflow-sdk.dev/docs/foundations/serialization) — accessed 2026-11-19
