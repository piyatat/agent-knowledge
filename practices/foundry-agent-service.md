---
id: foundry-agent-service
title: Microsoft Foundry Agent Service — hosted prompt and container agents
kind: service
tags: [microsoft, foundry, hosting, mcp]
status: active
updated: 2026-11-14
when_to_use: Hosting a prompt or containerized agent on Azure without running your own loop
---

## Summary

**Foundry Agent Service** (formerly Azure AI Foundry Agent Service) is Microsoft’s **managed** agent runtime: prompt agents, voice-based prompt agents (preview), and hosted containers. Build with any supported catalog model and a shared toolbox. It is **not** the Agent Framework SDK (`microsoft-agent-framework`) and not Copilot cloud agent. Contrast Bedrock AgentCore (`bedrock-agentcore`) and OpenAI Agents API (`openai-agents-api`).

## Notes

- **Access:** Foundry resource + project. Agents are **project-scoped** (files, threads, indexes are not shared across projects). Portal, SDK/REST, or Azure Developer CLI (`azd`). REST follows the Assistants-style protocol. Hosted agents: push a container to Azure Container Registry, or upload a `.zip` and let Foundry build the image. Frameworks: Agent Framework, LangGraph, OpenAI Agents SDK, Anthropic Agent SDK, Copilot SDK, or custom code.
- **Auth / roles:** Microsoft Entra tokens — **Azure resource keys are not supported**. Create account/project: Foundry Account Owner. Create/edit agents: Foundry User. Invoke only: Foundry Agent Consumer. Standard BYO RBAC also needs Role Based Access Control Administrator. Each hosted agent gets a dedicated Entra **agent identity**. MCP/tool auth: key, agent/project managed identity, OAuth On-Behalf-Of, or unauthenticated where appropriate.
- **Environment:** **Basic** = platform storage (Assistants-compatible). **Standard** = BYO Azure Storage, Azure AI Search, Cosmos DB (data stays in your tenant). **Standard + BYO VNet** = traffic stays in your network. Prompt agents support private networking; hosted sessions can attach BYO VNet (VM-isolated sandbox). Projects created **before 2026-06-25** need a public ACR endpoint; newer projects can use a private registry.
- **Limits / cost:** Inference + tools for prompt agents; hosted adds **container compute**. Voice is preview (no SLA): no customer SIP, limited Teams publishing, evaluation is full-conversation only. Enabling a toolbox/MCP does not replace content filters — XPIA/prompt injection is still on you. A2A **v1.0 is GA**; v0.3 remains preview. Copilot harness on prompt agents is preview.
- **Alternatives:** keep the loop in-process via Responses API (ephemeral agent — no Foundry resource, no harness/optimizer). Self-host Agent Framework. Other clouds: AgentCore, Claude managed agents (`claude-managed-agents`).
- **Caveats:** Voice, optimizer, and some computer-use paths are preview. Third-party MCP/models leave your Azure compliance boundary unless you pin network and BYO stores.

## Sources

- [What is Microsoft Foundry Agent Service?](https://learn.microsoft.com/en-us/azure/foundry/agents/overview) — accessed 2026-11-14
- [Set up your environment for Foundry Agent Service](https://learn.microsoft.com/en-us/azure/foundry/agents/environment-setup) — accessed 2026-11-14
- [Hosted agents in Foundry Agent Service](https://learn.microsoft.com/en-us/azure/foundry/agents/concepts/hosted-agents) — accessed 2026-11-14
- [Prompt agents in Foundry Agent Service](https://learn.microsoft.com/en-us/azure/foundry/agents/concepts/prompt-agents) — accessed 2026-11-14
