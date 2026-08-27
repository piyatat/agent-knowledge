---
id: cursor-codebase-search
title: Cursor Agent search — Instant Grep, embeddings, Explore
tags: [cursor, indexing, context, tools]
status: active
updated: 2026-08-27
when_to_use: Debugging why Agent missed a symbol, choosing grep vs semantic search, or explaining indexing privacy vs .cursorignore
---

## Summary

Agent search is two layers: **Instant Grep** (exact/regex, on by default) and **embeddings** (semantic). Broad hunts should go to the **Explore** subagent so raw hits do not fill the parent window. Indexing is not Cloud Agent disk storage.

## Notes

- Prefer grep when the user names a symbol, error string, or regex. Instant Grep is Cursor’s search engine (changelog 2.1); it supports full regex and word boundaries. No extra config.
- Semantic index: filenames obfuscated, chunks encrypted, plaintext held in memory then discarded. At search time, embeddings come from Cursor and chunks decrypt **on the client**. Optional `.cursor/keys` `path_decryption_key` customizes path encryption.
- Team index sharing speeds similar codebases; file ACLs still apply. `.cursorignore` hides files from Agent/Tab/@; `.cursorindexingignore` drops them from search only (`cursor-ignore-files`).
- Explore: faster model, own window, parallel searches, returns a summary. Agent may spawn it automatically; users can ask. Use it instead of dumping dozens of files into the parent (`cursor-custom-subagents`, `tool-result-observation-budgets`).
- Multi-root VS Code workspaces: every root is indexed for Agent. Git-root features such as worktrees are disabled. **Cloud Agents do not support multi-root workspaces.**
- US data residency includes Tab and semantic search for supported models, but indexing is **not** guaranteed US-only if the repo itself lives outside the US (`cursor-privacy-mode`).

## Sources

- [Agent tools — Search](https://cursor.com/docs/agent/tools/search) — accessed 2026-08-27
- [Ignore file](https://cursor.com/docs/reference/ignore-file) — accessed 2026-08-27
- [Privacy and Data Governance — indexing / residency](https://cursor.com/docs/enterprise/privacy-and-data-governance) — accessed 2026-08-27
