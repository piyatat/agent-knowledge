---
id: telemetry-redaction-genai
title: Redact GenAI content before OTel export
tags: [otel, privacy, redaction, security]
status: active
updated: 2026-08-09
when_to_use: Exporting agent traces/logs that may contain prompts, completions, tool args, or secrets
---

## Summary

Treat `gen_ai.*` message/content attributes as opt-in and dangerous. Redact at app edge and/or collector; keep token counts; fail closed on unknown sensitive fields when possible.

## Notes

- Prefer never attaching raw prompts to spans; if needed, redact before setAttribute.
- Layered defense: app scrub + exporter wrapper + collector transform/redaction processor.
- Default-deny new attributes in policy so tomorrow’s `user.phone` does not silently leak.
- Retain structure for debug: redaction markers, token usage, tool names—not full args/bodies.
- Local CLIs like otel-sieve can canonicalize/validate GenAI JSON before a backend ever sees it.

## Sources

- [How to Redact Sensitive User Prompts in GenAI OTel Traces](https://oneuptime.com/blog/post/2026-02-06-redact-sensitive-prompts-genai-opentelemetry-traces/view) — accessed 2026-08-09
- [LangSmith — OTel gateway trace redaction](https://docs.langchain.com/langsmith/otel-gateway-trace-redaction) — accessed 2026-08-09
- [OpenTelemetry Collector contrib — redaction processor](https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/processor/redactionprocessor/README.md) — accessed 2026-08-09
