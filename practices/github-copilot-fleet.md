---
id: github-copilot-fleet
title: Copilot /fleet — parallel subagents vs coded workflows
tags: [github, orchestration, subagent, cli]
status: active
updated: 2026-10-02
when_to_use: Using /fleet or --fleet on Copilot CLI, or choosing it versus a dynamic workflow
---

## Summary

**`/fleet`** (also `copilot --fleet`) is Copilot CLI’s **model-driven** parallel split: the main agent decomposes a prompt into independent subtasks, runs subagents where dependencies allow, and merges results. Each worker has its own context window. Not a coded dynamic workflow (`github-copilot-dynamic-workflows`) and not GitHub Agentic Workflows (`github-agentic-workflows`).

## Notes

- Typical path: Plan mode (`Shift+Tab`) → accept plan with **autopilot + /fleet**. Autopilot (keep going without you) and fleet (parallel workers) are **independent** — `/fleet` works in an interactive session without autopilot. Sequential work gains little.
- Workers may pick **custom agents** (`.agent.md`) or a model you name in the prompt (`Use GPT-5.3-Codex to create…`, `@test-writer`). Default worker model is low-cost. Profile `model` wins when that custom agent is selected (`github-copilot-custom-agents`). SDK: experimental `session.fleet.start`; pin CLI + SDK. Plugin `--plugin-dir` agents can appear as `task(agent_type=…)`.
- Cost: each subagent talks to the model on its own, so fleet often burns **more AI credits** than one agent doing the same job. Use for independent refactors, tests-across-modules, multi-file updates — not a single linear pipeline.
- Contrast: a dynamic workflow **hard-codes** stages, checkpoints, and dual-agent checks. Fleet **improvises** the split each run. For repo-scheduled automation, use `gh aw` or Copilot automations instead of leaving a CLI fleet running.

## Sources

- [Running tasks in parallel with the /fleet command](https://docs.github.com/en/copilot/concepts/agents/copilot-cli/fleet) — accessed 2026-10-02
- [Fleet mode (Copilot SDK)](https://docs.github.com/en/copilot/how-tos/copilot-sdk/features/fleet-mode) — accessed 2026-10-02
- [Dynamic workflows in Copilot CLI and the Copilot app](https://github.blog/changelog/2026-10-01-dynamic-workflows-in-copilot-cli-and-the-copilot-app/) — accessed 2026-10-02
