# Harvard-inspired Experience Refresh Report

## 1. Design application summary

### 1.1 Design tokens (conceptual)
- **Crimson Core**: deep crimson accent applied to primary calls-to-action, active navigation, and key dividers to echo Harvard’s visual heritage.
- **Ink Charcoal**: rich charcoal for headlines, body copy, and iconography to ensure high legibility on light surfaces.
- **Parchment Neutrals**: warm white (`background shell`) and soft grey (`canvas veil`) backgrounds that create editorial contrast and allow typography to lead.
- **Serif Display**: Source Serif Pro assigned to all primary headings for a collegiate tone; serif weight shifts between medium and semibold depending on hierarchy.
- **Scholarly Sans**: Inter used for body copy, captions, navigation, and data tables, prioritising clarity at varied breakpoints.
- **Rhythm Spaces**: `Quad spacing` (4rem) for section padding, `Double spacing` (2rem) for component gutters, and `Line flow` (1.75 line-height) for comfortable reading.
- **Soft Definition**: `Border whisper` (1px translucent dividers) and `Ambient lift` (subtle shadow) to separate editorial cards without heavy boxes.

### 1.2 Key components
- **Global header**: sticky banner with optional crimson alert strip, centred logo lockup, disciplined single-depth navigation, and mobile drawer with focus trapping.
- **Hero headline**: serif title, uppercase kicker, and concise lead paragraph anchored in a border-lifted panel to start each section with authority.
- **Section sidebar**: sticky desktop index with uppercase label and pill-shaped links; mobile variant reflows under content for scrolling journeys.
- **Breadcrumb trail**: lightweight uppercase crumb path with crimson links and muted separators (`›`) to maintain orientation without visual weight.
- **Editorial cards**: text-forward blocks with small uppercase eyebrow, serif headline, and slim dividers; emphasised in Community updates for newsroom cadence.
- **Global CTA bar**: crimson capsule with dual button group (solid primary, outlined secondary) pinned above footer to reinforce admissions pathways.
- **Footer suite**: three-column layout covering campus identity, quick links, and connect prompt, concluding with understated copyright strip.

### 1.3 Layout behaviours
- **Desktop**: centred 6xl container, hero preceding two-column body, sticky sidebar pinned at 32px offset, and spacious card grids that shift to two columns.
- **Mobile**: navigation collapses into drawer with overlay, sidebar content repositions beneath articles, grid cards collapse to single stack, and inputs/buttons respect 44px touch target.
- **Typography**: headings maintain serif stack with tightened tracking, while body copy stays relaxed; breadcrumb and navigation rely on uppercase sans for structure.

### 1.4 Accessibility & SEO checklist
- Skip link exposed on focus, keyboard-visible rings applied across interactive elements, and drawer prevents background scroll when open.
- Color contrast validated for crimson-on-white and charcoal-on-parchment pairings exceeding AA requirements.
- Breadcrumbs use semantic `<nav>` + `<ol>`, while single `<h1>` per page leads the document outline.
- Meta descriptions harmonised with an informative tone (“Youngji International School in Seoul…”) to boost search relevance and snippet consistency.
- Links rewritten with meaningful anchor text (“Read update →”, “View notices →”) and contact addresses converted to accessible anchors.

## 2. Application checklist (per page)
- ✅ Unique H1 plus concise lead sentence within hero block.
- ✅ Consistent section spacing: hero (top), content grid (middle), CTA (bottom).
- ✅ Sidebar indicates section scope with active item styling and mobile relocation.
- ✅ Breadcrumb renders “Home › Section › Page” path with final crumb marked `aria-current`.
- ✅ Link/btn states: default charcoal, hover crimson tint, focus ring in crimson with 2px outline, minimum 44px hit area.

## 3. Inspection items for QA
- Header banner height (desktop & mobile), alignment of logo lockup, and drawer open/close including ESC key handling.
- Sidebar scroll containment: sticky offset on desktop, collapsible relocation below content on mobile.
- Community cards: responsive wrapping, equal padding, and hover/focus transitions.
- CTA bar: contrast ratio of white-on-crimson, button spacing, and responsive stacking behaviour.
- Student search table: live result count updates, table responsiveness, and focus order through filter input.

## 4. File-by-file change log

### Partials & scripts
- `partials/header.html` — Rebuilt header with crimson alert strip, Harvard-style typography, and mobile drawer for accessible navigation.
- `partials/footer.html` — Expanded footer into three-column layout with quick links and admissions CTA for consistent closing experience.
- `assets/js/main.js` — Updated navigation builder, sidebar handling, breadcrumb styling, CTA injection, and mobile drawer controls.

