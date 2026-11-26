---
id: mux
title: Mux — video upload, playback, and a code-mode MCP server
kind: service
tags: [mux, video, streaming, mcp]
status: active
updated: 2026-11-26
when_to_use: Uploading video and playing it back from an app, or letting an agent manage a Mux environment
---

## Summary

**Mux** ingests video, stores one encoded asset, and delivers HLS to players. Quality-of-experience analytics and on-demand captions are included with that video. Mux Robots runs separate AI jobs, such as chapters or moderation, on on-demand assets. New on-demand accounts default to basic quality, and basic input is free. Every plan includes 100,000 delivery minutes and 100,000 Robots units a month. Pay as you go adds a $20 usage credit. The hosted MCP server is `https://mcp.mux.com`. Its `execute` tool runs the Mux TypeScript SDK for the environment you authorized. Use Mux when the app must store and play video. Use fal (`fal`) or Replicate (`replicate`) when the job is to generate the video.

## Notes

- **Access.** Sign up at `links.get`. On 2026-11-26 the marketing site’s Get started links pointed there, and the URL stayed put. The page is a short shell titled mux. Hosted MCP signs in at `dashboard.mux.com` and then asks which environment to authorize. A client that cannot do OAuth sends HTTP Basic of the access-token id and secret. A token belongs to one environment. A development token cannot read production. Mux stores a hash of the secret, so a lost secret means a new token. Only an organization admin can open the token settings. Permissions cannot be added to an existing token. Mux Robots needs its own read and write on the token, separate from Video. There is no platform fee and no per-seat fee.
- **Plans.** No card is required to start. The May 2025 changelog, and the free-plan post updated 2025-11-21, cap Free at 10 stored on-demand assets, show a Mux badge in Mux Player, and say live streaming, unlimited assets, and the monthly credit start after a card is added. The pricing page accessed 2026-11-26 does not restate the number 10. It does say Free accounts cannot export usage or set spending alerts, and that every plan, including Free, gets the 100,000 delivery minutes and 100,000 Robots units. Treat 10 assets as the documented Free cap, and re-check the dashboard if a create fails for another reason. The first 100,000 delivered minutes each month are free regardless of quality or resolution. The older post said those minutes were up to 1080p. Plan against the pricing page. Basic input is free at every listed resolution and is on-demand only. Plus 1080p input starts at $0.03125 per minute. Basic and plus 1080p storage starts at $0.003 per minute per month. Basic storage bills at least one month even if the asset is deleted sooner. Plus does not. Live requires plus or premium and stops at 1080p. After the free minutes, 1080p delivery starts at $0.001 per minute, and seconds buffered ahead of the playhead count. Robots units convert at 1,000 = $0.01, so the free 100,000 units are $1. Cancelled and errored Robots jobs are not charged. On pay as you go and pre-pay, the free Robots units apply before the usage credit, and that credit also covers Robots. Launch is $20 a month for $100 of usage. Scale is $500 for $1,000. Above the credit, list rates apply. Around $3,000 a month, published rates are a ceiling and contract pricing is separate.
- **MCP and API.** `search_docs` and `execute` are the two hosted tools. Each `execute` runs in a fresh sandbox that can reach Mux API hosts only, so code inside the sandbox cannot download an arbitrary file. The API can still be asked to ingest a URL. `execute` does not treat deletes as special. A read-only token is what stops changes. List calls default to 10 records and accept at most 100 per page. Video POST limits depend on token priority. High priority, the default, has a bucket of 20 filling at 1 request per second. Low priority, which the docs recommend for agents, scripts, and development, has a POST bucket of 4 at the same fill rate. Other methods are a bucket of 100 at 5 per second (high) or 20 at 1 per second (low). Robots uses the same sizes in its own buckets. HTTP 429 means the request was not processed. Data API monitoring is a sustained 1 request per second. Other Data API calls are a sustained 5. Those Data limits are not yet on the priority buckets. Playback has no viewer cap. Mux asks to be told before a live event expected to pass 100,000 concurrent viewers. Details: `mux-free-cap-and-execute`.

## Sources

- [Mux pricing](https://www.mux.com/docs/pricing/overview) — accessed 2026-11-26
- [Estimating what Mux costs](https://www.mux.com/pricing) — accessed 2026-11-26
- [Mux Video free plan changelog](https://www.mux.com/docs/changelog/video-free-plan) — accessed 2026-11-26
- [Mux free plan](https://www.mux.com/blog/free-plan) — accessed 2026-11-26
- [Using the Mux MCP server](https://www.mux.com/docs/integrations/mcp-server) — accessed 2026-11-26
- [Make API requests](https://www.mux.com/docs/core/make-api-requests) — accessed 2026-11-26
- [Mux fundamentals](https://www.mux.com/docs/core/mux-fundamentals) — accessed 2026-11-26
- [Sign up for Mux](https://dashboard.mux.com/signup) — accessed 2026-11-26
- [Mux](https://www.mux.com/) — accessed 2026-11-26
