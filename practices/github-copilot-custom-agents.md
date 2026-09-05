---
id: github-copilot-custom-agents
title: GitHub Copilot custom agents — .agent.md profiles
tags: [github, subagent, orchestration, mcp]
status: active
updated: 2026-09-05
when_to_use: Authoring Copilot .agent.md profiles for CLI or cloud agent, or scoping tools/MCP per persona
---

## Summary

A Copilot **custom agent** is a Markdown **agent profile** (`.agent.md`) with YAML frontmatter. The main agent can delegate to it as a **subagent** with its own context. This is not the Actions-hosted cloud coding loop (`github-copilot-coding-agent`) and not Cursor `.cursor/agents`.

## Notes

- Locations (lowest level wins on the same filename minus `.md` / `.agent.md`): user `~/.copilot/agents`; repo `.github/agents`; org/enterprise `/agents` in `.github` or `.github-private`. Built-ins include Explore, Task, General purpose, Code review, Research; Rubber duck is auto-consulted and hidden from `/agent`.
- Frontmatter: required `description`; optional `name`, `target` (`vscode` | `github-copilot`), `tools`, `model`, `mcp-servers`, `metadata`. `disable-model-invocation: true` ≡ retired `infer: false` (must select manually). `user-invocable: false` hides it from pickers. Body max 30,000 characters. Prompt is the Markdown below the fence.
- `tools`: omit or `["*"]` = all; `[]` = none; list aliases (`read`, `edit`, `search`, `execute`/`shell`, `agent`, `web`, `todo`) or `server/tool` / `server/*`. Unrecognized names ignored. Cloud agent: `web`/`todo` N/A; GitHub + Playwright MCP are on by default (repo-scoped / localhost).
- Profile `mcp-servers`: YAML of the repo MCP JSON. `stdio` maps to cloud `local`. Secrets: Agents secrets/vars via `$VAR`, `${VAR}`, `${VAR:-default}`, or `${{ secrets.NAME }}`. Not used in VS Code/IDE profiles. Processing: out-of-box MCP → profile → repo settings.
- Invoke: `/agent`, mention in the prompt, or `copilot --agent=name --prompt "…"`. Cloud: agents panel / issue assignee dropdown. Versioning is the profile’s git SHA on the branch at assign time; the PR keeps that SHA.

## Sources

- [Custom agents configuration](https://docs.github.com/en/copilot/reference/custom-agents-configuration) — accessed 2026-09-05
- [Creating custom agents for Copilot cloud agent](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/customize-cloud-agent/create-custom-agents) — accessed 2026-09-05
- [Invoking custom agents](https://docs.github.com/en/copilot/how-tos/copilot-cli/use-copilot-cli/invoke-custom-agents) — accessed 2026-09-05
