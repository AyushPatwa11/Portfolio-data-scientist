# Motion & Interaction Guidelines

This guide establishes the rules for using the Experience System across the portfolio. It acts as the single source of truth to guarantee interaction harmony, accessibility, and high performance.

---

## UI Component Reference Matrix

| UI Component Category | Interaction Pattern | Scroll Entrance Variant | Timing Token | Easing / Spring Token | Usage Rules & Restraints |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Hero Title / Heading** | None | `fade-up` | `TIMING.hero` | `EASING.smooth` | Execute once on load. Do not replay. Avoid translation values greater than `16px`. |
| **Primary CTAs & Buttons** | `interactive-element` | `fade-up` | `TIMING.hover` | `SPRING.strong` | Opt-in `magnetic` pull for central actions only. Do not nest adjacent magnetic objects. |
| **Feature / Project Cards**| `emphasized-element` | `fade-up` | `TIMING.quick` | `SPRING.medium` | Vertical translation on hover must not exceed `4px`. Enable magnetic properties on main elements only. |
| **Navigation Headers & Links**| `navigation-element` | None | `TIMING.hover` | `EASING.smooth` | Restrained opacity changes. Never scale or translate structural navigation items on hover. |
| **Inline Media & Images** | `media-element` | `scale` | `TIMING.normal`| `EASING.smooth` | Apply zoom (`scale: 1.03`) within clip-overflow boundaries. Never tilt, rotate, or shake. |
| **Expansion Triggers (FAQ)** | `reveal-element` | None | `TIMING.normal`| `EASING.smooth` | Height adjustments only. Never scale active disclosure anchors. |
| **Modal Boards & Overlays** | None | `scale` | `TIMING.normal`| `EASING.entrance` | Gentle container scaling. Backdrop fades independently. |

---

## Essential Principles

### 1. The Rule of Functional Purpose
An animation should never be introduced just because "it looks cool." Animation exists to guide attention, define spatial context, or convey state changes. If an animation does not improve usability, it must be omitted.

### 2. Physical Consistency
All movement should share similar physical properties. Spring dynamics (`SPRING`) dictate element changes, while time-based bezier overrides (`EASING.smooth`) manage fades and clip reveals. Mixing unrelated curves or introducing linear movements breaks visual consistency.

### 3. Graceful Accessibility
Accessibility is not an afterthought:
- System overrides like `prefers-reduced-motion` must immediately swap motion parameters to instant configurations (`duration: 0`, offsets to zero).
- Custom key event listeners must mirror click handlers. Focus guidelines must stay visible for assistive technology users.

### 4. GPU Thread Isolation
Animate exclusively on hardware-accelerated composite attributes:
- **Allowed:** `opacity`, `transform` (scale, translate, rotate).
- **Prohibited:** `width`, `height`, `margin`, `padding`, `top`, `left`. Modifying geometry attributes forces main-thread layout recalculations, which drops frames.

---

## Common Implementation Mistakes to Avoid

1. **Adjacent Magnetic Targets:** Placing magnetic anchors too close together (within 100px) causes the cursor telemetry tracking system to snap erratically between targets, producing visual jitter.
2. **Infinite Entrance Loops:** Setting viewport thresholds too close to the screen edge or allowing entries to refire (`once: false`) disrupts reading flow as users scroll. Set `once: true` by default.
3. **Hardcoding Transition Metrics:** Inlining numerical durations (e.g. `duration: 0.3`) inside UI sections bypasses the token system, leading to design fragmentation. Always pull from `TIMING`, `EASING`, and `SPRING`.
