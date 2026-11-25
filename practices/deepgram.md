---
id: deepgram
title: Deepgram — speech-to-text, Flux turn-taking, and voice APIs
kind: service
tags: [deepgram, speech, voice, transcription]
status: active
updated: 2026-11-25
when_to_use: Transcribing live or recorded audio for an agent, or streaming turn-taking speech with Flux
---

## Summary

**Deepgram** is a hosted speech API. Pre-recorded and streaming transcription use Nova models. Flux STT is a streaming model with built-in end-of-turn detection for voice agents. The same account also exposes text-to-speech and a Voice Agent API. Use Deepgram when a pipeline you run needs the speech model. Use LiveKit Agents (`livekit-agents`) or Pipecat (`pipecat`) when you also need the room and the agent loop. Use ElevenLabs Agents (`elevenlabs-agents`) when the whole voice agent should be hosted. Use Cartesia (`cartesia`) when Sonic speech or Ink transcription should run on Cartesia’s credit plan.

## Notes

- **Access.** Sign up at `links.get`. Pay as you go includes a $200 credit, no card, and the credit does not expire. The pricing FAQ describes that credit as about 43,000 minutes of Nova-3 transcription. The first API key is created in the console, on a project that signup creates. Later keys can be created from the API by a key with `keys:write` or the administrator role. Send `Authorization: Token` with the key. The scheme is not Bearer. Calls must be HTTPS. Short-lived tokens exist for `/listen`, `/speak`, and `/Read`. Temporary keys are capped at 250 a day.
- **Models.** The documented default for `model` is `base-general`. Omitting it does not select Nova-3. Nova-3 is requested on `/v1/listen` (`nova-3`, plus `general`, `medical`, and `pharma` options). Flux STT is streaming on `/v2/listen` (`flux-general-en`, or `flux-general-multi` with an optional `language_hint`). Whisper Cloud is a hosted Whisper and is less scalable than the Nova models. Custom models are Enterprise only.
- **Plans (pricing page, 2026-11-22).** Pay as you go has no minimum. Nova-3 streaming is $0.0048 per minute monolingual and $0.0058 multilingual. Pre-recorded Nova-3 is $0.0043 and $0.0052. Flux STT streaming is $0.0065 English and $0.0078 multilingual. Those speech-to-text rows are marked as promo prices, with higher previous rates on the same page. Growth is prepaid credits from $4,000 a year and lists up to 20% off. Billing is per second of processed audio, with no block rounding. Multichannel audio bills the total duration across channels. Smart formatting is included. Redaction, keyterm prompting, entity detection, and streaming diarization are extra per minute. Pre-recorded diarization is included in the add-on price table.
- **Regions.** North America is `api.deepgram.com`. Europe, Australia, and India are `api.eu`, `api.au`, and `api.in` on `deepgram.com`. Concurrency is per project, not per key. A second project on a self-serve account is limited to one concurrent stream.
- **Caveats.** The default model is Base, and extra concurrency does not come from extra keys. Details: `deepgram-default-model-and-concurrency`.

## Sources

- [Speech-to-text getting started](https://developers.deepgram.com/docs/stt/getting-started) — accessed 2026-11-22
- [Model options](https://developers.deepgram.com/docs/model) — accessed 2026-11-22
- [Authenticating](https://developers.deepgram.com/guides/fundamentals/authenticating) — accessed 2026-11-22
- [Creating API keys](https://developers.deepgram.com/docs/create-additional-api-keys) — accessed 2026-11-22
- [API rate limits](https://developers.deepgram.com/reference/api-rate-limits) — accessed 2026-11-22
- [Deepgram pricing](https://deepgram.com/pricing) — accessed 2026-11-22
- [Deepgram sign-up](https://console.deepgram.com/signup) — accessed 2026-11-22