### Root & community
- `index.html` — Applied new hero, two-column layout, mobile sidebar, and global CTA shell on the home page.
- `community/index.html` — Added editorial highlight cards, updated hero, and unified layout structure.
- `community/news-2/index.html` — Migrated to new hero/sidebar system with serif headings and balanced spacing.
- `community/notification/index.html` — Converted bullet notices into text-first cards with dividers and refreshed layout.
- `community/campus-life/index.html` — Updated hero, typography, and content container for contact listings.
- `community/extension-class-center/index.html` — Applied new layout and serif hierarchy for branch school overview.
- `community/search-for-student/index.html` — Rebuilt page with hero, responsive table styling, rounded search control, and CTA slot.

### Admissions
- `admission/index.html` — Introduced hero block, updated content wrapper, and consistent CTA placeholder.
- `admission/sub1/index.html` — Applied refreshed layout and typography for scholarship overview.
- `admission/sub2/index.html` — Updated admission procedure page to new design system.
- `admission/sub3/index.html` — Styled tuition details with serif headings and consistent spacing.
- `admission/sub4/index.html` — Migrated application form guidance to new layout.
- `admission/sub5/index.html` — Applied refreshed structure for requirements summary.

### Basic education
- `basic-education/index.html` — Added hero lead, modernised article styling, and CTA.
- `basic-education/principals-message/index.html` — Updated message page to Harvard typography.
- `basic-education/preschool/index.html` — Converted to new structure with serif headings and list styling.
- `basic-education/elementary/index.html` — Applied refreshed layout and typography.
- `basic-education/middle-junior/index.html` — Updated content block and spacing.
- `basic-education/high-senior/index.html` — Styled senior program page with consistent hero and article design.

### e-Education & extensions
- `e-education/index.html` — Added unified hero, sidebar behaviour, and CTA slot.
- `e-education/online-school/index.html` — Applied Harvard layout to director’s message.
- `e-education/online-school-k-12/index.html` — Updated extension description with new design tokens.
- `e-education/online-college/index.html` — Refreshed accreditation page layout.
- `e-education/online-examination/index.html` — Applied consistent structure for examination guidance.
- `new-page-1/index.html` — Styled extension coordinator page under refreshed system.
- `new-page-2/index.html` — Applied same improvements for extension teacher page.

### About Youngji
- `youngji_about-us/index.html` — Crafted Harvard hero, spacing, and sidebar for section landing.
- `youngji_about-us/vision-and-mission/index.html` — Updated mission/vision narrative with serif hierarchy.
- `youngji_about-us/principals-message/index.html` — Refined founder message layout and typography.
- `youngji_about-us/faculty-and-staff/index.html` — Applied new structure to team overview.
- `youngji_about-us/history/index.html` — Implemented hero milestone styling and CTA.
- `youngji_about-us/school-counseling/index.html` — Updated counseling content with new layout.
- `youngji_about-us/school-administrator/index.html` — Applied refreshed article style for calendar/admin details.

### Documentation
- `docs/harvard-refresh-report.md` — Documented design tokens, patterns, QA checklist, and change log for handover.

## 5. Before/after screenshot focus points
- **Home (`/`)**
  1. Header now features crimson alert bar and serif logotype lockup.
  2. Hero block switched to serif headline with kicker and expanded spacing.
  3. Sidebar styling updated with uppercase label and pill links.
  4. Body copy sits within rounded editorial card instead of plain panel.
  5. Global CTA banner anchors the page with admissions actions.

- **History (`/youngji_about-us/history/`)**
  1. Hero gains Harvard serif styling and section kicker.
  2. Breadcrumb shows uppercase crumbs with subtle separators.
  3. Sidebar highlights active history link with crimson accent.
  4. Milestones list uses border-left timeline aesthetic.
  5. CTA banner introduces admissions prompt below content.

## 6. Alternate palette suggestion
- **Low-saturation palette**: Swap Crimson Core for `Garnet Mist` (#7F2430) and use `Deep Slate` (#1B1F2A) for text to reduce saturation while keeping contrast.
- **High-contrast variant**: Pair `Ivory Mist` (#F5F5EC) backgrounds with `Oxford Blue` (#0B1D3C) typography and keep `Bright Garnet` (#C2363B) for CTAs to maximise accessibility in bright environments.
