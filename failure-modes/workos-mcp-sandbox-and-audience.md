---
id: workos-mcp-sandbox-and-audience
title: WorkOS MCP edits the sandbox, or an AuthKit token has the wrong audience
kind: knowledge
tags: [workos, mcp, auth, sso]
status: active
updated: 2026-11-21
when_to_use: A WorkOS agent changed the wrong environment, a delete did not run, or an MCP client cannot sign in through AuthKit
---

## Summary

The WorkOS management MCP (`workos`) starts in a sandbox and uses the signed-in user’s role. AuthKit, used as the authorization server for an MCP server you host, leaves Client ID Metadata Documents off and will issue tokens whose audience is the environment client id until a Resource Indicator is configured.

## Notes

- **Environment and role.** Ask `whoami` before a write. Production runs only when the prompt says so and an admin has left “Allow production access” on. “Allow write access” off means every mutation fails. A member cannot perform admin-only dashboard actions through the agent. The grant is one team; another team needs a new sign-in.
- **Deletes and secrets.** Deleting an organization, connection, or directory returns what will be destroyed and does not run until the agent confirms. Responses omit API keys, client secrets, and signing secrets. Credential minting, user impersonation, and the MCP access toggles are not exposed, so an agent cannot rotate a key or widen its own access.
- **Your MCP server’s tokens.** Enable Client ID Metadata Documents for clients that register themselves. Without any Resource Indicator, AuthKit ignores `resource` and sets `aud` to the environment’s client id (Developer → API Keys). Your server should reject that token. Clients that omit `resource` need one indicator set as the default; otherwise they also receive the client-id audience. A wildcard indicator cannot be the default. Access tokens default to five minutes. Connect refresh tokens are not cut off by the AuthKit session length, and revoking dashboard sessions leaves them valid. Public clients rotate refresh tokens; an old token fails with `invalid_grant` and the user must authorize again. Keep the newest refresh token.

## Sources

- [WorkOS MCP server](https://workos.com/docs/mcp) — accessed 2026-11-21
- [AuthKit for MCP](https://workos.com/docs/authkit/mcp) — accessed 2026-11-21
- [WorkOS MCP: manage your account](https://workos.com/blog/management-mcp-server) — accessed 2026-11-21
