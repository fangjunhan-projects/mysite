import { defineConfig } from 'astro/config';

// GitHub Pages: project site is at https://<user>.github.io/<repo>/
// Change base to '/' if using a user/org site repo (e.g. username.github.io)
export default defineConfig({
  site: 'https://fangjunhan-projects.github.io',
  base: '/mysite',
  build: {
    assets: '_astro',
  },
});
