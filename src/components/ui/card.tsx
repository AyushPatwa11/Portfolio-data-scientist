'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { Interactive } from '../experience/interactive';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The structural card style variant.
   * @default 'static'
   */
  variant?: 'static' | 'interactive' | 'featured' | 'compact';

  /**
   * Surface background hierarchy level.
   * @default 1
   */
  level?: 1 | 2;

  /**
   * Enables physical magnetic coordinate attraction (for featured interactive cards).
   * @default false
   */
  magnetic?: boolean;
}

/**
 * Standard visual Card component.
 * 
 * Implements surface levels (1, 2) and variants (static, interactive, featured, compact).
 * Integrates with the Experience System `<Interactive>` wrapper to apply hover y-translations
 * and shadow elevations on interactive variants.
 */
export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      className,
      variant = 'static',
      level = 1,
      magnetic = false,
      children,
      ...props
    },
    ref
  ) => {
    // Select background surface colors based on token levels
    const bgClass =
      level === 2
        ? 'bg-[var(--bg-level-2)]'
        : 'bg-[var(--bg-level-1)]';

    const variantClasses = {
      static: 'card-static border-[var(--border-default)] shadow-subtle',
      interactive:
        'card-interactive border-[var(--border-default)] shadow-subtle hover:border-[var(--border-hover)]',
      featured:
        'card-featured border-[var(--accent)]/30 bg-[var(--bg-level-2)] shadow-elevated',
      compact: 'card-compact border-[var(--border-default)] shadow-subtle',
    };

    const cardElement = (
      <div
        ref={ref}
        className={cn(
          bgClass,
          variantClasses[variant],
          className
        )}
        {...props}
      >
        {children}
      </div>
    );

    // If card is interactive, wrap in our Experience System Interactive component
    if (variant === 'interactive' || variant === 'featured') {
      return (
        <Interactive
          pattern="emphasized-element"
          magnetic={magnetic}
          className="w-full h-full"
        >
          {cardElement}
        </Interactive>
      );
    }

    return cardElement;
  }
);

Card.displayName = 'Card';
export default Card;
