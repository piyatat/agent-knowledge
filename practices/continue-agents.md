---
id: continue-agents
title: Continue — config.yaml agents, rules, MCP
tags: [continue, mcp, rules, orchestration]
status: active
updated: 2026-09-22
when_to_use: Authoring Continue config.yaml / .continue/rules, or adding MCP for Agent mode
---

## Summary

**Continue** agents are a **`config.yaml`** (schema `v1`): required `name`, `version`, `schema`, plus `models`, `rules`, `prompts`, `mcpServers`, `context`, `docs`, `data`. Agent mode needs a model with **`tool_use`**. MCP works **only in Agent mode**. `config.json` is deprecated. Not Cline (`.cline/`) and not Cursor `mcp.json`.

## Notes

- Edit from the Chat sidebar Agent selector → gear. Models have `roles` (`chat`, `autocomplete`, `embed`, …) and optional `capabilities` (`tool_use`, `image_input`) to override autodetection. `chatOptions.baseAgentSystemMessage` / `basePlanSystemMessage` replace Agent/Plan system prompts per model.
- Rules join the system message for Agent, Chat, and Edit (**not** autocomplete/apply). Sources: `config.yaml` `rules:` (strings, `uses: hub/slug`, `uses: file://…`) and `.continue/rules/*.md` (lexicographic; prefix `01-` to order). Frontmatter: `name`, `globs`, `regex` (file **content**), `description`, `alwaysApply` (`true` always; `false` = globs match or agent pulls by description; unset = no globs **or** globs match). Agent can `create_rule_block` when enabled. Toolbar pen shows the stacked system message.
- MCP: `mcpServers` in config (`stdio` `command`/`args`/`env`/`cwd`; `sse` / `streamable-http` + `url` + `requestOptions`). Or drop Claude/Cursor/Cline **JSON** files in **`.continue/mcpServers/`** (plural). Hub blocks: `uses: continuedev/…`. Secrets: `${{ secrets.NAME }}` — do not paste keys into yaml (`agent-output-secret-scanning`).
- `data` can POST or write `.jsonl` (`level: noCode` drops prompts/code). Treat MCP and hub slugs as supply chain (`mcp-registry-admission`). Pair rules with a short always-on budget (`agents-md-and-rules-budget`).

## Sources

- [config.yaml reference](https://docs.continue.dev/reference) — accessed 2026-09-22
- [Continue MCP](https://docs.continue.dev/customize/deep-dives/mcp) — accessed 2026-09-22
- [Continue rules](https://docs.continue.dev/customize/deep-dives/rules) — accessed 2026-09-22
- [Customization overview](https://docs.continue.dev/customize/overview) — accessed 2026-09-22
