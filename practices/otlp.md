---
id: otlp
title: OTLP — OpenTelemetry Protocol for traces, metrics, and logs
kind: protocol
tags: [otlp, otel, observability, protocol]
status: active
updated: 2026-11-27
when_to_use: Sending traces, metrics, or logs from an agent to a collector with the OpenTelemetry Protocol
---

## Summary

**OTLP** is the OpenTelemetry delivery protocol between an SDK, a collector, and a backend. Specification 1.11.1 is stable for traces, metrics, and logs. Profiles are still in development. gRPC defaults to port 4317 and HTTP to port 4318. HTTP success is 200 even when the server rejected some of the batch. Use OTLP when Langfuse (`langfuse`), Grafana Cloud (`grafana-cloud`), Logfire (`logfire`), Honeycomb (`honeycomb`), or another backend should receive the same export. Vendor JSON is a different contract.

## Notes

- **Two transports, one schema.** OTLP/gRPC and OTLP/HTTP carry the same protobuf messages. HTTP may use binary protobuf (`Content-Type: application/x-protobuf`) or JSON (`application/json`). The server is expected to accept both on one port and pick the decoder from that header. Default HTTP paths are `/v1/traces`, `/v1/metrics`, and `/v1/logs`. The profiles path in this spec revision is `/v1development/profiles`. gRPC does not use those paths. The exporter configuration page says not to append `/v1/traces`, `/v1/metrics`, or `/v1/logs` to a gRPC target. SDK defaults are `http://localhost:4317` for gRPC and `http://localhost:4318` for HTTP. `OTEL_EXPORTER_OTLP_PROTOCOL` is `grpc`, `http/protobuf`, or `http/json`, and the default depends on the SDK.
- **200 is not “every span landed.”** Full success is HTTP 200 with `partial_success` unset. Partial success is also HTTP 200, with `rejected_spans`, `rejected_data_points`, `rejected_log_records`, or `rejected_profiles` set to how many items were refused. The client must not retry that request. A server may also set `partial_success` with a rejected count of 0 and a non-empty `error_message` as a warning after accepting everything. Empty requests should succeed.
- **What to retry.** HTTP 429, 502, 503, and 504 should be retried. Every other 4xx or 5xx must not. HTTP 400 means the payload will not decode and must not be retried. 429 and 503 may include `Retry-After` as a date or a number of seconds. If a retryable code has no `Retry-After`, the client should use exponential backoff. A disconnect with no response should be retried. gRPC throttling uses `Unavailable` and may attach `RetryInfo`. `RESOURCE_EXHAUSTED` is retryable only when that retry info is present.
- **GenAI attributes moved.** The core semantic-conventions page for generative AI says those conventions now live in the OpenTelemetry GenAI repository and that the old page is not maintained. New agent spans should follow that repository, not the frozen core page. Details of a dropped batch or the profiles path: `otlp-partial-success-and-profiles-path`.

## Sources

- [OTLP specification 1.11.1](https://opentelemetry.io/docs/specs/otlp/) — accessed 2026-11-27
- [OTLP exporter configuration](https://opentelemetry.io/docs/languages/sdk-configuration/otlp-exporter/) — accessed 2026-11-27
- [Moved: Generative AI semantic conventions](https://opentelemetry.io/docs/specs/semconv/gen-ai/) — accessed 2026-11-27
- [OpenTelemetry GenAI semantic conventions](https://github.com/open-telemetry/semantic-conventions-genai) — accessed 2026-11-27
- [OpenTelemetry](https://opentelemetry.io/) — accessed 2026-11-27
