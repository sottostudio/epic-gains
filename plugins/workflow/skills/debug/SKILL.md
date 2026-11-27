---
name: debug
description: Investigate a bug or failing check systematically, reproduce it, identify the root cause, and verify a focused fix.
disable-model-invocation: true
---

# Debug

1. Capture the symptom and expected behavior. Inspect the error, relevant code, recent changes, and environment without exposing secrets.
2. Reproduce the issue with the smallest safe case. If reproduction is unavailable, state what evidence is missing.
3. Form a specific hypothesis and test it before changing code. Trace the underlying cause instead of masking the symptom.
4. Add a focused regression test where practical, fix the cause, and rerun the reproduction and relevant checks.
5. Report evidence, remaining uncertainty, and any unrelated failures. Do not retry destructive or production operations as a debugging shortcut.
