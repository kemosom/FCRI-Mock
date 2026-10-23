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

## FCRI logo and Sunway City Digital Twin feature (October 2026 update)

- Header and footer now use the FCRI PNG artwork and university crests transferred from the existing Digital Twin repository. Partner names are rendered in text for clarity. The exact supplied composite image can replace this file if the Institute provides its approved web-ready version.
- The official FCRI favicon is included.
- The Digital Twin research page now explains the research objective, sensing infrastructure, data pipeline, available visualization layers and cross-pillar relevance.
- The research card and project page include an **illustrative SVG city visualization**, clearly described as concept art rather than a screenshot or actual sensor map.
- A prominent external website link opens [the live Sunway City Digital Twin](https://fcri.vercel.app) in a new tab.
- Ambient sensor values, data-source availability and traffic observations may vary; no unverified pollutant concentration, award, funding or publication claims are included.
- The 3D Digital Twin application's source and functionalities were **not modified**. Only this separate website mockup was changed.

### Publishing note

Please verify the `https://fcri.vercel.app` deployment, approved logo version, final sensor terminology, funding agency and publication links with the project team before making the research page official.

## Research project profiles and authentic site imagery

- All seven project profiles now use concise research-specific project summaries, methodologies, and outputs. Unverified claims are excluded.
- A **Project Lead** field appears before the **Funding Agency** field on every project page. A project without verified funding omits the funding row; unverified leads are explicitly marked for FCRI confirmation.
- The Sunway City Digital Twin page distinguishes the live IoT/geospatial web demonstrator from the related 6G geometric/ray-tracing research preprint. The latter is linked as related research rather than evidence of validation for the live system.
- Genuine site images are captured from the actual public deployment by the GitHub Actions workflow `.github/workflows/capture-digital-twin.yml` using Playwright. Two images are stored locally: `assets/digital-twin-desktop.jpg` and `assets/digital-twin-mobile.jpg`. A fresh checkout initially requires a successful workflow run to generate them.
- The project page also embeds `https://fcri.vercel.app` for live viewing (when cross-origin framing is permitted). An external link remains available when framing is blocked.
- An additional linked figure is explicitly attributed to the separate 2026 geometric 6G Digital Twin study, not represented as a current website screenshot.

**Publication review:** Confirm the intended project lead and work-package leadership for the non-Digital-Twin projects, external-site permissions, and publication metadata before the mock becomes the official FCRI website.

## Header artwork update (23 October 2026)

- Replaced the homepage hero with the user's supplied genuine Sunway City photograph, stored verbatim as `assets/sunway-city-hero.jpg`.
- Replaced the white-box header logo with a transparent high-contrast FCRI emblem extracted from the provided institute logo, paired with responsive typographic wordmark.
- Footer uses the same integrated FCRI identity and partner names without a white-background logo plaque.
- Other website functions, digital twin screenshots, pillar selection, and research pages are preserved.
- The provided hero photograph is 516 × 387 pixels. An approved larger-resolution original would improve clarity on large desktop displays.
