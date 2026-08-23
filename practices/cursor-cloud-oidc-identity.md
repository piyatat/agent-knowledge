---
id: cursor-cloud-oidc-identity
title: Cursor Cloud Agent OIDC tokens
tags: [cursor, auth, security, identity]
status: active
updated: 2026-08-23
when_to_use: Letting a Cloud Agent assume AWS/GCP/Azure/Vault roles without long-lived keys in Secrets
---

## Summary

Managed Cloud Agent VMs mint 5-minute RS256 OIDC JWTs from a **local Unix socket** (`CURSOR_AGENT_SOCKET`, default `/run/cursor/api.sock`). Verifiers trust issuer `https://api.cursor.com`. This is not the Cloud Agents public API (which uses Cursor API keys).

## Notes

- Mint: `POST /v1/tokens/oidc` over the socket with required `aud` (and optional `nonce`, `sub_claim`). Cursor does not allowlist audiences — **your** verifier must reject unexpected `aud`. Tokens include `agent_runtime: managed`.
- Verify: discovery `https://api.cursor.com/.well-known/openid-configuration`, JWKS `https://api.cursor.com/keys`. Check `iss`, `aud`, `nbf`/`exp` (nbf is iat−5s), and policy claims. Older issuer `https://api2.cursor.sh/cloud-agent/identity` is still served but **minted tokens no longer use it**.
- Claims to authorize on: `sub` (`user:` / `service_account:` or projected `team_id:…`), `cloud_agent_id`, `team_id`, `repo_urls` (complete set — `repo_url` is only the primary). `owner_email` can change; prefer `sub` / `owner_user_id`.
- Trust model: the token names the **run**, not a process. Anything that can reach the socket (agent, generated code, hooks, install scripts) can mint. Scope the cloud role to the whole VM.
- Ops: 30 mints/min (burst 10), shared 8-connection cap with metadata. Cache until `exp`. Retry 429/5xx; treat 403 as fatal. Need egress to STS/your verifier even though minting is local.

## Sources

- [OIDC tokens (Cursor Cloud Agents)](https://cursor.com/docs/cloud-agent/identity) — accessed 2026-08-23
- [Cloud Agent capabilities — OIDC](https://cursor.com/docs/cloud-agent/capabilities) — accessed 2026-08-23
- [Secrets & Network](https://cursor.com/docs/cloud-agent/security-network.md) — accessed 2026-08-23
