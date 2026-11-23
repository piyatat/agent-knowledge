---
id: infisical-mcp-returns-secrets
title: Infisical MCP returned secret values, or an admin could not open Agent Vault
kind: knowledge
tags: [infisical, mcp, secrets, agents]
status: active
updated: 2026-11-23
when_to_use: An Infisical MCP tool returned secret values, a write tool was exposed, or an organization admin could not open an Agent Vault project
---

## Summary

The official Infisical MCP server (`infisical`) defaults to exposing every tool and returning secret values. Agent Vault is a different product: the proxy attaches credentials so the agent process does not hold them. An organization admin is not a member of every Agent Vault project, and a session only works with a proxy in that same project.

## Notes

- **Default MCP is wide open.** The README states that both restrictions default to the behaviour of earlier versions so existing setups keep working. Omit `INFISICAL_ENABLED_TOOLS`, or set it to `all`, and the server exposes create, update, delete, invite, and read tools. `INFISICAL_MASK_SECRET_VALUES` defaults to `false`, so tool responses include secret values. Set the mask to `true` and set the allowlist to the read-only names (`list-projects`, `list-secrets`, `get-secret`, `list-folders`) when the model should not change anything or read values. An unknown tool name, or an empty allowlist, fails at startup. Hidden tools are omitted from `tools/list` and refused if called.
- **Masking still depends on the server version.** On Infisical Cloud, and on self-hosted v0.116.0 or later, masked `list-secrets` and `get-secret` ask Infisical not to send values, so those calls need only the Describe Secret permission. The README says an older self-hosted instance can ignore that parameter and still return values; the MCP process then masks them before the model sees the response, which means the value did reach the MCP process. Grant Read Value only when masking is off. The server applies no extra permission of its own: it can do whatever its identity can do. Prefer a machine identity scoped to one project over a personal access token. `INFISICAL_TOKEN` is not renewed when it expires. Universal Auth is renewed until Infisical refuses renewal.
- **Host.** The default `INFISICAL_HOST_URL` is `https://app.infisical.com`. An EU project or a self-hosted instance needs that variable set. A token from the other host will not open the project.
- **Agent Vault is not the MCP.** Routing an agent through Agent Vault keeps the credential on the proxy. Pointing the same agent at `@infisical/mcp` does the opposite unless masking and the allowlist are set. Brokered requests (the proxy attached a real credential) include 5,000 a month on Agent Vault Pro, then $1 per 10,000. Organization admins do not automatically see every project. Join as Admin is a separate action and is written to the audit log. Credentials are stored per project; a second project needs its own copy. A session only works through a proxy in the same project.
- **Secrets plan billing.** Free includes 5 identities. The pricing FAQ says those 5 do not remain free after an upgrade to Pro: every identity in the organization is billed, prorated when added or removed mid-cycle.

## Sources

- [Infisical MCP server README](https://github.com/Infisical/infisical-mcp-server/blob/main/README.md) — accessed 2026-11-23
- [Agent Vault projects](https://infisical.com/docs/documentation/platform/agent-vault/projects) — accessed 2026-11-23
- [Why Agent Vault](https://infisical.com/docs/documentation/getting-started/choose-a-product/agent-vault) — accessed 2026-11-23
- [Infisical pricing](https://infisical.com/pricing) — accessed 2026-11-23
