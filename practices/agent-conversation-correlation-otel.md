---
id: agent-conversation-correlation-otel
title: Correlate agent conversations in OpenTelemetry
tags: [otel, observability, tracing]
status: active
updated: 2026-08-15
when_to_use: Linking multi-turn agent runs, tool calls, and subagents in traces
---

## Summary

Emit a stable conversation/run id across spans so dashboards can reconstruct an agent session: model turns, tool calls, approvals, and child agents.

## Notes

- Propagate `session.id` / custom `gen_ai.conversation.id` (or equivalent) on every span.
- Parent tool spans under the model turn that requested them.
- Link subagent roots via attributes, not only shared process ids.
- Keep PII out of attributes; correlate with redacted content stores separately.
- Use baggage carefully — prefer explicit attributes over ambient propagation of secrets.

## Sources

- [OpenTelemetry GenAI semantic conventions](https://github.com/open-telemetry/semantic-conventions/blob/v1.37.0/docs/gen-ai/gen-ai-spans.md) — accessed 2026-08-15
- [AI Agent Observability with OpenTelemetry](https://docs.base14.io/guides/ai-observability/agent-observability/) — accessed 2026-08-15
