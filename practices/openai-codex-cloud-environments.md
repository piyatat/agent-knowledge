---
id: openai-codex-cloud-environments
title: Codex cloud environments — setup scripts and cache
tags: [openai, sandbox, ops, orchestration]
status: active
updated: 2026-09-04
when_to_use: Configuring ChatGPT Codex cloud containers, secrets, or agent internet access
---

## Summary

A Codex **cloud environment** is the container recipe for ChatGPT Codex cloud chats: image, pinned runtimes, setup/maintenance scripts, env/secrets, and agent network policy. It is not the local Codex CLI sandbox (`openai-codex-permissions`) and not Cursor `.cursor/environment.json`. The agent loop still reads **`AGENTS.md`** for lint/test commands.

## Notes

- Run: new container → checkout selected branch/SHA → setup script (internet on) → apply agent internet settings (default **off**) → command loop → diff / optional PR. Base image is `universal` (`openai/codex-universal`); pin Python/Node/etc. in environment settings rather than compiling them in the script.
- Env vars last the whole chat (setup + agent). **Secrets** are extra-encrypted and exist **only during setup** — they are stripped before the agent phase. Do not put long-lived credentials in agent-visible env if the agent can print them.
- Setup runs in a **separate Bash session**; `export` does not survive. Persist via `~/.bashrc` or environment settings. Common package managers (`npm` / `yarn` / `pnpm` / `pip` / `pipenv` / `poetry`) can auto-install. All egress goes through Codex’s HTTP/HTTPS proxy.
- Cache: container state kept up to **12 hours**. Resume checks out the chat’s branch and runs the optional **maintenance** script (for stale deps). Cache invalidates when setup/maintenance/env/secrets change; **Reset cache** if the repo drifted. Business/Enterprise caches are **shared** across users of that environment — a reset hits everyone.
- Contrast `openai-sandbox-agents` (Agents SDK workspace) and `cursor-environment-json` (Cloud Agent VM).

## Sources

- [Cloud environments](https://learn.chatgpt.com/docs/environments/cloud-environment) — accessed 2026-09-04
- [openai/codex-universal](https://github.com/openai/codex-universal) — accessed 2026-09-04
- [AGENTS.md](https://agents.md/) — accessed 2026-09-04
