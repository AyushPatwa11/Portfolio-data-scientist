/**
 * Design system visual tokens for the portfolio.
 * 
 * These constants form the core aesthetic guidelines for layout,
 * elevations, blur scales, and depth layering.
 * 
 * @module tokens
 */
export const DESIGN_TOKENS = {
  /**
   * Border radius tokens for consistency across interactive surfaces, badges, and modals.
   */
  radius: {
    none: '0px',
    xs: '2px',       // Micro components (tags, badges, inline labels)
    sm: '4px',       // Small components (tooltips, small buttons, custom focus markers)
    md: '8px',       // Default UI elements (standard buttons, text inputs, card containers)
    lg: '12px',      // Primary containers (major grid cards, panel structures, modals)
  },

  /**
   * Elevation shadow configurations tailored for both dark and light modes.
   */
  shadows: {
    none: 'none',
    subtle: '0 2px 8px rgba(0, 0, 0, 0.04)',
    elevated: '0 8px 24px rgba(0, 0, 0, 0.06)',
    premium: '0 16px 40px rgba(0, 0, 0, 0.08)',
  },

  /**
   * Glassmorphism backdrop-blur scales for navbars, sticky headers, and floating overlays.
   */
  blur: {
    none: '0px',
    sm: '4px',
    md: '8px',
    lg: '16px',
  },

  /**
   * Semantic opacity presets for micro transitions and hierarchy states.
   */
  opacity: {
    hidden: 0,
    subtle: 0.3,     // Inactive elements, disabled status indicators, placeholders
    muted: 0.6,      // Secondary information labels, quiet icons, un-hovered states
    visible: 1,      // Primary copy, active focus fields, highlighted details
  },

  /**
   * Depth stacking levels to prevent z-index collision issues.
   */
  zIndex: {
    base: 0,
    above: 10,       // Hover highlight sheets, floating item overlays
    sticky: 100,     // Floating header bar, primary navigation dock
    overlay: 500,    // Portal drawers, global warning backdrops, modal popups
    cursor: 9999,    // Custom cursor telemetry capture layer
  },

  /**
   * Motion offset spacings for transitions (e.g. translate-y offset).
   */
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
  },

  /**
   * Structural widths for typographic prose, article feeds, and layout sections.
   */
  widths: {
    prose: '65ch',
    article: '80ch',
    section: '1200px',
  }
} as const;

export type DesignTokens = typeof DESIGN_TOKENS;
export type BorderRadiusToken = keyof typeof DESIGN_TOKENS.radius;
export type ShadowToken = keyof typeof DESIGN_TOKENS.shadows;
export type BlurToken = keyof typeof DESIGN_TOKENS.blur;
export type OpacityToken = keyof typeof DESIGN_TOKENS.opacity;
export type ZIndexToken = keyof typeof DESIGN_TOKENS.zIndex;
export type SpacingToken = keyof typeof DESIGN_TOKENS.spacing;
export type WidthToken = keyof typeof DESIGN_TOKENS.widths;
