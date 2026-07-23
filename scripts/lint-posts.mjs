#!/usr/bin/env node
// Validates every post's frontmatter before it reaches Astro's build.
// Catches two failure modes that have each broken production once already:
//   1. Missing/invalid frontmatter (fails the same schema the real build uses)
//   2. Smart/curly quotes inside the frontmatter block (near-invisible paste
//      artifacts that silently break YAML's quote matching)
// Run directly: node scripts/lint-posts.mjs
// Runs automatically before `npm run build` (see package.json "prebuild").

import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { load as parseYaml } from 'js-yaml';
import { postSchema } from '../src/content/postSchema.mjs';

const POSTS_DIR = join(import.meta.dirname, '..', 'src', 'content', 'posts');
const FRONTMATTER_RE = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/;
// Curly/typographic quotes: fine in prose, dangerous inside YAML frontmatter
// (see the why-bitcoin-goes-up-eventually.md incident: a straight quote
// paired with a curly one silently swallowed the rest of the frontmatter).
const SMART_QUOTE_RE = /[‘’“”]/;

let hasErrors = false;
let hasWarnings = false;

const files = readdirSync(POSTS_DIR).filter((f) => f.endsWith('.md'));

for (const file of files) {
  const path = join(POSTS_DIR, file);
  const raw = readFileSync(path, 'utf-8');
  const match = raw.match(FRONTMATTER_RE);

  if (!match) {
    hasErrors = true;
    console.error(`✗ ${file}\n  No frontmatter block found (file must start with "---").\n`);
    continue;
  }

  const frontmatterBlock = match[1];

  if (SMART_QUOTE_RE.test(frontmatterBlock)) {
    hasWarnings = true;
    console.warn(
      `⚠ ${file}\n  Curly/smart quote (‘ ’ “ ”) found inside frontmatter. ` +
        `This is almost always a paste artifact and can silently break YAML parsing ` +
        `if it doesn't match a straight quote. Check title/description/tags for a stray character.\n`
    );
  }

  let data;
  try {
    data = parseYaml(frontmatterBlock);
  } catch (err) {
    hasErrors = true;
    console.error(`✗ ${file}\n  YAML parse error: ${err.message}\n`);
    continue;
  }

  const result = postSchema.safeParse(data);
  if (!result.success) {
    hasErrors = true;
    const issues = result.error.issues
      .map((issue) => `    - ${issue.path.join('.') || '(root)'}: ${issue.message}`)
      .join('\n');
    console.error(`✗ ${file}\n  Frontmatter doesn't match the schema:\n${issues}\n`);
  }
}

console.log(`Checked ${files.length} post${files.length === 1 ? '' : 's'}.`);

if (hasErrors) {
  console.error('\nLint failed — fix the errors above before this will build.');
  process.exit(1);
}

if (hasWarnings) {
  console.warn('\nLint passed with warnings (see above).');
} else {
  console.log('All posts look good.');
}
