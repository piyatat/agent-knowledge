# Bibliography

Sources consulted for initial seed (2026-08-06). Notes in this repo are summaries; follow links for originals.

| Topic | URL |
| --- | --- |
| MCP progressive discovery | https://modelcontextprotocol.io/docs/develop/clients/client-best-practices |
| Tools at scale / defer loading | https://gziolo.pl/2026/04/09/research-architecting-tools-for-ai-agents-at-scale/ |
| Progressive disclosure MCP skill notes | https://www.developersdigest.tech/library/skills/progressive-disclosure-mcp |
| Progressive disclosure (Ardalis) | https://ardalis.com/optimizing-ai-agents-with-progressive-disclosure/ |
| Cursor rules tutorial | https://aitoolsguidebook.com/en/articles/cursor-rules-tutorial/ |
| Cursor rules guide | https://www.vibecodingacademy.ai/blog/cursor-rules-complete-guide |
| AGENTS.md vs rules comparison | https://blog.buildbetter.ai/agents-md-vs-cursorrules-vs-claude-skills-2026-comparison/ |
| AGENTS.md vs CLAUDE.md vs Cursor | https://codersera.com/blog/agents-md-vs-claude-md-vs-cursor-rules-comparison-2026/ |
| Schema vs referent validation | https://tianpan.co/blog/2026-06-02-the-hallucinated-tool-argument-that-passed-schema-validation |
| Local model agent failure modes | https://specpicks.com/reviews/local-coding-agent-small-model-failure-modes-2026 |
| Agent tool hallucinations | https://manveerc.substack.com/p/ai-agent-hallucinations-prevention |
| Hallucinated tools pattern | https://www.agentpatternscatalog.org/patterns/hallucinated-tools/ |

## Daily ingest 2026-08-08

| Topic | URL |
| --- | --- |
| Demystifying evals for AI agents (Anthropic) | https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents |
| Agent Evaluation Harness: Replay + CI Gates | https://www.kunalganglani.com/blog/agent-evaluation-harness-replay |
| How to Build an Evaluation Harness for Your AI Agent | https://www.scien.cx/2026/07/08/how-to-build-an-evaluation-harness-for-your-ai-agent-so-it-doesnt-break-in-production/ |
| Context Compaction: Delete Noise, Keep Signal | https://www.morphllm.com/context-compaction |
| Microsoft Agent Framework — compaction | https://learn.microsoft.com/en-us/agent-framework/agents/conversations/compaction |
| Collet research notes on context management | https://github.com/epicsagas/collet/blob/main/docs/research/context-management.md |
| Tools vs MCP vs Skills | https://sujaltangde.hashnode.dev/tools-mcp-and-skills-what-each-one-actually-does |
| MCP Servers vs Agent Skills (Developers Digest) | https://www.developersdigest.tech/blog/mcp-servers-vs-agent-skills-2026 |
| Skills vs MCP vs Tools (Agentmelt) | https://agentmelt.com/blog/ai-agent-skills-vs-mcp-vs-tools/ |
| OWASP LLM Prompt Injection Prevention Cheat Sheet | https://cheatsheetseries.owasp.org/cheatsheets/LLM_Prompt_Injection_Prevention_Cheat_Sheet.html |
| GenAI LLM Top 10 — LLM01 Prompt Injection (2026) | https://github.com/GenAI-Security-Project/GenAI-LLM-Top10/blob/main/2026/LLM01_PromptInjection.md |
| Prompt Injection Defense for AI Agents | https://www.exploreagentic.ai/insights/prompt-injection-defense-enterprise-agents/ |
| OpenAI — Orchestration and handoffs | https://developers.openai.com/api/docs/guides/agents/orchestration |
| Microsoft Agent Framework — handoff orchestration | https://learn.microsoft.com/en-us/agent-framework/workflows/orchestrations/handoff |
| AI Agent Orchestration: Handoff Patterns for 2026 | https://coommit.com/blog/ai-agent-orchestration-2026 |
| OpenTelemetry GenAI semantic conventions (overview) | https://blog.triplecloud.tech/posts/instrument-llm-agent-opentelemetry |
| OTel GenAI attributes registry | https://github.com/open-telemetry/semantic-conventions-genai/blob/main/docs/registry/attributes/gen-ai.md |
| AI Agent Observability with OpenTelemetry | https://docs.base14.io/guides/ai-observability/agent-observability/ |
| OpenAI cookbook — Structured Outputs for Multi-Agent Systems | https://developers.openai.com/cookbook/examples/structured_outputs_multi_agent |
| Claude — Structured outputs | https://platform.claude.com/docs/en/build-with-claude/structured-outputs |
| Structured Outputs Are Doing More Work Than Most Teams Realize | https://agentengineering.org/articles/structured-outputs-are-doing-more-work-than-most-teams-realize/ |
| RAG vs LLM Wiki vs Plain Text decision framework | https://zhuoqidev.com/en/posts/memory-choice-framework/ |
| LLM Wiki vs RAG for Internal Codebase Memory | https://www.mindstudio.ai/blog/llm-wiki-vs-rag-internal-codebase-memory |
| ADRs before memory RAG | https://dev.to/shimo4228/claude-codes-memory-has-no-vectors-try-adrs-before-memory-rag-4kik |

## Daily ingest 2026-08-09

