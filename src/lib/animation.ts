import { themeConfig } from '@/config/theme';

export const transitionSpring = {
  type: 'spring' as const,
  stiffness: themeConfig.animation.stiffness,
  damping: themeConfig.animation.damping,
};

export const transitionEase = {
  type: 'tween' as const,
  ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
  duration: 0.4,
};

export const transitionFade = {
  duration: 0.2,
  ease: 'linear',
};

export const fadeInUpVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitionEase,
  },
};

export const staggerContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

// Common viewport configuration preset
export const viewportPreset = {
  once: true,
  margin: '-100px' as const,
};

/**
 * Returns consistent scroll reveal props for standard fade-in-up animations.
 * Eliminates boilerplate repetition across layout components.
 */
export function getFadeInUpProps(isReducedMotion: boolean) {
  return {
    initial: { opacity: 0, y: 15 },
    whileInView: { opacity: 1, y: 0 },
    viewport: viewportPreset,
    transition: isReducedMotion ? { duration: 0 } : transitionEase,
  };
}
