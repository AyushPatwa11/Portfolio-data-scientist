'use client';

import * as React from 'react';
import Link from 'next/link';
import { AlertTriangle, RefreshCw } from 'lucide-react';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  React.useEffect(() => {
    console.error('Unhandled runtime error caught by boundary:', error);
  }, [error]);

  return (
    <div className="flex flex-col min-h-screen bg-background text-text-primary">
      <Navbar />
      <main className="flex-grow w-full max-w-xl mx-auto px-4 flex flex-col items-center justify-center text-center space-y-6">
        <div className="w-12 h-12 rounded-full border border-border-custom flex items-center justify-center text-text-secondary bg-surface/50">
          <AlertTriangle size={20} className="text-error animate-pulse" />
        </div>

        <div className="space-y-2">
          <p className="font-mono text-2xs uppercase tracking-widest text-error">
            [ Error 500 // システム障害 ]
          </p>
          <h1 className="font-display text-2xl font-bold tracking-tight">
            Pipeline Validation Crash
          </h1>
          <p className="text-xs text-text-secondary leading-relaxed max-w-sm mx-auto">
            A fatal unhandled runtime script exception occurred in the render lifecycle.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <button
            onClick={() => reset()}
            className="inline-flex items-center justify-center space-x-2 text-xs font-mono font-bold bg-text-primary text-background hover:bg-accent hover:text-white px-5 py-2.5 rounded-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent transition-all cursor-pointer"
          >
            <RefreshCw size={12} />
            <span>RESET_RUNTIME</span>
          </button>

          <Link
            href="/"
            className="inline-flex items-center justify-center space-x-2 text-xs font-mono font-bold text-text-primary hover:text-accent border border-border-custom bg-surface px-5 py-2.5 rounded-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent transition-all"
          >
            <span>GO_TO_HOMEPAGE</span>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
