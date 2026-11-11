import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { achievements } from '../data/portfolioData';
import { Trophy, Award, Star, Sparkles, CheckCircle2 } from 'lucide-react';

export const Achievements: React.FC = () => {
  const { language } = useLanguage();

  const getCardBorder = (color: string) => {
    switch (color) {
      case 'lime':
        return 'hover:border-lime/60 group-hover:text-lime';
      case 'cobalt':
        return 'hover:border-cobalt/60 group-hover:text-cobalt';
      case 'coral':
        return 'hover:border-coral/60 group-hover:text-coral';
      default:
        return 'hover:border-lavender/60 group-hover:text-lavender';
    }
  };

  return (
    <section className="py-24 bg-navy text-ivory relative overflow-hidden bg-grid-navy border-b border-ivory/10">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-lime mb-3">
              <span className="text-navy bg-lime px-1.5 py-0.5 rounded text-[11px] font-bold">06</span>
              <span>Milestones & Distinction</span>
            </div>
            <h2 className="font-headline font-bold text-3xl sm:text-5xl text-ivory tracking-tight leading-tight">
              Achievements & <span className="font-serif italic font-normal text-lime">Recognition.</span>
            </h2>
          </div>

          <div className="max-w-md font-mono text-xs text-ivory/60 leading-relaxed">
            "Validated milestones across national talent programs, regional innovation honors, and academic excellence."
          </div>
        </div>

        {/* Big Numbers Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item, idx) => (
            <div
              key={idx}
              className={`p-6 sm:p-8 rounded-3xl bg-navy-surface border border-ivory/10 editorial-card-dark-hover relative flex flex-col justify-between group ${getCardBorder(item.accentColor)}`}
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-ivory/50 mb-4">
                  <span className="text-lime">{item.glyph} RECOGNITION #{idx + 1}</span>
                  <span>VERIFIED</span>
                </div>

                {/* Big Metric Display */}
                <div className="flex items-baseline gap-1 my-3">
                  {item.prefix && (
                    <span className="font-mono text-xl text-ivory/70 mr-1">
                      {item.prefix}
                    </span>
                  )}
                  <span className="font-headline font-bold text-5xl sm:text-6xl text-ivory tracking-tight group-hover:text-lime transition-colors">
                    {item.number}
                  </span>
                  {item.suffix && (
                    <span className="font-mono text-base text-ivory/60 ml-1">
                      {item.suffix}
                    </span>
                  )}
                </div>

                <h3 className="font-headline font-bold text-lg text-ivory mt-2">
                  {language === 'en' ? item.label.en : item.label.id}
                </h3>

                <p className="text-xs sm:text-sm text-ivory/70 font-sans leading-relaxed mt-2">
                  {language === 'en' ? item.description.en : item.description.id}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-ivory/10 flex items-center justify-between text-[11px] font-mono text-ivory/60">
                <span className="font-semibold text-ivory/80">{item.institution}</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-lime" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
