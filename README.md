# O.J. Carpentry

Marketing site for **O.J. Carpentry (Owen James Carpentry)** — a qualified carpenter
based in Narberth, Pembrokeshire.

Built with [Astro](https://astro.build), GSAP + Lenis for motion, and Font Awesome 6
for iconography.

## Brand

| Token     | Value     | Use                                      |
| :-------- | :-------- | :--------------------------------------- |
| teal      | `#00a9a2` | Primary accent — CTAs, icons, highlights |
| charcoal  | `#232323` | Body text, nav wordmark, footer          |
| offwhite  | `#f7f6f4` | Primary page background                  |
| white     | `#ffffff` | Cards, nav, alternating sections         |

Type: **Outfit** for headings, **Inter** for body.

## Business details

- **Address** — 25 Redstone Court, Narberth, Pembrokeshire, SA67 7EU
- **Phone** — 07825 326494
- **Email** — owen@ojcarpentry.co.uk
- **Facebook** — https://www.facebook.com/O-J-Carpentry-1103888859639191/

## Pages

- `/` — homepage, with a curated six-photo highlight reel linking through to the gallery
- `/gallery` — full gallery, filtered by category with a lightbox

## Photos

Project photos live in `src/assets/images/` and are catalogued in `src/data/gallery.ts`,
which is the single source of truth for both pages. To add a photo, drop the file in and
add an entry (image, alt, caption) to the relevant category — Astro handles the optimised
`webp` output and the lightbox picks it up automatically.

## Outstanding content

Client reviews are still placeholders — the `#reviews` section on the homepage renders
three empty slots until real, verified reviews arrive. Nothing there is fabricated.

The contact form posts to Web3Forms — replace `YOUR_WEB3FORMS_KEY` in
`src/pages/index.astro` with the live access key before launch.

## Commands

| Command           | Action                                      |
| :---------------- | :------------------------------------------ |
| `npm install`     | Install dependencies                        |
| `npm run dev`     | Start local dev server at `localhost:4321`  |
| `npm run build`   | Build production site to `./dist/`          |
| `npm run preview` | Preview the production build locally        |
