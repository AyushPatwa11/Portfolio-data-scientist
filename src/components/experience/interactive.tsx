'use client';

import * as React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { InteractiveProps, PointerType } from '@/lib/experience/types';
import { useCursorState } from './cursor-context';
import { SPRING, TIMING, EASING } from '@/lib/experience/motion';
import { DESIGN_TOKENS } from '@/lib/experience/tokens';
import { Magnetic } from './magnetic';

/**
 * Composable interaction wrapper element.
 * 
 * Maps general hover, tap/click, and keyboard focus states to specific
 * UX pattern presets. Integrates with the global cursor state engine
 * and features opt-in magnetic physics. Respects reduced-motion preferences.
 */
export function Interactive({
  pattern,
  magnetic = false,
  children,
  className,
  onMouseEnter,
  onMouseLeave,
  onFocus,
  onBlur,
  ...props
}: InteractiveProps) {
  const elementId = React.useId();
  const elementRef = React.useRef<HTMLDivElement>(null);
  const isReducedMotion = useReducedMotion();
  const { registerTarget, unregisterTarget } = useCursorState();

  // Map patterns to cursor pointer types for global context registration
  const pointerType: PointerType = React.useMemo(() => {
    switch (pattern) {
      case 'interactive-element':
        return 'clickable';
      case 'emphasized-element':
      case 'navigation-element':
      case 'media-element':
        return 'hover';
      case 'reveal-element':
      default:
        return 'default';
    }
  }, [pattern]);

  const handleMouseEnter = (event: React.MouseEvent<HTMLDivElement>) => {
    registerTarget(elementId, {
      type: pointerType,
      magnetic: magnetic ? elementRef : undefined,
    });
    onMouseEnter?.(event);
  };

  const handleMouseLeave = (event: React.MouseEvent<HTMLDivElement>) => {
    unregisterTarget(elementId);
    onMouseLeave?.(event);
  };

  const handleFocus = (event: React.FocusEvent<HTMLDivElement>) => {
    registerTarget(elementId, {
      type: pointerType,
      magnetic: magnetic ? elementRef : undefined,
    });
    onFocus?.(event);
  };

  const handleBlur = (event: React.FocusEvent<HTMLDivElement>) => {
    unregisterTarget(elementId);
    onBlur?.(event);
  };

  // Compile animation settings based on active visual pattern
  const animationProps = React.useMemo(() => {
    if (isReducedMotion) return {};

    switch (pattern) {
      case 'interactive-element':
        return {
          whileHover: { scale: 1.02 },
          whileTap: { scale: 0.98 },
          transition: { type: 'spring' as const, ...SPRING.strong },
        };
      case 'emphasized-element':
        return {
          whileHover: {
            y: -4,
            boxShadow: DESIGN_TOKENS.shadows.elevated,
          },
          transition: { type: 'spring' as const, ...SPRING.medium },
        };
      case 'navigation-element':
        return {
          whileHover: { opacity: DESIGN_TOKENS.opacity.visible },
          transition: { duration: TIMING.hover, ease: EASING.smooth },
        };
      case 'media-element':
        return {
          whileHover: 'hover',
        };
      case 'reveal-element':
      default:
        return {};
    }
  }, [pattern, isReducedMotion]);

  const innerContent = (
    <motion.div
      ref={elementRef}
      className={className}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleFocus}
      onBlur={handleBlur}
      {...animationProps}
      {...props}
    >
      {children}
    </motion.div>
  );

  // If magnetic pulls are active and not disabled, wrap in the magnetic context
  if (magnetic && !isReducedMotion) {
    return (
      <Magnetic threshold={80} strength={0.35}>
        {innerContent}
      </Magnetic>
    );
  }

  return innerContent;
}
export type { InteractiveProps };
