# Version Tasklist – v1.0.0 Launch-Ready Marketing Site
This document outlines all the tasks to work on to deliver this particular version, grouped by phases.

| Status |      |
|--------|------|
| 🔴 | Not Started |
| 🟡 | In Progress |
| 🟢 | Completed |

---

## Phase 1 — Project Setup & Brand Foundation

| ID | Task | Description | Dependencies | Status | Assigned To |
|----|------|-------------|--------------|--------|-------------|
| T-01 | Initialize Next.js project | Scaffold Next.js 14+ with App Router, TypeScript, Tailwind CSS, ESLint, Prettier | None | 🟢 Completed | AGENT |
| T-02 | Configure Tailwind brand tokens | Brand colors defined in `globals.css` via Tailwind v4 `@theme`: `brand-cream`, `brand-charcoal`, `brand-sage`, `brand-rose` | T-01 | 🟢 Completed | AGENT |
| T-03 | Configure typography | Outfit + Inter loaded via `next/font/google` with CSS variables; applied to root layout and `@theme` | T-01 | 🟢 Completed | AGENT |
| T-04 | Set up global CSS | `globals.css` updated with brand tokens, smooth-scroll, font stacks, base body styles | T-01, T-02 | 🟢 Completed | AGENT |
| T-05 | Create `.env.example` | `.env.example` created with `RESEND_API_KEY` and `CONTACT_EMAIL` documented | T-01 | 🟢 Completed | AGENT |
| T-06 | Initialize git repo | Init git, create `.gitignore` (ensure `.env.local` is excluded), make initial commit | T-01 | 🔴 Not Started | USER |

---

## Phase 2 — Brand Assets

| ID | Task | Description | Dependencies | Status | Assigned To |
|----|------|-------------|--------------|--------|-------------|
| T-07 | Prepare photos | All 10 photos copied to `/public/images/` with semantic filenames | T-01 | 🟢 Completed | AGENT |
| T-08 | Create Logo SVG | Paw-heart icon (rose heart + 3 white toe pads) + wordmark + tagline; `Logo.tsx` component with horizontal/stacked variants and sm/md/lg sizes; `public/logo.svg` standalone export | T-02, T-03 | 🟢 Completed | AGENT |
| T-09 | Export logo PNG + favicon | `public/favicon.svg` created (paw-heart on cream circle); referenced in layout metadata | T-08 | 🟢 Completed | AGENT |
| T-10 | Prepare OG image | `public/og-image.jpg` copied from `ashley-with-corgi.jpg` | T-07 | 🟢 Completed | AGENT |

---

## Phase 3 — Root Layout & Metadata

| ID | Task | Description | Dependencies | Status | Assigned To |
|----|------|-------------|--------------|--------|-------------|
| T-11 | Create content file | `/lib/content.ts` created with all site copy: nav, hero, about (3 paragraphs), 5 services with images, trust bar, inquiry form fields/labels/messages, footer | T-01 | 🟢 Completed | AGENT |
| T-12 | Build root layout | `layout.tsx` finalized: Outfit + Inter fonts, brand background/text on `<body>`, global CSS imported | T-03, T-04 | 🟢 Completed | AGENT |
| T-13 | Add SEO metadata | Full metadata in `layout.tsx`: title template, description, keywords, OG tags, Twitter card, robots; `app/opengraph-image.jpg` registered via Next.js file convention | T-09, T-10, T-12 | 🟢 Completed | AGENT |

---

## Phase 4 — Core Components

