---
id: cohere-trial-keys-and-input-type
title: A Cohere trial key stops after 1,000 calls, or search embeddings share one input_type
kind: knowledge
tags: [cohere, billing, embeddings, rerank]
status: active
updated: 2026-11-19
when_to_use: Cohere calls start failing after a quiet month of testing, or semantic search ranks the wrong passages
---

## Summary

Cohere (`cohere`) trial keys, and production keys on newer chat models, stop at 1,000 API calls a month. Embed v3 and newer also require `input_type`. Semantic search uses a different value for stored passages than for the query. Using one value for both still returns vectors. They are the wrong vectors for that search.

## Notes

- **The monthly cap is on the key, not the plan name.** Trial keys are free and are not for production. They allow 1,000 API calls a month. The rate-limit page warns that production keys work like trial keys for newer chat variants, and names Command A Reasoning. Those production keys share the same 1,000-call month. Command A+, Command A Reasoning, Command A Translate, and Command A Vision have no self-serve production rate in the table. The page says to contact sales. A personal account only has a trial key until an Owner finishes “Get Your Production key” under Billing and Usage. Joining an organization does not grant that key by itself.
- **Per-minute limits differ by endpoint.** Trial rerank is 10 requests per minute. Production rerank is 1,000. Embed stays at 2,000 inputs per minute on both key types. Image embed is 5 inputs per minute on trial and 400 on production. Embed jobs are 5 requests per minute on trial and 50 on production. A rerank loop that was fine in a script can stall on a trial key long before the monthly cap.
- **Search embeddings are a pair of input types.** The embeddings guide says to embed stored passages with `search_document` and the query with `search_query`. `input_type` is required for embed v3 and newer. Classification and clustering have their own values. The same page says `input_type=images` on `embed-v5.0-pro` defaults to `search_document`, and recommends `search_document` for that model. A query embedded as `search_document` is accepted. It is not the query-side vector the search guide uses.
- **Length and width are silent until they are not.** `truncate` defaults to `END`, which drops the end of an over-long input. `NONE` returns an error when the input exceeds the model maximum. One call accepts at most 96 texts. `output_dimension` on `embed-v5.0-pro` is one of 256, 512, 768, 1024, 1536, or 2048. A later call at a different dimension returns a different length, so it will not line up with vectors already stored at the first length. The response field is `embeddings.float` when you ask for float. Binary and ubinary vectors are packed into bytes, so `len` of a 1,024-dimension binary vector is 128 until you unpack it.
- **Rerank truncates and rebills long documents.** The reference recommends staying at or below 1,000 documents per request. `max_tokens_per_doc` defaults to 4096, and longer documents are truncated to that. Pricing counts a search unit as one query plus up to 100 documents. If any document exceeds 500 tokens, including the query length, it is split, and each chunk counts as its own document toward that search. `top_n` only limits the rows returned. It does not shrink the unit count. Structured documents should be YAML strings. The reference says that shape ranks better than other structured text.

## Sources

- [Cohere API keys and rate limits](https://docs.cohere.com/docs/rate-limits) — accessed 2026-11-19
- [How Cohere pricing works](https://docs.cohere.com/docs/how-does-cohere-pricing-work) — accessed 2026-11-19
- [Cohere pricing](https://cohere.com/pricing) — accessed 2026-11-19
- [Introduction to embeddings](https://docs.cohere.com/docs/embeddings) — accessed 2026-11-19
- [Embed API (v2)](https://docs.cohere.com/reference/embed) — accessed 2026-11-19
- [Rerank API (v2)](https://docs.cohere.com/reference/rerank) — accessed 2026-11-19
