'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  /**
   * Triggers invalid visual error boundary state.
   */
  error?: boolean;

  /**
   * Triggers validation success state.
   */
  success?: boolean;
}

/**
 * Reusable Multi-line Text Area field.
 * 
 * Inherits structural typography, padding, borders, and focus rings globally
 * from our CSS rules, and provides custom error/success state selectors.
 */
export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, success, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={cn(
          error && 'input-error',
          success && 'input-success',
          className
        )}
        {...props}
      />
    );
  }
);

Textarea.displayName = 'Textarea';
export default Textarea;
