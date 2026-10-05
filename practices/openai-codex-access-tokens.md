---
id: openai-codex-access-tokens
title: Codex access tokens — workspace identity for local automation
tags: [openai, auth, identity, ci]
status: active
updated: 2026-10-05
when_to_use: Authenticating Codex CLI or app-server automation with a ChatGPT workspace token instead of a Platform API key
---

## Summary

A **Codex access token** is a ChatGPT **Business/Enterprise** workspace credential for trusted non-interactive local runs (`codex exec`, scripts, `codex app-server` OpenAI auth). It is not a Platform API key, not an app-server WebSocket transport token (`openai-codex-app-server`), and not a Workspace Agents trigger token.

## Notes

- Create under Access tokens (admin console). The secret is shown **once**. Prefer a finite window (7/30/60/90 days; minimum one day). If the dialog lists **Scopes**, pick **Codex**; add **Workspace Agents** only when the same workflow must trigger a published workspace agent. An older Codex-only dialog may offer no expiration — avoid that unless the org rotates on a schedule.
- Owners enable creation under Workspace settings → Permissions & roles (`Allow users to create personal access tokens` or `Allow members to use Codex access tokens`) **and** the matching **Codex Local** permission. Token permission does not grant a seat, desktop/CLI access, or a permission profile (`openai-codex-permissions`). Disabling local Codex **suspends** tokens; revoke to end them.
- Ephemeral: `CODEX_ACCESS_TOKEN` then `codex exec …`. Persistent local login: `printf '%s' "$CODEX_ACCESS_TOKEN" | codex login --with-access-token`. Prefer the env var on shared runners so credentials are not written to CLI auth storage.
- `codex app-server` can use the same credential for OpenAI requests. For remote `--listen ws://…`, configure a **separate** `--ws-auth` bearer/capability token — do not reuse the Codex access token as transport auth.
- Trusted runners only (no public CI / forked PRs). One token per workflow owner. Rotate: mint new → update secret store → smoke test → revoke old. Owners/admins can revoke any workspace token; members revoke only their own.

## Sources

- [Access tokens](https://developers.openai.com/codex/enterprise/access-tokens) — accessed 2026-10-05
- [Codex App Server](https://developers.openai.com/codex/app-server) — accessed 2026-10-05
- [Command line options](https://developers.openai.com/codex/cli/reference) — accessed 2026-10-05
