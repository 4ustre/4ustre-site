# Project Overview

Build a lightweight web application. This guide is instructions to get Claude Code to behave the way I want.
Each feature does one thing, the code is easy to follow, and the app is easy to run locally and deploy.

---

# Development Rules

**Rule 1: Always read first**
Before taking any action, always read:
- `CLAUDE.md`
- `project_specs.md`

If either file doesn't exist, create it before doing anything else.

**Rule 2: Define before you build**
Before writing any code:
1. Create or update `project_specs.md` and define:
   - What the app does and who uses it
   - Tech stack (framework, database, auth, hosting)
   - Pages and user flows (public vs authenticated)
   - Data models and where data is stored
   - Third-party services being used (Stripe, Supabase, etc.)
   - What "done" looks like for this task
2. Show the file
3. Wait for approval

No code should be written before this file is approved.

**Rule 3: Look before you create**
Always look at existing files before creating new ones. Don't start building until you understand what's being asked. If anything is unclear, ask before starting.

**Rule 4: Test before you respond**
After making any code changes, run the relevant tests or start the dev server to check for errors before responding. Never say "done" if the code is untested.

**Core Rule**
Do exactly what is asked. Nothing more, nothing less. If something is unclear, ask before starting.

---

# How to Respond

Always explain like you're talking to a 15 year old with no coding background.

For every response, include:
- **What I just did** — plain English, no jargon
- **What you need to do** — step by step, assume they've never seen this before
- **Why** — one sentence explaining what it does or why it matters
- **Next step** — one clear action
- **Errors** — if something went wrong, explain it simply and say exactly how to fix it

When a task involves external tools or technical elements that a non-coder wouldn't know (Vercel, Netlify, localhost:3000, etc.):
- Walk through exactly where to find what they need (e.g. "go to your Vercel dashboard → Project → Settings")
- Describe what each key or setting does in one plain sentence
- If there's a config to create manually, explain what it is and why it exists
- Be as concise as possible. Do not ramble. Less is more

---

# Tech Stack

- **Framework:** Next.js (React), static/client-rendered — no backend server
- **Database:** none — content lives in local data files in the repo
- **Auth:** none — the site is fully public
- **Hosting:** Vercel or Netlify
- **Animation:** GSAP + ScrollTrigger
- **Styling:** the 4ustre design system tokens (`_ds/`), plain CSS

---

# Running the Project

1. Install dependencies: `npm install`
2. Run the dev server: `npm run dev`
3. Open `http://localhost:3000` in your browser
4. Build for production: `npm run build`

---

# File Structure

- `/app` or `/src` → Next.js pages and components
- `/public` → Static assets (images, fonts, the design-system tokens)
- `project_specs.md` → What this project does and what needs to be built
- `README.md` → Handoff notes from the original design export (reference only)
- `chats/` → Original design-chat transcript (reference only, not app code)
- `project/` → The original exported HTML prototype and design-system bundle (reference only, not app code)

Put new code in the same place as similar existing code.
Don't create new top-level folders without asking first.

---

# How to Write Code

- Write simple, readable code — clarity matters more than cleverness
- Make one change at a time
- Don't change code that isn't related to the current task
- Don't over-engineer — build exactly what's needed, nothing more

If a big structural change is needed, explain why before making it.

---

# Secrets & Safety

- Never put API keys or passwords directly in the code
- Never commit `.env` to GitHub
- Ask before deleting or renaming any important files

---

# Scope

Only build what is described in `project_specs.md`.
If anything is unclear, ask before starting.

---

# Core Rule

Do exactly what is asked. Nothing more, nothing less.
If something is unclear, ask before starting.

---

# Testing

Before marking any task as done:
- Run the relevant script or command and confirm it exits successfully
- Check stdout/stderr for errors, warnings, or unexpected output
- Trace the full execution path end-to-end — not just the entry point
- Verify that existing behaviour wasn't broken by the change

When building a new page or component:
- Test the happy path (the page renders and works as expected)
- Test the error path (missing data is handled gracefully, e.g. no images yet)
- Confirm navigation between pages works correctly
- Check responsive behaviour at common breakpoints

When calling external services (fonts, GSAP from a CDN, form submission, etc.):
- Confirm the request/URL is correct
- Handle load failures gracefully (e.g. animation library not loaded)
