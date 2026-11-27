---
id: otlp-partial-success-and-profiles-path
title: An OTLP export returned 200 and still dropped telemetry
kind: knowledge
tags: [otlp, otel, observability, protocol]
status: active
updated: 2026-11-27
when_to_use: An OTLP export returned HTTP 200 while dropping spans, or profiles went to the wrong path
---

## Summary

OTLP (`otlp`) uses HTTP 200 for a batch the server only partly accepted, and the client must not retry that response. The spec’s profiles path is `/v1development/profiles`. The SDK environment-variable page documents `/v1/profiles` instead. Appending an HTTP path to a gRPC endpoint sends the export to the wrong place.

## Notes

- **Read `partial_success` on every 200.** Full success leaves that field unset. Partial success is still HTTP 200 and sets `rejected_spans`, `rejected_data_points`, `rejected_log_records`, or `rejected_profiles` to the number refused. The protocol says the client must not retry when `partial_success` is populated, including a warning where the rejected count is 0 and `error_message` is set. Treating 200 as “the whole batch is stored” drops the rejected items with no second attempt. After a response that cannot fit in the server’s size limit, whether any of the batch was accepted is unspecified.
- **Retry only the listed failures.** 429, 502, 503, and 504 should be retried. 400 must not. Other 4xx and 5xx must not. Honour `Retry-After` when it is present. It may be an HTTP date or a delay in seconds. A missing header on a retryable code means exponential backoff, not an immediate resend. gRPC `RESOURCE_EXHAUSTED` without `RetryInfo` is not a retry.
- **Paths and ports.** Traces, metrics, and logs on HTTP are `/v1/traces`, `/v1/metrics`, and `/v1/logs`, on port 4318 by default. gRPC is port 4317 and has no `/v1/...` suffix. The exporter page says a gRPC target with those suffixes is wrong. Profiles are the conflict to check on 2026-11-27: OTLP 1.11.1 says the HTTP path is `/v1development/profiles` and marks the signal as development. The SDK configuration page says `OTEL_EXPORTER_OTLP_PROFILES_ENDPOINT` for HTTP defaults to `http://localhost:4318/v1/profiles` and “typically ends with `v1/profiles`.” Point the collector at the path that process actually posts.
- **GenAI names moved.** The core semantic-conventions GenAI page is no longer maintained. It links to `open-telemetry/semantic-conventions-genai`. Spans written against the old page can disagree with a backend that ingested the new names. Headers use W3C baggage form (`key=value,key2=value2`). Semicolon-delimited metadata is not that format. The default export timeout on the SDK page is 10 seconds.

## Sources

- [OTLP specification 1.11.1](https://opentelemetry.io/docs/specs/otlp/) — accessed 2026-11-27
- [OTLP exporter configuration](https://opentelemetry.io/docs/languages/sdk-configuration/otlp-exporter/) — accessed 2026-11-27
- [Moved: Generative AI semantic conventions](https://opentelemetry.io/docs/specs/semconv/gen-ai/) — accessed 2026-11-27
- [OpenTelemetry GenAI semantic conventions](https://github.com/open-telemetry/semantic-conventions-genai) — accessed 2026-11-27
