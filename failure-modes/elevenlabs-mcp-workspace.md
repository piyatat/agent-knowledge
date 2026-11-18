---
id: elevenlabs-mcp-workspace
title: ElevenAgents MCP is a workspace switch, and hosted edits publish immediately
tags: [elevenlabs, mcp, permissions, privacy]
kind: knowledge
status: active
updated: 2026-11-18
when_to_use: Enabling MCP for one ElevenAgents agent, or connecting the hosted MCP server from a residency workspace
---

## Summary

ElevenAgents MCP is off until a person accepts terms for the whole workspace. That acceptance is not an admin-only control, and it does not turn MCP on for Zero Retention or HIPAA workspaces. Edits made through the hosted MCP server publish to the live branch immediately (`elevenlabs-agents`).

## Notes

- **One switch for every agent.** MCP servers are disabled until someone adds a server and accepts the Model Context Protocol Server Terms. Acceptance sets MCP on for the workspace, so every member who can use ElevenAgents can then add servers and attach them. Any member, or any API key with `convai_write`, can turn the switch on or off. It is not limited to workspace admins. Each saved server can still be shared member by member.
- **Compliance mode wins.** Zero Retention Mode and HIPAA workspaces cannot use MCP servers. The docs say the `can_use_mcp_servers` flag does not override that. Enabling the switch on those workspaces changes nothing.
- **What the agent is allowed to call.** Approval can be always-ask (the recommended default), per-tool (auto, approval, or disabled), or no approval at all. ElevenLabs does not operate the third-party server. A server URL that contains a secret should be stored as a workspace secret. The CLI cannot manage these servers; the dashboard or SDK can. Tools on the remote server can change without a new attach.
- **Hosted MCP writes are live.** Creating or updating an agent through `https://api.elevenlabs.io/v1/mcp` (or the EU, India, or Singapore residency host) publishes on the branch the assistant targets, or on `main` when it names none. That is a direct publish, unlike a draft from the in-app architect. Deleting an agent is destructive. A residency workspace must sign in with that environment's account; an elevenlabs.io login is a different workspace. The directory connector in Claude omits image, video, and music tools but still has the agent tools.

## Sources

- [MCP tools for agents](https://elevenlabs.io/docs/eleven-agents/customization/tools/mcp) — accessed 2026-11-18
- [Hosted MCP server](https://elevenlabs.io/docs/eleven-agents/operate/hosted-mcp) — accessed 2026-11-18
