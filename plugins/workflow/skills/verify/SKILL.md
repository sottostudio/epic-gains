---
name: verify
description: Verify a change against its requirements and report actual check results before declaring it complete.
disable-model-invocation: true
---

# Verify

List the expected outcomes and the checks that directly establish them. Run relevant project tests, lint, type-check, or build as appropriate, starting with the smallest useful scope. Inspect the diff for unintended changes and secrets. Broaden checks when uncertainty or risk warrants it. Report each meaningful failure, skipped check, and environment limitation; do not infer success from an unrun or still-running command.
