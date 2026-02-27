# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Sereene Healthcare — a marketing/e-commerce website for a healthcare textiles company. Built with Next.js 14 App Router, React 18, and vanilla CSS.

## Commands

- `npm run dev` — Start dev server (port 3000)
- `npm run build` — Production build
- `npm start` — Serve production build
- `npm run lint` — ESLint

## Architecture

**Next.js App Router** with two routes:
- `/` — Single-page landing (Hero → About → Globe → Products → WhyChoose → Testimonials → Contact)
- `/products/[slug]` — Dynamic product detail pages

**Key directories:**
- `src/app/` — Pages and root layout
- `src/components/` — All UI components (Navbar, Hero, About, Globe, Products, WhyChoose, Testimonials, Contact, ProductPage, Footer)
- `src/data/products.js` — Centralized product catalog (~40 SKUs) with images, colors, sizes, specs
- `src/app/globals.css` — All styling (~2400 lines of vanilla CSS with CSS variables)

**All components use `"use client"` directive** — this is a fully client-rendered app.

## Key Technical Details

- **3D/WebGL:** Hero uses Three.js particle system; Globe uses `react-globe.gl` (loaded via `next/dynamic` with SSR disabled)
- **Styling:** Black & white minimalist theme using CSS variables (`--color-*`, `--font-primary: Inter`, `--font-display: Playfair Display`)
- **Images:** `next.config.js` has `images.unoptimized: true` and allows remote patterns from picsum.photos, unsplash, placeholder.com
- **Product routing:** Products are looked up by slug from `src/data/products.js` using `getProductBySlug()`
- **Scroll navigation:** Navbar uses Intersection Observer for active section highlighting and smooth scroll-to-section
- **No TypeScript, no Tailwind, no state management library** — plain JS with React hooks
