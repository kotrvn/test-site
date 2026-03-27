# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static landing page for SPARTSPRO (elevator equipment/spare parts supplier), deployed to Vercel. Stack: HTML5 + PostCSS + Vanilla JS. No framework, no bundler beyond PostCSS.

## Commands

```bash
# Build CSS once
npm run build:css

# Watch CSS for changes
npm run watch:css
```

## Architecture

### CSS Pipeline

`css/main.css` imports partials → PostCSS (`postcss-import` → `postcss-preset-env` Stage 2 → `cssnano`) → `css/dist/main.min.css`

CSS partials are split by concern: `_variables.css` (design tokens), `_reset.css`, `_base.css` (`.btn`, `.container`, `.section`), `_header.css`, `_products.css`, `_about.css`. Always edit partials — never the compiled `dist/` output.

### Design Tokens

All colors, spacing, and typography are CSS variables defined in `_variables.css`. Key tokens:
- `--color-accent`: `#ee753e` (primary orange)
- `--color-dark`: `#272a33`
- `--color-green`: `#4fcf35` (in-stock badge)
- `--container-max-width`: 1440px / `--container-width`: 1160px

### JavaScript

`js/burger.js` is a single IIFE that handles the mobile navigation overlay — manages `aria-expanded`, body scroll lock, Escape key, and click-outside to close.

### Breakpoints

Five responsive breakpoints: 390px, 576px, 768px, 1160px (container), and fluid above.

## Deployment

Vercel auto-deploys on push. Project linked via `.vercel/project.json`. No build command configured — Vercel serves static files directly (the compiled `css/dist/main.min.css` must be committed).
