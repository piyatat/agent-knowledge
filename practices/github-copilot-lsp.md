---
id: github-copilot-lsp
title: Copilot CLI LSP servers — symbol ops vs grep
tags: [github, cli, tools, quality]
status: active
updated: 2026-11-01
when_to_use: Adding .github/lsp.json or ~/.copilot/lsp-config.json so Copilot CLI can go-to-def / rename
---

## Summary

**Copilot CLI** can attach **LSP servers** so definition, references, rename, and call-hierarchy come from the language’s analyzer instead of text search. The CLI picks the op from the prompt. Not Claude Code’s LSP tool (`claude-code-lsp`) and not repo semantic search (`github-copilot-code-search`).

## Notes

- Supported ops: go-to-definition, find references, hover, rename, document symbols, workspace symbol search, go-to-implementation, incoming/outgoing calls. Use them for precision and smaller structured results — listing symbols should not dump whole files into the transcript.
- Load order (first name wins): **`.github/lsp.json`** (repo) → plugin-provided servers (`github-copilot-plugins`) → **`~/.copilot/lsp-config.json`**. A repo file can disable or override a user/plugin server for every contributor. After the working directory is trusted, relevant servers start in the background.
- You must **install** the language server on the machine (or take one from a plugin). Plugin uninstall removes that server. Local MCP/LSP subprocesses can be forced into the CLI sandbox (`github-copilot-sandbox`); remote MCP is never local-sandboxed.
- The CLI uses an LSP when one is available for the language; you do not invoke it by name. Treat plugin-supplied servers as supply-chain code (`malicious-skills-supply-chain`).

## Sources

- [Using LSP servers with GitHub Copilot CLI](https://docs.github.com/en/copilot/concepts/customizations/lsp-servers) — accessed 2026-11-01
- [About local sandboxing for GitHub Copilot](https://docs.github.com/en/copilot/concepts/about-cloud-and-local-sandboxes) — accessed 2026-11-01
