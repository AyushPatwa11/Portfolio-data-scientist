# Experience System Changelog

## [1.0.0] - 2026-07-17

### Rationale & Design Goal
The Experience System provides a highly structured interaction language for the portfolio. It avoids layout fragmentation, optimizes rendering, and maintains a calm, premium, and editorial feel.

---

### Architectural Decisions

#### 1. Decoupled Primitives (`tokens.ts` vs `motion.ts`)
Visual constants (border radius, shadows, blurs) are isolated from animation parameters (timings, ease profiles, springs). This ensures that styling refines independently of motion physics.

#### 2. Composable Pattern-Based API
Instead of exporting multiple unique UI components (e.g. `HoverCard`, `HoverButton`, `HoverLink`), we implement a single, composable `<Interactive />` component that accepts a semantic `pattern` string. This scales easily as new layouts are developed.

#### 3. Telemetry-Only Cursor State Engine
We built the cursor system purely as an event telemetry engine (`CursorProvider` and `useCursorState`).
- We avoid drawing visual cursor markups (like dots, rings, or glows) to maintain a zero-overhead footprint.
- All coordinates update via Framer Motion `MotionValue` bounds without calling React hooks on every mouse tick. This eliminates unnecessary React re-renders.

#### 4. Strict Accessibility Safeguards
Every component incorporates support for `prefers-reduced-motion` at the wrapper level. If a user sets the preference, animation offsets are zeroed and durations are set to zero instantly.

---

### Version 1 Exclusions (Deferred Features)

The following features were intentionally excluded from Version 1 to prioritize stability, performance, and clean UX:
- **Fancy Cursor Rendering:** Deferred to a future release to evaluate performance impact.
- **Scroll Hijacking & Smooth Scrolling Engines (e.g. Lenis):** Bypassing native scroll behavior causes accessibility barriers for keyboard/wheel navigators and increases memory load.
- **Particle Backgrounds / WebGL Renders:** Deemed too distracting for a calm, editorial developer portfolio.
- **Parallax Scroll Effects:** Removed to focus scroll entry animations purely on high-performance entrance reveals.
- **3D Card Tilts:** Avoids playful, busy effects to preserve a premium visual style.

---

### Future Roadmap
1. **Visual Custom Cursor Wrapper:** Introduce a decoupled rendering layer consuming `CursorContext` states when V2 layouts are fully validated.
2. **Subtle Entry Stagger Transitions:** Integrate sequenced card lists using standard stagger delay presets.
3. **Optimized Image Blurring:** Hook state changes directly to image visibility states.
