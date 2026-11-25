---
id: liveblocks
title: Liveblocks — shared rooms for people and agents
kind: service
tags: [liveblocks, realtime, collaboration, mcp]
status: active
updated: 2026-11-25
when_to_use: Adding shared rooms, comments, or presence so people and agents edit the same document
---

## Summary

**Liveblocks** hosts the realtime layer for a shared room: document sync, comments, notifications, and file storage. A minute is billed only when at least two people or agents are in the room. Free is $0 with a hard cap on each meter and a “Powered by Liveblocks” badge. Pro is $30 a month with $30 of credits, then the same metered rates. A secret-key MCP server can create and delete rooms. Use Liveblocks when the product is concurrent editing. Use Convex (`convex`) when functions and data should live in one hosted backend instead of a collaboration room.

## Notes

- **Access.** Create an account at `links.get`. The create-account doc names that URL. On 2026-11-25 it redirected to `/auth/signup`, which redirected to WorkOS AuthKit. That authorize URL carried a public client id and no one-time user token. Sign-up is email, GitHub, or Google. The create-account page still calls the new account a free Starter team and says teammates cannot be invited until a paid plan. The pricing page calls the plan Free and includes 3 dashboard seats. Use the pricing page for caps, and re-check invites because those pages disagree.
- **Auth.** REST calls send the project secret as a bearer token. A public key on those routes returns `WRONG_KEY_USED`. A Production project’s secret can be read only when it is first created. A Development secret stays readable. The environment cannot be changed later. User sessions should be ID tokens from the secret on your server. The public key is for prototyping.
- **MCP.** The docs page describes a local server, lists 39 tools, and says not to use a production secret, because the agent can change the project. The server’s README also documents a hosted endpoint, `https://mcp.liveblocks.io/mcp`, with the same secret as a bearer token. A GET to that URL from this runner returned HTTP 405. Tools can create and delete rooms, threads, comments, and notifications, read Storage and Yjs, and broadcast events.
- **Plans (pricing page, 2026-11-25).** Free is $0, no card, and the badge stays. Each meter is a hard cap: 3,000 collaboration minutes, 200 comments, 3 million storage updates, 1 GB of realtime data, 200 custom notifications, and 512 MB of files. Also 500 monthly active rooms, 10 connections in one room, 10 projects, 3 seats, a 50 MB upload, and 24 hours of version history. Crossing a cap pauses that feature until the next calendar month. Pro is $30 a month, or $25 a month billed annually, with $30 of credits. Metered use past the credits keeps running and is billed. Team starts at $600 a month, or $500 billed annually, with at least $600 of credits. Higher Team tiers include more credit value than the price, up to $3,750 for $5,000 of credits. Team includes 10 seats and then $10 a seat, 50 connections per room, 100,000 monthly active rooms, and SAML SSO. The SOC 2 report is annual Team or Enterprise. A HIPAA BAA on Team is $350 a month, billed yearly. Enterprise adds EU and US regions, a Management API, and SCIM. Credits reset each cycle and do not roll over. Realtime data and files are cumulative. They do not reset monthly. Stored data and files are $0.15 per GB. Comments are $0.01. Storage updates are $1 per million. Custom notifications are $0.005. Collaboration notifications are unlimited. Two users in a room for 5 minutes is 10 minutes at $0.002. A solo session is $0. A room with no activity for 10 seconds stops the minute meter. Background tabs still count until the client sets a background timeout.
- **Commercial use and rooms.** One FAQ says a commercial app can stay on Free if the badge remains. The fair-use section on the same page says Free is personal and non-commercial, including company-internal use and the dev, staging, and test projects of a commercial product. Plan against the fair-use section. At the monthly active room cap, rooms that already exist keep working and new rooms are refused until the first day of the next month. A test user who connects counts as an active room. One `userId` shared by many people, and extra free teams opened to dodge a cap, are listed as never fair use.

## Sources

- [Liveblocks pricing](https://liveblocks.io/pricing) — accessed 2026-11-25
- [Liveblocks plans](https://liveblocks.io/docs/pricing/plans) — accessed 2026-11-25
- [Liveblocks pricing FAQ](https://liveblocks.io/docs/pricing/faqs) — accessed 2026-11-25
- [Liveblocks MCP server](https://liveblocks.io/docs/tools/mcp-server) — accessed 2026-11-25
- [liveblocks-mcp-server README](https://github.com/liveblocks/liveblocks-mcp-server/blob/main/README.md) — accessed 2026-11-25
- [Create a Liveblocks account](https://liveblocks.io/docs/platform/account-management/create-an-account) — accessed 2026-11-25
- [Liveblocks projects](https://liveblocks.io/docs/platform/projects) — accessed 2026-11-25
- [Liveblocks REST API](https://liveblocks.io/docs/api-reference/rest-api-endpoints) — accessed 2026-11-25
- [Liveblocks sign-up](https://liveblocks.io/signup) — accessed 2026-11-25
- [Liveblocks](https://liveblocks.io/) — accessed 2026-11-25
