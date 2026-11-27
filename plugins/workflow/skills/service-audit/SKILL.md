---
name: service-audit
description: Compare project configuration and runbooks with authorized read-only service state, without changing hosted services.
disable-model-invocation: true
---

# Inspect service state

Determine the account, project, environment, and read-only information needed before connecting. Compare the relevant safe-to-read service state with project configuration and runbooks. Report drift, evidence, and unknowns. Do not retrieve credentials, secret values, or sensitive authentication configuration, and do not alter services. Access limitations are findings, not permission to broaden scope.
