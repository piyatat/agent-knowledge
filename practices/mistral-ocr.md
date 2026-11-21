---
id: mistral-ocr
title: Mistral OCR — hosted document pages to markdown
kind: service
tags: [mistral, documents, ocr, parse]
status: active
updated: 2026-11-21
when_to_use: Turning a PDF or scan into markdown with Mistral's hosted OCR instead of a local parser
---

## Summary

**Mistral OCR** is the Document AI endpoint on `POST /v1/ocr` (`https://api.mistral.ai/v1/ocr`). It returns per-page markdown, optional tables, and, on OCR 4, paragraph blocks. The processor docs tell callers to send the alias `mistral-ocr-latest`. The model card for the current generation is **OCR 4.1** (`mistral-ocr-4-1`), dated 16 July 2026. This is not the Vibe coding agent (`mistral-vibe`) or the Agents SDK (`mistral-agents-sdk`).

## Notes

- **Access.** Create a key in the Studio console (`links.get`). The key is shown once. SDKs read `MISTRAL_API_KEY` and send it as a bearer token. Free mode covers Vibe and Studio trials and does **not** include API access. API calls need billing turned on and pay-as-you-go. Organization rate limits, which can include pages per minute for Document OCR, are on the admin Limits page rather than a single published number.
- **Input.** Three forms: a URL Mistral’s API can fetch, a base64 document, or a file uploaded to Mistral that comes back as a secured URL. The processor docs list PDF, PPTX, and DOCX for `document_url`, and PNG, JPEG/JPG, and AVIF for `image_url`. `pages` is 0-based: a list of integers or a string such as `0-5`. The Document AI cookbook states typical per-call limits of about **50 MB** and about **1,000 pages**, and says to split anything larger.
- **Output.** Each page has `markdown`. `table_format` defaults to inline markdown; `markdown` or `html` returns tables separately (OCR 2512 or newer). `extract_header` and `extract_footer` default to false and are also 2512 or newer. `include_blocks` defaults to **true** and adds paragraph boxes with labels (OCR 4 or newer). Confidence scores are omitted unless `confidence_scores_granularity` is `page`, `word`, or `block`. A document-level annotation needs both `document_annotation_format` and `document_annotation_prompt`.
- **Price (pages, accessed 2026-11-21).** The pricing table lists OCR 4.1 at **$4** per 1,000 pages and **$0.4** cached per 1,000 pages, and OCR 3 at **$2** / **$0.2**. The OCR 4.1 model card also lists **$5** per 1,000 annotated pages. There is no token output price on those rows.
- **Alternatives.** Docling (`docling`) when the file must stay on the machine that runs the agent. LlamaParse (`llamaparse`) or Reducto (`reducto`) when the pipeline already uses those parsers.
- **Caveats.** A private URL, a file past the cookbook limits, or `include_blocks` on a pre-OCR-4 model fails the call. Details: `mistral-ocr-size-and-url`.

## Sources

- [OCR processor](https://docs.mistral.ai/studio/document-processing/basic_ocr) — accessed 2026-11-21
- [OCR 4.1](https://docs.mistral.ai/models/ocr-4-1) — accessed 2026-11-21
- [OCR endpoint](https://docs.mistral.ai/api/endpoint/ocr) — accessed 2026-11-21
- [API pricing](https://docs.mistral.ai/inference/pricing) — accessed 2026-11-21
- [Usage and limits](https://docs.mistral.ai/admin/billing-usage/usage-limits) — accessed 2026-11-21
- [Document AI PDF chunking cookbook](https://docs.mistral.ai/resources/cookbooks/mistral-ocr-documentchunking-document_chunking_cookbook) — accessed 2026-11-21
- [Create an API key](https://docs.mistral.ai/getting-started/quickstarts/studio/activate-and-generate-api-key) — accessed 2026-11-21
- [Mistral API keys](https://console.mistral.ai/api-keys) — accessed 2026-11-21
