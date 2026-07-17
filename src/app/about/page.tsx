import { Navbar } from '@/components/layout/navbar';
import { About } from '@/components/sections/about';
import { Journey } from '@/components/sections/journey';
import { Skills } from '@/components/sections/skills';
import { CertificatesSection } from '@/components/sections/certificates';
import { Footer } from '@/components/layout/footer';

/**
 * About Page Route.
 * Aggregates extended candidate details: background philosophy,
 * chronological timeline, full skills matrix, and course certifications.
 */
export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      <main className="flex-grow w-full">
        <About />
        <Journey />
        <Skills />
        <CertificatesSection />
      </main>
      <Footer />
    </div>
  );
}
