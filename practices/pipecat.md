---
id: pipecat
title: Pipecat — Python voice pipelines and Pipecat Cloud
kind: tool
tags: [pipecat, voice, realtime, cloud]
status: active
updated: 2026-11-19
when_to_use: Building a Python voice pipeline you run yourself, or hosting that agent on Pipecat Cloud
---

## Summary

**Pipecat** is an open-source Python framework (BSD-2-Clause) for voice and multimodal agents. A pipeline orders audio in, speech-to-text, the model, text-to-speech, and audio out. You pick the model, speech, and transport providers. **Pipecat Cloud** (Daily) runs the agent image in Daily-hosted regions; **Pipecat Enterprise** runs it on a Kubernetes cluster you operate, with the same control plane. A warm instance bills while idle (`pipecat-cloud-reserved-minutes`). LiveKit Agents (`livekit-agents`) is the other room-native framework. ElevenLabs Agents (`elevenlabs-agents`) is a hosted voice product with its own stack.

## Notes

- **Access.** Python 3.11 or newer. The introduction linked from `links` is the install pointer; the quickstart scaffolds a local bot and a Cloud deploy. The framework runs on your own process with Daily, LiveKit, Small WebRTC, WebSocket, or telephony. Cloud signup is at `https://pipecat.daily.co`. You bring a container image (the CLI can build it). Daily-hosted regions are the US, Europe, and India. Enterprise is a cluster in your VPC: you run Kubernetes, Daily runs the control plane, and secret values stay on the cluster.
- **Auth.** `pipecat cloud auth login` stores a CLI token under `~/.config/pipecatcloud/pipecatcloud.toml` (override with `PIPECAT_CONFIG_PATH`). Signing out of the dashboard invalidates it. Organizations are separate from the personal workspace: billing, agents, and secrets are org-scoped, and a deployment cannot move between orgs or users. Each workspace or org can hold 5 private and 5 public API keys. Private keys are for admin and deploy automation. Public keys can start sessions; keep them on a server you control. The public start route is `POST https://api.pipecat.daily.co/v1/public/{agentName}/start` with a bearer token. Provider keys for speech and models go in a Cloud secret set.
- **Plans (Daily pricing page, 2026-11-19).** Hosting is per minute, measured to the second. **agent-1x** (0.5 vCPU, 1 GB): **$0.01** active, **$0.0005** reserved. **agent-2x** (1 vCPU, 2 GB): **$0.02** / **$0.0010**. **agent-3x** (1.5 vCPU, 3 GB): **$0.03** / **$0.0015**. A larger profile gives one session more CPU. It does not add a second session on that instance. `min-agents` defaults to 0 on the CLI; reserved minutes accrue only while warm instances stay up. Active minutes start at `/start` and stop when the pipeline shuts down. Daily-hosted pools cap at 50 instances unless you request more; a full pool returns HTTP 429. A free auto-scaling buffer sits above the paid warm set. Daily WebRTC voice for 1:1 sessions on Cloud is free; voice and video is **$0.004** per participant-minute. PSTN is **$0.018**/minute. SIP dial is **$0.003–$0.02**/minute, and SIP REFER is **$0.20** per event. LLM, STT, and TTS are billed by those providers. Krisp noise suppression is included for the first 10,000 active session-minutes a month, then **$0.0015**/minute. Enterprise agent-minutes in a self-hosted region are not metered by profile.
- **Alternatives.** LiveKit Agents when the agent should join a LiveKit room with the LiveKit worker model, including LiveKit Cloud inference. ElevenLabs Agents when the voice agent, phone number, and MCP tools should be that vendor's hosted product. A coding-agent sandbox (`e2b-sandboxes`, `vercel-sandbox`) when the job is untrusted shell execution rather than a live call.
- **Caveats.** The quickstart deploy file sets `min_agents = 1`, which bills a warm instance all day (`pipecat-cloud-reserved-minutes`). A pipeline that never shuts down keeps the active minute running until you set a max session duration. Cold start is about 10 seconds in the best case and the session is dropped if no instance is ready in about 2 minutes. The quickstart scaffold writes `AGENTS.md` and `CLAUDE.md`. The optional context hub is a local index of about 900 MB.

## Sources

- [Introduction to Pipecat](https://docs.pipecat.ai/pipecat/get-started/introduction) — accessed 2026-11-19
- [Pipecat quickstart](https://docs.pipecat.ai/pipecat/get-started/quickstart) — accessed 2026-11-19
- [Pipecat Cloud introduction](https://docs.pipecat.ai/pipecat-cloud/introduction) — accessed 2026-11-19
- [Pipecat Cloud accounts](https://docs.pipecat.ai/pipecat-cloud/fundamentals/accounts-and-organizations) — accessed 2026-11-19
- [Pipecat Cloud scaling](https://docs.pipecat.ai/pipecat-cloud/fundamentals/scaling) — accessed 2026-11-19
- [Pipecat Cloud pricing](https://www.daily.co/pricing/pipecat-cloud) — accessed 2026-11-19
- [Pipecat Cloud](https://pipecat.daily.co) — accessed 2026-11-19
