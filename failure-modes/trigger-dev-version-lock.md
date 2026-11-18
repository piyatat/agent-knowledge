---
id: trigger-dev-version-lock
title: A Trigger.dev deploy does not move runs that already started
tags: [trigger, deployment, durability, versioning]
kind: knowledge
status: active
updated: 2026-11-18
when_to_use: A Trigger.dev deploy, retry, or replay does not run the code you just shipped
---

## Summary

Trigger.dev locks a run to the version that was current when the run started. A later deploy, including a fix, leaves that run and its retries on the old snapshot. A dashboard replay is a new run and uses the current version unless you pick one. Chat agents stay on their starting version until you upgrade that session (`trigger-dev`).

## Notes

- **Who moves.** The environment has one current version. New runs use it. A run already going, and every retry of that run, stays on the original version. A chat in progress keeps streaming through a redeploy on the version it started on. Moving that chat onto new code is a separate version upgrade.
- **Parents and children.** `triggerAndWait` and `batchTriggerAndWait` lock the child to the parent's version. `trigger` and `batchTrigger` do not: the child uses whatever is current, so a deploy between the two calls can mix versions in one workflow.
- **Replay is not a retry.** Retrying stays on the original version. Replaying from the dashboard creates a new run on the current version by default. In a deployed environment the replay dialog can target a specific version. You can also pin a trigger with the `version` option or `TRIGGER_VERSION`. `--skip-promotion` publishes a version without making it current.
- **Crashes.** A failed attempt follows the task retry settings, then ends `FAILED`. Some crashes, including out of memory, end `CRASHED` and are not retried. The AI chat overview says recovery from cancel, crash, and OOM is part of the chat agent; a one-shot task does not get that for free.
- **What the trace hides.** Only Vercel AI SDK `generateText`, `streamText`, and `generateObject` calls become spans. Model calls made with `fetch` or a provider SDK are absent from the run trace, so a missing span is not proof the call was skipped.

## Sources

- [Deployment](https://trigger.dev/docs/deployment/overview) — accessed 2026-11-18
- [Trigger.dev introduction](https://trigger.dev/docs/introduction) — accessed 2026-11-18
- [AI agents](https://trigger.dev/docs/ai-chat/overview) — accessed 2026-11-18
