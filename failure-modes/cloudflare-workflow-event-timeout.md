---
id: cloudflare-workflow-event-timeout
title: A Cloudflare Workflow wait times out as a hard failure, then queues on resume
kind: knowledge
tags: [cloudflare, approvals, durability, limits]
status: active
updated: 2026-11-19
when_to_use: A Cloudflare Workflow died waiting for approval, or a woken instance stayed queued instead of continuing
---

## Summary

`step.waitForEvent` on Cloudflare Workflows (`cloudflare-workflows`) pauses an instance until a matching event arrives. The default wait is 24 hours. When that timer fires, the instance throws and fails. A waiting instance does not hold a concurrency slot, but waking it can land in the queue if the account is already full.

## Notes

- **Timeout is a failure.** The events doc says a timed-out `waitForEvent` throws and the instance fails. The timeout can be set from 1 second to 365 days. To keep going when nobody approves, catch the error and take the other branch. There is no separate “timed out but still running” status.
- **Match on `type`.** `instance.sendEvent` and the HTTP Events API deliver a `type` plus a payload. The wait matches that `type` (at most 100 characters; letters, digits, `-`, `_`). A `.` in the type returns `workflow.invalid_event_type`. The overview sample on the product page uses a different property name than the Workers API page. Follow the Workers API: the match field is `type`.
- **Concurrency.** Sleeping, retry-wait, and `waitForEvent` move the instance to `waiting`, and waiting instances do not count toward the account cap (100 on Free, 50,000 on Paid) or a per-workflow cap. A very short wait can stay `running` and keep the slot. When the event arrives, the instance needs a free slot. If the account or the workflow is already at its cap, the instance is queued instead of resuming immediately. Lowering a cap does not stop instances that are already running.
- **What else fills the instance.** `step.do` results and event payloads cap at 1 MiB, so an approval payload cannot carry a large diff. `step.sleep` does not count toward the step maximum (1,024 Free, 10,000 Paid by default). CPU while a step is active is 10 ms on Free and 30 seconds by default on Paid. A model call has to live in `step.do` on a Paid workflow with enough `limits.cpu_ms` (up to 5 minutes).

## Sources

- [Events and parameters](https://developers.cloudflare.com/workflows/build/events-and-parameters/) — accessed 2026-11-19
- [Workers API](https://developers.cloudflare.com/workflows/build/workers-api/) — accessed 2026-11-19
- [Limits](https://developers.cloudflare.com/workflows/reference/limits/) — accessed 2026-11-19
- [Concurrency limits](https://developers.cloudflare.com/workflows/build/concurrency-limits/) — accessed 2026-11-19
