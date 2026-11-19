---
id: vercel-workflow-serialization
title: A Vercel Workflow dies on a non-serializable value or on the Node event cap
kind: knowledge
tags: [vercel, replay, serialization, billing]
status: active
updated: 2026-11-19
when_to_use: A Vercel Workflow run fails with SerializationError or MAX_EVENTS_EXCEEDED, or a model call inside the workflow function never retries
---

## Summary

Vercel Workflows (`vercel-workflows`) replay from an event log. A value that cannot be stored fails the run without a retry. Node, network, and clocks inside the workflow function are not part of that log. On the default Node runtime, 25,000 events end the run for good.

## Notes

- **What must serialize.** Arguments and return values of `start()`, the workflow, and each step are written to the log and restored later. The serialization doc allows JSON values plus `undefined`, `bigint`, `Date`, `RegExp`, `URL`, `Map`, `Set`, typed arrays, and `ArrayBuffer`. Functions, symbols, and ordinary class instances do not round-trip. A class can if it has both static `WORKFLOW_SERIALIZE` and `WORKFLOW_DESERIALIZE`. Those two methods themselves run in the workflow context, so they cannot touch Node, the network, `Math.random()`, or `Date.now()`.
- **Where it fails.** `start()` throws in the caller when the workflow arguments will not serialize. A bad step argument or return becomes `SerializationError`, is not retried, and can be caught around the step call. The recorded input may read `[input unavailable: step argument serialization failed]`. A bad workflow return value cannot be caught. The run ends as `USER_ERROR`.
- **Where side effects belong.** The workflow function cannot use Node APIs (`fs`, `path`, `crypto`), the network, or non-deterministic clocks. Put the model call and each tool in `"use step"`. A method without `"use step"` runs in the workflow context and hits the same wall. Passing an SDK client into a step fails for the same reason. Pass an id and construct the client inside the step.
- **Event cap.** A first-try step writes three events, and each retry writes another. The pricing page says the default Node runtime fails at 25,000 events with `MAX_EVENTS_EXCEEDED` and does not resume. Replay can already be slow past 2,000 events, and an orchestration attempt over 240 seconds can abort. Split work into child workflows, bundle items into fewer steps, or use the QuickJS runtime with snapshotting, which the pricing page exempts from that cap. Each event also spends the Hobby allowance of 50,000 events a month.

## Sources

- [Serialization](https://workflow-sdk.dev/docs/foundations/serialization) — accessed 2026-11-19
- [serialization-failed](https://workflow-sdk.dev/docs/errors/serialization-failed) — accessed 2026-11-19
- [Workflow Pricing and Limits](https://vercel.com/docs/workflows/pricing) — accessed 2026-11-19
