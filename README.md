# SERA Lab

Website for the Systems for Extended Reality and AI (SERA) Lab at Korea University.
sera-lab-ku.github.io

## Stack

- Astro static site generator
- Hand-authored SCSS design system
- GitHub Pages deployment through GitHub Actions

## Local development

```bash
npm install
npm run dev
```

The local site is served at `http://localhost:4321` by default.

```bash
npm run build
```

Build output is generated in `dist/`.

## Content

The reusable site data lives in [src/data/site.ts](src/data/site.ts):

- navigation and research areas
- news items
- people
- publication records

Images and the GitHub Pages custom-domain record live in `public/`.

## Deployment

The workflow in [.github/workflows/deploy.yml](.github/workflows/deploy.yml) deploys pushes to `main` to GitHub Pages. Before the first Astro deployment, set the repository’s Pages source to **GitHub Actions** in GitHub repository settings.
