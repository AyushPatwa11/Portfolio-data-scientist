'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
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
 * Reusable Text Input field.
 * 
 * Inherits structural typography, padding, borders, and focus rings globally
 * from our CSS rules, and provides custom error/success state selectors.
 */
export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, success, type = 'text', ...props }, ref) => {
    return (
      <input
        type={type}
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

Input.displayName = 'Input';
export default Input;
