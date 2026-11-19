---
id: cohere
title: Cohere — embed and rerank API for agent retrieval
kind: service
tags: [cohere, embeddings, rerank, retrieval]
status: active
updated: 2026-11-19
when_to_use: Embedding passages and reranking retrieved chunks before they go into an agent's context
---

## Summary

**Cohere** hosts generative models (Command), embedding models, and rerank models behind one API. For an agent, the usual job is retrieval: embed documents and queries, store the vectors somewhere else, then rerank the candidates before they enter the prompt. North, Compass, and Model Vault are separate enterprise products. This page is the platform API.

## Notes

- **Access.** Creating an account creates a trial API key and shows it on the dashboard API keys page (`links.get`). The current HTTP API is v2: embed at `POST https://api.cohere.com/v2/embed`, rerank at `POST https://api.cohere.com/v2/rerank`. The embeddings guide’s example model is `embed-v5.0-pro`. The rerank reference’s example model is `rerank-v5.0-pro`. Official SDK pages are linked from `links`; this note does not repeat install steps. Chat, embed, and rerank can also run on Amazon SageMaker, Microsoft Foundry, or a private Model Vault deployment. Those are different credentials and rate limits.
- **Auth.** Send `Authorization: Bearer` with the key. A new account is a personal account and only has a trial key. Trial calls are free, rate limited, and not for production or commercial use. A production key is pay-as-you-go. An organization Owner requests it from Billing and Usage (“Get Your Production key”). Organizations are not given a production key automatically. A personal account cannot add members until it joins an organization. Production bills at the end of the calendar month or when the outstanding balance reaches $250.
- **Plans and limits (rate-limit and pricing pages, 2026-11-19).** Trial keys, and production keys on newer chat variants, are limited to 1,000 API calls a month. Trial chat models in the rate-limit table are 20 requests per minute. Production Command A, Command R, Command R+, Command R7B, and North Mini Code are 500 requests per minute. Command A+, Command A Reasoning, Command A Translate, and Command A Vision stay at “contact sales” on production keys. Embed is 2,000 inputs per minute on both trial and production keys (5 images per minute on trial, 400 on production). Rerank is 10 requests per minute on trial and 1,000 on production. Embed jobs are 5 requests per minute on trial and 50 on production. Generative models are priced per token, and billed tokens can be lower than the raw token counts in the response. Rerank is priced in search units: one unit is one query with up to 100 documents. A document longer than 500 tokens, counting the query, is split, and each chunk counts as a document. Current dollar rates are on the pricing page.
- **How embed and rerank expect to be called.** For semantic search, embed stored passages with `input_type` `search_document` and the query with `search_query`. `input_type` is required on embed v3 and newer. `embed-v5.0-pro` accepts `output_dimension` of 256, 512, 768, 1024, 1536, or 2048. One embed call takes at most 96 texts. Rerank compares one query to a list of texts. The reference recommends staying at or below 1,000 documents in one request. `max_tokens_per_doc` defaults to 4096. `top_n` limits how many ranked rows come back. Default is the full list.
- **Alternatives.** Pinecone Inference when the vectors already live in Pinecone and you want its hosted reranker (`bge-reranker-v2-m3` on Starter and Builder). The vector database’s own similarity score when the candidate set is already small enough to skip a second model.
- **Caveats.** A production key still behaves like a trial key on newer chat variants such as Command A Reasoning, including the 1,000-call monthly cap (`cohere-trial-keys-and-input-type`). Embedding the query and the documents with the same `input_type` is not the search setup the embeddings guide describes.

## Sources

- [Cohere API keys and rate limits](https://docs.cohere.com/docs/rate-limits) — accessed 2026-11-19
- [How Cohere pricing works](https://docs.cohere.com/docs/how-does-cohere-pricing-work) — accessed 2026-11-19
- [Cohere pricing](https://cohere.com/pricing) — accessed 2026-11-19
- [Introduction to embeddings](https://docs.cohere.com/docs/embeddings) — accessed 2026-11-19
- [Embed API (v2)](https://docs.cohere.com/reference/embed) — accessed 2026-11-19
- [Rerank API (v2)](https://docs.cohere.com/reference/rerank) — accessed 2026-11-19
- [Cohere API keys](https://dashboard.cohere.com/api-keys) — accessed 2026-11-19
