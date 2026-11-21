---
id: docling-archive-and-local-mcp
title: A Docling Office file hits an archive cap, or MCP stays local
kind: knowledge
tags: [docling, documents, limits, mcp]
status: active
updated: 2026-11-21
when_to_use: A Docling Office or EPUB conversion fails as an archive limit, an ODS sheet is shorter than the file, or MCP parsed the file locally
---

## Summary

Docling (`docling`) rejects an Office or EPUB package whose declared uncompressed size is too large, silently shortens a repeated ODS grid, and keeps MCP conversion on the local process until remote mode is set. A small upload can still fail or come back incomplete.

## Notes

- **ZIP caps.** DOCX, XLSX, PPTX, and EPUB are ZIP archives. Docling checks the sizes the archive declares and stops each read past the limit. Crossing one raises `ArchiveLimitError`, a `DocumentLoadError`. Office defaults are **128 MiB** per member, **512 MiB** for every member, and **10,000** members, because python-docx, openpyxl, and python-pptx load members into memory. EPUB defaults are **10 MB** per content document, **100 MB** across content documents, and **1,000** content documents. The same EPUB caps cover members pulled out for image processing. Raise `max_file_bytes`, `max_total_bytes`, and `max_member_count` on the matching backend options only for a file you trust.
- **ODS repetition.** An ODS sheet can repeat a row or cell with one attribute. `OdsBackendOptions.max_repeated_cells` caps the cells that repetition adds, on top of cells written in the file. The default is **100,000**. Trailing empty rows and cells do not count. Past the cap, each repetition keeps only the copies that fit, Docling logs a warning, and the cells written in the file stay. The conversion succeeds with a shorter grid.
- **MCP stays local.** The MCP server converts on the machine that launched it. Pointing `DOCLING_SERVICE_URL` at `docling-serve` or Docling for IBM watsonx does nothing until `DOCLING_CONVERSION_MODE=remote`. Falling back to local when that service is down also needs `DOCLING_FALLBACK_TO_LOCAL=true` and the MCP local extra. A remote Docling for IBM watsonx task keeps its artifacts for **24 hours**.

## Sources

- [Advanced options](https://docling-project.github.io/docling/usage/advanced_options/) — accessed 2026-11-21
- [MCP server](https://docling-project.github.io/docling/usage/mcp/) — accessed 2026-11-21
- [Docling for IBM watsonx concepts](https://developer.dcls.saas.ibm.com/concepts/) — accessed 2026-11-21
