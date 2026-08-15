---
id: heartbeat-dead-man-switch
title: Heartbeat dead-man-switch monitoring
tags: [ops, monitoring, reliability, cron]
status: active
updated: 2026-08-12
when_to_use: Background jobs or automations must prove they ran, not just that an HTTP endpoint is up
---

## Summary

Availability checks prove the receiver responds; **heartbeats** prove processing still happens. Alert when expected pings stop within a grace window.

## Notes

- Worker pings after successful batch/cron; monitor missed intervals or consecutive misses.
- Combine with synthetic canaries for end-to-end latency, not just liveness.
- Separate alerts: endpoint down vs heartbeat stopped vs canary SLA miss.
- Use idempotency keys on heartbeat payloads if retries could duplicate side effects.
- Document grace/tolerance to avoid alert fatigue on brief pauses.

## Sources

- [Cronitor heartbeat monitoring](https://cronitor.io/docs/heartbeat-monitoring) — accessed 2026-08-12
- [incident.io heartbeat monitoring](https://docs.incident.io/alerts/heartbeat-monitoring) — accessed 2026-08-12
- [Webhook + heartbeat monitoring](https://cronalert.com/blog/webhook-endpoint-monitoring) — accessed 2026-08-12
