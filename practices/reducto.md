---
id: reducto
title: Reducto — parse, extract, and edit documents
kind: service
tags: [reducto, documents, parse, extract]
status: active
updated: 2026-11-20
when_to_use: Parsing a document into grounded blocks, or extracting fields from it, on Reducto
---

## Summary

**Reducto** is a hosted document API. Parse returns text, tables, figures, and layout with bounding boxes. Extract, Split, Classify, and Edit are separate endpoints, and Studio is the dashboard for pipelines and keys. The API base is `https://platform.reducto.ai`. It is not LlamaParse (`llamaparse`) and not a web scraper (`firecrawl`).

## Notes

- **Access.** Sign up at `links.get`. The quickstart starts from a free Studio account. Upload a file, then pass the returned file id, a public URL, or a presigned S3, GCS, or Azure URL as `input`. Official SDKs exist for Python, Node.js, and Go; the HTTP API is the same surface. The vendor’s auth page describes a standard grant of 15,000 credits for a new account. List prices below are dollars, and a contract can differ from them.
- **Auth.** Send `Authorization: Bearer` with an API key created in Studio. Any role can create a key. Only owners and admins can edit or delete one. The secret is shown once. Studio lists an expiration for each key, and owners and admins are emailed a week and a day before it expires. Deleting a key revokes it immediately.
- **Parse models and list prices (credit-usage page; prices effective 2026-09-01).** Set `settings.model` to `r-1` ($10 per 1,000 pages), `r-1-mini` ($1 per 1,000 pages), or `legacy`. Legacy standard pages are $15 per 1,000 and complex pages are $30 per 1,000, with a 2× multiplier for agentic modes. If `settings.model` is omitted on the V3 API, the call stays on legacy until 2026-12-07 and then defaults to r-1. The V2 API always stays on legacy. OCR and citations are included with r-1; on r-1 mini they are a $1 per 1,000 pages add-on. An advanced chart agent is $0.06 per chart it extracts. Extract is $20 per 1,000 pages and Deep Extract is $40, with no extra parse charge. A batch-queue job for r-1, r-1 mini, or Extract is 20% off and has a 12-hour completion guarantee. Deep Extract is not eligible.
- **Spreadsheets and hosting.** Spreadsheet cells are billed as pages: 1,000 cells per page in accurate clustering, 5,000 when clustering is fast or disabled. r-1 mini does not process spreadsheets. On a hosted deployment that request returns HTTP 400. r-1 is not available on-prem; r-1 mini is.
- **Alternatives.** LlamaParse (`llamaparse`) when you want credit tiers, a 48-hour parse cache, and a hosted MCP server. LiteParse when a simple file should stay on the machine.
- **Caveats.** An unset model, a legacy OCR setting, or a spreadsheet sent to r-1 mini does not behave like the previous pipeline. Details: `reducto-parse-defaults-to-r1`.

## Sources

- [Reducto](https://reducto.ai/) — accessed 2026-11-20
- [Studio](https://studio.reducto.ai/) — accessed 2026-11-20
- [API quickstart](https://docs.reducto.ai/quickstart) — accessed 2026-11-20
- [API reference for coding agents](https://docs.reducto.ai/agent-guide) — accessed 2026-11-20
- [Account and settings](https://docs.reducto.ai/studio-account) — accessed 2026-11-20
- [Reducto authentication](https://reducto.ai/auth.md) — accessed 2026-11-20
- [Usage and pricing](https://docs.reducto.ai/reference/credit-usage) — accessed 2026-11-20
- [Parse overview](https://docs.reducto.ai/parse/overview) — accessed 2026-11-20
- [r-1 configuration compatibility](https://docs.reducto.ai/configs/parse/r-1-configuration-compatibility) — accessed 2026-11-20
