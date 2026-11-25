---
id: doppler
title: Doppler — secrets manager with a local experimental MCP server
kind: service
tags: [doppler, secrets, mcp, agents]
status: active
updated: 2026-11-25
when_to_use: Storing app secrets for people and agents, or letting an agent read and edit a Doppler config
---

## Summary

**Doppler** is a hosted secrets manager for projects, configs, and syncs into infrastructure. The pricing page includes 3 users on Developer and charges $8 a month for each additional user; the platform-limits table caps that same plan at 25 users. Agents and other non-human identities are not an extra seat. The official MCP server is experimental, runs locally, and can read secret values. Its browser login stores a CLI token that can read and write the whole account. Use Doppler when the agent should work in Doppler itself. Use Infisical (`infisical`) Agent Vault when the agent should call an API without the credential entering the chat.

## Notes

- **Access.** Sign up at `links.get`. That URL stayed in place on 2026-11-25 (the app shell is titled Doppler; the marketing site links it as register). The API takes `Authorization: Bearer`. Six token types are documented. A CLI token and a personal token can read and write every resource on the account. A service token is one config, read-only unless write was selected when it was generated, and the value is shown once. Service account tokens are a separate workplace identity and are absent on Developer (the limits table prints a dash). SCIM and audit tokens are narrower workplace tokens. The service-token guide says not to put a CLI or personal token in a live environment.
- **Plans (pricing page and platform limits, 2026-11-25).** Developer is free for 3 users, then $8 per additional user: service tokens, 3-day activity logs, 5 config syncs, API and webhooks. Team is free for 14 days, then $21 per user: change requests, SAML SSO, scoped roles, 90-day logs, rotation, service accounts, config inheritance, trusted IPs, and 100 syncs. Enterprise adds on-prem, SCIM, dynamic secrets, log forwarding, and a 99.95% SLO. The limits table, updated more recently than the API reference, allows 25 users, 10 projects, and 4 environments per project on Developer, and 500 users on Team. Treat 3 as the included seats and 25 as the documented Developer ceiling. Dashboard config syncs count toward the sync cap; CLI fetches and Kubernetes operator syncs do not. Rotation, trusted IPs, inheritance, and service accounts are Team or above.
- **Agents.** The MCP package is experimental and meant for development and evaluation. Login stores either a new CLI token or a token you paste in the operating-system keyring. Tools can list projects, read secret values, download a config, create and update secrets, and read activity. `--read-only` hides write tools and does not stop a write through some other path. `--project` and `--config` are not an access-control guarantee. The API still enforces the token. A non-interactive process can set `DOPPLER_TOKEN` to a service token or a service-account token instead of using the keyring login.
- **Visibility and rate limits.** Masked and unmasked secrets are readable by any token type. A restricted secret is never shown in the dashboard again and is returned only to a non-user token such as a service token. A personal or CLI token gets HTTP 403 from a secrets download. Someone who can mint a service token can still reveal a restricted value. Developer allows 240 reads, 120 secret reads, and 60 writes per minute; Team doubles those. Platform limits say the figures are per access token and cover the API, the CLI, and the operator. The API reference also describes a per-IP limit that usually matches and can diverge when authorization fails. Over the limit is HTTP 429 with `retry-after`. A config holds 1,200 secrets and 500 KiB on every plan.
- **Caveats.** A default MCP login can read secrets and change any project. Details: `doppler-mcp-cli-token`.

## Sources

- [Doppler pricing](https://www.doppler.com/pricing) — accessed 2026-11-25
- [Platform limits](https://docs.doppler.com/docs/platform-limits) — accessed 2026-11-25
- [API reference](https://docs.doppler.com/reference/api) — accessed 2026-11-25
- [Service tokens](https://docs.doppler.com/docs/service-tokens) — accessed 2026-11-25
- [Secret visibility](https://docs.doppler.com/docs/secret-visibility) — accessed 2026-11-25
- [MCP server](https://docs.doppler.com/docs/mcp) — accessed 2026-11-25
- [Doppler docs](https://docs.doppler.com/docs/start) — accessed 2026-11-25
- [Doppler register](https://dashboard.doppler.com/register) — accessed 2026-11-25
- [Doppler](https://www.doppler.com/) — accessed 2026-11-25
