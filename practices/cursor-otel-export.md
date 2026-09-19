---
id: cursor-otel-export
title: Cursor OpenTelemetry Export — enterprise OTLP metrics and logs
tags: [cursor, observability, otel, privacy]
status: active
updated: 2026-09-19
when_to_use: Streaming Cursor usage to a team collector over OTLP/HTTP, or joining sessions without prompt content
---

## Summary

**OpenTelemetry Export** (Enterprise) pushes Cursor **metrics and logs** from Cursor’s servers to one HTTPS collector you run. Admins configure it under Team Settings → OpenTelemetry Export. Not Conversation Insights (`cursor-conversation-insights`) and not Gemini CLI’s local/GCP OTel (`gemini-cli-telemetry`).

## Notes

- Wire: OTLP/HTTP **protobuf** on `/v1/metrics` and `/v1/logs`. Enter the HTTPS **base** URL (no `/v1`); Cursor appends the paths. **gRPC and JSON are not supported.** Bearer/API-key header required. Endpoint must be on the public internet; traffic comes from a documented `/32` egress set. Test connection, then Enable (~1 minute).
- Metrics (delta): `cursor.token.usage` (`input` / `output` / `cache_read` / `cache_creation`), `cursor.tool.calls` (builtin vs MCP), `cursor.cost.usage` (best-effort USD, **not** an invoice). Logs: `cursor.api.request` / `error` / `correction`, skill/hook/plugin events, `cursor.cloud_agent.*`, and `cursor.grok_bot.*` only after Action Recording is on (commands secret-scrubbed; browser URLs stripped of query/fragment).
- Families toggle independently (`model_usage`, `tool_calls`, `skills_hooks_plugins`, `cloud_agents`, `grok_bot_agent_actions`). New families default on unless `auto_enable_new_families` is off. Scope `cursor.telemetry` `0.1.0`. Resource: `service.name=cursor`, `cursor.team.id`, optional `cursor.user.id`.
- Delivery: metrics at-most-once (brief gaps after failure); logs at-least-once — dedupe on `cursor.event.id`. No backfill, no prompt content, no `trace_id`/`span_id`. Join sessions on log `cursor.conversation.id` (IDE/CLI chat UUID, Cloud Agent `bc-…`, or Grok Bot id). Metrics have **no** conversation id. Subagents get their own conversation id; parent rollup is not exported. Rotate credentials by editing the destination — delete drops in-flight data.

## Sources

- [OpenTelemetry Export](https://cursor.com/docs/enterprise/opentelemetry-export) — accessed 2026-09-19
