# cynthia shen

Personal website built with React and Vite.

## Development

```bash
# Install dependencies
npm install

# Copy assets to public (needed for images)
mkdir -p public && cp -r assets public/ && cp -r games public/

# Start dev server
npm run dev
```

## Build

```bash
npm run build
```

The build copies `assets/` and `games/` to `public/` automatically, then outputs to `dist/`. A `404.html` is generated so direct links to routes like `/about` work on GitHub Pages.

## GitHub Pages Deployment

Pushes to `master` build and deploy via GitHub Actions (`.github/workflows/deploy.yml`).

In the repo **Settings → Pages**, set Source to **GitHub Actions**.
