---
id: cursor-cloud-agent-metadata
title: Cloud Agent in-VM metadata vs SDK metadata tags
tags: [cursor, identity, observability, security]
status: active
updated: 2026-08-29
when_to_use: Reading the current Cloud Agent id/owner/turn/repos from inside the VM, or attaching caller tags when creating an agent
---

## Summary

Managed Cloud Agent VMs expose a **preview** local metadata API on the same Unix socket as OIDC (`CURSOR_AGENT_SOCKET`, default `/run/cursor/api.sock`). Values are unsigned `text/plain`. They are **not** credentials and **not** the caller-owned `metadata` map on the Python SDK / Cloud Agents API.

## Notes

- Read: `GET /v1/meta-data/<key>` over the socket (`http://cursor-agent/…`; hostname is ignored). List prefixes (`agent/`, `owner/`, `turn/`, `workspace/`). Missing key → 404. Preview: breaking changes allowed.
- Identity to AWS/GCP/Vault: mint an OIDC JWT (`cursor-cloud-oidc-identity`). Metadata can name the current turn’s submitter and serving model — claims a token should not carry and that can outlive a JWT’s usefulness if cached.
- `turn/` exists only during a coding turn. Do not cache `turn/*` across turns. `workspace/branch-name` appears after a branch is recorded. `workspace/repo-url` is the **primary** repo (`host/path`, no scheme); `workspace/repo-urls` is the full set (missing ≠ single-repo).
- `agent/source` examples: `WEBSITE`, `API`, `SLACK`, `AUTOMATIONS`. `workspace/automation-id` is set when source is automations. Prefer `owner/user-id` over email for allowlists.
- Any process that can reach the socket (agent, generated code, hooks, install scripts) can read every key. Self-hosted workers do **not** serve this API yet.
- Limits are shared with OIDC minting: 120 metadata GETs/min (burst 20), 8 connections. Retry 429/5xx; treat 403 as fatal.
- SDK `CloudAgentOptions.metadata` is the opposite direction: up to 50 caller tags (key ≤255 chars, value ≤4096 bytes) stored on the agent record. `403 feature_unavailable` if the account has not enabled tags.

## Sources

- [Agent metadata](https://cursor.com/docs/cloud-agent/metadata) — accessed 2026-08-29
- [OIDC tokens](https://cursor.com/docs/cloud-agent/identity) — accessed 2026-08-29
- [Cursor Python SDK](https://cursor.com/docs/sdk/python) — accessed 2026-08-29
