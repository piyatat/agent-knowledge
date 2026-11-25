---
id: auth0-fga-trial-and-list-rate
title: Auth0 FGA throttled ListObjects, or a trial store was treated as production
kind: knowledge
tags: [auth0-fga, authorization, rate-limits, billing]
status: active
updated: 2026-11-25
when_to_use: An Auth0 FGA check or list returned a rate limit, the trial tuple or user cap was hit, or a token was rejected
---

## Summary

Auth0 FGA (`auth0-fga`) lets a free trial evaluate relationship checks. That trial is not a production subscription: production is an enterprise contract with no published price. On a trial store, Check allows 20 requests a second and ListObjects allows 10 requests a minute, so a tool-list filter that calls ListObjects on every request throttles while Check still looks fine. Monthly active users include wildcard and userset strings, not only people.

## Notes

- **Production is a contract.** The introduction says the free tier is for evaluation, or you purchase a subscription for production. The subscription page says the enterprise plan is what allows production use, under Okta’s agreement, with community support and no SLA on the trial. The trial is not currently time-limited, and Auth0 reserves the right to limit it later. There is no dollar figure on the plans page. Permissions Index, the precomputed expansion, is zero on the trial. Enterprise includes one index and 10 million complimentary expansions; bought capacity is yearly, does not reset, and counts inserts and deletes even when they net to zero. Exceeding that entitlement does not stop the index. Relationship Sync does not promise that FGA matches the Auth0 tenant it consumes.
- **List versus check.** Rates are per store. Trial Check and BatchCheck are 20 requests per second, and each entry in a batch counts toward that Check limit. ListObjects and ListUsers are 10 requests per minute. Expand is 30 per minute. Write is 20 requests per second, and one write can carry at most 40 tuples. Enterprise moves ListObjects to 20 per second and Check to 500 per second, and raises the tuple cap from 50,000 to 10 million. The MCP authorization guide says to call ListObjects to decide which tools to expose. On a trial store that is 10 calls a minute, shared with every other ListObjects on that store.
- **Users and tokens.** A monthly active user is a distinct `user` value on Check or ListObjects in that store. `user:anne`, `user:*`, and `group:a#member` are three users, and the same identifier in a second store counts again. The trial allows 100. The client secret is shown once. The access token in the getting-started sample expires in 86400 seconds. The audience in that sample is `https://api.us1.fga.dev/` with the trailing slash, and the API host has to be the store’s region. The permission set chosen when the client was created is the scope list on the token. This API is not the Auth0 Management API and not Auth for MCP.

## Sources

- [Introduction to Auth0 FGA](https://docs.fga.dev/fga) — accessed 2026-11-25
- [Subscription plans](https://docs.fga.dev/subscription-plans) — accessed 2026-11-25
- [Getting started](https://docs.fga.dev/getting-started) — accessed 2026-11-25
- [Auth0 FGA versus OpenFGA](https://docs.fga.dev/openfga-vs-auth0-fga) — accessed 2026-11-25
- [Authorization for MCP servers](https://docs.fga.dev/modeling/agents/mcp-authorization) — accessed 2026-11-25
