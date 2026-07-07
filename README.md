# BUILD APERTURE · 光瞳 — JAMstack Bilingual Dashboard

## Overview
A production-ready bilingual e-commerce dashboard built as a JAMstack site. The dashboard ships as a single HTML page with all data prebuilt and embedded, using ECharts for polished visualizations.

## Project Structure
- `src/`
  - `index.template.html` — HTML template used during the build.
  - `styles.css` — responsive dashboard styling.
  - `script.js` — data binding, localization, and ECharts rendering.
- `data/`
  - `dashboard-data.json` — mock bilingual e-commerce data.
- `dist/`
  - generated output after running `npm run build`.
- `build.js` — build script that embeds data into the final HTML.
- `package.json` — package scripts and dependencies.

## Setup
1. Open a terminal in `d:\NewGame\SnakeGame\dashboard`
2. Install dependencies:

```bash
npm install
```

3. Build the dashboard:

```bash
npm run build
```

4. Open the generated file:

```bash
start dist\index.html
```

## Features
- Bilingual UI (`EN` / `中文`)
- Static prebuilt dashboard data
- Responsive layout for desktop and mobile
- Smooth animated charts using ECharts
- Clean and reusable code with a single-file deployment
- No external API calls required at runtime

## Extending Data
To add or update data, modify `data/dashboard-data.json`. The build pipeline embeds the new content into `dist/index.html` automatically.

## Notes
- The build keeps all runtime assets local aside from the ECharts CDN script.
- For a fully offline deployment, replace the ECharts CDN import with a locally hosted ECharts bundle.
