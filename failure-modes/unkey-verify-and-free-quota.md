---
id: unkey-verify-and-free-quota
title: Unkey verify returns 200 for a bad key, or the free quota throttles the API
kind: knowledge
tags: [unkey, api-keys, mcp, billing]
status: active
updated: 2026-11-24
when_to_use: An Unkey verification looked successful for a rejected key, a free workspace suddenly allows 5 requests a minute, or an agent rolled back a deployment
---

## Summary

Unkey (`unkey`) `keys.verifyKey` answers HTTP 200 for a rejected key, and a root key that lacks verify permission looks the same as a missing key (`NOT_FOUND`). A free workspace that stays over its valid-request quota is limited to 5 API requests a minute after 5 days. The main MCP server can also change Compute, so a broad grant can roll back a deployment.

## Notes

- **Read `data.valid`.** Failure codes include `NOT_FOUND`, `FORBIDDEN`, `INSUFFICIENT_PERMISSIONS`, `USAGE_EXCEEDED`, `RATE_LIMITED`, `DISABLED`, and `EXPIRED`. `VALID` is the success code. A missing verify permission on the root key returns `valid: false` and `NOT_FOUND`, which is the same code as a key that does not exist. A customer key that fails a permission you asked to check uses `INSUFFICIENT_PERMISSIONS` instead. HTTP 429 on this route is the workspace API rate limit, separate from the key’s own rate limit (`RATE_LIMITED` with `valid: false`).
- **Free quota.** Only successful verifications count toward 150,000 a month. Passing that quota emails workspace admins. If the workspace is still on Free five days later, Unkey limits its API to 5 requests a minute until you upgrade. Paid API tiers are not limited when they pass their included requests; move up a tier to cover the volume. A Compute plan does not raise the API Management quota. The two products use the word Pro for different prices.
- **MCP blast radius.** `https://mcp.unkey.com` includes Compute tools (deployments, domains, gateway policies) next to key tools. Grant the key permissions you need, or use `https://mcp.unkey.com/compute` when the session should not see key tools. Sign-in can grant only what your role already has. Sessions die after 7 idle days or 30 days from sign-in. Approve a browser prompt you started yourself. A root key in the header has whatever permissions you put on that key, and the dashboard shows it once.
- **Portal creates.** A portal session with `keys:create` and a key-creation policy can mint keys, capped at 10 creates an hour per user. The policy is checked when the session is created. App portals do not support this yet, and the CLI cannot grant `keys:create` because the published SDK cannot send that policy. Portal creates add no credits and create no permissions or roles.

## Sources

- [Verify API key](https://www.unkey.com/docs/platform/api-reference/keys/verify-api-key) — accessed 2026-11-24
- [insufficient_permissions](https://www.unkey.com/docs/errors/unkey/authorization/insufficient_permissions) — accessed 2026-11-24
- [Issue and verify your first key](https://www.unkey.com/docs/api-management/get-started/quickstart) — accessed 2026-11-24
- [Unkey limits](https://www.unkey.com/docs/platform/billing/limits) — accessed 2026-11-24
- [Unkey MCP servers](https://www.unkey.com/docs/platform/ai-coding/mcp-servers) — accessed 2026-11-24
- [Unkey changelog, 2026-11-20](https://www.unkey.com/changelog/2026-11-20) — accessed 2026-11-24
