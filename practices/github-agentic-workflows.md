---
id: github-agentic-workflows
title: GitHub Agentic Workflows — markdown compiled to Actions
tags: [github, automations, ci, orchestration]
status: active
updated: 2026-10-02
when_to_use: Authoring a .md + .lock.yml agentic workflow with gh aw, or contrasting it with Copilot automations
---

## Summary

**GitHub Agentic Workflows** (public preview) are repo automations: a Markdown file with YAML frontmatter plus natural-language instructions, compiled by `gh aw` into a hardened GitHub Actions `.lock.yml`. An AI engine (Copilot default, or Claude / Codex / Gemini) runs in a firewalled Actions job. Not a Copilot cloud-agent automation (`github-copilot-automations`), not a CLI dynamic workflow (`github-copilot-dynamic-workflows`), and not invoking `copilot -p` inside a hand-written Actions step.

## Notes

- Install: `gh extension install github/gh-aw` (`gh` ≥ 2.90 auto-prompts). First repo: `gh aw init` (adds authoring skills / instructions / a custom agent). Create via a coding agent with the `agentic-workflows` skill, the GitHub UI, or by hand. Commit **both** the `.md` and compiled lock file on the default branch. Recompile after frontmatter edits: `gh aw compile`. Run: Actions tab or `gh aw run NAME`. Import: `gh aw add-wizard githubnext/agentics/…` (stores `source:` for `gh aw update`; skip `private: true` remotes; treat imports as code).
- Frontmatter: `on` (Actions-style or helpers like `daily` / `weekly on monday`), `permissions` (default read-all), `safe-outputs` (only declared writes: `create-issue`, `add-comment`, `create-pull-request`, …), `engine` (`copilot` | `claude` | `codex` | `gemini`), optional `tools`, `network`, `max-ai-credits` (default 1,000 AIC/run; `1 AIC = $0.01`). Body is the agent prompt.
- Guardrails: read-only token by default; writes only through validated safe-outputs; secrets stay in downstream jobs, not the agent runtime; proposed outputs go through threat detection; firewalled runner. Still review PRs the workflow opens.
- Auth / billing: Actions minutes + engine inference. Org Copilot: enable “Copilot CLI” + “Allow use of Copilot CLI billed to the organization”, then `permissions.copilot-requests: write` so `GITHUB_TOKEN` pays the org (`COPILOT_GITHUB_TOKEN` ignored for those requests). Personal repos / missing org grant: `COPILOT_GITHUB_TOKEN` (fine-grained PAT, Copilot Requests read). Third-party engines: `ANTHROPIC_API_KEY` / `OPENAI_API_KEY` / `GEMINI_API_KEY`. Inspect: `gh aw logs`, `gh aw audit RUN-ID` (AIC estimates, not invoices).
- Prefer this over raw `copilot --yolo -p` in a workflow step (broad runner access; fork-PR risk). Contrast: Copilot **automations** are unsaved-to-git cloud-agent prompts on one repo; **dynamic workflows** are in-session extension programs.

## Sources

- [About GitHub Agentic Workflows](https://docs.github.com/en/copilot/concepts/agents/about-github-agentic-workflows) — accessed 2026-10-02
- [Creating GitHub Agentic Workflows](https://docs.github.com/en/copilot/how-tos/github-agentic-workflows/creating-github-agentic-workflows) — accessed 2026-10-02
- [Develop agentic workflows in GitHub Actions](https://docs.github.com/en/actions/tutorials/develop-agentic-workflows-in-github-actions) — accessed 2026-10-02
- [Automating tasks with Copilot CLI and GitHub Actions](https://docs.github.com/en/copilot/how-tos/copilot-cli/automate-copilot-cli/automate-with-actions) — accessed 2026-10-02
