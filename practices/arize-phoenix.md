---
id: arize-phoenix
title: Phoenix — self-hosted OpenTelemetry traces and evals
kind: tool
tags: [phoenix, observability, otel, evals]
status: active
updated: 2026-11-17
when_to_use: Tracing and scoring an agent on a Phoenix instance you run, including an air-gapped host
---

## Summary

**Arize Phoenix** is a self-hosted app for traces, datasets, experiments, prompts, and evals. The server package is `arize-phoenix` on PyPI (Python **3.11–3.15**, Elastic License 2.0). UI and OTLP HTTP listen on port **6006**; OTLP gRPC on **4317**. Arize AX is the managed product with the same OpenInference instrumentation. Phoenix is the collector you operate, not Langfuse Cloud or Braintrust (`langfuse`, `braintrust`).

## Notes

- **Access.** The get-started page covers `phoenix serve`, the Docker image `arizephoenix/phoenix`, and Kubernetes/Helm. Self-hosting is described as free of license fees and feature gates, with traces staying on your infrastructure. Clients use `PHOENIX_COLLECTOR_ENDPOINT` for traces and `PHOENIX_ENDPOINT` for the API, `px` CLI, and MCP (the API base falls back to the collector URL).
- **Auth (21.0.0).** If `PHOENIX_ENABLE_AUTH` is unset, auth follows the bind. `PHOENIX_HOST` defaults to `127.0.0.1` and auth stays off there. Any other address, including `0.0.0.0` or `::`, turns auth on. The Docker image sets `PHOENIX_HOST=::`, so exporters need `PHOENIX_API_KEY` unless you set `PHOENIX_ENABLE_AUTH=false`. The Helm chart’s auth default is unchanged from before this release; read that chart rather than copying the image. `phoenix serve --host` is removed. The default admin password must be changed before it can open a session. Browser sign-out does not end CLI or MCP OAuth sessions. An API key cannot mint another key.
- **Secrets.** `PHOENIX_SECRET` is optional. Without it, tokens are signed with a key in the database, and a copy of that database can decrypt saved credentials. Setting or changing the secret makes saved credentials unreadable.
- **MCP and agents.** The server exposes `/mcp` for MCP clients that query traces, datasets, and experiments. PXI is the in-product assistant. `px setup` (npm `@arizeai/phoenix-cli`) can instrument a project.
- **Alternatives.** Langfuse when you want that product’s cloud or its own self-host (`langfuse`). Braintrust when experiments should run on Braintrust’s hosted store (`braintrust`). A raw OTLP collector when you only need spans (`agent-observability-otel`).
- **Caveats.** On **21.0.0+** the server fetches built-in model prices from GitHub unless `PHOENIX_DISABLE_MODEL_COST_AUTO_UPDATE=true` or `PHOENIX_ALLOW_EXTERNAL_RESOURCES=false`. Pin the image tag for anything shared. Elastic License 2.0 is not the same grant as Apache-2.0; read `LICENSE` before redistributing.

## Sources

- [Start Phoenix](https://arize.com/docs/phoenix/get-started) — accessed 2026-11-17
- [Self-hosting](https://arize.com/docs/phoenix/self-hosting) — accessed 2026-11-17
- [Authentication by default (Phoenix 21)](https://arize.com/docs/phoenix/release-notes/11-2026/11-02-2026-authentication-by-default-and-decision-annotations) — accessed 2026-11-17
- [arize-phoenix on PyPI](https://pypi.org/project/arize-phoenix/) — accessed 2026-11-17
- [Arize Phoenix](https://arize.com/phoenix/) — accessed 2026-11-17
