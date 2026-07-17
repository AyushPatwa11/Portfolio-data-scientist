import { Navbar } from '@/components/layout/navbar';
import { Hero } from '@/components/sections/hero';
import { About } from '@/components/sections/about';
import { Projects } from '@/components/sections/projects';
import { ExperienceSection } from '@/components/sections/experience';
import { ContactSection } from '@/components/sections/contact';
import { Footer } from '@/components/layout/footer';

/**
 * Root Landing Page.
 * Renders page sections sequentially matching recruiter scroll layouts.
 */
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      <main className="flex-grow w-full">
        <Hero />
        <About />
        <Projects />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
