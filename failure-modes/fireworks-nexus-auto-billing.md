---
id: fireworks-nexus-auto-billing
title: Nexus Auto bills closed models to your provider, and a platform key is not a Nexus plan
kind: knowledge
tags: [fireworks, billing, routing, accounts]
status: active
updated: 2026-11-18
when_to_use: A Nexus Auto turn billed the wrong account, firerouter 404s, or a Fireworks platform key cannot connect a harness
---

## Summary

Nexus and the Fireworks platform are different accounts. `auto` can spend a Fireworks included-usage balance on open models and, in the same session, spend an Anthropic or OpenAI account on a later turn. Cursor and the Copilot app ignore a key you saved locally (`fireworks-nexus`).

## Notes

- **Two logins.** The Nexus app is `nexus.fireworks.ai`. The platform app is `app.fireworks.ai` (serverless, dedicated deployments, fine-tunes). The same email can hold both. A platform API key does not carry a Nexus plan. A Nexus key does not call platform features such as deployments. `nexus login` mints a Nexus key; pasting a platform key into a harness does not put that harness on a Nexus plan.
- **Who pays for a turn.** Open models bill the Fireworks side at serverless rates, and they draw down Pro or Team included usage. Closed models bill the Anthropic, OpenAI, or Bedrock account whose credential served the turn. Codex CLI and the ChatGPT desktop app use the Codex sign-in for most OpenAI turns. Claude Code uses the Claude login or `ANTHROPIC_API_KEY` for Anthropic turns. The response `model` field is the id that served that turn. LiteLLM returns its own `model_name`, not the serving model.
- **Where a saved key is actually sent.** A key saved with `nexus auto` is written into harness config as `x-anthropic-api-key` or `x-openai-api-key`. Cursor IDE and the Copilot app require an account Provider Key; a locally saved key is not sent. `nexus auto --providers fireworks` stops the CLI from sending saved Anthropic and OpenAI keys, and that limit has no effect in Cursor IDE. The CLI does not read `ANTHROPIC_API_KEY` or `OPENAI_API_KEY` from the environment. A saved key takes precedence over the Provider Key for that provider.
- **Ids that fail.** `firerouter`, `auto-instant`, and `auto/...` route ids are retired. Use `auto`, or pin a full model id. Pinning an open model such as `glm-5p3` is an Enterprise capability; Pro and Team pickers show `auto` plus the harness’s own Claude or ChatGPT models. A LiteLLM config that turns a short id into a model path returns **404**; the documented path is `fireworks_ai/accounts/fireworks/routers/auto`. Calling `claude-opus-5-5` (or another closed id) with no credential returns **400** `no_credential`. Claude Fable returns **400** from Anthropic when that org does not have data retention enabled.
- **Usage pause and residency.** After a Pro or Team seat uses its included Fireworks allowance, Fireworks turns pause until the window resets. Closed-model turns can continue on the provider account. US is the only Nexus data-residency region. An account set to any other region has `auto` requests rejected. With US residency, a pinned model id must be a US-only id; other Fireworks ids are rejected. Anthropic and OpenAI calls still run in the region configured on that provider.
- **Zero data retention stops at the handoff.** Nexus does not store prompts, responses, or tool-call content. The provider that served a closed-model turn applies its own retention. Provider-key headers sent through a gateway can land in that gateway’s logs unless the gateway is told to mask them.

## Sources

- [Plans and accounts](https://docs.fireworks.ai/nexus/plans) — accessed 2026-11-18
- [Nexus Auto](https://docs.fireworks.ai/nexus/auto) — accessed 2026-11-18
- [Data security and privacy](https://docs.fireworks.ai/nexus/data-security) — accessed 2026-11-18
