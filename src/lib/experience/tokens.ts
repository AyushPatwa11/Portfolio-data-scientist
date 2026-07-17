/**
 * Centralized Visual Language Primitives and Design Tokens.
 * 
 * Maps variables directly to theme variables for consistency in both
 * TypeScript scripts and Framer Motion variants.
 * 
 * @module tokens
 */
export const DESIGN_TOKENS = {
  /**
   * Surface levels defining interface hierarchy.
   */
  surfaces: {
    level0: 'var(--bg-level-0)', // Primary background ( editorial light-grey / dark-neutral )
    level1: 'var(--bg-level-1)', // Standard surface container ( card elements, base layouts )
    level2: 'var(--bg-level-2)', // Elevated surface container ( sidebar panel, hover highlights )
    level3: 'var(--bg-level-3)', // Over-the-top surface container ( active dropdowns, dialogs )
  },

  /**
   * Border radius tokens.
   */
  radius: {
    none: '0px',
    xs: '2px',       // Badges, focus indicators
    sm: '4px',       // Inputs, badge buttons
    md: '8px',       // Default buttons, cards
    lg: '12px',      // Portals, large modals
    xl: '16px',      // Accent cards, special layouts
    full: '9999px',  // Circular indicators, pills
  },

  /**
   * Elevation shadow configurations.
   */
  shadows: {
    none: 'none',
    subtle: 'var(--shadow-subtle)',     // Static subtle card outline depth
    elevated: 'var(--shadow-elevated)', // Hover states or dropdown sheets
    floating: 'var(--shadow-floating)', // Hover on primary CTAs, popup dialogs
    premium: 'var(--shadow-premium)',   // Full overlay panels, modals
  },

  /**
   * Glassmorphism backdrop-blur scales.
   */
  blur: {
    none: '0px',
    sm: '4px',
    md: '8px',
    lg: '16px',
  },

  /**
   * Semantic opacity scales.
   */
  opacity: {
    hidden: 0,
    subtle: 0.3,     // Inactive elements, helper info
    muted: 0.6,      // Secondary descriptions
    visible: 1,      // Primary copy
  },

  /**
   * Depth stacking z-indices.
   */
  zIndex: {
    base: 0,
    above: 10,       // Hover highlighting overlays
    sticky: 100,     // Navigation bars
    overlay: 500,    // Modals, portal drawers
    cursor: 9999,    // Custom cursor telemetry capture layer
  },

  /**
   * Motion offset spacings for transitions.
   */
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
  },

  /**
   * Structural widths.
   */
  widths: {
    prose: 'var(--width-prose)',       // 65ch max-width reading bounds
    article: 'var(--width-article)',   // 80ch max-width article layout
    section: 'var(--width-section)',   // 1200px max-width section grid
    content: 'var(--width-content)',   // 960px max-width readable columns
    dashboard: 'var(--width-dashboard)', // 1440px max-width large dashboard layout
  }
} as const;

export type DesignTokens = typeof DESIGN_TOKENS;
export type SurfaceLevelToken = keyof typeof DESIGN_TOKENS.surfaces;
export type BorderRadiusToken = keyof typeof DESIGN_TOKENS.radius;
export type ShadowToken = keyof typeof DESIGN_TOKENS.shadows;
export type BlurToken = keyof typeof DESIGN_TOKENS.blur;
export type OpacityToken = keyof typeof DESIGN_TOKENS.opacity;
export type ZIndexToken = keyof typeof DESIGN_TOKENS.zIndex;
export type SpacingToken = keyof typeof DESIGN_TOKENS.spacing;
export type WidthToken = keyof typeof DESIGN_TOKENS.widths;
