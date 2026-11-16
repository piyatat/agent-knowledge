---
id: promptfoo
title: Promptfoo — prompt evals and agent red teams
kind: tool
tags: [promptfoo, evals, red-team, ci]
status: active
updated: 2026-11-16
when_to_use: Regression-testing prompts and agents in CI, or red-teaming an agent endpoint with promptfoo
---

## Summary

**Promptfoo** is a local CLI and config (`promptfooconfig.yaml`) for prompt evals and red-team scans. Run it with `npx promptfoo@latest` (no global install), `npm install -g promptfoo`, or `brew install promptfoo`. It is not Cursor Agent SDK evals (`cursor-agent-sdk-evals`) and not Gemini CLI’s eval command (`gemini-cli-evals`).

## Notes

- **Eval.** `promptfoo init` writes a config, or `promptfoo init --example getting-started` copies a sample. Prompts, `providers`, and `tests` live in YAML. `promptfoo eval` runs the matrix; `promptfoo view` opens a local browser. Assertions (`contains`, `llm-rubric`, `cost`, `latency`, JavaScript) grade outputs. The getting-started guide’s `cost` and `latency` examples check a finished response; they do not stop a slow call or cap the bill. Providers need their own credentials (`OPENAI_API_KEY` for the OpenAI example). Agent targets can be an HTTP URL, a JS or Python file, or an executable.
- **Red team.** `promptfoo redteam init`, then `redteam run` (generate plus eval), then `redteam report`. Plugins such as `excessive-agency`, `rbac`, `tool-discovery`, and `agentic:memory-poisoning` build attacks; strategies such as `jailbreak:meta` deliver them. The configuration reference’s default attack-generation provider is `openai:gpt-5`, **5** tests per plugin. In CI, `npx promptfoo@latest redteam run` (or `promptfoo/promptfoo-action`) plus `--tag key=value` records the run without editing the scan file.
- **Remote generation.** By default, adversarial inputs are produced by Promptfoo’s **remote** service, including when you are logged into Promptfoo Cloud. Set `PROMPTFOO_DISABLE_REDTEAM_REMOTE_GENERATION=true` to generate locally. The docs warn that local generation is lower quality, and that some providers (they name Anthropic) may disable an account used to generate harmful cases — they recommend the default OpenAI provider for that step. A custom provider can still be the **target** while remote generation stays on.
- **Alternatives.** A product eval harness when the cases must replay that agent’s own transcripts. Langfuse (`langfuse`) when you need a trace store and scores, not a CI gate. Ollama as a `redteam.provider` when attack generation must stay on the machine.
- **Caveats.** A red-team run with the default sends attack-generation traffic off the machine. `cost` / `latency` asserts are not spend controls. Generating attacks with a provider account can violate that provider’s use policy.

## Sources

- [Getting started](https://www.promptfoo.dev/docs/getting-started/) — accessed 2026-11-16
- [CI/CD integration](https://www.promptfoo.dev/docs/integrations/ci-cd/) — accessed 2026-11-16
- [Red team configuration](https://www.promptfoo.dev/docs/red-team/configuration/) — accessed 2026-11-16
- [How to red team LLM agents](https://www.promptfoo.dev/docs/red-team/agents/) — accessed 2026-11-16
