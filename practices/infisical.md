---
id: infisical
title: Infisical — secrets vault and Agent Vault credential broker
kind: service
tags: [infisical, secrets, mcp, agents]
status: active
updated: 2026-11-25
when_to_use: Giving an agent API access without placing credentials in its environment, or administering Infisical secrets
---

## Summary

**Infisical** splits secrets storage from agent access. Secrets Management stores values for people, apps, and CI. Agent Vault is a proxy: the agent calls an API, MCP server, database, or SSH host, and the proxy attaches the real credential for the duration of a session. The official MCP server is a separate local process for administering the vault. By default it returns secret values and exposes every tool, including create, update, and delete. Use Agent Vault when a sandbox agent (E2B, Daytona, Modal, Kubernetes, or Docker, per Infisical’s guides) should reach services without holding keys. Use Doppler (`doppler`) when the agent should read a secrets manager directly and per-agent proxy calls should not be a separate meter. Use Unkey (`unkey`) when the job is issuing and verifying keys for an API you expose. Use Clerk (`clerk`) or WorkOS (`workos`) for end-user login.

## Notes

- **Access.** Sign up at `links.get`. Infisical Cloud has a US host (`app.infisical.com`) and an EU host (`eu.infisical.com`). The MCP server defaults to the US host; set `INFISICAL_HOST_URL` for EU or for a self-hosted instance. The core is MIT-licensed and can be self-hosted. Supported or dedicated self-hosting is an Enterprise secrets feature. Machine identities authenticate with Universal Auth (client id and client secret) and receive a short-lived bearer token. A personal access token carries whatever that user can do.
- **Secrets Management (pricing page, 2026-11-23).** An identity is any human or machine that authenticates. Free is $0: 5 identities, unlimited projects, 3 environments, 10 secret syncs, sharing, references, overrides, and 2FA. The Free card does not include versioning, rotation, or audit retention. Pro is $20 per identity per month billed annually, or $23 month-to-month, with a 14-day trial: access controls, SAML SSO, secret versioning, point-in-time recovery, honey tokens, and 30-day audit retention. The comparison grid lists 6 environments per project, 25 syncs, 3 honey tokens, and rotation for public databases only. Advanced is $40 annually or $46 monthly: dynamic secrets, gateways, custom roles, temporary access, SSO and MFA enforcement, SOC 2, and 90-day audit retention, with 12 environments per project, 50 syncs, and 10 honey tokens. Enterprise is custom (approval workflows, LDAP, SCIM, groups, SIEM streaming, external KMS, sub-organizations, 99.99% SLA). The pricing FAQ says the 5 free identities do not carry onto Pro: every identity in the organization is billed, with prorated adds and removals. The comparison grid prints a dash rather than a number for paid identity counts.
- **Agent Vault.** Billed per brokered request: a request where the proxy attaches a real credential. Pro includes 5,000 such requests a month, then $1 per 10,000. The Pro card lists unlimited projects, self-hosted proxies, brokering for HTTP APIs, CLIs, and MCP servers, time-limited scoped sessions, method and path rules, MCP tool filtering, on-behalf-of access, shared variables, skills, audit logs, and 30-day session logs. Enterprise adds custom log retention, your own S3 bucket for session logs, SIEM streaming, and SCIM. A project does not share credentials with another project. A session works only through a proxy in the same project. Organization admins are not members of every project; they join from the All Projects tab, and that join is audited.
- **MCP.** Auth is Universal Auth by default, or `INFISICAL_AUTH_METHOD=access-token` with `INFISICAL_TOKEN`. The README for the current server says that, as in earlier versions, every tool is exposed and secret values are returned unless you set `INFISICAL_MASK_SECRET_VALUES=true` and an `INFISICAL_ENABLED_TOOLS` allowlist. Masking on Infisical Cloud, or self-hosted v0.116.0 or later, asks the API not to send values. The server enforces no permissions of its own. An access token in `INFISICAL_TOKEN` is not renewed. Universal Auth tokens are.
- **Caveats.** A default MCP setup hands the model secret values and write tools. Details: `infisical-mcp-returns-secrets`.

## Sources

- [Agent Vault overview](https://infisical.com/docs/documentation/platform/agent-vault/overview) — accessed 2026-11-23
- [Why Agent Vault](https://infisical.com/docs/documentation/getting-started/choose-a-product/agent-vault) — accessed 2026-11-23
- [Agent Vault projects](https://infisical.com/docs/documentation/platform/agent-vault/projects) — accessed 2026-11-23
- [Infisical pricing](https://infisical.com/pricing) — accessed 2026-11-23
- [Infisical MCP server README](https://github.com/Infisical/infisical-mcp-server/blob/main/README.md) — accessed 2026-11-23
- [Infisical sign-up](https://app.infisical.com/signup) — accessed 2026-11-23
