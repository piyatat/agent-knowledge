---
id: auth0
title: Auth0 — hosted sign-in and a local beta MCP server
kind: service
tags: [auth0, auth, mcp, users]
status: active
updated: 2026-11-25
when_to_use: Adding Auth0 sign-in to an app, or letting an agent change that tenant through the Auth0 MCP server
---

## Summary

**Auth0** is hosted application sign-in: social and passwordless login, organizations, and enterprise connections. Free is $0 for up to 25,000 monthly active users, with no card, and that Free plan is the same for consumer and business apps. B2C Essentials starts at $35 a month and B2B Essentials at $150 a month, both at 500 users. Agent access is a local beta MCP server that calls the Management API as the person who signed in. Use Auth0 when the app should stay on an Auth0 tenant. Use Clerk (`clerk`) or WorkOS (`workos`) when that vendor’s hosted MCP fits better. Use Better Auth (`better-auth`) when sign-in should run inside the app.

## Notes

- **Access.** Create a tenant at `links.get`. The MCP guide is `links.docs`. The server is beta. It runs on the machine with the coding agent, not at a hosted URL. The usual login is the OAuth device flow, and the credential is stored in the operating-system keychain rather than in the client config. Private-cloud tenants cannot use that device flow; the project README says they authenticate with client credentials instead, and to keep that token’s lifetime short. A new tenant, a logout, or an expired token means authenticating again. The signed-in user needs permission to administer the tenant. Calls count against that tenant’s Management API rate limits.
- **What an agent can change.** The tools reference documents create and update for applications, APIs, Actions, and forms, deploying an Action, creating a client grant, and reading logs. The getting-started page also names `auth0_delete_application` as a tool that shows up after login. The product overview says the server can manage users; the tools reference does not list user tools, so do not assume a user-delete tool exists. Deploying an Action puts that code on a real login flow. A read-only startup flag, documented in the project README, hides write tools, and it wins over a tool-name filter. The flag is not a Management API scope. The stored credential can still call the API from something other than this server.
- **Plans (pricing page, 2026-11-24).** Free includes 25,000 monthly active users, 5 organizations, 1 enterprise connection, and 1 custom domain. A monthly active user is a non-employee who authenticated that month. Essentials starts at $35 a month for B2C or $150 a month for B2B, both listed at 500 users. Professional starts at $240 a month (B2C) or $800 a month (B2B), also at 500 users. Prices exist only at the listed user counts; usage between two counts is billed at the next count up. Yearly billing is 11 times the monthly price. Enterprise is a custom quote. Add-ons such as extra machine-to-machine tokens are priced separately.
- **A different Auth0 product.** [Auth for MCP](https://auth0.com/ai/docs/mcp/overview) is how Auth0 can be the authorization server for an MCP server you run. That is not this tenant-management server, and a token for one does not configure the other. Auth0 FGA (`auth0-fga`) is relationship checks on a separate account and API. A Management API token does not call it.
- **Caveats.** On Free, the Management API allows a burst of 2 and 2 requests a second, so a multi-tool turn returns 429. An Action deploy changes production logins. Details: `auth0-mcp-beta-and-rate-limit`.

## Sources

- [Auth0 MCP server](https://auth0.com/docs/get-started/auth0-mcp-server) — accessed 2026-11-24
- [Getting started with the Auth0 MCP server](https://auth0.com/docs/get-started/auth0-mcp-server/getting-started-with-auth0-mcp-server) — accessed 2026-11-24
- [Auth0 MCP tools reference](https://auth0.com/docs/get-started/auth0-mcp-server/auth0-mcp-tools-reference) — accessed 2026-11-24
- [Auth0 MCP server repository](https://github.com/auth0/auth0-mcp-server) — accessed 2026-11-24
- [Auth0 pricing](https://auth0.com/pricing.md) — accessed 2026-11-24
- [Free plan rate limits](https://auth0.com/docs/troubleshoot/customer-support/operational-policies/rate-limit-policy/rate-limit-configurations/free-public) — accessed 2026-11-24
- [Auth for MCP](https://auth0.com/ai/docs/mcp/overview) — accessed 2026-11-24
- [Sign up for Auth0](https://auth0.com/signup) — accessed 2026-11-24
- [Auth0](https://auth0.com/) — accessed 2026-11-24
