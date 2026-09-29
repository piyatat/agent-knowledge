---
id: github-copilot-custom-agents
title: GitHub Copilot custom agents — .agent.md profiles
tags: [github, subagent, orchestration, mcp]
status: active
updated: 2026-09-29
when_to_use: Authoring Copilot .agent.md profiles for CLI, cloud agent, or IDE chat, or scoping tools/MCP per persona
---

## Summary

A Copilot **custom agent** is a Markdown **agent profile** (`.agent.md`) with YAML frontmatter. The main agent can delegate to it as a **subagent** with its own context. IDE creation is **public preview** in JetBrains, Eclipse, and Xcode. This is not the Actions-hosted cloud coding loop (`github-copilot-coding-agent`) and not Cursor `.cursor/agents`.

## Notes

- Locations (lowest level wins on the same filename minus `.md` / `.agent.md`): user `~/.copilot/agents` (Visual Studio also documents `%USERPROFILE%\.github\agents`); repo `.github/agents`; org/enterprise `/agents` in `.github` or `.github-private`. Built-ins include Explore, Task, General purpose, Code review, Research; Rubber duck is auto-consulted and hidden from `/agent`.
- Frontmatter: required `description`; optional `name`, `target` (`vscode` | `github-copilot`), `tools`, `model`, `mcp-servers`, `metadata`, `handoffs`. `disable-model-invocation: true` ≡ retired `infer: false` (must select manually). `user-invocable: false` hides it from pickers. Body max 30,000 characters. Prompt is the Markdown below the fence. `argument-hint` and `handoffs` are **ignored** on github.com cloud agent.
- `tools`: omit or `["*"]` = all; `[]` = none; list aliases (`read`, `edit`, `search`, `execute`/`shell`, `agent`, `web`, `todo`) or `server/tool` / `server/*`. Unrecognized names ignored. Cloud agent: `web`/`todo` N/A; GitHub + Playwright MCP are on by default (repo-scoped / localhost).
- Profile `mcp-servers`: YAML of the repo MCP JSON. `stdio` maps to cloud `local`. Secrets: Agents secrets/vars via `$VAR`, `${VAR}`, `${VAR:-default}`, or `${{ secrets.NAME }}`. Not used in VS Code/IDE profiles. Processing: out-of-box MCP → profile → repo settings.
- Invoke: `/agent`, mention in the prompt, or `copilot --agent=name --prompt "…"`. Cloud: agents panel / issue assignee dropdown. Versioning is the profile’s git SHA on the branch at assign time; the PR keeps that SHA. **IDEs** (preview): Chat agents dropdown → Create an agent / Configure Agents… → Add; Xcode **Customize Agent** can set model, tools, and `handoffs`. Feature matrix: custom agents ✓ in VS Code / Visual Studio / Eclipse; **P** in JetBrains and Xcode (`github-copilot-xcode-eclipse`, `github-copilot-visual-studio`).

## Sources

- [Custom agents configuration](https://docs.github.com/en/copilot/reference/custom-agents-configuration) — accessed 2026-09-29
- [Creating custom agents in your IDE](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/cloud-agent/create-custom-agents-in-your-ide) — accessed 2026-09-29
- [Creating custom agents for Copilot cloud agent](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/customize-cloud-agent/create-custom-agents) — accessed 2026-09-05
- [Invoking custom agents](https://docs.github.com/en/copilot/how-tos/copilot-cli/use-copilot-cli/invoke-custom-agents) — accessed 2026-09-05
- [Copilot feature matrix](https://docs.github.com/en/copilot/reference/copilot-feature-matrix) — accessed 2026-09-29

