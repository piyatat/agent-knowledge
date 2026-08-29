---
id: cursor-sdk
title: Cursor Python SDK — local and cloud Agent.create
tags: [cursor, sdk, cli, orchestration]
status: active
updated: 2026-08-29
when_to_use: Scripting the same Cursor agent from Python (local cwd or Cloud VM) instead of the CLI or editor
---

## Summary

`cursor-sdk` (`pip install cursor-sdk`, Python ≥3.10) is one interface for the **local** agent (your disk) and **cloud** agents (Cursor VMs). It is an agent SDK — not a chat-completions API. Auth is `CURSOR_API_KEY` (user or service account; Team Admin keys are not supported yet). Spend appears under the SDK tag.

## Notes

- `Agent.create(..., local=LocalAgentOptions(cwd=...))` vs `cloud=CloudAgentOptions(repos=[CloudRepository(...)])`. Omit `cloud` → local. `agent.agent_id` is immediate: `agent-…` local, `bc-…` cloud. SDK-started cloud agents are hidden from the default agents list until you filter Source → SDK.
- Cloud extras: `auto_create_pr`, `env_vars` (encrypted, deleted with the agent; names must not start with `CURSOR_`; cannot combine with a caller-supplied `agent_id`), caller `metadata` tags (`cursor-cloud-agent-metadata`). Empty `repos=[]` is a no-repo VM (account must allow it; repo-scoped keys cannot create these).
- Async: `AsyncClient` / `AsyncAgent` only — no global async default; do not mix sync and async in one path. `AsyncClient.launch_bridge(workspace=...)` owns the event loop’s bridge.
- Router: model id `auto-smart` + required `optimize_for` (`cost` / `balanced` / `intelligence`). Teams/Enterprise; admins can hide it. Discover via `Cursor.models.list()` — do not hard-code availability. Product copy says “Balance”; the wire value is `balanced`.
- Same Privacy Mode and request-pool rules as IDE/Cloud Agents. For in-VM id/owner/turn, the cloud agent reads the Unix-socket metadata API — not `CloudAgentOptions.metadata`. CLI remains `agent` (`cursor-cli-headless`); this package is the Python embedding.

## Sources

- [Cursor Python SDK](https://cursor.com/docs/sdk/python) — accessed 2026-08-29
- [Agent metadata](https://cursor.com/docs/cloud-agent/metadata) — accessed 2026-08-29
- [Using Headless CLI](https://cursor.com/docs/cli/headless) — accessed 2026-08-29
