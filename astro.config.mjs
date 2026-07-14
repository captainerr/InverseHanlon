// @ts-check
import { defineConfig } from 'astro/config';

// Deployed on Cloudflare Pages, served from the domain root (no base path).
// `site` is used for canonical URLs and RSS links — update it when the
// final domain is known (e.g. a custom domain instead of *.pages.dev).
export default defineConfig({
  site: 'https://inversehanlon.pages.dev',
});
