---
name: lofi-prototype
description: Use when the user asks to create, sketch, mock up or wireframe a new prototype in this repo. Builds a lo-fi, black-and-white React prototype under src/prototypes/<slug>/ and registers it in the root index.
---

# Lo-fi prototype

Create a low-fidelity, black-and-white React prototype and add it to the root index.

## Rules

- **Black, white and greys only.** No colour, no shadows, no gradients (other than the placeholder cross), no real images, no icon libraries, no web fonts.
- **Lo-fi on purpose.** Boxes, labels and placeholders. Use `.lofi-placeholder` for images/charts/maps/avatars, and `.lofi-scribble` for filler text you don't care about. Real copy only where it matters to the idea being tested.
- **Use the shared primitives** in `src/lofi.css` (`lofi-page`, `lofi-narrow`, `lofi-stack`, `lofi-row`, `lofi-grid`, `lofi-box`, `lofi-divider`, `lofi-placeholder`, `lofi-btn`, `lofi-btn-primary`, `lofi-field`, `lofi-input`, `lofi-muted`, `lofi-small`, `lofi-scribble`). If you need something they don't cover, add a black-and-white primitive to `lofi.css` rather than inline colour.
- **Mobile-friendly.** Must work at 375px wide: no horizontal scroll, tap targets ≥ 44px, rows wrap.
- **Clickable, not functional.** Fake data, no backend, no fetches. Wire up navigation between screens so the flow can be clicked through.
- **No new dependencies** unless the user asks.

## Steps

1. **Pick a slug** — short kebab-case from the idea (e.g. `booking-reschedule`). Check `src/prototypes/` so it's unique.
2. **Create** `src/prototypes/<slug>/<PascalName>.tsx` with a default-exported component:
   - Wrap in `<main className="lofi-page">` (add `lofi-narrow` for form/mobile-style flows).
   - Render `<BackToIndex />` (from `../../BackToIndex`) first.
   - Multi-screen flows use nested React Router routes with **relative** paths (`<Routes><Route index …/><Route path="step-2" …/></Routes>`, `navigate("step-2")`, `navigate("..")`). The prototype is mounted at `/p/<slug>/*`, so never hard-code absolute paths except `/` for the index.
   - Extra files (screens, fake data) go in the same folder.
   Use `src/prototypes/example-signup/ExampleSignup.tsx` as the reference.
3. **Register it in the root index** — this is required, a prototype that isn't registered isn't reachable. In `src/prototypes/index.ts`, import the component and add an entry at the **top** of the `prototypes` array (newest first):
   ```ts
   {
     slug: "<slug>",
     title: "<Human title>",
     description: "<One sentence: what idea this tests.>",
     added: "<YYYY-MM-DD today>",
     Component: <PascalName>,
   },
   ```
4. **Verify** — run `npm run build` and fix any errors. If you can, run `npm run dev` and open `/#/p/<slug>` to click through it, including at mobile width.
5. **Report** the slug, the local URL (`http://localhost:5173/#/p/<slug>`) and the Pages URL once merged (`https://alexandredes.github.io/just-a-prototyping-tool/#/p/<slug>`).
