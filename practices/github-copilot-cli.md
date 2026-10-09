---
id: github-copilot-cli
title: GitHub Copilot CLI — terminal agent vs cloud coding agent
tags: [github, cli, permissions, sandbox]
status: active
updated: 2026-10-09
when_to_use: Running copilot in a terminal or -p script, rewinding a session, or contrasting it with Copilot cloud agent
---

## Summary

**GitHub Copilot CLI** (`copilot`) is a local terminal agent: interactive chat/plan, or programmatic `-p` / `--prompt`. It is not the Actions-hosted **cloud coding agent** (`github-copilot-coding-agent`), though `/delegate` and `--resume` can hand a session across. Linux, macOS, Windows (PowerShell / WSL).

## Notes

- First prompt: trust this folder (session-only or remember). Tool prompts: once / rest of session / reject with optional feedback. `Shift+Tab` cycles **plan** mode. `!cmd` runs a shell without the model. `/cwd` or `/add-dir` for other trees. `--continue` resumes the last local session.
- **Rewind** (interactive, idle, empty input): `Esc` `Esc`, `/undo`, or `/rewind`. Pick a prior user prompt (ten visible; arrow for more). **Conversation only** truncates history; **Conversation + files** also restores Copilot-tracked edits (editing tools, shell, sub-agents — Git not required) and **skips** files you changed afterward or that were too large to back up. Applied to the state **before** that prompt ran; the prompt is put back in the input to edit/resubmit. **Cannot undo.** Unavailable for remote-backed sessions, in-progress work, or before the first prompt. Resume of a pre-tracking session may offer conversation-only. Verify with `! git status` / `! git diff`. JetBrains “edit earlier message” is the IDE equivalent (`github-copilot-jetbrains`).
- Permissions: `--allow-tool` / `--deny-tool` (deny wins, including over `--allow-all`). `--allow-all` / `--yolo` = all tools + paths + URLs — isolated environments only; never alias it. `/permissions [default|assisted|allow-all|show]` is the canonical mode switch (`github-copilot-assisted-permissions`). `permissions.disableBypassPermissionsMode` suppresses allow-all; `"allow-auto-only"` still permits Assisted. Help: `copilot help permissions`.
- Sandbox: CLI **1.0.93** makes `/sandbox` and `--sandbox` available to **all users** (no experimental flag). Restricts commands/MCP, not the CLI process. `--cloud` runs the whole session in an isolated cloud sandbox (inherits cloud-agent policies). Pair `--allow-all` with a sandbox (`github-copilot-sandbox`).
- MCP lives in `~/.copilot/mcp-config.json` (`COPILOT_HOME`). GitHub MCP is preinstalled. `copilot mcp add --transport http NAME URL` or `/mcp add`. **1.0.93:** MCP config changes apply **between turns** without restarting. **1.0.94:** `copilot mcp add` recovers after interrupted config init; enable/disable works **before** server discovery without starting MCP servers. Custom instructions: `.github/copilot-instructions.md`, path-specific `.github/instructions/**/*.instructions.md`, `AGENTS.md`.
- Models: `/model` or `--model`. **1.0.93** picker recommends GPT-6.1 Sol, GPT-6 Astra/Luna, Claude 5.5. **1.0.94** (2026-10-08) adds Claude Haiku 5.5 to the picker and `--model` completions. **1.0.94-0** discovers a running Ollama instance in `/model` (`github-copilot-cli-local-models`). Not Copilot Auto tiers (`github-copilot-auto-model`).
- Context: `/usage`, `/context`, `/compact`; auto-compact near 95%. **1.0.95** (2026-10-09): `--context` now applies to **new and resumed ACP sessions** instead of silently using the default or previously saved tier. `/every` / `/after` schedule prompts. Memory: `/memory on|off|show` (persists); `-p` needs `--enable-memory`. Details: `github-copilot-memory`. Custom agents and skills are separate notes. ACP: Copilot CLI can also be an ACP server. **1.0.95** uses native Microsoft Entra broker auth on macOS when available (browser fallback).
- Desktop GUI: `/computer on|show|off` (public preview, macOS/Windows local sessions) — `github-copilot-computer-use`. Remote steer of a **running** interactive session: `/remote on` or `copilot --remote` (not `-p`) — `github-copilot-remote-control`.
- Parallel / scripted orchestration (often needs `/experimental on`): `/fleet` or `--fleet` for a model-chosen subagent split (`github-copilot-fleet`); coded **dynamic workflows** via chat or `copilot workflow run NAME` (`github-copilot-dynamic-workflows`). Repo-event automation that must live in git is `gh aw` (`github-agentic-workflows`), not a long-lived CLI session.
- **Content exclusions** (Business/Enterprise): as of 2026-09-02 the **app and CLI** honor org/repo/enterprise path policies (`github-copilot-content-exclusions`). IDE **Agent/Edit** Chat modes still do not. Do not treat exclusions as a sandbox (`github-copilot-sandbox`).

## Sources

- [About GitHub Copilot CLI](https://docs.github.com/en/copilot/concepts/agents/copilot-cli/about-copilot-cli) — accessed 2026-09-05
- [Using GitHub Copilot CLI](https://docs.github.com/en/copilot/how-tos/copilot-cli/use-copilot-cli/overview) — accessed 2026-09-05
- [Allowing and denying tool use](https://docs.github.com/en/copilot/how-tos/copilot-cli/use-copilot-cli/allowing-tools) — accessed 2026-09-05
- [Content exclusions generally available in Copilot app and CLI](https://github.blog/changelog/2026-09-02-content-exclusions-generally-available-in-copilot-app-and-cli/) — accessed 2026-09-15
- [Copilot Memory controls for deletion, scope, and CLI](https://github.blog/changelog/2026-05-26-copilot-memory-has-more-controls-for-deletion-scope-and-the-copilot-cli/) — accessed 2026-09-27
- [Rolling back changes in Copilot CLI](https://docs.github.com/en/copilot/how-tos/copilot-cli/use-copilot-cli/roll-back-changes) — accessed 2026-09-30
- [Canceling and rolling back (Copilot CLI)](https://docs.github.com/en/copilot/concepts/agents/copilot-cli/cancel-and-roll-back) — accessed 2026-09-30
- [Using GitHub Copilot CLI to interact with desktop applications](https://docs.github.com/en/copilot/how-tos/copilot-cli/use-copilot-cli/computer-use) — accessed 2026-10-01
- [Steering a GitHub Copilot CLI session from another device](https://docs.github.com/en/copilot/how-tos/copilot-cli/use-copilot-cli/steer-remotely) — accessed 2026-10-01
- [Running tasks in parallel with the /fleet command](https://docs.github.com/en/copilot/concepts/agents/copilot-cli/fleet) — accessed 2026-10-02
- [Using dynamic workflows](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/use-dynamic-workflows) — accessed 2026-10-02
- [GitHub Copilot CLI command reference](https://docs.github.com/en/copilot/reference/cli-command-reference) — accessed 2026-10-09
- [Authenticating GitHub Copilot CLI](https://docs.github.com/en/copilot/how-tos/copilot-cli/set-up-copilot-cli/authenticate-copilot-cli) — accessed 2026-10-09
- [copilot-cli changelog](https://github.com/github/copilot-cli/blob/main/changelog.md) — accessed 2026-10-09
- [Discover local models in GitHub Copilot CLI](https://github.blog/changelog/2026-10-07-discover-local-models-in-github-copilot-cli/) — accessed 2026-10-07
