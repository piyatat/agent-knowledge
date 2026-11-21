---
id: clerk
title: Clerk — user auth and a dashboard MCP server
kind: service
tags: [clerk, auth, mcp, users]
status: active
updated: 2026-11-21
when_to_use: Adding sign-up, sessions, and organizations to an app, or letting an agent manage a Clerk workspace
---

## Summary

**Clerk** is a hosted product for application sign-up, sessions, organizations, and machine-to-machine tokens. A remote MCP server at `https://mcp.clerk.com/mcp` lets a coding agent manage the signed-in dashboard user’s workspace and fetch SDK snippets. The server uses Streamable HTTP only. Use Clerk when user auth should stay its own product. Use Supabase Auth (`supabase`) or Neon Auth (`neon`) when auth should live on that database.

## Notes

- **Access.** Create a dashboard account at `links.get`. The MCP guide (`links.docs`) is the client pointer. The agent signs in with OAuth in the browser, picks one workspace, and approves scopes. The server then acts as that user, limited to the workspace role. There is no password in the client config.
- **What an agent can do.** Account tools list and rename applications, read or patch instance config (dry run first), manage users and organization memberships, check domains, and create a production instance. `clerk_sdk_snippet` returns feature snippets. `configure_mcp_server` registers an MCP URL you host as an OAuth resource on an instance. Changing tools are marked so the client can ask first.
- **Keys.** Publishable keys appear on application reads. A secret key is returned only by `create_application` or `create_production_instance`, and only encrypted to a public key the agent generated for that call. Other tools do not return secret keys. Details and the untrusted-key case: `clerk-mcp-workspace-and-secret`.
- **Plans (pricing page, 2026-11-21).** Hobby is $0: unlimited applications, up to 3 dashboard seats, **50,000 monthly retained users per app**, a fixed 7-day session, and 1 day of application logs. A retained user is someone who returns at least one day after sign-up; the first 24 hours are not billed. Pro is **$25/month** ($20 billed annually) with the same 50,000 included, then volume pricing from $0.02, one SSO connection, and one Directory Sync connection. Business is **$300/month** ($250 annually) with 10 seats, a SOC 2 report, and 30-day logs. Extra Directory Sync connections on paid plans are billed from **1 January 2027**.
- **Supabase.** Clerk’s native third-party auth integration is the path into a Supabase project. The older Supabase JWT template has been deprecated since **1 April 2025**.
- **Alternatives.** Supabase (`supabase`) when Auth, Postgres, and Storage should be one project. Neon (`neon`) when the database is Neon and managed Better Auth is enough. Composio (`composio`) when the agent needs someone else’s SaaS tools, not your app’s users.
- **Caveats.** A missing scope or a weaker workspace role fails the tool. Production keys do not work on localhost. Creating a production instance cannot be undone.

## Sources

- [Clerk MCP server](https://clerk.com/docs/guides/ai/mcp/clerk-mcp-server) — accessed 2026-11-21
- [Using Clerk with AI](https://clerk.com/docs/guides/ai/overview) — accessed 2026-11-21
- [Clerk pricing](https://clerk.com/pricing) — accessed 2026-11-21
- [Clerk sign-up](https://dashboard.clerk.com/sign-up) — accessed 2026-11-21
- [Integrate Supabase with Clerk](https://clerk.com/docs/guides/development/integrations/databases/supabase) — accessed 2026-11-21
