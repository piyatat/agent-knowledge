---
id: resend-quota-and-test-domain
title: Resend rejects a send for quota, rate, or the test domain
kind: knowledge
tags: [resend, email, mcp, billing]
status: active
updated: 2026-11-21
when_to_use: A Resend send returns 429 or 403, mail only arrives for the account owner, or sending pauses
---

## Summary

Resend (`resend`) does not queue a send that hits a quota or the per-team rate limit. The shared test sender delivers only to the account owner. A Bearer API key in a headless MCP client is a real key: `full_access` can create more keys.

## Notes

- **Quotas.** Free transactional mail stops at 100 emails per UTC calendar day (midnight UTC, not a rolling 24 hours) and 3,000 a month. Paid plans have no daily cap and stop at the monthly quota until an admin turns on pay-as-you-go. That overage defaults to 400% of the monthly quota and can be set from 100% to 1,000%. A stopped send returns `429` with `daily_quota_exceeded` or `monthly_quota_exceeded`. Resend does not retry it. Inbound messages count, and each `To`, `Cc`, or `Bcc` counts separately.
- **Rate.** Every key on the team shares 10 requests per second. The eleventh request in that second is `429`. There is no burst above the limit. A batch of up to 100 emails counts as one request for the rate limit and still counts each email toward the quota.
- **Domain.** `onboarding@resend.dev` reaches only the account owner’s address. Sending to anyone else needs a verified domain you own. A from-address on the root domain fails with `403` if only a subdomain is verified. Cloudflare proxying on a verification CNAME can keep the domain unverified. DNS can take up to 72 hours.
- **Account pauses.** A bounce rate at or above 4%, or a spam rate at or above 0.08%, can pause sending. Content and logs are kept 30 days on Free, Pro, and Scale.
- **Keys.** Prefer the OAuth remote server so the API key is not copied into client config. A `sending_access` key cannot manage domains or create keys. The remote MCP session can, because its tool list includes API key create and remove.

## Sources

- [Account quotas and limits](https://resend.com/docs/knowledge-base/account-quotas-and-limits) — accessed 2026-11-21
- [Add and verify a domain](https://resend.com/docs/add-a-domain) — accessed 2026-11-21
- [Resend MCP server](https://resend.com/docs/mcp-server) — accessed 2026-11-21
- [Create an API key](https://resend.com/docs/api-reference/api-keys/create-api-key) — accessed 2026-11-21
- [Send emails with n8n and Resend](https://resend.com/docs/knowledge-base/n8n-integration) — accessed 2026-11-21
