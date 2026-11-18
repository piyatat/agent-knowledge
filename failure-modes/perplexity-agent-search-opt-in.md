---
id: perplexity-agent-search-opt-in
title: A Perplexity Agent API model call does not search, and signup credit does not unlock it
kind: knowledge
tags: [perplexity, search, migration, billing]
status: active
updated: 2026-11-18
when_to_use: A Perplexity Agent API answer has no citations, tools set to an empty list did not stop search, or signup credit is rejected
---

## Summary

Sonar chat completions searched by default and returned `choices[0].message.content` plus top-level citations. The Agent API does neither. A model-only request is ungrounded, an empty `tools` array does not turn off an effort level’s tools, and a sign-up credit cannot call the Agent API until you purchase credits (`perplexity-agent-api`).

## Notes

- **Search is opt-in.** The quickstart states that a request with only `model` and `input` answers from the model and returns no citations. Add `tools: [{"type": "web_search"}]` or an `effort`. The migration guide says `fast` enables web search; a request that selects a model directly must add the tool. Offering the tool does not force a call. The vendor migration skill forces it with `tool_choice: {"type": "web_search"}`.
- **Empty tools do not clear an effort level.** `tools: []` leaves the effort level’s tools enabled. There is no public switch to disable them. `max_tool_calls: 0` disables every tool call, search included. Sonar’s `disable_search` has no field of the same name.
- **Where the answer and the sources moved.** Read `output_text` (SDK) or `output[]` items with `type: "message"` and `content` of `type: "output_text"`. Sources are an `output` item with `type: "search_results"`, and each `[n]` marker maps to `results[].id`. There is no top-level `citations` list. Streams are typed SSE events; answer text is `response.output_text.delta`, not `choices[0].delta.content`.
- **Strict JSON.** The vendor migration skill says any unknown or leftover field, top-level or nested, returns HTTP **400** `invalid_request` with `param` set to that field. `max_tokens` maps to `max_output_tokens`, which is required for `anthropic/*` models. `response_format.type: "regex"` has no equivalent. Date filters move onto the `web_search` tool’s `filters` and use `MM/DD/YYYY`. With an effort level, `instructions` replaces the effort prompt rather than appending to it.
- **Old Sonar paths still answer.** `POST /chat/completions`, `POST /v1/sonar`, and `POST /v1/chat/completions` are still supported. A client that was not migrated keeps working, so a green Sonar call does not mean the Agent API body is valid.
- **Credit and rate-limit traps.** Sign-up credit expires in **60 days** and does not unlock the Agent API, the Orchestrator, or batch. Purchased credits do. Tier 0 is **1** request per second, and a poll of `GET /v1/agent/{id}` counts. A token-limit pause is `status: "in_progress"` with a `paused` object, or `response.paused` if you opted into pause events. Do not resubmit it. A foreground client that times out cancels the run. A rejected token-limit request still consumes one request toward the per-second cap.

## Sources

- [Agent API quickstart](https://docs.perplexity.ai/docs/agent-api/quickstart) — accessed 2026-11-18
- [How to migrate from Sonar](https://docs.perplexity.ai/docs/agent-api/migrate-from-sonar/how-to) — accessed 2026-11-18
- [Sonar request mapping (vendor skill)](https://github.com/perplexityai/api-platform-developers/blob/main/skills/migrate-sonar-to-agent-api/references/request-mapping.md) — accessed 2026-11-18
- [Projects and billing](https://docs.perplexity.ai/docs/getting-started/projects) — accessed 2026-11-18
- [Rate limits and usage tiers](https://docs.perplexity.ai/docs/admin/rate-limits-usage-tiers) — accessed 2026-11-18
