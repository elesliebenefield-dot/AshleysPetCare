# Product Requirements Document (PRD)
This document formalizes the idea and defines the what and the why of the product the USER is building.

## Section Explanations
| Section           | Overview |
|-------------------|--------------------------|
| Summary           | Sets the high-level context for the product. |
| Goals             | Articulates the product's purpose — core to the "why". |
| Target Users      | Clarifies the audience, essential for shaping features and priorities. |
| Key Features      | Describes what needs to be built to meet the goals — part of the "what". |
| Success Criteria  | Defines what outcomes validate the goals. |
| Out of Scope      | Prevents scope creep and sets boundaries. |
| User Stories      | High-level stories keep focus on user needs (why) and guide what to build. |
| Assumptions       | Makes the context and unknowns explicit — essential for product clarity. |
| Dependencies      | Identifies blockers and critical integrations — valuable for planning dependencies and realism. |

## Summary
A modern, mobile-first marketing website for Ashley's Pet Care — a pet sitting and dog walking business serving Lake Nona and Greater Orlando. The site establishes Ashley's independent professional identity, builds trust through real photography and authentic storytelling, and converts visitors into direct inquiries.

## Goals
- **Establish an independent web presence** outside of Rover so Ashley owns her brand, her story, and her client relationships.
- **Build trust and credibility** with pet owners who want personalized, family-style care for their animals.
- **Generate direct inquiries** from local pet owners through a simple, approachable contact form.
- **Showcase Ashley's personality and experience** — nearly 30 years in Central Florida, deep community roots, and genuine expertise across a wide range of pets and care needs.
- **Lay a scalable foundation** for future features as the business grows.

## Target Users
**Primary:** Pet owners in Lake Nona and Greater Orlando seeking a trustworthy, experienced, personalized pet care provider. They want someone who will treat their pet as a family member — not just fill a slot on a schedule. They may have found Ashley on Rover or heard about her through word of mouth, and they are visiting the site to validate their decision to reach out.

**Secondary:** Ashley herself — the site should reflect her personality and feel like something she is proud to share with her community.

## Key Features

- **Hero Section** — Full-width, real photography with a clear headline and tagline (*"From Leash to Love"*), a brief statement of who Ashley is and what she offers, and a prominent call-to-action to inquire.
- **About Ashley** — Personal narrative covering her background, family, nearly 30 years in Central Florida, community involvement (Scouts of America), and her genuine love for animals. Communicates warmth and trustworthiness.
- **Services Section** — Clear descriptions of each service offered:
  - Dog Walking
  - Pet Sitting (in-home)
  - Drop-In Visits
  - Medication Administration
  - Personalized / Special Needs Care (senior pets, rescue dogs, injury recovery, mobility-challenged pets, picky eaters, hand feeding)
- **Care Philosophy / Trust Statement** — A short section communicating that pets are treated as family members and care is tailored to each animal's individual needs.
- **Rover Trust Signal** — A brief mention that Ashley is also a registered Rover provider, used to reinforce credibility without directing traffic away from the site.
- **Inquiry Form** — Fields: full name, email address, phone number, pet name and type, requested service, and a message. Submits to Ashley directly. No payment or booking required at this stage.
- **Branding** — Custom wordmark logo: "Ashley's Pet Care" with tagline *"From Leash to Love."* Color palette: warm cream background, deep charcoal text, soft sage green accents, rose-pink highlights. Clean, modern, boutique feel.
- **Mobile-First Responsive Design** — Optimized for smartphones first; fully responsive across all screen sizes.
- **Real Photography** — 10 photos already available; used throughout hero, about, and services sections.

## Success Criteria
- Pet owners in Lake Nona and Greater Orlando can discover Ashley through organic search and feel confident enough to submit an inquiry on their first visit.
- The site generates consistent direct inquiries — independent of Rover.
- Visitors understand Ashley's services, her experience, and her care philosophy within the first scroll.
- The site creates a strong enough first impression to convert visitors into meet-and-greet requests.
- Ashley is proud to share the site with potential clients and in her community.

## Out of Scope
- Online booking or scheduling system (future version)
- Online payments or transactions (future version)
- Photo gallery page (future version)
- Testimonials / reviews section (future version)
- Service area map (future version)
- Blog or pet care tips content (future version)
- Social media feed integration (future version)
- Client login or portal (future version)
- Any paid third-party tools or SaaS subscriptions

## User Stories
- **As a pet owner**, I want to learn about Ashley quickly so I can decide if she is the right fit for my pet.
- **As a pet owner**, I want to see real photos of Ashley with animals so I feel confident she is genuinely experienced and caring.
- **As a pet owner**, I want to understand what services are available and what makes Ashley different from a generic pet sitting app.
- **As a pet owner**, I want an easy way to reach out directly so I can ask questions and discuss my pet's specific needs.
- **As a pet owner with a special-needs pet**, I want to know Ashley has experience with senior pets, medication, mobility challenges, and recovery care so I feel safe leaving my pet with her.
- **As Ashley**, I want a site I can confidently share with clients and in my community that reflects my personality and professionalism.
- **As Ashley**, I want incoming inquiries to include enough information (pet type, service needed, contact info) so I can respond personally and thoughtfully.

## Assumptions
- Ashley will respond personally to every inquiry — there is no automated scheduling or booking in V1.
- The 10 photos already in `assets/photos` are approved for use on the website.
- A logo and brand identity will be created as part of this project (no existing logo).
- The inquiry form will use a free or low-cost email delivery service (e.g., Resend free tier, Formspree free tier, or similar) to deliver submissions to Ashley.
- The site will be deployed on a free or low-cost hosting platform (e.g., Vercel free tier).
- The developer will manage deployment, updates, and codebase maintenance; Ashley will update basic content with assistance.
- SEO basics (meta tags, page title, description, Open Graph) will be included to support local search visibility.

## Dependencies
- **Next.js / React / TypeScript** — core tech stack.
- **Real photography** — 10 images available in `assets/photos`; no additional photography shoot required for V1.
- **Logo / brand assets** — to be created as part of this project; needed before final UI build.
- **Email delivery for inquiry form** — a free-tier service such as Resend or Formspree; must be selected and configured before the form is functional.
- **Hosting** — Vercel (recommended for Next.js; free tier available).
- **Domain name** — to be purchased and configured separately (e.g., ashleyspetcare.com or similar).
