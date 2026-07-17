/**
 * Centralized motion tokens for durations, easements, and physical spring settings.
 * 
 * All animations in the system must consume these values to maintain consistent visual rhythm.
 * 
 * @module motion
 */

/**
 * Standard animation durations (in seconds) for time-based transitions.
 */
export const TIMING = {
  hover: 0.15,      // Snappy micro-interactions (e.g. navigation underlines, quick color blends)
  quick: 0.25,      // Standard interactive changes (e.g. drop menus, grid items appearing)
  normal: 0.35,     // Default transition length (e.g. modal popups, expansion drawers)
  section: 0.6,     // Structural entrance fades for major scrolling section wraps
  hero: 1.0,        // Major cinematic entrance animations on initial page load
} as const;

/**
 * Custom Cubic Bezier curves mapping visual acceleration profiles.
 */
export const EASING = {
  /**
   * Premium decelerating curve. Fluid start with slow, clean deceleration.
   * Matches Apple's native layout motion.
   */
  smooth: [0.16, 1, 0.3, 1] as [number, number, number, number],

  /**
   * Snappy transition. Linear acceleration followed by rapid deceleration.
   * Excellent for quick menus and active interactive elements.
   */
  sharp: [0.4, 0, 0.2, 1] as [number, number, number, number],

  /**
   * Spring-like easing curve with a subtle overshoot for a physical, mechanical bounce.
   */
  gentle: [0.34, 1.56, 0.64, 1] as [number, number, number, number],

  /**
   * Entrance timing easing. High speed initialization for components entering the viewport.
   */
  entrance: [0.215, 0.61, 0.355, 1] as [number, number, number, number],

  /**
   * Exit timing easing. Slow start to rapid fadeout when elements leave the active view.
   */
  exit: [0.32, 0, 0.67, 0] as [number, number, number, number],
} as const;

/**
 * Physics-based spring setups determining tactile rebound and inertia.
 */
export const SPRING = {
  /**
   * Slow, heavy spring. Perfect for major header sheets and large banners.
   */
  soft: { mass: 1.2, stiffness: 120, damping: 20 },

  /**
   * Balanced spring. Optimal for grid cards, portfolio project details, and standard panels.
   */
  medium: { mass: 1.0, stiffness: 280, damping: 28 },

  /**
   * High-tension responsive spring. Specifically designed for button clicks/press events.
   */
  strong: { mass: 0.8, stiffness: 400, damping: 30 },

  /**
   * Ultra fast, high stiffness spring. Tailored for magnet target coordinate pulling.
   */
  snappy: { mass: 0.6, stiffness: 500, damping: 24 },
} as const;

export type TimingToken = keyof typeof TIMING;
export type EasingToken = keyof typeof EASING;
export type SpringToken = keyof typeof SPRING;
