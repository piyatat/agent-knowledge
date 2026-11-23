---
id: qstash
title: QStash — serverless HTTP queue and scheduler
kind: service
tags: [qstash, upstash, queues, webhooks]
status: active
updated: 2026-11-23
when_to_use: Scheduling or retrying an HTTP call without operating a queue, or pacing deliveries to an agent endpoint
---

## Summary

**QStash** is Upstash’s serverless HTTP queue. You publish a message to QStash; it calls a public URL, retries failures, and can delay, schedule, fan out, or pace those calls. It uses the same Upstash account as Redis (`upstash-redis`) and Vector (`upstash-vector`). The account MCP can enable Prod Pack for a QStash region. Use QStash when the work is “call this URL later and retry.” Use Inngest (`inngest`), Trigger.dev (`trigger-dev`), or Temporal (`temporal`) when the agent loop itself must pause and resume. Use Svix (`svix`) when customers receive webhooks through their own portal.

## Notes

- **Access.** Sign in at `links.get`, open the QStash tab, and pick a region. API calls send `Authorization: Bearer` with the `QSTASH_TOKEN` from that region. The destination has to be a publicly reachable HTTP API. Publish to `https://qstash.upstash.io/v2/publish/` plus that URL. The getting-started page states a 1 MB body limit. The pricing page raises the maximum on paid plans (below). Each delivery includes an `Upstash-Signature` JWT signed with the account’s current signing key, with a next key for rotation. The issuer must be `Upstash`. The subject is the destination URL you published, including after a redirect. The body claim is the SHA-256 of the raw request body. Parsing JSON and serializing it again breaks verification. Anyone who has the signing keys can forge a delivery.
- **Plans (pricing page, 2026-11-23).** Free: 1,000 messages a day, 50 GB bandwidth, 1 MB messages, 7-day max delay, 15-minute max HTTP response, 3-day DLQ and logs, 10 active schedules, 1 URL group, 10 queues, queue parallelism 2, max parallelism 10. Pay as you go: $1 per 100,000 messages; bandwidth free through 50 GB then $0.05 per GB; 10 MB; delay up to 1 year; HTTP response up to 2 hours; DLQ and logs 7 days; the comparison table lists 1,000 active schedules, 100 URL groups, 100 queues, and parallelism 100. The pay-as-you-go detail line also says schedules past 1,000 cost $0.01 each. Fixed 1M is $180 a month (1 TB, 50 MB, 6-hour HTTP response, parallelism 200). Fixed 10M is $420 a month (5 TB, 12-hour HTTP response, parallelism 1,000). Prod Pack is an optional $200 a month per region (uptime SLA, SOC 2, encryption at rest, Prometheus and Datadog) and covers Upstash Workflow in that region too. A request body over the plan’s size returns HTTP 412. An oversized response is trimmed in logs and the DLQ. Daily message and bandwidth caps are described as soft: a short spike is not an immediate block, and sustained excess can become HTTP 429. Publish, enqueue, and batch have no requests-per-second cap; extra messages wait on the parallelism limit. Log and DLQ APIs can return 429.
- **Retries and flow control.** A non-2xx response is retried 3 times unless the message sets `Upstash-Retries`. Delay follows `min(86400, e^(2.5*n))` seconds, so it climbs from about 12 seconds to a one-day cap. A `Retry-After` or rate-limit reset header can replace that delay, still capped at one day. HTTP 489 plus `Upstash-NonRetryable-Error: true` fails the message immediately and moves it to the DLQ. An attempt that exceeds the plan’s max HTTP response duration is aborted. Flow control is per key you choose, not per URL, and one key can cover several URLs. The docs state no cap on how many keys you create. If you set a rate and omit the period, the period is 1 second. Parallelism counts calls that have not returned yet.
- **Billing conflict.** The page overview says retries are free and only published messages count. The FAQ on the same page says each delivery attempt, including each retry, is one billed message, and a fan-out bills once per subscribed endpoint. Details: `qstash-retry-bill-and-signature`.

## Sources

- [QStash getting started](https://upstash.com/docs/qstash/overall/getstarted) — accessed 2026-11-23
- [Verify signatures](https://upstash.com/docs/qstash/howto/signature) — accessed 2026-11-23
- [QStash retry](https://upstash.com/docs/qstash/features/retry) — accessed 2026-11-23
- [QStash flow control](https://upstash.com/docs/qstash/features/flowcontrol) — accessed 2026-11-23
- [QStash pricing](https://upstash.com/pricing/qstash) — accessed 2026-11-23
- [Upstash console](https://console.upstash.com/) — accessed 2026-11-23
