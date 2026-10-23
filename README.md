# FCRI research website concept

A responsive, pillar-first concept for the Future Cities Research Institute, a Sunway University and Lancaster University joint research institute.

**Purpose:** Showcase FCRI research to the public through its four research pillars, explain how initiatives relate to those pillars, and demonstrate the journey from urban research to practical impact. This is not intended to be a comprehensive project register.

## Design

The homepage retains the editorial dark-teal/city hero design and features a **selectable four-pillar city lens**:

1. **Digital Cities:** AI, digital twins, connected sensing and digital systems.
2. **Sustainable Cities:** net-zero infrastructure, circular materials and clean energy.
3. **Healthy Cities:** environmental health, heat, air quality and well-being.
4. **Resilient Cities:** community capacity, adaptation, equitable urban services and learning.

Selecting a pillar updates the urban scene, description, representative research initiative and cross-pillar connections. Visitors can then explore related work. The featured examples are editorial summaries and remain subject to FCRI review. One 2024 seed-corn Resilient Cities example is **explicitly labeled as historical**, not current.

## Pages and features

- `index.html`: city visual, interactive research-pillar explorer, cross-pillar research examples and institute overview.
- `research.html`: selected research initiatives filtered by pillar.
- `project.html?id=digital-twin`: research detail template showing context, activities, funding and publications.
- `site.js`: pillar switching, keyboard interaction, content, research filtering and menu logic.
- `styles.css`: responsive styling and pillar graphics, with reduced-motion support.
- `assets/city-illustration.svg`: conceptual fallback graphic; **not a geographical map**.

Pillar selector supports mouse, touch, Tab navigation, arrow keys, Home and End.

## Run locally

```bash
python -m http.server 8000
```

Open http://localhost:8000/.

## Deploy with Vercel

Import this **FCRI-Mock** GitHub repository into Vercel and use Framework Preset `Other`, Root Directory `./`, with no build command. For a configured Vercel Git integration, new commits on `main` will trigger production builds.

The research website is **separate** from the Sunway City Digital Twin's application repository. Do not modify the live Digital Twin to deploy this mock site.

## Institute source references

- Official institute overview: https://sunwayuniversity.edu.my/future-cities-research-institute
- Four pillars (2026): https://sunwayuniversity.edu.my/news/2026/fcri-launches-its-inaugural-conference-shape-cities-of-tomorrow
- Digital Cities: https://sunwayuniversity.edu.my/future-cities-research-institute/digital-cities
- Sustainable Cities: https://sunwayuniversity.edu.my/future-cities-research-institute/sustainable-cities
- Healthy Cities: https://sunwayuniversity.edu.my/future-cities-research-institute/healthy-cities
- Resilient Cities: https://sunwayuniversity.edu.my/future-cities-research-institute/resilient-cities
- Net Zero Building research context: https://sunwayuniversity.edu.my/future-cities-research-institute/2025-tne-impact

## Publication checklist

- Replace the preview Sunway image reference and illustration with approved **genuine Sunway City aerial photography**. Verify permissions.
- Add accurate Lancaster campus photography that includes the solar farm; do not invent campus geography.
- Confirm which initiatives are officially FCRI projects, including their status, leads, partners, funding and associated publications. Draft entries are not factual publication statements.
- Obtain approval for the institutional logo, copy and outgoing research links.
- Verify the final live domain and institutional accessibility/brand requirements before public release.

The official FCRI page remains the source of institutional facts until Institute review.
