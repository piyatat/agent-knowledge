---
id: openai-codex-daybreak
title: Codex Daybreak — Trusted Access for Cyber
tags: [openai, security, cli, governance]
status: active
updated: 2026-10-15
when_to_use: Enabling Daybreak Blue/Red in Codex or the Responses API, or choosing access_programs.cyber vs standard refusals
---

## Summary

**Daybreak** is OpenAI’s **Trusted Access for Cyber** program. **Blue** reduces refusals on supported **mainline** models for authorized defensive work. **Red** (org-only) adds cyber-specialized models and reduced refusals on more models (including Astra). Approval is **off by default** after enablement. It is not a sandbox (`openai-codex-sandbox`), not Guardian auto-review (`openai-codex-auto-review`), and not Zero Data Retention.

## Notes

- Intended use: systems you own or are **explicitly** authorized to test. Do **not** enable for customer-facing apps, downstream product traffic, or third-party users. Usage policies and other safeguards still apply. Red is for authorized pentest / exploit validation, not a general coding default.
- Codex + ChatGPT sign-in: workspace owner keeps **Workspace default = Off**, then turns Blue (and Red only if approved) on via **role overrides**. App ≥ `26.908.40834`. Through **0.161.x** the TUI Daybreak toggle stayed **off** until you opted in (`--enable cli_daybreak` / `features.cli_daybreak=true`; `daybreak=true` alone is not enough). **0.163.0** (2026-10-15) **enables Daybreak by default for eligible accounts**. Surfaces without a toggle still treat Daybreak as on for supported requests once the workspace/program is approved.
- Codex + API key: no special toggle. Use a key from a **non-default** project where an **API org owner** enabled the program. Pick an explicit approved model (`codex -m gpt-6-sol`). Models with `-cyber` in the name do not appear in the API-key picker — set the ID in `config.toml`. **0.163.0** also lets `codex exec` select Daybreak with an OpenAI API key when the server offers access.
- Headless: Codex **0.161.0** adds `codex exec --cyber-access-program` and the TypeScript SDK `cyberAccessProgram`. The explicit exec override works even when TUI `cli_daybreak` is off and does not change the saved toggle (`openai-codex-exec`).
- Responses API: `access_programs.cyber` is `standard` | `daybreak_blue` | `daybreak_red`. Match the **model**, not the org’s highest approval: `gpt-6-sol` + Daybreak → `daybreak_blue` even if the org has Red (`invalid_access_program` otherwise). `gpt-6.1-sol` / `gpt-6-astra` reduced refusals need **Red** org access but still send `daybreak_blue`. `gpt-5.6-cyber` uses `daybreak_red`. Omitting the field picks a compatible default from project access. Errors: `unsupported_access_program`, `access_program_not_enabled`.
- Bedrock IDs documented as `openai.gpt-daybreak-blue-5.6-sol` (Blue) and `openai.gpt-5.6-cyber` (Red). Pair with Guardian when the question is *who approves a sandbox escape*, not *which refusal tier the model uses*.

## Sources

- [OpenAI Daybreak — Trusted Access for Cyber Overview](https://help.openai.com/en/articles/20001258-openai-daybreak-trusted-access-for-cyber-overview) — accessed 2026-10-12
- [Set up Daybreak access for your team](https://help.openai.com/en/articles/20001531-openai-daybreak-set-up-access-for-your-team) — accessed 2026-10-12
- [Enterprise Daybreak onboarding](https://help.openai.com/en/articles/20001261-enterprise-daybreak-onboarding) — accessed 2026-10-12
- [Use Daybreak in the Responses API](https://developers.openai.com/api/docs/guides/daybreak) — accessed 2026-10-12
- [Daybreak troubleshooting](https://help.openai.com/en/articles/20001259-openai-daybreak-common-issues-and-troubleshooting) — accessed 2026-10-12
- [Codex 0.161.0](https://github.com/openai/codex/releases/tag/rust-v0.161.0) — accessed 2026-10-12
- [Codex 0.163.0](https://github.com/openai/codex/releases/tag/rust-v0.163.0) — accessed 2026-10-15
