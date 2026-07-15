import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combines multiple Tailwind CSS classes dynamically, handling merges and overrides.
 *
 * @param inputs - Array of class values to combine.
 * @returns Combined string of classes.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
