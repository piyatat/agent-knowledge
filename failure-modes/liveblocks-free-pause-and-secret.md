---
id: liveblocks-free-pause-and-secret
title: Liveblocks paused a free feature, or an MCP secret wrote production
kind: knowledge
tags: [liveblocks, realtime, billing, mcp]
status: active
updated: 2026-11-25
when_to_use: A Liveblocks feature paused, a new room was refused, or an MCP secret changed production data
---

## Summary

Liveblocks (`liveblocks`) Free pauses the feature that crossed a hard cap until the next calendar month. Pro and Team do not pause metered use. They bill it. The MCP server uses the project secret and can delete rooms, so a production secret in an agent is a write credential. The pricing FAQ also disagrees with itself about whether a commercial app may stay on Free.

## Notes

- **What pauses.** Free does not use the credit bundle. Each meter has an allowance: 3,000 collaboration minutes, 200 comments, 3 million storage updates, 1 GB of realtime data, 200 custom notifications, and 512 MB of files. The plans doc says the affected feature pauses until the start of the next calendar month, or until an upgrade. Pro ($30 of credits) and Team (from $600 of credits) keep serving metered use and bill the published rates. Credits reset each cycle and do not roll over. Stored realtime data and files accumulate. They are not a monthly bucket. A solo connection is $0. Two people or agents in a room each count, so 5 minutes together is 10 billed minutes. Background tabs count as connected until the client sets a background timeout. The minute meter pauses after 10 seconds with no activity in the room.
- **Rooms and fair use.** Hitting the monthly active room cap (500 on Free, 1,000 on Pro, 100,000 on Team) blocks new rooms until the first of the next month. Existing rooms still open. A connection, comment, document edit, or attachment makes a room active. A document left over from last month does not, until someone uses it. Automated tests that connect count. Connection caps still apply on paid plans: 10 per room on Free and Pro, 50 on Team. The try-it FAQ says a commercial app can ship on Free while the badge stays. The fair-use section says Free is non-commercial, including internal company use and every environment of a commercial product. Plan against the fair-use section. Sharing one `userId` across people, and opening extra free teams to stay under a cap, are listed as never fair use. The create-account page still says a new account is a Starter team that cannot invite anyone. The pricing page lists 3 Free seats. Do not treat those as the same rule.
- **Secret key.** REST and both MCP setups authenticate with the project secret. The public key on a secret route returns `WRONG_KEY_USED`. The docs page says not to put a production secret in the agent. The README’s hosted server (`https://mcp.liveblocks.io/mcp`) and the local server can both create and delete rooms, threads, comments, and notifications. A Production secret is shown once. Rolling it is the recovery if it was pasted into a client. The project environment cannot be switched later, so a Development project is the one to attach while an agent is experimenting.

## Sources

- [Liveblocks pricing](https://liveblocks.io/pricing) — accessed 2026-11-25
- [Liveblocks plans](https://liveblocks.io/docs/pricing/plans) — accessed 2026-11-25
- [Liveblocks pricing FAQ](https://liveblocks.io/docs/pricing/faqs) — accessed 2026-11-25
- [Liveblocks MCP server](https://liveblocks.io/docs/tools/mcp-server) — accessed 2026-11-25
- [liveblocks-mcp-server README](https://github.com/liveblocks/liveblocks-mcp-server/blob/main/README.md) — accessed 2026-11-25
- [Create a Liveblocks account](https://liveblocks.io/docs/platform/account-management/create-an-account) — accessed 2026-11-25
- [Liveblocks projects](https://liveblocks.io/docs/platform/projects) — accessed 2026-11-25
- [Liveblocks REST API](https://liveblocks.io/docs/api-reference/rest-api-endpoints) — accessed 2026-11-25
