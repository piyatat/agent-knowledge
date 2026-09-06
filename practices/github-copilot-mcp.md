---
id: github-copilot-mcp
title: GitHub Copilot MCP — repo settings vs CLI mcp-config.json
tags: [github, mcp, auth, security]
status: active
updated: 2026-09-06
when_to_use: Adding MCP for Copilot cloud agent / code review, or contrasting it with Copilot CLI MCP
---

## Summary

Copilot has **two MCP planes**. **Repo Settings → Copilot → MCP servers** (JSON `mcpServers`) is shared by **cloud agent** and **code review**. Local CLI uses **`~/.copilot/mcp-config.json`** (`github-copilot-cli`). Custom-agent YAML `mcp-servers` is a third overlay (`github-copilot-custom-agents`). Not Cursor `mcp.json`.

## Notes

- Cloud/review: GitHub MCP + Playwright MCP are **on by default**. Extra servers: `type` `local`/`stdio`/`http`/`sse`; local needs `command`+`args`; remote needs `url` (+ optional `headers`). **`tools` is required** — allowlist read-only names or `"*"`. Cloud agent **will not prompt** before calling enabled tools. Resources and prompts are **not** supported. **OAuth remote servers are not supported**.
- Secrets: only Agents secrets/vars whose names start with **`COPILOT_MCP_`**. Substitution: `$VAR`, `${VAR}`, `${VAR:-default}` in `env`, `headers`, and most strings. GitHub MCP default token is **read-only current repo**; widening uses `https://api.githubcopilot.com/mcp/readonly` (drop `/readonly` for write toolsets) plus `COPILOT_MCP_GITHUB_PERSONAL_ACCESS_TOKEN` and `X-MCP-Toolsets`.
- Processing order for cloud agent: out-of-box MCP → profile `mcp-servers` → repo settings. Disable MCP for code review only: Settings → Copilot → Code review → “Allow Copilot to use MCP tools…”. Validate via session logs (“Start MCP Servers” / “Setting up environment”).
- CLI: `copilot mcp add --transport http NAME URL` or `/mcp add`; GitHub MCP is preinstalled. IDE `mcp.json` / `.vscode/mcp.json` does **not** automatically become repo settings — adapt (`tools` required, `inputs`/`envFile` → `env`).
- Extra runner deps: `.github/workflows/copilot-setup-steps.yml`. Treat issue/PR text that steers MCP as injection (`mcp-server-trust-failures`).

## Sources

- [Configure MCP servers for your repository](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/configure-mcp-servers) — accessed 2026-09-06
- [Copilot customization cheat sheet](https://docs.github.com/en/copilot/reference/customization-cheat-sheet) — accessed 2026-09-06
- [Custom agents configuration](https://docs.github.com/en/copilot/reference/custom-agents-configuration) — accessed 2026-09-06