| Topic | URL |
| --- | --- |
| MCP OAuth 2.1 implementation (PKCE & scopes) | https://www.practical-devsecops.com/mcp-oauth-2-1-implementation/ |
| Authorization: OAuth 2.1 for HTTP MCP Servers | https://imti.co/mcp-authorization-oauth/ |
| MCP Server Authentication: OAuth 2.1, PKCE, and Token Exchange | https://facio.bot/blog/mcp-server-authentication-oauth-2-1-pkce-2026 |
| AI Agent Sandboxing: MicroVMs, gVisor, WASM | https://zylos.ai/research/2026-04-04-ai-agent-sandboxing-security-isolation |
| Choosing a Sandbox for AI Agent Code Execution (2026) | https://tanayshah.dev/blog/choosing-agent-sandbox-2026/ |
| Sandboxing an Agent That Executes Code | https://dev.to/multigrid/sandboxing-an-agent-that-executes-code-1noi |
| OpenAI — Prompt caching | https://developers.openai.com/api/docs/guides/prompt-caching |
| Anthropic skills — prompt caching guidance | https://github.com/anthropics/skills/blob/main/skills/claude-api/shared/prompt-caching.md |
| Tool use with prompt caching (Claude) | https://platform.claude.com/docs/en/agents-and-tools/tool-use/tool-use-with-prompt-caching |
| How to Redact Sensitive User Prompts in GenAI OTel Traces | https://oneuptime.com/blog/post/2026-02-06-redact-sensitive-prompts-genai-opentelemetry-traces/view |
| LangSmith — OTel gateway trace redaction | https://docs.langchain.com/langsmith/otel-gateway-trace-redaction |
| OpenTelemetry Collector contrib — redaction processor | https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/processor/redactionprocessor/README.md |
| AgentOS — Citation verification | https://docs.agentos.sh/features/citation-verification |
| Citation-Enhanced Generation (ACL 2024) | https://aclanthology.org/2024.acl-long.79/ |
| Groundedness API overview | https://groundedness.walkosystems.com/ |
| Demystifying evals for AI agents — isolation and flaky runs | https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents |
| Tool-call failure modes (related corpus note) | https://github.com/piyatat/agent-knowledge/blob/main/failure-modes/tool-call-failures.md |
| OWASP LLM prompt injection cheat sheet — action screening | https://cheatsheetseries.owasp.org/cheatsheets/LLM_Prompt_Injection_Prevention_Cheat_Sheet.html |
| OpenAI — Orchestration and handoffs | https://developers.openai.com/api/docs/guides/agents/orchestration |
| Microsoft Agent Framework — handoff vs agents-as-tools | https://learn.microsoft.com/en-us/agent-framework/workflows/orchestrations/handoff |
| Context compaction patterns | https://www.morphllm.com/context-compaction |
| Agent cost/step budgets (related corpus note) | https://github.com/piyatat/agent-knowledge/blob/main/practices/agent-cost-step-budgets.md |
| MCP security — rate limit by agent identity | https://apiscout.dev/guides/anthropic-mcp-server-security-2026 |
| MCP Servers vs Agent Skills — progressive disclosure | https://www.developersdigest.tech/blog/mcp-servers-vs-agent-skills-2026 |
| Tools vs MCP vs Skills | https://sujaltangde.hashnode.dev/tools-mcp-and-skills-what-each-one-actually-does |
| Claude Code skills architecture / progressive loading | https://www.mindstudio.ai/blog/claude-code-skills-architecture-progressive-context-loading |
| Agent Evaluation Harness — Replay + CI Gates | https://www.kunalganglani.com/blog/agent-evaluation-harness-replay |
| How to Build an Evaluation Harness for Your AI Agent | https://www.scien.cx/2026/07/08/how-to-build-an-evaluation-harness-for-your-ai-agent-so-it-doesnt-break-in-production/ |

## Daily ingest 2026-08-10

| Topic | URL |
| --- | --- |
| Graceful tool-output truncation (Agent Patterns) | https://agentpatterns.ai/tool-engineering/graceful-tool-output-truncation/ |
| Tool Results Are Context Too (Multigrid) | https://multigrid.ai/learn/tool-result-context |
| Writing tools for agents (Anthropic) | https://www.anthropic.com/engineering/writing-tools-for-agents |
| Tool Calling Best Practices for LLMs (2026) | https://ai-tldr.dev/learn/llm-apis/function-calling/tool-calling-best-practices/ |
| LLM Agent Tool Result Summarization and Truncation | https://solana.garden/guides/llm-agent-tool-result-summarization-truncation-explained/ |
| How we contain Claude across products (Anthropic) | https://www.anthropic.com/engineering/how-we-contain-claude |
| Trustworthy agents in practice (Anthropic) | https://www.anthropic.com/research/trustworthy-agents |
| Guardrails and human review (OpenAI) | https://developers.openai.com/api/docs/guides/agents/guardrails-approvals |
| A2A project (GitHub) | https://github.com/a2aproject/A2A |
| MCP vs A2A (Auth0) | https://auth0.com/blog/mcp-vs-a2a/ |
| MCP server concepts | https://modelcontextprotocol.io/docs/learn/server-concepts |
| WorkflowAgent (AI SDK) | https://ai-sdk.dev/docs/agents/workflow-agent |
| What is WorkflowAgent? (Vercel KB) | https://vercel.com/kb/guide/what-is-workflowagent |
| Agent approval workflow stack guide | https://vercel.com/kb/guide/agent-approval-workflow-stack-guide |
| Demystifying evals for AI agents (Anthropic) | https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents |
| judge-audit-mcp | https://github.com/asif786ka/judge-audit-mcp |
| When AIs Judge AIs (arXiv) | https://arxiv.org/html/2508.02994v1 |
| MCP tools specification | https://modelcontextprotocol.io/specification/2025-03-26/server/tools |
| Tools vs Resources vs Prompts | https://prashamhtrivedi.in/mcp-primitive-youre-misusing/ |
| AI Agent Sandboxing: MicroVMs, gVisor, WASM | https://zylos.ai/research/2026-04-04-ai-agent-sandboxing-security-isolation |
| Sandboxing an Agent That Executes Code | https://dev.to/multigrid/sandboxing-an-agent-that-executes-code-1noi |
| gitleaks | https://github.com/gitleaks/gitleaks |
| Catching Secrets in AI-Generated Code Before They Reach Git | https://dev.to/marcin_brzozka_ff45b1ccb6/catching-secrets-in-ai-generated-code-before-they-reach-git-2kdk |
| I let an AI agent into my repo — lock down first | https://dev.to/mikobuilds/i-let-an-ai-agent-into-my-repo-heres-what-i-lock-down-first-5145 |

## Daily ingest 2026-08-12

