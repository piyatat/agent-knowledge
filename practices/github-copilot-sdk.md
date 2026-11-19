---
id: github-copilot-sdk
title: Microsoft Copilot SDK — embed the Copilot harness
kind: tool
tags: [github, sdk, copilot, orchestration]
status: active
updated: 2026-11-19
when_to_use: Embedding the Copilot harness in an app, including one runtime for many sessions, instead of spawning the CLI
---

## Summary

The **Microsoft Copilot SDK** (formerly the GitHub Copilot SDK) is a client for the Copilot agent runtime: planning, tools, file edits, and multi-turn sessions. It is not the HTTP Cloud Agents API, not Cursor Agent SDK, and not Claude Agent SDK. The repository now lives at `microsoft/copilot-sdk`. The 28 October 2026 changelog says the rename is phased and that existing users do not have to change anything immediately. On 19 November 2026 the repo README installs `@microsoft/copilot-sdk`, while the GitHub Docs quickstart and multi-tenancy samples still import `@github/copilot-sdk`.

## Notes

- **Access.** The install table is on the repository linked from `links`. Languages: TypeScript/Node, Python, Go, .NET, Java, and Rust. A separate Copilot CLI install is not the default. Node and .NET ship runtime artifacts, Python downloads them, and Rust bundles them. Go needs the bundler or a runtime package you supply. Java needs the platform runtime classifier. Node requires ^20.19 or ≥22.12.
- **Runtime.** SDK v2 talks protocol-4 JSON-RPC. By default it loads a native Rust runtime in-process over a C ABI and does not start a CLI process. That library stays loaded for the process lifetime. In-process hosting is neither crash isolation nor a sandbox. A spawned child (stdio or TCP) isolates crashes. `copilot-runtime --server` plus a TCP attach lets one runtime serve many clients.
- **Auth and billing.** A Copilot subscription is required unless you bring your own key. BYOK accepts API keys for providers the auth doc names (OpenAI, Microsoft Foundry, Anthropic) and does not accept Entra ID, managed identities, or other identity providers. Other sign-in paths: a signed-in CLI user, an OAuth app user token, or `COPILOT_GITHUB_TOKEN`, `GH_TOKEN`, or `GITHUB_TOKEN`. Prompts bill like Copilot CLI usage, including the free tier’s limited allowance.
- **Tools.** The README says the default tool set matches the CLI run with allow-all. Each SDK’s permission handler still approves or denies the call. Treat prompts and MCP output as untrusted (`prompt-injection-agent-defense`).
- **Many users, one process.** GitHub’s multi-tenancy guide requires `mode: "empty"` on a shared server. The default `mode: "copilot-cli"` is for a CLI-like coding agent and can expose the host filesystem through ambient tools. Pass `gitHubToken` (or a rotating provider) per session, use session IDs your app owns, and check that ownership before resume or delete. `sessionFs` can put session files in storage you control. Sessions that share one provider namespace share remembered approvals. Shell tools do not go through SessionFS. Java has no public `sessionFs` option in that guide. Idle cleanup is `sessionIdleTimeoutSeconds`. `baseDirectory` is ignored when the client attaches to a runtime that is already running.
- **Ignite, 17 November 2026.** The product post describes a shared runtime, per-session identity, host-owned tools, a session journal, and resume by session ID. On their warmed workload, creating a client and a session and finishing one turn went from 5.25 seconds on the TypeScript CLI to 55.3 milliseconds in-process; ten clients used 126 MB instead of 1,383 MB.
- **Alternatives.** `copilot -p` (`github-copilot-cli`) when a terminal is enough. Claude Agent SDK or Cursor’s SDKs when the harness should be that vendor’s. Foundry managed agents and Copilot cloud sandboxes when you do not want to run the runtime (`foundry-agent-service`).
- **Caveats.** Docs and packages can disagree during the rename. A shared `sessionFs` namespace shares grants (`copilot-sdk-shared-grants`). Do not treat in-process mode as a sandbox.

## Sources

- [GitHub Copilot SDK is becoming Microsoft Copilot SDK](https://github.blog/changelog/2026-10-28-github-copilot-sdk-is-becoming-microsoft-copilot-sdk/) — accessed 2026-11-19
- [microsoft/copilot-sdk README](https://github.com/microsoft/copilot-sdk) — accessed 2026-11-19
- [Introducing the Microsoft Copilot SDK 2.0](https://commandline.microsoft.com/microsoft-copilot-sdk-2-0-github/) — accessed 2026-11-19
- [Multi-tenancy and server deployments](https://docs.github.com/en/copilot/how-tos/copilot-sdk/setup/multi-tenancy) — accessed 2026-11-19
- [Build your first Copilot-powered app](https://docs.github.com/en/copilot/get-started/sdk-quickstart) — accessed 2026-11-19
