---
name: agent-workflow
description: Coordinate bounded agent assignments inside a session and integrate their results with review and verification.
disable-model-invocation: true
---

# Agent workflow

Partition the task only where work is genuinely independent. Give each agent the goal, precise scope, allowed tools and writes, relevant context, required output and checks, and stop conditions. Prevent overlapping write ownership. Use host-supported agents or work directly when unavailable; do not invent a dispatch or assume agents inherit the session's context.

Collect results and failures, verify the actual changed files, combine actionable findings into one fix batch, and rerun relevant tests. Where independent review is required, review the exact current head separately from its builder; a later code change invalidates that review. Return a concise result with evidence and unresolved risks.
