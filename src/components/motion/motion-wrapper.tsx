'use client';

import * as React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { transitionEase, transitionSpring } from '@/lib/animation';

interface MotionProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  delay?: number;
}

/**
 * Clean fade-in slide up transition for page loads.
 */
export function FadeInUp({ children, delay = 0, ...props }: MotionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ...transitionEase, delay }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/**
 * Slide-in transition for the project case study drawers.
 */
export function SlideInRight({ children, ...props }: MotionProps) {
  return (
    <motion.div
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={transitionSpring}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/**
 * Staggered container wrapper.
 */
export function StaggerContainer({ children, ...props }: MotionProps) {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.08,
          },
        },
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/**
 * Staggered child item.
 */
export function StaggerItem({ children, ...props }: MotionProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 10 },
        show: { opacity: 1, y: 0, transition: transitionEase },
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/**
 * Interactive card scale hover states.
 */
export function ScaleHover({ children, ...props }: MotionProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.015, y: -2 }}
      transition={transitionSpring}
      {...props}
    >
      {children}
    </motion.div>
  );
}
