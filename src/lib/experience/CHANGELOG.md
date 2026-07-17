# Experience & Visual Language System Changelog

All notable changes to the portfolio design system are documented in this file.

---

## [2.0.0] - 2026-07-17

### Rationale & Design Goal
Sprint 2 establishes a unified, clean, and premium visual identity inspired by Apple, Vercel, and Linear. It standardizes styling, typography, spacing, elevations, and layout constraints globally.

---

### Architectural Decisions

#### 1. Style Sheet Decomposition
We split the large `globals.css` file into five clean, modular stylesheets under `src/styles/`:
- `globals.css`: Entry point importing tailwind and sub-stylesheets.
- `theme.css`: Core design system variables (radii, shadows, widths) and dark/light color systems.
- `typography.css`: Type scale utilities and global element resets.
- `components.css`: Native element overrides for button/input controls and card structures.
- `utilities.css`: Custom design helpers (focus-rings, glass panels, scroll bars).

#### 2. Three-Layer Color Architecture
Introduced a scalable, 3-layer color mapping pattern inside `theme.css`:
- **Layer 1 (Semantic Colors):** Maps hex colors to semantic variables (`--bg-level-0`, `--border-default`, `--text-primary`, `--accent`).
- **Layer 2 (Component Instance Tokens):** Binds semantic variables to component properties (`--btn-primary-bg`, `--card-border-hover`, `--input-bg`).
- **Layer 3 (Component Styles):** Consumes component tokens in CSS components and React components.

#### 3. Standardized Reusable UI Library (`src/components/ui/`)
Created a set of modular visual components:
- `Button`: Standardizes heights, paddings, loader states, and variants (primary, secondary, ghost, text) integrated with spring scale click wrappers.
- `Card`: Standardizes structural surface layouts (static, interactive, featured, compact) and border overlays.
- `Input` & `Textarea`: Standardizes form fields with focus states and error/success boundaries.

---

## [1.0.0] - 2026-07-17

### Rationale & Design Goal
Sprint 1 establishes a unified interaction language. It avoids layout fragmentation, optimizes rendering, and maintains a calm, premium, and editorial feel.

---

### Architectural Decisions
- **Decoupled Primitives:** Distinct motion, variants, and design tokens folders.
- **Composable Pattern-Based API:** A single `<Interactive />` component wraps hover and tap states.
- **Telemetry-Only Cursor Engine:** High-performance coordinates engine using Framer Motion `MotionValue`s to prevent React re-renders.
- **Graceful Accessibility:** Automatic reduced-motion overrides.
