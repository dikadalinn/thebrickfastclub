# New Session Prompt

Paste this into your new session:

---

I'm continuing work on a Next.js company profile website for **The Brickfast Club** (architecture agency). Read `SESSION_CONTEXT.md` in the project root for full context of what's been done.

**Immediate next task:** Implement the About page from Figma. The Figma node is `8-555`. Use `figma_get_design_context` and `figma_get_screenshot` tools to get the design specs and screenshot, then slice it into `src/app/about/page.tsx`.

Follow the existing patterns in the codebase:
- Use `framer-motion` for animations (`"use client"` directive)
- Reuse `Sidebar.tsx` component
- Match font usage (Geist, Montserrat, Martian Mono)
- Keep Tailwind styling consistent with other pages

After the About page, we'll continue with visual polish and any remaining Figma slicing.

---
