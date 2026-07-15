import { useTheme as useNextTheme } from 'next-themes';
import { useEffect, useState } from 'react';

/**
 * Custom wrapper around next-themes useTheme.
 * Returns a 'mounted' flag to prevent SSR layout mismatches when rendering theme buttons.
 */
export function useTheme() {
  const { theme, setTheme, resolvedTheme } = useNextTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const handle = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(handle);
  }, []);

  return {
    theme,
    setTheme,
    resolvedTheme,
    isMounted: mounted,
    isDark: mounted && (resolvedTheme === 'dark' || theme === 'dark'),
  };
}
