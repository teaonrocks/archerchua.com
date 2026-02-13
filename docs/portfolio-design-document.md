# Portfolio Design Document

## 1. Overview

This document describes the design of my personal portfolio website for the Portfolio Development module. It outlines the goals, target audience, brand story, visual design, information architecture, and key interactions used in the site.

The live portfolio is implemented using Astro, React/TypeScript, and Tailwind CSS (v4), with shadcn/ui-style design tokens and a small set of interactive components (navigation animations, project modal, theme toggle).

---

## 2. Project Details

- **Student name:** Archer Chua
- **Module:** Portfolio Development
- **Project title:** Personal Portfolio Website
- **Repository:** `archerchua.com`

---

## 3. Target Audience

The primary target audience includes:

- **Prospective employers and interviewers** in the tech and digital product industries.
- **University admissions staff** evaluating my skills, experience, and projects.
- **Industry professionals and collaborators** who may be interested in working together.

Audience characteristics:

- Adults who are generally time-poor and scan content quickly.
- Comfortable with technology and used to modern web experiences.
- Interested in seeing practical project work, code quality, and design thinking.

Key implications for design:

- Content must be **concise and scannable** (clear headings, short paragraphs, bullets).
- Navigation must be **simple and obvious**, with minimal friction.
- Visual style should feel **professional, modern, and trustworthy**.

---

## 4. Brand Story & Purpose

My portfolio is a snapshot of how I think, build, and learn as a software engineer.

- I focus on **shipping real products** – from Cardano NFT infrastructure and Discord ecosystems to educational tools and AI banking prototypes – rather than one-off assignments.
- Each project is treated as a **case study**, documenting not just what I built, but the trade-offs, failures, and lessons behind it.
- The tone is **practical and honest**, grounded in real constraints like limited time, tight budgets, and production bugs.

**Purpose of the website:**

- Present my **skills, projects, and decision-making process** in a clear and credible way.
- Give potential employers and collaborators **quick access** to my best work, code, and contact details.
- Demonstrate that I can **design, build, and operate modern systems end to end** – from front-end UX to backend services, real-time infrastructure, and AI components.

---

## 5. Design Brief

### 5.1 Colour Scheme & Palette

The site uses a **neutral palette** defined with OKLCH colour tokens in `src/styles/global.css` (shadcn/ui-style CSS variables). In light mode the background is white with dark text; in dark mode this inverts to a dark background with light text. Primary accents (used for text, borders, and focus rings) are near-black in light mode and near-white in dark mode.

High-level palette behaviour (approximate hex values based on OKLCH tokens):

- **Background (light):** ~`#ffffff`
- **Background (dark):** ~`#252525`
- **Text / foreground (light):** ~`#171717`
- **Text / foreground (dark):** ~`#f8f8f8`
- **Primary (light):** ~`#171717` (near-black)
- **Primary (dark):** ~`#f8f8f8` (near-white)
- **Accent / secondary:** Soft greys such as ~`#f5f5f5` (light) and ~`#303030` (dark) for cards and hovers.

Design considerations:

- Use of **white buttons** (primary variant) on dark surfaces and dark buttons on light surfaces, keeping CTAs visually prominent but still minimal.
- Large areas of **neutral background** to maintain a clean, minimal look.
- **Accent colours** reserved for CTAs, links, focus rings, and hover states to guide attention.
- Sufficient **contrast ratios** for accessibility (aiming for WCAG AA where possible).

### 5.2 Typography

The typography uses **system sans-serif fonts** for performance and consistency across platforms, with a slightly more expressive weight treatment for headings.

- **Headings:** `system-ui`, typically resolving to `-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`, set in heavier weights for clear hierarchy.
- **Body text:** Same `system-ui` stack at regular weight for long-form content.
- **Code or technical snippets:** Browser default monospaced stack (e.g. `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`).

Typography guidelines:

- Limit to **2–3 font families** to avoid visual noise.
- Use **clear hierarchy** with size and weight differences between headings, subheadings, and body.
- Maintain comfortable **line height and spacing** for readability on both desktop and mobile.

### 5.3 Theme

The overall theme is **minimalistic and sophisticated**, with subtle references to technology.

- Plenty of **negative space** to keep the layout uncluttered.
- **Cards and sections** to group related content (projects, timeline, contact).
- Soft shadows and subtle animations to suggest depth without distraction.

The site should look like a **professional product landing page** rather than a student assignment.

---

## 6. Information Architecture & Site Map

The portfolio is designed primarily as a **one-page experience** with sections (hero, timeline, projects), plus dedicated project pages.

