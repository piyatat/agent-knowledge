---
id: langsmith-agent-server
title: LangSmith Agent Server — hosted agent runtime
kind: service
tags: [langsmith, hosting, orchestration, durability]
status: active
updated: 2026-11-15
when_to_use: Hosting a LangGraph or other framework agent with durable threads, separate from LangSmith tracing
---

## Summary

**LangSmith Agent Server** (formerly LangSmith Deployment) is LangChain’s runtime for production agents: assistants, threads, runs, streaming, and horizontal scale. It is not the tracing product. Observability, evals, and prompt hubs can run on LangSmith Cloud or a self-hosted LangSmith while the agent runs somewhere else. Native path is LangGraph (`langgraph`). Other libraries deploy by wrapping them.

## Notes

- **Where it runs.** **Cloud:** LangChain hosts control plane, data plane, and databases on AWS, Azure, or GCP. Create a deployment from GitHub in the UI or with `langgraph deploy`. Requires **Plus or above**; Cloud deployments bill the compute and database size you request (see their billing page for rates). **Hybrid:** their control plane, your Agent Servers and databases. **Self-hosted control plane:** your Kubernetes cluster next to self-hosted LangSmith; **Enterprise** with Agent Server hosting enabled. **Standalone:** Docker, Compose, or Kubernetes with your own PostgreSQL, Redis, and a LangSmith license, and no control plane. Traces are optional.
- **What you can deploy.** LangGraph and LangChain via the LangGraph CLI. Google ADK (`google-adk`) via the `deployments-wrap-sdk` package. Claude Agent SDK, Strands, CrewAI, AutoGen, and similar via the LangGraph Functional API: an `@entrypoint` calls an `@task` that runs the other framework, then `entrypoint.final(value=…, save=…)` checkpoints state for the next turn on that thread. The export the server loads is a module-level `agent`. Python 3.10+ for that wrap (Strands examples allow 3.9+).
- **Auth.** Sign in to LangSmith with Google, GitHub, or email. **Personal access tokens** inherit the user. **Service keys** are for agents and production (org-wide or workspace-scoped). **Tracing keys** (`lsv2_tr_` prefix) may only submit traces (`runs:create`, `projects:create`); they cannot read traces, change agent settings, or run experiments. Set `LANGSMITH_API_KEY`. Tracing also wants `LANGSMITH_TRACING=true`. The default API host is `https://api.smith.langchain.com` (GCP US); EU, APAC, AWS US, and Azure US have their own hosts via `LANGSMITH_ENDPOINT`. A key that spans workspaces needs `LANGSMITH_WORKSPACE_ID`. The secret is shown once.
- **After deploy.** Clients call the deployment with `RemoteGraph` as if it were a local graph. Prompt and context updates can ship without a full redeploy. LangSmith Engine inspects production traces for repeated failures. A full-stack JS chat can embed the agent in the web app and skip Agent Server, or put Agent Server behind a separate UI.
- **Alternatives.** Run LangGraph in your own process with a Postgres checkpointer when you do not want their control plane. Cloudflare Agents (`cloudflare-agents`) or a sandbox (`e2b-sandboxes`, `modal-sandboxes`) when the job is isolation, not a graph server. Foundry Agent Service (`foundry-agent-service`) when the host must be Azure’s agent service.
- **Caveats.** A tracing key cannot deploy or read runs. Deactivating a personal token can take up to a minute to stop authenticating because results are cached. Wrapping CrewAI or the Claude Agent SDK does not replace that library’s own tool permissions — the entrypoint still executes their code. Standalone mode still needs a license and your own Postgres and Redis.

## Sources

- [LangSmith Agent Server](https://docs.langchain.com/langsmith/deployment) — accessed 2026-11-15
- [Deploy other frameworks](https://docs.langchain.com/langsmith/deploy-other-frameworks) — accessed 2026-11-15
- [Create an account and API key](https://docs.langchain.com/langsmith/create-account-api-key) — accessed 2026-11-15
