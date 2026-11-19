---
id: claude-agent-sdk-deferred-resume
title: Claude Agent SDK resume reruns a hook-deferred tool unless an env flag is set
kind: knowledge
tags: [claude, sdk, hooks, permissions]
status: active
updated: 2026-11-19
when_to_use: A resumed Claude Agent SDK session runs a tool a hook had deferred, or a rewritten shell command leaves the sandbox
---

## Summary

TypeScript Claude Agent SDK **0.3.328** (parity with Claude Code **2.1.328**, published 2026-11-19) still runs a hook-deferred tool call on `resume` and `continue` unless the host sets `CLAUDE_CODE_DISABLE_DEFERRED_TOOL_RESUME` in the SDK `env` option. Settings cannot set that variable. The library is `claude-agent-sdk`.

## Notes

- **Deferred tools replay on resume.** A hook can defer a tool call. The next `resume` or `continue` runs that call unless `CLAUDE_CODE_DISABLE_DEFERRED_TOOL_RESUME` is set in the `env` option passed to the SDK. Putting the variable in settings has no effect. The release says settings cannot set it. Set it on the process environment the SDK is given when a deferred call must stay deferred across resume.
- **A rewritten shell command picks its own sandbox.** When a `PermissionRequest` hook rewrites a shell command, the rewrite’s own permission check decides the sandbox. A rewrite that is excluded from the sandbox runs outside it. `canUseTool` is unchanged. Review the rewritten command’s permission rule before treating the sandbox as still wrapped around it.
- **`onFailure: "block"` covers `mcp_tool` hooks in the Settings type.** Command and HTTP hooks already had this. 0.3.328 adds it for `mcp_tool` hooks: a hook whose call fails blocks the action it guards. The default remains fail-open where the matcher is `"continue"`. See `claude-code-hooks` for the CLI side of the same release.
- **An inline agent definition wins the name.** An entry in the `agents` option overrides a user, project, plugin, or built-in agent of the same name for model, prompt, and hooks. An agent loaded from an agents directory keeps its own system prompt when `systemPrompt` is not set. A same-name inline agent is why a file on disk appears to be ignored.
- **Subagents wait when forking is off.** With `CLAUDE_CODE_FORK_SUBAGENT=0`, subagents wait for their own subagents by default. Host-supplied `managedSettings` may set the policy plugin’s `allowManagedModsOnly`. An admin’s managed settings still win. On Windows, `resolveSettings()` re-reads registry policy every 6 hours while no policy is set. That interval was 30 minutes. This release also stops the model from saying background agents are still running after an SDK interrupt has stopped them.

## Sources

- [claude-agent-sdk-typescript v0.3.328](https://github.com/anthropics/claude-agent-sdk-typescript/releases/tag/v0.3.328) — accessed 2026-11-19
