# Coordinated development sessions

This playbook adapts a head session plus app-specific branch sessions into a project-neutral model. A Claude plugin provides instructions and agents, not an independent session manager. Use the host's supported session/worktree and messaging tools when available; otherwise create sessions and relay the same briefs and results manually. Never claim a session was created, a message delivered, or work integrated without evidence.

## Roles

| Role | Owns | Does not automatically own |
| --- | --- | --- |
| Head session | Intake, task routing, dependencies, shared decisions, cross-product coordination, integration readiness, and concise status | Other sessions' branches, approvals, or live-service changes |
| Product session | One assigned product/app lane, its branch or worktree, scoped implementation, checks, and handoff | Another product's paths or shared contracts without coordination |
| Session agents | Bounded research, implementation, review, diagnosis, or verification within a session | Permission to expand scope, approve their own work, or authorize external changes |
| Project owner | Decisions and explicit approval for protected or consequential actions | Automatic approval from an issue, handoff, or agent report |

Use `/workflow:head-session` in the coordinator, `/workflow:product-session` for each product lane, and `/workflow:agent-workflow` inside a session. The matching [brief templates](../templates/README.md) define the data passed between them.

## Start the head session

1. Read project instructions, current branch and uncommitted state, active handoffs, current work, and the project's chosen source of truth. Verify live status where needed.
2. Break the request into outcomes and dependencies. For each product, record its owner, allowed paths, intended branch/base, required capabilities, validation, and approval boundaries. Shared contracts and migration sequencing have one explicit owner.
3. Check host capabilities and user authorization before creating sessions or branches. Start one product session per independently owned app/product when useful. Assign only work within the requested scope. Do not silently use a shared checkout or stack on another session's branch.
4. Track each assignment as pending, active, blocked, or complete. Record exact session/branch identifiers only in the project-selected private state. Provide the full task brief to each session; do not assume it inherits the head's conversation.

## Product session lifecycle

1. Verify the assigned branch/worktree, base, dirty state, scope, tool access, and handoff. Preserve unrelated work. If the intended base or ownership is unclear, stop before switching or creating anything.
2. Plan the outcome and select focused agents only for independent work. Assign non-overlapping write ownership. Use a reviewer separate from the builder when independent review is required; reviewers return evidence rather than granting approval.
3. Implement, run relevant local checks, review the actual diff, and report exact branch and head plus checks, failures, shared contract changes, pending decisions, and next action.
4. Integrate only as authorized under the target repository's actual branch protections, reviews, and merge queue. A new code push invalidates a review or check tied to an earlier head; rerun what the project requires. Never rewrite another session's branch without permission.

## Agent workflow inside each session

Frame a bounded assignment with goal, inputs, paths, output, tool/write limits, tests, and stop conditions. Use parallel agents only for independent work. Collect each result, verify changed files and the current head, combine findings into a coherent fix batch, and repeat review/checks on the new head when required. Report a blocker rather than treating a failed or missing result as success. Retain the session's ownership of integration and user decisions.

## Handoff and completion

The head reconciles session results against actual branch and check state, prioritizes dependencies and blockers, and reports what is done versus planned. Do not assume a handoff carries authorization. Keep work state in the team's chosen durable store, record source and freshness, update rather than duplicate, and exclude secrets and private data. Close sessions or clean up worktrees only when the user/project permits and no uncommitted work will be lost.

## Platform differences

Native session creation, inter-session messaging, agent teams, worktree isolation, model availability, and approval behavior vary by host and version. Check the host's capabilities and current documentation; use the manual brief-and-handoff fallback when a capability is missing. Claude subagents are not a substitute for independent app sessions, and an experimental agent-team feature must be explicitly enabled and verified by its owner. No orchestration service is installed by this starter.
