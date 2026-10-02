---
id: github-copilot-dynamic-workflows
title: Copilot dynamic workflows — coded multi-agent orchestration
tags: [github, orchestration, workflows, cli]
status: active
updated: 2026-10-02
when_to_use: Authoring or running a Copilot CLI/app/SDK dynamic workflow, or contrasting it with /fleet or gh aw
---

## Summary

A **Copilot dynamic workflow** (public preview, 2026-10-01) is a **program** inside a Copilot **extension** that sequences tools, durable steps, and subagents (serial, parallel, or both). The code owns stages, checks, and limits; agents handle judgment. Available in Copilot CLI, the Copilot app, and the Copilot SDK. Not `/fleet` (model-chosen parallel split — `github-copilot-fleet`), not GitHub Agentic Workflows (`github-agentic-workflows`), and not Claude dynamic workflows (`claude-code-workflows`).

## Notes

- CLI needs `--experimental` or `/experimental on`. App: always on, no flag. All Copilot plans. Ask “What dynamic workflows are available?” or “Show me the guidance for writing dynamic workflows.” Author in-session (default: session-only extension) or write `extension.mjs` yourself. Registering does **not** start a run.
- Run in chat by name + inputs (permission prompt unless already allowed). CLI / CI: `copilot workflow run NAME --args '{"…"}'|@file.json` — **no approval prompts**; pre-grant `--allow-tool` / `--allow-url` or denials fail closed. `--result-file`, `--silent --output-format json`. Untrusted cwd: `GITHUB_COPILOT_PROMPT_MODE_EXTENSIONS=true` only for code you trust. Schedule in an open session with `/every` / `/after`.
- Reuse: copy the extension dir to `~/.copilot/extensions/` (personal) or `.github/extensions/` (repo; teammates load after pull). Bundle in a plugin marketplace package (`github-copilot-plugins`). Session-authored copies do **not** include run history.
- Monitor: CLI `/workflows` (Enter details; `P` pause, `X` cancel, `R` resume; raise a limit to resume a cap-stop). App local sessions: Workflows button (Pause / Cancel / Resume with limit…). Canceled runs cannot resume; paused / limit-stopped can reuse journaled step results. OTel: `invoke_workflow` span per run/resume (`github-copilot-otel`). Set AI-credit limits on the run — recommended.
- Use when the process must be rerunnable with stages, verification, or pause/resume (release checks, parallel file review, dual-model agreement). For a one-off parallel split, `/fleet`. For repo-event automation in Actions, `gh aw`.

## Sources

- [Dynamic workflows in Copilot CLI and the Copilot app](https://github.blog/changelog/2026-10-01-dynamic-workflows-in-copilot-cli-and-the-copilot-app/) — accessed 2026-10-02
- [Using dynamic workflows](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/use-dynamic-workflows) — accessed 2026-10-02
- [GitHub Copilot CLI command reference](https://docs.github.com/en/copilot/reference/cli-command-reference) — accessed 2026-10-02
