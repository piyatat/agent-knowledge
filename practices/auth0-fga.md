---
id: auth0-fga
title: Auth0 FGA — hosted relationship authorization on OpenFGA
kind: service
tags: [auth0-fga, authorization, openfga, rebac]
status: active
updated: 2026-11-25
when_to_use: Checking whether a user can act on an object, instead of encoding those relationships in app code
---

## Summary

**Auth0 FGA** is a hosted authorization service for relationship checks (ReBAC), built on OpenFGA, the CNCF project Auth0 maintains. A store holds an authorization model and tuples such as “user anne is a viewer of document 1.” The free trial is for evaluation, has no SLA, and is not currently time-limited; production requires an enterprise contract, and the subscription page does not publish a dollar price. On the trial, Check is 20 requests a second per store and ListObjects is 10 requests a minute. Use Auth0 FGA for those checks. Use Auth0 (`auth0`) for sign-in. Use OpenFGA when you will run the engine and its database yourself.

## Notes

- **Access.** The product entry is `links.get`. On 2026-11-25 that URL answered 302 and started Auth0 sign-in at `auth.fga.dev` with the dashboard’s public client; it is not a static form, and the authorize URL is not a one-time user token. Getting started says to continue with an Auth0 account (you can create one) and then pick a jurisdiction, which is where the authorization data is stored. API clients are created in the store settings with a chosen permission set. Copy the store id, client id, and client secret; the secret is shown once. Calls use a client-credentials bearer token. The getting-started example uses issuer `auth.fga.dev`, audience `https://api.us1.fga.dev/` (the trailing slash is required), and a regional API host such as `https://api.us1.fga.dev`. The sample token response lists `expires_in` of 86400 seconds. A client whose permission set omits a scope cannot call that API.
- **Trial versus production (subscription plans, 2026-11-25).** The introduction says the free tier is for evaluation or you buy a subscription for production. Enterprise is the production plan, under Okta’s agreement, and has no published price. Limits below are per store. Trial: Check and BatchCheck 20 requests per second (each check inside a batch counts), Read 25 per second, Write 20 per second, Expand 30 per minute, ListObjects and ListUsers 10 per minute, ReadChanges 5 per second, model writes 10 per minute, 50,000 tuples, 100 monthly active users, 10 stores. Enterprise: Check 500 per second, Write 150 per second, ListObjects 20 per second, ListUsers 5 per second, 10 million tuples (more for sale), 20 stores, MAU by contract. Both cap a model at 400 KB serialized and a write at 40 tuples. Regions on the shared cloud are US, Europe, and Australia. Private Cloud is an enterprise add-on with more AWS regions and contract rate limits.
- **What counts as a user.** Monthly active users are distinct `user` field values sent to Check and ListObjects in that store over a month. `user:*`, `group:a#member`, and `employee:anne` each count, and the same person in two stores counts twice. The trial’s 100 includes those strings.
- **OpenFGA and extras.** OpenFGA has the same core and is yours to operate (Postgres or MySQL, backups, patches, no dashboard). Auth0 FGA adds the multi-region service, a logging API with 7-day retention, and optional Permissions Index and Relationship Sync. The index is not on the trial. Its expansion capacity is yearly and does not reset; each insert and each delete counts, and going over the entitlement does not stop the index. Relationship Sync applies Auth0 events you map and does not guarantee FGA matches Auth0. The MCP authorization guide is a model for which tools a person may call. It is not a server that administers the FGA store, and it tells you to call ListObjects when filtering that tool list.
- **Caveats.** A trial store is the wrong place for production traffic, and ListObjects will throttle long before Check does. Details: `auth0-fga-trial-and-list-rate`.

## Sources

- [Introduction to Auth0 FGA](https://docs.fga.dev/fga) — accessed 2026-11-25
- [Getting started](https://docs.fga.dev/getting-started) — accessed 2026-11-25
- [Subscription plans](https://docs.fga.dev/subscription-plans) — accessed 2026-11-25
- [Auth0 FGA versus OpenFGA](https://docs.fga.dev/openfga-vs-auth0-fga) — accessed 2026-11-25
- [Authorization for MCP servers](https://docs.fga.dev/modeling/agents/mcp-authorization) — accessed 2026-11-25
- [OpenFGA](https://openfga.dev/) — accessed 2026-11-25
- [Auth0 FGA dashboard](https://dashboard.fga.dev/) — accessed 2026-11-25
- [Auth0 FGA](https://auth0.com/fine-grained-authorization) — accessed 2026-11-25
- [Auth0 FGA docs](https://docs.fga.dev/) — accessed 2026-11-25
