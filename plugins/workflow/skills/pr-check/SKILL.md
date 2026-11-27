---
name: pr-check
description: Inspect a pull request's current head, checks, review state, and merge readiness without changing it.
disable-model-invocation: true
---

# Check a pull request

Identify the repository, PR, base, and current head from the live service. Inspect the diff, reviews, conflicts, and required check results for that head. If a merge queue is used, distinguish the PR check from the merge-group result. Report failures, pending checks, and blockers without bypassing them. Do not approve, merge, change settings, or post comments unless explicitly authorized.
