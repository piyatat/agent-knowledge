---
id: github-copilot-cli
title: GitHub Copilot CLI — terminal agent vs cloud coding agent
tags: [github, cli, permissions, sandbox]
status: active
updated: 2026-09-30
when_to_use: Running copilot in a terminal or -p script, rewinding a session, or contrasting it with Copilot cloud agent
---

## Summary

**GitHub Copilot CLI** (`copilot`) is a local terminal agent: interactive chat/plan, or programmatic `-p` / `--prompt`. It is not the Actions-hosted **cloud coding agent** (`github-copilot-coding-agent`), though `/delegate` and `--resume` can hand a session across. Linux, macOS, Windows (PowerShell / WSL).

## Notes

- First prompt: trust this folder (session-only or remember). Tool prompts: once / rest of session / reject with optional feedback. `Shift+Tab` cycles **plan** mode. `!cmd` runs a shell without the model. `/cwd` or `/add-dir` for other trees. `--continue` resumes the last local session.
- **Rewind** (interactive, idle, empty input): `Esc` `Esc`, `/undo`, or `/rewind`. Pick a prior user prompt (ten visible; arrow for more). **Conversation only** truncates history; **Conversation + files** also restores Copilot-tracked edits (editing tools, shell, sub-agents — Git not required) and **skips** files you changed afterward or that were too large to back up. Applied to the state **before** that prompt ran; the prompt is put back in the input to edit/resubmit. **Cannot undo.** Unavailable for remote-backed sessions, in-progress work, or before the first prompt. Resume of a pre-tracking session may offer conversation-only. Verify with `! git status` / `! git diff`. JetBrains “edit earlier message” is the IDE equivalent (`github-copilot-jetbrains`).
- Permissions: `--allow-tool` / `--deny-tool` (deny wins, including over `--allow-all`). `--allow-all` / `--yolo` = all tools + paths + URLs — isolated environments only; never alias it. `permissions.disableBypassPermissionsMode` suppresses those flags. Help: `copilot help permissions`.
- Sandbox (public preview / experimental): `/sandbox enable` or `--sandbox` restricts commands/MCP, not the CLI process. `--cloud` runs the whole session in an isolated cloud sandbox (inherits cloud-agent policies). Pair `--allow-all` with a sandbox.
- MCP lives in `~/.copilot/mcp-config.json` (`COPILOT_HOME`). GitHub MCP is preinstalled. `copilot mcp add --transport http NAME URL` or `/mcp add`. Custom instructions: `.github/copilot-instructions.md`, path-specific `.github/instructions/**/*.instructions.md`, `AGENTS.md`.
- Context: `/usage`, `/context`, `/compact`; auto-compact near 95%. `/every` / `/after` schedule prompts. Memory: `/memory on|off|show` (persists); `-p` needs `--enable-memory`. Details: `github-copilot-memory`. Custom agents and skills are separate notes. ACP: Copilot CLI can also be an ACP server.
- **Content exclusions** (Business/Enterprise): as of 2026-09-02 the **app and CLI** honor org/repo/enterprise path policies (`github-copilot-content-exclusions`). IDE **Agent/Edit** Chat modes still do not. Do not treat exclusions as a sandbox (`github-copilot-sandbox`).

## Sources

- [About GitHub Copilot CLI](https://docs.github.com/en/copilot/concepts/agents/copilot-cli/about-copilot-cli) — accessed 2026-09-05
- [Using GitHub Copilot CLI](https://docs.github.com/en/copilot/how-tos/copilot-cli/use-copilot-cli/overview) — accessed 2026-09-05
- [Allowing and denying tool use](https://docs.github.com/en/copilot/how-tos/copilot-cli/use-copilot-cli/allowing-tools) — accessed 2026-09-05
- [Content exclusions generally available in Copilot app and CLI](https://github.blog/changelog/2026-09-02-content-exclusions-generally-available-in-copilot-app-and-cli/) — accessed 2026-09-15
- [Copilot Memory controls for deletion, scope, and CLI](https://github.blog/changelog/2026-05-26-copilot-memory-has-more-controls-for-deletion-scope-and-the-copilot-cli/) — accessed 2026-09-27
- [Rolling back changes in Copilot CLI](https://docs.github.com/en/copilot/how-tos/copilot-cli/use-copilot-cli/roll-back-changes) — accessed 2026-09-30
- [Canceling and rolling back (Copilot CLI)](https://docs.github.com/en/copilot/concepts/agents/copilot-cli/cancel-and-roll-back) — accessed 2026-09-30
