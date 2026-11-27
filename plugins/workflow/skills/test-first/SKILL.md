---
name: test-first
description: Implement behavior using a focused failing test first, then make it pass and refactor safely.
disable-model-invocation: true
---

# Test first

Identify the expected behavior and an observable failing case. Write the smallest focused test and run it to verify that it fails for the intended reason. Implement the minimum complete change, run the test again, then refactor and run relevant checks. Cover meaningful edge cases rather than implementation details. If a test cannot be run or does not fail as expected, explain the limitation instead of claiming a verified regression test.
