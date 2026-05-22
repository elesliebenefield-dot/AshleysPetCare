# Feature Backlog

This document lists features and enhancements derived from the plan. It is a living document that will evolve throughout the project. It is grouped by version, with the Backlog tracking all features not added to a version yet. It is used to create versions to work on.

| Status |  | Priority |  |
|--------|-------------|---------|-------------|
| 🔴 | Not Started | High | High priority items |
| 🟡 | In Progress | Medium | Medium priority items |
| 🟢 | Completed | Low | Low priority items |


## Backlog

| #  | Feature | Description | Source |
|----|---------|-------------|--------|
| B-01 | Testimonials & Reviews | Client reviews from Rover and direct clients, displayed on the site | Agent |
| B-02 | Photo Gallery Page | Dedicated gallery showcasing pets Ashley has cared for | Agent |
| B-03 | Service Area Map | Visual map highlighting Lake Nona and Greater Orlando coverage area | Agent |
| B-04 | FAQ Section | Common questions about services, scheduling, and pet care | Agent |
| B-05 | Blog / Pet Care Tips | Articles and tips authored by Ashley to support SEO and credibility | Agent |
| B-06 | Online Booking Integration | Scheduling and appointment management (e.g., Time To Pet) | Agent |
| B-07 | Social Media Integration | Instagram or Facebook feed embedded on site | Agent |
| B-08 | hCaptcha / Spam Protection | Honeypot or CAPTCHA on inquiry form if spam becomes an issue | Agent |
| B-09 | Lightweight CMS | Allow Ashley to update copy and photos without developer assistance | Agent |


## Version 1.0.0 — Launch-Ready Marketing Site 🔴 Not Started
Version 1.0.0 delivers the complete, launch-ready Ashley's Pet Care website: branded, mobile-first, real photography throughout, and a working inquiry form. No placeholders — real photos are integrated from the first build step.

| ID | Feature | Description | Priority | Status |
|----|---------|-------------|----------|--------|
| 1-01 | Project Scaffolding | Initialize Next.js 14+ App Router project with TypeScript, Tailwind CSS, ESLint, and Prettier | High | 🔴 Not Started |
| 1-02 | Brand Tokens | Configure Tailwind with custom brand palette: warm cream, deep charcoal, soft sage green, rose-pink accent | High | 🔴 Not Started |
| 1-03 | Logo Creation | Design and export SVG wordmark logo — "Ashley's Pet Care" with tagline "From Leash to Love" | High | 🔴 Not Started |
| 1-04 | Photo Asset Preparation | Rename hash-named photos to semantic filenames, optimize, and copy to `/public/images`; assign each photo to its section | High | 🔴 Not Started |
| 1-05 | Typography Setup | Select and configure Google Fonts (modern, clean sans-serif); apply globally via root layout | Medium | 🔴 Not Started |
| 1-06 | Root Layout & Metadata | Build `layout.tsx` with fonts, global CSS, page title, meta description, Open Graph tags, and favicon | High | 🔴 Not Started |
| 1-07 | Header Component | Fixed nav bar with logo, smooth-scroll links (About, Services, Contact), and CTA button; mobile hamburger menu | High | 🔴 Not Started |
| 1-08 | Hero Section | Full-viewport section with real photography, headline, tagline ("From Leash to Love"), intro copy, and scroll-to-form CTA | High | 🔴 Not Started |
| 1-09 | About Section | Ashley's personal story — family, 30 years in Central Florida, Scouts of America, genuine love for animals; real photo of Ashley | High | 🔴 Not Started |
| 1-10 | Services Section | Card/grid layout with real photography for each service: Dog Walking, Pet Sitting, Drop-In Visits, Medication Administration, Personalized/Special Needs Care | High | 🔴 Not Started |
| 1-11 | Trust Bar | Care philosophy statement ("pets treated as family") and Rover registration trust signal | Medium | 🔴 Not Started |
| 1-12 | Inquiry Form UI | Form with fields: full name, email, phone, pet name, pet type, requested service (dropdown), message; client-side validation; success/error states | High | 🔴 Not Started |
| 1-13 | Inquiry Form API Route | Next.js serverless route `/api/contact` — validates server-side, sends email to Ashley via Resend free tier | High | 🔴 Not Started |
| 1-14 | Footer | Business name, tagline, service area (Lake Nona & Greater Orlando), copyright line | Medium | 🔴 Not Started |
| 1-15 | Responsive QA | Test and refine all sections across mobile, tablet, and desktop breakpoints | High | 🔴 Not Started |
| 1-16 | Vercel Deployment | Deploy to Vercel; configure RESEND_API_KEY and CONTACT_EMAIL environment variables; verify form end-to-end | High | 🔴 Not Started |
