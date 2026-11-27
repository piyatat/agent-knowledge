---
id: pagerduty-free-plan-and-default-writes
title: PagerDuty MCP was missing on Free, or the default tools changed an incident
kind: knowledge
tags: [pagerduty, incidents, mcp, billing]
status: active
updated: 2026-11-27
when_to_use: A PagerDuty agent could not connect on Free, or a default connection acknowledged an incident
---

## Summary

PagerDuty (`pagerduty`) does not include MCP Integration on the free Incident Management plan. The hosted server’s default tool group is `full-tools`, which can create, acknowledge, and resolve incidents. Read-only is a URL parameter you opt into. The account region is chosen at signup and does not change later.

## Notes

- **Free has no MCP row.** The pricing comparison marks MCP Integration “Not included” on Free and “Included” on Professional and on Starter, Essential, Plus, and Ultimate. Free is 5 users, one on-call schedule, one escalation policy, and 100 SMS or phone notifications a month. Professional is $21 per user per month on the annual price, or $25 month-to-month. A 14-day trial does not require a card. The signup form says the US or EU region cannot be changed and data cannot be migrated later. The EU MCP host is `https://mcp.eu.pagerduty.com/mcp`. The US host will not see an EU account.
- **The default list writes.** With no `tool_groups` parameter the server exposes `full-tools`. `manage_incidents` includes create, update, add responders, and start a workflow. `manage_schedules` includes delete. `manage_status_pages` can publish a post. Pass `?tool_groups=read-only-tools` or `incident-discovery` when the agent should only look. `ai-agents` is not part of `full-tools`. An account without Advance, the Reliability Platform, or AI Actions will not see Paige even if you ask for that group. An unknown `tool_groups` value, or a `skip_tools` name that does not match exactly, fails the connection.
- **Auth is not a shared secret from PagerDuty.** Dynamic client registration is not supported. CIMD clients need an admin to install the app once. Cursor needs your own OAuth client id and secret. CIMD apps request every scope. A registered app can request fewer. The signed-in user’s permissions are the permissions the agent has. The archived local MCP server is not the supported path.
- **429 is per user, and REST is a different cap.** MCP fair use applies across every client that user connected. The response is HTTP 429 with `Retry-After`. The MCP troubleshooting table tells you to wait the header, and its example is 60 seconds. A REST account key, a user’s API keys taken together, and an app OAuth token are each 960 requests a minute on the REST API. Do not treat a REST 429 as proof the MCP cap is 960.

## Sources

- [Plans and pricing](https://www.pagerduty.com/pricing/) — accessed 2026-11-27
- [PagerDuty MCP server](https://docs.pagerduty.com/ai-automation/advance/pagerduty-mcp-server) — accessed 2026-11-27
- [REST API rate limits](https://docs.pagerduty.com/developer/rest-api-rate-limits) — accessed 2026-11-27
- [Sign up](https://www.pagerduty.com/sign-up/) — accessed 2026-11-27
