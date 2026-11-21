---
id: opik
title: Opik — trace and score an agent on Comet
kind: service
tags: [opik, observability, evals, tracing]
status: active
updated: 2026-11-21
when_to_use: Tracing an agent’s model and tool calls in Opik Cloud or on a server you run
---

## Summary

**Opik** is Comet’s open-source tracing and evaluation product for LLM apps. It records traces and spans (model calls, tools, retrieval), scores them, and stores prompt and experiment runs. Use the hosted cloud or the same codebase on a host you operate. It sits next to Langfuse (`langfuse`) and Braintrust (`braintrust`).

## Notes

- **Access.** Create a cloud account at `links.get`. The quickstart (`links.docs`) is the SDK pointer: Python package `opik`, npm package `opik`. Cloud API base is `https://www.comet.com/opik/api`. A self-hosted example base is `http://localhost:5173/api`. `OPIK_API_KEY` is required for cloud and omitted for a local server. `OPIK_WORKSPACE` selects the cloud workspace. Traces land in `Default Project` until `OPIK_PROJECT_NAME` says otherwise. Python config precedence is constructor, then environment, then `~/.opik.config`.
- **What an agent calls.** Decorate a function with `@track`, or wrap a supported client. The SDK batches in the background. A coding assistant can read traces through Opik’s MCP server (`uvx opik mcp configure`, or `opik configure --install-mcp`). `--yes` alone does not register that MCP server or the skill pack. OpenTelemetry export is on the pricing comparison for languages without a first-party SDK.
- **Plans (pricing page, 2026-11-21).** Open source is the full tracing and test feature set on your host. Free Cloud is $0, up to 10 members, **25,000 spans per month**, **60-day** retention, plus an Ollie coding-harness trial. Pro is $19 with up to 50 members, **100,000 spans per month**, 60-day retention, and customizable span and retention limits. Enterprise adds SSO, service accounts, and the listed compliance claims.
- **Alternatives.** Langfuse (`langfuse`) or Braintrust (`braintrust`) when the team already stores traces there. Phoenix (`arize-phoenix`) when the collector must run air-gapped without a Comet account.
- **Caveats.** A short process can exit before the batch is sent, and a cloud key pointed at the local URL (or the reverse) stores nothing. Details: `opik-unflushed-traces`.

## Sources

- [Opik](https://www.comet.com/site/products/opik/) — accessed 2026-11-21
- [Opik sign-up](https://www.comet.com/signup?from=opik) — accessed 2026-11-21
- [Quickstart](https://www.comet.com/docs/opik/quickstart) — accessed 2026-11-21
- [SDK configuration](https://www.comet.com/docs/opik/tracing/advanced/sdk_configuration) — accessed 2026-11-21
- [Pricing](https://www.comet.com/site/pricing/) — accessed 2026-11-21
