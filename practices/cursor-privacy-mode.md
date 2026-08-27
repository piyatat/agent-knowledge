---
id: cursor-privacy-mode
title: Cursor Privacy Mode vs Legacy, ZDR, and Cloud Agent storage
tags: [cursor, privacy, security, ops]
status: active
updated: 2026-08-27
when_to_use: Enabling Cloud Agents under Privacy Mode, explaining ZDR vs training, or reviewing Legacy Privacy Mode blocks
---

## Summary

**Privacy Mode** (default for Enterprise) means Cursor and ZDR model providers do not train on customer data. **Privacy Mode (Legacy)** blocks cloud storage and therefore **blocks Cloud Agents**. Cloud Agents are the only Cursor feature that must store repo/environment data in the cloud while they run.

## Notes

- Privacy Mode on: no training by Cursor or ZDR providers. Providers may still run abuse classifiers; hits can be stored for investigation per their policies. Privacy Mode off: Cursor may store prompts/code to improve the product; some inference providers may cache inputs/outputs then delete.
- **Legacy** Privacy Mode is unsupported for Cloud Agents (and currently for self-hosted workers that still hit cloud agent APIs). Switch to standard Privacy Mode on the dashboard. If the org forbids *any* cloud copy of source, do not enable Cloud Agents — local Agent still works.
- Cloud Agents: isolated VMs; encrypted repo copies while the run is live. Conversation history is kept indefinitely by default (Delete Agent API removes the transcript, not snapshots). Environment snapshots expire after **90 days of inactivity** (timer resets on start/resume). Enterprise early-access: cap conversations at 90 days.
- Most models are ZDR. A few (e.g. **Claude Fable 5**) retain inputs/outputs for harm review, not training. With Privacy Mode, those models fail until an admin opts in on the restricted-models dashboard. Guardrail trips on Fable 5 may fall back to Opus.
- Team enforcement: dashboard Settings → Privacy Mode, optionally lock so members cannot disable. MDM **Allowed Team IDs** stops personal-account logins on corp devices.
- Indexing is a different flow: chunks uploaded to compute embeddings; plaintext discarded after the request. Embeddings/metadata may persist. Cloud Agents are the storage exception.
- Enterprise extras: TLS 1.2+ / AES-256; optional CMEK for embeddings and Cloud Agent data. US-only data residency covers supported models, Tab, search, and Cloud Agents — not SSO (WorkOS), BYOK, custom gateways, MCP/`@Web`, Bugbot's git region, or Slack/web trigger origin.

## Sources

- [Privacy and Data Governance](https://cursor.com/docs/enterprise/privacy-and-data-governance) — accessed 2026-08-27
- [Cloud Agent security](https://cursor.com/docs/cloud-agent/security) — accessed 2026-08-27
- [Secrets & Network — Privacy Mode (Legacy) and retention](https://cursor.com/docs/cloud-agent/security-network) — accessed 2026-08-27
- [Data Use & Privacy Overview](https://cursor.com/privacy-overview) — accessed 2026-08-27
