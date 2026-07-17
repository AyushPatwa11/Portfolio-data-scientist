'use client';

import * as React from 'react';
import { useMotionValue, MotionValue, useReducedMotion } from 'framer-motion';
import { PointerType, CursorState, CursorContextType } from '@/lib/experience/types';

// Extend context type internally to expose high-performance MotionValues
export interface EnhancedCursorContextType extends CursorContextType {
  /**
   * Framer Motion Value tracking the X coordinate of the cursor.
   * Can be used to bind styles directly without triggering React re-renders.
   */
  mouseX: MotionValue<number>;

  /**
   * Framer Motion Value tracking the Y coordinate of the cursor.
   * Can be used to bind styles directly without triggering React re-renders.
   */
  mouseY: MotionValue<number>;
}

const CursorContext = React.createContext<EnhancedCursorContextType | null>(null);

/**
 * Global provider to manage cursor interaction telemetry.
 * 
 * Captures mouse coordinate changes into Framer Motion `MotionValue` objects
 * to ensure 60fps performance without triggering React render cycles.
 */
export function CursorProvider({ children }: { children: React.ReactNode }) {
  const isReducedMotion = useReducedMotion();

  // Create highly optimized Framer Motion coordinates
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Tracks active state mutations (e.g. switching pointerType or targets)
  const [cursorState, setCursorState] = React.useState<CursorState>({
    pointerType: 'default',
    coordinates: { x: 0, y: 0 },
    activeId: null,
    magneticRef: null,
  });

  // Keep a target registry to handle overlapping hovers gracefully
  const registryRef = React.useRef<
    Map<string, { type: PointerType; magnetic?: React.RefObject<HTMLElement | null> }>
  >(new Map());

  // Set pointer type directly
  const setPointerType = React.useCallback((type: PointerType) => {
    setCursorState((prev) => {
      if (prev.pointerType === type) return prev;
      return { ...prev, pointerType: type };
    });
  }, []);

  // Register an interactive element to track when hovered
  const registerTarget = React.useCallback(
    (id: string, metadata: { type: PointerType; magnetic?: React.RefObject<HTMLElement | null> }) => {
      registryRef.current.set(id, metadata);
      
      // Update state with the newly active hover target
      setCursorState((prev) => ({
        ...prev,
        pointerType: metadata.type,
        activeId: id,
        magneticRef: metadata.magnetic || null,
      }));
    },
    []
  );

  // Unregister target and return cursor style to the next active element or default
  const unregisterTarget = React.useCallback(
    (id: string) => {
      registryRef.current.delete(id);

      setCursorState((prev) => {
        // If the unregistered target is not the active one, do nothing
        if (prev.activeId !== id) return prev;

        // If other targets are registered, revert to the last registered target
        if (registryRef.current.size > 0) {
          const keys = Array.from(registryRef.current.keys());
          const lastKey = keys[keys.length - 1];
          const lastMetadata = registryRef.current.get(lastKey)!;
          return {
            ...prev,
            pointerType: lastMetadata.type,
            activeId: lastKey,
            magneticRef: lastMetadata.magnetic || null,
          };
        }

        // Revert to baseline state
        return {
          ...prev,
          pointerType: 'default',
          activeId: null,
          magneticRef: null,
        };
      });
    },
    []
  );

  React.useEffect(() => {
    if (typeof window === 'undefined' || isReducedMotion) return;

    const handleMouseMove = (event: MouseEvent) => {
      // Direct updates on motion values bypass React re-renders
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mouseX, mouseY, isReducedMotion]);

  // Synchronize coordinate state throttled via animation frame
  React.useEffect(() => {
    if (typeof window === 'undefined' || isReducedMotion) return;

    let activeFrame: number;
    const syncCoordinates = () => {
      setCursorState((prev) => {
        const curX = mouseX.get();
        const curY = mouseY.get();
        if (prev.coordinates.x === curX && prev.coordinates.y === curY) {
          return prev;
        }
        return {
          ...prev,
          coordinates: { x: curX, y: curY },
        };
      });
      activeFrame = requestAnimationFrame(syncCoordinates);
    };

    activeFrame = requestAnimationFrame(syncCoordinates);
    return () => {
      cancelAnimationFrame(activeFrame);
    };
  }, [mouseX, mouseY, isReducedMotion]);

  const value = React.useMemo(
    () => ({
      state: cursorState,
      setPointerType,
      registerTarget,
      unregisterTarget,
      mouseX,
      mouseY,
    }),
    [cursorState, setPointerType, registerTarget, unregisterTarget, mouseX, mouseY]
  );

  return <CursorContext.Provider value={value}>{children}</CursorContext.Provider>;
}

/**
 * Hook to consume global cursor state context.
 * 
 * Throws an error if used outside of a <CursorProvider>.
 */
export function useCursorState() {
  const context = React.useContext(CursorContext);
  if (!context) {
    throw new Error('useCursorState must be used within a CursorProvider');
  }
  return context;
}
export type CursorProviderProps = { children: React.ReactNode };
export type UseCursorStateReturn = ReturnType<typeof useCursorState>;
