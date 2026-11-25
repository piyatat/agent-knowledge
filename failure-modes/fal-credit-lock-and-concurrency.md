---
id: fal-credit-lock-and-concurrency
title: A fal call locked for credits, queued on concurrency, or billed the wrong account
kind: knowledge
tags: [fal, billing, rate-limits, mcp]
status: active
updated: 2026-11-25
when_to_use: A fal request returned 429, the account locked, or an MCP run billed the wrong account
---

## Summary

A fal (`fal`) Model API call can fail because the credit balance crossed the lock threshold, or it can sit in a queue because only two generations run at once on a new account. Those are different stops. The hosted MCP server bills whichever account is marked active, which starts as the personal account, and an API key pasted into an old MCP config is rejected.

## Notes

- **Lock versus queue.** Credits are prepaid. Purchased credits expire 365 days after the purchase. Free grants and coupons expire on their own schedule, from one week to one year. When the balance drops below the account’s lock threshold, requests are rejected until credits are added. Enterprise invoice billing is not locked that way. Concurrency is separate: a new account allows 2 requests in `IN_PROGRESS`. Paid invoices from the last four weeks raise the cap, up to 40 on self-serve, a few minutes after the invoice is paid. Requests waiting in `IN_QUEUE` do not consume a slot. A busy model can have its own cap. Calls you make to your own Serverless app are not under the Model API cap, and Serverless bills per second while the runner is up.
- **Who retries.** A queued subscribe stays in the queue and is retried with no maximum, unless `start_timeout` passes first. A direct `run` through the client retries HTTP 429 up to 10 times and then stops. A raw HTTP call does not retry. The concurrency 429 uses type `concurrent_requests_limit` and the header `X-Fal-needs-retry: 1`. HTTP 500 and above, queue wait, and Model API cold starts are not billed. HTTP 422 can still be billed if a runner already spent GPU time. `content_policy_violation` is a 422 that should not be retried.
- **MCP account and files.** Browser sign-in is the supported MCP path. A config that still sends an API key in `Authorization` gets 401. Clients that cannot do OAuth send `Authorization: Key` with the key id and secret to `https://mcp.fal.ai/mcp-relay`. Runs bill the Active MCP account. That is the personal account until someone selects a team under MCP and connectors. Switching the team applies to later requests without a reconnect. `estimate_cost` is not a quote. Output URLs are public by default for at least 7 days. The hosted server cannot read a path on the agent machine. Signing in with SSO does not reuse credits from a Google or GitHub login on the same email.

## Sources

- [fal Model API FAQ](https://fal.ai/docs/documentation/model-apis/faq) — accessed 2026-11-25
- [fal concurrency limits](https://fal.ai/docs/documentation/model-apis/concurrency-limits) — accessed 2026-11-25
- [fal Model API pricing](https://fal.ai/docs/documentation/model-apis/pricing) — accessed 2026-11-25
- [fal accounts and identity](https://fal.ai/docs/documentation/setting-up/accounts-and-identity) — accessed 2026-11-25
- [fal MCP server](https://fal.ai/mcp) — accessed 2026-11-25
