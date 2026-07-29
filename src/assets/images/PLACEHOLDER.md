# PLACEHOLDER — project photos incoming

Drop O.J. Carpentry project photos into `public/gallery/` and wire them up in
`src/pages/index.astro`:

- **Gallery** — the `galleryItems` array. Set `src` on an item (e.g.
  `src: '/gallery/kitchen-01.jpg'`) and it swaps from a dashed placeholder tile
  to a real, lightbox-enabled image. The first item is the large feature cell.
- **Hero** — the `.placeholder-tile` inside `#hero-visual` (4:5 portrait crop).
- **About Owen** — the `.placeholder-tile` inside `#about` (1:1 square crop,
  photo of Owen).

Reviews are handled the same way: the `#reviews-grid` currently renders three
empty review slots. Replace them once verified client reviews arrive — nothing
in there is fabricated.
