---
id: haystack-text-always-exits
title: A Haystack agent stops on plain text, or confirmation never runs
kind: knowledge
tags: [haystack, agents, tools, approval]
status: active
updated: 2026-11-21
when_to_use: A Haystack agent stopped on plain text before calling the finish tool, or a confirmation hook never asked
---

## Summary

A Haystack (`haystack`) agent treats a tool-free reply as success even when `exit_conditions` names a finish tool. Confirmation code written against the old constructor argument never registers, so the tool runs with no human check.

## Notes

- **`"text"` always exits.** `exit_conditions` defaults to `["text"]`. Setting it to a tool name such as `submit_report` adds that tool as a stop. It does not remove `"text"`. A model reply with no tool calls ends the run and sets `exit_reason` to `"text"`. The finish tool’s result is then absent. To require the tool, an `on_exit` hook checks for `"text"`, appends a message telling the model to call the tool, and sets `continue_run` to true. When the tool already ran, `exit_reason` is the tool name and the hook lets the run end. A counter in `state_schema` is what stops a model that never calls the tool. `on_exit` does not run for a `max_agent_steps` stop; that path is `after_run`.
- **Other stops.** `exit_reason` `"length"` means the model hit its output-token limit. `"content_filter"` means the provider stopped the reply. Either can leave a partial `last_message`. The agent stops on both so it does not resend an unchanged request. An `on_exit` hook can rewrite messages and set `continue_run`.
- **Confirmation moved.** The migration guide removes the `confirmation_strategies` and `confirmation_strategy_context` constructor parameters. Register a `ConfirmationHook` under `before_tool`. A strategy only sees arguments the model produced. `inputs_from_state` is injected when the tool runs, so the human is not shown those values. `AskOncePolicy` asks once per `(tool_name, parameters)` pair and then skips repeats. `NeverAskPolicy` keeps the hook and always proceeds.

## Sources

- [Agent](https://docs.haystack.deepset.ai/docs/agent) — accessed 2026-11-21
- [Hooks](https://docs.haystack.deepset.ai/docs/hooks) — accessed 2026-11-21
- [Human in the Loop](https://docs.haystack.deepset.ai/docs/human-in-the-loop) — accessed 2026-11-21
- [Migration guide](https://docs.haystack.deepset.ai/docs/migration) — accessed 2026-11-21
