# Version Design Document : v1.0.0 — Launch-Ready Marketing Site
Technical implementation and design guide for the upcoming version.

## 1. Features Summary
Version 1.0.0 delivers the complete, launch-ready Ashley's Pet Care marketing website. All 16 features ship together as a single cohesive release. Real photography is used throughout — no placeholders at any stage.

| ID | Feature | Priority |
|----|---------|----------|
| 1-01 | Project Scaffolding | High |
| 1-02 | Brand Tokens | High |
| 1-03 | Logo Creation | High |
| 1-04 | Photo Asset Preparation | High |
| 1-05 | Typography Setup | Medium |
| 1-06 | Root Layout & Metadata | High |
| 1-07 | Header Component | High |
| 1-08 | Hero Section | High |
| 1-09 | About Section | High |
| 1-10 | Services Section | High |
| 1-11 | Trust Bar | Medium |
| 1-12 | Inquiry Form UI | High |
| 1-13 | Inquiry Form API Route | High |
| 1-14 | Footer | Medium |
| 1-15 | Responsive QA | High |
| 1-16 | Vercel Deployment | High |

## 2. Technical Architecture Overview

**Framework:** Next.js 14+ with App Router, React 18, TypeScript

**Styling:** Tailwind CSS v3 — utility-first, mobile-first. Custom brand tokens defined in `tailwind.config.ts` as named colors:
- `brand-cream` — warm off-white background (`#FAF7F2`) — **primary background**
- `brand-charcoal` — deep dark text (`#2C2C2C`) — **primary text**
- `brand-sage` — soft sage green (`#8A9E85`) — **primary accent** (section backgrounds, borders, icons)
- `brand-rose` — rose-pink (`#C97B84`) — **secondary accent only** (CTA buttons, highlights, select icons)

**Color usage hierarchy:** The site should read as cream + charcoal + sage. Rose-pink is reserved for high-intent moments — primary CTA buttons, hover states, active form elements, and small branding accents. It must never dominate a section or be used as a background color. The goal is a trustworthy, warm, professional site — not a pink one.

**Layout:** Single-page with smooth scroll. All sections live on `app/page.tsx`. Navigation links scroll to section IDs. No separate page routes needed in V1 except `/api/contact`.

**Image handling:** Next.js `<Image>` component with `priority` on hero image. All photos stored in `/public/images/` with semantic filenames. `sizes` prop set per section for responsive optimization.

**Email:** Resend SDK via a Next.js serverless API route (`app/api/contact/route.ts`). `RESEND_API_KEY` and `CONTACT_EMAIL` stored as environment variables. Never exposed to the client.

**Deployment:** Vercel. Environment variables configured in Vercel dashboard. Preview deployments on every push; production on main branch.

**Font:** Google Fonts via `next/font/google`. Primary: `Outfit` (headings — modern, warm, approachable) + `Inter` (body — clean, highly readable). Playfair Display was considered and rejected — its editorial/luxury register conflicts with the community-focused, approachable brand personality. Outfit's rounded geometric letterforms read professional and warm without suggesting a spa, wedding brand, or law office.

**Directory structure:**
```
/app
  layout.tsx
  page.tsx
  globals.css
  /api/contact/route.ts
/components
  Header.tsx
  Hero.tsx
  About.tsx
  Services.tsx
  TrustBar.tsx
  InquiryForm.tsx
  Footer.tsx
/lib
  sendEmail.ts
  content.ts          ← all site copy in one place for easy editing
/public
  /images             ← real photos with semantic filenames
  favicon.ico
  og-image.jpg        ← Open Graph image (hero photo)
tailwind.config.ts
```

## 3. Implementation Notes

**Photography principle:** Real photos are a primary trust-building asset — they are what make Ashley's site feel genuine rather than generic. No stock photo substitutions in V1. Every section that shows a person or pet must use one of the 10 approved photos. If a section needs imagery and no suitable photo exists, use a minimal illustrated or color-block treatment rather than stock imagery.

