# Junhan Fang — Personal Academic Website

Personal homepage built with [Astro](https://astro.build) and deployed on GitHub Pages.

## Local development

**Requirements:** Node.js 18+

```bash
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) (Astro uses port 4321 by default).

## Build

```bash
npm run build
```

Output is in `dist/`. Preview the production build:

```bash
npm run preview
```

## Deploy (GitHub Pages)

1. Push to the `main` branch. The [Deploy to GitHub Pages](.github/workflows/deploy.yml) workflow builds and deploys automatically.
2. In the repo: **Settings → Pages**
   - **Source:** GitHub Actions
   - (Do not use “Deploy from a branch” for this project.)

Site URL (project site): **https://fangjunhan-projects.github.io/mysite/**

To use a custom domain, add a `CNAME` file in `public/` with your domain and configure DNS as per [GitHub Pages custom domain](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).

## Editing content

- Main page content: `src/pages/index.astro`
- Layout and global styles: `src/layouts/Layout.astro`
- Static assets (images, etc.): `public/`

## Tech stack

- [Astro 4](https://astro.build) — static site generator
- Node 20 — runtime for build
- GitHub Actions — build and deploy
