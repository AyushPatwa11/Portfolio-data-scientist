'use client';

/**
 * Root Route transition Loader.
 * Displays a minimal loading indicator.
 */
export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background select-none">
      <div className="space-y-4 text-center">
        {/* Calligraphic Vertical Ink stroke indicator */}
        <div className="relative w-[1.5px] h-20 bg-border-custom mx-auto overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-accent animate-[bounce_1.5s_infinite_ease-in-out]" />
        </div>

        <div className="space-y-1">
          <p className="font-japanese text-base font-medium text-text-primary tracking-widest">
            起動
          </p>
          <p className="font-mono text-3xs uppercase tracking-widest text-text-secondary">
            Booting_System...
          </p>
        </div>
      </div>
    </div>
  );
}
