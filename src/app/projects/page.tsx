import { Navbar } from '@/components/layout/navbar';
import { Projects } from '@/components/sections/projects';
import { GithubSection } from '@/components/sections/github';
import { LearningDashboard } from '@/components/sections/learning';
import { Footer } from '@/components/layout/footer';

/**
 * Projects Page Route.
 * Aggregates build evidence assets: featured selected builds,
 * direct live GitHub repository integrations, and passive learning logs.
 */
export default function ProjectsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      <main className="flex-grow w-full">
        <Projects />
        <GithubSection />
        <LearningDashboard />
      </main>
      <Footer />
    </div>
  );
}
