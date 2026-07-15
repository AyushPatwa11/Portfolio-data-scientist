/**
 * Centralized Framer Motion Transition Presets.
 * Aligns animation behavior across the application.
 */

export const transitionSpring = {
  type: 'spring' as const,
  stiffness: 300,
  damping: 30,
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
