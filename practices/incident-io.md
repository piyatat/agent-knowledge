---
id: incident-io
title: incident.io — incidents, on-call, and a hosted MCP server
kind: service
tags: [incident-io, incidents, on-call, mcp]
status: active
updated: 2026-11-27
when_to_use: Declaring an incident or paging on-call from an agent, or reading what is already open
---

## Summary

**incident.io** is hosted incident response, on-call, and status pages for Slack or Microsoft Teams. Basic is free and does not include the remote MCP server or the API. Team, Pro, and Enterprise do. The MCP server is `https://mcp.incident.io/mcp`. OAuth acts as the person who approves it and lasts 28 days. An API key acts as a service, does not expire until you delete it, and can page someone when its scopes allow that. Use Checkly (`checkly`) to notice that a flow failed. Use Sentry (`sentry`) for exceptions the app already threw. Use PagerDuty (`pagerduty`) when the agent should read or change that PagerDuty account. Use Cursor’s PagerDuty trigger (`cursor-pagerduty`) when a Cursor Automation should start from those incident events.

## Notes

- **Access.** Sign up from `links.get`. The installing guide says signup is Sign in with Slack, needs a Slack admin, and rejects a non-company email. On 2026-11-26, `https://app.incident.io/signup` also stayed on that URL with HTTP 200 and no one-time token. Enable the remote server under Settings → MCP. Built-in clients such as Claude, ChatGPT, and Cursor are trusted. Any other redirect host must be added under Allowed redirect domains, up to five, or authorization fails.
- **Plans.** The pricing page read on 2026-11-26 lists Basic as free: Slack or Teams, single-team on-call, a status page, and essential automation. Team is $19 per user per month, or $15 with the annual discount, and on-call is an extra $10 per user per month. Pro is $25 per user per month, and on-call is an extra $20. Enterprise is a custom proposal with a 99.99% uptime SLA. On-call by itself is $20 per user per month. The billing page charges Responder and On-call seats. Team can be monthly or annual. Pro and Enterprise are annual only. Moving back to Basic is a support request, and that page caps Basic at 5 responder or on-call seats. The remote MCP FAQ says the server is on Team, Pro, and Enterprise, not Basic. The pricing comparison also lists API and webhooks as a platform row beside MCP.
- **MCP auth.** Interactive OAuth can be read-only or read-and-write. Read-only still lists tools that change data, and the call fails with an error that the connection is read-only. `identity_show` returns `read_only` or `read_write`. The connection acts only as that user, including private incidents that user can see, and it lasts 28 days. Pick the organization on the approval screen when you belong to more than one. An API key is a Bearer token, shown once, and authenticates as a service actor. You choose permissions you already hold. The key does not expire until deleted, and the API introduction says it stays valid if the creating user is deactivated.
- **What a write can do.** The tool list includes `incident_create`, `incident_update`, `incident_merge`, `alert_resolve`, `escalation_create` (page a user or an escalation path), schedule overrides, and maintenance windows. `status_page_update` drafts a status-page update for a human to publish. Tools for a product the account does not have still appear, and the call returns an error naming what is missing. `ask` and `ask_incident` call incident.io’s own agent.
- **API limits.** The API reference, for requests made with an API key, defaults to 1,200 requests a minute per key. List incidents is 60 a minute. Creating incidents that open a Slack or Teams channel is 10 an hour per key, and 300 an hour otherwise. A 429 means slow down. `X-RateLimit-Remaining` describes the tightest limit that applies, and some of those limits are shared across every key on the account. An MCP client that sends that key should plan for the same caps.
- **Caveats.** A Basic workspace cannot connect the remote server. A broad API key can page on-call. Details: `incident-io-basic-plan-and-page`.

## Sources

- [incident.io pricing](https://incident.io/pricing) — accessed 2026-11-26
- [Remote MCP server](https://docs.incident.io/ai/remote-mcp) — accessed 2026-11-26
- [Installing incident.io](https://docs.incident.io/getting-started/installing) — accessed 2026-11-26
- [Billing methods and mechanics](https://docs.incident.io/admin/billing) — accessed 2026-11-26
- [Changing plans](https://docs.incident.io/admin/change-plan) — accessed 2026-11-26
- [API keys](https://docs.incident.io/admin/api-keys) — accessed 2026-11-26
- [API introduction](https://docs.incident.io/api-reference/introduction) — accessed 2026-11-26
- [Free trial](https://incident.io/free-trial) — accessed 2026-11-26
- [incident.io](https://incident.io/) — accessed 2026-11-26
