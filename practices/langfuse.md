---
id: langfuse
title: Langfuse — traces, prompts, and scores
kind: service
tags: [langfuse, observability, otel, evals]
status: active
updated: 2026-11-16
when_to_use: Tracing agent runs or scoring them in Langfuse Cloud or a self-hosted Langfuse instead of a raw collector
---

## Summary

**Langfuse** is an open-source backend for LLM traces, prompts, datasets, and scores. Use **Langfuse Cloud** (hosted, free tier) or self-host; the SDK calls are the same and only the base URL and keys change. It is not the LangSmith agent host (`langsmith-agent-server`) and not the GenAI semantic-conventions note (`agent-observability-otel`).

## Notes

- **Access.** Create a project and API keys in project settings, or self-host. Set `LANGFUSE_PUBLIC_KEY` (`pk-lf-…`), `LANGFUSE_SECRET_KEY` (`sk-lf-…`), and `LANGFUSE_BASE_URL`. Default cloud region is EU `https://cloud.langfuse.com`. Other documented regions: US `https://us.cloud.langfuse.com`, Japan `https://jp.cloud.langfuse.com`, HIPAA `https://hipaa.cloud.langfuse.com`. A missing base URL on a non-EU project writes to the wrong host.
- **SDKs.** Python: `pip install langfuse` (current line is **v5**). JavaScript tracing needs `@langfuse/tracing`, `@langfuse/otel`, and `@opentelemetry/sdk-node` (current JS line is **v6**; `@langfuse/otel` wants Node.js 22+). Python v5 and JS v6 talk only to **Langfuse v4**. A self-hosted **v3** server stays on Python SDK v4 or JS SDK v5. Short-lived processes must `flush()` (Python) or `shutdown()` the Node SDK or the batch never leaves the process.
- **Auth boundary.** Tracing SDKs use the secret key and belong on the server. `@langfuse/browser` takes only the public key and posts scores; it does not create traces. Do not ship the secret key to a browser or mobile app.
- **OpenTelemetry.** An app that already emits spans can POST OTLP/HTTP (JSON or protobuf; **not gRPC**) to `{base}/api/public/otel` with Basic auth (`public:secret`). Send header `x-langfuse-ingestion-version: 4` or directly ingested spans can lag by up to **10 minutes**. On Langfuse Cloud, `POST /api/public/ingestion` stops accepting everything except **scores** on **2026-11-16**; move custom ingestion to the v4 API or the OTEL endpoint.
- **Agents.** Docs MCP is `https://langfuse.com/api/mcp` with no authentication (read the docs, not your project). A skill lives in `github.com/langfuse/skills`. Neither replaces project keys.
- **Alternatives.** Export GenAI spans to your own collector when you do not want a Langfuse project (`agent-observability-otel`). LangSmith when the trace store must sit next to a hosted LangGraph deployment.
- **Caveats.** SDK major and server major must match. EU is the default host. The legacy ingestion route is the wrong target for new traces after 2026-11-16. A process that exits without flush drops the run.

## Sources

- [Get started with tracing](https://langfuse.com/docs/observability/get-started) — accessed 2026-11-16
- [Langfuse SDKs](https://langfuse.com/docs/observability/sdk/overview) — accessed 2026-11-16
- [OpenTelemetry for LLM observability](https://langfuse.com/integrations/native/opentelemetry) — accessed 2026-11-16
