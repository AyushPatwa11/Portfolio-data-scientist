'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { Interactive } from '../experience/interactive';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Style configuration.
   * @default 'primary'
   */
  variant?: 'primary' | 'secondary' | 'ghost' | 'text';

  /**
   * Button height and padding.
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg';

  /**
   * Triggers spinning progress loader.
   */
  loading?: boolean;

  /**
   * Enables physical magnetic coordinate attraction.
   */
  magnetic?: boolean;
}

/**
 * Reusable Tactical Button component.
 * 
 * Implements styling mapping to CSS component tokens (primary, secondary, ghost, text)
 * and hooks into the Experience System `<Interactive>` wrapper for snappy spring scale clicks.
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      loading = false,
      magnetic = false,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    // Style configurations based on visual tokens
    const variantClasses = {
      primary:
        'bg-[var(--btn-primary-bg)] text-[var(--btn-primary-text)] hover:bg-[var(--btn-primary-bg-hover)] hover:text-[var(--btn-primary-text-hover)] border border-transparent',
      secondary:
        'bg-[var(--btn-secondary-bg)] border border-[var(--btn-secondary-border)] text-[var(--btn-secondary-text)] hover:bg-[var(--btn-secondary-bg-hover)] hover:border-[var(--btn-secondary-border-hover)]',
      ghost:
        'bg-transparent text-[var(--btn-ghost-text)] hover:bg-[var(--btn-ghost-bg-hover)] hover:text-[var(--btn-ghost-text-hover)] border border-transparent',
      text:
        'bg-transparent text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:underline p-0 border border-transparent min-h-0 min-w-0 inline-flex align-baseline',
    };

    const sizeClasses = {
      sm: 'px-3 py-1.5 text-[10px] h-8',
      md: 'px-4 py-2.5 text-xs h-10',
      lg: 'px-6 py-3.5 text-sm h-12',
    };

    const baseClasses =
      'btn-style font-mono font-medium relative focus-visible:outline-none transition-all duration-200 select-none';

    const buttonElement = (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={cn(
          baseClasses,
          variantClasses[variant],
          variant !== 'text' && sizeClasses[size],
          className
        )}
        {...props}
      >
        {loading && (
          <span
            className="w-3 h-3 border-2 border-current border-t-transparent rounded-full animate-spin shrink-0"
            aria-hidden="true"
          />
        )}
        {children}
      </button>
    );

    // Render inside interactive wrapper to register cursor state and spring scales
    return (
      <Interactive
        pattern="interactive-element"
        magnetic={magnetic}
        className="inline-block w-full sm:w-auto"
      >
        {buttonElement}
      </Interactive>
    );
  }
);

Button.displayName = 'Button';
