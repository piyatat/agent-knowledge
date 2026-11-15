---
id: agent-observability-otel
title: Agent observability with OpenTelemetry GenAI spans
tags: [observability, otel, tracing, tools]
status: active
updated: 2026-11-15
when_to_use: Instrumenting agent loops for latency, cost, tool failures, or multi-agent debugging
---

## Summary

Record an agent run with the **OpenTelemetry GenAI** semantic conventions. The living text is the **`open-telemetry/semantic-conventions-genai`** repo; its span document is status **Development**. The core semantic-conventions registry page for `gen_ai.*` now only says those attributes moved. Nest spans as `invoke_agent` around the run, `chat` or `generate_content` for model calls, and `execute_tool` for tools. Correlate turns with `gen_ai.conversation.id`.

## Notes

- A GenAI span covers the **logical** operation, including automatic retries, from start until the response finishes or the call is cancelled. Use a well-known `gen_ai.operation.name` when one fits: `invoke_agent`, `chat`, `generate_content`, `execute_tool`, `invoke_workflow`, `plan`, `retrieval`, `embeddings`, and others listed in the span doc. A custom name is allowed only when none of those apply.
- Content is **Opt-In**. Instrumentations should not record instructions, prompts, or outputs by default. Opting in writes `gen_ai.system_instructions`, `gen_ai.input.messages`, `gen_ai.output.messages`, `gen_ai.tool.call.arguments`, and `gen_ai.tool.call.result`. The spec’s production pattern is to store that content elsewhere and put a reference on the span. Truncation, if offered, should keep the JSON shape.
- `gen_ai.provider.name` is what the instrumentation believes it called. A proxy or gateway can make that differ from the model host. Known values include `openai`, `anthropic`, `aws.bedrock`, `gcp.vertex_ai`, `gcp.gemini`, and `x_ai`. Set it consistently with any provider-specific attributes.
- The OpenTelemetry blog (2026-05-14) shows the same tree from VS Code Copilot and names the histograms `gen_ai.client.operation.duration` and `gen_ai.client.token.usage` (split input vs output with `gen_ai.token.type`). Copilot’s own switch for content is separate and off by default (`github-copilot-otel`). `gen_ai.response.finish_reasons` is the signal for a tool-call loop; alert on nested `execute_tool` counts that grow without a terminal reason.
- Propagate `gen_ai.conversation.id` onto downstream HTTP and database spans the tools start (`agent-conversation-correlation-otel`). Do not put prompts on span attributes in production unless that backend’s access model is the one you want for user content (`telemetry-redaction-genai`).

## Sources

- [Semantic conventions for generative client AI spans](https://github.com/open-telemetry/semantic-conventions-genai/blob/main/docs/gen-ai/gen-ai-spans.md) — accessed 2026-11-15
- [OpenTelemetry GenAI semantic conventions README](https://github.com/open-telemetry/semantic-conventions-genai/blob/main/README.md) — accessed 2026-11-15
- [GenAI attribute registry (moved)](https://opentelemetry.io/docs/specs/semconv/registry/attributes/gen-ai/) — accessed 2026-11-15
- [Inside the LLM Call: GenAI Observability with OpenTelemetry](https://opentelemetry.io/blog/2026/genai-observability/) — accessed 2026-11-15