| Topic | URL |
| --- | --- |
| MCP elicitation (2026-07-28) | https://modelcontextprotocol.io/specification/2026-07-28/client/elicitation |
| MCP round-trip requests replace elicitation | https://www.channel.tel/blog/mcp-round-trip-requests-replace-elicitation |
| The 2026-07-28 Specification (MCP Blog) | https://blog.modelcontextprotocol.io/posts/2026-07-28/ |
| FastMCP elicitation guide | https://gofastmcp.com/servers/elicitation |
| Scaling AI Agent Infrastructure — MCP stateless (Google) | https://developers.googleblog.com/scaling-ai-agent-infrastructure-with-the-mcp-stateless-updates/ |
| MCP 2026-07-28: what the stateless core removes | https://packetnebula.com/articles/mcp-2026-07-28-what-stateless-removes/ |
| MCP stateless migration guide | https://hashnode.com/blog/mcp-stateless-migration |
| SEP-2577: Deprecate Roots, Sampling, and Logging | https://github.com/modelcontextprotocol/modelcontextprotocol/blob/main/seps/2577-deprecate-roots-sampling-and-logging.md |
| AAIF: MCP 2026-07-28 migration | https://aaif.io/blog/mcp-2026-07-28-whats-changing-and-how-to-migrate |
| SessionTrail — transcript behavior reviewer | https://github.com/Conalh/SessionTrail |
| Agent Trace Hub | https://github.com/selimozten/agent-trace-hub |
| Agent-Trail dashboard | https://github.com/camtrik/agent-trail |
| Claude Code self-telemetry guide | https://github.com/ytrofr/claude-code-guide/blob/main/docs/guide/part5-advanced/03-self-telemetry.md |
| JSONL observability gaps (Claude Code #41215) | https://github.com/anthropics/claude-code/issues/41215 |
| Cronitor heartbeat monitoring | https://cronitor.io/docs/heartbeat-monitoring |
| incident.io heartbeat monitoring | https://docs.incident.io/alerts/heartbeat-monitoring |
| Webhook + heartbeat monitoring | https://cronalert.com/blog/webhook-endpoint-monitoring |
| Monitoring webhook receivers (inbound) | https://cronalert.com/blog/webhook-receiver-monitoring |
| Synthetic end-to-end webhook pipeline testing | https://gethook.to/blog/synthetic-end-to-end-webhook-pipeline-testing |

## Daily ingest 2026-08-15 (cloud catch-up)

| Topic | URL |
| --- | --- |
| Lost in the Middle (Liu et al.) | https://arxiv.org/abs/2307.03172 |
| Context Compaction: Delete Noise, Keep Signal | https://www.morphllm.com/context-compaction |
| AGENTS.md vs Cursor rules — context budget | https://github.com/piyatat/agent-knowledge/blob/main/practices/agents-md-and-rules-budget.md |
| OWASP LLM Prompt Injection Prevention | https://cheatsheetseries.owasp.org/cheatsheets/LLM_Prompt_Injection_Prevention_Cheat_Sheet.html |
| Human-in-the-loop approvals (corpus) | https://github.com/piyatat/agent-knowledge/blob/main/practices/human-in-the-loop-approvals.md |
| ADRs before memory RAG | https://dev.to/shimo4228/claude-codes-memory-has-no-vectors-try-adrs-before-memory-rag-4kik |
| Knowledge corpus pattern | https://github.com/piyatat/agent-knowledge/blob/main/practices/knowledge-corpus-pattern.md |
| MCP 2026-07-28 specification blog | https://blog.modelcontextprotocol.io/posts/2026-07-28/ |
| Google: MCP stateless updates | https://developers.googleblog.com/scaling-ai-agent-infrastructure-with-the-mcp-stateless-updates/ |
| OpenTelemetry GenAI semantic conventions | https://github.com/open-telemetry/semantic-conventions/blob/v1.37.0/docs/gen-ai/gen-ai-spans.md |
| AI Agent Observability with OpenTelemetry | https://docs.base14.io/guides/ai-observability/agent-observability/ |
| Agent cost/step budgets (corpus) | https://github.com/piyatat/agent-knowledge/blob/main/practices/agent-cost-step-budgets.md |
| Rate limits and backoff (corpus) | https://github.com/piyatat/agent-knowledge/blob/main/practices/rate-limit-backoff-tools.md |
| A2A project | https://github.com/a2aproject/A2A |
| MCP vs A2A (Auth0) | https://auth0.com/blog/mcp-vs-a2a/ |
| MCP server concepts | https://modelcontextprotocol.io/docs/learn/server-concepts |
| Heartbeat dead-man-switch (corpus) | https://github.com/piyatat/agent-knowledge/blob/main/practices/heartbeat-dead-man-switch.md |
| Collect from web (corpus) | https://github.com/piyatat/agent-knowledge/blob/main/runbooks/collect-from-web.md |

## Daily ingest 2026-08-22 (gap-fill)

| Topic | URL |
| --- | --- |
| MCP Apps overview | https://apps.extensions.modelcontextprotocol.io/api/documents/overview.html |
| SEP-1865: MCP Apps | https://modelcontextprotocol.io/seps/1865-mcp-apps-interactive-user-interfaces-for-mcp |
| MCP Apps are live (MCP Blog, 2026-01-26) | https://blog.modelcontextprotocol.io/posts/2026-01-26-mcp-apps/ |
| MCP Tasks overview | https://modelcontextprotocol.io/extensions/tasks/overview |
| SEP-2663: Tasks Extension | https://modelcontextprotocol.io/seps/2663-tasks-extension |
| The 2026-07-28 Specification (MCP Blog) | https://blog.modelcontextprotocol.io/posts/2026-07-28/ |
| Code execution with MCP (Anthropic) | https://www.anthropic.com/engineering/code-execution-with-mcp |
| Programmatic Tool Calling (OpenAI) | https://developers.openai.com/api/docs/guides/tools-programmatic-tool-calling |
| The next generation of MCP (Cloudflare) | https://blog.cloudflare.com/mcp-v2/ |
| Tool search (OpenAI) | https://developers.openai.com/api/docs/guides/tools-tool-search |
| API deployment checklist — use tool_search | https://developers.openai.com/api/docs/guides/deployment-checklist |
| The MCP Registry (about) | https://modelcontextprotocol.io/registry/about |
| MCP Registry in 2026: discover, verify, connect | https://digitalthoughtdisruption.com/2026/07/20/mcp-registry-discover-verify-safely-connect-servers/ |
| MCP supply chain: treat servers as artifacts | https://nhimg.org/articles/mcp-supply-chain-security-means-treating-servers-as-artifacts/ |
| Cloud Agents and Cursor Harness Improvements (2026-08-19) | https://cursor.com/changelog/08-19-26 |
| Cursor changelog index | https://cursor.com/changelog |
| Cursor gives cloud agents subscriptions, /goal and subagent VMs | https://aiweekly.co/alerts/cursor-gives-cloud-agents-subscriptions-goal-and-subagent-vms |
| Claude Code memory | https://code.claude.com/docs/en/memory |
| Claude Code hooks guide | https://code.claude.com/docs/en/hooks-guide |
| Which CLAUDE.md files actually load | https://dev.to/rulestack/which-claudemd-files-claude-code-actually-loads-and-in-what-order-3be0 |
| MCP Security Best Practices (2026-07-28) | https://modelcontextprotocol.io/docs/2026-07-28/tutorials/security/security_best_practices |
| MCP authorization security considerations | https://modelcontextprotocol.io/specification/2026-07-28/basic/authorization/security-considerations |
| MCP Security: risks and best practices (OX) | https://www.ox.security/academy/ai-security/mcp-security-risks-and-best-practices-for-model-context-protocol/ |
| Agent Skills specification | https://agentskills.io/specification |
| Agent Skills overview | https://agentskills.io/home |
| Equipping agents with Agent Skills (Anthropic) | https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills |
| MCP Authorization (2026-07-28) | https://modelcontextprotocol.io/specification/2026-07-28/basic/authorization |
| MCP OAuth 2.1 implementation (PKCE & scopes) | https://www.practical-devsecops.com/mcp-oauth-2-1-implementation/ |
| Authorization: OAuth 2.1 for HTTP MCP Servers | https://imti.co/mcp-authorization-oauth/ |

## Daily ingest 2026-08-22 (evening gap-fill)

| Topic | URL |
| --- | --- |
| AG-UI overview | https://docs.ag-ui.com/introduction |
| AG-UI GitHub | https://github.com/ag-ui-protocol/ag-ui/ |
| A2UI home | https://a2ui.org/ |
| What is A2UI | https://github.com/a2ui-project/a2ui/blob/main/docs/introduction/what-is-a2ui.md |
| Cursor Automations | https://cursor.com/docs/cloud-agent/automations |
| Cloud Agents and Cursor Harness Improvements (2026-08-19) | https://cursor.com/changelog/08-19-26 |
| Bugbot docs | https://cursor.com/docs/bugbot.md |
| Building a better Bugbot | https://cursor.com/blog/building-bugbot |
| Bugbot updates (June 2026) | https://cursor.com/blog/bugbot-updates-june-2026 |
| Claude Code permissions | https://code.claude.com/docs/en/permissions |
| Claude Code hooks guide | https://code.claude.com/docs/en/hooks-guide |
| Guardrails and human review (OpenAI) | https://developers.openai.com/api/docs/guides/agents/guardrails-approvals |
| MCP caching (2026-07-28) | https://modelcontextprotocol.io/specification/2026-07-28/server/utilities/caching |
| SEP-2549 TTL for list results | https://modelcontextprotocol.io/seps/2549-TTL-for-list-results |
| MCP Python SDK — caching hints | https://py.sdk.modelcontextprotocol.io/client/caching/ |
| MCP subscriptions (2026-07-28) | https://modelcontextprotocol.io/specification/2026-07-28/basic/patterns/subscriptions |
| The 2026-07-28 Specification (MCP Blog) | https://blog.modelcontextprotocol.io/posts/2026-07-28/ |
| MCP TypeScript SDK — subscribe to changes | https://ts.sdk.modelcontextprotocol.io/v2/clients/subscriptions.html |
| MCP completion (2026-07-28) | https://modelcontextprotocol.io/specification/2026-07-28/server/utilities/completion |
| MCP TypeScript SDK — Completion | https://ts.sdk.modelcontextprotocol.io/v2/servers/completion.html |
| MCP Python SDK — Completions | https://py.sdk.modelcontextprotocol.io/v2/servers/completions/ |
| microsoft/playwright-mcp | https://github.com/Microsoft/playwright-mcp |
| MCP Security Best Practices | https://modelcontextprotocol.io/docs/tutorials/security/security_best_practices |
| Playwright MCP security guide | https://microsoft-playwright-mcp.mintlify.app/guides/security |
| OpenAI Agents SDK — Guardrails | https://openai.github.io/openai-agents-python/guardrails/ |
| NVIDIA NeMo Guardrails | https://github.com/NVIDIA-NeMo/Guardrails |
| MCP tools (2026-07-28) | https://modelcontextprotocol.io/specification/2026-07-28/server/tools |
| MCP server concepts | https://modelcontextprotocol.io/docs/learn/server-concepts |

## Daily ingest 2026-08-23 (gap-fill)

| Topic | URL |
| --- | --- |
| AST01 — Malicious Skills (OWASP) | https://owasp.org/www-project-agentic-skills-top-10/ast01.html |
| Agent Skills Guide 2026 (Termdock) | https://www.termdock.com/en/blog/agent-skills-guide |
| Agent Skills specification | https://agentskills.io/specification |
| Agent Discovery (A2A Protocol) | https://a2a-protocol.org/latest/topics/agent-discovery/ |
| A2A Agent Cards (StackA2A) | https://stacka2a.dev/blog/a2a-agent-card-explained |
| A2A Agent Card Specification (StackA2A) | https://stacka2a.dev/learn/agent-card-spec |
| MCP Discovery (2026-07-28) | https://modelcontextprotocol.io/specification/2026-07-28/server/discover |
| The 2026-07-28 Specification (MCP Blog) | https://blog.modelcontextprotocol.io/posts/2026-07-28/ |
| How AgentCore Gateway supports the MCP 2026-07-28 spec | https://aws.amazon.com/blogs/machine-learning/how-agentcore-gateway-supports-the-mcp-2026-07-28-spec/ |
| Stateless MCP still needs an MCP-native dataplane (agentgateway) | https://agentgateway.dev/blog/2026-07-21-stateless-mcp-still-needs-mcp-native-dataplane/ |
| Agent Memory Poisoning (Tian Pan) | https://tianpan.co/blog/2026-04-10-agent-memory-poisoning-persistent-compromise |
| From Untrusted Input to Trusted Memory (αXiv 2606.04329) | https://www.alphaxiv.org/abs/2606.04329 |
| Cursor Automations | https://cursor.com/docs/cloud-agent/automations |
| Cloud Agent capabilities | https://cursor.com/docs/cloud-agent/capabilities |
| Cloud Agents overview | https://cursor.com/docs/cloud-agent |
| Cloud Agent Builds | https://cursor.com/docs/cloud-agent/builds |
| Cloud agents start 3x faster with builds | https://cursor.com/blog/builds |
| OIDC tokens (Cursor Cloud Agents) | https://cursor.com/docs/cloud-agent/identity |
| Secrets & Network | https://cursor.com/docs/cloud-agent/security-network.md |
| MCP development roadmap | https://modelcontextprotocol.io/development/roadmap |
| The New MCP Roadmap (blog) | https://blog.modelcontextprotocol.io/posts/mcp-roadmap/ |

## Daily ingest 2026-08-24 (gap-fill)

| Topic | URL |
| --- | --- |
| MCP tools (2026-07-28) | https://modelcontextprotocol.io/specification/2026-07-28/server/tools |
| schema.ts ToolAnnotations / outputSchema | https://github.com/modelcontextprotocol/specification/blob/main/schema/2026-07-28/schema.ts |
| Tool Annotations as Risk Vocabulary (MCP Blog) | https://blog.modelcontextprotocol.io/posts/2026-03-16-tool-annotations/ |
| 2026-07-28 changelog (SEP-2106) | https://modelcontextprotocol.io/specification/2026-07-28/changelog.md |
| MCP prompts (2026-07-28) | https://modelcontextprotocol.io/specification/2026-07-28/server/prompts |
| MCP server concepts | https://modelcontextprotocol.io/docs/learn/server-concepts |
| MCP completion (2026-07-28) | https://modelcontextprotocol.io/specification/2026-07-28/server/utilities/completion |
| MCP pagination (2026-07-28) | https://modelcontextprotocol.io/specification/2026-07-28/server/utilities/pagination |
| MCP Python SDK — Pagination | https://py.sdk.modelcontextprotocol.io/v2/advanced/pagination/ |
| Using Headless CLI | https://cursor.com/docs/cli/headless |
| Using Agent in CLI | https://cursor.com/docs/cli/using |
| GitHub Actions (Cursor CLI) | https://cursor.com/docs/cli/github-actions.md |
| CLI permissions | https://cursor.com/docs/cli/reference/permissions.md |
| CLI authentication | https://cursor.com/docs/cli/reference/authentication.md |
| Worktrees (Agents Window / IDE) | https://cursor.com/docs/configuration/worktrees.md |
| CLI changelog — Git worktrees | https://cursor.com/docs/cli/changelog |
| sandbox.json reference | https://cursor.com/docs/reference/sandbox.md |
| Run Modes | https://cursor.com/docs/agent/security/run-modes.md |
| Implementing a secure sandbox for local agents | https://cursor.com/blog/agent-sandboxing |
| Cursor Agent Skills | https://cursor.com/docs/skills |
| Claude Code skills | https://code.claude.com/docs/en/skills |
| Agent Skills specification | https://agentskills.io/specification |
| OWASP Top 10 for Agentic Applications for 2026 | https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026/ |
| Release post — ASI01–ASI10 examples | https://genai.owasp.org/2025/12/09/owasp-top-10-for-agentic-applications-the-benchmark-for-agentic-security-in-the-age-of-autonomous-ai/ |
| OWASP Agentic Skills Top 10 | https://owasp.org/www-project-agentic-skills-top-10/ |
| Cursor Plugins | https://cursor.com/docs/plugins.md |
| Plugins help | https://cursor.com/help/customization/plugins.md |
| Agent Plugins standard | https://agent-plugins.org |

## Daily ingest 2026-08-25 (gap-fill)

| Topic | URL |
| --- | --- |
| Cursor Hooks | https://cursor.com/docs/hooks.md |
| Cloud Agents — hooks support | https://cursor.com/docs/cloud-agent |
| Cloud Agents help — Do Cloud Agents run hooks? | https://cursor.com/help/ai-features/cloud-agents |
| Agent mode help | https://cursor.com/help/ai-features/agent |
| Ask mode help | https://cursor.com/help/ai-features/ask-mode.md |
| Plan Mode | https://cursor.com/docs/agent/plan-mode |
| Debug Mode | https://cursor.com/docs/agent/debug-mode |
| Best practices for coding with agents | https://cursor.com/blog/agent-best-practices |
| Cursor Rules | https://cursor.com/docs/rules.md |
| Customize Cursor | https://cursor.com/docs/customize-cursor |
| Deeplinks | https://cursor.com/docs/reference/deeplinks.md |
| MCP Progress (2026-07-28) | https://modelcontextprotocol.io/specification/2026-07-28/basic/patterns/progress |
| MCP Streamable HTTP | https://modelcontextprotocol.io/specification/2026-07-28/basic/transports/streamable-http |
| MCP changelog 2026-07-28 | https://modelcontextprotocol.io/specification/2026-07-28/changelog |
| MCP Cancellation (2026-07-28) | https://modelcontextprotocol.io/specification/2026-07-28/basic/patterns/cancellation |
| A2A Streaming & Asynchronous Operations | https://a2a-protocol.org/latest/topics/streaming-and-async/ |
| A2A Protocol specification | https://a2a-protocol.org/latest/specification/ |
| A2A streaming-and-async (GitHub docs) | https://github.com/a2aproject/A2A/blob/main/docs/topics/streaming-and-async.md |
| Plugin commands format | https://cursor.com/docs/reference/plugins.md |
| Cursor Agent Skills — migrate-to-skills | https://cursor.com/docs/skills |
| Cursor Subagents | https://cursor.com/docs/subagents |
| MCP Basic — _meta and OpenTelemetry trace context (2026-07-28) | https://modelcontextprotocol.io/specification/2026-07-28/basic |
| OpenTelemetry semantic conventions for MCP | https://opentelemetry.io/docs/specs/semconv/gen-ai/mcp/ |
| MCP Logging (deprecated) | https://modelcontextprotocol.io/specification/2026-07-28/server/utilities/logging |

## Daily ingest 2026-08-26 (gap-fill)

| Topic | URL |
| --- | --- |
| Cursor MCP | https://cursor.com/docs/mcp |
| MCP integrations (help) | https://cursor.com/help/customization/mcp |
| Cloud Agent capabilities — MCP tools | https://cursor.com/docs/cloud-agent/capabilities |
| Cursor ignore file | https://cursor.com/docs/reference/ignore-file |
| sandbox.json reference | https://cursor.com/docs/reference/sandbox.md |
| @ mentions and context (help) | https://cursor.com/help/customization/context.md |
| Prompting agents | https://cursor.com/docs/agent/prompting |
| MCP stdio (2026-07-28) | https://modelcontextprotocol.io/specification/2026-07-28/basic/transports/stdio |
| MCP changelog 2026-07-28 | https://modelcontextprotocol.io/specification/2026-07-28/changelog |
| MCP Logging (deprecated) | https://modelcontextprotocol.io/specification/2026-07-28/server/utilities/logging |
| MCP Basic — error codes (2026-07-28) | https://modelcontextprotocol.io/specification/2026-07-28/basic |
| MCP resources (2026-07-28) | https://modelcontextprotocol.io/specification/2026-07-28/server/resources |
| RFC 6570 URI Template | https://datatracker.ietf.org/doc/html/rfc6570 |
| MCP completion (2026-07-28) | https://modelcontextprotocol.io/specification/2026-07-28/server/utilities/completion |
| MCP Authorization Server Discovery (2026-07-28) | https://modelcontextprotocol.io/specification/2026-07-28/basic/authorization/authorization-server-discovery |
| MCP Authorization (2026-07-28) | https://modelcontextprotocol.io/specification/2026-07-28/basic/authorization |
| RFC 9728 OAuth 2.0 Protected Resource Metadata | https://datatracker.ietf.org/doc/html/rfc9728 |
| A2A Protocol specification | https://a2a-protocol.org/latest/specification/ |
| What's New in A2A v1.0 | https://a2a-protocol.org/latest/whats-new-v1/ |
| a2a.utils.signing (Python SDK) | https://a2a-protocol.org/latest/sdk/python/api/a2a.utils.signing.html |
| A2A Enterprise-Ready Features | https://a2a-protocol.org/latest/topics/enterprise-ready/ |
| MCP tools — content types (2026-07-28) | https://modelcontextprotocol.io/specification/2026-07-28/server/tools |

## Daily ingest 2026-08-27 (gap-fill)

| Topic | URL |
| --- | --- |
| MCP Base Protocol — icons (2026-07-28) | https://modelcontextprotocol.io/specification/2026-07-28/basic |
| SEP-973 — icons and websiteUrl | https://modelcontextprotocol.io/seps/973-expose-additional-metadata-for-implementations-res.md |
| MCP Streamable HTTP (2026-07-28) | https://modelcontextprotocol.io/specification/2026-07-28/basic/transports/streamable-http |
| MCP Security Best Practices | https://modelcontextprotocol.io/docs/2026-07-28/tutorials/security/security_best_practices |
| MCP TypeScript SDK — Serve over HTTP | https://ts.sdk.modelcontextprotocol.io/v2/serving/http.html |
| MCP MRTR (2026-07-28) | https://modelcontextprotocol.io/specification/2026-07-28/basic/patterns/mrtr |
| Privacy and Data Governance | https://cursor.com/docs/enterprise/privacy-and-data-governance |
| Cloud Agent security | https://cursor.com/docs/cloud-agent/security |
| Secrets & Network | https://cursor.com/docs/cloud-agent/security-network |
| Data Use & Privacy Overview | https://cursor.com/privacy-overview |
| Cloud Agent OIDC tokens | https://cursor.com/docs/cloud-agent/identity |
| Agent tools — Search | https://cursor.com/docs/agent/tools/search |
| Ignore file | https://cursor.com/docs/reference/ignore-file |
| Governed Cloud Agents / self-hosted | https://cursor.com/docs/cloud-agent/self-hosted |
| Choose where Cloud Agents run | https://cursor.com/docs/cloud-agent/self-hosted-guides/choose-runtime |
| A2A Life of a Task | https://a2a-protocol.org/latest/topics/life-of-a-task/ |
| A2A Core Concepts | https://a2a-protocol.org/latest/topics/key-concepts/ |
| A2A Protocol specification | https://a2a-protocol.org/latest/specification/ |
| A2A Extensions | https://a2a-protocol.org/latest/topics/extensions/ |
| SEP-2640 Skills Extension (draft) | https://github.com/modelcontextprotocol/modelcontextprotocol/blob/main/seps/2640-skills-extension.md |
| experimental-ext-skills SEP draft | https://github.com/modelcontextprotocol/experimental-ext-skills/blob/main/docs/sep-draft-skills-extension.md |
| fast-agent — Skills over MCP | https://fast-agent.ai/mcp/skills-over-mcp/ |

## Daily ingest 2026-08-28 (gap-fill)

| Topic | URL |
| --- | --- |
| Origin overview | https://cursor.com/docs/origin |
| Mirror a GitHub repository | https://cursor.com/docs/origin/mirror-github |
| Install the Origin CLI | https://cursor.com/docs/origin/cli |
| Origin Code Hosting changelog | https://cursor.com/changelog/origin-code-hosting |
| Cloud Environment Setup | https://cursor.com/docs/cloud-agent/setup |
| Cloud Agent Builds | https://cursor.com/docs/cloud-agent/builds |
| Cloud Agents overview | https://cursor.com/docs/cloud-agent |
| Cloud Agent capabilities | https://cursor.com/docs/cloud-agent/capabilities |
| Cloud Agents help | https://cursor.com/help/ai-features/cloud-agents |
| Cloud Agents and Cursor Harness Improvements (2026-08-19) | https://cursor.com/changelog/08-19-26 |
| Cursor changelog index | https://cursor.com/changelog |
| Feature Lifecycle and Deprecation Policy | https://modelcontextprotocol.io/community/feature-lifecycle |
| SEP-2596 | https://modelcontextprotocol.io/seps/2596-spec-feature-lifecycle-and-deprecation |
| MCP 2026-07-28 changelog | https://modelcontextprotocol.io/specification/2026-07-28/changelog |
| MCP Extensions overview | https://modelcontextprotocol.io/extensions/overview |
| SEP-2133 — Extensions | https://modelcontextprotocol.io/seps/2133-extensions |
| Authorization extensions overview | https://modelcontextprotocol.io/extensions/auth/overview |
| A2A Protocol specification | https://a2a-protocol.org/latest/specification/ |
| What's New in A2A v1.0 | https://a2a-protocol.org/latest/whats-new-v1/ |
| Custom Protocol Bindings | https://a2a-protocol.org/latest/topics/custom-protocol-bindings/ |
| MCP Security Best Practices — SSRF | https://modelcontextprotocol.io/docs/2026-07-28/tutorials/security/security_best_practices |
| MCP Client Registration (CIMD) | https://modelcontextprotocol.io/specification/2026-07-28/basic/authorization/client-registration |
| SEP-991 — CIMD | https://modelcontextprotocol.io/seps/991-enable-url-based-client-registration-using-oauth-c |
| Enterprise-Managed Authorization | https://modelcontextprotocol.io/extensions/auth/enterprise-managed-authorization |
| MCP Authorization (2026-07-28) | https://modelcontextprotocol.io/specification/2026-07-28/basic/authorization |
| OAuth Client Credentials extension | https://modelcontextprotocol.io/extensions/auth/oauth-client-credentials |
| RFC 7523 JWT Bearer | https://datatracker.ietf.org/doc/html/rfc7523 |

## Daily ingest 2026-08-29 (gap-fill)

| Topic | URL |
| --- | --- |
| ACP protocol overview | https://agentclientprotocol.com/protocol/overview |
| ACP v2 overview | https://agentclientprotocol.com/protocol/v2/overview |
| ACP v2 transports | https://agentclientprotocol.com/protocol/v2/transports |
| Migrating from ACP v1 | https://agentclientprotocol.com/protocol/v2/migration |
| Using Agent in CLI | https://cursor.com/docs/cli/using |
| Cursor joined the ACP Registry (JetBrains) | https://blog.jetbrains.com/ai/2026/03/cursor-joined-the-acp-registry-and-is-now-live-in-your-jetbrains-ide/ |
| Security Agents | https://cursor.com/docs/security-agents |
| PR Routing & Approval | https://cursor.com/docs/approval-agents |
| Automations (help) | https://cursor.com/help/ai-features/automations |
| Agent metadata | https://cursor.com/docs/cloud-agent/metadata |
| OIDC tokens | https://cursor.com/docs/cloud-agent/identity |
| Cursor Python SDK | https://cursor.com/docs/sdk/python |
| Using Headless CLI | https://cursor.com/docs/cli/headless |
| Agent SDK overview | https://code.claude.com/docs/en/agent-sdk/overview |
| Give Claude custom tools | https://code.claude.com/docs/en/agent-sdk/custom-tools |
| Configure permissions (Agent SDK) | https://code.claude.com/docs/en/agent-sdk/permissions |
| Server Card Working Group charter | https://modelcontextprotocol.io/community/working-groups/server-card |
| File Uploads Working Group charter | https://modelcontextprotocol.io/community/working-groups/file-uploads |
| The New MCP Roadmap | https://blog.modelcontextprotocol.io/posts/mcp-roadmap/ |
| MCP development roadmap | https://modelcontextprotocol.io/development/roadmap |
| MCP resources (2026-07-28) | https://modelcontextprotocol.io/specification/2026-07-28/server/resources |
| Start from scratch, without a repo | https://cursor.com/changelog/start-from-scratch |
| A2A project (GitHub) | https://github.com/a2aproject/A2A |
| MCP vs A2A (Auth0) | https://auth0.com/blog/mcp-vs-a2a/ |
| MCP server concepts | https://modelcontextprotocol.io/docs/learn/server-concepts |

## Daily ingest 2026-08-30 (gap-fill)

| Topic | URL |
| --- | --- |
| Agent Skills overview | https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview |
| Using Agent Skills with the API | https://platform.claude.com/docs/en/build-with-claude/skills-guide |
| Claude Platform release notes | https://platform.claude.com/docs/en/release-notes/overview |
| Extend agents with skills (Agent SDK) | https://code.claude.com/docs/en/agent-sdk/skills |
| Computer use (OpenAI) | https://developers.openai.com/api/docs/guides/tools-computer-use |
| Tools — OpenAI Agents SDK (JS) | https://openai.github.io/openai-agents-js/guides/tools/ |
| Computer use tool (Claude) | https://platform.claude.com/docs/en/agents-and-tools/tool-use/computer-use-tool |
| Browser use tool (Claude) | https://platform.claude.com/docs/en/agents-and-tools/tool-use/browser-use-tool |
| ACP v2 overview | https://agentclientprotocol.com/protocol/v2/overview |
| Migrating from ACP v1 | https://agentclientprotocol.com/protocol/v2/migration |
| ACP v2 draft announcement | https://github.com/agentclientprotocol/agent-client-protocol/blob/main/docs/announcements/acp-v2-draft.mdx |
| ACP (Cursor CLI) | https://cursor.com/docs/cli/acp.md |
| Using Agent in CLI | https://cursor.com/docs/cli/using |
| ACP protocol overview | https://agentclientprotocol.com/protocol/overview |
| Model Context Protocol (Cursor) | https://cursor.com/docs/mcp |
| Model and Integration Management | https://cursor.com/docs/enterprise/model-and-integration-management |
| Enterprise | https://cursor.com/docs/enterprise |
| OpenAI Agents SDK | https://openai.github.io/openai-agents-python/ |
| Agent orchestration (OpenAI Agents SDK) | https://openai.github.io/openai-agents-python/multi_agent/ |
| Human-in-the-loop (OpenAI Agents SDK) | https://openai.github.io/openai-agents-python/human_in_the_loop/ |
| A2A joins AAIF’s open agentic stack | https://aaif.io/blog/a2a-joins-aaif |
| AAIF projects | https://aaif.io/projects |
| Agent2Agent (AAIF) | https://aaif.io/projects/agent2agent |
| A2A Protocol | https://a2a-protocol.org/latest/ |
| Agent Skills specification | https://agentskills.io/specification |
| Agent Skills overview (agentskills.io) | https://agentskills.io/home |
| Equipping agents with Agent Skills (Anthropic) | https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills |

## Daily ingest 2026-08-31 (gap-fill)

| Topic | URL |
| --- | --- |
| WebMCP (Chrome) | https://developer.chrome.com/docs/ai/webmcp |
| WebMCP Imperative API | https://developer.chrome.com/docs/ai/webmcp/imperative-api |
| WebMCP Declarative API | https://developer.chrome.com/docs/ai/webmcp/declarative-api |
| NLWeb README | https://github.com/microsoft/NLWeb |
| NLWeb REST API | https://github.com/microsoft/NLWeb/blob/main/docs/nlweb-rest-api.md |
| Codex SDK | https://developers.openai.com/codex/sdk |
| Codex SDK (learn.chatgpt.com) | https://learn.chatgpt.com/docs/codex-sdk |
| ACP Mode (Gemini CLI) | https://geminicli.com/docs/cli/acp-mode/ |
| gemini-cli acp-mode.md | https://github.com/google-gemini/gemini-cli/blob/main/docs/cli/acp-mode.md |
| Create plugins (Claude Code) | https://code.claude.com/docs/en/plugins |
| Discover and install plugins | https://code.claude.com/docs/en/discover-plugins |
| Plugin marketplaces | https://code.claude.com/docs/en/plugin-marketplaces |
| Plugins reference | https://code.claude.com/docs/en/plugins-reference |
| AGENTS.md | https://agents.md/ |
| agentsmd/agents.md | https://github.com/agentsmd/agents.md |
| AAIF projects | https://aaif.io/projects |
| Linux Foundation announces AAIF | https://aaif.io/news/linux-foundation-announces-formation-of-aaif |
| permissions.json reference | https://cursor.com/docs/reference/permissions |
| Run Modes | https://cursor.com/docs/agent/security/run-modes |
| Enterprise deployment patterns | https://cursor.com/docs/enterprise/deployment-patterns |
| Cursor Rules | https://cursor.com/docs/rules.md |
| MCP development roadmap | https://modelcontextprotocol.io/development/roadmap |
| The New MCP Roadmap (blog) | https://blog.modelcontextprotocol.io/posts/mcp-roadmap/ |
| SEP-1932: DPoP Profile for MCP | https://github.com/modelcontextprotocol/modelcontextprotocol/pull/1932 |

## Daily ingest 2026-09-01 (gap-fill)

| Topic | URL |
| --- | --- |
| Introduction (agentgateway) | https://agentgateway.dev/docs/standalone/latest/about/introduction/ |
| agentgateway joins AAIF | https://aaif.io/blog/agentgateway-joins-aaif-as-an-open-gateway-for-agentic-ai-infrastructure |
| agentgateway/agentgateway | https://github.com/agentgateway/agentgateway |
| goose home | https://goose-docs.ai/ |
| Using Extensions (goose) | https://goose-docs.ai/docs/getting-started/using-extensions |
| ACP Providers (goose) | https://goose-docs.ai/docs/guides/acp-providers |
| Recipes (goose) | https://goose-docs.ai/docs/guides/recipes/ |
| aaif-goose/goose | https://github.com/aaif-goose/goose |
| Sandbox Agents (OpenAI API) | https://developers.openai.com/api/docs/guides/agents/sandboxes |
| Sandbox clients (Agents SDK JS) | https://openai.github.io/openai-agents-js/guides/sandbox-agents/clients/ |
| OpenAI Agents SDK | https://openai.github.io/openai-agents-python/ |
| Slack (Cursor docs) | https://cursor.com/docs/integrations/slack.md |
| Cloud Agents and Cursor Harness Improvements | https://cursor.com/changelog/08-19-26 |
| Model and Integration Management | https://cursor.com/docs/enterprise/model-and-integration-management |
| Google Workspace Plugins (changelog) | https://cursor.com/changelog/google-workspace-plugins |
| Cursor Plugins | https://cursor.com/docs/plugins |
| Customize Cursor | https://cursor.com/docs/customize-cursor |
| Model Context Protocol (Cursor) | https://cursor.com/docs/mcp |
| A2UI Protocol v0.9 | https://a2ui.org/specification/v0.9-a2ui/ |
| A2UI v0.8 → v0.9 evolution guide | https://github.com/google/A2UI/blob/main/specification/v0_9/docs/evolution_guide.md |
| A2UI v0.9 (Google Developers Blog) | https://developers.googleblog.com/a2ui-v0-9-generative-ui/ |
| Plugins in the SDK (Claude) | https://code.claude.com/docs/en/agent-sdk/plugins.md |

## Daily ingest 2026-09-02 (gap-fill)

| Topic | URL |
| --- | --- |
| Self-Hosted Machines | https://cursor.com/docs/cloud-agent/self-hosted |
| Team Pools | https://cursor.com/docs/cloud-agent/bring-your-own-machine/pools |
| Choose where Cloud Agents run | https://cursor.com/docs/cloud-agent/bring-your-own-machine/choose-runtime |
| Computer use and desktop sharing | https://cursor.com/docs/cloud-agent/bring-your-own-machine/computer-use |
| Self-hosted machines (changelog) | https://cursor.com/changelog/self-hosted-machines |
| Cloud Agents API | https://cursor.com/docs/cloud-agent/api/endpoints |
| Cloud Run Worker Pools | https://cursor.com/docs/cloud-agent/self-hosted-cloud-run.md |
| Secrets & Network — private connectivity | https://cursor.com/docs/cloud-agent/security-network |
| Origin repository settings | https://cursor.com/docs/origin/settings |
| Codebase settings | https://cursor.com/docs/origin/codebase-settings |
| Origin API | https://cursor.com/docs/origin/api |
| Origin Code Hosting changelog | https://cursor.com/changelog/origin-code-hosting |
| Start from scratch, without a repo | https://cursor.com/changelog/start-from-scratch |
| Model Context Protocol (Cursor) | https://cursor.com/docs/mcp |
| MCP integrations (help) | https://cursor.com/help/customization/mcp |
| MCP Apps overview | https://apps.extensions.modelcontextprotocol.io/api/documents/overview.html |
| Codex App Server | https://learn.chatgpt.com/docs/app-server |
| codex-rs/app-server README | https://github.com/openai/codex/blob/main/codex-rs/app-server/README.md |
| Codex SDK | https://developers.openai.com/codex/sdk |

## Daily ingest 2026-09-03 (gap-fill)

| Topic | URL |
| --- | --- |
| Linear (Cursor docs) | https://cursor.com/docs/integrations/linear |
| GitHub (Cursor docs) | https://cursor.com/docs/integrations/github |
| Cloud Agents | https://cursor.com/docs/cloud-agent |
| Cloud Agent capabilities | https://cursor.com/docs/cloud-agent/capabilities.md |
| Cloud Agents API | https://cursor.com/docs/cloud-agent/api/endpoints |
| Team Pools | https://cursor.com/docs/cloud-agent/self-hosted/pool |
| My Machines | https://cursor.com/docs/cloud-agent/self-hosted-guides/my-machines |
| Cursor Automations | https://cursor.com/docs/cloud-agent/automations |
| Package your plugin (Codex) | https://developers.openai.com/plugins/build/plugins |
| Codex CLI developer commands | https://developers.openai.com/codex/cli/reference.md |
| Codex releases | https://github.com/openai/codex/releases |
| Claude Code hooks reference | https://code.claude.com/docs/en/hooks.md |
| Automate actions with hooks | https://code.claude.com/docs/en/hooks-guide |
| Claude Code memory | https://code.claude.com/docs/en/memory |
| Claude Code GitHub Actions | https://code.claude.com/docs/en/github-actions.md |
| claude-code-action configuration | https://github.com/anthropics/claude-code-action/blob/main/docs/configuration.md |
| A2UI v0.9.1 → v1.0 evolution guide | https://a2ui.org/specification/v1.0-evolution-guide/ |
| A2UI home | https://a2ui.org/ |

## Daily ingest 2026-09-04 (gap-fill)

| Topic | URL |
| --- | --- |
| Create custom subagents | https://code.claude.com/docs/en/sub-agents |
| How Claude remembers your project | https://code.claude.com/docs/en/memory.md |
| Connect Claude Code to tools via MCP | https://code.claude.com/docs/en/mcp |
| Run parallel sessions with worktrees | https://code.claude.com/docs/en/worktrees |
| Common workflows (Claude Code) | https://code.claude.com/docs/en/common-workflows |
| Service Accounts (Cursor) | https://cursor.com/docs/account/enterprise/service-accounts |
| Cloud Agents API | https://cursor.com/docs/cloud-agent/api/endpoints |
| Cloud Agents API v0 (legacy) | https://cursor.com/docs/cloud-agent/api/v0 |
| Webhooks (Cursor Cloud Agents) | https://cursor.com/docs/cloud-agent/api/webhooks |
| Team Pools | https://cursor.com/docs/cloud-agent/self-hosted/pool |
| Cloud environments (Codex) | https://learn.chatgpt.com/docs/environments/cloud-environment |
| openai/codex-universal | https://github.com/openai/codex-universal |
| Permissions (Codex) | https://learn.chatgpt.com/docs/permissions |
| Codex GitHub Action | https://developers.openai.com/codex/github-action.md |
| openai/codex-action README | https://github.com/openai/codex-action/blob/main/README.md |
| About GitHub Copilot cloud agent | https://docs.github.com/en/copilot/concepts/agents/coding-agent/about-coding-agent |
| GitHub Copilot cloud agent how-tos | https://docs.github.com/en/copilot/how-tos/use-copilot-agents/coding-agent |
| Invoking custom agents (Copilot CLI) | https://docs.github.com/en/copilot/how-tos/copilot-cli/use-copilot-cli/invoke-custom-agents |
| Copilot coding agent AGENTS.md | https://github.blog/changelog/2025-08-28-copilot-coding-agent-now-supports-agents-md-custom-instructions/ |
| Cursor MCP | https://cursor.com/docs/mcp |
| AGENTS.md | https://agents.md/ |

## Daily ingest 2026-09-05 (gap-fill)

| Topic | URL |
| --- | --- |
| Configure permissions (Claude Code) | https://code.claude.com/docs/en/permissions |
| Claude Code settings | https://code.claude.com/docs/en/settings |
| Configure the sandboxed Bash tool | https://code.claude.com/docs/en/sandboxing |
| Run Claude Code programmatically | https://code.claude.com/docs/en/headless |
| CLI reference (Claude Code) | https://code.claude.com/docs/en/cli-reference |
| Model Context Protocol (Codex) | https://developers.openai.com/codex/mcp |
| Configuration Reference (Codex) | https://developers.openai.com/codex/config-reference |
| Command line options (Codex CLI) | https://developers.openai.com/codex/cli/reference |
| Custom instructions with AGENTS.md (Codex) | https://learn.chatgpt.com/docs/agent-configuration/agents-md |
| Advanced Configuration (Codex) | https://learn.chatgpt.com/docs/config-file/config-advanced |
| Custom agents configuration (Copilot) | https://docs.github.com/en/copilot/reference/custom-agents-configuration |
| Creating custom agents for Copilot cloud agent | https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/customize-cloud-agent/create-custom-agents |
| Invoking custom agents (Copilot CLI) | https://docs.github.com/en/copilot/how-tos/copilot-cli/use-copilot-cli/invoke-custom-agents |
| About GitHub Copilot CLI | https://docs.github.com/en/copilot/concepts/agents/copilot-cli/about-copilot-cli |
| Using GitHub Copilot CLI | https://docs.github.com/en/copilot/how-tos/copilot-cli/use-copilot-cli/overview |
| Allowing and denying tool use (Copilot CLI) | https://docs.github.com/en/copilot/how-tos/copilot-cli/use-copilot-cli/allowing-tools |
| Agent Skills (Gemini CLI) | https://geminicli.com/docs/cli/skills/ |
| Creating Agent Skills (Gemini CLI) | https://geminicli.com/docs/cli/creating-skills/ |
| Agent Skills specification | https://agentskills.io/specification |
| MCP servers with Gemini CLI | https://geminicli.com/docs/tools/mcp-server/ |
| Gemini CLI configuration | https://geminicli.com/docs/reference/configuration/ |
| Gemini CLI for the enterprise | https://geminicli.com/docs/cli/enterprise/ |



