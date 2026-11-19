---
id: n8n-agent-draft-and-queue
title: An n8n chat still runs the last published agent, or queue mode drops channels
kind: knowledge
tags: [n8n, agents, publishing, queue]
status: active
updated: 2026-11-19
when_to_use: An n8n agent ignores an edit that Preview already shows, or a channel agent fails on a queue-mode instance
---

## Summary

n8n (`n8n`) saves agent edits to a draft and keeps the last published snapshot running. Preview exercises the draft. Chat, channels, and schedules do not. Queue mode is a separate trap: the agents docs say it is unsupported, and channel connections can fail there.

## Notes

- **Publish is the cutover.** The draft autosaves. Publishing stores a snapshot and makes that snapshot the version chat, channels, and schedules run. Further edits stay on the draft until you publish again. Revert changes puts the draft back to the published snapshot. Unpublish stops users, channels, and schedules and leaves the draft editable. A schedule only fires against the published version. The Message an Agent node in a workflow also targets an already created agent, so it follows that published agent.
- **Turning agents off drops queued work.** Instance owners can disable agents under Settings. New runs then cannot start from Preview, chat, schedules, channels, MCP, evaluations, or Message an Agent. Runs already going, including ones waiting on approval, can finish. Queued messages for future runs are cancelled and are not replayed when agents are enabled again. Saved agents and session history stay. Schedules stay configured and can fire again later. Triggers that came due while agents were off are not replayed. The AI Agent node inside a workflow is unaffected by this switch.
- **Queue mode is the wrong runtime for these agents.** The self-hosted section says queue mode is not supported for agents yet, and that connecting channels such as Telegram can fail. Run agents in regular mode. Knowledge bases on self-hosted need a configured sandbox and are in Preview. n8n Cloud manages the sandbox. Agents themselves are available on self-hosted from n8n 2.32.3 and are in Preview on every plan, so behavior can change.
- **The workflow AI Agent node has its own requirements.** It must have at least one tool sub-node. Since n8n 1.82.0 the agent-type setting is deprecated and every AI Agent node runs as a Tools Agent. The v1 node, the one that still shows that setting, is planned for removal in n8n 3.0. For a database agent, use a Postgres or MySQL tool on a current Agent node.
- **MCP clients connected before agents shipped need a reconnect.** Instance-level MCP can search and configure agents. A client connected before that feature existed keeps the old tool list until you reconnect it under Settings, Instance-level MCP. A registry MCP server signs in from the tools panel and stores an MCP credential. Include or exclude its tools there. A server outside the registry uses the MCP Client Tool node.
- **One turn spends one execution.** Agent turns and workflow runs share the plan quota. The Cloud trial is capped at 1,000 executions, 5 concurrent executions, and a 180-second timeout. Starter’s max execution duration is 5 minutes. Filling the saved-execution count or storage stops retaining old runs. It does not stop new ones. Episodic memory will not store across sessions until an OpenAI credential is attached. Session memory of the current conversation is on by default.

## Sources

- [Build and manage agents](https://docs.n8n.io/build/build-and-manage-agents) — accessed 2026-11-19
- [AI Agent node](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.agent) — accessed 2026-11-19
- [MCP servers](https://docs.n8n.io/build/integrate-ai/mcp-servers) — accessed 2026-11-19
- [n8n pricing](https://n8n.io/pricing/) — accessed 2026-11-19
