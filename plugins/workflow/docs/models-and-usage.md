# Models and usage

The source workflow's current decision uses **Opus 5.5 for head, product, and research sessions** and **Haiku 5.5 for every subagent and workflow agent**, including builders, reviewers, and fixes. Set the subagent model explicitly rather than inheriting the session model. This is a portable starting policy, not a claim that a particular account, host, or provider has those models available. Project and user instructions, host policy, permissions, and current model availability take precedence. Review the policy when models or prices change; never silently substitute a different model and claim the original ran.

Claude Code supports `model` in agent frontmatter. The bundled agents request `haiku`, an alias whose exact model can vary. Per-invocation model selection can override frontmatter. For Claude Code versions that support it (2.1.257 or later), an owner can adapt [the example settings](../templates/claude-settings.example.json) to set an Opus session alias and force the Haiku alias for subagents, teammates and workflow agents. Verify the aliases resolve to the intended 5.5 models for the account/provider; use supported full model IDs if exact version pinning is required and available. Environment variables and managed settings may override project settings. Inspect `/model` and a running agent's `/tasks` entry; if the intended model is unavailable, report the mismatch and follow the project's decision process rather than silently changing the policy.

These are **opt-in target-project settings**: copying them changes Claude's behavior and can override agent-level selections. The plugin does not install them. Other hosts, including Copilot CLI, have separate model selection and supported identifiers; do not assume Claude settings apply.

## Optional Copilot lanes

The source workflow uses Copilot CLI as a bounded secondary worker, not a merge controller. Its documented routing is distinct from Claude's session/subagent policy:

| Lane | Task | Source routing | Source credit ceiling per run |
| --- | --- | --- | --- |
| Scan | Conflict markers and diff debris | Haiku 5.5, low effort | 30 |
| Review | Independent second-reader review, compared with the primary reviewer | Auto, balance tier | 60 |
| Refute | Check whether issue-closing claims are supported | Auto, balance tier | 30 |

These are historical source settings, not guarantees of availability, price or compatibility. The source also routes sensitive verdicts, approval decisions, merging, connectors, platform builds and releases to the primary workflow rather than these lanes. Copilot never pushes, approves, merges or enqueues in that design. The session owner verifies every result and keeps final responsibility.

The original wrapper is project-specific and is not included. Before adopting this pattern, verify the installed CLI's supported model names, effort and credit-limit options; define scoped permissions and a safe command in the target project. Review data-handling rules first and do not send private source or sensitive data to third parties. Record actual usage and useful outcomes, then periodically revise the lane policy based on measured costs and quality.

## Save usage without reducing assurance

- Read the smallest relevant context, search narrowly, and reuse verified durable decisions; check volatile status live.
- Delegate only genuinely independent, bounded work; provide acceptance criteria, owned paths, validation and a stop condition. Avoid redundant agents and overlapping writes.
- Use focused checks first, then the required broader gate; do not skip necessary testing or independent review to save tokens.
- Limit successful log output while preserving failure output and exit status. Do not pipe away errors or present an incomplete agent result as success.
- Record concise handoffs and exact revision evidence. Compare model and tool costs using current provider information rather than promising savings.

### Practical session playbook

1. **Before reading:** reuse already-read unchanged material, inspect a file index or search first, and read relevant ranges. Use a current code index for symbol relationships and literal search for configuration or exact text. A stale, incomplete or inferred graph result requires source verification.
2. **Before commands:** use a focused test or a runner's supported concise reporter first; broaden to the required gate. A wrapper may summarize successful output, but must preserve a failing command's exit status and enough failure details to diagnose it. Verify this with a deliberately failing test before relying on a wrapper. Never automatically rewrite or pipe arbitrary commands based on a prompt.
3. **Keep recurring context small:** move specialized guidance into skills loaded when relevant. Keep startup output short, disable unused integrations only with authorization, and avoid re-reading unchanged files or repeating identical searches. Inspect actual context use with the host's supported tools.
4. **Preserve continuity deliberately:** keep a concise durable ledger and handoff for planned work. Start a fresh session when context is no longer needed; when compacting, preserve the current goal, exact branch and head, decisions, checks, unresolved reviews and next action.
5. **Watch cache and costs:** model, effort, context and tool configuration changes can affect cache reuse depending on the host. Check current provider documentation and measured usage rather than assuming any TTL or savings. Avoid unnecessary mid-session changes, duplicate agent work and repeated verbose logs; never skip required checks to reduce cost.

Reference: [Claude Code subagents and model selection](https://code.claude.com/docs/en/sub-agents).
