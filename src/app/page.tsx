import { Navbar } from '@/components/layout/navbar';
import { Hero } from '@/components/sections/hero';
import { About } from '@/components/sections/about';
import { Journey } from '@/components/sections/journey';
import { Projects } from '@/components/sections/projects';
import { Skills } from '@/components/sections/skills';
import { LearningDashboard } from '@/components/sections/learning';
import { ExperienceSection } from '@/components/sections/experience';
import { CertificatesSection } from '@/components/sections/certificates';
import { AchievementsSection } from '@/components/sections/achievements';

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
        <Journey />
        <Projects />
        <Skills />
        <LearningDashboard />
        <ExperienceSection />
        <CertificatesSection />
        <AchievementsSection />
      </main>
    </div>
  );
}
