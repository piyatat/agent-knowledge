---
id: cartesia-overage-and-version
title: Cartesia blocked a request on credits, concurrency, or the wrong key
kind: knowledge
tags: [cartesia, speech, billing, rate-limits]
status: active
updated: 2026-11-25
when_to_use: A Cartesia request returned 429 or 400, a key was rejected, or speech stopped at a zero balance
---

## Summary

Cartesia (`cartesia`) spends credits only on successful Sonic and Ink calls, and it spends dollars on voice-agent minutes. With overages left off, a zero balance stops the next request. A Free plan also returns 429 immediately when its small concurrency pool is full. A standard key and an admin key are not substitutes, and sending both `language` and `locale` is a 400.

## Notes

- **Two balances.** TTS is about 1 credit per character, and preprocessing can move that. A break tag is 1 credit. STT bills the audio duration, including silence, at a rate that depends on `ink-2`, `ink-preview`, or `ink-whisper` and on batch versus streaming. Agent calls are $0.03 per minute in dollars, not credits, plus $0.014 for a Cartesia number and the model’s own token bill. Free includes $1 of agent time and cannot turn agent overages on. On Pro, Startup, and Scale, agent overages are off until an organization admin enables them, so calls stop at $0. Credit overages are also optional. Off means new speech calls fail at a zero credit balance. On, the extra credits bill at renewal: Pro $65, Startup $45, and Scale $38 per million. The balance can go negative during the period. Errors do not spend credits. Paid credits roll over only up to twice the current plan’s monthly allotment. Free has no commercial license. `sonic-3.6` moves to the newest stable snapshot. Pin `sonic-3.6-2026-08-27` when the voice must not change. `sonic-preview` can change without notice.
- **Concurrency is three pools.** TTS, STT, and agent calls do not borrow from each other. Plan against the concurrency table (Free 2 TTS and 8 STT, Pro 3 and 12, Startup 5 and 20, Scale 15 and 60), not the sentence on that page that says the two speech caps are equal. Agent-call caps are 8, 12, 20, and 60 on those same names. Free returns 429 at once. Paid plans queue up to 10 times the cap, then 429. Another TTS request on the same WebSocket `context_id` does not take a second slot. An idle STT socket still counts until the 3-minute idle close. Opening too many TTS sockets (10 times the TTS cap) is its own 429. For `Cartesia-Version` on or after `2026-03-01`, the JSON `error_code` is `concurrency_limited` or `quota_exceeded`. Older or invalid versions return plain text instead.
- **Auth and MCP.** A standard key is rejected on credit-usage and key-admin routes. An admin key is rejected on TTS and STT. Access tokens last at most one hour and only cover the grants set when they were minted. Calling the API over HTTP can rotate the key. Setting both `language` and `locale` returns 400. Hosted MCP (`https://mcp.cartesia.ai/mcp`) cannot read a local file path. `speech_to_text` and `clone_voice` need a `file_id` there. `text_to_speech` stores the clip in the org by default. `delete_voice` removes a cloned voice. `get_credit_usage` works for org admins only, and admin MCP tools are an opt-in at connect time.

## Sources

- [Cartesia pricing](https://www.cartesia.ai/pricing) — accessed 2026-11-25
- [How Cartesia charges](https://docs.cartesia.ai/pricing) — accessed 2026-11-25
- [Cartesia API conventions](https://docs.cartesia.ai/use-the-api/api-conventions) — accessed 2026-11-25
- [Cartesia concurrency and timeouts](https://docs.cartesia.ai/use-the-api/concurrency-limits-and-timeouts) — accessed 2026-11-25
- [Sonic 3.6](https://docs.cartesia.ai/build-with-cartesia/tts-models/latest) — accessed 2026-11-25
- [Text-to-speech bytes](https://docs.cartesia.ai/api-reference/tts/bytes) — accessed 2026-11-25
- [Cartesia MCP](https://docs.cartesia.ai/tools/ai/mcp) — accessed 2026-11-25
- [Line agent concurrency](https://docs.cartesia.ai/line/infrastructure/scaling) — accessed 2026-11-25
