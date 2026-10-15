---
id: claude-code-retry-watchdog
title: Claude Code retry watchdog — unattended 429/529 waits
tags: [claude, cli, retries, ci]
status: active
updated: 2026-10-15
when_to_use: A CI or -p Claude Code job dies on 429/529, or you need to cap how long unattended retry waits for a usage-limit reset
---

## Summary

**Retry watchdog** (`CLAUDE_CODE_RETRY_WATCHDOG=1`, v2.1.186+) is for **unattended** Claude Code (CI, evals, remote workers): retry **429/529 capacity** errors past `CLAUDE_CODE_MAX_RETRIES` instead of failing the turn. It is not `--bare` / `--permission-prompts none` (`claude-code-headless`) and not gateway header mapping (`claude-code-gateway`). **v2.1.301** adds a cap so a usage-limit reset that is too far away ends the request instead of parking the job.

## Notes

- Set `CLAUDE_CODE_RETRY_WATCHDOG=1`. Watchdog retries 429/529 indefinitely (backoff up to 5 minutes, or until a rate-limit reset time). From **v2.1.199** it also raises other transient retries (5xx, timeouts, dropped connections) to **300** (~three hours) and **uncaps** an explicit `CLAUDE_CODE_MAX_RETRIES`. Default `CLAUDE_CODE_MAX_RETRIES` is 10 (capped at 15 unless the watchdog is on).
- **Spend / usage-credit 429s fail immediately** on standard-speed requests (including a gateway spend cap that resets on a schedule). Before **v2.1.239** the watchdog retried those forever. Fast-mode 429s follow the separate rate-limit path in the errors doc.
- Caps: `CLAUDE_CODE_RETRY_WATCHDOG_MAX_WAIT_MS` (v2.1.295+) is the max time **each** API request may spend waiting out 429/529; unset = no limit. **v2.1.301** `CLAUDE_CODE_RETRY_WATCHDOG_MAX_USAGE_LIMIT_WAIT_MS` ends a watchdog request when a **usage-limit** reset is farther away than that many milliseconds (docs page may still only list `MAX_WAIT_MS`).
- Without the watchdog, `retry-after` **> 60s** stops retries and surfaces the error. Overloaded 529 backoff knobs (`CLAUDE_CODE_OVERLOADED_RETRY_*`) have **no effect** when the watchdog is `1`. A first-byte stream abort retries at most once unless the watchdog is on (`claude-code-gateway`).
- Pair with `--bare` / `--permission-prompts none` so the job does not sit on a hidden approval. Do not enable the watchdog on an interactive laptop session you expect to fail fast.

## Sources

- [Environment variables](https://code.claude.com/docs/en/env-vars) — accessed 2026-10-15
- [Error reference](https://code.claude.com/docs/en/errors) — accessed 2026-10-15
- [v2.1.301 release notes](https://github.com/anthropics/claude-code/releases/tag/v2.1.301) — accessed 2026-10-15
- [Claude Code gateway compatibility](https://code.claude.com/docs/en/llm-gateway-protocol) — accessed 2026-10-15
