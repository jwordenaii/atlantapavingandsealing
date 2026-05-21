# AGENTS.md

## Cursor Cloud specific instructions

This is a static React SPA (Vite + React 18 + React Router v6) for a paving business website. There is no backend, database, or test suite.

### Running the app

- **Dev server:** `npm run dev` (Vite on port 5173)
- **Build:** `npm run build` (output in `dist/`)
- **Preview production build:** `npm run preview`

### Key caveats

- The project requires **Node.js 20** (specified in `netlify.toml`). Run `source ~/.nvm/nvm.sh && nvm use 20` before any npm commands.
- The quote form (`QuoteForm.jsx`) uses Netlify Forms (`data-netlify="true"`) — form submissions only work when deployed to Netlify, not in local dev.
- There are no automated tests, linters, or formatters configured in this project.
- City landing pages are defined via React Router in `App.jsx`. Static `index.html` files in city subdirectories at the repo root are pre-rendered SEO pages separate from the SPA.
