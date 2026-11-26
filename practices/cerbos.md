---
id: cerbos
title: Cerbos — policy decisions you run beside the app
kind: tool
tags: [cerbos, authorization, policy, pdp]
status: active
updated: 2026-11-26
when_to_use: Deciding allow or deny from a versioned policy instead of relationship tuples
---

## Summary

**Cerbos PDP** is the Apache-2.0 policy engine you run next to an application. It answers allow or deny from YAML policies over a principal, a resource, and an action. It does not sign users in. A missing policy is a deny, and the check API trusts the principal in the request. **Cerbos Hub** is the optional control plane that ships policy bundles to those PDPs. Decisions still run in your environment. Hub is priced by monthly active principals. Use Cerbos when the rule is roles and attributes. Use OpenFGA (`openfga`) or Auth0 FGA (`auth0-fga`) when the rule is stored relationships. Use Auth0 (`auth0`), Clerk (`clerk`), or Stytch (`stytch`) for sign-in.

## Notes

- **Access.** Install from `links.get`. The binary page read on 2026-11-26 documents the 0.58.0 archives. With no config file, the server uses a disk driver pointed at a `policies` directory in the working directory, listens on HTTP `:3592` and gRPC `:3593` on every interface, and does not enable TLS. The check API takes the principal from the body. The quickstart calls it with no credential. CORS allows every origin until you disable it or list origins. Hub sign-in starts at `https://hub.cerbos.cloud/`. A later authorize URL on that host carries a one-time `state`, so do not store or reuse it.
- **Decisions.** Cerbos is deny-by-default. No policy for that resource kind and version, or no matching allow, is `EFFECT_DENY`. There is no separate “no opinion.” If one role both allows and denies the same action, deny wins for that role. If another of the principal’s roles allows and does not deny, the overall result is allow. A request that omits the policy version uses `default`. Each request defaults to 50 resources and 50 actions on each resource. `strictEvaluation` defaults to false, so a rule that errors while it is evaluated is ignored rather than denying that action. Audit logging defaults to off.
- **Admin API.** It is disabled until `server.adminAPI.enabled` is true. The full sample on the configuration index sets that flag to true. When the API is on and you set no credentials, the admin API page says the username and password are `cerbos` and `cerbosAdmin`. Change them and terminate TLS before anything but a local trial. The API can add or update policies when the storage driver supports writes.
- **Hub.** Proof of Concept is $0 for up to 100 monthly active principals and is described as a local trial: 1 workspace, 2 developers, 2 simultaneous PDPs, 5 policy builds a week, and 1 week of unified audit logs. Development starts at $25 a month, with a 3-month trial and the first 100 principals included: 3 workspaces, 5 developers, 10 PDPs, 100 builds a week, and 3 months of audit logs. Production starts at $933 a month for the first 5,000 principals and keeps a year of audit logs. The same pricing page lists the paid 1–100 band at $0.25 each, and its worked example for 100 principals is $25 a month. Yearly billing takes 15% off. A principal is any user or service checked at least once that calendar month, so an agent identity counts. Above 100,000 principals the price is a contract. Enterprise adds SSO and a self-hosted Hub.
- **Caveats.** A deny can mean the policy was never loaded. An open port accepts a check for any principal id. Details: `cerbos-default-deny-and-admin`.

## Sources

- [Install Cerbos from binary](https://docs.cerbos.dev/cerbos/latest/installation/binary.html) — accessed 2026-11-26
- [Cerbos configuration](https://docs.cerbos.dev/cerbos/latest/configuration/index.html) — accessed 2026-11-26
- [Cerbos server configuration](https://docs.cerbos.dev/cerbos/latest/configuration/server.html) — accessed 2026-11-26
- [How Cerbos evaluates requests](https://docs.cerbos.dev/cerbos/latest/policies/evaluation.html) — accessed 2026-11-26
- [Cerbos PDP Admin API](https://docs.cerbos.dev/cerbos/latest/api/admin_api.html) — accessed 2026-11-26
- [Cerbos pricing](https://www.cerbos.dev/pricing) — accessed 2026-11-26
- [Cerbos](https://www.cerbos.dev/) — accessed 2026-11-26
