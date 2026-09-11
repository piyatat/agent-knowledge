---
id: gemini-cli-telemetry
title: Gemini CLI telemetry — OpenTelemetry logs, metrics, traces
tags: [gemini, observability, otel, privacy]
status: active
updated: 2026-09-11
when_to_use: Enabling Gemini CLI OTel export, or deciding whether prompts belong in traces
---

## Summary

Gemini CLI can export **OpenTelemetry** logs, metrics, and traces. Telemetry is **off** by default (`telemetry.enabled` / `GEMINI_TELEMETRY_ENABLED`). This is product instrumentation, not the generic GenAI semantic-convention guide (`agent-observability-otel`) and not Claude Code’s monitoring page.

## Notes

- Configure under `.gemini/settings.json` `telemetry` (workspace or user; system overrides win — `gemini-cli-settings`). Env vars override: `GEMINI_TELEMETRY_ENABLED`, `_TRACES_ENABLED`, `_TARGET` (`local` default / `gcp`), `_OTLP_ENDPOINT` (default `http://localhost:4317`), `_OTLP_PROTOCOL` (`grpc` default / `http`), `_OUTFILE` (file sink beats OTLP), `_LOG_PROMPTS`, `_USE_COLLECTOR`, `_USE_CLI_AUTH`. `GEMINI_CLI_SURFACE` is an optional traffic label.
- **`logPrompts` defaults to true** when telemetry is on — treat as a privacy decision; turn it off before shipping to a shared collector. Detailed trace attributes (full prompts/tool I/O) need `traces: true` / `GEMINI_TELEMETRY_TRACES_ENABLED` (default false).
- GCP: set `OTLP_GOOGLE_CLOUD_PROJECT` (or `GOOGLE_CLOUD_PROJECT`), enable Cloud Trace / Monitoring / Logging APIs, grant Trace Agent + Metric Writer + Logs Writer. Auth: ADC, or `useCliAuth: true` with `target: gcp` (direct export only — combining `useCliAuth` with `useCollector` **disables** telemetry).
- Common attributes on all signals: `session.id`, `installation.id`, `active_approval_mode`, and `user.email` when authenticated. Session logs include `gemini_cli.config` and `gemini_cli.tool_call`. Export to any OTLP backend (Jaeger, Prometheus, Datadog, collector).
- Pair with `telemetry-redaction-genai` before a collector that stores prompts. Contrast Claude Code OTel (`claude-code` monitoring docs) and MCP `_meta` trace context (`mcp-otel-trace-context`).

## Sources

- [Observability with OpenTelemetry](https://geminicli.com/docs/cli/telemetry/) — accessed 2026-09-11
- [Gemini CLI settings](https://geminicli.com/docs/cli/settings/) — accessed 2026-09-11
