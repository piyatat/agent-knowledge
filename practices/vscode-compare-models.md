---
id: vscode-compare-models
title: VS Code compare models — parallel harness bake-off (Preview)
tags: [vscode, models, evals, orchestration]
status: active
updated: 2026-11-07
when_to_use: Running the same coding task on multiple VS Code models or harnesses, or enabling a Judge/Synthesizer
---

## Summary

**VS Code** Preview **Compare Models** runs **2–10** independent attempts of one prompt in the **Agents window**. Repository runs use a Git worktree per attempt, then you pick a winner or **Synthesize** a new implementation. **On by default** (`sessions.chat.compareAgents.enabled`). Folderless / quick-chat bake-offs compare ideas without worktrees, a judge, or a synthesizer. Not the model picker, not Auto routing, and not a CI eval harness (`agent-eval-harness`). Editor Chat view cannot run it.

## Notes

- Prerequisites: Agents window; for code comparisons, a Git repo plus an Agent Host harness that supports worktree isolation; for folderless, a harness that supports quick chats. Available models/harnesses follow credentials and enterprise policy (`vscode-agent-harnesses`). If Compare Models is missing on an eligible new session, check `sessions.chat.compareAgents.enabled`. New → pick the repo (or start a quick chat) → model picker → **Compare Models**.
- Attempts: mix **Copilot / Claude / Codex** when those harnesses are signed in. **Auto and other routers are unavailable.** For thinking-effort models, add the same model twice with different effort. One bounded prompt; **Run N Attempts** starts them concurrently in a tiled grid. Each worktree is the **committed** tree — uncommitted edits, gitignored files, and local deps may be missing (`vscode-agent-worktree-cleanup`).
- Worktrees use **Allow all** (no tool-approval prompts). Isolation is edit separation, not a sandbox or network boundary (`vscode-agent-sandboxing`). Review permissions before you run a comparison.
- Judge (optional): pick a judge model **before** you run. After attempts finish it writes a scorecard (recommendation, time, token usage — tokens can be **lower bounds**, not cost). Rationale and validation evidence are expandable. A judge is **not** proof of correctness (`llm-judge-bias`). Without a judge, compare manually.
- Synthesize needs **both** a judge and a synthesizer configured up front. It opens a **new** grouped session in another worktree from the verdict + strengths; it does not mutate the recommended attempt or your original tree. Comparison never auto-merges, pushes, or opens a PR. Each attempt + judge + synthesis is separate model usage.
- **1.146 Insiders** (2026-11-04): related comparison sessions **group** in the Agents window. **Agents** can launch a 2–10 configuration bake-off through tools, then **read** comparison results, judge evaluations, and provider-supplied conversation histories. Eligible model pickers may show a one-time Compare Models intro. Treat agent-launched compare as Insiders until 1.146 ships.

## Sources

- [Visual Studio Code 1.146 (Insiders)](https://code.visualstudio.com/updates/v1_146) — accessed 2026-11-07
- [Compare model results (Preview)](https://code.visualstudio.com/docs/agents/run/compare-models) — accessed 2026-11-07
- [Visual Studio Code 1.144 (Insiders)](https://code.visualstudio.com/updates/v1_144) — accessed 2026-10-25
- [Visual Studio Code 1.143](https://code.visualstudio.com/updates/v1_143) — accessed 2026-10-21
- [Choose and use an agent harness](https://code.visualstudio.com/docs/agents/run/agent-harnesses) — accessed 2026-10-21
