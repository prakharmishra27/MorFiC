import { defineConfig } from 'astro/config';

export default defineConfig({
  site: process.env.SITE_URL || 'https://prakharmishra27.github.io',
  base: process.env.BASE_PATH
    ? `${process.env.BASE_PATH.replace(/\/$/, '')}/`
    : '/',
  output: 'static',
  build: { assets: '_astro' }
});
