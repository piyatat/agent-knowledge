---
id: opik-unflushed-traces
title: An Opik trace never arrives, or cloud and local settings are mixed
kind: knowledge
tags: [opik, tracing, flush, auth]
status: active
updated: 2026-11-21
when_to_use: An Opik trace never shows up after a short script, or cloud and self-hosted settings are mixed
---

## Summary

Opik (`opik`) queues traces and sends them on a background batch. A script that exits first drops them. The cloud API also rejects a client that has the local URL, a missing key, or the wrong workspace, so the run looks untraced.

## Notes

- **Flush.** Both SDKs batch for a long-running process. A short script needs an explicit flush: Python `Opik().flush()` or `@track(flush=True)`; TypeScript `await client.flush()` or `flushAll()`. TypeScript `holdUntilFlush` defaults to false and `batchDelayMs` defaults to **300**. Updating or ending a span while batching is on can drop that update; the Python SDK warns unless `OPIK_SUPPRESS_BATCHING_UPDATE_WARNING` is set. `OPIK_TRACK_DISABLE` turns tracing off entirely.
- **Cloud versus local.** The default URL is `https://www.comet.com/opik/api`. Cloud calls need `OPIK_API_KEY`. The self-host example is `http://localhost:5173/api` with workspace `default` and no API key. Python `opik configure` (cloud) and `opik configure --use_local` write `~/.opik.config`. Constructor arguments beat environment variables, which beat that file. A leftover local URL override sends a cloud key to the wrong host. `opik healthcheck` reports Python SDK connectivity when the backend returns 400 or 500 or cannot be reached.
- **Retention and volume.** Free Cloud includes **25,000 spans per month** and deletes span data after **60 days**. Pro’s included cap is **100,000 spans per month** with the same default retention, and that plan can change both limits. Open-source retention is whatever the host you run keeps.
- **Configure flags.** `opik configure --yes` accepts prompts and does not install the MCP server or the skill pack. Those write into another tool’s config, so they need `--install-mcp` and `--install-skills`. A non-interactive run that names neither flag does nothing.

## Sources

- [Log traces](https://www.comet.com/docs/opik/tracing/advanced/log_traces) — accessed 2026-11-21
- [SDK configuration](https://www.comet.com/docs/opik/tracing/advanced/sdk_configuration) — accessed 2026-11-21
- [Pricing](https://www.comet.com/site/pricing/) — accessed 2026-11-21
- [Quickstart](https://www.comet.com/docs/opik/quickstart) — accessed 2026-11-21
