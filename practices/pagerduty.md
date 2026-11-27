---
id: pagerduty
title: PagerDuty — incidents and on-call, with a hosted MCP server
kind: service
tags: [pagerduty, incidents, on-call, mcp]
status: active
updated: 2026-11-27
when_to_use: Reading who is on call or changing a PagerDuty incident from an agent, instead of only receiving a Cursor trigger
---

## Summary

**PagerDuty** is hosted incident response and on-call. The hosted MCP server lets an agent list incidents, see who is on call, and, on the default tool list, acknowledge, resolve, or create incidents. MCP is not on the free Incident Management plan. It is on Professional and on every PD Reliability Platform plan. The US server is `https://mcp.pagerduty.com/mcp` and the EU server is `https://mcp.eu.pagerduty.com/mcp`. Use PagerDuty when the agent should act in that account. Use incident.io (`incident-io`) when the response workspace is incident.io. Use Cursor’s PagerDuty trigger (`cursor-pagerduty`) when a Cloud Agent should start from an incident event.

## Notes

- **Access.** Sign up from `links.get`. On 2026-11-27 that page stayed on itself with HTTP 200 and offered a 14-day trial with no card. The form asks for a service region, US or EU, and says you cannot change it or migrate data later. The hosted server speaks MCP 2026-07-28. PagerDuty does not support dynamic client registration. CIMD clients can be installed once by an admin. Cursor is not a CIMD client, so it needs an OAuth app you register, with the client secret stored by you. The local `pagerduty-mcp-server` repository is archived. New work is the hosted server. The agent acts as the user who signs in.
- **Plans.** The pricing page read on 2026-11-27 lists Incident Management Free at $0 for 5 users, one schedule, one escalation policy, and 100 SMS or phone notifications a month. The comparison marks MCP Integration as not included on Free and included on Professional. Professional is $25 per user per month, or $21 on the annual price. AIOps, PagerDuty Advance, runbook automation, status pages, and live call routing are add-ons on that plan. PD Reliability Platform is a platform fee: Starter $2,800 a year, Essential $12,000, Plus $48,000, Ultimate custom. Those tiers include MCP. Starter’s included capacity on that page is 5,000 Signal Intelligence events and 1,000 AI Actions.
- **What the default connection can do.** Omitting `tool_groups` selects `full-tools`. That catalog includes `manage_incidents` (create, update, add a note, add responders, start a workflow), `manage_schedules` (including deletes), and `manage_status_pages` (create a post and a post update). `read-only-tools` and `incident-discovery` are opt-in query parameters. `ai-agents` (Paige and the other agents) is not inside `full-tools`. It needs PagerDuty Advance, the Reliability Platform, or AI Actions, and scoped OAuth needs `pd_advance.write`. A name in `skip_tools` that is not in the catalog fails the connection instead of leaving the tool in place. Tools the plan does not include are left off the list.
- **Limits.** MCP usage is a soft fair-use cap per user, shared across that user’s clients. Over the cap the server returns HTTP 429 and a `Retry-After` header. The troubleshooting table’s example wait is 60 seconds. The REST API is a different meter: 960 requests a minute for an account key, for a user across that user’s keys, or for an app’s OAuth token. REST keys are shown once. A read-only REST key is a checkbox at creation.
- **Caveats.** A Free account cannot connect the hosted server. The default tool list can acknowledge or open an incident. Details: `pagerduty-free-plan-and-default-writes`.

## Sources

- [Plans and pricing](https://www.pagerduty.com/pricing/) — accessed 2026-11-27
- [PagerDuty MCP server](https://docs.pagerduty.com/ai-automation/advance/pagerduty-mcp-server) — accessed 2026-11-27
- [REST API rate limits](https://docs.pagerduty.com/developer/rest-api-rate-limits) — accessed 2026-11-27
- [Sign up](https://www.pagerduty.com/sign-up/) — accessed 2026-11-27
- [PagerDuty](https://www.pagerduty.com/) — accessed 2026-11-27
