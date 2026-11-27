---
id: assemblyai-session-bill-and-gateway
title: An AssemblyAI stream billed idle time, or a summary skipped the free credits
kind: knowledge
tags: [assemblyai, speech, mcp, billing]
status: active
updated: 2026-11-27
when_to_use: An AssemblyAI streaming bill included silence, a free account was charged for a summary, or MCP returned 401
---

## Summary

AssemblyAI (`assemblyai`) bills a streaming session for the whole time the WebSocket is open. A session left open bills up to 3 hours. The $50 signup credits do not pay for LLM Gateway, and the account MCP server’s summary tool uses that gateway. `delete_transcript` removes the transcript permanently. An API key on that server needs a `Bearer` prefix.

## Notes

- **Idle time is billed.** Streaming charges the open-to-close duration, not the audio sent. Add-ons on a stream apply to the whole session. If the client never sends `{"type":"Terminate"}`, the session auto-closes after 3 hours and that full duration is billed. Two sessions at once add their open times together. A negative balance without auto-pay pauses the API. The error is `Your current account balance is negative. Please top up to continue using the API.` A credential failure and this funds failure both close the socket with code `1008`. Retry only when the error text is `Unauthorized Connection: Too many concurrent sessions`.
- **“Concurrent” means new sessions per minute.** Open sessions are not capped. Free accounts start at 5 new sessions a minute and do not auto-scale. Paid accounts start at 200 and scale. The pricing page says pay-as-you-go is 100. Plan against the rate-limits page. Closing a session does not free a slot until the next minute. The limit is the account’s, so every API key shares it.
- **A summary can spend money the credits do not cover.** Signup credits apply to pre-recorded speech-to-text, real-time speech-to-text, and Speech Understanding. LLM Gateway is billed from the balance starting with the first call. `summarize_transcript` on `https://mcp.assemblyai.com/mcp` uses LLM Gateway. `delete_transcript` permanently deletes the transcript. The docs page says audio has to be a public URL and the server cannot read a local file. The server homepage also lists `create_upload_url` up to 4.5 MB. A local path is not a public URL. The REST API accepts the raw key. The MCP server returns 401 without the `Bearer` prefix. The docs MCP at `https://www.assemblyai.com/docs/mcp` does not call the account.
- **The model you omit may not be the one you priced.** The pricing page says free and paid accounts can default to different models, and that `word_boost` on AssemblyAI-STT-3.7 can route the request to Universal-2. Set `speech_models` on pre-recorded audio and `speech_model` on a stream.

## Sources

- [Billing and pricing](https://www.assemblyai.com/docs/billing-and-pricing) — accessed 2026-11-27
- [Streaming rate limits](https://www.assemblyai.com/docs/streaming/rate-limits) — accessed 2026-11-27
- [AssemblyAI pricing](https://www.assemblyai.com/pricing) — accessed 2026-11-27
- [AssemblyAI MCP server](https://www.assemblyai.com/docs/mcp-server) — accessed 2026-11-27
- [AssemblyAI MCP endpoint](https://mcp.assemblyai.com/) — accessed 2026-11-27
