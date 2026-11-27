# Apply the workflow to a new SaaS

This is an operating playbook, not an application scaffold, feature specification, or a provisioned platform. It contains no previous product requirements: the new product's owner defines what to build. It assumes a head session coordinating product-owned branches, Claude Code skills and agents, GitHub for code and concrete changes, and an optional knowledge base for plans. Adapt it to the actual product, team, providers, permissions and host.

## 1. Establish the project

1. Define the product outcome, target users, first release, non-goals, owners and acceptance criteria in a [project charter](../templates/project-charter.md). Identify unknowns, privacy constraints, and decisions requiring the owner.
2. Select the repository, default branch, environments, package manager, runtime and real build/test commands. Document architecture and ownership in the target project's `CLAUDE.md` and `AGENTS.md`; do not replace existing instructions blindly.
3. Inventory the tools and connections needed for the planned work. Check local executables, account, organization, project, permissions and environment separately. Use [connections](connections.md); do not infer that a CLI installed or a plugin loaded means a service is connected.
4. Choose a durable source of truth: concrete changes in GitHub issues; larger ideas, designs, decisions, queues and handoffs in Notion or an equivalent. Adapt the supplied [templates](../templates/README.md) to the chosen schema. Check for an existing record before creating one; records do not authorize actions.
5. Agree on the branch map, model availability, review policy, project checks, approval boundaries, and CI/merge queue setup. Enter these in the charter and [branch map](../templates/branch-map.md). The defaults in this starter are guidance until actually configured and verified.

Invoke `/workflow:bootstrap-saas` in the target project to walk through this process. It interviews in decision rounds and supports both a new project and an existing build adopting the plugin. For an existing build, it inventories current practices and asks before changing them. The startup hook suggests this skill when no completed setup record exists; it cannot conduct the interview itself. The skill produces a plan and project-specific documents only when authorized; it does not provision infrastructure.

## 2. Run the project

1. The head session reads instructions and current state, turns goals into milestones and concrete issues, identifies dependencies and shared contracts, and assigns one session per independently owned product or app lane. Give each a complete brief; use host session/messaging tools if available or copy briefs manually.
2. Each product session verifies its assigned branch and worktree, owns its product paths, and builds directly on its branch when authorized. Break the work into bounded tasks, assign agents only where useful, and avoid overlapping writes. A session is not an agent, and a plugin alone does not create sessions. Optional [Copilot lanes](models-and-usage.md#optional-copilot-lanes) provide separate scan and second-reader workflows without authority to merge.
3. The session implements, runs precheck and affected tests, obtains a fresh independent review for each code change, fixes findings, commits and pushes under its permissions. Record issue status, exact head, validation, blockers and next action. Sensitive work and migrations receive the additional reviews in [workflow](workflow.md).
4. When a product's planned buildable issues are complete, verify the integrated branch and platform-specific builds and open one product-to-`main` PR, rather than one PR per issue. List completed issues with closing references and disclose unfinished or blocked work.
5. The head session tracks current-head review and CI, prioritizes red base and blockers, and coordinates sensitive/workflow PRs. Ordinary PRs use auto-merge where configured and authorized. Follow the [merge-queue loop](merge-queue.md) through a successful merge-group check and confirmed merge.
6. Observe deployed behavior using the team's approved process. Use a [release checklist](../templates/release-checklist.md) for owner-approved live changes and rollback. Close or update work records only after verifying the outcome.

For detailed intake, agent assignment, build, review, queue and recovery steps, use the [operating rhythm](operating-rhythm.md).

## 3. Design the SaaS gates

Document actual checks and owners, not just commands with assumed defaults:

| Area | Define and verify before release |
| --- | --- |
| Identity and authorization | Login and recovery, tenant isolation, role checks, access-denied behavior, session handling |
| Data and migrations | Local and isolated-environment tests, backwards-compatible rollout, backups, rollback or forward recovery, access and retention |
| Billing, if used | Provider and environment, entitlement changes, retries/idempotency and webhook validation; approved test scenarios |
| Application quality | Type/lint/build, focused and full tests, critical browser paths, accessibility and platform-specific builds |
| Security and privacy | Dependency and secret checks, least privilege, sensitive-data handling and logging, independent review |
| Delivery and operations | Preview versus production mapping, queue required checks, deployment approval, observability, incident and rollback owner |

These are planning categories, not proof any check is implemented. Use existing project tools and extend CI with actual commands. Avoid copying production data into tests or sending private code to external services without applicable authorization.

## 4. Resume and evolve

Resume from the latest handoff, current branch and live check state, not assumptions from an old session. Update decisions and runbooks when the workflow changes; distinguish proposals from adopted rules. Reassess model aliases, CLI versions, costs, plugin compatibility, permission scopes and provider behavior periodically. Do not copy company identifiers, credentials, private data or application-specific code into the reusable starter.
