---
id: deepgram-default-model-and-concurrency
title: Deepgram transcribed with Base, or a second project did not add concurrency
kind: knowledge
tags: [deepgram, speech, models, rate-limits]
status: active
updated: 2026-11-22
when_to_use: A Deepgram transcript used the wrong model, returned 429, or rejected a Bearer token
---

## Summary

Deepgram (`deepgram`) defaults `model` to `base-general`, not Nova-3. Concurrency belongs to the project. Another API key does not raise it, and a second self-serve project is capped at one concurrent stream. The auth header is `Authorization: Token`, not Bearer. Over the cap, the API returns `429`.

## Notes

- **Model.** Set `model` explicitly. Nova-3 lives on `/v1/listen`. Flux STT lives on `/v2/listen` and is streaming only (`flux-general-en` or `flux-general-multi`). Sending a Flux model name to the v1 listen URL is the wrong endpoint. Whisper Cloud is pre-recorded and, on the rate-limits table, North America only: 3 concurrent requests on Pay as you go and Growth, starting at 15 on Enterprise. The model page instead says 5 concurrent on pay as you go and 15 on a paid plan, and it caps Whisper processing at 20 minutes. Plan against the rate-limits table and re-check both pages before counting on the higher number.
- **Concurrency (rate-limits page, 2026-11-22).** Pay as you go allows 150 concurrent Flux or Nova streams in each listed region, and 50 concurrent pre-recorded Nova requests. Streaming diarization drops that to 50 in North America and 25 in Europe, Australia, and India. Pre-recorded diarization stays at 50 in North America and drops to 25 elsewhere. Voice Agent is 45 concurrent connections on pay as you go. Growth raises North America streaming (Nova and Flux) to 225 and does not raise the pre-recorded Nova cap of 50. Pay as you go and Growth cannot have those published caps increased. Enterprise starts higher and can request more. If one call combines speech-to-text with an intelligence feature, the lower of the two limits applies.
- **Projects.** Limits are per project, not per account or key. Creating more projects under the same account does not add a pool. Secondary self-serve projects are limited to one concurrent stream on purpose. Spreading traffic across projects to bypass the cap violates Deepgram’s terms.
- **Auth and audio.** A missing or Bearer credential fails. Plain HTTP fails. Multichannel files bill every channel’s duration. Silence is not rounded up to a block, but it is still processed audio if it is in the file you send.

## Sources

- [Model options](https://developers.deepgram.com/docs/model) — accessed 2026-11-22
- [API rate limits](https://developers.deepgram.com/reference/api-rate-limits) — accessed 2026-11-22
- [Working with concurrency rate limits](https://developers.deepgram.com/docs/working-with-concurrency-rate-limits) — accessed 2026-11-22
- [Authenticating](https://developers.deepgram.com/guides/fundamentals/authenticating) — accessed 2026-11-22
- [Deepgram pricing](https://deepgram.com/pricing) — accessed 2026-11-22
