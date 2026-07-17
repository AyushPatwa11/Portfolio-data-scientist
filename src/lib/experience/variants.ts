import { Variants } from 'framer-motion';
import { TIMING, EASING } from './motion';

/**
 * Standard Framer Motion variants registry.
 * 
 * These templates use design tokens from motion.ts to maintain a
 * cohesive interaction pace.
 */
export const experienceVariants: Record<string, Variants> = {
  /**
   * Subtle visibility fade.
   */
  fadeIn: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: TIMING.quick, ease: EASING.smooth },
    },
  },

  /**
   * Decelerating scroll entrance with vertical translation.
   * Vertical shift is kept small (16px) to avoid visual stress.
   */
  fadeUp: {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: TIMING.normal, ease: EASING.smooth },
    },
  },

  /**
   * Top-to-bottom scroll reveal entry.
   */
  fadeDown: {
    hidden: { opacity: 0, y: -16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: TIMING.normal, ease: EASING.smooth },
    },
  },

  /**
   * Premium scale-in transition with minimal size scaling.
   */
  scaleIn: {
    hidden: { opacity: 0, scale: 0.97 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: TIMING.normal, ease: EASING.smooth },
    },
  },

  /**
   * Stagger manager. Attach to parent wrapper containers to sequence children entrance.
   */
  staggerContainer: {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  },

  /**
   * Orchestrator for full-page sections.
   */
  sectionTransition: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: TIMING.section,
        ease: EASING.entrance,
        staggerChildren: 0.12,
      },
    },
  },

  /**
   * Page/Route transition settings.
   */
  pageTransition: {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { duration: TIMING.normal, ease: EASING.smooth },
    },
    exit: {
      opacity: 0,
      transition: { duration: TIMING.quick, ease: EASING.exit },
    },
  },
};
