import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Youtube,
  BookOpen,
  ArrowRight,
  Clock,
  ExternalLink,
  Sparkles,
} from 'lucide-react';
import { Container } from '../common/Container';
import { SectionHeading } from '../common/SectionHeading';
import { Button } from '../common/Button';
import { BentoCard } from '../common/BentoCard';
import { yacobTechPosts, contentCategories } from '../../data/yacobTech';
import { socials } from '../../data/socials';
import { useLanguage } from '../../context/LanguageContext';

export const YacobTech: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Insights');
  const { isAmharic } = useLanguage();

  const filteredPosts =
    selectedCategory === 'All Insights'
      ? yacobTechPosts
      : yacobTechPosts.filter((p) => {
          if (selectedCategory === 'Web Development') {
            return p.category.includes('Frontend') || p.category.includes('Web');
          }
          if (selectedCategory === 'Databases') {
            return p.category.includes('Databases');
          }
          if (selectedCategory === 'Backend & Security') {
            return p.category.includes('Backend');
          }
          if (selectedCategory === 'AI & Productivity') {
            return p.category.includes('AI');
          }
          return true;
        });

  return (
    <section id="yacob-tech" className="py-20 sm:py-28 relative bg-[#080A0F]">
      <Container size="xl">
        <SectionHeading
          badge={isAmharic ? 'ቴክኒካል ጽሁፎች' : 'Engineering Articles'}
          title={isAmharic ? 'የኮዲንግ ግንዛቤዎች እና መመሪያዎች' : 'Technical Insights & Knowledge Sharing'}
          subtitle={
            isAmharic
              ? 'የሙሉ-ቁልል ግንባታ ልምዶች፣ የአርክቴክቸር ምርጫዎች እና የሶፍትዌር ትምህርቶች።'
              : 'Practical lessons learned building full-stack applications, relational models, and accessible frontends.'
          }
        />

        {/* YouTube & Knowledge Banner */}
        <BentoCard className="mb-12 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-red-600/10 border border-red-500/20 flex items-center justify-center text-red-400 shrink-0 shadow-lg shadow-red-600/10">
              <Youtube className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                  Yacob Tech Media
                </h3>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-red-500/10 text-red-400 border border-red-500/20">
                  @YacobTech123
                </span>
              </div>
              <p className="text-xs text-gray-400 mt-1 max-w-xl">
                Sharing programming tutorials, web technology walkthroughs, and practical guides for
                aspiring developers in Ethiopia and beyond.
              </p>
            </div>
          </div>

          <Button
            variant="outline"
            size="sm"
            icon={<ExternalLink className="w-3.5 h-3.5" />}
            onClick={() => window.open(socials.youtube.url, '_blank')}
            className="shrink-0 text-xs text-red-400 hover:text-red-300 border-red-500/30 hover:border-red-500/50"
          >
            Visit @YacobTech123
          </Button>
        </BentoCard>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {contentCategories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setSelectedCategory(cat.name)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer border flex items-center gap-1.5 ${
                selectedCategory === cat.name
                  ? 'bg-indigo-600 text-white border-indigo-500 shadow-md shadow-indigo-600/20'
                  : 'bg-white/[0.04] text-gray-400 hover:text-white border-white/[0.08]'
              }`}
            >
              <span>{cat.name}</span>
              <span
                className={`text-[10px] font-mono px-1.5 py-0.5 rounded-full ${
                  selectedCategory === cat.name
                    ? 'bg-white/20 text-white'
                    : 'bg-white/[0.06] text-gray-400'
                }`}
              >
                {cat.count}
              </span>
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <BentoCard
              key={post.id}
              className="p-6 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/[0.08]">
                  <span className="text-[11px] font-mono text-indigo-400 uppercase tracking-wider font-semibold">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1 text-[11px] font-mono text-gray-400">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>

                <h4 className="text-base font-bold text-white group-hover:text-indigo-300 transition-colors mb-2 tracking-tight">
                  {post.title}
                </h4>

                <p className="text-xs text-gray-400 leading-relaxed mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs">
                <span className="text-gray-400 text-[11px]">{post.date}</span>
                <span className="inline-flex items-center gap-1 font-semibold text-indigo-400 group-hover:text-indigo-300 transition-colors">
                  <span>Read Article</span>
                  <ArrowRight className="w-3 h-3 transform group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </BentoCard>
          ))}
        </div>
      </Container>
    </section>
  );
};
