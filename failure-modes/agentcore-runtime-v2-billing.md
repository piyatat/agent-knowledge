---
id: agentcore-runtime-v2-billing
title: AgentCore Runtime V2 bills idle memory, or create stays in progress
kind: knowledge
tags: [amazon, agentcore, billing, hosting]
status: active
updated: 2026-11-20
when_to_use: An AgentCore session costs more than the model wait suggested, a V2 runtime never becomes ready, or a committed baseline bills while the agent is idle
---

## Summary

Amazon Bedrock AgentCore (`bedrock-agentcore`) defaults new runtimes to platform version **V1**. **V2** snapshots the environment, reclaims idle memory, and can switch a session onto a committed baseline that is billed until the session ends. A create that returns before the runtime is `READY` is still in progress.

## Notes

- **V1 is the default.** Omitting `platformVersion` on create selects V1. Omitting it on update keeps the current version. V2 is a platform setting on the runtime, separate from the numbered runtime versions that snapshot your config. V2 cold-starts from a prepared snapshot, allows a compressed image up to 10 GB (2 GB on V1), and is only in the regions the runtime guide lists. Create and update take minutes. The call returns while status is still `CREATING` or `UPDATING`. Another update or a delete before a terminal status returns `ConflictException`. The snapshot is taken when the health check first passes, unless a warmup hook moves that point. A health check that never passes fails the create.
- **Consumption versus baseline.** With no resource configuration, a V2 session is capped at **2 vCPU and 8 GB** and cannot burst past that. You pay the consumption rate for CPU and memory actually used, per second, with a 1-second minimum. CPU goes to zero while the agent waits on a model or tool. Idle memory is reclaimed after **120 seconds**. A 128 MB minimum still applies, and system overhead is included. Setting `minimumMemoryInMiB` (1024, 2048, 4096, or 8192) commits that memory and a proportional vCPU (1 vCPU per 4 GB) for the **whole session**, including idle time, at the lower committed rate. Bursts up to 4× are billed per second at that same rate. The largest row is 8 GB / 2 vCPU, bursting to 32 GB / 8 vCPU.
- **Price labels.** The pricing table lists V2 consumption at **$0.1276** per vCPU-hour and **$0.0169** per GB-hour. It still labels the committed rates (**$0.0997** and **$0.0132**) as “launching by October 2026,” while the runtime guide already documents the resource configuration. Browser and Code Interpreter stay on the older microVM rates (**$0.0895** / **$0.00945**) and bill **peak** memory up to that second, not memory reclaimed after 120 seconds. Instances add an AgentCore management fee on top of EC2 in your account (the pricing example uses 12%, and 7.8% for G-series). Sessions on microVMs end after 15 idle minutes or 8 hours. The same `runtimeSessionId` after that starts a new microVM. Use AgentCore Memory if the context has to outlive the session.
- **Memory events.** Short-term memory ingestion and retrieval bill each event at a **12 KB** minimum and a **64 KB** maximum, even when the payload is smaller or larger. Storage uses the actual size. A 3 KB event in the pricing example is ingested and retrieved as 12 KB and stored as 3 KB.

## Sources

- [microVMs](https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/runtime-how-it-works.html) — accessed 2026-11-20
- [AgentCore pricing](https://aws.amazon.com/bedrock/agentcore/pricing/) — accessed 2026-11-20
- [What is Amazon Bedrock AgentCore?](https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/what-is-bedrock-agentcore.html) — accessed 2026-11-20
