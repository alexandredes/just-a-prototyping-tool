# Just a prototyping tool

A simple index of lo-fi, black-and-white prototypes built with React and React Router.

**Live:** https://alexandredes.github.io/just-a-prototyping-tool/

## Run locally

```sh
npm install
npm run dev
```

## Add a prototype

Ask Claude Code to make one, e.g. *"make a lo-fi prototype of a reschedule-appointment flow"* — it uses the `lofi-prototype` skill in `.claude/skills/`.

By hand:

1. Create `src/prototypes/<slug>/<Name>.tsx` (copy `example-signup`).
2. Register it at the top of the list in `src/prototypes/index.ts`. That list is what the root index shows.

Each prototype is served at `/#/p/<slug>`.

## Deploy

Every push/merge to `main` builds and deploys to GitHub Pages (`.github/workflows/deploy.yml`).
One-time setup: repo **Settings → Pages → Source: GitHub Actions**.
