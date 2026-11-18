---
id: together-link
title: Together Link — launch a coding agent on Together models
kind: service
tags: [together, routing, models, coding]
status: active
updated: 2026-11-18
when_to_use: Driving Claude Code, Codex, OpenCode, or Pi through Together-hosted models instead of one provider key
---

## Summary

**Together Link** (beta) starts Claude Code, Codex, OpenCode 2, Pi, Claude Desktop, or ChatGPT Desktop on models Together hosts. It does not rewrite your normal config files. The default route is the virtual model `auto`. The raw API is **Together AI** (`together-ai`). **Fireworks Nexus** (`fireworks-nexus`) is the closer product when the harness is Cursor or Copilot, or when you want OpenAI on the same router.

## Notes

- **Access.** The docs page linked from `links` is where the installer is published. You need a Together API key, macOS or Linux, and the coding agent already installed. Link does not install Claude Code, Codex, OpenCode, or Pi. OpenCode must be version **2**. Pi must be **0.80.8** or newer, which needs Node.js **22.19** or newer. Windows is not in the requirements.
- **Auth.** Link checks `--api-key`, then its saved configuration, then `TOGETHER_API_KEY`. It does not read a project `.env`. An optional Anthropic key is used only by `auto` inside Claude Code and Claude Desktop. Skip it and every request stays on Together.
- **Routing and price (Link docs, 2026-11-18).** `auto` classifies each request. Straightforward requests use Together models at standard serverless rates. A harder request on Claude Code or Claude Desktop, and only when an Anthropic key is saved, goes to Claude Opus and bills that Anthropic account. Codex, OpenCode, Pi, and ChatGPT Desktop stay on Together models. Pin a model with `--main` and the full id **before** the tool name. The published table lists Kimi K3 (`moonshotai/Kimi-K3`, Claude Opus tier) at **$2.70 / $0.27 / $13.50**, GLM 5.3 (`zai-org/GLM-5.3`, Fable) at **$1.40 / $0.26 / $4.40**, DeepSeek V4.1 Flash (Sonnet) at **$0.30 / $0.01 / $1.20**, and Qwen 3.8 (`Qwen/Qwen3.8-2.4T-A95B`, no Claude tier) at **$2.00 / $0.25 / $6.00**, per million input, cached input, and output tokens, each with a **1M** context. That table can lag the deprecations page (`together-link-beta-routing`). In Claude Code, `/model` maps Opus to Kimi K3, Fable to GLM 5.3, and Sonnet to DeepSeek V4.1 Flash.
- **What a launch changes.** CLI sessions get a temporary config that is removed when the session ends. Claude Desktop, Cowork, and Code use a persistent Link-owned profile. ChatGPT Desktop uses `~/.codex-togetherlink` and does not rewrite `~/.codex`. Desktop profiles store the Together API key on disk. Codex keeps its native web search. The ChatGPT Desktop profile turns native web search off. OpenCode's web search is whatever you connect inside OpenCode, not the gateway.
- **Alternatives.** Fireworks Nexus when the harness is Cursor, the Copilot app, or you want Anthropic and OpenAI credentials on one router. A Together API key in your own loop (`together-ai`) when you are not launching those CLIs. The agent's own login when you want that vendor's closed models only.
- **Caveats.** The docs call Link beta: commands, routing, and the model list may change. A `--model` flag after the tool name does not select the gateway route. A headless Claude Code session that inherits an open stdin waits for more input (`together-link-beta-routing`).

## Sources

- [Power your coding agents with open models](https://docs.together.ai/docs/togetherlink) — accessed 2026-11-18
- [Deprecations](https://docs.together.ai/docs/deprecations) — accessed 2026-11-18
