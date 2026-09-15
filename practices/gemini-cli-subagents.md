---
id: gemini-cli-subagents
title: Gemini CLI subagents — @name, .gemini/agents, browser_agent
tags: [gemini, subagent, orchestration, isolation]
status: active
updated: 2026-09-15
when_to_use: Authoring .gemini/agents markdown, forcing @codebase_investigator, or enabling browser_agent
---

## Summary

Gemini CLI **subagents** are specialist loops exposed as tools. The parent keeps a short result; the child has its own prompt, tools, and window. Built-ins: `codebase_investigator`, `cli_help`, `generalist`, and opt-in `browser_agent`. Not Claude `.claude/agents` (`claude-code-subagents`) and not Cursor `.cursor/agents` (`cursor-custom-subagents`). `/model` does **not** change a child’s model.

## Notes

- Auto-delegate when the task matches a description, or force with `@name` at the start of the prompt (injects a “call this tool now” system note). `/agents` toggles live; `settings.json` `agents.overrides` persists `enabled` / `runConfig`. `experimental.enableAgents` defaults **true**.
- Custom files: `.gemini/agents/*.md` (project) or `~/.gemini/agents/*.md` (user). Frontmatter: `name` (slug), `description` (dispatch text), optional `kind` `local`|`remote`, `tools` (`*`, `mcp_*`, `mcp_server_*`), inline `mcpServers`, `model` (default inherit), `temperature`, `max_turns` (30), `timeout_mins` (10). Body = system prompt.
- Isolation: children cannot call other subagents even with `tools: ['*']`. Policy Engine `[[rule]]` can set `subagent = "name"` (`gemini-cli-policy-engine`). Plan mode allows built-in research agents; custom ones need a plan-mode allow rule (`gemini-cli-plan-mode`).
- `browser_agent` is **off** until `agents.overrides.browser_agent.enabled`. Needs Chrome ≥ 144; bundled `chrome-devtools-mcp`. `agents.browser.sessionMode`: `persistent` (`~/.gemini/cli-browser-profile/`), `isolated`, or `existing` (attach to remote-debug Chrome). First run is a consent dialog. Seatbelt forces isolated+headless; Docker needs `existing` + host `:9222`. Restrict with `allowedDomains`; `file://` / `javascript:` / password settings URLs are blocked. Form fill always confirms via the policy engine.
- Remote `kind: remote` (Agent Card URL/JSON, A2A auth) is a separate note (`gemini-cli-remote-subagents`). `experimental.adk.agentSessionSubagentEnabled` is another switch. `/model` never overrides child `model`. Visual browser (`visualModel` + `analyze_screenshot`) needs API key or Vertex — not “Sign in with Google.”

## Sources

- [Subagents](https://geminicli.com/docs/core/subagents/) — accessed 2026-09-15
- [Remote Subagents](https://geminicli.com/docs/core/remote-agents/) — accessed 2026-09-15
- [Plan Mode](https://geminicli.com/docs/cli/plan-mode/) — accessed 2026-09-13
- [Gemini CLI configuration](https://geminicli.com/docs/reference/configuration/) — accessed 2026-09-13
- [Model selection](https://geminicli.com/docs/cli/model/) — accessed 2026-09-13
