---
id: github-copilot-cli
title: GitHub Copilot CLI — terminal agent vs cloud coding agent
tags: [github, cli, permissions, sandbox]
status: active
updated: 2026-09-05
when_to_use: Running copilot in a terminal or -p script, or contrasting it with Copilot cloud agent
---

## Summary

**GitHub Copilot CLI** (`copilot`) is a local terminal agent: interactive chat/plan, or programmatic `-p` / `--prompt`. It is not the Actions-hosted **cloud coding agent** (`github-copilot-coding-agent`), though `/delegate` and `--resume` can hand a session across. Linux, macOS, Windows (PowerShell / WSL).

## Notes

- First prompt: trust this folder (session-only or remember). Tool prompts: once / rest of session / reject with optional feedback. `Shift+Tab` cycles **plan** mode. `!cmd` runs a shell without the model. `/cwd` or `/add-dir` for other trees. `--continue` resumes the last local session.
- Permissions: `--allow-tool` / `--deny-tool` (deny wins, including over `--allow-all`). `--allow-all` / `--yolo` = all tools + paths + URLs — isolated environments only; never alias it. `permissions.disableBypassPermissionsMode` suppresses those flags. Help: `copilot help permissions`.
- Sandbox (public preview / experimental): `/sandbox enable` or `--sandbox` restricts commands/MCP, not the CLI process. `--cloud` runs the whole session in an isolated cloud sandbox (inherits cloud-agent policies). Pair `--allow-all` with a sandbox.
- MCP lives in `~/.copilot/mcp-config.json` (`COPILOT_HOME`). GitHub MCP is preinstalled. `copilot mcp add --transport http NAME URL` or `/mcp add`. Custom instructions: `.github/copilot-instructions.md`, path-specific `.github/instructions/**/*.instructions.md`, `AGENTS.md`.
- Context: `/usage`, `/context`, `/compact`; auto-compact near 95%. `/every` / `/after` schedule prompts. Custom agents and skills are separate notes. ACP: Copilot CLI can also be an ACP server.

## Sources

- [About GitHub Copilot CLI](https://docs.github.com/en/copilot/concepts/agents/copilot-cli/about-copilot-cli) — accessed 2026-09-05
- [Using GitHub Copilot CLI](https://docs.github.com/en/copilot/how-tos/copilot-cli/use-copilot-cli/overview) — accessed 2026-09-05
- [Allowing and denying tool use](https://docs.github.com/en/copilot/how-tos/copilot-cli/use-copilot-cli/allowing-tools) — accessed 2026-09-05
