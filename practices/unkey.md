---
id: unkey
title: Unkey — API keys and Compute, with two MCP servers
kind: service
tags: [unkey, api-keys, mcp, hosting]
status: active
updated: 2026-11-24
when_to_use: Issuing and verifying keys for your own API, or letting an agent manage those keys and a Compute deployment
---

## Summary

**Unkey** is two products in one workspace. API Management issues, verifies, and rate-limits keys for an API you run. Compute builds and runs those APIs behind Unkey’s gateway. The plans are bought separately, and a Compute “Pro” plan is a different product from an API Management Pro tier. Two remote MCP servers sign in through the dashboard or a root key. Use Unkey when your API needs customer keys and verification. Use Infisical (`infisical`) when the secret belongs in a vault for your own workloads.

## Notes

- **Access.** Sign up at `links.get`. The homepage links there. Every API call is `POST https://api.unkey.com/v2/{service}.{procedure}` with a workspace root key in `Authorization: Bearer`. The dashboard shows a new root key once. A root key can only do the permissions you select.
- **MCP.** `https://mcp.unkey.com` covers keys, keyspaces, identities, permissions, rate limits, analytics, portals, and Compute. `https://mcp.unkey.com/compute` is Compute only, so the tool list is shorter. Add the URL with no headers and approve the browser prompt: pick a workspace and only permissions your role already has. Access tokens last 15 minutes and refresh in the background. The session ends after 7 days without use, or 30 days after sign-in, whichever comes first. Revoke it under Settings → Sessions. A browser session cannot mint root keys, and the servers have no root-key tools. CI sends a root key as `Authorization: Bearer`. Older URLs `https://mcp.unkey.com/mcp/v2` and `https://mcp.unkey.com/mcp/compute` still answer, including the older `Mcp-Unkey-V2-Bearer` and `Mcp-Unkey-V2-Root-Key` headers. The docs MCP is a separate server at `https://www.unkey.com/docs/mcp`.
- **API Management prices (limits doc, 2026-11-24).** Free is $0: 150,000 valid requests a month, 1,000 keys, 7-day request logs, 30-day audit logs, and unlimited keyspaces. Pro is seven fixed tiers from $25/month (250,000 valid requests) through $1,000/month (100 million), each with 1,000,000 keys and 90-day logs and audit logs. Only verifications that pass count. A rejected key, a rate limit, or any other failure is free. Enterprise is custom (support@unkey.com) and adds IP allow lists. Log drains are on no plan.
- **Compute caps.** Starter, Pro, and Business set workspace CPU and memory (30/120/240 vCPU and 60/240/480 GiB), per-instance CPU and memory, 1 concurrent build, and 4/8/16 replicas per region. Starter includes one custom domain; Pro and Business list unlimited, with an abuse cap. Subdomains of one domain count as one custom domain. With no paid API tier, the Compute plan also sets log retention, and Compute Starter keeps request logs for 3 days, shorter than the 7 days of a workspace with neither product paid.
- **Verify.** `keys.verifyKey` returns HTTP 200 when the key is rejected. Read `data.valid` and `data.code`. Details: `unkey-verify-and-free-quota`.

## Sources

- [Unkey MCP servers](https://www.unkey.com/docs/platform/ai-coding/mcp-servers) — accessed 2026-11-24
- [Unkey limits](https://www.unkey.com/docs/platform/billing/limits) — accessed 2026-11-24
- [Issue and verify your first key](https://www.unkey.com/docs/api-management/get-started/quickstart) — accessed 2026-11-24
- [Verify API key](https://www.unkey.com/docs/platform/api-reference/keys/verify-api-key) — accessed 2026-11-24
- [Unkey changelog, 2026-11-20](https://www.unkey.com/changelog/2026-11-20) — accessed 2026-11-24
- [Unkey pricing](https://www.unkey.com/pricing) — accessed 2026-11-24
- [Unkey sign-up](https://app.unkey.com/auth/sign-up) — accessed 2026-11-24
- [Unkey](https://www.unkey.com/) — accessed 2026-11-24
