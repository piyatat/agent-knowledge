---
id: voyage-ai
title: Voyage AI — embedding and rerank API for retrieval
kind: service
tags: [voyage, embeddings, rerank, retrieval]
status: active
updated: 2026-11-20
when_to_use: Embedding passages or reranking chunks with Voyage before they go into an agent's context
---

## Summary

**Voyage AI** (a MongoDB company) is an embedding and rerank API. An agent calls it to vectorize documents and queries, or to reorder retrieved chunks. It does not store the vectors. Pinecone, Qdrant, Weaviate, and Chroma do. Cohere (`cohere`) is the other common embed-and-rerank API. The docs logo reads “VoyageAI by MongoDB,” and voyageai.com links to MongoDB.

## Notes

- **Access.** Sign in at the Voyage dashboard (`links.get`). The homepage links there. Creating an account issues an API key. Further keys are created in the dashboard. The official HTTP and client pages are under `links.docs`. This note does not repeat install commands.
- **Auth.** Calls use a bearer token. The Python client reads `VOYAGE_API_KEY` when you do not pass a key. Its `max_retries` defaults to **0**, so a 429 is not retried. Text embeddings are `POST https://api.voyageai.com/v1/embeddings`. Do not put the key in a browser or a repo.
- **Models (embeddings page, 2026-11-20).** Current text models `voyage-4-large`, `voyage-4`, `voyage-4-lite`, and `voyage-code-4` take 32,000 tokens. Default dimension is 1,024. They also accept 256, 512, and 2,048. The 4-series embeddings are compatible with each other. `voyage-law-2` is 16,000 tokens and 1,024 dimensions only. `voyage-4-nano` is an open-weight model on Hugging Face, not an API call. Set `input_type` to `query` or `document` for retrieval. `None` skips the retrieval prompt.
- **Pricing (pricing page).** Usage is billed to the account on the key. The table gives the first **200 million** tokens free for `voyage-4-large` ($0.12/1M after), `voyage-4` ($0.06), `voyage-4-lite` ($0.02), `voyage-context-4` ($0.12), and `voyage-code-4` ($0.12). Domain models `voyage-finance-2`, `voyage-law-2`, and `voyage-code-2` get **50 million** free, then $0.12/1M. `rerank-3` is $0.05/1M and `rerank-3-lite` is $0.02/1M, each with 200 million free. Older models, including `voyage-3.5` and `voyage-code-3`, have **no** free tokens. Rerank tokens are `(query tokens × document count) + document tokens`.
- **Rate limits.** Tier 1 requires a payment method and still keeps the free tokens. `voyage-4-large` and `voyage-context-4` are 3M tokens and 2,000 requests a minute. `voyage-4` and `voyage-code-4` are 8M / 2,000. `voyage-4-lite` is 16M / 2,000. Tier 2 (≥ $100 paid) doubles that. Tier 3 (≥ $1,000) triples it. A project cap cannot exceed the org cap. Past the limit the API returns **429**.
- **Alternatives.** Cohere when you already have that key. Weaviate’s hosted embedders when the vectors should be written inside Weaviate Cloud. A local model (`ollama`, `vllm`) when the text cannot leave the host. `voyage-4-nano` when you can run the open weights yourself.
- **Caveats.** Truncation defaults to on, so an over-long passage is cut with no error. Batch API usage does not draw down free tokens. Details: `voyage-embed-mismatch-and-batch`.

## Sources

- [Voyage text embeddings](https://docs.voyageai.com/docs/embeddings) — accessed 2026-11-20
- [Voyage pricing](https://docs.voyageai.com/docs/pricing) — accessed 2026-11-20
- [Voyage rate limits](https://docs.voyageai.com/docs/rate-limits) — accessed 2026-11-20
- [Voyage API key](https://docs.voyageai.com/docs/api-key-and-installation) — accessed 2026-11-20
- [Voyage FAQ](https://docs.voyageai.com/docs/faq) — accessed 2026-11-20
- [Voyage](https://www.voyageai.com/) — accessed 2026-11-20
- [Voyage dashboard](https://dash.voyageai.com/) — accessed 2026-11-20
