# GreenNotes

A lightweight Vue 3 + Vite starter project for GreenNotes.

## Getting started

1. Install dependencies:

```bash
npm install
```

2. Start development server:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
```

## GitHub Pages deployment

This repository is configured with a GitHub Actions workflow at `.github/workflows/deploy.yml`.

- When you push to the `main` branch, the workflow will build the app.
- The generated `dist/` output is automatically published to the `gh-pages` branch.

Make sure GitHub Pages is configured to publish from the `gh-pages` branch in the repository settings.
