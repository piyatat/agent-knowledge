---
id: pipecat-cloud-reserved-minutes
title: A Pipecat Cloud warm instance bills all day, and a stuck pipeline keeps the active minute
kind: knowledge
tags: [pipecat, billing, voice, scaling]
status: active
updated: 2026-11-19
when_to_use: A Pipecat Cloud deploy billed overnight with no calls, or a session never stopped accruing active minutes
---

## Summary

Pipecat Cloud bills reserved minutes for warm instances and active minutes from `/start` until the pipeline shuts down. The quickstart deploy file sets `min_agents = 1`, and one warm instance accrues 1,440 reserved minutes a day with zero calls. A pool at its cap returns HTTP 429. A cold start that is not ready in about two minutes drops the session (`pipecat`).

## Notes

- **Reserved versus active.** Reserved minutes are the time `min-agents` keeps instances running, including while they are idle. The CLI default is 0. The quickstart `pcc-deploy.toml` sets 1 so the first session skips a cold start. The scaling page warns that `--min-agents` of 1 or more charges you while nobody is connected, and that a single warm instance is 1,440 reserved minutes a day. Reserved billing stops when that warm instance is turned off or the deployment is deleted. Active minutes start when you call `/start` (or the CLI or SDK equivalent) and stop when the pipeline shuts down. Both are measured to the second and billed in minutes.
- **Scale-to-zero still lingers.** With `min-agents` at 0, idle instances stay up for 5 minutes after the last session, then terminate. The first call after that is a cold start: about 10 seconds in the best case for a small image, longer when the image is large, imports do heavy work, or model files download at startup. If no instance is ready within about 2 minutes, the session is dropped. The start request itself returns immediately. A free auto-scaling buffer can add idle instances during traffic; those buffer instances are not the same as the paid `min-agents` floor.
- **Caps that look like outages.** Each instance runs one session. A larger agent profile adds CPU and memory for that session. Daily-hosted regions allow 50 instances per deployment until you request a higher cap. Above `max-agents`, `/start` returns 429. A pipeline that never ends keeps the active minute running. Set a max session duration so a stuck bot is force-closed. A spend limit in the dashboard or CLI is a backstop after the deploy config is already wrong.
- **Keys and workspaces.** A public API key is allowed to start sessions. Five public and five private keys is the cap per workspace or organization. The personal workspace cannot share a deployment with teammates, and a deployment cannot be moved to an organization later. Provider keys uploaded with the secret set live in Pipecat Cloud on Daily-hosted regions. On Enterprise the values stay in your cluster.
- **What the hosting rate leaves out.** agent-1x is $0.01 per active minute and $0.0005 per reserved minute. Speech, the model, and telephony are separate. 1:1 Daily voice transport on Cloud is free; a video participant-minute, PSTN, and SIP are not. A call transfer that stays anchored on Daily keeps the original minute running.

## Sources

- [Pipecat quickstart](https://docs.pipecat.ai/pipecat/get-started/quickstart) — accessed 2026-11-19
- [Pipecat Cloud scaling](https://docs.pipecat.ai/pipecat-cloud/fundamentals/scaling) — accessed 2026-11-19
- [Pipecat Cloud accounts](https://docs.pipecat.ai/pipecat-cloud/fundamentals/accounts-and-organizations) — accessed 2026-11-19
- [Pipecat Cloud pricing](https://www.daily.co/pricing/pipecat-cloud) — accessed 2026-11-19
- [Pipecat Cloud introduction](https://docs.pipecat.ai/pipecat-cloud/introduction) — accessed 2026-11-19
