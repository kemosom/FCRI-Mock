# FCRI website concept (GitHub + Vercel ready)

A responsive, static website concept for the Future Cities Research Institute (FCRI), a Sunway University and Lancaster University collaboration. Inspired by the editorial layout supplied for design reference, not a copy of its assets.

## Pages

- `index.html` : homepage with city hero, research directory and institute overview.
- `research.html` : browse and filter research programmes.
- `project.html?id=digital-twin` : example project detail page; works for six initiative IDs.
- `styles.css` : responsive styles.
- `site.js` : project content, filtering and menu logic.
- `assets/city-illustration.svg` : original *conceptual illustration* fallback.

## Run locally

No npm packages are required. Open `index.html` or run a local HTTP server:

```bash
python -m http.server 8000
```

Open `http://localhost:8000/`.

## GitHub and Vercel deployment

1. Create a **new** GitHub repository named e.g. `fcri-website-concept`. Do **not** use the existing Digital Twin application repository.
2. Upload all files from this folder to the root of that repository. Commit to `main`.
3. In Vercel, select **Add New > Project**, import `fcri-website-concept` from GitHub.
4. Set **Framework Preset: Other** and **Root Directory: `./`**. Do not specify a build command or output directory.
5. Deploy. Subsequent commits pushed to `main` automatically update production, with preview deployments for new branches and pull requests.

## Required review before public release

- **Image approval:** The hero references an official Sunway Group image *as a preview reference*, and falls back to a locally hosted conceptual SVG when the remote image is unavailable. Confirm reuse rights or replace it with a high-resolution Sunway City photograph provided by Sunway. Set `.hero-image` background in `styles.css` to `url('assets/approved-sunway-city.jpg')`. The fallback illustration is not a satellite or geographical map.
- **Research content:** The descriptions are prototype editorial summaries. The funding agencies and publications are explicitly unverified. Obtain project and personnel sign-off before publishing.
- **Branding:** Replace this typographic FCRI mark with approved FCRI and university brand assets.
- **Two-campus map:** The requested Lancaster University campus aerial image, including the solar farm, should be added as a separate approved media section. Do not use generative geographical maps to represent its physical layout.
- **Site ownership:** The existing official FCRI page at Sunway University remains authoritative until the Institute approves a replacement. This site is a standalone prototype.

## Alternative: Next.js

For a larger team with news management, publication feeds, accessibility auditing, multi-language support and CMS integration, move these components into Next.js and a content backend after the first design review. The current static site is simpler for design evaluation and deployment.
