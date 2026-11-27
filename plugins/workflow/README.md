# Workflow plugin

Claude Code skills for bootstrapping a SaaS workflow, coordinating sessions, building, debugging, testing, verifying, reviewing, and handing off work. Agents provide optional bounded implementation, testing, review, and research. A read-only startup hook suggests setup for projects without a completed setup record; it does not perform setup. This plugin adds no servers, credentials, automatic writes, or deployment automation.

The [SaaS playbook](docs/saas-playbook.md), [operating rhythm](docs/operating-rhythm.md), [templates](templates/README.md), and [tool checker](scripts/check-tools.mjs) are included in the plugin. Run `/workflow:bootstrap-saas` in a new or existing target project for an interactive, approval-based setup; define its own product requirements rather than copying a previous product.

For a local marketplace, from the marketplace repository root run `claude plugin marketplace add "$PWD"` followed by `claude plugin install workflow@epic-gains --scope user`. This changes local Claude settings. For a one-session load, run `claude --plugin-dir <absolute-path-to-plugin>`. See the [plugin guide](docs/plugin.md) for limitations.
