---
id: statsig-mcp-confirm-and-meter
title: A Statsig write needs confirmation, or free-tier lifts stop while gates keep serving
kind: knowledge
tags: [statsig, mcp, flags, billing]
status: active
updated: 2026-11-22
when_to_use: A Statsig MCP update did nothing, a review approval did not ship, or Metric Lifts stopped on the free tier
---

## Summary

Statsig (`statsig`) will not apply an update or an `api_destructive` call until the agent supplies `confirmation`. Approving a review is a separate step and does not commit the change. On the free Developer tier, crossing 2 million metered events stops Metric Lift calculations after warnings. Gate and config targeting keep working.

## Notes

- **Confirmation.** Update tools and `api_destructive` require `confirmation`. Review the change before supplying it. `api_destructive` covers sensitive updates and review actions, not only deletion. Project permissions and review policies still apply after the agent is allowed to call the tool.
- **MCP scope.** The project ceiling is no access, read only, or read and write. A role can only be stricter. Tools the ceiling hides are not available, and execution is checked again. A read-only Console API key cannot write. OAuth only uses Personal Console API Keys, so a role that cannot create those keys cannot complete the browser sign-in.
- **What counts as a metered event.** An exposure (an SDK check of an experiment, or of a flag with Metric Lifts enabled), a logged or imported event, an ingested warehouse metric, or a custom metric. Client SDKs dedupe the same user and feature for 60 minutes. Server SDKs dedupe for 1 minute. Experiments that allocate nobody, and flags that are fully shipped or abandoned with no rule evaluation, do not meter. By default, exposures on a 0% or 100% rollout are not charged. Statsig charges those exposures only when Metric Lifts are turned on and the gate is a partial rollout. One event dimension (the Value field) is free. Each extra dimension counts as another log event.
- **Free cap.** Developer includes 2 million metered events each calendar month. Past that, the console asks for a card to move to Pro ($150 a month, 5 million included, then $0.05 per 1,000). Staying on Developer keeps gate and config targeting. Metric Lift computations stop after multiple warning notifications. Pro overages are billed on the following period, not as a hard stop.

## Sources

- [Statsig MCP overview](https://docs.statsig.com/integrations/mcp/overview) — accessed 2026-11-22
- [Statsig MCP manual setup](https://docs.statsig.com/integrations/mcp/manual-setup) — accessed 2026-11-22
- [Self-serve RBAC for MCP](https://www.statsig.com/updates/update/self-serve-rbac-mcp) — accessed 2026-11-22
- [Statsig pricing](https://www.statsig.com/pricing) — accessed 2026-11-22
