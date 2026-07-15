'use client';

import Link from 'next/link';
import { ShieldAlert, ArrowLeft } from 'lucide-react';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-text-primary">
      <Navbar />
      <main className="flex-grow w-full max-w-xl mx-auto px-4 flex flex-col items-center justify-center text-center space-y-6">
        <div className="w-12 h-12 rounded-full border border-border-custom flex items-center justify-center text-text-secondary bg-surface/50">
          <ShieldAlert size={20} />
        </div>

        <div className="space-y-2">
          <p className="font-mono text-2xs uppercase tracking-widest text-accent">
            [ Error 404 // 検出されない ]
          </p>
          <h1 className="font-display text-2xl font-bold tracking-tight">
            Pipeline Node Not Found
          </h1>
          <p className="text-xs text-text-secondary leading-relaxed max-w-sm mx-auto">
            The requested resource, dataset case study, or route path could not be resolved by the
            server router.
          </p>
        </div>

        <Link
          href="/"
          className="inline-flex items-center space-x-2 text-xs font-mono font-bold text-text-primary hover:text-accent border border-border-custom bg-surface px-4 py-2 rounded-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent transition-all"
        >
          <ArrowLeft size={12} />
          <span>RETURN_TO_BASE</span>
        </Link>
      </main>
      <Footer />
    </div>
  );
}
