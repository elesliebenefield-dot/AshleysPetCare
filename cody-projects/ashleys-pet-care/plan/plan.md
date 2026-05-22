# Product Implementation Plan
This document defines how the product will be built and when.

## Section Explanations
| Section                  | Overview |
|--------------------------|--------------------------|
| Overview                 | A brief recap of what we're building and the current state of the PRD. |
| Architecture             | High-level technical decisions and structure (e.g., frontend/backend split, frameworks, storage). |
| Components               | Major parts of the system and their roles. Think modular: what pieces are needed to make it work. |
| Data Model               | What data structures or models are needed. Keep it conceptual unless structure is critical. |
| Major Technical Steps    | High-level implementation tasks that guide development. Not detailed coding steps. |
| Tools & Services         | External tools, APIs, libraries, or platforms this app will depend on. |
| Risks & Unknowns         | Technical or project-related risks, open questions, or blockers that need attention. |
| Milestones    | Key implementation checkpoints or phases to show progress. |
| Environment Setup | Prerequisites or steps to get the app running in a local/dev environment. |

## Overview
This plan covers the implementation of the Ashley's Pet Care marketing website — a modern, mobile-first site built with Next.js, React, and TypeScript. The site establishes Ashley's independent professional web presence, builds trust through real photography and authentic storytelling, and generates direct inquiries from pet owners in Lake Nona and Greater Orlando.

The PRD is approved. This plan translates it into a concrete technical architecture, component breakdown, and phased build sequence for Version 1.0.

## Architecture

**Type:** Static marketing site with a serverless API route for form handling.

**Stack:**
- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS — utility-first, mobile-first responsive design
- **Email delivery:** Resend (free tier) via a Next.js API route — handles inquiry form submissions
- **Hosting:** Vercel (free tier, native Next.js deployment)
- **Assets:** Local image files served via Next.js `Image` component with optimization

**Structure:**
```
/app
  layout.tsx         — root layout, fonts, metadata
  page.tsx           — single-page site (all sections)
  /api
    /contact
      route.ts       — serverless handler for inquiry form submissions
/components
  Header.tsx
  Hero.tsx
  About.tsx
  Services.tsx
  TrustBar.tsx
  InquiryForm.tsx
  Footer.tsx
/lib
  sendEmail.ts       — Resend email helper
/public
  /images            — optimized photos from assets/photos
  /logo              — logo SVG/PNG
/styles
  globals.css        — Tailwind base + custom CSS variables for brand palette
```

**Design decisions:**
- Single-page layout (all sections on one page, smooth scroll navigation) — appropriate for V1 scope and mobile UX
- App Router used for modern Next.js conventions and easy future expansion
- No database or CMS in V1 — content is hardcoded in components; easy for developer to update
- Tailwind CSS chosen for rapid, consistent styling with full mobile-first control
- No client-side state management needed in V1

## Components

- **`Header`** — Fixed navigation bar with logo, smooth-scroll links (About, Services, Contact), and a prominent "Book Now" / "Get in Touch" CTA button. Collapses to a hamburger menu on mobile.
- **`Hero`** — Full-viewport section with a real photograph as background or split-layout, headline, tagline (*"From Leash to Love"*), a 1–2 sentence intro, and a CTA button that scrolls to the inquiry form.
- **`About`** — Ashley's personal story: wife, mother, dog mom, nearly 30 years in Central Florida, Scouts of America involvement, genuine love for animals. Real photo of Ashley. Communicates warmth and trust.
- **`Services`** — Card or grid layout listing each service: Dog Walking, Pet Sitting, Drop-In Visits, Medication Administration, Personalized / Special Needs Care. Each card has a short description. No pricing in V1.
- **`TrustBar`** — A short section or banner communicating Ashley's care philosophy ("pets are treated as family members, care is personalized") and her Rover registration as a trust signal.
- **`InquiryForm`** — Contact form with fields: full name, email address, phone number, pet name and type, requested service (dropdown), and message. Validates on the client; submits to `/api/contact`; shows a success or error state.
- **`Footer`** — Business name, tagline, service area (Lake Nona & Greater Orlando), and a simple copyright line. Optional: social media links if provided.

## Data Model

**Inquiry Form Submission**
```
{
  name: string           // Full name
  email: string          // Email address
  phone: string          // Phone number
  petName: string        // Pet's name
  petType: string        // Type of pet (dog, cat, etc.)
  service: string        // Requested service (from dropdown)
  message: string        // Free-text message
}
```

**Site Content** — No dynamic data model in V1. All content (service descriptions, About copy, taglines) is authored directly in component files or a lightweight constants file (`/lib/content.ts`) for easy editing without touching JSX.

## Major Technical Steps

