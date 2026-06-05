# Compass Direct — site rebuild

A clean rebuild of compass-direct.com on a modern stack, after the original
WordPress site was compromised and taken offline. **No code, themes, plugins, or
database rows from the old box are carried over** — only sanitized images and
sanitized text content cross into this repo.

## Stack

- **Next.js (App Router) + React** — deployed on **Vercel**
- **TypeScript**
- AI content rebuild assisted by the **Claude API** (Anthropic)

## Getting started

```bash
npm install
npm run dev          # http://localhost:3000
```

Build for production:

```bash
npm run build && npm start
```

## Recovery → rebuild workflow

The raw recovery material (the ~518 MB media zip and the WordPress SQL dump) lives
in a **quarantine folder outside this repo** and is treated as untrusted. It is
also blocked by `.gitignore` as a hard backstop (`*.sql`, `*.zip`, `_forensics/`,
`/assets/`). See [SECURITY.md](./SECURITY.md) for the full handling rationale.

### 1. Sanitize images

Salvaged images are re-encoded into clean files (metadata stripped, any hidden
payload discarded) before they are ever published:

```bash
# raw extracted images  ->  clean, committable copies
node scripts/sanitize-images.mjs ./assets/media ./public/media
```

- Input: raster images only (`jpg/jpeg/png/gif/webp/ico`). SVG is excluded.
- Output: fresh re-encoded files under `public/media/`, preserving the year folders.
- `/assets/` (raw input) is gitignored; `public/media/` (clean output) is safe to commit.

### 2. Sanitize content

Text content recovered from the SQL dump is **never** imported as raw HTML. It is
extracted as text, stripped of injected scripts/iframes/spam, and modernized with
Claude assistance before being placed into the site. (Tooling tracked separately.)

## Project layout

```
app/                     Next.js App Router (layout, pages, styles)
scripts/
  sanitize-images.mjs    re-encode salvaged images into clean files
public/media/            clean, sanitized images (generated; safe to publish)
assets/media/            raw salvaged images (gitignored; untrusted input)
```
