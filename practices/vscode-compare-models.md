---
id: vscode-compare-models
title: VS Code compare models — parallel harness bake-off (Preview)
tags: [vscode, models, evals, orchestration]
status: active
updated: 2026-10-25
when_to_use: Running the same coding task on multiple VS Code models or harnesses, or enabling a Judge/Synthesizer
---

## Summary

**VS Code 1.143** Preview **Compare Models** runs **2–10** independent attempts of one prompt in the **Agents window**, each in its own Git worktree, then lets you pick a winner or **Synthesize** a new implementation. Off by default (`sessions.chat.compareAgents.enabled`). **1.144 Insiders** adds an experimental **folderless** bake-off (no workspace open). Not the model picker, not Auto routing, and not a CI eval harness (`agent-eval-harness`). Editor Chat view cannot run it.

## Notes

- Prerequisites: Agents window; a Git repo with a branch, ≥1 commit, and a remote; an Agent Host harness that supports worktree isolation. Available models/harnesses follow credentials and enterprise policy (`vscode-agent-harnesses`). Enable the setting (an experiment may flip it on). New → pick the repo → model picker → **Compare Models**. **1.144 Insiders** (notes still evolving; stable due ~2026-10-26): experimental compare **without opening a folder**; the new-session composer can also **clear the workspace** to start with no project. Treat folderless runs as Insiders-only until 1.144 ships.
- Attempts: mix **Copilot / Claude / Codex** when those harnesses are signed in. **Auto and other routers are unavailable.** For thinking-effort models, add the same model twice with different effort. One bounded prompt; **Run N Attempts** starts them concurrently in a tiled grid. Each worktree is the **committed** tree — uncommitted edits, gitignored files, and local deps may be missing (`vscode-agent-worktree-cleanup`).
- Worktrees use **Allow all** (no tool-approval prompts). Isolation is edit separation, not a sandbox or network boundary (`vscode-agent-sandboxing`). Review permissions before you run a comparison.
- Judge (optional): pick a judge model **before** you run. After attempts finish it writes a scorecard (recommendation, time, token usage — tokens can be **lower bounds**, not cost). Rationale and validation evidence are expandable. A judge is **not** proof of correctness (`llm-judge-bias`). Without a judge, compare manually.
- Synthesize needs **both** a judge and a synthesizer configured up front. It opens a **new** grouped session in another worktree from the verdict + strengths; it does not mutate the recommended attempt or your original tree. Comparison never auto-merges, pushes, or opens a PR. Each attempt + judge + synthesis is separate model usage.

## Sources

- [Visual Studio Code 1.144 (Insiders)](https://code.visualstudio.com/updates/v1_144) — accessed 2026-10-25
- [Compare model results (Preview)](https://code.visualstudio.com/docs/agents/run/compare-models) — accessed 2026-10-21
- [Visual Studio Code 1.143](https://code.visualstudio.com/updates/v1_143) — accessed 2026-10-21
- [Choose and use an agent harness](https://code.visualstudio.com/docs/agents/run/agent-harnesses) — accessed 2026-10-21
