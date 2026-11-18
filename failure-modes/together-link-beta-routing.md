---
id: together-link-beta-routing
title: Together Link ignores a late --model flag, and a hard Claude turn bills Anthropic
kind: knowledge
tags: [together, routing, billing, beta]
status: active
updated: 2026-11-18
when_to_use: A Together Link session billed Anthropic, ignored a model flag, or hung in a headless Claude Code run
---

## Summary

Together Link is beta. The model flag has to come before the tool name, a hard Claude Code turn can bill a different company, and one id in the Link model table is already past its serverless removal date on the deprecations page (`together-link`).

## Notes

- **Flag order.** `--main` and the model id go on the `togetherlink` command **before** the tool name. A `--model` flag after the tool name is refused or ignored, because some agents' own aliases do not select gateway routes. The shortcuts `tclaude`, `tcodex`, `topencode`, and `tpi` expand with the tool name first, so they cannot pin a model. Claude Code's `/model` menu is a separate mapping: Opus is Kimi K3, Fable is GLM 5.3, Sonnet is DeepSeek V4.1 Flash. Desktop apps have their own menus.
- **Who pays.** Straightforward `auto` turns bill Together at the serving model's serverless rate. A harder turn on Claude Code or Claude Desktop bills Claude Opus to the saved Anthropic key. With no Anthropic key, every request stays on Together. Codex, OpenCode, Pi, and ChatGPT Desktop never send the Anthropic key. The session prints a cost summary on exit. Gateway spend across sessions is `togetherlink usage`. Image generation in Claude Code, Claude Desktop, and ChatGPT Desktop is tracked apart from tokens.
- **Stale ids.** The Link table still lists `Qwen/Qwen3.8-2.4T-A95B`. The deprecations page schedules that serverless id for removal on **2026-11-04**, which is before this note's access date, and says a catalog row can outlive the route. Confirm with `togetherlink models` and the deprecations page before pinning it. `MiniMaxAI/MiniMax-M3` is on the same page for **2026-11-06**; the inference quickstart already uses `MiniMaxAI/MiniMax-M3.1-Flash`.
- **Sessions that hang or keep state.** A headless Claude Code launch that inherits an open stdin waits for more input. CLI config lasts for that launch. The Claude Desktop Link profile stays until you turn it off or reset it. Reset asks for confirmation and removes imported copies. ChatGPT reset deletes the Link profile, including its local tasks, and leaves `~/.codex` alone. Those desktop profiles store the Together API key on disk. Link does not read a project `.env`.
- **Version gates.** OpenCode 1 is rejected. Pi older than **0.80.8** is rejected. On Node.js older than **22.19**, a Pi install can land on **0.74**, which Link also rejects. Link does not install the coding agents.

## Sources

- [Power your coding agents with open models](https://docs.together.ai/docs/togetherlink) — accessed 2026-11-18
- [Deprecations](https://docs.together.ai/docs/deprecations) — accessed 2026-11-18
- [Quickstart](https://docs.together.ai/docs/quickstart) — accessed 2026-11-18
