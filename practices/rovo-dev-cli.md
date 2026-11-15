---
id: rovo-dev-cli
title: Rovo Dev CLI — Atlassian terminal coding agent
kind: tool
tags: [rovo, atlassian, cli, jira]
status: active
updated: 2026-11-15
when_to_use: Running a terminal coding agent against Jira, Confluence, and Bitbucket on a paid Rovo Dev subscription
---

## Summary

**Rovo Dev CLI** is Atlassian’s terminal coding agent, shipped as an extension of the Atlassian CLI (`acli`). It edits a local workspace and can act on Jira work items and Confluence content. It is not Cursor or Copilot triggered from a Jira ticket (`cursor-jira`, `github-copilot-jira`), and it does not run during a Rovo Dev Standard **trial**.

## Notes

- **Access.** A site must have Rovo Dev turned on, and you need a **paid Rovo Dev Standard** subscription plus a credit allocation on that site. The product page says the CLI is unavailable on the Standard trial; end the trial and start the paid plan to use it. Install or update **ACLI** (macOS, Linux, or Windows), create a scoped API token (the install doc’s link, or Atlassian account → Create API token with scopes → Rovo Dev), then `acli rovodev auth login`. Start interactive mode with `acli rovodev run`. One-shot: `acli rovodev run "<instruction>"`. `/usage` shows credits; `/usage site` switches site when you have more than one allocation.
- **Auth scope.** The install doc’s manual token includes write scopes for Jira work, Confluence pages and comments, and Bitbucket repositories, pull requests, and pipelines, plus read scopes across those products. That token is not a read-only coding credential. Do not commit it. `/models` switches models; Atlassian documents credit multipliers per model (see that page before assuming a switch is the same price).
- **Permissions.** On first use of a tool, interactive mode asks once, for the session, or always (saved). Deny can include a reason. Config defaults to `~/.rovodev/config.yml` (`acli rovodev config`). `toolPermissions` levels are `allow`, `ask` (default for most tools), and `deny`. Bash and PowerShell use a default plus regex command entries; compound commands (`&&`, `||`, `;`) are judged per subcommand. Files outside the workspace are blocked until `allowedExternalPaths` or `/directories`.
- **YOLO.** `acli rovodev run --yolo` or `/yolo` skips confirmation for file operations, shell, workspace navigation, and git. **MCP tools and other integrations still use their configured permissions.** YOLO is session-only and does not rewrite the config file. Toggle `/yolo` again to leave it. Atlassian says to use it only for trusted workflows.
- **Context.** Sessions, user memory, and project memory are separate docs (`/memory`, `/memory user`, `/sessions`). Subagents are optional (`/subagents`). `acli rovodev run --worktree [name]` uses a git worktree. `acli rovodev serve [port]` is server mode. `acli rovodev mcp` opens the MCP server config.
- **Skills.** Open Agent Skills. Priority when names collide: **built-in > user > project**. User paths: `~/.rovodev/skills/` and `~/.agents/skills/`. Project paths: `.rovodev/skills/` and `.agents/skills/`. Each skill is a directory with `SKILL.md`. Optional `allowed-tools` pre-approves tools for that skill. `/skills` lists, creates, edits, or deletes user and project skills (built-ins are fixed). Descriptions are how the CLI auto-selects a skill; you can also name one in the prompt.
- **Alternatives.** Cursor or Copilot cloud agents when the ticket should launch a GitHub-side agent and Atlassian is only the trigger. GitLab Duo (`gitlab-duo-agent-platform`) when the forge is GitLab. A local Claude Code or Codex CLI when you do not need Jira and Confluence writes from the same process.
- **Caveats.** YOLO still does not blanket-approve MCP. The documented token can write to Jira, Confluence, and Bitbucket. A trial subscription will not start the CLI. Skills with `allowed-tools` skip the usual ask for those tools (`malicious-skills-supply-chain`).

## Sources

- [Use Rovo Dev CLI](https://support.atlassian.com/rovo/docs/use-rovo-dev-cli/) — accessed 2026-11-15
- [Install and run Rovo Dev CLI](https://support.atlassian.com/rovo/docs/install-and-run-rovo-dev-cli-on-your-device/) — accessed 2026-11-15
- [Rovo Dev CLI commands](https://support.atlassian.com/rovo/docs/rovo-dev-cli-commands/) — accessed 2026-11-15
- [Use tools in Rovo Dev CLI](https://support.atlassian.com/rovo/docs/use-tools-in-rovo-dev-cli/) — accessed 2026-11-15
- [Extend Rovo Dev CLI with Agent Skills](https://support.atlassian.com/rovo/docs/extend-rovo-dev-cli-with-agent-skills/) — accessed 2026-11-15
- [Switch models in Rovo Dev CLI](https://support.atlassian.com/rovo/docs/switch-between-large-language-models-in-rovo-dev-cli/) — accessed 2026-11-15
