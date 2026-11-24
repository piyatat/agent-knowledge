---
id: auth0-mcp-beta-and-rate-limit
title: Auth0 MCP deploys an Action, or the Free Management API returns 429
kind: knowledge
tags: [auth0, auth, mcp, billing]
status: active
updated: 2026-11-24
when_to_use: An Auth0 agent changed a live login flow, a private-cloud tenant will not sign in, or Management API calls return 429
---

## Summary

The Auth0 (`auth0`) MCP server is beta and runs locally as the dashboard user who completed the device login. It can create applications and APIs and deploy an Action onto a real login flow. The project README’s read-only flag only hides write tools; it does not narrow the Management API token. On the Free plan that API allows a burst of 2 and 2 requests a second, so a burst of tool calls is refused.

## Notes

- **Writes land on the tenant.** Documented tools create and update applications, resource servers, forms, and Actions, create a client grant, and deploy an Action. The getting-started page names `auth0_delete_application` as a tool that appears after install. Deploying an Action makes that code part of login. The overview’s phrase “managing users” is not backed by a user tool in the tools reference. Do not invent a user-delete call when the tool list does not show one. The server is beta, and the tool list can change.
- **Read-only is a local flag.** The project README starts the server so that only read tools are advertised, and that flag overrides a tool-name filter. The Management API token in the OS keychain is unchanged. Another client using that credential, or a server started without the flag, can still write. Private-cloud tenants cannot complete the device flow. The README says they pass client credentials instead and should keep the token lifetime short. Logout removes the keychain credential; switching tenants requires signing in again. There is no hosted MCP URL for this product.
- **Free rate limits.** The Free public Management API limit is a burst of 2 and a sustained 2 requests a second, for the API as a whole, before tighter endpoint limits. A turn that lists applications, creates one, and deploys an Action can hit 429 even though each call is valid. Signing-key rotation on that same page is 5 requests a day. The Authentication API is a different budget (burst 300 and 300 a minute on Free) and does not absorb Management API traffic. Paid tenants have different tables. The MCP server does not raise these limits.

## Sources

- [Auth0 MCP server](https://auth0.com/docs/get-started/auth0-mcp-server) — accessed 2026-11-24
- [Getting started with the Auth0 MCP server](https://auth0.com/docs/get-started/auth0-mcp-server/getting-started-with-auth0-mcp-server) — accessed 2026-11-24
- [Auth0 MCP tools reference](https://auth0.com/docs/get-started/auth0-mcp-server/auth0-mcp-tools-reference) — accessed 2026-11-24
- [Auth0 MCP server repository](https://github.com/auth0/auth0-mcp-server) — accessed 2026-11-24
- [Free plan rate limits](https://auth0.com/docs/troubleshoot/customer-support/operational-policies/rate-limit-policy/rate-limit-configurations/free-public) — accessed 2026-11-24
- [Rate limit policy](https://auth0.com/docs/troubleshoot/customer-support/operational-policies/rate-limit-policy) — accessed 2026-11-24
