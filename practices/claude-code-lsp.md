---
id: claude-code-lsp
title: Claude Code LSP — language-server code intelligence
tags: [claude, tools, plugins, quality]
status: active
updated: 2026-09-09
when_to_use: Installing an LSP plugin so Claude can jump to defs / see type errors, or writing .lsp.json
---

## Summary

Claude Code’s **LSP tool** is enabled by **code-intelligence plugins**. The plugin configures how to spawn a language server; **you install the binary**. After edits, diagnostics come back in the same turn; navigation (defs, refs, hover, symbols) beats grep. This is not MCP (`claude-code-mcp`) and not a skill. Cloud sessions do **not** run LSP (`claude-code-plugins`).

## Notes

- Official marketplace plugins (binary not bundled): `clangd-lsp`, `csharp-lsp` (`csharp-ls`), `gopls-lsp`, `jdtls-lsp`, `kotlin-lsp`, `lua-lsp`, `php-lsp` (`intelephense`), `pyright-lsp` (`pyright-langserver`), `rust-analyzer-lsp`, `swift-lsp` (`sourcekit-lsp`), `typescript-lsp`. Install the binary first; `Executable not found in $PATH` appears under `/plugin` Errors. Claude may prompt to install the matching plugin when it sees the server already on PATH.
- Custom plugin: `.lsp.json` at plugin root or inline in `plugin.json`. Typical fields: `command`, `args`, `extensionToLanguage`, transport `stdio`/`socket`, `env`, `initializationOptions`, `settings`, `workspaceFolder`, startup/shutdown timeouts, `restartOnCrash`. Users still need the binary. Invalid config is skipped (`claude --debug`); failed start shows in Errors.
- Use when large-repo grep/read loops are burning tokens (`tool-result-observation-budgets`). Pair with `Read` deny rules and `claudeMdExcludes` so generated/vendor trees stay out of context. Enable for a repo via `enabledPlugins` in `.claude/settings.json` when `/plugin` is unavailable (cloud).
- Treat third-party LSP plugins like other plugin code (`malicious-skills-supply-chain`). Official marketplace install needs GitHub network; air-gapped teams host an internal marketplace.

## Sources

- [Discover and install plugins — code intelligence](https://code.claude.com/docs/en/discover-plugins) — accessed 2026-09-09
- [Plugins reference — LSP servers](https://code.claude.com/docs/en/plugins-reference) — accessed 2026-09-09
- [Create plugins — add LSP servers](https://code.claude.com/docs/en/plugins) — accessed 2026-09-09
- [Large codebases](https://code.claude.com/docs/en/large-codebases) — accessed 2026-09-09
