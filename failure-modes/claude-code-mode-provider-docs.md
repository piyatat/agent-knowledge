---
id: claude-code-mode-provider-docs
title: Code Mode docs still block Bedrock after the 2.1.331 changelog added it
kind: knowledge
tags: [claude, code-mode, bedrock, providers]
status: active
updated: 2026-11-23
when_to_use: Code Mode will not start on Bedrock, Foundry, or a gateway, or a provider session was expected to run it after Claude Code 2.1.331
---

## Summary

Claude Code **2.1.331** (23 November 2026) says terminal Code Mode (`claude-code-code-mode`) now runs on Amazon Bedrock, Google Cloud’s Agent Platform, Microsoft Foundry, and Claude Platform on AWS. The Code Mode docs page, read the same day, still says Code Mode does not run on those four, or through a gateway, or on Claude Models on Google Cloud. The `/status` reason on that binary is the one to follow.

## Notes

- **Four providers are in the changelog. Two blocks are only in the docs.** The 2.1.331 added line names terminal sessions on Amazon Bedrock, Google Cloud’s Agent Platform, Microsoft Foundry, and Claude Platform on AWS. The requirements section of the Code Mode docs still says you need a Claude subscription or Console account, and that Code Mode does not run through a gateway, those four providers, Claude Models on Google Cloud, or a custom `ANTHROPIC_BASE_URL`. A gateway and Claude Models on Google Cloud are not in the 2.1.331 added line. Treat them as still blocked until a later changelog or a `/status` line says otherwise.
- **The status line wins.** The docs troubleshooting table still maps `it only works directly with the Anthropic API` and `it only works with the Anthropic API` to “remove the cloud provider, gateway, or custom base URL.” On 2.1.331, try the four named providers in an interactive terminal first. If `/status` still prints that reason, the binary is behaving like the docs page, whatever the changelog added. An older build than 2.1.331 does not have the changelog’s provider support.
- **Same release, script behavior.** Resuming a Code Mode session with `--resume` or `--continue` in another permission mode used to drop thinking and the prompt cache. 2.1.331 keeps them. A session that began in a mode that asks keeps that mode’s limits on scripts. A long script used to lose the middle of its output; Claude now gets a path to the uncut text. `--bare` now tells Claude which calls the scripts can make. Tracing still keeps Code Mode off (`claude-code-mode-hook-fail-open`).

## Sources

- [Claude Code changelog](https://code.claude.com/docs/en/changelog) — accessed 2026-11-23
- [v2.1.331](https://github.com/anthropics/claude-code/releases/tag/v2.1.331) — accessed 2026-11-23
- [Run tool calls from code with Code Mode](https://code.claude.com/docs/en/code-mode) — accessed 2026-11-23
