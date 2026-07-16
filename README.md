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

The build copies `assets/` and `games/` to `public/` automatically, then outputs to `dist/`.

## GitHub Pages Deployment

For GitHub Pages (SPA with client-side routing):

1. Run `npm run build`
2. Deploy the contents of the `dist/` folder to your repository root
3. A `404.html` is automatically generated (copy of `index.html`) so direct links to routes like `/about` work

You can use GitHub Actions to deploy automatically, or push the `dist/` contents to a `gh-pages` branch.
