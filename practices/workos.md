---
id: workos
title: WorkOS — AuthKit, enterprise SSO, and a dashboard MCP server
kind: service
tags: [workos, auth, mcp, sso]
status: active
updated: 2026-11-24
when_to_use: Adding enterprise SSO and user auth with WorkOS, or letting an agent manage a WorkOS workspace
---

## Summary

**WorkOS AuthKit** is hosted sign-in: email and password, social login, passkeys, MFA, organizations, and enterprise SSO. The first million monthly active users are free. SSO and Directory Sync are billed per connection. A remote MCP server at `https://mcp.workos.com/mcp` lets an agent manage the signed-in dashboard user over Streamable HTTP. AuthKit can also be the OAuth authorization server for an MCP server you run. Use WorkOS when customers bring an identity provider. Use Clerk (`clerk`) when you want that vendor’s retained-user pricing and dashboard tools instead. Use Better Auth (`better-auth`) when the same sign-in should run inside the app.

## Notes

- **Access.** Create an account at `links.get`. The management MCP guide (`links.docs`) is the client pointer. The first connection opens a WorkOS consent screen. The agent is one team and one environment. It inherits that user’s dashboard role, defaults to a sandbox, and touches production only when asked. Admins can turn off MCP, production access, or writes; all three are on by default. Switching production never grants a role the user lacks.
- **What an agent can do.** The server discovers operations and then runs them, instead of loading one tool per endpoint. The published tool names are `whoami`, `list_operations`, `query`, and `mutate`. Day-to-day dashboard work is in scope: organizations, SSO connections, Directory Sync, AuthKit users, roles, audit logs, webhooks, feature flags, and branding. Deletes of an organization, connection, or directory return a description and wait for an explicit confirm. API keys, client secrets, and webhook signing secrets are stripped from responses. The agent can set a secret you supply and cannot read existing ones back. It cannot impersonate a user, mint or rotate credentials, change the MCP settings that govern itself, or delete the team.
- **Plans (pricing page, 2026-11-21).** AuthKit is free for the first 1 million monthly active users, then **$2,500/month** per extra million. A monthly active user is anyone who signs up, signs in, or updates a profile in the calendar month. Staging environments are not billed. SSO and Directory Sync are each **$125 per connection** for the first 15, **$100** for 16–30, **$80** for 31–50, and **$65** for 51–100. Audit-log streaming is $125/month per SIEM connection, and retention is $99/month per million events. Radar fraud checks are free for the first 1,000, then $100/month per extra 50,000. A custom domain is $99/month.
- **AuthKit in front of your MCP server.** This is a different product from the management server. Client ID Metadata Documents are off until you enable them under Connect → Configuration. Dynamic client registration is a separate switch for older clients. Register the MCP URL as a Resource Indicator. If none are configured, tokens use the environment client id as `aud` and ignore the `resource` parameter. Clients that omit `resource` need one indicator marked as the default, or they receive that same client-id audience. Access tokens follow the AuthKit application’s access-token duration, which defaults to five minutes. Connect refresh tokens for these clients have no automatic maximum lifetime, and revoking AuthKit sessions does not revoke them. Public clients rotate the refresh token; keep the latest value.
- **Alternatives.** Clerk for application auth with a different MCP and a 50,000 retained-user Hobby cap. Better Auth (`better-auth`) when email, social, and organization auth should be a library in your process. Supabase (`supabase`) when Auth should live on that project’s Postgres. Auth0 (`auth0`) when the identity product is an Auth0 tenant and the agent should use Auth0’s local MCP server.
- **Caveats.** A sandbox edit is not a production edit, and a token with the wrong audience fails at your MCP server. Details: `workos-mcp-sandbox-and-audience`.

## Sources

- [WorkOS MCP server](https://workos.com/docs/mcp) — accessed 2026-11-21
- [WorkOS MCP: manage your account](https://workos.com/blog/management-mcp-server) — accessed 2026-11-21
- [AuthKit for MCP](https://workos.com/docs/authkit/mcp) — accessed 2026-11-21
- [WorkOS pricing](https://workos.com/pricing) — accessed 2026-11-21
- [WorkOS sign-up](https://workos.com/signup) — accessed 2026-11-21
