---
id: gemini-agent-runtime
title: Gemini Enterprise Agent Runtime — hosted agent deploy
kind: service
tags: [google, hosting, gemini, a2a]
status: active
updated: 2026-11-16
when_to_use: Deploying an ADK, LangGraph, or containerized agent on Google Cloud without running the server yourself
---

## Summary

**Agent Runtime** is the managed deploy target on **Gemini Enterprise Agent Platform** (the product formerly documented as Vertex AI Agent Engine). You ship an agent and Google runs, scales, and traces it. The API resource is still named **`ReasoningEngine`**. It is not the ADK library (`google-adk`), not Jules (`google-jules`), and not Gemini CLI.

## Notes

- **Access.** A Google Cloud project plus the Agent Platform SDK for Python. SDK **2.0.1** moved `vertexai.agent_engines` to `google-cloud-agentplatform` (`agentplatform.Client(project=…, location=…).runtimes`). The **Agents CLI** scaffolds templates, evaluates, deploys with Terraform and Cloud Build, and wires Cloud Trace and Cloud Logging. Query the deployed agent over the platform API.
- **What you can deploy.** In-memory object, local source, a **public** Git URL, and Developer Connect are **Python only**. A private Git repo needs Developer Connect, not the public-URL method. A **Dockerfile** or an Artifact Registry image can be **any language** if the container meets the runtime contract (`google-cloud-aiplatform` **≥ 1.144** for a prebuilt image). ADK Python deploys with the `adk` CLI; ADK Go with `adkgo`. The SDK ships templates for LangChain, LangGraph, AG2, and LlamaIndex. CrewAI is a custom-template path. Agent2Agent deploy is marked **Preview**.
- **Identity.** Set a custom service account by **email only** (not the full `projects/…/serviceAccounts/…` URI), or use agent identity / the default identity. Secret Manager access needs `roles/secretmanager.secretAccessor` on that identity. VPC Service Controls and a Private Service Connect interface are supported. **CMEK** on a deployed runtime works on **single-region** endpoints only, not multi-region `us` or `eu`.
- **Size.** `min_instances` is **0–75**, default **1**. `max_instances` is **1–1000**, default **100** (capped at **100** when VPC-SC or PSC-I is on). `cpu` is one of **1, 2, 4, 6, 8**; `memory` is **1Gi–32Gi**. Defaults are **4 CPU** and **4Gi**. `container_concurrency` defaults to **9**. Build scripts under `installation_scripts` run as **root**.
- **Pricing (list page, 2026-11-16).** Runtime and sandboxes (including Code Execution and Computer Use) bill **Agent Compute at $0.085 per vCPU-hour** and **Agent Memory at $0.009 per GiB-hour**, rounded to the nearest second. Idle time **between prompt turns is not billed**. While minimum-instance controls are in Preview, a higher `min_instances` still does not bill idle time; the deploy doc says that behavior can change. Model tokens are a separate SKU. Memory Bank storage and operations are billed on their own (the pricing page dates that metering from 2026-09-01).
- **Alternatives.** Run ADK yourself on Cloud Run or GKE when you want the process. LangSmith Agent Server (`langsmith-agent-server`) for a LangGraph thread host. Foundry Agent Service or Bedrock AgentCore for the other clouds.
- **Caveats.** Pickle deploy of an in-memory agent fails on objects that do not serialize. Pin `requirements` (`google-cloud-aiplatform`, `cloudpickle`, framework packages). Do not look up new code samples under the old Agent Engine module name.

## Sources

- [Agent Runtime](https://docs.cloud.google.com/gemini-enterprise-agent-platform/build/runtime) — accessed 2026-11-16
- [Deploy an agent](https://docs.cloud.google.com/gemini-enterprise-agent-platform/scale/runtime/deploy-an-agent) — accessed 2026-11-16
- [Scale your agents](https://docs.cloud.google.com/gemini-enterprise-agent-platform/scale) — accessed 2026-11-16
- [Gemini Enterprise Agent Platform pricing](https://cloud.google.com/products/gemini-enterprise-agent-platform/pricing) — accessed 2026-11-16
