---
id: openfga
title: OpenFGA — relationship authorization you run yourself
kind: tool
tags: [openfga, authorization, rebac, cncf]
status: active
updated: 2026-11-26
when_to_use: Running relationship checks on a server you operate instead of Auth0 FGA
---

## Summary

**OpenFGA** is the CNCF authorization engine Auth0 maintains. A store holds a model and relationship tuples, and Check answers whether a user has a relation on an object. You run the server and its database. There is no hosted dashboard and no usage bill from the project. Auth0 FGA (`auth0-fga`) is the same core as a hosted service, with a trial cap and an enterprise contract for production. Use OpenFGA when the checks must stay on infrastructure you operate. Use Cerbos (`cerbos`) when the rule is a policy over roles and attributes rather than stored relationships. Use Auth0 (`auth0`), Clerk (`clerk`), or Stytch (`stytch`) for sign-in. OpenFGA does not sign users in.

## Notes

- **Access.** Install from `links.get`. The configuration reference read on 2026-11-26 is for server v1.20.0. The default datastore is `memory`, so a restart drops every store and tuple. Durable engines are Postgres, MySQL, and SQLite. Run the project’s migrate command before the first start on those engines, and again when you upgrade the server. The default authentication method is `none`. Production should set `preshared` (callers send `Authorization: Bearer` with one of the configured keys) or `oidc`, and enable HTTP or gRPC TLS. Any of the preshared keys is accepted. The Playground defaults to off. It only runs when authentication is `none`, and the configuration page marks it deprecated. Clients need the API URL, store id, and, when you set a model id, that id. Omitting the model id uses the latest model in the store.
- **Checks.** `allowed` is true when the relationship holds and false when the relation exists in the model and no tuple matches. A relation the model does not define returns HTTP 400. BatchCheck defaults to 50 checks per request and rejects a larger body. Official SDKs split a longer list and fill in `correlation_id`. A raw request must send a unique `correlation_id` per check, 1 to 36 letters, digits, or dashes. The response omits the tuple keys. ListObjects and ListUsers stop at 1,000 results by default, or earlier on timeout, even when more objects match. Set the max to 0 only when the caller can accept every result. Check’s default concurrent-read limit is effectively unbounded (`4294967295` in the v1.20.0 table).
- **Cache.** Check query cache and iterator cache default to off. Turning the query cache on makes Check and ListObjects eventually consistent for up to the TTL, which defaults to 10 seconds, unless the request sets higher consistency. The cache controller that invalidates on tuple writes also defaults to off. Production guidance is to enable the cache for latency and to expect that staleness.
- **Caveats.** A server left on the defaults accepts unauthenticated writes and forgets them on restart. A list that looks complete may be the first 1,000 rows. Details: `openfga-default-auth-and-list-cap`.

## Sources

- [OpenFGA configuration](https://openfga.dev/docs/getting-started/setup-openfga/configuration) — accessed 2026-11-26
- [Configuring OpenFGA](https://openfga.dev/docs/getting-started/setup-openfga/configure-openfga) — accessed 2026-11-26
- [Setup OpenFGA with Docker](https://openfga.dev/docs/getting-started/setup-openfga/docker) — accessed 2026-11-26
- [Perform a Check](https://openfga.dev/docs/getting-started/perform-check) — accessed 2026-11-26
- [Running OpenFGA in production](https://openfga.dev/docs/best-practices/running-in-production) — accessed 2026-11-26
- [Auth0 FGA versus OpenFGA](https://docs.fga.dev/openfga-vs-auth0-fga) — accessed 2026-11-26
- [Introduction to OpenFGA](https://openfga.dev/docs/fga) — accessed 2026-11-26
- [OpenFGA](https://openfga.dev/) — accessed 2026-11-26
