---
id: cursor-sentry
title: Cursor × Sentry — Seer handoff and Automation issue triggers
tags: [cursor, automations, orchestration, ops]
status: active
updated: 2026-09-18
when_to_use: Starting a Cursor Cloud Agent from a Sentry issue, or wiring Sentry triggers on an Automation
---

## Summary

Two Sentry paths start Cursor **Cloud Agents**: (1) Sentry **Seer** hands off root-cause/plan to Cursor, (2) a Cursor **Automation** fires on Sentry issue events. Not Copilot-from-Sentry (`github-copilot-sentry`) and not “install Sentry MCP and hope it opens PRs.”

## Notes

- **Seer Cursor Agent** (Sentry Owner/Manager/Admin): Settings → Integrations → **Cursor Agent** → Install → paste a Cursor **User API key** (Account Settings → Integrations → User API Keys). From an issue’s Seer Root Cause card, use the Find Solution dropdown to launch a Cloud Agent. Seer Automation can set Cursor as the project’s coding agent so handoff is automatic. Seer still does RCA; Cursor implements. The agent must reach the same repos Sentry is tied to.
- **Cursor Automation triggers** (`cursor-automations`): Issue created, Issue updated, Any issue event. Marketplace template: Investigate Sentry issues. Repo-backed runs can open PRs; no-repo is for Slack/MCP-only triage. Issue titles/stack traces are untrusted (`prompt-injection-agent-defense`).
- Do not confuse Seer’s “Create PR / Checkout locally” (Seer writes the patch) with coding-agent handoff. Service-account Cloud Agent API kicks (`cursor-service-accounts`) are a third, custom path.

## Sources

- [Cursor Agent (Sentry)](https://docs.sentry.io/integrations/coding-agents/cursor/) — accessed 2026-09-18
- [Seer Autofix — handoff to coding agents](https://docs.sentry.io/product/ai-in-sentry/seer/autofix/) — accessed 2026-09-18
- [Cursor Automations](https://cursor.com/docs/cloud-agent/automations) — accessed 2026-09-18
