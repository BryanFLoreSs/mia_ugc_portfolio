# UGC MIA — Creator Portfolio

A responsive Next.js App Router portfolio for Mia. Content, pricing, services, portfolio entries, and social placeholders are kept in editable data files.

## Requirements

- Node.js 20.9 or later
- npm

## Install and run

```bash
npm install
npm run dev
```

Open http://localhost:3000. Production commands:

```bash
npm run build
npm start
npm run lint
```

## Content and assets

- Edit brand details, navigation, service lists, add-ons, and packages in `data/site.ts`.
- Add video entries and categories in `data/portfolio.ts`. Put approved local video files in `public/videos/` and set `videoUrl` to `/videos/filename.mp4`; direct MP4 URLs also work. Video playback is enabled in the project modal when a URL is present.
- Add approved photos to `public/images/`. Replace the `Placeholder` blocks in `components/Portfolio.tsx` with `next/image` components and descriptive alt text. Set intrinsic dimensions or `fill` with a sized wrapper to avoid layout shifts. Current tiles are intentional, labeled placeholders; no sample photos or client assets are represented as Mia's work.
- Replace social `href: "#"` values in `data/site.ts` after Mia supplies her profile URLs. Client names, logo tiles, and testimonial copy in the page are development placeholders.

## Packages and pricing

Update `site.packages` and the `services` / `addOns` arrays in `data/site.ts`. Package rates without a confirmed amount should remain “Contact for pricing.” The featured offer includes a note to confirm how the six final videos map to bodies, hooks, and CTAs.

## Contact form

The form posts to `app/api/contact/route.ts`. Required fields and length limits are checked on the server, email syntax is validated, and a hidden honeypot filters basic bots. With email delivery unavailable, the client opens a prefilled email draft to `ugcmia.collab@gmail.com`.

For server delivery, create a Resend account, verify a sending domain, and configure these environment variables in `.env.local` (and in Vercel project settings):

```dotenv
RESEND_API_KEY=re_...
CONTACT_FROM_EMAIL=UGC MIA <inquiries@your-verified-domain.com>
CONTACT_TO_EMAIL=ugcmia.collab@gmail.com
```

Only `RESEND_API_KEY` and `CONTACT_FROM_EMAIL` are required; the recipient defaults to Mia's primary contact email. Never prefix these server secrets with `NEXT_PUBLIC_`.

## Deploy to Vercel

Push the project to GitHub, import the repository in Vercel, configure the contact environment variables if Resend delivery is desired, then deploy. Vercel detects the Next.js build automatically. The site also works without Resend; the contact form falls back to an email draft.

## Notes

- SEO metadata, Open Graph metadata, and a favicon are configured in `app/layout.tsx` and `app/icon.svg`.
- The contact API uses the Resend HTTP API via `fetch`, so there is no extra mail SDK dependency.
- Asset tiles remain clearly marked until real, approved photography and video files are supplied.
# mia_ugc_portfolio
