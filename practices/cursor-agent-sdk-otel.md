---
id: cursor-agent-sdk-otel
title: Agent SDK OpenTelemetry — OTEL_* on the serve host
tags: [cursor, sdk, otel, observability]
status: active
updated: 2026-11-12
when_to_use: Exporting Agent SDK traces/metrics/logs to an OTLP collector, or migrating off serve({ otel })
---

## Summary

An Agent SDK process exports traces, metrics, and logs to your OTLP collector when `OTEL_EXPORTER_OTLP_ENDPOINT` (or per-signal URLs) is set. Protocol defaults to `http/protobuf`; metrics default to **delta** temporality. This is the **bot process**, not Cursor Enterprise OpenTelemetry Export (`cursor-otel-export`), which is server-side team metrics with no traces.

## Notes

- No endpoint → no export. `OTEL_SDK_DISABLED=true` also off. Default protocol `http/protobuf`; `http/json` works; `grpc` logs a warning and falls back to protobuf. Grafana Cloud / Prometheus reject delta — set `OTEL_EXPORTER_OTLP_METRICS_TEMPORALITY_PREFERENCE=cumulative`. `OTEL_LOGS_EXPORTER=otlp` to export logs (`unset` / `none` / `console` do not). `OTEL_LOG_USER_PROMPTS=1` and `OTEL_LOG_TOOL_CONTENT=1` add prompt/tool payloads — treat as PII (`telemetry-redaction-genai`).
- Hosted: list collector host in `hosting.egressDomains` and secret **names** in `hosting.secretNames` (`OTEL_EXPORTER_OTLP_ENDPOINT`, `OTEL_EXPORTER_OTLP_HEADERS`, `OTEL_SERVICE_NAME`). Set values with `agent-sdk secret set` — never `NAME=VALUE` on argv. `service.name` is fixed by the first export; **redeploy** to change it.
- Tag a turn from a tool with `ctx.telemetry.setTraceAttributes` / `setMetricAttributes` / `setLogAttributes`. Outside a tool, `telemetry` from `@grok/agent-sdk/telemetry`. Spans started during a turn get `cursor.conversation.id`; a metric gets it only when you set it (`currentConversationId()` from `@grok/agent-sdk/otel`). Session cap: 32 keys of each kind, keys ≤128 chars, values ≤256. Never a per-turn id, secret, email, or raw user id as a metric attribute (Grafana maps `.` → `_` in metric names).
- Limits: no custom span processors, samplers, views, your own OTel SDK, or library auto-instrumentation. `OTEL_TRACES_SAMPLER` and `OTEL_METRIC_EXPORT_INTERVAL` are read **once at startup**. Import Agent SDK **before** any other OpenTelemetry setup. Create a meter/tracer/logger at the top of `bot/agent.ts` to use the SDK’s providers.
- Migration: delete `serve({ otel })`, `bot/otel.ts`, `bot/instrumentation.ts`, `defineOtel`. Map `serviceName` → `OTEL_SERVICE_NAME`; exporter URL → `OTEL_EXPORTER_OTLP_ENDPOINT` (appends `/v1/traces|metrics|logs`) or the per-signal `*_ENDPOINT` used as written; `logs: true` → `OTEL_LOGS_EXPORTER=otlp`; `otel: false` → no endpoint or `OTEL_SDK_DISABLED=true`.

## Sources

- [OpenTelemetry](https://cursor.com/docs/agent-sdk/guides/opentelemetry) — accessed 2026-11-12
- [OpenTelemetry Export](https://cursor.com/docs/enterprise/opentelemetry-export) — accessed 2026-11-12
- [Agent SDK](https://cursor.com/docs/agent-sdk) — accessed 2026-11-12
