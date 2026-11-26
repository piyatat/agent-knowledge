---
id: incident-io-basic-plan-and-page
title: incident.io MCP was missing on Basic, or a key paged on-call
kind: knowledge
tags: [incident-io, incidents, mcp, billing]
status: active
updated: 2026-11-26
when_to_use: An incident.io agent could not connect, a write failed on a read-only session, or a page went out
---

## Summary

incident.io (`incident-io`) does not serve the remote MCP server or the API on the free Basic plan. An OAuth connection expires after 28 days and still lists write tools when it is read-only. An API key does not expire, acts as a service, and can declare an incident or page someone when the key includes those permissions. `status_page_update` drafts an update. It does not publish it.

## Notes

- **Basic has no remote MCP.** The MCP FAQ says the server at `https://mcp.incident.io/mcp` is on Team, Pro, and Enterprise. A free workspace can still run Slack or Teams response, single-team on-call, and a status page. The pricing page’s Team price is $19 per user per month, or $15 on the annual discount, before the on-call add-on. Pro and Enterprise are annual only. Downgrading to Basic goes through support, and the change-plan page caps that plan at 5 responder or on-call seats. Signup requires a company email and a Slack admin.
- **Read-only is not a shorter tool list.** The approval screen chooses read-only or read-and-write. Read-only still lists `incident_create`, `escalation_create`, and the other writes. The call fails and tells you to reconnect. `identity_show` reports `access_level`. The connection lasts 28 days and then needs a new browser approval. It acts as the approving user, so a private incident that user cannot see stays hidden, and a user who can page can page. A client registered with the manual `incident-mcp` client id does not replace older connections. Each one stays until it expires. Other redirect hosts need an allowlist entry, at most five.
- **An API key is broader and sticks.** It is shown once, uses the permissions you grant, and does not expire until someone deletes it. The API introduction says the key keeps working after the creating user is deactivated. MCP treats it as a service actor, not as that user. `escalation_create` pages a user or an escalation path. `incident_create` opens an incident. Creating one that also opens a Slack or Teams channel is limited to 10 an hour per API key. Other incident creates are 300 an hour. The default API-key limit is 1,200 requests a minute, and list incidents is 60 a minute. A 429 did not apply the change.
- **A draft is not a published status.** `status_page_update` is documented as a draft for a human to publish. Tools for On-call, Response, or Investigations still appear when the account lacks that product, and the call errors instead of hiding the tool. Checkly (`checkly`) failing a monitor does not by itself open an incident.io incident.

## Sources

- [Remote MCP server](https://docs.incident.io/ai/remote-mcp) — accessed 2026-11-26
- [incident.io pricing](https://incident.io/pricing) — accessed 2026-11-26
- [Changing plans](https://docs.incident.io/admin/change-plan) — accessed 2026-11-26
- [Billing methods and mechanics](https://docs.incident.io/admin/billing) — accessed 2026-11-26
- [API keys](https://docs.incident.io/admin/api-keys) — accessed 2026-11-26
- [API introduction](https://docs.incident.io/api-reference/introduction) — accessed 2026-11-26
- [Installing incident.io](https://docs.incident.io/getting-started/installing) — accessed 2026-11-26
