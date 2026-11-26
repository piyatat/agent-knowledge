---
id: cerbos-default-deny-and-admin
title: Cerbos denied a missing policy, or the admin password was still the default
kind: knowledge
tags: [cerbos, authorization, auth, policy]
status: active
updated: 2026-11-26
when_to_use: A Cerbos check denied an action that should be allowed, or a PDP was reachable without TLS
---

## Summary

Cerbos (`cerbos`) returns `EFFECT_DENY` when no policy matches, which is the same answer as a real deny. The check API does not authenticate the caller, and it uses the principal in the request. The admin API is off until you enable it. Once enabled with no credentials of your own, the documented username and password are `cerbos` and `cerbosAdmin`.

## Notes

- **Deny is not a transport error.** No policy for the resource kind and version, a request version other than the file’s version, or a rule that does not match all return `EFFECT_DENY`. The evaluation page says there is no “no opinion.” Retrying the check will not load the policy. A request that omits the version uses `default`. More than 50 resources, or more than 50 actions on one resource, exceeds the default batch limit on the server page.
- **The caller picks the principal.** The quickstart posts a check with no credential. The server listens on every interface on ports 3592 and 3593 unless you bind a specific address, and CORS allows every origin until you change it. Anyone who can reach the port can ask whether any principal id is allowed. Put the PDP on a private network. Cerbos does not replace Auth0 (`auth0`) or Clerk (`clerk`).
- **A broken rule can be skipped.** `strictEvaluation` defaults to false. The configuration reference says that, when it is true, an error during evaluation denies the action instead of ignoring the erroring rule. Left at the default, that rule does not contribute. A condition you expected to deny can fail to match, and another allow can still win.
- **Admin API.** The server configuration page says it is disabled by default. The full sample on the configuration index sets `server.adminAPI.enabled` to true. Copying that sample turns the API on. With no `adminCredentials`, the admin API page documents the username `cerbos` and the password `cerbosAdmin`, and it says to change both and enable TLS. The API can update policies when storage supports writes. Audit logs stay off until you enable them, so a default process does not record who was allowed.
- **Hub is a separate meter.** Proof of Concept is the $0 local trial, capped at 100 monthly active principals, 5 policy builds a week, and 1 week of audit logs. It is not the Production plan. Service accounts and agents count as principals. OpenFGA (`openfga`) has the opposite default on authentication: its check API is open because auth is `none`, and it stores tuples rather than evaluating a policy file.

## Sources

- [How Cerbos evaluates requests](https://docs.cerbos.dev/cerbos/latest/policies/evaluation.html) — accessed 2026-11-26
- [Cerbos server configuration](https://docs.cerbos.dev/cerbos/latest/configuration/server.html) — accessed 2026-11-26
- [Cerbos configuration](https://docs.cerbos.dev/cerbos/latest/configuration/index.html) — accessed 2026-11-26
- [Cerbos PDP Admin API](https://docs.cerbos.dev/cerbos/latest/api/admin_api.html) — accessed 2026-11-26
- [Cerbos quickstart](https://docs.cerbos.dev/cerbos/latest/quickstart.html) — accessed 2026-11-26
- [Cerbos pricing](https://www.cerbos.dev/pricing) — accessed 2026-11-26
