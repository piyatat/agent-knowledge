---
id: apify-usage-block-and-actor-search
title: An Apify run was blocked, or Store search hid the Actor
kind: knowledge
tags: [apify, scrape, mcp, billing]
status: active
updated: 2026-11-27
when_to_use: An Apify Actor stopped for usage, search missed a Store Actor, or call-actor returned no rows
---

## Summary

Apify (`apify`) blocks a Free account after $5 of platform usage until the next billing cycle. Paid accounts suspend at the usage limit too, and that limit starts equal to the prepaid amount. MCP search omits rental, pay-per-result, and full-permission Actors. `call-actor` returns a run status and storage ids, and the rows are a later dataset read.

## Notes

- **Usage stops the platform.** Free includes $5 and has no pay-as-you-go. After that, services stay blocked until the next billing cycle. Unused credit expires. The subscriptions page sets every plan’s usage limit to its prepaid amount by default and suspends services at that limit. A paid account continues only after someone raises the limit. The ceiling is $100 on Starter, $1,000 on Scale, and $5,000 on Business. Overage invoices immediately at $20 on Starter and $200 on higher plans. Otherwise it is added to the next invoice. The pricing page’s Max RAM column matches combined memory of all running jobs (16 / 64 / 256 / 512 GB). A single run is capped lower: the limits page lists 16,384 MB on Free and 32,768 MB on Starter.
- **Search is a filtered catalog.** The MCP README says `search-actors` returns free and pay-per-event Actors that pass the agent-safety filters. Rental and pay-per-result Actors do not appear. The docs page says full-permission Actors are left out of search and of execution, because a person has to approve them. The README says `call-actor` returns an error with an approval link until that one-time approval. An Actor that is missing from search can still be a normal Store Actor.
- **The run tool does not return the rows.** `call-actor` waits at most 45 seconds (default 30) and returns status and storage ids. The run can still be going. Read items with `get-dataset-items`. Spend caps belong in `callOptions`: `maxTotalChargeUsd` for pay-per-event Actors and `maxItems` for pay-per-result Actors. `timeout` and `memory` do not set a price cap. A `tools` query replaces the default tool list. The default list includes `call-actor`, so a normal connection spends usage. `apify-api-write` is off that list and can send a DELETE. The hosted server returns HTTP 429 above 20 requests a second per account.

## Sources

- [Apify pricing](https://apify.com/pricing) — accessed 2026-11-27
- [Apify subscription plans](https://docs.apify.com/account/subscriptions) — accessed 2026-11-27
- [Apify limits](https://docs.apify.com/account/limits) — accessed 2026-11-27
- [Apify MCP server](https://docs.apify.com/mcp) — accessed 2026-11-27
- [Apify MCP server README](https://github.com/apify/apify-mcp-server/blob/HEAD/README.md) — accessed 2026-11-27
