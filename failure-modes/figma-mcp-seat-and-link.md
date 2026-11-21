---
id: figma-mcp-seat-and-link
title: A Figma MCP read is rate-limited, or a canvas write is refused
kind: knowledge
tags: [figma, mcp, rate-limit, permissions]
status: active
updated: 2026-11-21
when_to_use: A Figma MCP read fails after a few calls, or a canvas write is refused
---

## Summary

Figma MCP (`figma-mcp`) reads are capped by seat, and canvas writes need the remote server, a paid plan, edit access, and a Full seat outside drafts. A client that is not in Figma’s MCP catalog cannot connect at all.

## Notes

- **Catalog and account.** The remote URL only accepts clients Figma lists. A custom agent that speaks MCP still has to be on that list. Permission errors are about the signed-in account: `whoami` shows the email, plans, and seat. The link has to be a Figma Design, FigJam, or Figma Make file that account can open. The remote server finds a layer from the link’s node id; a file URL with no selection is the whole file, not the layer that was on screen.
- **Read quota.** View and Collab seats get up to 20 calls per month on Starter, Professional, Organization, and Enterprise. Full and Dev seats get the daily and per-minute caps on the rate-limits page (200/day on Professional and Organization, 600/day on Enterprise). Figma says the numbers can change. The published exempt list is `add_code_connect_map`, `create_new_file`, `generate_figma_design`, and `whoami`. Do not assume `use_figma` is on that list. `generate_image`, `generate_vector_illustration`, and `send_prompt` spend AI credits instead.
- **Write refused.** `use_figma` requires the remote server, a Professional, Education, Organization, or Enterprise plan, and edit access. Writing outside drafts also requires a Full seat. The desktop server does not implement canvas write or code-to-canvas, and Figma for Government has no remote server. The published client table leaves the write column empty for some remote clients, including Gemini CLI. Each `use_figma` result stops at 48,000 UTF-8 bytes. New images go through `upload_assets` or `generate_image`, not through `use_figma` alone. Fonts that exist only on the laptop are unavailable. Writes are beta; Figma says to duplicate the library first. The beta is free and is planned to become usage-based.

## Sources

- [Figma MCP server](https://developers.figma.com/docs/figma-mcp-server/) — accessed 2026-11-21
- [Rate limits and access](https://developers.figma.com/docs/figma-mcp-server/rate-limits-access/) — accessed 2026-11-21
- [Write to canvas](https://developers.figma.com/docs/figma-mcp-server/write-to-canvas/) — accessed 2026-11-21
- [Set up the remote server](https://developers.figma.com/docs/figma-mcp-server/remote-server-installation/) — accessed 2026-11-21
- [Set up the desktop server](https://developers.figma.com/docs/figma-mcp-server/local-server-installation/) — accessed 2026-11-21
