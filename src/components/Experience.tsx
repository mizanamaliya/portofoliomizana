import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { experiences } from '../data/portfolioData';
import { 
  Building2, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Radio, 
  ArrowUpRight,
  Sparkles,
  ChevronRight
} from 'lucide-react';

export const Experience: React.FC = () => {
  const { language } = useLanguage();

  const getBadgeStyle = (color: string) => {
    switch (color) {
      case 'lime':
        return 'bg-lime/20 text-lime border-lime/40';
      case 'cobalt':
        return 'bg-cobalt/20 text-cobalt border-cobalt/40';
      case 'coral':
        return 'bg-coral/20 text-coral border-coral/40';
      case 'lavender':
        return 'bg-lavender/20 text-lavender border-lavender/40';
      default:
        return 'bg-lime/20 text-lime border-lime/40';
    }
  };

  return (
    <section id="experience" className="py-24 bg-navy text-ivory relative overflow-hidden bg-grid-navy">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-cobalt/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-lime/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-lime mb-3">
              <span className="text-navy bg-lime px-1.5 py-0.5 rounded text-[11px] font-bold">02</span>
              <span>Professional Trajectory</span>
            </div>
            <h2 className="font-headline font-bold text-3xl sm:text-5xl text-ivory tracking-tight leading-tight">
              Experience & <span className="font-serif italic font-normal text-lime">Leadership.</span>
            </h2>
          </div>

          <div className="max-w-md font-mono text-xs text-ivory/60 leading-relaxed">
            "A progression from academic excellence to institutional data operations and national talent incubators."
          </div>
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l border-ivory/15 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {experiences.map((exp, index) => {
            const isBPS = exp.id === 'bps';

            return (
              <div key={exp.id} className="relative group">
                {/* Timeline Node Point */}
                <div 
                  className={`absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                    exp.isOngoing 
                      ? 'bg-lime border-ivory ring-4 ring-lime/20' 
                      : 'bg-navy border-ivory/40 group-hover:border-lime group-hover:scale-125'
                  }`}
                />

                {/* Editorial Card */}
                <div className="p-6 sm:p-8 rounded-2xl bg-navy-surface/80 border border-ivory/10 editorial-card-dark-hover relative">
                  {/* Top Bar with Badges and Period */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className={`text-[11px] font-mono uppercase tracking-wider px-3 py-1 rounded-full border ${getBadgeStyle(exp.badgeColor)}`}>
                        {exp.type}
                      </span>

                      {exp.isOngoing && (
                        <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-lime bg-lime/10 px-2.5 py-1 rounded-full border border-lime/30">
                          <span className="w-2 h-2 rounded-full bg-lime animate-ping"></span>
                          <span>{language === 'en' ? 'Active / In Progress' : 'Sedang Berjalan'}</span>
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-2 text-xs font-mono text-ivory/60">
                      <Calendar className="w-3.5 h-3.5 text-lime" />
                      <span>{language === 'en' ? exp.period.en : exp.period.id}</span>
                    </div>
                  </div>

                  {/* Role & Company */}
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-3">
                    <div>
                      <h3 className="font-headline font-bold text-xl sm:text-2xl text-ivory group-hover:text-lime transition-colors">
                        {language === 'en' ? exp.position.en : exp.position.id}
                      </h3>
                      <div className="flex items-center gap-2 text-sm sm:text-base font-medium text-ivory/80 mt-1">
                        <Building2 className="w-4 h-4 text-cobalt" />
                        <span>{exp.company}</span>
                        <span className="text-ivory/30">•</span>
                        <span className="text-xs font-mono text-ivory/60 flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-coral" />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Core Description */}
                  <p className="text-sm sm:text-base text-ivory/80 leading-relaxed font-sans mb-5 mt-2">
                    {language === 'en' ? exp.description.en : exp.description.id}
                  </p>

                  {/* Ongoing BPS note to prevent leaking unfinalized data */}
                  {isBPS && (
                    <div className="p-3 rounded-lg bg-navy/60 border border-lime/20 text-xs font-mono text-lime/90 flex items-start gap-2 mb-4">
                      <Radio className="w-4 h-4 shrink-0 mt-0.5 animate-pulse text-lime" />
                      <span>
                        {language === 'en' 
                          ? "Note: Program currently in active execution. Detailed datasets, technical tooling metrics, and operational milestones will be documented upon official completion."
                          : "Catatan: Kegiatan pengolahan data masih berlangsung aktif. Rincian volume dataset dan metodologi teknis internal dijaga sesuai kepatuhan institusional hingga program purna tugas."}
                      </span>
                    </div>
                  )}

                  {/* Key Contributions / Highlights */}
                  {exp.highlights && (
                    <div className="pt-4 border-t border-ivory/10 space-y-2">
                      <span className="font-mono text-xs uppercase tracking-wider text-ivory/50 block mb-2">
                        {language === 'en' ? 'Core Engagements & Competencies:' : 'Keterlibatan & Kompetensi:'}
                      </span>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {(language === 'en' ? exp.highlights.en : exp.highlights.id).map((h, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-ivory/70">
                            <ChevronRight className="w-3.5 h-3.5 text-lime shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>
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
