---
name: review
description: Review code or a diff for actionable correctness, regression, security, and missing-test risks without changing it.
disable-model-invocation: true
---

# Review a change

Determine the requested scope and inspect the actual diff and relevant call sites. Prioritize demonstrable bugs and regressions over style. For each finding, give severity, file and line, impact, and a concrete failing scenario. State any meaningful test or evidence gaps. If nothing actionable is found, say so without claiming the change is risk-free. Do not edit or post comments unless requested.
