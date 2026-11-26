---
id: cloudinary
title: Cloudinary — image and video transforms on a CDN
kind: service
tags: [cloudinary, images, video, mcp]
status: active
updated: 2026-11-26
when_to_use: Transforming and delivering images or video from a CDN, or letting an agent manage a Cloudinary product environment
---

## Summary

**Cloudinary** stores images, video, and raw files and builds derived versions from delivery URLs (crop, format, quality) on its CDN. One credit is 1,000 transformations, or 1 GB of storage, or 1 GB of image bandwidth. On the Free plan, video bandwidth is also 1 GB per credit; paid self-serve plans count 2 GB of video bandwidth per credit. Free is 25 credits, 3 users, and 1 product environment, with no card and no time limit. Hosted MCP covers assets, environment config, metadata, analysis, video, and MediaFlows. Use Cloudinary when the app must resize and deliver media. Use Mux (`mux`) for player-first video hosting, fal (`fal`) or Replicate (`replicate`) to generate a model output, and R2 (`cloudflare-r2`) for objects without on-the-fly transforms.

## Notes

- **Access.** Sign up at `links.get`. On 2026-11-26 the homepage’s register links pointed there and the URL stayed put (title Cloudinary). OAuth on a remote MCP server asks which product environment (cloud) to use. API-key auth sends that cloud’s key and secret instead, except the Analysis server, which the MCP docs say is OAuth only. The Claude and Cursor plugin note says the MediaFlows server does not use OAuth and expects credentials in headers. The docs describe a temporary claimable cloud that expires unless the claim email is confirmed. Assets (DAM) is a separate product: a paid API plan does not raise DAM limits, and DAM Enterprise does not raise API limits.
- **Plans.** The pricing snapshot lists Free $0 / 25 credits, Plus $99 a month or $89 billed annually / 225 credits / 3 users / 2 environments, Advanced $249 or $224 / 600 credits / 5 users / 3 environments, Advanced Extra $549 or $494 / 1,350 credits / 5 users / 5 environments, and Pro PAYG $1,099 or $989 / 2,750 credits / 5 users / 5 environments, then $0.45 per extra credit. The live pricing page showed the Plus monthly and annual prices. The snapshot says to prefer the site and docs if they disagree. Free image uploads stop at 10 MB and video at 100 MB; Plus raises those to 20 MB and 2 GB. Admin API hourly caps in that table are 500 on Free, 2,000 on Plus and Advanced, and 5,000 on Advanced Extra and Pro PAYG. Paid add-on tiers need a paid base plan. Free add-on tiers exist on Free. Details: `cloudinary-credit-window-and-admin-limit`.
- **MCP and API.** Docs updated 2026-11-05 list Asset Management (`https://asset-management.mcp.cloudinary.com/mcp`), Environment Config, Structured Metadata, Analysis, and MediaFlows. The MCP repo also publishes Video at `https://video.mcp.cloudinary.com/mcp` and MediaFlows at `https://mediaflows.mcp.cloudinary.com/v2/mcp`. New configs should use `/mcp`. `/sse` is deprecated except on the analysis server, and `/sse` still accepts POST as an alias. Asset tools can upload, delete, tag, build transformation URLs, and generate images once the Image Generation add-on is registered. Analysis (tagging, moderation) needs its add-on too. The Admin API returns HTTP 420 when the hourly cap is hit. The Upload API is outside that cap. A cached derivative URL does not spend another transformation; the first generation, an incoming upload transform, and an eager transform do. Stored bytes include originals, derived copies, and backup revisions.

## Sources

- [Cloudinary billing and plans](https://cloudinary.com/documentation/billing_and_plans) — accessed 2026-11-26
- [Cloudinary pricing snapshot](https://cloudinary.com/pricing.md) — accessed 2026-11-26
- [Cloudinary pricing](https://cloudinary.com/pricing) — accessed 2026-11-26
- [Cloudinary AI agent tools and MCP servers](https://cloudinary.com/documentation/cloudinary_llm_mcp) — accessed 2026-11-26
- [Cloudinary Admin API](https://cloudinary.com/documentation/admin_api) — accessed 2026-11-26
- [Cloudinary MCP servers](https://github.com/cloudinary/mcp-servers) — accessed 2026-11-26
- [Register for Cloudinary](https://cloudinary.com/users/register_free) — accessed 2026-11-26
- [Cloudinary](https://cloudinary.com/) — accessed 2026-11-26