[![](https://mermaid.ink/img/pako:eNpllN1u4jAQhV_F8t7iklB-ClpVKkmrViq0EtFerOFiSNzE28SDHIfdLuLd14lTtgFfWLG_M2dGGdsHGmMi6Iy-5fg7zkAbEoVrRey4449YiO9b3b_tkw1h7JbM-aPQSPrkSRmNm1bXoIDfbbEylkWyELlULvIb1LsdZchfNf4SsSnJys4SlVPu2t2O-J4_IBqhre8KYwk5eZbqvdY4VdioXn0egE5AIVk-RGQhlZEqdaV_2vZjp2DqzbDCKTYdkwF_lAWQUJYx6oTM0ZRnFpnlLHGcbfFUa2twzZ_UHmUsouwyvXTIZBd5h_wZS0OkIiYTZGVAn-fNLWdSMctZWfOuwYi_BPOA_IgW5BWDs1iMtzHbm4LtMO6GjfmLEiSEDwKGQNO381glWAIfDAwDZiw__XfXnSWPcEeWsJcp1I0kc9BtjqUTuEPUNK0L5u15uSTB__NxCUMeZcIaRpimueiye77ArcwFWQhVbWiPplomdGZ0JXq0ELqAekkPddCamtpnTWf2U4nKaMjXtOfQ6S7U-OByrGlc6X0bsIVSlq28RhrU-2oHsW1tLRh7J6Ls7fpChl4Njmt1tOXtQP1ELD4r1FilGZ29QV7aVbVLwIhQQqqhOO1qoRKhA6yUoTN_OmhM6OxA_9DZYOhdjYaT6dSfDHxvPBlZ-mFVY-9qej0Zjv2JPx3feINjj_5t0npXN5OR92X4PSoSaVAv3JvQPA3Hf-7aSCI?type=png)](https://mermaid.live/edit#pako:eNpllN1u4jAQhV_F8t7iklB-ClpVKkmrViq0EtFerOFiSNzE28SDHIfdLuLd14lTtgFfWLG_M2dGGdsHGmMi6Iy-5fg7zkAbEoVrRey4449YiO9b3b_tkw1h7JbM-aPQSPrkSRmNm1bXoIDfbbEylkWyELlULvIb1LsdZchfNf4SsSnJys4SlVPu2t2O-J4_IBqhre8KYwk5eZbqvdY4VdioXn0egE5AIVk-RGQhlZEqdaV_2vZjp2DqzbDCKTYdkwF_lAWQUJYx6oTM0ZRnFpnlLHGcbfFUa2twzZ_UHmUsouwyvXTIZBd5h_wZS0OkIiYTZGVAn-fNLWdSMctZWfOuwYi_BPOA_IgW5BWDs1iMtzHbm4LtMO6GjfmLEiSEDwKGQNO381glWAIfDAwDZiw__XfXnSWPcEeWsJcp1I0kc9BtjqUTuEPUNK0L5u15uSTB__NxCUMeZcIaRpimueiye77ArcwFWQhVbWiPplomdGZ0JXq0ELqAekkPddCamtpnTWf2U4nKaMjXtOfQ6S7U-OByrGlc6X0bsIVSlq28RhrU-2oHsW1tLRh7J6Ls7fpChl4Njmt1tOXtQP1ELD4r1FilGZ29QV7aVbVLwIhQQqqhOO1qoRKhA6yUoTN_OmhM6OxA_9DZYOhdjYaT6dSfDHxvPBlZ-mFVY-9qej0Zjv2JPx3feINjj_5t0npXN5OR92X4PSoSaVAv3JvQPA3Hf-7aSCI)

### 6.1 Top-Level Navigation

Planned navigation items:

- **Home** – Hero section with name, role, and primary CTA.
- **About** – Scrolls to the Timeline section (`#about`), which presents education, experience, and a brief narrative about me.
- **Projects** – Scrolls to the Projects section (`#projects`) showing key work with short descriptions.
- **Contact** – Accessed via CTA buttons and social links (email copy-to-clipboard) in the navigation and footer.

The top navigation is a fixed bar with smooth scrolling to the timeline (About) and projects sections on the landing page. It also includes a Socials dropdown (GitHub/LinkedIn/Twitter + email copy action) and a theme toggle dropdown (Light / Dark / System). On smaller screens, a **mobile nav / hamburger menu** is used (left-side sheet).

### 6.2 Project Pages

Each project can have its own detail page using the `ProjectLayout` in Astro.

Typical project page structure:

1. **Hero section** with project title, role, and quick facts (tech stack, timeframe).
2. **Overview** – Problem statement, goals, and target users.
3. **Process** – Brief notes on research, design iterations, and implementation.
4. **Key features** – Bullet list or screenshots highlighting the most important aspects.
5. **Reflection** – What I learned and potential improvements.

Implementation notes:

- **Project metadata** (title, tags, links, highlights, images/video) is stored in `src/lib/projects.ts`.
- **Case study body content** is stored in `src/content/projects/*.mdx` and rendered via `astro:content` (`getEntryBySlug`). If an MDX entry is missing, the page shows a friendly “still writing” placeholder.
- The dynamic route uses `getStaticPaths()` and skips case-study pages when `hasCaseStudy === false`.

---

## 7. Layout & Components

The site uses Astro pages and layouts with reusable React/TSX components.

Key components:

- `Hero` – Introduces name, role, and key CTA (e.g. View Projects / Contact Me).
- `AnimatedNav` and `MobileNav` – Provide responsive and animated navigation.
- `ModeToggle` – Theme selection (Light/Dark/System) via a dropdown menu.
- `Projects` – Featured projects grid with category filters and a details modal (dialog).
- `ProjectGallery` – Optional image/video gallery on case-study pages with a lightbox viewer.
- `Timeline` – Shows education and experience in chronological order.
- `InteractiveBackground` – Fixed grid background with a cursor glow effect on desktop.
- `Footer` – Contains social links and copyright.
- UI primitives (`button`, `card`, `tabs`, etc.) – Provide consistent, reusable design patterns.

Layout principles:

- **Above the fold:** Clear identity and next action.
- **Consistent spacing system** (e.g. 4px or 8px increments) across sections.
- **Responsive grid** that adapts between single-column (mobile) and multi-column (desktop) layouts.

---

## 8. Interaction & Behaviour

Interaction design focuses on being **smooth, responsive, and not overwhelming**.

Key interaction patterns:

- **Smooth scrolling** to sections when nav items are clicked.
- **Hover and focus states** for all interactive elements (links, buttons, cards).
- **Motion-based microinteractions** (hover/tap scaling, entrance animations, scroll reveal) using the `motion` library.
- **Project exploration without leaving the page**: category filter “chips”, click-to-open project modal, and deep-link to `/projects/[slug]` for case studies.
- **Project gallery lightbox** on case-study pages (keyboard arrows + escape supported).
- **Interactive background**: subtle grid + cursor glow (desktop) to add depth without competing with content.
- **Theme switching** (Light/Dark/System) by toggling the `dark` class on `<html>` and persisting the selection in local storage.
- **Toast feedback** for copy-to-clipboard actions (email) using Sonner.
- **Responsive navigation** that collapses to a hamburger menu on smaller screens.

Accessibility considerations:

- Keyboard navigability for main links and buttons.
- Sufficient color contrast for text and controls.
- Descriptive alt text for images and illustrations where applicable.

---

## 9. Content Strategy

Content should highlight a **curated selection of projects** with enough depth to show process and thinking.

Content types:

- **Project case studies** sourced from the files in `src/content/projects`.
- **Short bio and skills** section focused on tools, languages, and frameworks I use (e.g. TypeScript, React, Astro, UI design tools).
- **Social and contact links** (GitHub, LinkedIn, email) to make follow-up easy.

Tone of voice:

- **Clear and honest**, avoiding jargon where unnecessary.
- First person voice to sound personal, but still professional.

---

## 10. Technical Implementation Summary

- **Framework:** Astro (pages + layouts) with React/TypeScript components.
- **Styling:** Tailwind CSS v4 with CSS variables/tokens in `src/styles/global.css` (OKLCH palette, shadcn/ui conventions).
- **UI primitives:** shadcn/ui-style components in `src/components/ui/*` (Radix UI + utility helpers).
- **Animation & feedback:** Motion (`motion/react`) for UI animation; Sonner toasts for lightweight notifications.
- **Routing & content:** Landing page at `src/pages/index.astro`; dynamic project routes at `src/pages/projects/[slug].astro`; MDX content for case studies in `src/content/projects/*.mdx` rendered via `astro:content`.
- **Project metadata:** `src/lib/projects.ts` is the source of truth for the projects list, tags, links, and highlights.
- **Build tool & package manager:** `pnpm` with scripts defined in `package.json`.

Rationale:

- Astro provides fast, content-focused pages with good developer experience.
- React components allow for interactive sections (navigation, carousels, animations).
- MDX content keeps case studies easy to maintain and extend.
- Tailwind + design tokens provide a consistent, scalable UI system without bespoke per-component CSS.

---

## 11. Future Enhancements

Planned or potential improvements:

- Expand the **project library** with more detailed write-ups and screenshots.
- Introduce a simple **blog or notes section** for writing about learning and experiments.
- Add **analytics** to better understand how visitors interact with the portfolio.

---

## 12. Conclusion

This design document defines the goals, audience, and design decisions for my portfolio website. It ensures that visual style, structure, and interactions remain aligned with the purpose of the site: to present my work clearly and professionally to potential employers, interviewers, and collaborators.
