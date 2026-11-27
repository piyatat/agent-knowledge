---
id: apify
title: Apify — Actor marketplace with a hosted MCP server
kind: service
tags: [apify, scrape, mcp, actors]
status: active
updated: 2026-11-27
when_to_use: Running an Apify Store Actor to collect site data, or letting an agent search and start that run
---

## Summary

**Apify** runs hosted Actors for scraping, search, and browser automation, and bills them against prepaid platform usage. Free includes $5 a month and then blocks the platform until the next billing cycle. A hosted MCP server at `https://mcp.apify.com` can search the Store, start runs, and read datasets. The default connection includes `call-actor`, which spends that usage. Use Apify when a Store Actor already extracts the site. Use Firecrawl (`firecrawl`) for its own scrape and search API. Use Browserbase (`browserbase`) when the agent should drive a hosted browser session itself.

## Notes

- **Access.** Sign up at `links.get`. On 2026-11-27 that URL stayed on itself with HTTP 200 (title Apify Console). The homepage links there, and `https://apify.com/sign-up` redirects to it with no extra token. MCP is `https://mcp.apify.com`. OAuth is the hosted sign-in. A bearer token also works. The console shows a new token once. The default URL requires an account. A `tools` query that lists only `search-actors`, `fetch-actor-details`, `search-apify-docs`, `fetch-apify-docs`, `apify-api-search`, and `apify-api-details` accepts calls with no token. Adding any other tool, or omitting the query, requires a token.
- **Plans.** The pricing page lists Free at $0 with $5 of usage and no card, Starter at $19 a month ($17 annual) with $19 of usage, Scale at $199 ($179) with $199, and Business at $999 ($899) with $999. Annual billing is 10% off the subscription price. Unused usage expires at the end of the cycle. One compute unit is 1 GB of RAM for one hour: $0.20 on Free and Starter, $0.16 on Scale, and $0.13 on Business. Concurrent runs are 5, 32, 128, and 256. The limits page’s combined memory for all running jobs is 16 GB, 64 GB, 256 GB, and 512 GB, which matches the pricing page’s Max RAM column. Per-run maximum memory on the limits page is 16,384 MB on Free and 32,768 MB on Starter. The Creator plan is $1 a month with a one-time $500 of usage for the first six months, and it limits the Store to universal Actors.
- **When usage runs out.** The subscriptions page sets the usage limit to the prepaid amount by default, and platform services suspend at that limit. A paid account raises the limit to allow overage, up to $100 on Starter, $1,000 on Scale, and $5,000 on Business. Overage invoices immediately once it reaches $20 on Starter or $200 on a higher plan. Otherwise it lands on the next invoice. Free has no pay-as-you-go. After $5, the platform stays blocked until the next billing cycle. Free proxy works inside the platform and does not extend to external clients.
- **What MCP runs.** The default load is the `actors` and `docs` categories, the `apify/web-search` and `apify/web-fetch` Actors, and `report-problem`. A `tools` query replaces that set. `call-actor` waits `waitSecs` seconds (0–45, default 30) and returns run status and storage ids, not the items. `get-dataset-items` reads the dataset, and the server adds it when a tool that starts a run is loaded. Put `maxTotalChargeUsd` (pay-per-event) or `maxItems` (pay-per-result) in `callOptions`, not in the Actor input. The hosted server allows 20 requests a second per account. `apify-api-write` can send POST, PUT, PATCH, or DELETE to an API path and is not in the default set. `delete-actor` and `delete-schedule` load only when named.
- **Search hides Actors.** The MCP server README says `search-actors` returns free and pay-per-event Actors that pass the agent-safety filters, so rental and pay-per-result Actors do not appear. The docs page says full-permission Actors are excluded from search and from execution. The README says `call-actor` returns an approval link until a person approves that Actor once. Plan against both: a missing Actor may exist in the Store and still be blocked here.
- **Caveats.** A default MCP connection can spend the $5 and then find the platform blocked. `call-actor` finishing its wait is not the same as having the rows. Details: `apify-usage-block-and-actor-search`.

## Sources

- [Apify pricing](https://apify.com/pricing) — accessed 2026-11-27
- [Apify subscription plans](https://docs.apify.com/account/subscriptions) — accessed 2026-11-27
- [Apify limits](https://docs.apify.com/account/limits) — accessed 2026-11-27
- [Apify MCP server](https://docs.apify.com/mcp) — accessed 2026-11-27
- [Apify MCP server README](https://github.com/apify/apify-mcp-server/blob/HEAD/README.md) — accessed 2026-11-27
- [Sign up for Apify](https://console.apify.com/sign-up) — accessed 2026-11-27
- [Apify](https://apify.com/) — accessed 2026-11-27
