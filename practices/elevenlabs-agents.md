---
id: elevenlabs-agents
title: ElevenAgents — hosted voice and phone agents
kind: service
tags: [elevenlabs, voice, agents, mcp]
status: active
updated: 2026-11-25
when_to_use: Building a hosted voice or phone agent, or managing those agents from another MCP client
---

## Summary

**ElevenAgents** is ElevenLabs' hosted agent platform: speech recognition, a language model you choose, text-to-speech, and a turn-taking model, exposed as a web widget, a phone call, or a native app SDK. A hosted MCP server lets another coding agent create and edit those agents. It is the managed conversational product, separate from a voice runtime you embed (`livekit-agents`) and from ElevenLabs Realtime models or Speech Engine used on their own.

## Notes

- **Access.** Sign up at the page linked from `links`. The agents overview documents the dashboard, the workflow builder, SDKs (React, Swift, Kotlin, React Native, Unity), a CLI, and a hosted MCP server. There is no cap on how many agents a workspace can create; concurrency and included minutes are the cap.
- **Auth.** The API uses an ElevenLabs API key. The hosted MCP server is OAuth: the client signs in and the consent screen lists the agent and speech permissions you grant. No API key is copied into the MCP client. Revoke the grant from the MCP client or from ElevenLabs account settings. Isolated EU, India, and Singapore workspaces use their own accounts and regional MCP hosts (`api.eu`, `api.in`, and `api.sg` under `residency.elevenlabs.io`, path `/v1/mcp`). The global host is `https://api.elevenlabs.io/v1/mcp`.
- **Plans (agents pricing page, 2026-11-18).** Billed in call minutes, separate from the shared character credit pool. **Free:** **15** minutes, **4** concurrent calls. **Starter:** **$6/month** after a **$1** first month, **75** minutes, **6** concurrent, text messages, commercial license. **Creator:** **$22/month** after **$11**, **275** minutes, **10** concurrent, overage minutes. **Pro:** **$99**, **1,238** minutes, **20** concurrent. **Scale:** **$299**, **3,738** minutes, **30** concurrent, **3** seats. **Business:** **$990**, **12,375** minutes, **40** concurrent, **10** seats, **10** professional voice clones. Extra minutes are **$0.08**; burst (up to **3×** concurrency) is **$0.16**. Text messages are **$0.003**. LLM tokens are billed on top. ElevenLabs does not add a telephony fee; Twilio or your SIP provider bills the carrier side. The page also shows time-boxed discounts, so re-check it before quoting a price. Enterprise adds SSO and a HIPAA BAA.
- **MCP two ways.** Agents can call external MCP servers (SSE or streamable HTTP) after a workspace opt-in (`elevenlabs-mcp-workspace`). The other direction, the hosted server above, can create agents, change prompts and voices, read transcripts, run tests, and delete agents. An update through that server publishes immediately on the targeted branch, or on `main` when no branch is named.
- **Alternatives.** Deepgram (`deepgram`) when you need the speech API and will run the agent yourself. Cartesia (`cartesia`) when Sonic or Ink should run on Cartesia’s credit plan, including from Cartesia’s MCP server. LiveKit Agents when the voice pipeline should run in your process and join a room you control. Zep (`zep`) when the missing piece is cross-session memory beside a voice stack.
- **Caveats.** MCP is off until someone accepts the workspace terms, and it stays unavailable on Zero Retention Mode and HIPAA. Tool approval defaults to asking every time, but a server can be set to no approval. Deleting an agent from the hosted MCP server is permanent. The Claude directory connector is a narrower build that omits image, video, and music tools.

## Sources

- [ElevenAgents overview](https://elevenlabs.io/docs/eleven-agents/overview) — accessed 2026-11-18
- [ElevenAgents pricing](https://elevenlabs.io/pricing/agents) — accessed 2026-11-18
- [MCP tools for agents](https://elevenlabs.io/docs/eleven-agents/customization/tools/mcp) — accessed 2026-11-18
- [Hosted MCP server](https://elevenlabs.io/docs/eleven-agents/operate/hosted-mcp) — accessed 2026-11-18
