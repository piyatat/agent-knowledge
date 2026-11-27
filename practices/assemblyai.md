---
id: assemblyai
title: AssemblyAI — speech-to-text, with an account MCP server
kind: service
tags: [assemblyai, speech, transcription, mcp]
status: active
updated: 2026-11-27
when_to_use: Transcribing recorded or live audio, or letting an agent submit a public audio URL
---

## Summary

**AssemblyAI** is a pay-as-you-go speech API. Pre-recorded audio is billed by audio length. Streaming is billed by how long the WebSocket stays open, including idle time. A new account gets $50 of credits for pre-recorded speech, real-time speech, and Speech Understanding. Those credits do not cover LLM Gateway. The account MCP server at `https://mcp.assemblyai.com/mcp` transcribes and can delete a transcript. A separate docs server only searches documentation. Use AssemblyAI when the job is transcription or a transcript summary. Use Deepgram (`deepgram`) for Flux turn-taking, and Cartesia (`cartesia`) when speech is on Cartesia credits.

## Notes

- **Access.** Sign up at `links.get`. On 2026-11-27 that URL stayed on itself with HTTP 200 and the title AssemblyAI | Sign Up. The homepage links to that path. The form offers Google or email. No card is required for the $50 credits. API keys: 2 on Free, 4 on pay-as-you-go, 25 on a contracted plan. The REST API takes the raw key. The account MCP server returns 401 unless the header is `Authorization: Bearer` plus the key. OAuth sign-in is the other option. Revoking a connection in the dashboard stops it within a few minutes.
- **Rates.** The pricing page updated 2026-11-10 lists pre-recorded AssemblyAI-STT-3.7 at $0.21 per hour and Universal-2 at $0.15 per hour. Streaming AssemblyAI-STT-3.7-Realtime is $0.30 per hour of session time. AssemblyAI-STT-3.7-Realtime-Agent is $0.45 per hour of session time. The Dictation API is $0.62 per hour and includes cleanup. The Sync API is $0.30 per hour of audio and returns a raw transcript. Text-to-speech is $15 per million input characters. Pre-recorded billing is pro-rated to the second. A failed transcript is not charged. Each channel of a multichannel file is billed. EU speech hosts (`api.eu.assemblyai.com`, `streaming.eu.assemblyai.com`) are the same price as the US hosts. Set `speech_models` on pre-recorded requests and `speech_model` on streaming. The pricing page says the default model can differ between a free account and a paid one.
- **Streaming and credits.** Billing starts when the socket opens and stops when the session ends. Two sockets open for five minutes bill as ten minutes. A session that is not closed auto-closes after 3 hours and is billed for those 3 hours. Send `{"type":"Terminate"}` to stop it. The $50 credits do not expire and remain after a card is added. LLM Gateway is billed from the account balance from the first request. At a zero or negative balance without auto-pay, the API pauses with `Your current account balance is negative. Please top up to continue using the API.` In-region LLM Gateway hosts cost 10% more than global routing as of 2026-07-01. Details: `assemblyai-session-bill-and-gateway`.
- **What MCP can change.** `https://mcp.assemblyai.com/mcp` bills the connected account at normal API rates. `submit_transcript` starts a job from a public audio or video URL. `summarize_transcript` uses LLM Gateway. `delete_transcript` permanently deletes the transcript and its data. The docs page says the server cannot read a file on the computer. The server homepage also lists `create_upload_url` for a local file up to 4.5 MB. Plan against the docs page for anything that is not a public URL, and do not assume a local path works. The docs MCP at `https://www.assemblyai.com/docs/mcp` is free, needs no auth, and does not transcribe.
- **New-session caps.** The rate-limits page starts free accounts at 5 new streaming sessions per minute and paid accounts at 200. Paid limits rise 10% for the next minute after a minute at 80% or more, and fall 5% below 60%, never under the starting limit. Fifteen minutes with no new sessions returns the limit to the start. There is no cap on how many sessions stay open. The pricing page instead says pay-as-you-go streaming concurrency is 100 new streams per minute. Plan against the rate-limits page. The error text is `Unauthorized Connection: Too many concurrent sessions`, then WebSocket close `1008`. The same close code is used for a bad key or insufficient funds. Retry only when the error text is that concurrent-sessions sentence. The limit is per account, not per API key. Closing a session does not free a slot in the current minute.

## Sources

- [AssemblyAI pricing](https://www.assemblyai.com/pricing) — accessed 2026-11-27
- [Billing and pricing](https://www.assemblyai.com/docs/billing-and-pricing) — accessed 2026-11-27
- [Streaming rate limits](https://www.assemblyai.com/docs/streaming/rate-limits) — accessed 2026-11-27
- [AssemblyAI MCP server](https://www.assemblyai.com/docs/mcp-server) — accessed 2026-11-27
- [AssemblyAI MCP endpoint](https://mcp.assemblyai.com/) — accessed 2026-11-27
- [Account management](https://www.assemblyai.com/docs/account-management) — accessed 2026-11-27
- [AssemblyAI sign-up](https://www.assemblyai.com/dashboard/signup) — accessed 2026-11-27
- [AssemblyAI](https://www.assemblyai.com/) — accessed 2026-11-27
