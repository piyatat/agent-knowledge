---
id: fireworks-nexus
title: Fireworks Nexus — route a coding agent across open and closed models
kind: service
tags: [fireworks, routing, models, coding]
status: active
updated: 2026-11-18
when_to_use: Routing Claude Code, Codex, Cursor, or Copilot through Nexus Auto instead of one provider key
---

## Summary

**Fireworks Nexus** connects a coding harness to model id `auto`. Each user turn goes to a Fireworks open model or, when you have connected a credential, to an Anthropic or OpenAI model on your own account. The same turn, including its tool calls, stays on that model until the next user message. Nexus accounts, keys, and bills are separate from the Fireworks platform account you use for raw serverless inference (`fireworks-nexus-auto-billing`).

## Notes

- **Access.** Sign up at the Nexus app linked from `links` and pick Pro, Team, or Enterprise. Nexus Desktop (macOS) toggles each harness. The Nexus CLI supports macOS, Linux, and a limited Windows path via Git Bash, and needs Node.js **22** or later. Desktop for Linux and Windows is listed as coming soon. Claude Desktop setup is macOS and CLI-only, and it opens a separate workspace from your claude.ai chats, connectors, and skills.
- **Auth.** `nexus login` stores the Nexus key in the OS keychain, or in an encrypted file when no keychain exists. Closed-model calls need a Provider Key an admin saves on the account, or a key saved with `nexus auto` on harnesses that accept it. Cursor IDE and the Copilot app accept a Provider Key only. A request header `x-anthropic-api-key` or `x-openai-api-key` overrides the stored Provider Key. Bedrock is Provider Keys only.
- **Plans (Plans page, 2026-11-18).** Pro is **$8** per month for one seat. Team is **$10** per seat per month, up to **200** seats. Included usage resets on a rolling window and monthly, and counts turns that run on Fireworks. Anthropic and OpenAI turns bill the provider account that served them. When a Pro or Team seat exhausts included usage, Fireworks turns pause until the window resets. Pro and Team can select `auto` and the harness’s own Claude or ChatGPT models. Direct open-model ids such as `glm-latest` are an Enterprise control. The Plans page is the current price list.
- **What `auto` can call.** With only a Fireworks key, open models. An Anthropic or OpenAI credential adds that family. `nexus auto --providers fireworks` keeps routing on open models even if those keys are saved; the setting is global in `~/.nexus/config.json` and does not apply to Cursor IDE. The response `model` field names the model that served the turn. Supported closed ids on the Auto page include `claude-opus-5-5`, `claude-sonnet-5-5`, `claude-fable-5-1`, `gpt-6.1-sol`, `gpt-6-astra`, and `gpt-6-luna`. The old id `firerouter` no longer works.
- **Wire APIs.** Messages clients use base URL `https://api.fireworks.ai/inference` (they append `/v1/messages`). Chat Completions and Responses use `https://api.fireworks.ai/inference/v1`. A LiteLLM route that shortens the id can 404; the documented model path is `fireworks_ai/accounts/fireworks/routers/auto`.
- **Privacy.** Nexus is zero data retention on every plan: prompts, responses, and tool calls are not stored, and traces are not kept. Service metadata (token counts, harness, which model served the turn, routing scores) is kept and de-identified after **30 days**. A turn sent to Anthropic, OpenAI, or Bedrock follows that provider’s policy. US is the only residency region Nexus supports; `auto` then uses a US-only serverless twin at `us.api.fireworks.ai`.
- **Alternatives.** OpenRouter, Helicone, or Portkey when the agent is your own loop rather than Claude Code, Codex, Cursor, or Copilot. Together Link (`together-link`) when the harness should stay on Together-hosted open models, including OpenCode and Pi. Cerebras or Groq when you want one fast open model and no router. The Fireworks platform console when you need dedicated deployments or fine-tunes, which a Nexus key cannot do.
- **Caveats.** Claude Fable requests return **400** from Anthropic unless that organization has data retention enabled. A closed model id with no credential returns **400** `no_credential`. Web search for Claude Code, Claude Desktop, Codex, and ChatGPT stays the harness’s native tools, run server-side by Fireworks. The CLI does not add web search to OpenCode, Pi, Cursor, VS Code, Copilot, or DeepSeek Harness.

## Sources

- [Nexus quickstart](https://docs.fireworks.ai/nexus/quickstart) — accessed 2026-11-18
- [Nexus Auto](https://docs.fireworks.ai/nexus/auto) — accessed 2026-11-18
- [Plans and accounts](https://docs.fireworks.ai/nexus/plans) — accessed 2026-11-18
- [Data security and privacy](https://docs.fireworks.ai/nexus/data-security) — accessed 2026-11-18
