import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { skillCategories } from '../data/portfolioData';
import { 
  Database, 
  Code2, 
  PenTool, 
  Workflow, 
  Check, 
  Sparkles,
  Terminal,
  Cpu
} from 'lucide-react';

export const Skills: React.FC = () => {
  const { language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<number | 'all'>('all');

  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return Database;
      case 1:
        return Code2;
      case 2:
        return PenTool;
      default:
        return Workflow;
    }
  };

  const getAccentColors = (index: number) => {
    switch (index) {
      case 0:
        return {
          pill: 'bg-lime text-navy border-navy',
          cardBorder: 'border-lime/30',
          dot: 'bg-lime',
        };
      case 1:
        return {
          pill: 'bg-cobalt text-ivory border-navy',
          cardBorder: 'border-cobalt/30',
          dot: 'bg-cobalt',
        };
      case 2:
        return {
          pill: 'bg-coral text-navy border-navy',
          cardBorder: 'border-coral/30',
          dot: 'bg-coral',
        };
      default:
        return {
          pill: 'bg-lavender text-navy border-navy',
          cardBorder: 'border-lavender/30',
          dot: 'bg-lavender',
        };
    }
  };

  const categoriesToShow = activeCategory === 'all'
    ? skillCategories
    : [skillCategories[activeCategory]];

  return (
    <section id="skills" className="py-24 bg-ivory relative border-b border-navy/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-navy/60 mb-3">
              <span className="text-lime bg-navy px-1.5 py-0.5 rounded text-[11px] font-bold">05</span>
              <span>Tooling & Capabilities</span>
            </div>
            <h2 className="font-headline font-bold text-3xl sm:text-5xl text-navy tracking-tight leading-tight">
              Skills & Technical <span className="font-serif italic font-normal text-cobalt">Fluency.</span>
            </h2>
          </div>

          <div className="max-w-md font-mono text-xs text-navy/60 leading-relaxed">
            "No superficial percentages — focused on verified tooling, normalized data architecture, and full-stack execution."
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-10">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-full font-mono text-xs transition-all ${
              activeCategory === 'all'
                ? 'bg-navy text-lime font-bold shadow-md'
                : 'bg-ivory-card border border-navy/15 text-navy/70 hover:border-navy'
            }`}
          >
            {language === 'en' ? 'Show All Domains' : 'Semua Bidang'}
          </button>

          {skillCategories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(idx)}
              className={`px-4 py-2 rounded-full font-mono text-xs flex items-center gap-1.5 transition-all ${
                activeCategory === idx
                  ? 'bg-navy text-lime font-bold shadow-md'
                  : 'bg-ivory-card border border-navy/15 text-navy/70 hover:border-navy'
              }`}
            >
              <span>{cat.glyph}</span>
              <span>{language === 'en' ? cat.categoryName.en : cat.categoryName.id}</span>
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categoriesToShow.map((cat, catIdx) => {
            const actualIndex = activeCategory === 'all' ? catIdx : activeCategory;
            const Icon = getCategoryIcon(actualIndex);
            const styling = getAccentColors(actualIndex);

            return (
              <div
                key={catIdx}
                className="rounded-3xl bg-ivory-card border border-navy/10 p-6 sm:p-8 editorial-card-hover relative flex flex-col justify-between shadow-sm"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between pb-5 border-b border-navy/10">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-navy text-lime flex items-center justify-center font-mono text-lg font-bold">
                        {cat.glyph}
                      </div>
                      <div>
                        <h3 className="font-headline font-bold text-xl text-navy">
                          {language === 'en' ? cat.categoryName.en : cat.categoryName.id}
                        </h3>
                        <span className="text-[11px] font-mono text-navy/50 uppercase tracking-wider">
                          {cat.skills.length} Competencies
                        </span>
                      </div>
                    </div>

                    <Icon className="w-5 h-5 text-navy/30" />
                  </div>

                  {/* Skills Cloud */}
                  <div className="mt-6 flex flex-wrap gap-2.5">
                    {cat.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className={`group relative px-3 py-2 rounded-xl transition-all ${
                          skill.highlight
                            ? 'bg-navy text-ivory border border-navy shadow-sm'
                            : 'bg-ivory text-navy/90 border border-navy/15 hover:border-navy/40'
                        }`}
                      >
                        <div className="flex items-center gap-1.5">
                          {skill.highlight && (
                            <span className="w-1.5 h-1.5 rounded-full bg-lime animate-pulse"></span>
                          )}
                          <span className="font-headline font-semibold text-xs sm:text-sm">
                            {skill.name}
                          </span>
                        </div>

                        {skill.note && (
                          <div className={`text-[10px] font-mono mt-0.5 ${skill.highlight ? 'text-ivory/60' : 'text-navy/50'}`}>
                            {skill.note}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-navy/10 flex items-center justify-between text-[11px] font-mono text-navy/60">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-lime border border-navy"></span>
                    <span>Highlighted = Core Daily Stack</span>
                  </span>
                  <span>{cat.glyph} UNSIQ & Industry Tested</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
