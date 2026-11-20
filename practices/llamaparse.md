---
id: llamaparse
title: LlamaParse — files to markdown or structured JSON
kind: service
tags: [llamaparse, documents, parse, mcp]
status: active
updated: 2026-11-20
when_to_use: Turning PDFs, scans, or Office files into markdown or JSON for an agent
---

## Summary

**LlamaParse** is LlamaIndex’s hosted document platform. The product was previously called LlamaCloud; that name still appears on some SDK packages and older docs. One project API key covers Parse, Extract, Classify, Split, and Index. Parse turns PDFs, scans, slides, spreadsheets, and audio into markdown or JSON. It is not the open-source LlamaIndex framework, and it is not a page scraper (`firecrawl`) or Reducto (`reducto`).

## Notes

- **Access.** Sign up at `links.get` for North America (`us-east-1`). EU data stays on `https://cloud.eu.llamaindex.ai` (`eu-central-1`). API hosts are `https://api.cloud.llamaindex.ai` and `https://api.cloud.eu.llamaindex.ai`. A v2 Parse job is `POST /api/v2/parse` with a `file_id` or a public `source_url`, then a poll of that job. A hosted MCP server at `https://mcp.llamaindex.ai/mcp` (EU: `https://mcp.eu.llamaindex.ai/mcp`) exposes the same products and signs in with OAuth.
- **Auth.** A dashboard API key is shown once. It is scoped to the user who created it and to a single project, so it cannot be reused in another project. The account lives in one region: call that region’s API host, and point MCP at the matching endpoint. A token issued in one region is rejected by the other. Revocation is eventually consistent and can take up to a minute.
- **Plans (billing page, 2026-11-20).** Pay as you go is $0/month with 10,000 credits that reset monthly and do not carry over. Extra credits are $1.50 per 1,000. Pro is $500/month with 400,000 credits and extra credits at $1.25 per 1,000. Enterprise is a contract. Starter remains only for organizations already on it. Pay as you go allows 5 concurrent Parse jobs and 5 concurrent Extract jobs; Pro allows 20 of each. Before the first credit purchase, a project holds 10,000 files (10 GB) and directories are unavailable. After that, Pay as you go stores 50,000 files / 50 GB, 40 directories, and 2,000 files per directory. A retained upload past the cap returns HTTP 402. Credits you buy expire one year after purchase. At a zero balance, new jobs pause with 402 unless the organization chose to keep going and be invoiced.
- **Parse tiers (v2).** Fast is 1 credit per page and runs no model. Cost-effective is 3, Agentic is 10, and Agentic Plus is 25. Layout extraction adds 3. A spreadsheet is 1 credit per sheet. Audio is 3 credits per minute. Pass `version` as `latest` or a date. On 2026-11-20 the create reference listed latest as fast `2026-11-12`, cost-effective and agentic `2026-11-09`, and agentic plus `2026-11-11`. `GET /api/v2/parse/versions` is the full list. Extract adds its own per-page credits on top of a parse unless that file was already parsed.
- **Alternatives.** Reducto (`reducto`) when you want dollar-per-page prices and bounding boxes. LiteParse when a simple file should be parsed locally with no API key. Firecrawl (`firecrawl`) when the input is a web page to scrape rather than a document file.
- **Caveats.** An Agentic default, a cache miss, or a call to the other region shows up as a slow, expensive, or rejected job. Details: `llamaparse-credit-tier-and-cache`.

## Sources

- [LlamaParse](https://www.llamaindex.ai/llamaparse) — accessed 2026-11-20
- [Sign up](https://cloud.llamaindex.ai) — accessed 2026-11-20
- [LlamaParse platform quickstart](https://developers.llamaindex.ai/llamaparse/quickstart/) — accessed 2026-11-20
- [API key](https://developers.llamaindex.ai/llamaparse/general/api_key/) — accessed 2026-11-20
- [Billing and usage](https://developers.llamaindex.ai/llamaparse/general/billing/) — accessed 2026-11-20
- [Pricing](https://developers.llamaindex.ai/llamaparse/general/pricing/) — accessed 2026-11-20
- [Regions](https://developers.llamaindex.ai/llamaparse/general/regions/) — accessed 2026-11-20
- [Parse a file](https://developers.llamaindex.ai/reference/resources/parsing/methods/create/) — accessed 2026-11-20
- [LlamaIndex docs index for agents](https://www.llamaindex.ai/llms.txt) — accessed 2026-11-20
