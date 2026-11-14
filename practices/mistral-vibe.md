---
id: mistral-vibe
title: Mistral Vibe Code — CLI, VS Code, web, and ACP
kind: tool
tags: [mistral, cli, acp, skills]
status: active
updated: 2026-11-14
when_to_use: Running Mistral's coding agent locally, in VS Code, over ACP, or as a GitHub sandbox session
---

## Summary

**Vibe Code** is Mistral’s coding agent. The CLI (`vibe`), the VS Code extension, and **Vibe Code Web** share agents, skills, MCP, and (for CLI and VS Code) session history. `vibe-acp` is published in the ACP registry, including for JetBrains (`jetbrains-ai-assistant`). Not `claude -p` (`claude-code-headless`) and not Codex (`openai-codex-exec`).

## Notes

- **Install:** `curl -LsSf https://mistral.ai/vibe/install.sh | bash` (installs `uv` if needed, then `mistral-vibe`). Commands are `vibe` and `vibe-acp`. Manual install needs Python 3.12+. First `vibe` in a repo walks a setup wizard. Sign in with a Mistral account, or paste an API key from Code → Vibe CLI (also works for other compatible providers and for local models). Key lookup order: shell environment, `~/.vibe/.env`, then the OS keyring. `MISTRAL_API_KEY` skips the prompt.
- **Surfaces:** CLI has the local tree, shell, and `vibe --prompt` for CI. VS Code uses the same config and can resume a CLI session. Web needs no install: GitHub access and a remote sandbox, no non-interactive mode. Custom agents, skills, MCP, and connectors exist on all three.
- **Approvals:** default agent is `accept-edits` (file edits auto-approved; shell and other sensitive tools still ask). `ask` prompts every tool. `smart-approve` is a classifier, **not a sandbox** — a call it judges safe runs as your user. `auto-approve` (`--auto-approve` / `--yolo`) approves every tool, including shell; an admin can set `enable_auto_approve = false`, which also ignores those flags. In `vibe --prompt`, nobody can answer a prompt, so any tool that still needs approval is **denied** unless you pass `--auto-approve`.
- **Trust and tools:** project `.vibe/` (config, agents, skills, MCP, permissions), `.agents/skills/`, and `AGENTS.md` load only from a **trusted** folder. Interactive sessions ask; programmatic mode never asks — pass `--trust` for that invocation only (it does not persist). `--add-dir` loads project config from those directories without a trust prompt. Per-tool `permission` is `always`, `ask`, or `never`. Bash `allowlist` / `denylist` **replace** the defaults. Vibe still asks before `.env` / `.envrc` and before paths outside the workdir unless the path is allowlisted or you set `outside_workdir`. Shell checks only paths written in the command, not paths a script builds. Skill `allowed-tools` is **not enforced**.
- **MCP:** `vibe mcp add` writes user `config.toml`. An HTTP URL without `--header` or `--api-key-env` starts OAuth. Tools are named `{server_name}_{tool_name}`.
- **Billing:** plan usage is shared with Studio and the API. Pay-as-you-go is **off by default**; some partner Pro plans cannot turn it on. When included usage is gone and pay-as-you-go is off, Vibe stops until the next period. When it is on, spend continues from prepaid credits and stops at a zero balance.
- **Alternatives:** Auggie (`augment-auggie`) or Codex when the team standardizes on that CLI. Vibe Code Web when the repo should stay on GitHub and you do not want a local checkout.
- **Caveats:** do not use `auto-approve` on a machine that holds SSH keys or cloud credentials. Review `.vibe/` before trusting it (`malicious-skills-supply-chain`). Smart approve can be absent from `Shift+Tab` while it rolls out; start with `--smart-approve` or set `default_agent`.

## Sources

- [Choose CLI, VS Code, or web sessions](https://docs.mistral.ai/vibe/code/choose-cli-vscode-web-sessions) — accessed 2026-11-14
- [Install and setup](https://docs.mistral.ai/vibe/code/cli/install-setup) — accessed 2026-11-14
- [API keys and profiles](https://docs.mistral.ai/vibe/code/cli/api-keys-profiles) — accessed 2026-11-14
- [Safety, approvals, and permissions](https://docs.mistral.ai/vibe/code/safety-approvals-permissions) — accessed 2026-11-14
- [Skills](https://docs.mistral.ai/vibe/code/cli/skills) — accessed 2026-11-14
- [MCP servers](https://docs.mistral.ai/vibe/code/cli/mcp-servers) — accessed 2026-11-14
