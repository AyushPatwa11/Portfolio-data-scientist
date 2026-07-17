import * as React from 'react';

/**
 * Valid interaction patterns for custom hover, focus, active, and magnetic behaviors.
 */
export type InteractionPattern =
  | 'interactive-element'  // Snappy clickable assets (buttons, icons, primary anchors)
  | 'emphasized-element'   // High-importance containers (featured project cards, item cards)
  | 'navigation-element'   // Structural menu elements (header links, tab selectors)
  | 'reveal-element'       // Disclosure components (accordions, secret details panel)
  | 'media-element';       // Static visual layouts (images, visual blocks)

/**
 * Prop interface for the `<Interactive>` component.
 */
export interface InteractiveProps extends Omit<React.ComponentPropsWithoutRef<'div'>, 'onDrag' | 'onDragStart' | 'onDragEnd' | 'onAnimationStart'> {
  /**
   * The semantic pattern representing this element's behavior.
   */
  pattern: InteractionPattern;

  /**
   * Enable physical magnetic pull behavior.
   * Best restricted to primary CTAs and featured items.
   */
  magnetic?: boolean;

  /**
   * Inner content to be wrapped.
   */
  children: React.ReactNode;
}

/**
 * Supported reveal styles for viewport scrolling entries.
 */
export type RevealVariant = 'fade' | 'fade-up' | 'fade-down' | 'scale';

/**
 * Prop interface for the `<Reveal>` component.
 */
export interface RevealProps extends Omit<React.ComponentPropsWithoutRef<'div'>, 'onDrag' | 'onDragStart' | 'onDragEnd' | 'onAnimationStart'> {
  /**
   * The animation preset to use when entering the viewport.
   * @default 'fade-up'
   */
  variant?: RevealVariant;

  /**
   * Animation delay offset in seconds.
   * @default 0
   */
  delay?: number;

  /**
   * Animation speed duration in seconds.
   * Default maps to TIMING.normal or TIMING.section.
   */
  duration?: number;

  /**
   * The viewport threshold trigger range from 0 to 1.
   * @default 0.15
   */
  threshold?: number;

  /**
   * If true, stagger animate child elements matching stagger children configuration.
   * @default false
   */
  stagger?: boolean;

  /**
   * Content to render.
   */
  children: React.ReactNode;
}

/**
 * Supported semantic states for the cursor context.
 */
export type PointerType = 'default' | 'hover' | 'clickable' | 'loading' | 'magnetic';

/**
 * Current telemetry coordinates and target identifiers for cursor tracking.
 */
export interface CursorState {
  /**
   * Active cursor state style.
   */
  pointerType: PointerType;

  /**
   * Coordinates relative to page/screen.
   */
  coordinates: { x: number; y: number };

  /**
   * ID of the active hover target element.
   */
  activeId: string | null;

  /**
   * React reference pointing to the active magnetic DOM node.
   */
  magneticRef: React.RefObject<HTMLElement | null> | null;
}

/**
 * The Context API structure exposed by the Cursor State Engine.
 */
export interface CursorContextType {
  /**
   * Active state telemetry values.
   */
  state: CursorState;

  /**
   * Set the current active pointer type directly.
   */
  setPointerType: (type: PointerType) => void;

  /**
   * Register a target to bind custom cursor behaviors when hovered.
   */
  registerTarget: (
    id: string,
    metadata: { type: PointerType; magnetic?: React.RefObject<HTMLElement | null> }
  ) => void;

  /**
   * Unregister target to clean up state maps.
   */
  unregisterTarget: (id: string) => void;
}
