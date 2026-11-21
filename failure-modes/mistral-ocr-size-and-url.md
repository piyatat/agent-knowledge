---
id: mistral-ocr-size-and-url
title: Mistral OCR rejects a document URL, or a PDF is too large for one call
kind: knowledge
tags: [mistral, ocr, documents, limits]
status: active
updated: 2026-11-21
when_to_use: Mistral OCR returns no pages, a URL fails, or a long PDF has to be split
---

## Summary

Mistral OCR (`mistral-ocr`) only fetches a URL its API can reach, and the Document AI cookbook treats about 50 MB and about 1,000 pages as the per-call ceiling. Annotations and block boxes are extra flags, not part of every model generation.

## Notes

- **URL and plan.** `document_url` has to be public to Mistral’s API. A localhost, signed-in, or expiring link fails that path. The other inputs are base64 or a file uploaded to Mistral, which returns a secured URL. Free mode does not include API access; a key without billing returns an authorization error rather than markdown. The key is shown once in Studio. Send `mistral-ocr-latest` unless you intend to pin `mistral-ocr-4-1` or OCR 3.
- **Size.** The cookbook’s typical limits are about **50 MB** and about **1,000 pages** per call. Its own sample splits at 25 MB and 500 pages to stay under those. Split on page boundaries. Page numbers in `pages` start at **0**, so `1-5` skips the first page and includes a later one.
- **Flags that 400 or inflate the bill.** `include_blocks` defaults to true and is documented for OCR 4 or newer. Header, footer, and separate table formats are OCR 2512 or newer; older models keep headers in the markdown. Confidence scores are off until `confidence_scores_granularity` is set. A document annotation without `document_annotation_format` does not match the endpoint rule that the format is required when a prompt is set. Annotated pages are priced on the model card at **$5** per 1,000 pages, separate from the **$4** per 1,000 pages OCR 4.1 row (cached input **$0.4**). OCR 3 is **$2** per 1,000 pages.
- **Pages per minute.** The admin usage page says Document OCR limits can include pages per minute and that the number is the organization’s Limits page, not a global constant.

## Sources

- [OCR processor](https://docs.mistral.ai/studio/document-processing/basic_ocr) — accessed 2026-11-21
- [OCR endpoint](https://docs.mistral.ai/api/endpoint/ocr) — accessed 2026-11-21
- [Document AI PDF chunking cookbook](https://docs.mistral.ai/resources/cookbooks/mistral-ocr-documentchunking-document_chunking_cookbook) — accessed 2026-11-21
- [OCR 4.1](https://docs.mistral.ai/models/ocr-4-1) — accessed 2026-11-21
- [API pricing](https://docs.mistral.ai/inference/pricing) — accessed 2026-11-21
- [Usage and limits](https://docs.mistral.ai/admin/billing-usage/usage-limits) — accessed 2026-11-21
