---
id: livekit-agents
title: LiveKit Agents — realtime voice, video, and phone agents
kind: tool
tags: [livekit, voice, realtime, sdk]
status: active
updated: 2026-11-17
when_to_use: Building a Python or Node agent that joins a live audio, video, or phone room
---

## Summary

**LiveKit Agents** is an open-source Python and Node.js framework (Apache-2.0) that joins a LiveKit room as a realtime participant. It runs an STT–LLM–TTS or realtime-model pipeline, tools, handoffs, and telephony. LiveKit Cloud can host the agent process. It is not a coding agent and not a hosted browser (`browserbase`).

## Notes

- **Access.** The voice AI quickstart (linked from `links`) is the path for a first Python or Node agent. Python needs 3.10 or newer; Node needs 20 or newer. Sign in to LiveKit Cloud from that guide, or run against a LiveKit server you operate. Agent Builder in the browser is the no-code prototype. Deploy with the LiveKit CLI so the process stays up without your laptop.
- **Auth.** The agent server registers with a Cloud project or a self-hosted LiveKit server, then a job subprocess joins the room. Model calls can use **LiveKit Inference** (billed as Cloud inference credits, no separate provider key) or a provider plugin with that provider’s key. Cloud project keys stay in the project, not in the prompt.
- **Plans (pricing page, 2026-11-17).** **Build** is **$0/month** and includes agent deployment, observability, simulations, inference credits, the global edge, one telephony number, and session analytics. **Ship** starts at **$50/month** (team collaboration, custom voices, rollback). **Scale** starts at **$500/month** (role-based access, region pinning, private links, HIPAA). Session minutes, inbound US local minutes, and inference credits are allotted per plan; the pricing page is the estimator. Enterprise adds SSO and a support SLA.
- **Dispatch.** By default, agent servers in a Cloud project are dispatched to **each new room**. A job is a subprocess for that room. Telephony uses LiveKit SIP so a caller can join from a phone.
- **Alternatives.** Zep (`zep`) or Mem0 (`mem0`) when the gap is long-term memory rather than the audio path. Browserbase when the agent must drive a page, not a room.
- **Caveats.** Tools and retrieved context are still untrusted (`prompt-injection-agent-defense`, `zep-memory-as-instructions`). A Cloud project that creates rooms for unrelated users will attach this agent to those rooms until dispatch is narrowed.

## Sources

- [LiveKit Agents introduction](https://docs.livekit.io/agents/) — accessed 2026-11-17
- [Voice AI quickstart](https://docs.livekit.io/agents/start/voice-ai/) — accessed 2026-11-17
- [LiveKit pricing](https://livekit.com/pricing) — accessed 2026-11-17
- [livekit/agents](https://github.com/livekit/agents) — accessed 2026-11-17
