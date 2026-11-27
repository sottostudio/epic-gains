# Plugin guide

The repository is a local marketplace; `plugins/workflow` is a Claude Code plugin. The plugin's manifest is in `.claude-plugin/plugin.json`, while `skills/` and `agents/` are at the plugin root. Skills are explicitly invoked, so they do not unexpectedly run on their own:

| Skill | Purpose |
| --- | --- |
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
| `/workflow:review` | Review a change without editing it |
| `/workflow:handoff` | Summarize the state and next safe action |

Claude may use the focused reviewer, security reviewer, gate doctor, and researcher agents when asked or when appropriate. Tool permissions and the host's approval rules still apply.

The charter, review digest, handoff and status skills adapt the behavior of custom desktop mods to portable text workflows. Their original dashboard, alert rail, automatic session hooks and persistent baton storage require a separate custom desktop runtime and are not included or emulated by this Claude Code plugin.

For development, use `claude --plugin-dir ./plugins/workflow` from this repository. For a target project, supply the absolute path to this checkout's `plugins/workflow` while running Claude in that project. For a durable installation follow the [README](../README.md); the marketplace must remain accessible to the machine. Do not copy credentials or project-specific files into the plugin. Review plugin updates before installing them.

The manifest intentionally omits a version so Claude can use commit-based versioning. The validator may warn about the missing version; publishing to a plugin directory may impose additional requirements, including a license and icon. This private starter is not submitted to a public catalog.

Only the Claude Code plugin format is targeted. The Markdown guidance can be adapted to other AI tools, but their plugin compatibility is not claimed. A plugin supplies skills and agents; it does not automatically load this repository's `CLAUDE.md` into unrelated projects, configure project CI, grant permissions, or connect services.

The plugin has no bundled MCP servers or hooks. Add only trusted, reviewed connections separately; see [connections](connections.md). Hooks are optional and disabled by default; review any hook's code, input, failure behavior, and permissions before configuring it in the target project. Prefer explicit user confirmation over using a prompt as a deterministic enforcement mechanism.

References: [create plugins](https://code.claude.com/docs/en/plugins/create), [marketplaces](https://code.claude.com/docs/en/plugins/create-marketplace), [skills](https://code.claude.com/docs/en/skills), and [subagents](https://code.claude.com/docs/en/sub-agents).
