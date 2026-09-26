---
id: github-copilot-otel
title: Copilot OpenTelemetry — client traces vs Cursor export
tags: [github, observability, otel, privacy]
status: active
updated: 2026-09-26
when_to_use: Exporting Copilot agent traces/metrics from VS Code, CLI, JetBrains, or the Copilot app to an OTLP collector
---

## Summary

**Copilot OTel** ships **client-side** traces, metrics, and events from VS Code Copilot Chat / Agent Host, Copilot CLI, JetBrains, and (2026-09-22) the Copilot app. Enterprises pin it with the `telemetry` block in `managed-settings.json`. Not Cursor’s **server-side** OTLP Export (`cursor-otel-export`) and not Gemini CLI’s local/GCP exporter (`gemini-cli-telemetry`).

## Notes

- Signals: traces (`invoke_agent` → `chat` / `execute_tool` / `execute_hook`; subagent `invoke_agent` is a child of the parent `execute_tool`), GenAI histograms (`gen_ai.client.operation.duration`, `gen_ai.client.token.usage`), and events (`copilot_chat.edit.feedback`, `copilot_chat.session.start`, …). Prefer `github.copilot.*` + `gen_ai.*`; `copilot_chat.*` is legacy dual-emit with no sunset.
- VS Code: enable `github.copilot.chat.otel.enabled` (or set `OTEL_EXPORTER_OTLP_ENDPOINT` / `COPILOT_OTEL_ENABLED`). Endpoint `github.copilot.chat.otel.otlpEndpoint` (default `http://localhost:4318`). Exporter `otlp-http` / `otlp-grpc` / `console` / `file`. Terminal Copilot CLI sessions get forwarded `COPILOT_OTEL_*` and emit **unlinked** roots under `service.name=github-copilot`; CLI runtime is **HTTP only**. Claude-harness sessions emit extension spans (`gen_ai.agent.name=claude`).
- Content is **off by default**. `captureContent` / `COPILOT_OTEL_CAPTURE_CONTENT` adds prompts, responses, tool schemas/args/results — treat as secrets (`telemetry-redaction-genai`). Managed `telemetry` (enabled, endpoint, protocol `http/json`|`http/protobuf`, captureContent, lockCaptureContent, serviceName, resourceAttributes, headers) **wins** over env and user settings. Managed headers stay on the Chat extension exporter and are **not** passed into Agent Host tool subprocesses; reload VS Code after a managed change. VS Code 1.139 fixed a race that dropped managed OTel on the Local (non–Agent Host) harness.
- Copilot app (public preview, 2026-09-22): same managed `telemetry` block; no per-developer env required. JetBrains already had managed OTel (2026-08-18). Do not commit collector tokens in git.

## Sources

- [OpenTelemetry for agent monitoring](https://docs.github.com/en/copilot/concepts/agents/opentelemetry) — accessed 2026-09-26
- [Monitor agent usage with OpenTelemetry](https://code.visualstudio.com/docs/agents/guides/monitoring-agents) — accessed 2026-09-26
- [Enterprise managed settings](https://docs.github.com/en/copilot/reference/enterprise-managed-settings-reference) — accessed 2026-09-26
- [OpenTelemetry in the GitHub Copilot app](https://github.blog/changelog/2026-09-22-opentelemetry-in-the-github-copilot-app/) — accessed 2026-09-26
- [Visual Studio Code 1.139](https://code.visualstudio.com/updates/v1_139) — accessed 2026-09-26
