# Mahalingam R — Portfolio

Personal portfolio site. Next.js 14 App Router, TypeScript, Tailwind CSS, shadcn/ui, Framer Motion.

## Stack Rationale

| Choice | Why |
|---|---|
| Next.js 14 App Router | RSC by default — static sections ship near-zero client JS; excellent LCP |
| Tailwind CSS | Utility-first, co-located styles, automatic dead-code purging |
| shadcn/ui | Copy-owned components — no runtime overhead, full styling control |
| Framer Motion | Used only for scroll-triggered fade-ins; tree-shaken to minimal bundle |
| Web3Forms | Free contact API — no backend or serverless function needed |
| next-themes | Zero-flash SSR theme switching |

## Quick Start

Requires Node 18+ and pnpm.

```bash
pnpm install
cp .env.example .env.local
# Fill in NEXT_PUBLIC_WEB3FORMS_KEY (see below)
pnpm dev
```

Open http://localhost:3000

## Environment Variables

| Variable | Required | Description |
|---|---|---|
| NEXT_PUBLIC_WEB3FORMS_KEY | Yes | Web3Forms access key for the contact form |

### Getting a Web3Forms Key
1. Visit https://web3forms.com
2. Enter mahalingam2188@gmail.com — a key arrives by email instantly
3. Paste the key into .env.local

## Editing Content

All portfolio data lives in data/. Edit these TypeScript files without touching any JSX:

- data/personal.ts — name, tagline, about, social links, email, location
- data/experience.ts — add, edit, or reorder work history entries
- data/projects.ts — project cards (name, description, tech stack, URLs)
- data/skills.ts — skill categories and individual skill badges

## Resume

Place your resume PDF at public/Mahalingam_Resume.pdf. The "Download Resume" button in the hero section is already wired to this path.

## Deployment

### Vercel (recommended)
1. Push the repo to GitHub
2. Import it in the Vercel dashboard (auto-detects Next.js)
3. Add the environment variable NEXT_PUBLIC_WEB3FORMS_KEY in Project → Settings → Environment Variables
4. Deploy

### Custom Domain
Set your domain in Vercel → Settings → Domains. Then update:
- siteUrl in data/personal.ts
- The url in app/sitemap.ts
- The sitemap URL in app/robots.ts

## Analytics

Vercel Analytics is pre-wired but commented out in app/layout.tsx. To enable after deploying to Vercel:
1. Uncomment the import: import { Analytics } from '@vercel/analytics/react'
2. Uncomment: <Analytics />

## Project Structure

```
app/layout.tsx          — root layout, metadata, theme provider
app/page.tsx            — composes all sections
app/globals.css         — CSS custom properties (light + dark themes)
app/sitemap.ts          — dynamic sitemap
app/robots.ts           — robots rules
components/Navigation.tsx      — sticky nav, mobile menu, theme toggle
components/ThemeProvider.tsx   — next-themes wrapper
components/ThemeToggle.tsx     — sun/moon toggle button
components/sections/           — one file per page section (Hero, Experience, Projects, Skills, Contact, Footer)
components/ui/                 — shadcn/ui primitives (button, badge, card, input, label, textarea, sonner)
data/                          — all editable portfolio content
lib/utils.ts                   — cn() class merge utility
public/Mahalingam_Resume.pdf   — your resume (replace with real file)
```
