# Jawad Olamide Yuusuf · Portfolio

Next.js (App Router) + TypeScript + Tailwind CSS v4 + Lucide + Framer Motion.

## Run

```bash
npm install
npm run dev     # http://localhost:3000
npm run build && npm start
```

## Edit content

All text, links and lists are in `lib/site.ts`. You should not need to touch the components.

## Before you publish

1. **Photo:** add your photo to `public/` (e.g. `public/jawad.jpg`) and set `site.photo` in `lib/site.ts`.
2. **GitHub:** set `contact.github` in `lib/site.ts`. It is hidden until you add it.
3. **Project links:** set each project's `url`. Cards show "Link coming soon" until then, so there are no dead links.
4. **Screenshots:** replace the placeholders in `public/projects/` and update each project's `image`.
5. **Résumé:** replace `public/resume.pdf` with your latest version (same filename).
6. **Domain:** on Vercel, add an env var `NEXT_PUBLIC_SITE_URL=https://your-domain` for correct social previews.

## Deploy

Push to GitHub and import the repo on Vercel. No extra settings needed.
