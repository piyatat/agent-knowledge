---
id: render-free-expiry-and-mcp-env
title: A Render free instance stops or expires, or MCP rewrites its environment
kind: knowledge
tags: [render, hosting, billing, mcp]
status: active
updated: 2026-11-23
when_to_use: A Render URL sat on a loading page, a free database vanished, or an agent deploy replaced environment variables
---

## Summary

A Render (`render`) Free web service spins down after 15 minutes without inbound traffic and can be suspended for the rest of the month after 750 instance hours. A Free Postgres database expires 30 days after creation and is deleted after a further 14 days. The MCP server can replace every environment variable and trigger a deploy. Its SQL tool is read-only, and moving the workspace to Pro does not lift Free-instance limits.

## Notes

- **Idle and the hour cap.** No inbound HTTP request and no WebSocket message for 15 minutes spins a Free web service down. The next request or new WebSocket connection wakes it in about a minute, behind a Render loading page. Requests to `/robots.txt` while it is down get a disallow-all response and do not wake it. Spin-down drops the local filesystem. Spun-down time does not consume hours. Each workspace gets 750 Free instance hours per calendar month, and leftovers do not roll over. When the hours are gone, Render suspends every Free web service until the next month. Paid compute plans do not spin down. Changing the workspace from Hobby to Pro does not remove these limits; the service’s own compute plan has to change.
- **Other Free-web stops.** With no payment method, using up included outbound bandwidth suspends Free services for the rest of the month. Using up pipeline minutes with no payment method, or hitting a spend limit, disables new builds; existing artifacts keep serving. Render may also suspend a Free web service that sends an unusually high volume of its own traffic to the public internet. Restore that one by moving it to a paid compute plan. Free web services cannot scale past one instance, attach a disk, or receive private-network traffic. They can send private-network requests to datastores and paid services in the same region. Outbound SMTP ports 25, 465, and 587 are blocked.
- **Datastores expire.** A workspace can have one Free Postgres database: 1 GB, no backups, no connection pooling, and maintenance or a restart at any time. It expires 30 days after creation. There are 14 days after that to move it to a paid plan. Then Render deletes the database and its data. Email warns before both deadlines. A workspace can have one Free Key Value instance. It is memory only, so a restart deletes the data, and upgrading it to a paid plan deletes the data as well.
- **MCP writes are broad.** Replacing environment variables updates all of them, not one key. A deploy can also clear the build cache. There is no MCP tool for delete, scaling, image-backed services, or IP allow lists. Postgres SQL is read-only. Response-time metrics are absent below Pro. If the client never selected a workspace, the next prompt is about the wrong one or asks which workspace to use. Render does not guarantee that a connection string stays out of the model context.

## Sources

- [Deploy for free](https://render.com/docs/free) — accessed 2026-11-23
- [Render MCP server](https://render.com/docs/mcp-server) — accessed 2026-11-23
- [Render pricing](https://render.com/pricing) — accessed 2026-11-23