1. **Project scaffolding** — Initialize Next.js app with TypeScript, Tailwind CSS, and App Router. Configure brand color palette as Tailwind CSS custom tokens.
2. **Brand & logo** — Create SVG logo (wordmark + tagline *"From Leash to Love"*) using the approved brand direction. Export PNG fallback.
3. **Asset preparation** — Copy and optimize the 10 photos from `assets/photos` into `/public/images`. Assign each photo to its intended section (hero, about, services, etc.) based on the inventory.
4. **Layout & global styles** — Build root `layout.tsx` with fonts (Google Fonts — clean, modern sans-serif), global CSS variables for the brand palette, and base metadata (title, description, Open Graph).
5. **Header component** — Logo, nav links, CTA button, mobile hamburger menu.
6. **Hero section** — Full-width layout with real photography, headline, tagline, intro copy, and CTA.
7. **About section** — Ashley's story, real photo, personal narrative copy.
8. **Services section** — Service cards with icons or photography, descriptions for all five service types.
9. **Trust bar** — Care philosophy statement and Rover trust signal.
10. **Inquiry form** — Form UI, client-side validation, submission handler calling `/api/contact`.
11. **API route — form handler** — Serverless route that receives form data, validates it server-side, and sends an email to Ashley via Resend.
12. **Footer** — Business name, tagline, service area, copyright.
13. **SEO & metadata** — Page title, meta description, Open Graph tags, favicon.
14. **Responsive QA** — Test and refine across mobile, tablet, and desktop breakpoints.
15. **Deployment** — Deploy to Vercel; configure environment variables for Resend API key; connect custom domain when available.

## Tools & Services

| Tool / Service | Purpose | Cost |
|---|---|---|
| Next.js 14+ | Framework (App Router) | Free / open source |
| React 18+ | UI library | Free / open source |
| TypeScript | Type safety | Free / open source |
| Tailwind CSS | Styling | Free / open source |
| Resend | Transactional email for inquiry form | Free tier (3,000 emails/month) |
| Vercel | Hosting and deployment | Free tier |
| Next.js Image | Photo optimization and lazy loading | Built-in |
| Google Fonts | Typography | Free |
| ESLint + Prettier | Code quality and formatting | Free / open source |

## Risks & Unknowns

- **Resend email setup** — Requires a verified sending domain. If Ashley does not yet have a domain, a temporary workaround (Formspree free tier) can be used until the domain is ready.
- **Domain name** — Not yet purchased. The site can be built and deployed to a Vercel preview URL, but a permanent domain is needed before the site is shared publicly. Recommended: `ashleyspetcare.com` or similar.
- **Logo creation** — Logo needs to be designed as part of this project. SVG creation in code is viable for a clean wordmark; a more complex icon (leash-heart) may need iteration.
- **Photo file names** — Current photos in `assets/photos` use hash-based names. They will need to be mapped to semantic names (e.g., `ashley-with-corgi.jpg`) during asset preparation for maintainability.
- **Form spam** — No CAPTCHA or spam protection in V1. Low risk at launch scale; can add honeypot field or hCaptcha (free) in a future version if spam becomes an issue.
- **Content updates** — Copy is hardcoded in components in V1. If Ashley needs frequent content updates, a future version could introduce a lightweight CMS (e.g., Contentlayer or Sanity free tier).

## Milestones

| Milestone | Description |
|---|---|
| **M1 — Project Setup** | Next.js + TypeScript + Tailwind scaffolded, brand tokens configured, repo initialized |
| **M2 — Brand & Assets** | Logo created, photos prepared and mapped, fonts selected |
| **M3 — Core Layout** | Header, Hero, and Footer built and responsive |
| **M4 — Content Sections** | About, Services, and Trust Bar complete with real copy and photography |
| **M5 — Inquiry Form** | Form UI, validation, API route, and Resend email delivery working end-to-end |
| **M6 — SEO & Polish** | Metadata, Open Graph, favicon, responsive QA across all breakpoints |
| **M7 — Deployment** | Live on Vercel preview URL; environment variables configured; ready for domain connection |

## Environment Setup

1. **Prerequisites:** Node.js 18+ and npm (or pnpm/yarn) installed locally.
2. **Clone the repo:** `git clone <repo-url> && cd AshleysPetCare`
3. **Install dependencies:** `npm install`
4. **Environment variables:** Create `.env.local` in the project root:
   ```
   RESEND_API_KEY=your_resend_api_key_here
   CONTACT_EMAIL=ashley@yourdomain.com
   ```
5. **Run dev server:** `npm run dev` — site available at `http://localhost:3000`
6. **Build for production:** `npm run build && npm start`
7. **Deploy to Vercel:** Connect the GitHub repo to Vercel; add environment variables in the Vercel dashboard; deploy.
