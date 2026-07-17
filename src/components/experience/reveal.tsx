'use client';

import * as React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { RevealProps, RevealVariant } from '@/lib/experience/types';
import { experienceVariants } from '@/lib/experience/variants';
import { TIMING, EASING } from '@/lib/experience/motion';

const VARIANT_MAP = {
  fade: experienceVariants.fadeIn,
  'fade-up': experienceVariants.fadeUp,
  'fade-down': experienceVariants.fadeDown,
  scale: experienceVariants.scaleIn,
};

/**
 * Viewport Scroll Reveal Component.
 * 
 * Animates child elements when they enter the viewport. Supports fade,
 * translation, scale variations, and list stagger sequences.
 * Integrates prefers-reduced-motion to instantly display content without animation.
 */
export function Reveal({
  variant = 'fade-up',
  delay = 0,
  duration,
  threshold = 0.15,
  stagger = false,
  children,
  className,
  ...props
}: RevealProps) {
  const isReducedMotion = useReducedMotion();

  // Pick the default timing token based on the selected variant
  const defaultDuration = React.useMemo(() => {
    return variant === 'fade-up' || variant === 'fade-down'
      ? TIMING.normal
      : TIMING.quick;
  }, [variant]);

  // Merge timing and easing settings
  const customTransition = React.useMemo(() => {
    if (isReducedMotion) {
      return { duration: 0, delay: 0 };
    }
    return {
      duration: duration ?? defaultDuration,
      delay,
      ease: EASING.smooth,
    };
  }, [duration, defaultDuration, delay, isReducedMotion]);

  // Determine active variant template
  const activeVariants = React.useMemo(() => {
    if (stagger) {
      return experienceVariants.staggerContainer;
    }
    return VARIANT_MAP[variant] || experienceVariants.fadeUp;
  }, [stagger, variant]);

  // Render static container immediately if reduced motion is active to prevent reflows
  if (isReducedMotion) {
    return (
      <div className={className} {...props}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className={className}
      variants={activeVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: threshold }}
      transition={customTransition}
      {...props}
    >
      {children}
    </motion.div>
  );
}
export type { RevealProps };
export type { RevealVariant };
export { experienceVariants };
