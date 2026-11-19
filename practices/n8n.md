---
id: n8n
title: n8n — hosted or self-hosted workflows with agents
kind: service
tags: [n8n, workflows, agents, mcp]
status: active
updated: 2026-11-19
when_to_use: Running an open-ended agent or a tool-calling workflow on n8n Cloud or a self-hosted n8n instance
---

## Summary

**n8n** is a workflow product with two agent surfaces. The **AI Agent** node sits in a workflow, calls a chat model, and must have at least one tool. **Agents** (Preview) are project-level assistants with instructions, tools, skills, channels, and schedules. n8n Cloud is the managed host. The same product self-hosts as the free Community edition, with paid license keys for Business and Enterprise features. Use n8n when the work is a visual workflow plus tools. Use Inngest, Temporal, Trigger.dev, or Vercel Workflows when the workflow is code that has to survive a crash mid-step.

## Notes

- **Access.** n8n Cloud sign-up is the URL in `links.get`. The Cloud trial needs no card. The Business-plan trial does. Self-hosting is documented under Host n8n. Without a license key the instance is the free Community edition. Registering an email unlocks folders, debug-in-editor, and custom execution data. A Business or Enterprise key unlocks that plan and must ping n8n’s license server daily. Cloud data for hosted plans is stored in Frankfurt. This note does not repeat install commands.
- **Auth.** Workflow credentials live in an encrypted store. Saving a credential runs a connection test. On n8n Cloud, supported model nodes can select **Use Gateway credits** and skip your own provider key. The pricing table includes Gateway credits on Starter and Pro and lists them as not included on Enterprise. OAuth credentials are fixed (one credential for every run) by default. End-user credentials, where the triggering user’s token is used at runtime, are an Enterprise preview. Instance owners turn the Agents feature on or off under Settings, separate from the n8n Assistant. That switch does not disable the AI Agent workflow node.
- **Plans (pricing page, 2026-11-19).** Prices are in euros, billed annually on the cards: Starter €20/month, Pro €50/month, Business €667/month, Enterprise via sales. Every listed plan includes unlimited users and workflows. You pay for executions. One execution is one full workflow run, or one agent turn (one message and its reply). Agents and workflows share the quota. Starter: 5 concurrent executions, 5 minute max duration, 2,500 saved executions, 7 days of execution logs, 1 shared project, forum support. Pro: the comparison table lists 20 / 50 concurrent executions and a 40 minute max duration, plus admin roles, insights, and workflow history. The Cloud trial uses Pro-level features with 1,000 executions, 5 concurrent executions, a 180-second timeout, and 1 team project. Hitting the saved-execution cap deletes the oldest history. Workflows keep running. Community edition omits custom variables, environments, external secrets, projects, SSO, sharing, and Git version control.
- **Agents and tools.** Agents are on all Cloud plans, and on self-hosted from n8n 2.32.3. Build in a draft. Preview chats with the draft. Publish snapshots it. Chat, channels, and schedules run the published snapshot. Tools can be built-in nodes, workflows in the project, a JSON-schema tool, or an MCP server. The node panel has a registry of MCP servers (sign-in creates the credential, and you can include or exclude tools). A server that is not in the registry uses the MCP Client Tool node with a URL and credentials. Instance-level MCP lets an external client such as Claude Code search and edit agents. Human approval can pause a sensitive tool call. Episodic memory needs an OpenAI credential. Session memory is on by default. The AI Agent node’s old agent-type setting is deprecated since 1.82.0. Every AI Agent node behaves as a Tools Agent, and it needs a tool sub-node. The v1 node is scheduled to leave in n8n 3.0.
- **Caveats.** Agents are in Preview, and on self-hosted the knowledge base is in Preview and needs a sandbox. Queue mode is not supported for agents, and channel connections such as Telegram can fail there (`n8n-agent-draft-and-queue`). Edits stay on the draft until you publish again.

## Sources

- [Build and manage agents](https://docs.n8n.io/build/build-and-manage-agents) — accessed 2026-11-19
- [AI Agent node](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.agent) — accessed 2026-11-19
- [MCP servers](https://docs.n8n.io/build/integrate-ai/mcp-servers) — accessed 2026-11-19
- [Choose how to use n8n](https://docs.n8n.io/choose-how-to-use-n8n) — accessed 2026-11-19
- [Compare editions](https://docs.n8n.io/deploy/host-n8n/community-edition-features) — accessed 2026-11-19
- [n8n pricing](https://n8n.io/pricing/) — accessed 2026-11-19
- [Create an n8n Cloud account](https://app.n8n.cloud/register) — accessed 2026-11-19
- [Create and edit credentials](https://docs.n8n.io/build/understand-workflows/create-and-edit-credentials) — accessed 2026-11-19
