---
id: claude-code-332-model-alias
title: Claude Code 2.1.332 moves cloud aliases to Sonnet 5.5 and gates skill shells
kind: knowledge
tags: [claude, models, skills, hooks]
status: active
updated: 2026-11-25
when_to_use: A Claude Code session on Foundry, Agent Platform, or Bedrock Mantle picked a different model, or a skill's inline shell ran or was blocked on load
---

## Summary

Claude Code 2.1.332 (2026-11-25) points the `sonnet` alias at Sonnet 5.5 on Google Cloud’s Agent Platform and on Microsoft Foundry, and it starts some of those sessions in auto mode when no mode is set. Skills published by an MCP server show up as `server:skill`. A new `PreSkillShellCommand` hook can refuse the inline shell inside a skill as the skill loads; naming that event on 2.1.331 or older opens a dialog at startup.

## Notes

- **Aliases are not one model.** On Agent Platform and Foundry, `sonnet` means Sonnet 5.5. Foundry’s `opus` alias means Opus 5.5, and Foundry’s default model is Sonnet 5.5: deploy `claude-sonnet-5-5`, or set `ANTHROPIC_DEFAULT_SONNET_MODEL` to a deployment you have. `sonnet` on Amazon Bedrock stays Sonnet 4.5. On Bedrock Mantle the same alias had been resolving to Haiku 4.5; it now means Sonnet 5, not Sonnet 5.5, and an account without Sonnet 5 gets an error. Foundry treats Claude Sonnet 4, Opus 4, and Opus 4.1 as retired, so step-down stops above them and a pin warns. `--model default` moves to an older model instead of failing, and in auto mode only to a model auto mode accepts.
- **Region and mode.** `sonnet` and background requests on Agent Platform read `VERTEX_REGION_CLAUDE_5_5_SONNET`. If only the `4_5` variable is set, they go to `CLOUD_ML_REGION` or `us-east5`. Terminal and VS Code sessions that were moved onto Sonnet 5 or 5.5 on Bedrock Mantle, Agent Platform, or Foundry start in auto mode when no mode is set. `disableAutoMode` set to `"disable"` stops that.
- **Skills and shells.** MCP-server skills are beta and appear as `server:skill` in the `/` menu. Other skills keep their names (`claude-code-skills`). On Macs with computer use on, `computer-use` is reserved: your own skill or command of that name does not load, and startup says to rename it (`claude-code-computer-use`). `PreSkillShellCommand` runs as a skill or command loads and can refuse its inline shell commands (`claude-code-hooks`). A settings file that names the event on 2.1.331 or older opens a dialog at start instead of installing the hook.
- **Tokens and traces.** A self-hosted `CLAUDE_CODE_OAUTH_TOKEN` may now use an `oat02-` prefix as well as `oat01-`. Desktop Code tab sessions default the OpenTelemetry `service.name` to `claude-code-desktop`. Set `OTEL_SERVICE_NAME` to keep `claude-code`.

## Sources

- [Claude Code changelog](https://code.claude.com/docs/en/changelog) — accessed 2026-11-25
- [v2.1.332](https://github.com/anthropics/claude-code/releases/tag/v2.1.332) — accessed 2026-11-25
