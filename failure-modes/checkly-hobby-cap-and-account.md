---
id: checkly-hobby-cap-and-account
title: Checkly stopped the checks, or MCP used the wrong account
kind: knowledge
tags: [checkly, monitoring, billing, mcp]
status: active
updated: 2026-11-23
when_to_use: Checkly checks stopped on a free account, a browser check returned 402, or an agent edited a different Checkly account
---

## Summary

Checkly (`checkly`) Hobby stops synthetic checks when the included runs are used up. Starter and Team keep running and charge overage, which is higher than buying runs ahead of time. The MCP server can see every account on a user key unless the client sets `X-Checkly-Account`, and it can read and write account environment variables and secrets. Codex has no Checkly OAuth client.

## Notes

- **Hobby stops.** Hobby includes 1,000 browser runs and 10,000 API runs. There is no prepaid add-on and no overage rate. At the cap, checks stop. Members get email at 80% and at 100%. Creating a browser check over the plan limit returns HTTP 402. Starter and Team do not stop: past the prepaid amount, browser overage is $6.50 per 1,000 runs on Starter and $6.25 on Team; API overage is $2.60 per 10,000 on Starter and $2.50 on Team. Buying the block in advance is $5 or $4 per 1,000 browser runs and $2 or $1.80 per 10,000 API runs, monthly versus annual. Raising that allowance bills the prorated difference now. Lowering it waits until the next period. A failed subscription payment is retried; if it is not fixed by the date in the banner, checks stop and the account moves to Hobby. Cancelling a paid plan also lands on Hobby, at the end of the period, and overage already incurred is on the next invoice.
- **A run is easy to undercount.** Parallel locations multiply. A retry is another run, per location that failed. Each HTTP request in a multistep check is an API run. A Playwright suite charges one browser run per started 30 seconds, so 45 seconds is 2 and 70 seconds is 3. Round-robin stays one location per run no matter how many locations are selected. Deactivated checks do not run. Test sessions from the CLI and editor count. Uptime monitors do not spend these runs; they are capped by count (10 on Hobby). At that count you cannot create another. Hobby uptime frequency stops at 2 minutes. Hobby and Starter checks pick at most 3 of 6 public locations.
- **MCP account and secrets.** If the user is in more than one account, a prompt that does not name one can edit the wrong account. `X-Checkly-Account` pins the connection. A service key is already one account. The server can manage account-level environment variables and secrets, so a read tool can put secret values into the model context. Do not point it at a production account when the task is a draft check.
- **Auth mismatches.** Dynamic client registration is rejected. Codex is not an approved OAuth client; use a `cu_` user key as a bearer token, or a `sv_` service key when the plan allows one. The MCP setup page says `sv_` keys need Starter, Team, or Enterprise. pricing.md marks Service API Keys as Enterprise only, while the pricing-page comparison shows a dash on Hobby only. If the dashboard will not mint the key, that screen wins. Deprecated account keys and `sk_` keys are rejected. API-key sessions cannot call the invite-member tool.
- **Remote versus the repo.** The MCP server cannot see local files, bundle a project, or deploy checks-as-code. That path is the Checkly CLI. Triggering “existing checks” does not create the repo’s checks.

## Sources

- [Usage and check runs](https://www.checklyhq.com/docs/admin/usage/) — accessed 2026-11-23
- [Checkly pricing](https://www.checklyhq.com/pricing/) — accessed 2026-11-23
- [Checkly pricing (markdown)](https://www.checklyhq.com/pricing.md) — accessed 2026-11-23
- [Plan changes and billing](https://www.checklyhq.com/docs/admin/billing/) — accessed 2026-11-23
- [Checkly MCP server](https://www.checklyhq.com/docs/ai/mcp-server/) — accessed 2026-11-23
- [Set up the Checkly MCP server](https://www.checklyhq.com/docs/ai/mcp-server/setup/) — accessed 2026-11-23
- [Create a browser check](https://www.checklyhq.com/docs/api-reference/checks/create-a-browser-check/) — accessed 2026-11-23
