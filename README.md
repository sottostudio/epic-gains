# Epic Gains workflow starter

A portable AI-assisted development workflow and Claude Code plugin. It contains no application, credentials, live service configuration, or automatic deployments. Adapt it to each project before relying on its checks.

## Start here

1. Install and sign in to [Claude Code](https://code.claude.com/docs/en/setup). Review the plugin in [`plugins/workflow`](plugins/workflow).
2. From this checkout, validate and load it for one session:

   ```sh
   claude plugin validate ./plugins/workflow
   claude --plugin-dir ./plugins/workflow
   ```

3. In Claude Code, run `/workflow:start` to inspect the project and establish a task. Other skills cover building, debugging, test-first development, verification, worktrees, review, and handoff.
4. For a persistent installation, register this checkout as a local marketplace and install the plugin:

   ```sh
   claude plugin marketplace add "$PWD"
   claude plugin install workflow@epic-gains --scope user
   ```

   This changes local Claude settings, not the repository. Run `claude plugin list` to check the installation. After editing the plugin, update the marketplace/plugin and reload according to the [Claude plugin documentation](https://code.claude.com/docs/en/plugins/install); a `--plugin-dir` session loads directly from the checkout.
5. For a new project, adapt [`templates/CLAUDE.md`](templates/CLAUDE.md) and [`templates/AGENTS.md`](templates/AGENTS.md) to its root, fill in actual commands and boundaries, and review them with the team. A plugin does not automatically install that project's instructions.

See [workflow](docs/workflow.md), [connections](docs/connections.md), [plugin guide](docs/plugin.md), and [operations and safety](docs/operations.md). The [templates](templates/) include portable, Notion-derived briefs and records; nothing here creates issues, updates Notion, or connects services automatically.

## Validate this starter

Requires Node.js with the built-in test runner and Claude Code for plugin validation:

```sh
node --test tests/*.test.mjs
claude plugin validate ./plugins/workflow
claude plugin validate .
```

The starter CI runs the Node checks. Configure real build, lint, test, and security gates when adopting it for an application.
