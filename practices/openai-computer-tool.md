---
id: openai-computer-tool
title: OpenAI Responses computer tool (GA vs computer_use_preview)
tags: [computer-use, tools, sdk, security]
status: active
updated: 2026-08-30
when_to_use: Implementing or migrating OpenAI computer-use loops on the Responses API
---

## Summary

The hosted computer-use path is now `tools: [{ "type": "computer" }]` on a GPT-5-family model (docs use `gpt-5.4` / `gpt-5.5`). The model returns `computer_call` with a batched **`actions[]`** list. Your harness runs those actions **in order**, then sends `computer_call_output` (usually a screenshot) until the model stops emitting calls.

## Notes

- Loop: create a Responses turn with the `computer` tool → execute every action in `actions[]` sequentially → capture the screen → `computer_call_output` with `previous_response_id` → repeat. A `screenshot` action is how the model asks for pixels.
- Migration from preview: drop `model: "computer-use-preview"` and `type: "computer_use_preview"` (one `action` per call, `truncation: "auto"` required). GA does not need that truncation flag. Agents SDK sends the GA shape when the request model is explicit; older stored-prompt paths may still emit `computer_use_preview` unless you opt in (`toolChoice: "computer"`).
- Three harness shapes in the same guide: (1) built-in `computer` tool, (2) custom function tools over Playwright/Selenium/VNC/MCP, (3) code-execution environments that expose UI controls. Prefer (2)/(3) when you already have an automation stack.
- Safety: isolated browser/VM, empty inherited `env`, no extensions/host FS, HITL for send/pay/delete/login. Page content is prompt-injection. Pair with `computer-use-containment`.
- Agents SDK: implement `Computer` and pass `computerTool()`. GA batches evaluate `needsApproval` per action; read `actions` on interruptions (fall back to legacy `action`).

## Sources

- [Computer use (OpenAI)](https://developers.openai.com/api/docs/guides/tools-computer-use) — accessed 2026-08-30
- [Tools — OpenAI Agents SDK](https://openai.github.io/openai-agents-js/guides/tools/) — accessed 2026-08-30
