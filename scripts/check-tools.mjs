#!/usr/bin/env node
import { accessSync, constants, statSync } from 'node:fs';
import path from 'node:path';

const profiles = {
  core: ['git', 'gh', 'node', 'rg'],
  ai: ['claude', 'copilot', 'agy', 'firecrawl', 'graphify', 'ntn'],
  cloud: ['vercel', 'supabase', 'wrangler', 'cf', 'gcloud', 'stripe', 'sentry-cli', 'op'],
  quality: ['actionlint', 'zizmor', 'shellcheck', 'gitleaks', 'osv-scanner', 'act', 'hyperfine', 'ruff', 'pyright'],
  data: ['jq', 'yq', 'duckdb', 'pgcli'],
  apple: ['xcodebuild', 'swift', 'xcrun', 'swiftlint', 'xcbeautify', 'xcsift', 'asc'],
  media: ['ffmpeg', 'ffprobe', 'mediainfo', 'exiftool', 'scenedetect'],
  docs: ['pandoc', 'dot', 'd2'],
};

function available(name) {
  const dirs = (process.env.PATH ?? '').split(path.delimiter).filter(Boolean);
  const extensions = process.platform === 'win32'
    ? ['', ...(process.env.PATHEXT ?? '.COM;.EXE;.BAT;.CMD').split(';')]
    : [''];
  return dirs.some((dir) => extensions.some((extension) => {
    const candidate = path.join(dir, name + extension);
    try {
      accessSync(candidate, constants.X_OK);
      return statSync(candidate).isFile();
    } catch (error) {
      if (['ENOENT', 'ENOTDIR', 'EACCES', 'EPERM'].includes(error.code)) return false;
      throw error;
    }
  }));
}

let profile = 'core';
let json = false;
for (let i = 0; i < process.argv.length - 2; i++) {
  const arg = process.argv[i + 2];
  if (arg === '--json') json = true;
  else if (arg === '--profile' && process.argv[i + 3]) profile = process.argv[++i + 2];
  else if (arg === '--help') {
    console.log(`Usage: node scripts/check-tools.mjs [--profile ${Object.keys(profiles).join('|')}|all] [--json]`);
    process.exit(0);
  } else {
    console.error(`Unknown or incomplete argument: ${arg}`);
    process.exit(2);
  }
}

if (profile !== 'all' && !Object.hasOwn(profiles, profile)) {
  console.error(`Unknown profile: ${profile}`);
  process.exit(2);
}

const selected = profile === 'all' ? Object.entries(profiles) : [[profile, profiles[profile]]];
const results = selected.map(([name, tools]) => ({
  profile: name,
  tools: tools.map((tool) => ({ name: tool, available: available(tool) })),
}));
if (json) console.log(JSON.stringify({ profiles: results }, null, 2));
else {
  for (const result of results) {
    console.log(`\n${result.profile}:`);
    for (const tool of result.tools) console.log(`  ${tool.name}: ${tool.available ? 'available' : 'not found'}`);
  }
  console.log('\nAvailability only; versions, accounts, and connections were not checked.');
}
