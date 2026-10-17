---
id: cursor-cloud-mcp-diagnostics
title: Cursor Cloud MCP — run diagnostics tools
tags: [cursor, mcp, observability, ops]
status: active
updated: 2026-10-17
when_to_use: A Cursor cloud agent must inspect its own run, sibling runs, environment, builds, or setup logs
---

## Summary

**Cursor Cloud MCP** is a built-in diagnostics server on Cloud Agent runs. It is not Team MCP you attach (`cursor-cloud-mcp-http-vs-stdio`). Use it to fetch run identity, events, transcripts, diffs, environment config, and build logs instead of scraping dashboard URLs. Team admins can disable it from MCP Configuration.

## Notes

- Start with `run-info` (current `bcId`, URL, repo, model, owner, source). Then `get-events` → `environment-info` → `list-cloud-agents` → `batch-fetch-details` (optional transcripts, diffs, setup logs, environment info, `include_events` → `events.json` per run).
- Access: non-admins see only runs they started/own, even when listing a shared environment. Team admins can list/fetch transcripts for team runs they already have repo/environment access to. Service accounts follow the owning user/team context. Tools re-check auth on every call.
- Event `kind`s: `setup_started|completed|failed`, `pr_created|pr_creation_failed`, `artifact_created`, `mcp_auth_error` (MCP auth failed; tools skipped; run continued).
- Builds: `list-environment-builds`, `environment-build-logs`, `trigger-environment-build`, `propose-environment-json`, `take-environment-snapshot` / `check-environment-snapshot`, `request-environment-setup-actions` (e.g. missing secret). `rename-chat` sets the current run title (≤200 chars) in the agents list and header. `get-automation` is lookup-by-id, not “create an automation.”
- `batch-fetch-details` caps ~50 runs; transcripts can be huge — don’t dump them into the parent context. Clients may prefix tool names (`cursor-cloud-run-info`). Treat transcripts as secret-bearing. Saved-environment CRUD is the HTTP **Environments API**, not this MCP (`cursor-cloud-agents-api`).

## Sources

- [Cloud Agent capabilities — Cursor Cloud MCP](https://cursor.com/docs/cloud-agent/capabilities) — accessed 2026-10-17
- [Cloud Agents overview](https://cursor.com/docs/cloud-agent) — accessed 2026-10-17
- [Cloud Agents API](https://cursor.com/docs/cloud-agent/api/endpoints) — accessed 2026-10-17
