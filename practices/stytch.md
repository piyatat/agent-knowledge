---
id: stytch
title: Stytch — consumer and B2B auth, with a workspace MCP server
kind: service
tags: [stytch, auth, mcp, b2b]
status: active
updated: 2026-11-25
when_to_use: Adding passwordless or organization login, or letting an agent configure a Stytch workspace
---

## Summary

**Stytch** is hosted authentication for a consumer app or a multi-tenant B2B app. Each project has a Test environment and a Live environment with separate keys, hosts, and users. A workspace MCP server can change that project’s configuration. Connected Apps is a different product: Stytch becomes the OAuth provider for an MCP server you run. Use Stytch when passwordless login or B2B organizations are the product. Use Clerk (`clerk`), WorkOS (`workos`), or Auth0 (`auth0`) when that vendor already holds the workspace. Use Better Auth (`better-auth`) when the auth code should live in the app.

## Notes

- **Access.** Sign up at `links.get`. On 2026-11-25 that page stayed on the URL. The API uses HTTP Basic with the project id and secret. Each environment also has its own public token. Test calls go to `https://test.stytch.com`. Live calls go to `https://api.stytch.com`. A project starts with one of each. Extra Test environments are created in the dashboard or with the Programmatic Workspace Actions API. User ids embed the environment, such as a `user-test-` prefix. Nothing created in one environment exists in the other.
- **Two MCP uses.** The workspace server is `https://mcp.stytch.dev/mcp`. It uses OAuth into the Stytch workspace. The docs describe configuring products from chat and uploading email templates, so a connected agent can change the project. Connected Apps is Stytch acting as the authorization server for a remote MCP server you operate. That usage is billed as monthly active users: a member who authorizes a client, or a client acting for them. The Connected Apps page says the first 10,000 of those users each month are free and that there is no separate Connected Apps invoice.
- **Plans (B2B pricing page, 2026-11-25).** Pay as you go has a $0 base. It includes 10,000 external active members and agents, 1,000 machine-to-machine tokens, and 5 SSO or SCIM connections, then $125 a connection. Fraud fingerprints include 10,000, then $0.005 each. A custom brand is $99. The FAQ says passing the included amounts is not a hard cap. That page did not print a per-member price, and it did not show a separate consumer price table. Enterprise is a contract, with a 99.99% uptime SLA.
- **Caveats.** A test key on the live host, an email to an address outside the signup domain before a card is added, and a sandbox address that returns success without sending mail are different failures. Details: `stytch-test-host-and-sandbox`.

## Sources

- [Stytch pricing](https://stytch.com/pricing) — accessed 2026-11-25
- [Stytch API keys](https://stytch.com/docs/resources/workspace-management/api-keys) — accessed 2026-11-25
- [Stytch MCP server](https://stytch.com/docs/resources/workspace-management/stytch-mcp-server) — accessed 2026-11-25
- [Stytch Connected Apps](https://stytch.com/connected-apps) — accessed 2026-11-25
- [Consumer API overview](https://stytch.com/docs/api-reference/consumer/api/overview) — accessed 2026-11-25
- [Create a Stytch account](https://stytch.com/dashboard/create-account) — accessed 2026-11-25
- [Stytch](https://stytch.com/) — accessed 2026-11-25
