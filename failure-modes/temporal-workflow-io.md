---
id: temporal-workflow-io
title: An OpenAI Agents tool on Temporal runs in the Workflow unless it is an Activity
tags: [temporal, replay, tools, determinism]
kind: knowledge
status: active
updated: 2026-11-18
when_to_use: A Temporal agent calls a tool that does I/O, or a replay repeats a model call
---

## Summary

On Temporal's OpenAI Agents integration, the plugin turns each model call into an Activity, so replay does not call the model again. A `@function_tool` does not get that treatment. It runs inside the Workflow. Network, database, or filesystem work there is replayed, and a different result fails the Workflow (`temporal`).

## Notes

- **Where work runs.** Model calls always go through Activities. `activity_as_tool()` is the path for external I/O. A plain `FunctionTool` or `@function_tool` is for deterministic computation that is safe inside the Workflow. Hosted tools such as web search, file search, code interpreter, and image generation run at the provider during the model Activity and need no extra Activity. `nexus_operation_as_tool` starts a Nexus Operation. `Agent.as_tool()` still works; the nested agent's model calls become Activities.
- **Registration.** `activity_as_tool` tells the agent how to invoke the Activity. It does not register that function on the Worker. Pass the Activity to the Worker's `activities` list as well, or the tool has nowhere to run.
- **Context.** An Activity-backed tool may run in another process. It receives a copy of the agent context and cannot mutate it. A tool that runs in the Workflow can.
- **Package move.** Version **1.0.0** of the integration leaves the Temporal Python SDK. Depend on `temporalio-openai-agents` and import `temporalio.openai_agents`, not `temporalio.contrib.openai_agents`. It needs Python **3.10+** and Temporal Python SDK **1.33.0+**. Editable installs, layered deploys, and other split `site-packages` layouts need SDK **1.34** or later. `OpenAIAgentsPlugin` goes on both the Client and the Worker.
- **What replay is.** The Worker rebuilds Workflow state from Event History. Activities are side effects recorded once. Workflow code runs again. Clocks, randomness, and I/O in that code are a new result on the second pass. Replay itself is not a billed Cloud Action (`temporal`).

## Sources

- [OpenAI Agents SDK integration](https://docs.temporal.io/develop/python/integrations/openai-agents) — accessed 2026-11-18
- [Durable AI](https://docs.temporal.io/ai) — accessed 2026-11-18
- [Temporal Cloud Actions](https://docs.temporal.io/evaluate/cloud/actions) — accessed 2026-11-18
