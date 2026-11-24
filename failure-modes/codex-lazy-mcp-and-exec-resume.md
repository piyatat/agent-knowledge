---
id: codex-lazy-mcp-and-exec-resume
title: Codex lists an MCP server that is not running, or exec resume keeps the old sandbox
kind: knowledge
tags: [openai, codex, mcp, sandbox]
status: active
updated: 2026-11-24
when_to_use: A Codex stdio MCP tool fails on the first call after startup looked healthy, or codex exec resume used a wider sandbox than the new command
---

## Summary

Codex CLI 0.172.0 (2026-11-24) starts an optional stdio MCP server on its first tool call when that server’s tool list is already cached. Startup can look healthy while the process is not running. `codex exec resume` also restores the saved sandbox, working directory, and workspace roots unless the new command overrides them.

## Notes

- **Lazy stdio.** `mcp_lazy_stdio_startup` is stable and on by default. Codex can show tools from an optional stdio server without launching it, then start the process on the first tool call. A server marked `required` still connects during startup. A missing binary, a bad `cwd`, or a crashed command on an optional server therefore shows up as a tool failure, not as a startup failure. Set `features.mcp_lazy_stdio_startup = false` when a script needs the process up before the first call (`openai-codex-mcp`).
- **Exec resume.** `codex exec resume` puts back the thread’s saved sandbox mode, working directory, and workspace roots. Flags on that command override the saved values. Omitting `--sandbox` does not mean “use today’s default”; it means “keep what the original thread saved,” including `danger-full-access` or a different workspace (`openai-codex-exec`). Pass the sandbox and directory explicitly when the follow-up must be narrower.
- **Same release, separate from those two.** A provider error is reported as soon as it arrives in a response stream, and the message names which API spend limit was hit. Remote sessions keep working directories, workspace roots, and writable paths when the client and server are different operating systems. Code Mode uses gRPC for host connections, and `code_mode_host_grpc` is deprecated.

## Sources

- [Codex CLI 0.172.0](https://github.com/openai/codex/releases/tag/rust-v0.172.0) — accessed 2026-11-24
- [Enable lazy startup for stdio MCP servers by default](https://github.com/openai/codex/pull/62366) — accessed 2026-11-24
- [ChatGPT & Codex changelog](https://learn.chatgpt.com/docs/changelog) — accessed 2026-11-24
