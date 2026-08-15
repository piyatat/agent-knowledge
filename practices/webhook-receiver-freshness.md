---
id: webhook-receiver-freshness
title: Webhook receiver freshness checks
tags: [webhooks, monitoring, ops, reliability]
status: active
updated: 2026-08-12
when_to_use: Inbound webhooks can go silent while the HTTP handler still returns 200
---

## Summary

Monitor **last event received** timestamps for high-volume webhook sources — a healthy `/health` route does not prove senders still deliver.

## Notes

- Update freshness on every validated event; expose via metrics or a heartbeat ping.
- Alert when zero events exceed the expected window for that source’s cadence.
- Also track response latency — slow receivers trigger sender retries and duplicates.
- Pair receiver health with downstream worker heartbeats for full pipeline visibility.
- Log provider delivery dashboards (Stripe/GitHub) alongside external probes.

## Sources

- [Monitoring webhook receivers (inbound)](https://cronalert.com/blog/webhook-receiver-monitoring) — accessed 2026-08-12
- [Webhook endpoint monitoring](https://cronalert.com/blog/webhook-endpoint-monitoring) — accessed 2026-08-12
