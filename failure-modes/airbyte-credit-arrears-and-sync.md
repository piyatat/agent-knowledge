---
id: airbyte-credit-arrears-and-sync
title: Airbyte kept syncing with no credits left, or MCP started a billed run
kind: knowledge
tags: [airbyte, etl, billing, mcp]
status: active
updated: 2026-11-27
when_to_use: An Airbyte sync kept running after credits hit zero, a manual sync was refused, or an agent started a full refresh
---

## Summary

Airbyte Cloud (`airbyte`) does not stop a sync when included credits run out. It keeps the schedule and bills the overage later, and it charges the card immediately after $10,000 of credit usage in the period. The default MCP URL can start that sync. The read-only URL cannot. A database credit is measured on serialized records, so it can exceed the size the warehouse reports. A full refresh bills every row.

## Notes

- **Zero credits is not a pause.** On Standard and Plus, extra credits are billed in arrears at the end of the month, including syncs that fail. In-progress and scheduled syncs continue. Crossing $10,000 of credit usage in the period charges the saved payment method and issues an invoice. Billing alerts are email only, can take up to a day, and are absent until a card is on file. They are not available on Pro or Enterprise Flex. The trial is 14 days or 400 credits, whichever comes first, and the clock starts after the first successful sync. The sign-up page used to say 30 days. The 2026-10-06 notes say it now says 14. Continuing past the trial requires a card.
- **The default MCP server can spend credits.** `https://mcp.airbyte.com/mcp` includes `run_connection_sync`, `create_connection`, and `update_connection`. `https://mcp.airbyte.com/mcp?read-only=true` cannot run or cancel a sync and cannot create or delete. Setting `X-MCP-Allow-Pipeline-Changes` to `0` hides create, update, rename, and delete, and it still leaves run and cancel. A delete needs the name to contain `delete-me` or `deleteme` unless `X-MCP-Disable-Delete-Guard` is on. That check is on the delete. The advanced configuration page says the agent should rename the resource to add the marker only after the person explicitly agrees. An application client id and secret act as the user who created the application. A bearer token lasts 15 minutes. An idle OAuth sign-in can expire after 14 days. The server uses the default workspace until the agent switches.
- **A sync can cost more than the table size, and a manual run can wait.** Databases and files are 4 credits per GB of serialized records. APIs are 6 credits per million rows, and a full refresh counts every row. Since 2026-11-06, Standard refuses a manual sync until an hour after the last successful sync started, and Plus until 15 minutes, with a five-minute grace. A failed or cancelled sync does not restart that wait. Direct reads are a separate meter: 100,000 per organization per month, read-only, and off until an admin enables the context layer. They use the connector’s stored credentials, not the Airbyte user’s own login to the source, so the agent can see rows that person cannot see there. A secret kept in an external secrets manager makes those reads fail.

## Sources

- [Manage credits](https://docs.airbyte.com/platform/cloud/managing-airbyte-cloud/manage-credits) — accessed 2026-11-27
- [Airbyte pricing](https://airbyte.com/pricing) — accessed 2026-11-27
- [Airbyte Cloud release notes](https://docs.airbyte.com/release_notes/cloud) — accessed 2026-11-27
- [Install the Airbyte MCP](https://docs.airbyte.com/platform/airbyte-mcp/install) — accessed 2026-11-27
- [Airbyte MCP tools](https://docs.airbyte.com/platform/airbyte-mcp/tools) — accessed 2026-11-27
- [Advanced Airbyte MCP configuration](https://docs.airbyte.com/platform/airbyte-mcp/advanced-configuration) — accessed 2026-11-27
- [Airbyte MCP](https://docs.airbyte.com/platform/airbyte-mcp) — accessed 2026-11-27
