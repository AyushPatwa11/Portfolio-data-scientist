'use client';

import { useScroll } from 'framer-motion';
import { useEffect, useState } from 'react';

/**
 * Tracks scroll progression relative to the viewport or a target container element.
 * 
 * Exposes raw Framer Motion MotionValues (which can bind directly to motion styles without
 * triggering React re-renders) along with synced state coordinates for standard conditional logic.
 * 
 * @param targetRef - Optional React ref of target container. If omitted, tracks page scroll.
 * @returns Object containing scroll progress/pixels as both MotionValues and React states.
 */
export function useScrollProgress(targetRef?: React.RefObject<HTMLElement | null>) {
  const { scrollYProgress, scrollY } = useScroll(
    targetRef
      ? {
          target: targetRef as React.RefObject<HTMLElement>,
          offset: ['start end', 'end start'],
        }
      : undefined
  );

  const [progress, setProgress] = useState(0);
  const [pixels, setPixels] = useState(0);

  useEffect(() => {
    // Sync MotionValue changes to local state for components needing active state checks
    const unsubscribeProgress = scrollYProgress.on('change', (latest) => {
      setProgress(latest);
    });

    const unsubscribePixels = scrollY.on('change', (latest) => {
      setPixels(latest);
    });

    return () => {
      unsubscribeProgress();
      unsubscribePixels();
    };
  }, [scrollYProgress, scrollY]);

  return {
    /**
     * MotionValue tracking scroll progress as a ratio from 0 to 1.
     * Binding this directly to motion properties prevents re-renders.
     */
    scrollYProgress,

    /**
     * MotionValue tracking raw scroll distance in pixels.
     * Binding this directly to motion properties prevents re-renders.
     */
    scrollY,

    /**
     * React state variable tracking scroll progress (0 to 1).
     */
    progress,

    /**
     * React state variable tracking raw scroll pixel distance.
     */
    pixels,
  };
}

export type UseScrollProgressReturn = ReturnType<typeof useScrollProgress>;
