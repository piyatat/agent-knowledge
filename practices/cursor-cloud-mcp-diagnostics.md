---
id: cursor-cloud-mcp-diagnostics
title: Cursor Cloud MCP — run diagnostics tools
tags: [cursor, mcp, observability, ops]
status: active
updated: 2026-08-23
when_to_use: A Cursor cloud agent must inspect its own run, sibling runs, environment, builds, or setup logs
---

## Summary

**Cursor Cloud MCP** is a built-in diagnostics server on Cloud Agent runs. It is not Team MCP. Use it to fetch run identity, events, transcripts, diffs, environment config, and build logs instead of scraping dashboard URLs. Team admins can disable it.

## Notes

- Start with `run-info` (current `bcId`, URL, repo, model, owner, source). Then `get-events` → `environment-info` → `list-cloud-agents` → `batch-fetch-details` (optional transcripts, diffs, setup logs, `include_events`).
- Access: non-admins see only runs they started/own. Team admins can list/fetch transcripts for team runs they already have repo/environment access to. Service accounts follow the owning user/team context. Tools re-check auth on every call.
- Event `kind`s: `setup_started|completed|failed`, `pr_created|pr_creation_failed`, `artifact_created`, `mcp_auth_error` (MCP auth failed; tools skipped; run continued).
- Builds: `list-environment-builds`, `environment-build-logs`, `trigger-environment-build`, `propose-environment-json`, snapshot check/take, `request-environment-setup-actions` (e.g. missing secret).
- `get-automation` is lookup-by-id, not “create an automation.” `batch-fetch-details` caps ~50 runs; transcripts can be huge — don’t dump them into the parent context.
- Clients may prefix tool names (`cursor-cloud-run-info`). Treat transcripts as secret-bearing.

## Sources

- [Cloud Agent capabilities — Cursor Cloud MCP](https://cursor.com/docs/cloud-agent/capabilities) — accessed 2026-08-23
- [Cloud Agents overview](https://cursor.com/docs/cloud-agent) — accessed 2026-08-23