| ID | Task | Description | Dependencies | Status | Assigned To |
|----|------|-------------|--------------|--------|-------------|
| T-14 | Build Header | Fixed nav bar: Logo component, smooth-scroll links (About, Services, Contact), rose-pink CTA button ("Get in Touch"); mobile hamburger menu with animated open/close | T-08, T-11, T-12 | 🔴 Not Started | AGENT |
| T-15 | Build Hero section | Full-viewport section: `ashley-with-corgi.jpg` as background or split layout, headline, tagline, 1–2 sentence intro, CTA button scrolling to inquiry form; `priority` image loading | T-07, T-11, T-14 | 🔴 Not Started | AGENT |
| T-16 | Build About section | Ashley's story: real photo (`ashley-headshot.jpg` + `ashley-family-with-dogs.jpg`), personal narrative copy from content.ts covering family, 30 years in Florida, Scouts, pet care experience | T-07, T-11 | 🔴 Not Started | AGENT |
| T-17 | Build Services section | Card/grid layout — 5 service cards with real photos and descriptions: Dog Walking, Pet Sitting, Drop-In Visits, Medication Administration, Personalized/Special Needs Care | T-07, T-11 | 🔴 Not Started | AGENT |
| T-18 | Build Trust Bar | Short section: care philosophy statement + Rover trust signal; use `boy-with-dog-bw.jpg` as accent image | T-07, T-11 | 🔴 Not Started | AGENT |
| T-19 | Build Footer | Business name, tagline, service area (Lake Nona & Greater Orlando), copyright line; social media link placeholders | T-11 | 🔴 Not Started | AGENT |

---

## Phase 5 — Inquiry Form

| ID | Task | Description | Dependencies | Status | Assigned To |
|----|------|-------------|--------------|--------|-------------|
| T-20 | Build Inquiry Form UI | Form component with fields: full name, email, phone, pet name, pet type, requested service (dropdown), message; client-side validation; loading, success, and error states; rose-pink submit button | T-11, T-12 | 🔴 Not Started | AGENT |
| T-21 | Create email helper | Create `/lib/sendEmail.ts` — Resend SDK wrapper that formats and sends inquiry email to `CONTACT_EMAIL` | T-01 | 🔴 Not Started | AGENT |
| T-22 | Build API route | Create `app/api/contact/route.ts` — validates POST body, calls `sendEmail()`, returns `{ success: true }` or structured error; never exposes API key to client | T-21 | 🔴 Not Started | AGENT |
| T-23 | Wire form to API | Connect `InquiryForm` submission to `/api/contact`; handle response states; test end-to-end with `.env.local` | T-20, T-22 | 🔴 Not Started | AGENT |

---

## Phase 6 — Assembly & QA

| ID | Task | Description | Dependencies | Status | Assigned To |
|----|------|-------------|--------------|--------|-------------|
| T-24 | Assemble page | Import all section components into `app/page.tsx` in order: Header, Hero, About, Services, TrustBar, InquiryForm, Footer; add section `id` attributes for smooth-scroll nav | T-14–T-20 | 🔴 Not Started | AGENT |
| T-25 | Mobile QA | Test all sections at 375px, 390px, 430px (common iPhone sizes); fix any layout, overflow, or typography issues | T-24 | 🔴 Not Started | AGENT |
| T-26 | Tablet & desktop QA | Test at 768px (iPad), 1024px, 1280px, 1440px; fix any breakpoint issues | T-24 | 🔴 Not Started | AGENT |
| T-27 | Accessibility check | Verify semantic HTML, all images have descriptive alt text, form labels are associated, keyboard navigation works, color contrast passes WCAG AA | T-24 | 🔴 Not Started | AGENT |
| T-28 | Performance check | Run `npm run build`; review Next.js image optimization, font loading, and Lighthouse score; address any major issues | T-24 | 🔴 Not Started | AGENT |

---

## Phase 7 — Deployment

| ID | Task | Description | Dependencies | Status | Assigned To |
|----|------|-------------|--------------|--------|-------------|
| T-29 | Push to GitHub | Push project to GitHub repository (`elesliebenefield-dot/AshleysPetCare`) | T-06, T-24 | 🔴 Not Started | USER |
| T-30 | Deploy to Vercel | Connect GitHub repo to Vercel; configure `RESEND_API_KEY` and `CONTACT_EMAIL` environment variables; trigger initial deployment | T-29 | 🔴 Not Started | USER |
| T-31 | Verify live deployment | Test all sections on Vercel preview URL; submit a test inquiry and confirm Ashley receives the email | T-30 | 🔴 Not Started | USER + AGENT |
| T-32 | Document next steps | Note open items for post-launch: domain purchase, Resend sending domain verification, social media links, logo icon final confirmation | T-31 | 🔴 Not Started | AGENT |
