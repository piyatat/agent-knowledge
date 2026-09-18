---
id: openai-agents-api
title: OpenAI Agents API — hosted Codex harness sessions
tags: [openai, api, sandbox, orchestration]
status: active
updated: 2026-09-18
when_to_use: Calling POST /v1/agents/sessions for a managed Codex loop instead of openai-agents or Codex CLI
---

## Summary

The **Agents API** (public beta, 2026-09-10) is an OpenAI-hosted **Codex harness**: you create a durable **session**, OpenAI runs the tool loop, compaction, steering, and recovery. Not the `openai-agents` library (`openai-agents-sdk`), not Codex CLI (`openai-codex-exec`), and not Cursor Cloud Agents. Endpoint `POST /v1/agents/sessions`; cURL needs `OpenAI-Beta: agents=v1`.

## Notes

- Concepts: **agent** (model, instructions, tools/MCP, optional `multi_agent`), **environment** (`none` / `openai_hosted` / `self_hosted`), **session**, streamed **events**. Hosted sandboxes are Linux `/workspace` with Python/Node; configure `packages`, `setup_commands`, `files`, `env` (reserved names like `OPENAI_API_KEY` rejected), `network.access` (`enabled` / `disabled` / `restricted` + exact hosts). Files under `/workspace/outputs` become artifacts. Idle hosted sandboxes can expire after ~1 hour without keep-alives.
- Auth: application key with `api.agents.read`, `api.agents.write`, plus `api.responses.write` for inference. Keep that key **outside** the sandbox. Self-hosted uses a separate environment key as `CODEX_API_KEY` and an executor against `session.environment.remote_url`. Partner sandboxes include Modal, Cloudflare, Vercel, Daytona, Blaxel, E2B, Runloop, DigitalOcean, OCI.
- Pricing is model tokens + tool rates + hosted **container** rates (no extra Agents API fee). Data residency is **US only**; **ZDR is unsupported** even with `self_hosted`. A completed turn is not a success guarantee — watch `turn.failed` / `session.failed`. Delete sessions when done.

## Sources

- [Agents API overview](https://developers.openai.com/api/docs/guides/agents-api/overview) — accessed 2026-09-18
- [Agents API quickstart](https://developers.openai.com/api/docs/guides/agents-api/quickstart) — accessed 2026-09-18
- [OpenAI-hosted sandboxes](https://developers.openai.com/api/docs/guides/agents-api/environments/openai-hosted) — accessed 2026-09-18
- [Self-hosted sandboxes](https://developers.openai.com/api/docs/guides/agents-api/environments/self-hosted) — accessed 2026-09-18
- [Agents API architecture](https://developers.openai.com/api/docs/guides/agents-api/architecture) — accessed 2026-09-18
