# Staff Retreat 2026 — Shenzhen Guide

A lightweight, mobile-first microsite for staff attending the Shenzhen retreat (15–18 July 2026). Built with Next.js (App Router), TypeScript, and Tailwind CSS — no app download required.

## Running locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — best viewed at iPhone-sized widths, but it's fully responsive.

## Editing content

**All editable content lives in one file: [`data/retreat.ts`](data/retreat.ts).**

You do not need to touch any component code to update the guide. Edit the values in `data/retreat.ts` to change:

- The home page welcome note, quick reminders, and dates
- Before You Go checklist items
- Hotel details (address, phone, wifi, amenities, etc.)
- The day-by-day itinerary
- Nearby malls, food, cafes, nightlife, essentials, and sightseeing
- Useful Shenzhen info, payment methods, and phrases
- Contacts and emergency numbers
- QR code links (arrival card, hotel location, PDF backup)

Anything wrapped in `[PLACEHOLDER]` or `[占位符]` is a placeholder — replace it with real details before sharing the link with staff. The shape of the data is defined in [`types/retreat.ts`](types/retreat.ts) if you want to see what fields are available.

### Adding a custom QR code image

By default, QR codes are generated on the fly from the `data` field in `qrItems` using a public QR API. If you'd rather use a designed/branded QR image:

1. Drop the image into `public/qr/your-file.png`
2. Edit [`components/QRBlock.tsx`](components/QRBlock.tsx) and point `qrSrc` at `/qr/your-file.png` for that item.

## Deploying to Vercel

1. Push this project to a GitHub (or GitLab/Bitbucket) repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Vercel auto-detects Next.js — no extra configuration is needed. Click **Deploy**.
4. Once deployed, share the Vercel URL with staff. They can open it directly in their phone's browser, and use "Add to Home Screen" for one-tap access.

To update content after deploying, edit `data/retreat.ts`, commit, and push — Vercel will redeploy automatically.

## Project structure

```
app/            Routes, layout, metadata, manifest, icons
components/     Reusable UI components (cards, nav, buttons, etc.)
data/           retreat.ts — all editable content
types/          retreat.ts — TypeScript types describing the content shape
public/         Static assets
```

## Components included

- `Section` / `SectionCard` — page sections and content cards
- `BottomNav` — sticky bottom navigation with scroll-spy highlighting
- `QuickActionButton` — homepage shortcut buttons
- `InfoAccordion` — collapsible info blocks
- `ContactCard` — contact entries with call + copy actions
- `ItineraryCard` — day-by-day itinerary cards
- `LinkButton` — "Open in Maps" / "Call hotel" style buttons
- `QRBlock` — QR code display blocks
- `CopyField` — tap-to-copy fields (addresses, phone numbers, phrases)
- `PlaceItem` — nearby place listings with map links
- `ShareButton` / `PrintButton` — share the guide / print the itinerary
