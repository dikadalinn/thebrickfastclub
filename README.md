# The Brickfast Club — Company Profile Website

A Next.js 16 company profile website for **The Brickfast Club**, an interior design and architecture studio based in Jakarta, Indonesia, founded by Gifari Putranto.

---

## Project Overview

This project is a design-to-code implementation of a Figma design system. The site is built as a Next.js App Router application with TypeScript and Tailwind CSS. It features a fixed sidebar navigation, full-bleed hero imagery with auto-rotate, project listing, project detail pages, an about page, and a contact page — all animated with Framer Motion.

**Figma Source:** https://www.figma.com/design/deuBYhTCOyqkMaypkkaGWJ/The-Brickfast-Club

### Key Pages

| Route | File | Description |
|-------|------|-------------|
| `/` | `src/app/page.tsx` | Home — full-screen hero with project auto-rotate every 4s, hover-based prev/next navigation |
| `/works` | `src/app/works/page.tsx` | Works list — scrollable project cards with scroll-triggered animations |
| `/works/[slug]` | `src/app/works/[slug]/page.tsx` | Works detail — two-panel layout, image-level navigation, next project CTA |
| `/about` | `src/app/about/page.tsx` | About page — studio description + team photos |
| `/contact` | `src/app/contact/page.tsx` | Contact page — phone, address, WhatsApp CTA |

---

## Tech Stack

- **Framework:** Next.js 16.2.4 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion 12
- **Design feedback:** Agentation 3 (browser annotation toolbar)
- **Fonts:** Geist, Geist Mono, Montserrat, Martian Mono (via `next/font/google`)

### Font Usage (per design system)

| Font | Variable | Usage |
|------|----------|-------|
| Helvetica | Inline `font-['Helvetica']` | Headings, body text, navigation |
| Geist | `--font-geist-sans` | Fallback / base |
| Geist Mono | `--font-geist-mono` | Technical accents |
| Martian Mono | `--font-martian-mono` | Year labels in works detail |

---

## File Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout — fonts + Agentation wrapper
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles
│   ├── about/
│   │   └── page.tsx        # About page
│   ├── contact/
│   │   └── page.tsx        # Contact page
│   └── works/
│       ├── page.tsx        # Works list
│       └── [slug]/
│           └── page.tsx    # Works detail
└── components/
    ├── Sidebar.tsx          # Shared sidebar navigation
    └── AgentationWrapper.tsx # Agentation toolbar wrapper
public/
└── assets/
    ├── logo.png             # Site logo
    ├── navBarIcon-whatsapp.svg
    ├── navBarIcon-linkedin.svg
    └── navBarIcon-instagram.svg
```

---

## Design System

### Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Page background | `#f0f4f8` | Main bg, sidebar bg |
| Dark / primary | `#2f2c29` | Text, CTA buttons |
| Image panel | `#d9d9d9` | Hero background |

### Spacing & Sizing

- **Sidebar width:** `347px` (home), `425px` (works/about/contact)
- **Sidebar padding:** `60px`
- **Content padding:** `pt-[24px] pl-[24px]` (matching Figma inset)
- **Content max-width:** `967px`
- **Image height in works list:** `600px`

### Sidebar Behavior

- Positioned `sticky top-0` on desktop
- Fades + slides in from left on load (`x: -100 → 0`, duration 0.8s)
- Nav items: hover lifts + translate right (`x: 6`)
- Active state: black dot indicator
- Social icons scale on hover (`scale: 1.2`)

### Project Data

Projects are currently defined as a static array in each page file (not from an API):

| Slug | Title | Location | Year |
|------|-------|----------|------|
| `green-cove` | Kitchen Interior | Grand Wisata, Bekasi | 2022 |
| `sienna-grove` | Mr. A Bedroom Interior | Jakarta Selatan | 2023 |
| `villa-serenity` | Villa Serenity | Bandung, Jawa Barat | 2024 |
| `midnight-haven` | Midnight Haven | BSD, Tangerang | 2022 |
| `solace-villa` | Solace Villa | Ubud, Bali | 2024 |

---

## Assets

### Local Assets (`/public/assets/`)

All logo, icons, and images are stored locally under `public/assets/`:

| File | Purpose |
|------|---------|
| `logo.png` | Site logo (displayed in sidebar) |
| `navBarIcon-whatsapp.svg` | WhatsApp social icon |
| `navBarIcon-linkedin.svg` | LinkedIn social icon |
| `navBarIcon-instagram.svg` | Instagram social icon |

**Important:** The initial implementation used a temporary asset server (`http://localhost:3845`) that served Figma exports — those URLs no longer work. Always use the `/assets/...` path for local files.

### Unsplash Placeholder Images

Project images currently use Unsplash URLs as placeholder assets. When real assets are available, replace them in:

- `src/app/page.tsx` (hero images)
- `src/app/works/page.tsx` (works list)
- `src/app/works/[slug]/page.tsx` (detail images)
- `src/app/about/page.tsx` (about photos)

---

## Development

### Running the Project

```bash
npm install
npm run dev
# or
bun dev
```

Open http://localhost:3000

### Type Checking & Linting

```bash
npm run build      # Full build
npm run lint       # ESLint
```

---

## Figma Integration

### MCP Setup

The project uses Figma MCP for design-to-code workflow. MCP config is in `~/.config/opencode/opencode.json`:

```json
{
  "mcp": {
    "figma": {
      "type": "remote",
      "url": "http://127.0.0.1:3845/mcp",
      "enabled": true
    }
  }
}
```

**Important:** The Figma MCP server must be running (`http://127.0.0.1:3845/mcp`). The MCP tools are only loaded at session start — **restart opencode** if tools are missing.

### Figma Node IDs

| Page | Node ID |
|------|---------|
| Home | `8:555` |
| Works | `8:???` |
| About | `8:555` (same node, has content frame) |
| Contact | `13:83` |

### Available Figma Tools

| Tool | Purpose |
|------|---------|
| `figma_get_metadata` | Get frame metadata (dimensions, children) |
| `figma_get_design_context` | Get code implementation of a node |
| `figma_get_screenshot` | Take screenshot of a Figma frame |

---

## Known Issues & Limitations

1. **Figma MCP server dependency** — Tools only available when MCP server is running. Restart opencode to reconnect.
2. **Static project data** — Projects are hardcoded arrays, not fetched from an API. No CMS or database yet.
3. **Contact page layout** — Not yet matched to Figma design node `13:83`. Needs re-implementation once Figma MCP is working.
4. **About page images** — Use Unsplash placeholders instead of real studio photos. Replace with assets from `/public/assets/` when available.
5. **Works detail page logo** — Still uses `/assets/logo.png` via Sidebar. The works detail page has a custom logo reference that should use the same asset.

---

## Session Context

See `SESSION_CONTEXT.md` in the project root for the most recent session summary, including:
- What was completed in the previous session
- Current blockers
- Next steps

---

## Next Steps

1. **Restore Figma MCP** — Restart opencode to reconnect to `http://127.0.0.1:3845/mcp`
2. **Implement Contact page** — Slice from Figma node `13:83` once MCP is working
3. **Replace placeholder images** — Swap Unsplash URLs for real project/studio photos in `/public/assets/`
4. **Polish animations** — Fine-tune Framer Motion durations/easing based on Agentation feedback
5. **Responsive design** — Add mobile layouts (sidebar becomes hamburger menu)
6. **Deploy** — Set up Vercel or other hosting

---

## License

Private project for The Brickfast Club.
