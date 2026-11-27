import { spawnSync } from 'node:child_process';
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { fileURLToPath } from 'node:url';

const script = fileURLToPath(new URL('../plugins/workflow/scripts/check-tools.mjs', import.meta.url));
const runWithPath = (searchPath, ...args) => spawnSync(process.execPath, [script, ...args], {
  encoding: 'utf8',
  env: { ...process.env, PATH: searchPath },
});
const run = (...args) => runWithPath('', ...args);

test('reports missing tools without executing them', () => {
  const result = run('--profile', 'core', '--json');
  assert.equal(result.status, 0);
  const output = JSON.parse(result.stdout);
  assert.equal(output.profiles[0].profile, 'core');
  assert.deepEqual(output.profiles[0].tools.map((tool) => tool.name), ['git', 'gh', 'node', 'rg']);
  assert.ok(output.profiles[0].tools.every((tool) => tool.available === false));
});

test('finds executables but not directories without running them', { skip: process.platform === 'win32' }, () => {
  const dir = mkdtempSync(path.join(tmpdir(), 'workflow-tools-'));
  try {
    writeFileSync(path.join(dir, 'git'), '#!/bin/sh\nexit 1\n', { mode: 0o755 });
    mkdirSync(path.join(dir, 'gh'));
    const result = runWithPath(dir, '--profile', 'core', '--json');
    assert.equal(result.status, 0);
    const tools = JSON.parse(result.stdout).profiles[0].tools;
    assert.equal(tools.find((tool) => tool.name === 'git').available, true);
    assert.equal(tools.find((tool) => tool.name === 'gh').available, false);
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});

test('renders readable text output', () => {
  const result = run('--profile', 'core');
  assert.equal(result.status, 0);
  assert.match(result.stdout, /^\ncore:\n/);
  assert.match(result.stdout, /\nAvailability only;/);
});

test('rejects unknown profiles and incomplete options', () => {
  for (const args of [['--profile', 'unknown'], ['--profile'], ['--other']]) {
    const result = run(...args);
    assert.equal(result.status, 2);
    assert.notEqual(result.stderr.trim(), '');
  }
});
