---
id: sanity
title: Sanity — structured content and two different MCP servers
kind: service
tags: [sanity, cms, content, mcp]
status: active
updated: 2026-11-25
when_to_use: Editing structured content in a Sanity dataset, or letting an agent query and publish documents
---

## Summary

**Sanity** hosts a content database (Content Lake), a Studio, and agent tooling around that content. The write-capable MCP server is `https://mcp.sanity.io`. A second server, Context MCP, is read-only and lives on `api.sanity.io`. Free is $0 with hard caps and public datasets only. Use Sanity when documents, references, and a schema are the content model. Use Notion (`notion-mcp`) when the source is a workspace of pages rather than a content dataset.

## Notes

- **Access.** Create an account at `links.get` (that URL stayed put on 2026-11-25). `mcp.sanity.io` uses OAuth unless the client sends `Authorization: Bearer` with an API token, in which case OAuth is skipped and the token’s role is the limit. A personal token attributes edits to that person. OAuth sessions typically expire after 7 days. Logging out of the CLI revokes a token the CLI wrote into an editor. Context MCP is a different host and wants an organization token (`sanity-mcp-writes-and-public-dataset`).
- **What the write server can do.** Query and fetch documents, create and patch drafts, publish and unpublish, discard drafts, deploy or edit a schema, create a project (the tool also initializes a dataset and API tokens), add or delete CORS origins, and change a dataset’s visibility. Patches land on a draft or a release version, not on the published document. Publishing runs stricter checks than create or patch. Custom validation rules are skipped. A GROQ result larger than 64 KiB is rejected. `generate_image` and `transform_image` spend AI credits; the MCP page says other tools are ordinary API calls.
- **Plans (pricing page, 2026-11-25).** Free: 20 seats, Administrator and Viewer only (Viewers are free), 2 datasets that are public only, 10,000 documents including drafts, 2,000 attributes per dataset, 1 million API CDN requests, 250,000 API requests, 100 GB assets, and 100 GB bandwidth. There is no overage. Past the API quota, public API access stops and Studio keeps working; email alerts fire at 80% and 100%. Growth is $15 per seat per month, up to 50 seats, with Editor, Developer, and Contributor, and datasets may be private. Included documents are 25,000. Extra API CDN requests are $1 per 250,000, API requests $1 per 25,000, bandwidth $0.30 per GB, and assets $0.50 per GB. An increased-quota add-on is $299 a month.
- **AI credits.** Credits are per organization, reset at 00:00 UTC on the first of the month, and do not roll over. Free and Growth include 1,000; Enterprise includes 5,000. Free cannot buy more. Growth charges $0.05 per extra credit. A Content Agent query is 4 credits and each of its actions is 2. An Agent Action request is 1. A spending limit pauses new AI work; a call that already started can finish past the cap, and usage is counted a little late. Embeddings query reads are capped at 500 a month on Free and 1,000 on Growth, then $1.50 per 1,000.
- **Caveats.** A Free dataset is world-readable. The write MCP server can publish and can mint project tokens. Context MCP cannot write. Details: `sanity-mcp-writes-and-public-dataset`.

## Sources

- [Sanity MCP server](https://www.sanity.io/docs/ai/mcp-server) — accessed 2026-11-25
- [Context MCP reference](https://www.sanity.io/docs/context/mcp-reference) — accessed 2026-11-25
- [How AI credits work](https://www.sanity.io/docs/platform-management/how-ai-credits-work) — accessed 2026-11-25
- [Plans and payments](https://www.sanity.io/docs/platform-management/plans-and-payments) — accessed 2026-11-25
- [Understanding quotas](https://www.sanity.io/docs/help/understanding-quotas) — accessed 2026-11-25
- [Sanity pricing](https://www.sanity.io/pricing) — accessed 2026-11-25
- [Get started with Sanity](https://www.sanity.io/get-started) — accessed 2026-11-25
- [Sanity](https://www.sanity.io/) — accessed 2026-11-25
