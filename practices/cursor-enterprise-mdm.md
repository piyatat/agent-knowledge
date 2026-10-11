---
id: cursor-enterprise-mdm
title: Cursor MDM policies — AllowedTeamId, WorkspaceTrust, remote Agent
tags: [cursor, governance, security, permissions]
status: active
updated: 2026-10-11
when_to_use: Deploying Cursor via Jamf/Intune/GPO, writing ~/.cursor/policy.json, or restricting Agent to approved remote workspaces
---

## Summary

Enterprise admins can **override** local Cursor settings with MDM policies (Windows Group Policy, macOS configuration profiles, Linux `~/.cursor/policy.json`). Documented keys cover allowed extensions/teams, the extension gallery URL, HTTP/2, updates, and Workspace Trust. **permissions.json** is a separate file-backed allowlist (`cursor-permissions-json`). IDE **3.24** adds `AgentRemoteWorkspaceAuthorities` so Agent can be limited to approved remote workspaces.

## Notes

- Policy wins over default / user / workspace settings. Windows: ADMX from `AppData\Local\Programs\cursor\policies`; Computer level beats User. macOS PayloadType is the channel bundle ID (`com.todesktop.230313mzl4w4u92` production; `co.anysphere.cursor.nightly` nightly). Linux 2.0+: `~/.cursor/policy.json`; changes apply on restart and are watched.
- Documented keys: `AllowedExtensions` (JSON **string** of publisher allow/deny, not a nested object), `AllowedTeamId` (comma-separated team IDs; other teams force logout), `ExtensionGalleryServiceUrl`, `NetworkDisableHttp2`, `UpdateMode` (`none` disables updates), `WorkspaceTrustEnabled` (`security.workspace.trust.enabled`).
- Deploy `~/.cursor/permissions.json` via the same MDM to set `terminalAllowlist`, `mcpAllowlist`, and Auto-review `autoRun` instructions. Team dashboard settings still beat the file (`cursor-run-modes`).
- IDE 3.24 (release notes; not yet in the deployment-patterns table): `AgentRemoteWorkspaceAuthorities` turns off Agent in **local** windows and allows it only in remote workspaces. Optionally restrict to a comma-separated authority-pattern list with `*` wildcards. A blocked start shows that an administrator disabled Agent.
- Pair with Privacy Mode / Allowed Team IDs so corp devices cannot stay signed into a personal team (`cursor-privacy-mode`). This is device policy, not Cloud Agent network allowlists (`cursor-cloud-secrets-network`).

## Sources

- [Deployment Patterns](https://cursor.com/docs/enterprise/deployment-patterns) — accessed 2026-10-11
- [Cursor IDE release notes](https://cursor.com/docs/release-notes/ide) — accessed 2026-10-11
- [permissions.json reference](https://cursor.com/docs/reference/permissions) — accessed 2026-10-11
