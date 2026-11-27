---
name: product-session
description: Run one app or product lane on its assigned branch with scoped agents, checks, and a verified handoff.
disable-model-invocation: true
---

# Product session

Read the assignment and project instructions. Verify the intended product, scope, branch/worktree, base, dirty state, capabilities, tests, and approval boundaries before work. Preserve unrelated changes and coordinate shared contracts with the head session. Use bounded agents for independent tasks when the host supports them; retain ownership of integration and verification.

Implement the authorized outcome directly on the owned product branch where permitted. Run project precheck and affected tests; for each code change obtain a fresh review independent of the builder and address findings before committing. Fetch and safely incorporate upstream changes before pushing. Avoid a PR for every change: once planned buildable issues are complete, prepare one product-branch-to-`main` PR with closing references and verification. Obtain required independent sensitive and migration reviews; code changes invalidate reviews tied to an earlier head.

Report branch, exact head, results, unresolved blockers, and next action. Push, open or merge a PR only when authorized; never change another lane or modify live services without authorization. Use the project's explicit session and subagent model policy.
