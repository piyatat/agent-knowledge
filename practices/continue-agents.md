---
id: continue-agents
title: Continue — acquired by Cursor; leftover config.yaml
tags: [continue, mcp, rules, orchestration]
status: active
updated: 2026-10-04
when_to_use: Encountering leftover Continue config.yaml / .continue/rules, or deciding not to start new work on Continue
---

## Summary

**Continue** was **acquired by Cursor** (homepage notice; coverage ~2026-06-16). Recurring billing stopped; hosted data had an export deadline of **2026-07-15**. The Apache-2.0 repo remains as a community handoff and is **not a maintained vendor product**. Prefer Cursor (`cursor-mcp-json`, `agents-md-and-rules-budget`) or another live agent for new work. Leftover **`config.yaml`** (schema `v1`) may still appear in checkouts: required `name`, `version`, `schema`, plus `models`, `rules`, `prompts`, `mcpServers`, `context`, `docs`, `data`. Agent mode needed **`tool_use`**. MCP worked **only in Agent mode**. `config.json` was already deprecated. Not Cline (`.cline/`) and not Cursor `mcp.json`.

## Notes

- Edit from the Chat sidebar Agent selector → gear. Models have `roles` (`chat`, `autocomplete`, `embed`, …) and optional `capabilities` (`tool_use`, `image_input`) to override autodetection. `chatOptions.baseAgentSystemMessage` / `basePlanSystemMessage` replace Agent/Plan system prompts per model.
- Rules join the system message for Agent, Chat, and Edit (**not** autocomplete/apply). Sources: `config.yaml` `rules:` (strings, `uses: hub/slug`, `uses: file://…`) and `.continue/rules/*.md` (lexicographic; prefix `01-` to order). Frontmatter: `name`, `globs`, `regex` (file **content**), `description`, `alwaysApply` (`true` always; `false` = globs match or agent pulls by description; unset = no globs **or** globs match). Agent can `create_rule_block` when enabled. Toolbar pen shows the stacked system message.
- MCP: `mcpServers` in config (`stdio` `command`/`args`/`env`/`cwd`; `sse` / `streamable-http` + `url` + `requestOptions`). Or drop Claude/Cursor/Cline **JSON** files in **`.continue/mcpServers/`** (plural). Hub blocks: `uses: continuedev/…`. Secrets: `${{ secrets.NAME }}` — do not paste keys into yaml (`agent-output-secret-scanning`).
- `data` can POST or write `.jsonl` (`level: noCode` drops prompts/code). Treat leftover MCP and old hub slugs as supply chain (`mcp-registry-admission`). Do not assume `continuedev/continue` or `docs.continue.dev` still receive product updates.

## Sources

- [Continue has joined Cursor](https://continue.dev/) — accessed 2026-10-04
- [continuedev/continue](https://github.com/continuedev/continue) — accessed 2026-10-04
- [config.yaml reference](https://docs.continue.dev/reference) — accessed 2026-09-22
- [Continue MCP](https://docs.continue.dev/customize/deep-dives/mcp) — accessed 2026-09-22
- [Continue rules](https://docs.continue.dev/customize/deep-dives/rules) — accessed 2026-09-22
- [Customization overview](https://docs.continue.dev/customize/overview) — accessed 2026-09-22
