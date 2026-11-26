---
id: openfga-default-auth-and-list-cap
title: OpenFGA accepted an anonymous write, or a list stopped at 1000
kind: knowledge
tags: [openfga, authorization, auth, consistency]
status: active
updated: 2026-11-26
when_to_use: An OpenFGA check returned 400, a list looked complete at 1000 rows, or a restart dropped the tuples
---

## Summary

OpenFGA (`openfga`) ships with authentication off and an in-memory database. A check for a relation the model does not define is HTTP 400, and ListObjects can return 1,000 rows and stop while more rows match. Enabling the Check cache makes a later read stale for the TTL.

## Notes

- **Defaults.** `OPENFGA_AUTHN_METHOD` defaults to `none`, so any caller who can reach the port can read and write tuples. Production should use preshared keys or OIDC, plus TLS. Every configured preshared key is a full credential. The Playground only starts when authentication is `none`, defaults to disabled, and is marked deprecated in the v1.20.0 configuration reference. `OPENFGA_DATASTORE_ENGINE` defaults to `memory`. Restarting that process drops stores, models, and tuples. Postgres, MySQL, and SQLite keep them. Those engines need migrate before the first `run` and again after a server upgrade. Skipping migrate leaves the schema behind the binary. Auth0 FGA (`auth0-fga`) runs this engine for you, with its own trial rate limits. It does not inherit a server you left on `none`.
- **Answers that look finished.** A defined relation with no matching tuple returns `allowed: false`. An undefined relation returns HTTP 400. Treat 400 as a model bug, not as a deny you can cache. BatchCheck rejects more than `OPENFGA_MAX_CHECKS_PER_BATCH_CHECK` checks, default 50. SDKs split larger batches. A raw call with a repeated or overlong `correlation_id` fails, and the response does not echo the tuple, so the id is the only way to match results. ListObjects and ListUsers return at most 1,000 results unless you change the max. They also stop when the request times out. A caller that pages by assuming the body is exhaustive will miss the rest. The v1.20.0 default for concurrent reads inside one Check is 4294967295. One wide Check can occupy the database. The production guide says to lower that limit, and the ListObjects and ListUsers limits, when one query slows the others.
- **Stale allows.** Check query cache and iterator cache default to off. With the query cache on, Check and ListObjects reuse a result until the TTL, default 10 seconds, and the docs call those APIs eventually consistent. A request that sets higher consistency skips the cache. The write-driven cache controller defaults to off, so a tuple written during the TTL does not clear the cached allow or deny on its own.

## Sources

- [OpenFGA configuration](https://openfga.dev/docs/getting-started/setup-openfga/configuration) — accessed 2026-11-26
- [Configuring OpenFGA](https://openfga.dev/docs/getting-started/setup-openfga/configure-openfga) — accessed 2026-11-26
- [Perform a Check](https://openfga.dev/docs/getting-started/perform-check) — accessed 2026-11-26
- [Running OpenFGA in production](https://openfga.dev/docs/best-practices/running-in-production) — accessed 2026-11-26
- [Auth0 FGA versus OpenFGA](https://docs.fga.dev/openfga-vs-auth0-fga) — accessed 2026-11-26
