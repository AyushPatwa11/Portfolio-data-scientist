'use client';

import { useEffect, useRef } from 'react';
import { useMotionValue, useSpring, useReducedMotion } from 'framer-motion';
import { SPRING } from '@/lib/experience/motion';

export interface UseMagneticOptions {
  /**
   * The distance threshold (in pixels) inside which the magnetic pull initiates.
   * @default 80
   */
  threshold?: number;

  /**
   * The pull strength multiplier (range 0 to 1). Represents how close the target gets to the cursor.
   * @default 0.35
   */
  strength?: number;
}

/**
 * Performant hook to apply opt-in physical magnetic attraction to an element.
 * 
 * Tracks cursor offsets relative to the element center and returns motion values
 * wrapped in system spring physics. Automatically disables when reduced motion is active.
 * 
 * @param options - Custom threshold and strength modifiers.
 * @returns Ref to attach to the element, and smooth spring-based x/y motion values.
 */
export function useMagnetic(options: UseMagneticOptions = {}) {
  const { threshold = 80, strength = 0.35 } = options;
  const ref = useRef<HTMLDivElement | null>(null);

  // Motion values to accumulate offset coordinates outside React renders
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Use system snappy spring physics for smooth tracking
  const springX = useSpring(x, SPRING.snappy);
  const springY = useSpring(y, SPRING.snappy);

  // Access the client reduced motion preference
  const isReducedMotion = useReducedMotion();

  useEffect(() => {
    // If reduced motion is preferred, bypass coordinates tracking entirely
    if (isReducedMotion) {
      x.set(0);
      y.set(0);
      return;
    }

    const handleMouseMove = (event: MouseEvent) => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const elementCenterX = rect.left + rect.width / 2;
      const elementCenterY = rect.top + rect.height / 2;

      // Calculate distance vectors from mouse to center of the target element
      const distanceX = event.clientX - elementCenterX;
      const distanceY = event.clientY - elementCenterY;
      const distance = Math.hypot(distanceX, distanceY);

      if (distance < threshold) {
        // Attract element towards the cursor with spring tension
        x.set(distanceX * strength);
        y.set(distanceY * strength);
      } else {
        // Reset element position once cursor leaves the proximity threshold
        x.set(0);
        y.set(0);
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [threshold, strength, x, y, isReducedMotion]);

  return { ref, x: springX, y: springY };
}
export type UseMagneticReturn = ReturnType<typeof useMagnetic>;
