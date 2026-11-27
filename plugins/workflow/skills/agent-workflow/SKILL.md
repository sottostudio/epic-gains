---
name: agent-workflow
description: Coordinate bounded agent assignments inside a session and integrate their results with review and verification.
disable-model-invocation: true
---

# Agent workflow

Partition the task only where work is genuinely independent. Give each agent the goal, precise scope, allowed tools and writes, relevant context, required output and checks, explicit model, and stop conditions. Follow the project policy: the source workflow uses Opus 5.5 for sessions and Haiku 5.5 for all subagents and workflow agents. Verify availability and the actual model; do not silently substitute. Prevent overlapping write ownership. Use host-supported agents or work directly when unavailable; do not invent a dispatch or assume agents inherit the session's context.

For a multi-task plan, establish one durable ledger using `../../templates/plan-ledger.md`, resolved relative to this skill. Identify the plan, workspace, branch, baseline, tasks, dependencies, constraints and approval boundaries. Check the existing ledger and current Git state before resuming so completed tasks are not dispatched twice. Record meaningful decisions, their reasons and risks.

For each delegated implementation task, capture its exact baseline before dispatch. Give the implementer a self-contained brief, bounded ownership and expected checks. Collect the result and inspect the actual change; incomplete or blocked results are not success. Have an independent reviewer assess both specification compliance and code quality against the full baseline-to-current diff. Record each verdict, findings and checks in the ledger. Batch actionable fixes, then rerun the relevant review and checks on the changed revision. Do not mark the task complete with unresolved required findings; escalate an approved exception explicitly.

After the tasks, independently review the whole intended branch or plan scope and run the project's required integration checks. Record the exact revision, failures, open risks and handoff. A new code change invalidates applicable head-specific reviews. These are instructions, not an automatic dispatcher or approval authority; obey the project's permissions and host capabilities.
