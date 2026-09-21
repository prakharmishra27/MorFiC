# MorFiC project page

Astro-based research project page for **MorFiC: Fixing Value Miscalibration for Zero-Shot Quadruped Transfer** (CoRL 2026).

## What this first build includes

- Full-screen hardware hero
- Paper / arXiv / appendix links
- Visual one-glance summary
- Critic-miscalibration motivation
- MorFiC architecture section
- Seven-morphology simulation demo
- Go1 / Go2 zero-shot hardware videos
- Perturbation recovery
- Critic calibration + compute-efficiency figures
- Full supplementary video
- Limitations / failure video
- BibTeX copy button
- Responsive layout + GitHub Pages workflow

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:4321.

## Deploy on GitHub Pages

1. Create a repository (for example `MorFiC`).
2. Push these files to its `main` branch.
3. In **Settings → Pages**, choose **GitHub Actions** as the source.
4. The included workflow builds with the repository name as the GitHub Pages base path.

## Main editing points

- `src/pages/index.astro` — page structure
- `src/styles/global.css` — visual system
- `src/data/site.ts` — title, authors, links, BibTeX
- `public/media/` — figures and videos

## Next polish pass

The current version deliberately uses the supplied assets directly. The next pass can add a purpose-built 12–18 second hero montage, compressed web video variants, author profile links, a Code button when the repository is public, and any final result numbers/wording you want to emphasize.
