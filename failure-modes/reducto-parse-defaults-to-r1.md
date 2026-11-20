---
id: reducto-parse-defaults-to-r1
title: An unset Reducto Parse model becomes r-1 on 7 December 2026
kind: knowledge
tags: [reducto, parse, billing, migration]
status: active
updated: 2026-11-20
when_to_use: A Reducto Parse call changes model on 7 December 2026, or r-1 ignores the OCR settings you sent
---

## Summary

On the Reducto (`reducto`) V3 Parse API, a request that omits `settings.model` uses the legacy pipeline until 2026-12-07 and r-1 after that date. r-1 ignores several legacy OCR and agentic settings, rejects others, and bills a different page rate. A V2 request does not follow this switch: V2 always stays on legacy.

## Notes

- **Which calls move.** Set `settings.model` to `r-1`, `r-1-mini`, or `legacy`. Unset means legacy through 2026-12-06 and r-1 starting 2026-12-07. Pin `legacy` to keep the old pipeline. r-1 is not on the V2 API. Convert to V3 before expecting r-1, and do not expect a V2 client to change behavior on that date.
- **Ignored versus rejected.** r-1 and r-1 mini ignore `settings.extraction_mode`, `settings.ocr_system`, `enhance.summarize_figures`, `enhance.intelligent_ordering`, promptless agentic text, table, and figure scopes, any agentic layout scope, and `formatting.include` values `highlight`, `signatures`, and `ignore_watermarks`. They handle those behaviors themselves. `formatting.table_output_format` of `jsonbbox` and `track_offsets` are not supported. The compatibility page says a request that still contains incompatible settings can fail validation, so remove those fields before flipping the model.
- **Price and spreadsheets.** List prices effective 2026-09-01: r-1 is $10 per 1,000 pages, r-1 mini is $1 per 1,000, legacy standard is $15 per 1,000, and legacy complex is $30 per 1,000. Legacy agentic modes multiply by 2. OCR data and citations are included on r-1 and are $1 per 1,000 pages on r-1 mini. The advanced chart agent adds $0.06 for each chart it extracts, and does not charge for figures it skips. A batch-queue submit of r-1, r-1 mini, or Extract is 20% off, runs asynchronously, and has a 12-hour completion guarantee. Deep Extract is excluded. Spreadsheets have no separate rate: accurate clustering bills 1,000 cells as a page, and fast or disabled clustering bills 5,000. r-1 mini does not process spreadsheets and returns HTTP 400 on a hosted deployment. r-1 itself is unavailable on-prem; r-1 mini is the on-prem model.

## Sources

- [r-1 configuration compatibility](https://docs.reducto.ai/configs/parse/r-1-configuration-compatibility) — accessed 2026-11-20
- [Parse overview](https://docs.reducto.ai/parse/overview) — accessed 2026-11-20
- [Parse r-1, r-1 mini](https://docs.reducto.ai/parse/r-1) — accessed 2026-11-20
- [Usage and pricing](https://docs.reducto.ai/reference/credit-usage) — accessed 2026-11-20
- [Processing settings](https://docs.reducto.ai/configs/parse/ocr-settings) — accessed 2026-11-20
- [Agentic modes](https://docs.reducto.ai/configs/parse/agentic-modes) — accessed 2026-11-20
