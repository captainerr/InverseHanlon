# Inverse Hanlon

> Never attribute to incompetence that which is adequately explained by malice.

The blog of [@inverse_hanlon](https://twitter.com/inverse_hanlon). Built with [Astro](https://astro.build), deployed to GitHub Pages.

## Development

```bash
npm install
npm run dev       # dev server on http://localhost:4321
npm run build     # static build to dist/
npm run preview   # preview the built site
```

## Writing a post

Add a Markdown file to `src/content/posts/`:

```markdown
---
title: "Post title"
description: "One-sentence summary shown in the list, RSS, and meta tags."
pubDate: 2026-07-14
tags: ["security"]
draft: false
---

Post body in Markdown.
```

Set `draft: true` to keep a post out of the build.

## Deployment

Hosted on **Cloudflare Workers** (static assets) via Workers Builds: every push to `main` builds and deploys automatically. `wrangler.jsonc` tells Cloudflare to serve the built `dist/` directory.

Cloudflare build settings:

- Build command: `npm run build`
- Deploy command: `npx wrangler deploy`

When the final domain changes (e.g. a custom domain replaces `*.pages.dev`), update `site` in `astro.config.mjs` so canonical URLs and RSS links point to the right place.

`.github/workflows/deploy.yml` (GitHub Pages) is kept as a manual-only fallback and can be deleted.
