---
id: llms-txt
title: llms.txt — curated Markdown index for agents
kind: protocol
tags: [docs, discovery, markdown, agents]
status: active
updated: 2026-11-14
when_to_use: Publishing a site index agents can fetch before scraping HTML, or choosing which llms.txt covers a path
---

## Summary

**llms.txt** (proposal **v2**, updated 2026-08-10) is a small Markdown file that points agents at curated, LLM-readable pages. It can sit at `/llms.txt` or any subpath, and it covers URLs under that path. The most specific file wins. It is a community proposal with a fixed shape, not an IETF or AAIF standard. Not `robots.txt`, not `sitemap.xml`, and not a live `/ask` endpoint (`nlweb-site-mcp`).

## Notes

- **Shape, in order:** optional BOM; a required H1 (site or project name); an optional blockquote summary; zero or more non-heading blocks of guidance; then zero or more H2 sections whose bodies are link lists. Each item is `[name](url)`, optionally followed by `: notes`. A section titled **Optional** is the convention for links an agent may skip when context is tight. The file itself should stay small; detail lives behind the links.
- **Finding Markdown:** pages agents need should also exist as clean Markdown at the same URL with `.md` appended (`page.html.md`) or with the extension replaced (`page.md`). Extension-less URLs use `index.html.md` or `index.md`. Recommend `rel="alternate" type="text/markdown"` for the Markdown twin and `rel="describedby"` for the llms.txt that covers the page, as HTML `<link>` or an HTTP `Link` header. The header works for non-HTML responses and can be set at the CDN.
- **Where it sits:** any path, like `index.html`, so a project site on a shared host can publish `/docs/llms.txt` without writing `/.well-known/`. When two files cover a URL, use the longer path. Agents are expected to read the index, then fetch only the links they need. Point those links at the Markdown versions, not at HTML chrome.
- **What it is not:** `robots.txt` is an access policy for crawlers. `sitemap.xml` lists indexable human pages, often too many to fit in context, and usually omits Markdown twins and off-site references. llms.txt is fetched on demand while an agent answers a question. Training crawls may also read it; that is not the design center.
- **Who emits one:** Mintlify and GitBook generate a file for hosted docs. The proposal also names Yoast, AIOSEO, and Wix generators, plus VitePress, Docusaurus, and Drupal plugins. OpenAI, Anthropic, and Gemini publish llms.txt for their own developer docs. Chrome Lighthouse checks for one in its agentic browsing audits.
- **Alternatives:** WebMCP (`webmcp-browser-tools`) when the page should expose callable tools, not a reading list. An MCP server card (`mcp-server-cards`) when the client needs transport metadata before connecting. `AGENTS.md` (`agents-md-open-format`) for instructions to a coding agent inside a repo, not a public site map.
- **Caveats:** the H1 is the only required section; a file that is only a dump of every URL misses the point of the format. Descriptions should say what the linked page is for. Test by giving an agent only the file and asking a question the site should answer. The spec is still an informal proposal; parsers should tolerate the documented order and not invent extra required keys.

## Sources

- [The /llms.txt file, v2](https://llmstxt.org/) — accessed 2026-11-14
