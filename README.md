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

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site and publishes it to GitHub Pages at `https://captainerr.github.io/InverseHanlon`.

One-time setup: in the repository settings, under **Pages**, set the source to **GitHub Actions**.

If you later attach a custom domain, update `site` (and remove `base`) in `astro.config.mjs`.
