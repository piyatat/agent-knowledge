---
id: figma-mcp
title: Figma MCP — design context and canvas writes for agents
kind: service
tags: [figma, mcp, design, auth]
status: active
updated: 2026-11-21
when_to_use: Letting an agent read a Figma frame or write frames back to the canvas
---

## Summary

**Figma MCP** gives an agent variables, components, and layout from Figma files, and on the remote server it can write native frames back to the canvas. The hosted endpoint is `https://mcp.figma.com/mcp`. A desktop server in the Figma app is a narrower alternative for some organization, enterprise, and government setups. Sign up at `links.get`. The product overview is `links.docs`.

## Notes

- **Access.** Only clients listed in the Figma MCP catalog can connect; Figma points other clients at a waitlist. The remote server does not need the desktop app. The first connection signs in with a Figma account. The agent can only open files that account can already open. `whoami` reports the email, plans, and seat. Claude can use Okta Cross App Access so members are not prompted again. Figma for Government is desktop-server only: no remote endpoint, no canvas write, and no code-to-canvas.
- **Seats and read quotas.** Figma says these limits can change. View and Collab seats are up to **20 tool calls per month** on Starter, Professional, Organization, and Enterprise. Full and Dev seats are up to **200 per day and 10 per minute** on Professional, **200 per day and 15 per minute** on Organization, and **600 per day and 20 per minute** on Enterprise. Education matches the Professional Full and Dev caps. The Starter column does not list Full or Dev. These quotas apply to tools that read Figma. Figma exempts some tools, and the published examples are `add_code_connect_map`, `create_new_file`, `generate_figma_design`, and `whoami`. Image generation, vector illustration, and Figma Make prompts spend AI credits instead of this quota.
- **Writing.** Canvas writes use the remote server and `use_figma` (Plugin API code in the file). The plan must be Professional, Education, Organization, or Enterprise, the account needs edit access, and a **Full** seat is required to write outside drafts. The feature is free during beta and Figma says it will become usage-based. The published client table does not mark every remote client as able to write; Gemini CLI is remote-capable there with the write column empty, while Cursor, Claude Code, Codex, and VS Code are marked. Each `use_figma` result is capped at **48,000 UTF-8 bytes**. It cannot add a new image by itself (`upload_assets` or `generate_image`). Fonts must already be uploaded to the Figma account. Figma says to try writes on a duplicate before a production library. The desktop server does not write to the canvas and does not send UI to Figma. It needs a Dev or Full seat on Professional, Education, Organization, Government, or Enterprise.
- **How the agent points at a node.** Paste a Figma link. Copy link to selection carries the node id. The client does not open the link. Skills such as `figma-use` tell the agent which tools to call; they do not add tools.
- **Alternatives.** The Figma REST API when the coding agent is not in the MCP catalog. A screenshot when the task is pixels, not components and variables.
- **Caveats.** A View seat, a missing link, or a write from the desktop server fails in ways that look like a broken server. Details: `figma-mcp-seat-and-link`.

## Sources

- [Figma MCP server](https://developers.figma.com/docs/figma-mcp-server/) — accessed 2026-11-21
- [Set up the remote server](https://developers.figma.com/docs/figma-mcp-server/remote-server-installation/) — accessed 2026-11-21
- [Rate limits and access](https://developers.figma.com/docs/figma-mcp-server/rate-limits-access/) — accessed 2026-11-21
- [Write to canvas](https://developers.figma.com/docs/figma-mcp-server/write-to-canvas/) — accessed 2026-11-21
- [Set up the desktop server](https://developers.figma.com/docs/figma-mcp-server/local-server-installation/) — accessed 2026-11-21
- [Figma sign-up](https://www.figma.com/signup) — accessed 2026-11-21
