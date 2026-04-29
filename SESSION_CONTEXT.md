# TBC Compro - Session Context

## Project Overview

Build a company profile website for **The Brickfast Club** (architecture agency) in Next.js, slicing pages from Figma and adding interactions/animations.

## Page Structure

1. `/` - Home
2. `/works` - Works list
2.1 `/works/[slug]` - Works detail
3. `/contact` - Contact
4. `/about` - About page (needs implementation from Figma)

## Current Status

### Completed

#### Project Setup
- Next.js App Router + TypeScript + Tailwind
- Dependencies: `framer-motion`, `agentation`
- Fonts: Geist, Geist Mono, Montserrat, Martian Mono (via Google Fonts)

#### Pages Implemented

**Home (`/`)**
- Sidebar nav (width: 347px) with hover behavior
- Hero section with project switching (left/right hover zones)
- Auto-rotate projects every 4s with circular progress loader
- Project title, location, year display

**Works (`/works`)**
- Larger sidebar (width: 425px)
- Project cards with images and links
- Animations on load

**Works Detail (`/works/[slug]`)**
- Two-panel layout:
  - Left: logo, title, location/year, description, prev/next image arrows
  - Right: image panel with close button and floating "NEXT PROJECT" CTA
- Image-level navigation (arrows switch images within project, not projects)
- Close button: black bg + white icon on hover
- "NEXT PROJECT" button: floating bottom-right (bottom-[32px] right-[32px])

**Contact (`/contact`)**
- Basic scaffold

**About (`/about`)**
- Placeholder implementation (needs Figma slice)

### Key Components

- `src/components/Sidebar.tsx` - Shared sidebar nav
- `src/components/AgentationWrapper.tsx` - Agentation dev toolbar

## Known Issues / Blockers

- Figma MCP tools unavailable in current session
- About page (`/about`) needs to be implemented from Figma node `8-555`
- Need to restore Figma MCP or get screenshot export to continue

## Next Steps

1. Restore Figma MCP tool access OR get screenshot of About page from Figma
2. Slice and implement About page from Figma node `8-555`
3. Continue visual refinements via Agentation feedback
4. Add any remaining animations/interactions per Figma specs

## File Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout, fonts, Agentation wrapper
│   ├── page.tsx            # Home
│   ├── about/page.tsx      # About (placeholder)
│   ├── contact/page.tsx   # Contact (basic)
│   └── works/
│       ├── page.tsx        # Works list
│       └── [slug]/page.tsx # Works detail
└── components/
    ├── Sidebar.tsx
    └── AgentationWrapper.tsx
```
