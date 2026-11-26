---
id: replicate-credit-and-hour-retention
title: A Replicate prediction spent credit after it failed, or the output disappeared
kind: knowledge
tags: [replicate, billing, retention, mcp]
status: active
updated: 2026-11-26
when_to_use: A Replicate prediction returned 429, a failed run still cost money, or the output URL was gone an hour later
---

## Summary

Replicate (`replicate`) deletes API prediction data after one hour, and a run that looks failed is not always free. A zero credit balance stops new work. The MCP token is a full account token, so a connected agent can create predictions until the balance is gone.

## Notes

- **Credit.** Purchased credit expires one year from purchase and is not refundable. At zero, new work does not start and Replicate shuts down infrastructure it is running for the account. A prediction can still finish past zero. That remainder is charged to the default card at the end of the month. Near an empty balance the API is throttled harder than the normal ceilings. Those ceilings are 600 prediction creates per minute and 3,000 other requests per minute, with a short burst above them. With granted credit and no card, the cap is 1 request per second and 6 per minute. HTTP 429 means the request was throttled. The body names the reset, about 30 seconds in the documented example. Raising the balance does not raise a model’s shared-pool queue. Public models still cold-boot when the shared hardware is busy. Private models and deployments keep billing while instances are setting up or idle, even when no prediction is in flight.
- **Failed is not one rule.** The billing page says a failed run is not charged, and then qualifies that. Canceling an official model may still be charged, and a time-based model is charged for the time it already ran. Private models and deployments are billed for the time their instances were active, including failed and canceled runs. A model that calls other models is billed for the root duration and for downstream models that already ran before the failure. Copy outputs before relying on a retry.
- **One hour, and the token.** For predictions created through the API, inputs, outputs, output files, and logs are removed after one hour. The web UI keeps its own predictions until you delete them. A URL the agent fetched once can 404 on the next turn. The hosted MCP server and the local server both use an API token that can call the whole HTTP API. The token page does not offer a read-only scope. Replicate disables a token it finds in a public GitHub repository, and every client using that token stops.

## Sources

- [Replicate billing](https://replicate.com/docs/topics/billing) — accessed 2026-11-26
- [Prepaid credit](https://replicate.com/docs/topics/billing/prepaid-credit) — accessed 2026-11-26
- [Rate limits](https://replicate.com/docs/topics/predictions/rate-limits) — accessed 2026-11-26
- [Data retention](https://replicate.com/docs/topics/predictions/data-retention) — accessed 2026-11-26
- [API tokens](https://replicate.com/docs/topics/security/api-tokens) — accessed 2026-11-26
- [Replicate MCP](https://mcp.replicate.com/) — accessed 2026-11-26
