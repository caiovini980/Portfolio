# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

Personal portfolio website for Caio Aguiar (software engineer for games), built with React + Vite, styled with Tailwind CSS, animated with Framer Motion, and deployed to GitHub Pages.

## Commands

```bash
npm run dev              # start Vite dev server with HMR
npm run build             # production build to dist/
npm run preview           # preview the production build locally
npm run lint               # eslint . --ext js,jsx --max-warnings 0 (zero warnings allowed)
npm run deploy             # publish dist/ to GitHub Pages via gh-pages
npm run build-and-deploy   # build then deploy in one step
```

There is no test suite/framework configured in this repo.

## Architecture

**Routing**: `src/App.jsx` defines all routes with `react-router-dom`. A single shared `Header`/`Footer` (from `src/pages/home/`) wraps every route inside `AnimatePresence`, and route content changes based on `location.pathname`:
- `/`, `/about`, `/contact` → all render the `Home` page (`src/pages/home`) — About/Contact do not yet have distinct content.
- `/projects/:slug` → `Project` page (`src/pages/project`), looks up the project in `PortfolioData` by slug.
- `/side-projects/:slug` → `SideProject` page (`src/pages/side-project`), looks up the item in `SmallPortfolioData` by slug.

**Page module pattern**: Each entry under `src/pages/<name>/` has an `index.jsx` page wrapper (sets `document.title`, wraps `Content` in a Framer Motion stagger container — `container`/`item` variants duplicated per page — and applies the light/dark background classes) plus a `Content.jsx` for the actual section content. Only `pages/home/` also has its own `Header.jsx`/`Footer.jsx`; those are the single shared nav/footer rendered by `App.jsx` around every route. `pages/project/` and `pages/side-project/` intentionally have no `Header.jsx`/`Footer.jsx` of their own — they rely on `App.jsx`'s shared ones.

Known gap: `project/index.jsx` and `side-project/index.jsx` look up `project`/`sideProject` via `useParams` + data-array `.find()`, but their `Content.jsx` is a static stub (e.g. `project/Content.jsx` just renders `"Project!"`) — the looked-up item is not actually passed to or used by `Content`. Detail pages are effectively unfinished.

**Data-driven content**: Site content lives in plain JS arrays under `src/data/`, not fetched — edit these files to add/change portfolio content:
- `PortfolioData.js` — main projects (image import, `tagColor`/`tagText` via `Tag`'s `Colors` enum, `period`, `shortDescription`, external `link`, `slug` used for routing).
- `SmallPortfolioData.js` — side projects, same shape plus `stack`.

Images referenced by data files live in `src/assets/` and are imported directly (Vite asset pipeline), not referenced by path string. `PortfolioItem` expects images at 788x788 (see comment in that file).

**Reusable components** (`src/components/`): `PortfolioItem` and `SmallPortfolioItem` render a data entry as a card linking to its detail route; `Tag` renders a colored pill and exports a `Colors` enum (`GREEN`, `BLUE`, `PURPLE`, `ORANGE`, `BLUE_GREEN`) that data files reference for `tagColor`.

**Theming**: Dark mode is class-based (`darkMode: "class"` in `tailwind.config.js`). `pages/home/Header.jsx` owns the only theme toggle: it sets `light`/`dark` on `document.documentElement.classList` and swaps a sun/moon icon. Theme state is local to that component (not persisted or synced elsewhere) and always initializes to light on mount. Custom Tailwind theme tokens: `light.100/200`, `dark.100/200/300` colors, `Roboto`/`Rubik` font families, and a `fadeIn` keyframe/animation.

**Build config**: `vite.config.js` sets `base: ''` (relative asset paths, required for GitHub Pages under a subpath/custom domain). `package.json` sets `homepage: caiovini980.github.io` for `gh-pages`.

**Rules**: 
- Never make any operation regarding Github or any version control system.
- Always ask for permission before any change.
- Most of the changes will happen in the `src/` folder and the files on the root.
- After a change, only ask to use `npm run dev`.
