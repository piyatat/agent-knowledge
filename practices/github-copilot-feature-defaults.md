---
id: github-copilot-feature-defaults
title: Copilot default policy for new features — Unconfigured GA rollout
tags: [github, governance, mcp, policies]
status: active
updated: 2026-10-22
when_to_use: An enterprise left Copilot Features & clients or MCP policies Unconfigured, or preparing for the Oct 22–26 default-policy enforcement
---

## Summary

**Default policy for new features** (Copilot Business / Enterprise) now **enforces** a global default on eligible **generally available** features and capabilities that were left **Unconfigured**. Gradual rollout **2026-10-22 through 2026-10-26**. This is not the model-policy REST API (`github-copilot-model-policy-api`) and not Auto model selection (`github-copilot-auto-model`). Review it under **AI Controls → Copilot → Default policy for new features**.

## Notes

- Applies to eligible settings on **Features & clients** plus **MCP servers in Copilot**. Docs also include the Copilot **code review** policy on the Agents page. Enterprise states: **Enabled everywhere**, **Disabled everywhere**, or **Let organizations decide**. At an org, it applies only to features the enterprise delegated and the org has not set. **Preview** features stay opt-in.
- The 2026-10-22 change is **one-time**: Unconfigured eligible GA items are written to the selected default. Later edits to the default do **not** rewrite policies that are already set. Explicit enable/disable is preserved. If you opted into a preview that later went GA, that choice is kept; otherwise the default applies when the feature becomes eligible.
- Docs (still useful for exceptions): the feature policy is **enabled by default** — if nobody acts, Unconfigured features become **enabled**. Exceptions that this policy does **not** move: restrictive **data-residency / FedRAMP** model policies on GHE.com, and **Store local sessions in the Cloud** for Copilot CLI / VS Code (`github-copilot-remote-control`).
- Models stay on a **separate** “Default availability for released models” policy (already active). That API/`policy_state` surface is `github-copilot-model-policy-api`. Pre-GA, some open-weight, and some non-DRA models stay disabled regardless of the model default.
- Agents: an Unconfigured **MCP servers in Copilot** row can flip on or off for the whole enterprise when the window hits your tenant. Confirm MCP, CLI, and Agent Host policies after 2026-10-26 instead of assuming “Unconfigured” still means “we never chose.”

## Sources

- [Global default for Copilot features generally available](https://github.blog/changelog/2026-10-22-global-default-for-copilot-features-generally-available/) — accessed 2026-10-22
- [About default availability of Copilot features and models](https://docs.github.com/en/copilot/concepts/enterprise/default-availability) — accessed 2026-10-22
