---
id: gpt-62-background-and-instructions
title: GPT-6.2 instructions miss the cache, or a background window stores the prompt
kind: knowledge
tags: [openai, responses, billing, caching]
status: active
updated: 2026-11-20
when_to_use: A GPT-6.2 agent pays full price for a long run, misses a cached prefix, or a background response retains data under Zero Data Retention
---

## Summary

From GPT-6.2, the Responses API appends top-level `instructions` after `input`, and Astra and Sol have no Flex tier. Discounted background windows are a public beta on Astra, Sol, Terra, and Luna. They are cheaper model-token rates, and they still store the request long enough to finish it.

## Notes

- **Instructions are not the prefix.** Models from GPT-6.2 append top-level `instructions` after `input`. A stable system prompt placed only there does not sit at the front of the cached prefix. Put reusable instructions in a developer message as the first `input` item. Use top-level `instructions` for guidance that applies only to this request. Prefix edits, a model downgrade, and a change of end user or organization still drop prior reasoning (`gpt-62-responses-only-tools`).
- **No Flex on GPT-6.2.** Astra and Sol reject Flex (`service_tier: flex`). A long run uses background mode on Standard processing. Set `background` to true, leave `stream` false or omit it, and set `background_options.completion_window` to `2h` (30% below Standard model-token rates) or `8h` (40% below). `service_tier: default` selects Standard. `auto` qualifies only when the API actually selects Standard. The default window is `soonest`, which has no discount and uses the normal request limits. `2h` and `8h` share the Batch/Background rate limit, and input tokens count at submission. The window is a target that starts when the request is accepted, for that response, not a promise that a whole tool loop finishes inside it.
- **Cache and retention.** A Standard request cannot reuse a prompt-cache entry written by a `2h` or `8h` request, even when the prompt matches. Background mode stores the request temporarily when `store` is false and when the org uses Zero Data Retention, so the result can be retrieved. That temporary copy is encrypted at rest for `soonest`, `2h`, and `8h`.
- **Follow-ups.** `continuation_id` does not add earlier turns. It is an opaque id your app chooses. Reusing the same window, continuation id, model, and project makes a follow-up eligible for higher queue priority. If `previous_response_id` has expired, send the original input and the saved output items, including encrypted reasoning, and then the new tool result. Subscribe to `response.completed` (and the failure events) or poll while status is `queued` or `in_progress`. After a `2h` or `8h` accept, eligible capacity errors are retried for you. Do not start a second request for the same id.

## Sources

- [Background mode](https://developers.openai.com/api/docs/guides/background) — accessed 2026-11-20
- [Using GPT-6.2](https://developers.openai.com/api/docs/guides/latest-model) — accessed 2026-11-20
- [API changelog](https://developers.openai.com/api/docs/changelog) — accessed 2026-11-20
- [Pricing](https://developers.openai.com/api/docs/pricing) — accessed 2026-11-20
