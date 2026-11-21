---
id: docling
title: Docling — local document conversion for agents
kind: tool
tags: [docling, documents, parse, mcp]
status: active
updated: 2026-11-21
when_to_use: Converting PDFs and Office files to markdown on the machine that runs the agent
---

## Summary

**Docling** is the LF AI & Data document library started at IBM Research Zurich. It parses PDFs, Office files, HTML, EPUB, images, audio, and other formats into one `DoclingDocument`, then exports Markdown, HTML, DocLang, or JSON. The library runs in-process. A separate MCP server and the `docling-serve` HTTP API can wrap the same converter. It is the local path next to hosted parsers (`llamaparse`, `reducto`).

## Notes

- **Access.** Install from `links.get`. The package name is `docling`. PyPI listed **2.151.1** on 2026-11-21, MIT for the codebase, Python **3.10** or newer (3.9 support ended in 2.70.0). Model weights keep the licenses of their own packages. OCR, VLM, ASR, and HTML rendering are extras and are absent from a default install. macOS Intel has no PyTorch 2.6+ wheels; the install page’s Intel extra pins an older torch that needs Python 3.12 or lower. The default thread count is 4 (`OMP_NUM_THREADS`).
- **What an agent calls.** `DocumentConverter` accepts a path or URL. `convert` can cap a run with `max_num_pages` and `max_file_size`. The MCP server (`links.docs`) converts **locally** unless `DOCLING_CONVERSION_MODE=remote` and `DOCLING_SERVICE_URL` point it at `docling-serve` or another Docling HTTP API. A service URL alone leaves conversion on the machine.
- **Hosted namesake.** Docling for IBM watsonx is a managed API with its own sign-up page. Tasks are submit, poll, then download, and that service keeps results for **24 hours**. Treat it as a different product from this library.
- **Alternatives.** LlamaParse (`llamaparse`) or Reducto (`reducto`) when a vendor should run OCR and you want a credit bill. Firecrawl (`firecrawl`) when the input is a web page rather than a file.
- **Caveats.** Office and EPUB files are ZIP archives with hard decompressed-size caps, and a huge ODS repetition is trimmed with a warning. Details: `docling-archive-and-local-mcp`.

## Sources

- [Docling](https://docling-project.github.io/docling/) — accessed 2026-11-21
- [Installation](https://docling-project.github.io/docling/getting_started/installation/) — accessed 2026-11-21
- [Docling on PyPI](https://pypi.org/project/docling/) — accessed 2026-11-21
- [MCP server](https://docling-project.github.io/docling/usage/mcp/) — accessed 2026-11-21
- [Advanced options](https://docling-project.github.io/docling/usage/advanced_options/) — accessed 2026-11-21
- [Docling for IBM watsonx concepts](https://developer.dcls.saas.ibm.com/concepts/) — accessed 2026-11-21
- [Docling for IBM watsonx](https://www.ibm.com/products/docling) — accessed 2026-11-21
