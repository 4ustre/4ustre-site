# Project Specs — Austė Vagoraitė portfolio site (4ustre)

## What the app does and who uses it

A personal portfolio website for **Austė Vagoraitė** (4ustre), an illustrator and graphic
designer in Vilnius. It showcases her illustration, book cover, identity and wedding
stationery work, and lets people reach her about commissions.

Audience: publishers, magazine editors, couples and other clients browsing her work and
deciding whether to get in touch. There is no login and no admin area — it's a public,
read-only showcase site. Content (project text, images) is edited by hand in the code for
now, not through a CMS.

This is a from-scratch rebuild of a working HTML/JS prototype (`project/4ustre-site.html`,
built with Claude Design) into a real, shippable Next.js app, matching the prototype
pixel-for-pixel in a maintainable component structure — not a copy-paste of its internal
React-via-Babel-in-browser structure.

## Tech stack

- **Framework:** Next.js (App Router), React, TypeScript
- **Rendering:** fully static — no server, no API routes, no database, no auth
- **Animation:** GSAP + ScrollTrigger (hero intro animation, horizontal-scrolling work
  gallery, scroll-triggered tagline, pinned project panels)
- **Styling:** the 4ustre design system tokens, ported into the Next.js app (`colors.css`,
  `typography.css`, `spacing.css`, `texture.css`, `layout.css`, `base.css`, `fonts.css`),
  plus page-specific CSS matching the prototype's inline `<style>` block. Fonts (Instrument
  Serif, Hanken Grotesk) loaded from Google Fonts as in the prototype.
- **Hosting:** static export, deployed to Vercel or Netlify (no server-side features are
  used, so either works with zero config beyond connecting the repo)
- **Data:** the six `WORK` items (title, meta, client, text) live in a local TypeScript data
  file — no CMS, no database

## Pages and user flows

All content is public; there is one flow (browse → maybe contact).

1. **Home (`/`)** — full-height hero with logo, "Austė Vagoraitė" and the tagline
   "thinking world into images", animated in on load (logo pops in big then settles, name
   letters spring in, tagline fades up). Centered nav (Work / About / Contact) fixed at the
   top of the hero. Below the hero, a pinned horizontal-scrolling gallery of six work
   covers (scrubbed by vertical scroll via GSAP ScrollTrigger) — clicking a cover opens a
   right-hand detail sheet (title, meta, image, description, "See the project" button).
   Hovering a cover zooms it slightly. After the gallery, a placeholder "Selected work" text
   section, with a bounce-in footer-style section.
2. **Work (`/work`)** — a 3-column grid of all six work items as image cards (title + meta
   below each). Clicking a card navigates to that project's page.
3. **Project (`/work/[slug]`)** — one scrollytelling page per project, but built as a single
   continuous scroll through *all six* projects (pinned cover panel with number, meta,
   title, client, then the project body: description, detail images, materials, process
   note, final piece, and a "← Back to work gallery" button after each project). Landing on
   a specific project's slug scrolls/jumps straight to that project's section; scrolling
   past the last project loops back to the first. "Back to work gallery" always returns to
   `/work`.
4. **About (`/about`)** — portrait, bio copy, skill tags (Illustration, Book covers,
   Identity, Stationery), and a Clients / Teaching / Elsewhere info row.
5. **Contact (`/contact`)** — a colored circular "invitation" field with a short message,
   plus Email / Studio / Now (availability) info and a "Send it" mailto button.

Header/nav: centered Work/About/Contact links; the logo mark (top-left on inner pages, or
centered at the top of the hero on Home) always links back to Home.

## Data model

No database. A single static data source, e.g. `src/data/work.ts`:

```ts
type WorkItem = {
  slug: string;       // derived from title, used for /work/[slug]
  title: string;
  meta: string;        // "2025 · Book cover"
  client: string;
  text: string;         // short description shown in the home-page detail sheet
};
```

Seeded with the six items already written in the prototype (Debesų knyga, Elena & Jonas,
A quiet week in Vilnius, The Chips Critics Club, Sodas, Three crows one pin). Images are
placeholders (the design system's grained `ImageFrame` placeholder look) until real photos
are supplied — no image files are required for this task.

## Third-party services

- **Google Fonts** — Instrument Serif, Hanken Grotesk (CDN `<link>`, same as the prototype)
- **GSAP + ScrollTrigger** — via npm package (`gsap`), not CDN, so it's bundled properly by
  Next.js
- **mailto: links** — the Contact page's "Send it" button and the About page's email link
  open the visitor's mail client directly; no form backend, no email-sending service

## What "done" looks like

- `npm run dev` runs the site locally with no console errors
- `npm run build` produces a static export with no errors or warnings
- All five routes (`/`, `/work`, `/work/[slug]`, `/about`, `/contact`) render and match the
  prototype's layout, type, color and spacing rules from the design system
- The animations from the prototype work: hero intro (logo + letters + tagline), horizontal
  work gallery scrub, work-item detail sheet open/close, pinned project-panel scroll with
  looping and working "back to gallery" buttons, footer bounce-in
- Site is responsive down to the prototype's existing breakpoint (~1080px)
- No real images yet — placeholders throughout, in the design system's placeholder style
- No backend, no auth, no database, no forms that need a server
