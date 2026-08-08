---
id: agent-observability-otel
title: Agent observability with OpenTelemetry GenAI spans
tags: [observability, otel, tracing, tools]
status: active
updated: 2026-08-08
when_to_use: Instrumenting agent loops for latency, cost, tool failures, or multi-agent debugging
---

## Summary

Model a run as nested GenAI spans: `invoke_agent` → `chat` / `execute_tool`, correlated by conversation id, with token and tool attributes.

## Notes

- Auto-instrumentation alone yields flat `chat` spans; wrap the loop and each tool for structure.
- Key attrs: `gen_ai.operation.name`, model, token usage, `gen_ai.tool.name` / `call.id`, agent name, conversation id.
- Propagate conversation id into downstream HTTP/DB work triggered by tools.
- Use finish_reasons patterns to detect tool-call loops; alert on runaway nested execute_tool counts.
- Treat prompt/content capture as opt-in (PII); redaction before export.

## Sources

- [OpenTelemetry GenAI semantic conventions (overview)](https://blog.triplecloud.tech/posts/instrument-llm-agent-opentelemetry) — accessed 2026-08-08
- [OTel GenAI attributes registry](https://github.com/open-telemetry/semantic-conventions-genai/blob/main/docs/registry/attributes/gen-ai.md) — accessed 2026-08-08
- [AI Agent Observability with OpenTelemetry](https://docs.base14.io/guides/ai-observability/agent-observability/) — accessed 2026-08-08