**Photo assignment** — Based on the inventory of 10 photos in `assets/photos`:
- `a4a35da2...jpeg` → `ashley-headshot.jpg` — About section (professional headshot, pink bg)
- `6b39119c...jpeg` → `ashley-with-corgi.jpg` — Hero (warm, human+pet connection)
- `d188e466...jpeg` → `ashley-with-dog-selfie.jpg` — Hero alternate / About
- `171110ab...jpeg` → `ashley-family-with-dogs.jpg` — About section (family photo)
- `1d9ee0de...jpeg` → `puppy-in-pool.jpg` — Services / Hero (bright, playful)
- `2633f535...jpeg` → `dog-on-leash.jpg` — Dog Walking service card
- `336e9942...jpeg` → `dog-on-couch.jpg` — Pet Sitting service card
- `a050e57d...jpeg` → `boy-with-dog-bw.jpg` — Trust Bar / About (emotional, b&w)
- `aa4527f0...jpeg` → `dogs-playing-yard.jpg` — Services / Drop-In Visits
- `bbb0bef6...jpeg` → `two-dogs-walking.jpg` — Dog Walking / Footer area

**Content file (`/lib/content.ts`)** — All copy (headlines, service descriptions, about text, taglines) authored here. Components import from this file. Makes content updates easy without touching JSX.

**Form submission flow:**
1. User fills out `InquiryForm` — client-side validation with React state
2. `fetch('/api/contact', { method: 'POST', body: JSON.stringify(data) })`
3. API route validates, calls `sendEmail()` via Resend, returns `{ success: true }` or error
4. Form shows success message ("Thanks! Ashley will be in touch soon.") or error state

**Mobile-first breakpoints** (Tailwind defaults):
- Base styles = mobile (`< 640px`)
- `sm:` = 640px+
- `md:` = 768px+
- `lg:` = 1024px+

**Logo implementation:** SVG inline component (`/components/Logo.tsx`) for crisp rendering at all sizes. Also exported as `/public/logo.svg` and `/public/logo.png` for meta/OG use.

**Logo scope for V1:** Keep it lightweight and practical — the priority is a launched website, not a major design project. The logo should be a clean typographic wordmark ("Ashley's Pet Care") with the tagline ("From Leash to Love") and a minimal icon treatment. Three viable directions — evaluate and choose the simplest to execute cleanly in SVG:
1. A leash path that curves into a subtle heart shape
2. A simple paw + heart combination mark
3. Clean single-line dog or cat silhouette

All three directions should be attempted as SVG sketches before committing. Choose whichever renders cleanest at small sizes (nav bar). Do not spend excessive time on the icon — a wordmark-only fallback is acceptable if the icon adds complexity without adding clarity.

## 4. Other Technical Considerations

- **No CMS in V1.** All content lives in `/lib/content.ts`. The developer updates it; Ashley reviews via staging preview links.
- **No analytics in V1.** Can add Vercel Analytics (free) or Plausible in a future patch if needed.
- **Accessibility basics:** Semantic HTML (`<header>`, `<main>`, `<section>`, `<footer>`), alt text on all images, keyboard-navigable form, sufficient color contrast ratios.
- **`.env.local` is gitignored.** Never commit API keys. Document required env vars in a `.env.example` file.
- **`next/image` remote patterns** — Not needed; all images are local in `/public`.

## 5. Open Questions

- **Domain name:** Not yet purchased. Site can be fully built and tested on the Vercel preview URL. Domain needed before public launch — recommend `ashleyspetcare.com`. To be resolved before M7 (deployment).
- **Resend sending domain:** Resend requires a verified domain to send from a custom address (e.g., `hello@ashleyspetcare.com`). Until the domain is ready, Resend allows sending from `onboarding@resend.dev` on the free tier — fine for testing, should be updated at launch.
- **Ashley's contact email:** The `CONTACT_EMAIL` environment variable needs Ashley's real email address before the form goes live.
- **Logo icon direction:** The design calls for a wordmark + possible icon (leash-heart, paw/heart, or clean line-art). Final icon direction to be confirmed with Ashley before the logo is finalized.
- **Social media links:** Footer placeholder — links to be provided when/if Ashley wants them included.
