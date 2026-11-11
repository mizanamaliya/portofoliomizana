import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { publications } from '../data/portfolioData';
import { 
  BookOpen, 
  FileText, 
  ExternalLink, 
  ChevronDown, 
  ChevronUp, 
  Award, 
  Quote, 
  Search,
  CheckCircle2,
  Bookmark
} from 'lucide-react';

export const ResearchPublications: React.FC = () => {
  const { language } = useLanguage();
  const [expandedAbstract, setExpandedAbstract] = useState<string | null>('pub-landslide-wonosobo');

  const toggleAbstract = (id: string) => {
    setExpandedAbstract(expandedAbstract === id ? null : id);
  };

  return (
    <section id="publications" className="py-24 bg-navy text-ivory relative overflow-hidden bg-grid-navy border-b border-ivory/10">
      {/* Background Ambience */}
      <div className="absolute top-0 right-1/3 w-96 h-96 bg-cobalt/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-lime mb-3">
              <span className="text-navy bg-lime px-1.5 py-0.5 rounded text-[11px] font-bold">04</span>
              <span>Scholarly Output</span>
            </div>
            <h2 className="font-headline font-bold text-3xl sm:text-5xl text-ivory tracking-tight leading-tight">
              Research, Evidence & <span className="font-serif italic font-normal text-lavender">Exploration.</span>
            </h2>
          </div>

          <div className="max-w-md font-mono text-xs text-ivory/60 leading-relaxed">
            "Three peer-reviewed scientific contributions bridging geospatial algorithms, computer vision, and inclusive assistive technology."
          </div>
        </div>

        {/* Academic Editorial Stack */}
        <div className="space-y-8">
          {publications.map((pub, index) => {
            const isExpanded = expandedAbstract === pub.id;

            return (
              <div
                key={pub.id}
                className="rounded-3xl bg-navy-surface border border-ivory/15 p-6 sm:p-9 editorial-card-dark-hover relative overflow-hidden group transition-all"
              >
                {/* Journal / Conference Header Meta */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-ivory/10 text-xs font-mono">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-navy text-lime border border-lime/30 font-bold uppercase tracking-wider">
                      {pub.venueType}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-ivory/10 text-ivory/80 border border-ivory/15">
                      {pub.indexation}
                    </span>
                  </div>

                  <span className="text-ivory/50">
                    Publication Date: {pub.year}
                  </span>
                </div>

                {/* Article Content */}
                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-4">
                    <span className="font-mono text-2xl sm:text-3xl font-bold text-lime/40 select-none">
                      0{index + 1}
                    </span>
                    <div className="flex-1">
                      <h3 className="font-headline font-bold text-xl sm:text-2xl text-ivory group-hover:text-lime transition-colors leading-snug">
                        {pub.title}
                      </h3>

                      <div className="mt-2 flex flex-wrap items-center gap-2 text-xs font-mono text-ivory/70">
                        <span className="text-coral font-medium">Authors:</span>
                        <span>{pub.authors}</span>
                        <span>•</span>
                        <span className="text-cobalt font-semibold">{pub.journal}</span>
                      </div>
                    </div>
                  </div>

                  {/* Subject Keywords / Tags */}
                  <div className="flex flex-wrap gap-1.5 pl-0 sm:pl-11">
                    {pub.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded bg-navy text-[11px] font-mono text-ivory/75 border border-ivory/10"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Expandable Abstract Drawer */}
                  <div className="pl-0 sm:pl-11 pt-2">
                    <button
                      onClick={() => toggleAbstract(pub.id)}
                      className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-lime hover:underline"
                    >
                      <Bookmark className="w-3.5 h-3.5" />
                      <span>
                        {isExpanded
                          ? (language === 'en' ? 'Hide Abstract' : 'Tutup Abstrak')
                          : (language === 'en' ? 'Read Abstract Blueprint' : 'Baca Abstrak Lengkap')}
                      </span>
                      {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    </button>

                    {isExpanded && (
                      <div className="mt-4 p-5 rounded-2xl bg-navy/80 border border-ivory/10 animate-in fade-in duration-300">
                        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-ivory/40 mb-2">
                          <FileText className="w-3.5 h-3.5 text-lime" />
                          <span>Executive Abstract</span>
                        </div>
                        <p className="text-sm sm:text-base text-ivory/85 leading-relaxed font-sans">
                          {language === 'en' ? pub.abstract.en : pub.abstract.id}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Footer Action Links */}
                <div className="mt-6 pt-5 border-t border-ivory/10 pl-0 sm:pl-11 flex flex-wrap items-center justify-between gap-3">
                  <div className="text-xs font-mono text-ivory/50 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-lime" />
                    <span>Peer-Reviewed & Formally Accepted</span>
                  </div>

                  {pub.link && (
                    <a
                      href={pub.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ivory text-navy hover:bg-lime text-xs font-mono font-bold transition-colors"
                    >
                      <span>{language === 'en' ? 'View Publication Source' : 'Buka Laman Jurnal'}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
