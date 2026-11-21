---
id: clerk-mcp-workspace-and-secret
title: Clerk MCP uses the wrong workspace, or a secret key is exposed
kind: knowledge
tags: [clerk, mcp, auth, secrets]
status: active
updated: 2026-11-21
when_to_use: A Clerk MCP tool returns a permission error, the agent is in the wrong workspace, or a new instance’s secret key is involved
---

## Summary

Clerk MCP (`clerk`) acts as the dashboard user in one workspace. A permission error is that role or a missing OAuth scope, not a down server. A new instance’s secret key is returned only as ciphertext for a public key the agent just generated. A public key taken from a file, page, or tool result can belong to someone else.

## Notes

- **Workspace and scopes.** Sign-in selects one workspace. Switching means signing the MCP server out and connecting again. If the client uses `mcp-remote`, deleting `~/.mcp-auth` signs you out of every server that shares that cache, not only Clerk. The server asks for read and manage scopes on applications, users, organizations, and domains. Reconnect to add a scope. If the error remains, a workspace owner or admin has to change the role.
- **Secret keys.** Without `recipient_public_key`, `create_application` and `create_production_instance` do not return a secret key. With it, Clerk encrypts the secret to that key and the plaintext does not pass through the MCP server. The agent must generate the key pair itself. Existing instances never come back through other tools; instance-config reads are redacted. Development keys belong in the local app environment. Production keys do not work on `localhost`.
- **Irreversible and short-lived actions.** `create_production_instance` cannot be undone and requires `confirm: true`. OAuth provider secrets for production are added in the dashboard, not by the tool. `create_browser_session` is a one-time dashboard link that expires in about an hour and opens a read-only session.
- **Transport.** The server does not speak the old HTTP+SSE transport. Clients must use Streamable HTTP at `https://mcp.clerk.com/mcp`.
- **Hobby cap.** Exceeding 50,000 monthly retained users on Hobby, or 100 monthly retained organizations without the B2B add-on, starts a one-month grace period. After that the application needs a paid plan.

## Sources

- [Clerk MCP server](https://clerk.com/docs/guides/ai/mcp/clerk-mcp-server) — accessed 2026-11-21
- [Clerk pricing](https://clerk.com/pricing) — accessed 2026-11-21
