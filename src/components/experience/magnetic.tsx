'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { useMagnetic } from '@/hooks/use-magnetic';

export interface MagneticProps {
  /**
   * The target content to apply the magnetic effect on.
   */
  children: React.ReactNode;

  /**
   * Proximity range (in pixels) inside which attraction begins.
   * @default 80
   */
  threshold?: number;

  /**
   * Pull force coefficient (from 0 to 1).
   * @default 0.35
   */
  strength?: number;

  /**
   * Additional style classes to merge.
   */
  className?: string;
}

/**
 * Opt-in container to apply magnetic physical alignment onto child components.
 * 
 * Typically used on call-to-actions, social link icons, and project tiles.
 * Respects system reduced-motion flags to disable all movements instantly.
 */
export function Magnetic({ children, threshold, strength, className }: MagneticProps) {
  const { ref, x, y } = useMagnetic({ threshold, strength });

  return (
    <motion.div
      ref={ref}
      style={{ x, y }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
