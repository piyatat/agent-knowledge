---
id: mistral-agents-sdk
title: Mistral Agents SDK — Python harness and Studio deploy
kind: tool
tags: [mistral, sdk, python, orchestration]
status: active
updated: 2026-11-17
when_to_use: Building a Python agent that runs locally, on your servers, or hosted by Mistral, with sessions that survive a crash
---

## Summary

The **Mistral Agents SDK** (`mistralai-agents`, import `mistralai.agents`) is the Python harness for Managed Agents. You define the model, instructions, tools, connectors, skills, and which calls need approval. The same agent runs in your process, on servers you host (`agents serve`), or on Mistral (`agents deploy`). Managed Agents and the SDK are in **public preview**. This is the harness, not the Vibe coding CLI (`mistral-vibe`).

## Notes

- **Access.** Python **3.12, 3.13, or 3.14**, the standard build (not free-threaded 3.14t). The quickstart linked from `links` is the install page. The SDK reads `MISTRAL_API_KEY`. New organizations activate billing before API keys work; a card or a cloud marketplace account is the documented payment method, and billing can take a few minutes. The Agents and Conversations API (`client.beta.agents`) is being replaced by this SDK.
- **Where it runs.** In-process, the session lives in the program and ends with it. A sandbox, if you add one, is a Docker container beside that process. `agents serve` runs the harness and tools on your servers while Mistral stores the session. `agents deploy` builds a pushed GitHub commit (the GitHub connector must be connected) and Mistral runs the worker. The name on the agent is unique per workspace; a later deploy of the same name replaces it. Call a deployed agent with `Agent.load_from(agent_name=...)`.
- **Deploy constraints.** The platform builds the commit you pushed, not the working tree, and it refuses a deploy whose Dockerfile is missing from that commit. A generated Dockerfile also needs `pyproject.toml`, `uv.lock`, and `.python-version` in the commit. In CI, pass `--yes` or the command writes nothing and stops. The image installs the locked SDK, which can differ from the CLI that ran the deploy. `COPY . .` will bake a `.env` into a layer unless a `.dockerignore` excludes it. Secrets are `--secret-binding NAME=secret:workspace:<id>` references, created in the workspace first. A raw value is rejected. Build-args still land in image history, so read secrets at runtime.
- **Authz.** Deploy needs a workspace role with Workflows access: Developer, Developer Contributor, Workspace Contributor, Observability Viewer, or Admin. A `MistralSandbox` also needs the `cloud_user` role. An agent that acts as the user who starts the session deploys hardened: only an authorized worker can take those sessions. `--no-hardened` on that agent means the worker cannot register and the deployment does not start. Hardening stays until `agents shutdown` and a new deploy.
- **Sessions and traces.** A deployed session ends after **4 hours** idle or **24 hours** total unless the image raises `AGENTS_SDK_IDLE_TIMEOUT_SECONDS` and `AGENTS_SDK_LIFETIME_LIMIT_SECONDS` (caps: 24 hours idle, one week total, and the execution timeout has to move with the week). Studio tracing is on by default and includes prompt and completion content. Redaction is pattern-based and can miss a secret. `AGENTS_SDK_STUDIO_TRACING_INCLUDE_CONTENT=0` drops content; `AGENTS_SDK_STUDIO_TRACING_ENABLED=0` drops spans. An org that disabled Studio observability gets no traces either way.
- **Subagents.** A subagent reports back to its parent. It keeps its own history and does not take over the user conversation the way an Agents API handoff did. `session.run()` returns when the parent's turn ends, which can be before subagent results arrive.
- **Alternatives.** Vibe (`mistral-vibe`) when the job is the coding CLI. The OpenAI Agents SDK (`openai-agents-sdk`) or Pydantic AI (`pydantic-ai`) when the model provider is not Mistral. Inngest (`inngest`) when you want durable steps on infrastructure you already run.
- **Caveats.** Preview changes can break callers. An in-process session dies with the process, including across an approval wait. A managed deploy's shell environment is the image, not the laptop that ran `agents deploy`.

## Sources

- [Managed Agents](https://docs.mistral.ai/studio/agents/overview) — accessed 2026-11-17
- [Agents SDK quickstart](https://docs.mistral.ai/studio/agents/getting-started/quickstart) — accessed 2026-11-17
- [Move from the Agents API](https://docs.mistral.ai/studio/agents/getting-started/from-agents-api) — accessed 2026-11-17
- [Let Mistral host the agent](https://docs.mistral.ai/studio/agents/learn/where-it-runs/deploy) — accessed 2026-11-17
- [Create your organization](https://docs.mistral.ai/getting-started/quickstarts/admin/create-organization) — accessed 2026-11-17
