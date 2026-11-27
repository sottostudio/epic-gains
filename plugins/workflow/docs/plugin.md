# Plugin guide

The repository is a local marketplace; `plugins/workflow` is a Claude Code plugin. The plugin's manifest is in `.claude-plugin/plugin.json`, while `skills/` and `agents/` are at the plugin root. Skills are explicitly invoked, so they do not unexpectedly run on their own:

| Skill | Purpose |
| --- | --- |
| `/workflow:bootstrap-saas` | Interview and guide setup for a new or existing project |
| `/workflow:start` | Inspect context and scope work |
| `/workflow:build` | Implement and validate a change |
| `/workflow:debug` | Investigate and fix a reproducible problem |
| `/workflow:test-first` | Drive a change with a failing behavioral test |
| `/workflow:verify` | Check evidence before reporting completion |
| `/workflow:worktree` | Plan safe, isolated worktree use |
| `/workflow:pr-check` | Inspect PR checks and merge readiness |
| `/workflow:service-audit` | Compare authorized read-only service state |
| `/workflow:lane-charter` | Establish a bounded session or branch charter |
| `/workflow:review-digest` | Summarize unresolved PR review threads |
| `/workflow:workflow-status` | Produce a read-only status digest |
| `/workflow:head-session` | Coordinate product sessions and integration |
| `/workflow:product-session` | Run an assigned product lane |
| `/workflow:agent-workflow` | Coordinate bounded agents within a session |
| `/workflow:plan-work` | Plan outcomes, dependencies, and checks |
| `/workflow:finish-branch` | Verify a branch before authorized integration |
| `/workflow:toolbox` | Check required tools and connection boundaries |
| `/workflow:review` | Review a change without editing it |
| `/workflow:handoff` | Summarize the state and next safe action |

Claude may use the focused implementer, test engineer, reviewer, security reviewer, migration reviewer, gate doctor, researcher, planner, issue triage, operations observer, and PR conductor agents when asked or when appropriate. The implementer and test engineer can write only within their assignment and host permissions; other agents are read-only. Tool permissions and the host's approval rules still apply.

The bundled agents request the Haiku model alias. This does not pin a version or prevent invocation-level overrides; see the opt-in [model policy](models-and-usage.md).

The charter, review digest, handoff and status skills adapt the behavior of custom desktop mods to portable text workflows. Their original dashboard, alert rail, automatic session hooks and persistent baton storage require a separate custom desktop runtime and are not included or emulated by this Claude Code plugin.

For development, use `claude --plugin-dir ./plugins/workflow` from this repository. For a target project, supply the absolute path to this checkout's `plugins/workflow` while running Claude in that project. For a durable installation follow the [plugin README](../README.md); the marketplace must remain accessible to the machine. Guides, templates and the tool checker are packaged inside the plugin. Do not copy credentials or project-specific files into the plugin. Review plugin updates before installing them.

The manifest intentionally omits a version so Claude can use commit-based versioning. The validator may warn about the missing version; publishing to a plugin directory may impose additional requirements, including a license and icon. This private starter is not submitted to a public catalog.

Only the Claude Code plugin format is targeted. The Markdown guidance can be adapted to other AI tools, but their plugin compatibility is not claimed. A plugin supplies skills and agents; it does not automatically load this repository's `CLAUDE.md` into unrelated projects, configure project CI, grant permissions, or connect services.

The plugin has no bundled MCP servers. Add only trusted, reviewed connections separately; see [connections](connections.md).

The bundled `SessionStart` hook runs at startup and resume. It reads only the first line of `.workflow/setup.md` under the project root and supplies a setup reminder as Claude context when the record is missing or incomplete. It does not write files, execute setup, check connections, or make network requests. The reminder is context, not a guaranteed visible prompt; the user can always run `/workflow:bootstrap-saas` directly. After an approved setup, the exact first-line marker `<!-- workflow-setup: complete -->` suppresses the reminder. Missing project-root information and unreadable records are reported as context instead of being treated as complete. Review or disable the hook according to Claude Code's hook controls if unwanted. Hooks and prompts are not security boundaries.

References: [create plugins](https://code.claude.com/docs/en/plugins/create), [marketplaces](https://code.claude.com/docs/en/plugins/create-marketplace), [skills](https://code.claude.com/docs/en/skills), [hooks](https://code.claude.com/docs/en/hooks), and [subagents](https://code.claude.com/docs/en/sub-agents).
