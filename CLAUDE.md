# Just a prototyping tool

Vite + React + React Router (HashRouter) app holding lo-fi, black-and-white prototypes.

- To make a new prototype, use the `lofi-prototype` skill (`.claude/skills/lofi-prototype/SKILL.md`).
- **Every prototype must be registered in `src/prototypes/index.ts`** — that list builds the root index page and the routes. Newest first.
- Shared lo-fi styles live in `src/lofi.css`. Black, white and greys only.
- `npm run dev` to run locally, `npm run build` to check types + build.
- Merging to `main` deploys to GitHub Pages via `.github/workflows/deploy.yml`.
