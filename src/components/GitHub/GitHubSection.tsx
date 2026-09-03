import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Github,
  GitBranch,
  Star,
  ExternalLink,
  Code2,
  FolderGit2,
  Sparkles,
  RefreshCw,
  GitCommit,
  GitPullRequest,
  BookOpen,
  Layers,
  Cpu,
} from 'lucide-react';
import { Container } from '../common/Container';
import { SectionHeading } from '../common/SectionHeading';
import { BentoCard } from '../common/BentoCard';
import { Button } from '../common/Button';
import { socials } from '../../data/socials';
import { useLanguage } from '../../context/LanguageContext';
import {
  fetchGitHubData,
  defaultGitHubStats,
  curatedRepositories,
  GitHubStats,
  GitHubRepoItem,
  GitHubUserProfile,
} from '../../data/github';

export const GitHubSection: React.FC = () => {
  const { isAmharic } = useLanguage();
  const [stats, setStats] = useState<GitHubStats>(defaultGitHubStats);
  const [repos, setRepos] = useState<GitHubRepoItem[]>(curatedRepositories);
  const [userProfile, setUserProfile] = useState<GitHubUserProfile | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'featured' | 'all'>('featured');

  const loadData = async (force = false) => {
    if (force) setIsRefreshing(true);
    else setLoading(true);

    try {
      const data = await fetchGitHubData(force);
      setStats(data.stats);
      setRepos(data.repos);
      setUserProfile(data.userProfile);
    } catch (err) {
      console.warn('Could not load dynamic GitHub stats:', err);
    } finally {
      setLoading(false);
      setIsRefreshing(false);
    }
  };

  useEffect(() => {
    loadData(false);
  }, []);

  const displayedRepos =
    activeTab === 'featured'
      ? repos.filter((r) => r.isHighlighted || curatedRepositories.some((c) => c.name === r.name))
      : repos;

  return (
    <section id="github" className="py-20 sm:py-28 relative bg-[#080A0F]">
      <Container size="xl">
        <SectionHeading
          badge={isAmharic ? 'የኮድ ጓዳ' : 'Open Source & Code'}
          title={isAmharic ? 'የGitHub ኮዶቼን እና ስታቲስቲክስ ይመልከቱ' : 'Explore My Code on GitHub'}
          subtitle={
            isAmharic
              ? 'በቀጥታ ከGitHub API የተወሰዱ የሪፖዚተሪ ብዛት፣ የኮሚት እንቅስቃሴዎች እና የንጹህ ኮድ ማከማቻዎች።'
              : 'Live repository counts, contribution activity, and source code repositories fetched in real time.'
          }
        />

        {/* Dynamic GitHub Metrics Dashboard (4 Bento Stat Cards) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto mb-8">
          {/* Card 1: Public Repositories */}
          <BentoCard className="p-4 sm:p-5 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-3 text-indigo-400">
              <span className="text-[11px] font-mono uppercase tracking-wider text-gray-400 font-semibold">
                Repositories
              </span>
              <div className="p-1.5 rounded-lg bg-indigo-500/10 border border-indigo-500/20">
                <FolderGit2 className="w-4 h-4" />
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black text-white font-mono">
                {loading ? '...' : stats.publicRepos}
              </div>
              <span className="text-[11px] text-gray-400 mt-1 block">
                Public Code Repos
              </span>
            </div>
          </BentoCard>

          {/* Card 2: Contribution Activity */}
          <BentoCard className="p-4 sm:p-5 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-3 text-emerald-400">
              <span className="text-[11px] font-mono uppercase tracking-wider text-gray-400 font-semibold">
                Contributions
              </span>
              <div className="p-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                <GitCommit className="w-4 h-4" />
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black text-emerald-400 font-mono">
                {loading ? '...' : `${stats.estimatedContributions}+`}
              </div>
              <span className="text-[11px] text-gray-400 mt-1 block">
                Commits &amp; Events
              </span>
            </div>
          </BentoCard>

          {/* Card 3: Stars & Code Impact */}
          <BentoCard className="p-4 sm:p-5 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-3 text-amber-400">
              <span className="text-[11px] font-mono uppercase tracking-wider text-gray-400 font-semibold">
                Code Stars
              </span>
              <div className="p-1.5 rounded-lg bg-amber-500/10 border border-amber-500/20">
                <Star className="w-4 h-4" />
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black text-white font-mono">
                {loading ? '...' : stats.totalStars}
              </div>
              <span className="text-[11px] text-gray-400 mt-1 block">
                Across Repositories
              </span>
            </div>
          </BentoCard>

          {/* Card 4: Top Tech Languages */}
          <BentoCard className="p-4 sm:p-5 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-3 text-cyan-400">
              <span className="text-[11px] font-mono uppercase tracking-wider text-gray-400 font-semibold">
                Primary Stack
              </span>
              <div className="p-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
                <Code2 className="w-4 h-4" />
              </div>
            </div>
            <div className="space-y-1.5">
              <div className="flex flex-wrap gap-1">
                {stats.languages.slice(0, 3).map((l, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-white/[0.04] text-[10px] font-mono text-gray-300 border border-white/[0.06]"
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${l.color}`} />
                    {l.name}
                  </span>
                ))}
              </div>
              <span className="text-[10px] text-gray-500 font-mono block">
                Dominant across codebases
              </span>
            </div>
          </BentoCard>
        </div>

        {/* Live GitHub Status Bar & Quick Refresh */}
        <div className="max-w-5xl mx-auto mb-8 flex flex-col sm:flex-row items-center justify-between gap-3 p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.08] text-xs">
          <div className="flex items-center gap-2.5">
            <span
              className={`w-2 h-2 rounded-full ${
                stats.isLive ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'
              }`}
            />
            <span className="text-gray-300 font-mono text-[11px]">
              {stats.isLive ? 'GitHub REST API Live Connected' : 'Cached Snapshot Active'} • Last sync:{' '}
              <strong className="text-white">{stats.lastFetched}</strong>
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => loadData(true)}
              disabled={isRefreshing}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-gray-300 hover:text-white border border-white/[0.08] text-xs font-mono transition-all cursor-pointer disabled:opacity-50"
              title="Force Refresh GitHub Data"
            >
              <RefreshCw
                className={`w-3.5 h-3.5 ${isRefreshing ? 'animate-spin text-indigo-400' : ''}`}
              />
              <span>{isRefreshing ? 'Syncing...' : 'Sync Live'}</span>
            </button>

            <a
              href={socials.github.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-xs shadow-indigo-600/30 transition-all"
            >
              <Github className="w-3.5 h-3.5" />
              <span>Visit @{socials.github.handle.replace('github.com/', '')}</span>
            </a>
          </div>
        </div>

        {/* Code Quality Philosophy Card */}
        <BentoCard className="max-w-5xl mx-auto mb-10 p-5 sm:p-6 bg-gradient-to-r from-[#0D1117] via-[#111827] to-[#0D1117] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
              <FolderGit2 className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-white tracking-tight">
                Engineering Discipline &amp; Clean Git History
              </h4>
              <p className="text-xs text-gray-400">
                Atomic commits, semantic PR branches, strict TypeScript type safety, and clear reproduction steps.
              </p>
            </div>
          </div>

          {/* Tab Selector */}
          <div className="flex items-center gap-1 p-1 rounded-xl bg-white/[0.04] border border-white/[0.08] shrink-0 text-xs">
            <button
              onClick={() => setActiveTab('featured')}
              className={`px-3 py-1.5 rounded-lg font-semibold transition-all cursor-pointer ${
                activeTab === 'featured'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Featured ({curatedRepositories.length})
            </button>
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3 py-1.5 rounded-lg font-semibold transition-all cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              All Repos ({repos.length})
            </button>
          </div>
        </BentoCard>

        {/* Repository Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
          {displayedRepos.map((repo) => (
            <BentoCard
              key={repo.id}
              className="p-5 flex flex-col justify-between group hover:border-white/[0.16] transition-all"
            >
              <div>
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/[0.08]">
                  <div className="flex items-center gap-2">
                    <Code2 className="w-4 h-4 text-indigo-400" />
                    <span className="text-xs sm:text-sm font-mono font-bold text-white group-hover:text-indigo-300 transition-colors">
                      {repo.name}
                    </span>
                  </div>
                  <a
                    href={repo.htmlUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg bg-white/[0.04] text-gray-400 hover:text-white hover:bg-white/[0.08] border border-white/[0.08] transition-all"
                    title="View Source on GitHub"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <p className="text-xs text-gray-400 leading-relaxed mb-4 line-clamp-2">
                  {repo.description}
                </p>

                {repo.topics.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {repo.topics.slice(0, 4).map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded bg-white/[0.03] border border-white/[0.06] text-[10px] font-mono text-gray-400"
                      >
                        #{t}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs text-gray-400 font-mono">
                <div className="flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${repo.langColor}`} />
                  <span className="text-gray-300">{repo.language || 'Markdown/Plain'}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1">
                    <Star className="w-3 h-3 text-amber-400" />
                    <span className="text-gray-300">{repo.stars}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <GitBranch className="w-3 h-3 text-indigo-400" />
                    <span className="text-gray-300">{repo.forks}</span>
                  </span>
                </div>
              </div>
            </BentoCard>
          ))}
        </div>
      </Container>
    </section>
  );
};
