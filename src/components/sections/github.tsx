'use client';

import * as React from 'react';
import { Github, FolderGit, Star, Calendar, Code, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { siteConfig } from '@/config/site';
import { getFadeInUpProps } from '@/lib/animation';
import { useReducedMotion } from '@/hooks/use-reduced-motion';

interface RepoData {
  name: string;
  description: string;
  language: string;
  topics: string[];
  updatedAt: string;
  htmlUrl: string;
  isPinned: boolean;
}

/**
 * GitHub Activity Section.
 * Performs client-side repository fetching from public APIs.
 * Gracefully falls back to structured offline content on rate limits or failures.
 */
export function GithubSection() {
  const [repos, setRepos] = React.useState<RepoData[]>([]);
  const [loading, setLoading] = React.useState(true);
  const isReducedMotion = useReducedMotion();

  React.useEffect(() => {
    let active = true;

    async function fetchRepos() {
      try {
        const res = await fetch(
          `https://api.github.com/users/${siteConfig.githubUsername}/repos?sort=updated&per_page=6`,
        );
        if (!res.ok) throw new Error('API Rate limit or network block');

        const data = await res.json();

        interface GitHubApiRepo {
          name: string;
          description: string | null;
          language: string | null;
          topics: string[] | null;
          updated_at: string;
          html_url: string;
          stargazers_count: number;
        }

        // Map GitHub API response structure to local formats
        const mappedRepos: RepoData[] = data.map((repo: GitHubApiRepo) => ({
          name: repo.name,
          description: repo.description || 'No description provided.',
          language: repo.language || 'Plain Text',
          topics: repo.topics || [],
          updatedAt: new Date(repo.updated_at).toISOString().split('T')[0],
          htmlUrl: repo.html_url,
          isPinned: repo.stargazers_count > 0 || repo.name === 'Portfolio-data-scientist',
        }));

        if (active) {
          // Sort to show pinned/interesting repositories first
          setRepos(mappedRepos.sort((a, b) => (b.isPinned ? 1 : 0) - (a.isPinned ? 1 : 0)));
          setLoading(false);
        }
      } catch (e) {
        console.warn('Failed to load live GitHub repositories, falling back to static config.', e);
        if (active) {
          setRepos(siteConfig.githubFallbackRepos);
          setLoading(false);
        }
      }
    }

    fetchRepos();
    return () => {
      active = false;
    };
  }, []);

  return (
    <section
      id="github"
      className="py-16 md:py-24 border-t border-border-custom bg-background"
      aria-labelledby="github-heading"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <p className="font-mono text-2xs uppercase tracking-widest text-accent">
            [ 09 // Open Source ]
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <h2
                id="github-heading"
                className="font-display text-3xl font-bold tracking-tight text-text-primary"
              >
                GitHub Repositories
              </h2>
              <p className="text-sm text-text-secondary mt-1">
                Active code bases, packages, and portfolio contributions.
              </p>
            </div>
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-xs font-mono text-text-secondary hover:text-text-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent"
              aria-label="View entire GitHub profile"
            >
              <Github size={14} />
              <span>GITHUB_PROFILE</span>
            </a>
          </div>
        </div>

        {/* Repositories grid */}
        {loading ? (
          /* Static Skeleton Loader */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto animate-pulse">
            <div className="h-40 border border-border-custom bg-surface rounded-md" />
            <div className="h-40 border border-border-custom bg-surface rounded-md" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {repos.map((repo) => (
              <motion.article
                key={repo.name}
                {...getFadeInUpProps(isReducedMotion)}
                className={`border p-6 rounded-md bg-surface flex flex-col justify-between hover:border-accent/40 transition-colors ${
                  repo.isPinned ? 'border-accent/20' : 'border-border-custom'
                }`}
              >
                <div className="space-y-4">
                  {/* Repo Header */}
                  <div className="flex items-center justify-between text-text-secondary font-mono text-2xs uppercase tracking-wider">
                    <div className="flex items-center space-x-2">
                      <FolderGit size={14} className="text-accent" />
                      <span className="font-bold text-text-primary">{repo.name}</span>
                    </div>
                    {repo.isPinned && (
                      <span className="flex items-center space-x-1 border border-accent/20 bg-accent/5 px-2 py-0.5 rounded text-[8px] font-mono text-accent">
                        <Star size={8} className="fill-accent" />
                        <span>PINNED</span>
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-text-secondary leading-relaxed">{repo.description}</p>
                </div>

                {/* Footer stack info & link */}
                <div className="pt-6 border-t border-border-custom/50 mt-6 flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-[10px] font-mono text-text-secondary">
                    <span className="flex items-center space-x-1">
                      <Code size={10} />
                      <span>{repo.language}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Calendar size={10} />
                      <span>{repo.updatedAt}</span>
                    </span>
                  </div>

                  <a
                    href={repo.htmlUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1 text-xs font-mono font-bold text-text-primary hover:text-accent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent"
                    aria-label={`View ${repo.name} repository`}
                  >
                    <span>CODEBASE</span>
                    <ArrowUpRight size={12} />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
