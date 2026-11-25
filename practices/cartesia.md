---
id: cartesia
title: Cartesia — Sonic speech, Ink transcription, and voice agents
kind: service
tags: [cartesia, speech, voice, mcp]
status: active
updated: 2026-11-25
when_to_use: Speaking or transcribing with Cartesia Sonic or Ink, or letting an agent call the Cartesia MCP server
---

## Summary

**Cartesia** is a speech API. Sonic turns text into audio, Ink transcribes audio, and hosted Line agents place voice calls. Credits pay for Sonic and Ink. Agent minutes are a separate dollar balance. The hosted MCP server is `https://mcp.cartesia.ai/mcp` and signs in through the Playground. Use Cartesia when the agent should speak or transcribe on this credit plan. Use Deepgram (`deepgram`) when the pipeline wants Nova or Flux and a per-minute speech bill. Use ElevenAgents (`elevenlabs-agents`) when the whole voice agent should be hosted by ElevenLabs. LiveKit Agents (`livekit-agents`) and Pipecat (`pipecat`) can call Cartesia and still own the room.

## Notes

- **Access.** The homepage links sign-up to `links.get`. A fetch from this runner got HTTP 429 from a Vercel checkpoint, so that URL is the vendor link, not a page this runner rendered. The API base is `https://api.cartesia.ai` (WebSocket `wss://`). Send `Authorization: Bearer` or `X-Api-Key` from a server. Send `Cartesia-Version`. The OpenAPI spec marks that header required and lists `2026-08-14`. The conventions page says to send the date you tested the integration. On a WebSocket, `cartesia_version` in the query wins over the header. A call over plain HTTP can cause the key to be rotated. Browser apps should use a short-lived access token (at most 3600 seconds) with `tts`, `stt`, or `agent` grants, not the API key.
- **Keys.** A standard key (`sk_car_...`) calls TTS and STT and is rejected on usage and key-admin routes. An admin key (`sk_car_admin_...`) is the reverse, including in the API reference “Try it” panel. Only organization admins can create admin keys.
- **Models and plans (pricing page, 2026-11-25).** `sonic-3.6` follows the latest stable snapshot. `sonic-3.6-2026-08-27` does not change. `sonic-preview` is a beta id that can change without notice. Set `language` or `locale`, not both. Free is $0 for 20,000 credits and $1 of agent time, without a commercial license or instant voice cloning. Pro is $5 for 100,000 credits and $5 of agent time, and adds the commercial license and instant cloning. Startup is $49 for 1.25 million credits and $49 of agent time, plus professional voice cloning (2 slots) and organizations. Scale is $299 for 8 million credits and $299 of agent time, with 4 clone slots. Free and Pro have no professional-clone slots. Training a clone is free. Speech from a clone is still about 1 credit per character. Agent calls are $0.03 per minute, plus $0.014 when Cartesia provides the number. The model’s tokens are extra. Those prepaid dollars cover about 33 minutes, 2 hours 47 minutes, 27 hours 13 minutes, and 166 hours 7 minutes. Errors do not spend credits. A break tag counts as 1 credit. Ink rates depend on the model: `ink-2` and `ink-preview` are 3 credits per second on the streaming endpoints, and `ink-whisper` is 1 credit per second streaming or 1 credit per 2 seconds on batch. Silence is billed. Infill is 300 credits plus the usual per-character rate.
- **Concurrency.** TTS and STT do not share a pool with each other or with agent calls. The concurrency table lists TTS and STT caps of 2 and 8 (Free), 3 and 12 (Pro), 5 and 20 (Startup), and 15 and 60 (Scale). The sentence above that table says the two caps match. The table and the Scale example do not. Plan against the table. Agent-call caps on the Line page are 8, 12, 20, and 60. Free returns 429 as soon as a pool is full. Paid plans queue up to 10 times the cap, then return 429. Reusing a TTS WebSocket `context_id` does not add a generation. An idle STT socket still counts until it closes (3 minutes idle). An idle TTS socket closes after 5 minutes. Open TTS sockets are capped at 10 times the TTS concurrency limit.
- **Overages and MCP.** Credit overages are optional on paid plans: Pro $65, Startup $45, and Scale $38 per extra million credits. With them off, the next request fails at a zero credit balance. Agent-dollar overages are off by default, so new calls stop at $0. Free has no agent overage. Rollover holds up to twice the plan’s monthly credits. MCP sign-in creates an organization MCP key if one is missing. An org admin can opt into admin tools on that grant. `text_to_speech` saves audio in the org by default and returns a `download_url` that lasts about 24 hours. The hosted server cannot read a path on the agent machine. Pass a `file_id` instead. `delete_voice` and `delete_pronunciation_dict` remove data. `get_credit_usage` is for org admins. MCP itself sends `Cartesia-Version: 2026-08-14`.

## Sources

- [Cartesia pricing](https://www.cartesia.ai/pricing) — accessed 2026-11-25
- [How Cartesia charges](https://docs.cartesia.ai/pricing) — accessed 2026-11-25
- [Cartesia API conventions](https://docs.cartesia.ai/use-the-api/api-conventions) — accessed 2026-11-25
- [Cartesia concurrency and timeouts](https://docs.cartesia.ai/use-the-api/concurrency-limits-and-timeouts) — accessed 2026-11-25
- [Sonic 3.6](https://docs.cartesia.ai/build-with-cartesia/tts-models/latest) — accessed 2026-11-25
- [Text-to-speech bytes](https://docs.cartesia.ai/api-reference/tts/bytes) — accessed 2026-11-25
- [Generate an access token](https://docs.cartesia.ai/api-reference/auth/access-token) — accessed 2026-11-25
- [Cartesia MCP](https://docs.cartesia.ai/tools/ai/mcp) — accessed 2026-11-25
- [Line agent concurrency](https://docs.cartesia.ai/line/infrastructure/scaling) — accessed 2026-11-25
- [Cartesia sign-up](https://play.cartesia.ai/sign-up) — accessed 2026-11-25
- [Cartesia](https://www.cartesia.ai/) — accessed 2026-11-25
