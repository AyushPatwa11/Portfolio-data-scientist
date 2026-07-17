# Visual Language System Guidelines

This manual defines the design guidelines and hierarchy rules for using the Portfolio V2 Visual Language. It acts as the team's guide to keep our interfaces clean, premium, modern, and editorial.

---

## 1. Visual Hierarchy & Surface System

Visual separation must be communicated through **Surface Levels** rather than heavy shadows or complex gradients. The interface is organized around four explicit surface layers:

- **Surface Level 0 (Base Background):** `var(--bg-level-0)`. Soft editorial off-white (`#fcfcfd`) in light mode / Zinc dark (`#09090b`) in dark mode. Used for global layout backdrops.
- **Surface Level 1 (Default Card / Grid Item):** `var(--bg-level-1)`. Pure white (`#ffffff`) in light mode / Zinc surface (`#121214`) in dark mode. Standard surface for cards, banners, and default sheets.
- **Surface Level 2 (Elevated Layouts):** `var(--bg-level-2)`. Light grey (`#f4f4f5`) / Zinc elevated (`#1c1c1f`). Used for side panels, list categories, code snippets, and active container states.
- **Surface Level 3 (Overlays / Menus):** `var(--bg-level-3)`. Zinc border-dark (`#e4e4e7` / `#27272a`). Used for dialog structures, portal layers, and active dropdown items.

---

## 2. Typography Scales & Readability

The typography scale uses relative sizes and restricted horizontal space to maximize line legibility.

### Type Scale Rules:
1. **Display XL:** Clamp size 40px to 72px. Reserved exclusively for hero titles.
2. **Display L:** Clamp size 32px to 52px. Reserved for section titles and main banners.
3. **H1, H2, H3:** Standardized header hierarchies (H1 for subheadings, H2 for cards, H3 for list headers).
4. **Body L (18px) & Body (14px):** Standard copy heights.
5. **Small (12px) & Caption (10px Mono):** Technical badges, tags, timestamps.

### Key Rules for Text:
- **Maximum Reading Width:** Paragraph wraps should never exceed `65ch` or `max-w-prose` width. This prevents visual tracking fatigue.
- **Display Tracking:** Headings (H1 to Display XL) must use `tracking-tight` or `tracking-tighter` to keep character rhythm dense and premium.
- **Line Heights:** Headings must use `leading-tight` or `leading-snug`. Paragraphs must use `leading-relaxed` (1.5x minimum spacing).

---

## 3. Button States & Transitions

Buttons must share a single, unified language and transition set. 

### Configurations:
- **Primary:** Tactile dark solid block (`bg-text-primary`) that smoothly shifts to `bg-accent text-white` on hover. Active clicks apply a spring scale down to `scale: 0.98`.
- **Secondary:** Clean border outline. Hover shifts background to `bg-surface-elevated` and border to `border-hover`.
- **Ghost:** No border. Transparent background. Hover reveals subtle surface color.
- **Tactile states:** All states (Hover, Active, Focus, Disabled, Loading) must utilize standard tokens. Keyboard selectors must trigger `focus-ring` outlines.

---

## 4. Card Design Philosophy

Cards should feel like unified containers mapping to specific behavioral patterns:
1. **Static Card (`.card-static`):** Standard borders, surface level 1, background, default spacing (`p-6`). Used for passive information display.
2. **Interactive Card (`.card-interactive`):** Inherits static styles but reveals a border change (`border-hover`) and elevation shift (`shadow-elevated`) on hover.
3. **Featured Card (`.card-featured`):** Highlights core details with a subtle accent border tint (`border-accent/30`) and surface level 2 background.
4. **Compact Card (`.card-compact`):** Reduced spacing padding (`p-4`). Ideal for categorizing high-density grid fields.

---

## 5. Standardized Iconography

Icons must always remain consistent across all pages:
- **Sizes:**
  - Small: `14px` (for tags, inline actions, social badges)
  - Medium: `18px` (default for section headers, card anchors)
  - Large: `24px` (for hero blocks or category banners)
- **Stroke Weights:** Maintain default stroke-width at `1.75`. Avoid thick weights that clash with clean fonts.
- **Interaction:** Hovering over links or buttons triggers smooth transition of lucide icon colors to `var(--accent)`.

---

## 6. Layout Spacings & Rhythm

- **Vertical Section Spacing:** Always separate major sections using standard vertical padding (`py-16 md:py-24`) and horizontal boundaries (`max-w-7xl px-4 md:px-8`).
- **Vertical Grid Rhythm:** Separate title headers from content containers by exactly `mb-12`.
- **Content Blocks:** Use a standard content width of `max-w-4xl` for general layouts, keeping details aligned and centered.

---

## 7. Do's and Don'ts

### DO:
- Use surface levels (`bg-level-1`, `bg-level-2`) to show page hierarchy.
- Wrap inline text inside standard reading constraints (`max-w-prose`).
- Use the visual tokens (`DESIGN_TOKENS`) in code to keep properties consistent.
- Ensure focus rings are fully visible for keyboard navigators.

### DON'T:
- Mix styling shadows or add random hex colors to components.
- Rotate or bounce icons. Keep hover effects simple and professional.
- Animate margin/padding sizes, which forces browser reflows.
- Suppress keyboard outlines. Natural focus guides must always be present.
