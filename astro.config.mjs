// @ts-check
import { defineConfig } from 'astro/config';

// Deployed on Cloudflare Workers, served from the domain root (no base path).
// `site` is used for canonical URLs and RSS links.
export default defineConfig({
  site: 'https://blog.inversehanlon.com',
});
