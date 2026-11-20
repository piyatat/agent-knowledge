---
id: voyage-embed-mismatch-and-batch
title: Voyage search misses passages that were truncated, or a batch bill ignores free tokens
kind: knowledge
tags: [voyage, embeddings, billing, retrieval]
status: active
updated: 2026-11-20
when_to_use: Voyage retrieval ranks the wrong chunks, or a batch embed job bills before the free tokens are used
---

## Summary

Voyage (`voyage-ai`) truncates over-long inputs by default, embeds a query and a document in different spaces when `input_type` is omitted, and does not spend free tokens on the Batch API. A bad ranking or an early invoice is usually one of those, not a broken index.

## Notes

- **Truncation is silent.** `truncation` defaults to **true**. Text past the context length (32,000 tokens on the voyage-4 family, 16,000 on `voyage-law-2`) is cut before it is embedded. The tail never enters the vector. Set `truncation` to false when an over-long passage should fail the request instead. A single request also caps the list at **1,000** texts and a model-specific token total (120,000 for `voyage-4-large`).
- **Query and document prompts differ.** `input_type` `None` embeds the raw text. `query` prepends a retrieval prompt and `document` prepends another. For search, embed the corpus as `document` and the question as `query`. Mixing `None` documents with `query` questions, or the reverse, is a different geometry than the one the docs recommend. The docs say vectors made with and without `input_type` are compatible. They still tell you to set it for retrieval.
- **Dimension and dtype have to match the index.** A voyage-4 vector is 1,024 floats unless you set `output_dimension` to 256, 512, or 2,048. `binary` and `ubinary` return a list **one eighth** as long. Do not store those next to float vectors, and do not mix `voyage-large-2` (1,536) or `voyage-3-lite` (512 only) into a voyage-4 index. The 4-series models are compatible with each other at the same dimension and dtype.
- **Free tokens skip the Batch API.** The pricing page says free token credits do not apply to Batch API usage. Successful batch tokens are billed at the discounted rate (33% off, 12-hour window) and do not reduce the free balance. Older models such as `voyage-3.5` and `voyage-code-3` have no free tokens on the standard endpoint either. Files uploaded for batch are deleted after **30 days**.
- **A 429 is not retried for you.** The Python client’s `max_retries` defaults to 0. Tier 1, the published tokens-per-minute table, requires a payment method even while free tokens remain. `voyage-4-large` at tier 1 is 3 million tokens and 2,000 requests a minute.

## Sources

- [Voyage text embeddings](https://docs.voyageai.com/docs/embeddings) — accessed 2026-11-20
- [Voyage pricing](https://docs.voyageai.com/docs/pricing) — accessed 2026-11-20
- [Voyage rate limits](https://docs.voyageai.com/docs/rate-limits) — accessed 2026-11-20
- [Voyage API key](https://docs.voyageai.com/docs/api-key-and-installation) — accessed 2026-11-20
