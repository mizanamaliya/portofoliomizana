import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { personalInfo } from '../data/portfolioData';
import { 
  GraduationCap, 
  Award, 
  BookOpen, 
  Sparkles, 
  TrendingUp, 
  Layers, 
  BrainCircuit, 
  Database, 
  CheckCircle2 
} from 'lucide-react';

export const About: React.FC = () => {
  const { language } = useLanguage();

  const corePillars = [
    {
      title: language === 'en' ? 'Data Processing & Analysis' : 'Pengolahan & Analisis Data',
      desc: language === 'en'
        ? 'Extracting clean signal from raw datasets through rigorous validation, EDA, statistical checks, and automated pipelines.'
        : 'Mengekstraksi wawasan berharga dari data mentah melalui validasi ketat, EDA, uji statistik, dan otomatisasi pipeline.',
      icon: Database,
      accent: 'border-lime/40 text-lime bg-lime/10',
    },
    {
      title: language === 'en' ? 'Database Architecture' : 'Perancangan Database',
      desc: language === 'en'
        ? 'Designing normalized (3NF), high-integrity relational schemas with PostgreSQL and MySQL for scalable data integrity.'
        : 'Merancang skema relasional ternormalisasi (3NF) dengan PostgreSQL dan MySQL untuk skalabilitas dan integritas data.',
      icon: Layers,
      accent: 'border-cobalt/40 text-cobalt bg-cobalt/10',
    },
    {
      title: language === 'en' ? 'Full-Stack Development' : 'Pengembangan Web & Mobile',
      desc: language === 'en'
        ? 'Building resilient web and mobile interfaces using React, JavaScript, PHP/Laravel, and Android Studio/Kotlin.'
        : 'Membangun aplikasi web dan mobile yang tangguh menggunakan React, JavaScript, PHP/Laravel, dan Kotlin.',
      icon: TrendingUp,
      accent: 'border-coral/40 text-coral bg-coral/10',
    },
    {
      title: language === 'en' ? 'Machine Learning & Research' : 'Machine Learning & Riset',
      desc: language === 'en'
        ? 'Applying supervised learning models (XGBoost, Random Forest, SVM) and publishing empirical findings in peer-reviewed journals.'
        : 'Menerapkan model supervised learning (XGBoost, RF, SVM) serta mempublikasikan hasil riset pada jurnal ilmiah bereputasi.',
      icon: BrainCircuit,
      accent: 'border-lavender/40 text-lavender bg-lavender/10',
    },
  ];

  return (
    <section id="about" className="py-24 bg-ivory relative border-b border-navy/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-navy/60 mb-3">
              <span className="text-lime bg-navy px-1.5 py-0.5 rounded text-[11px] font-bold">01</span>
              <span>Identity & Narrative</span>
            </div>
            <h2 className="font-headline font-bold text-3xl sm:text-5xl text-navy tracking-tight leading-tight">
              More Than Just <span className="font-serif italic font-normal text-cobalt">a Degree.</span>
            </h2>
          </div>

          <div className="max-w-md font-mono text-xs text-navy/60 leading-relaxed">
            "Transforming theoretical rigor into production-ready software and empirical research that drives real value."
          </div>
        </div>

        {/* 2-Column Editorial Storytelling Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Narrative Paragraphs (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-navy/85 text-base sm:text-lg leading-relaxed">
            <div className="p-6 rounded-2xl bg-ivory-card border border-navy/10 shadow-sm relative">
              <span className="font-headline font-bold text-xs uppercase tracking-wider text-cobalt block mb-2 font-mono">
                {language === 'en' ? 'Foundational Philosophy' : 'Filosofi Fondasi'}
              </span>
              <p className="font-headline text-xl sm:text-2xl font-bold text-navy leading-snug">
                {language === 'en' ? personalInfo.positioningHeadline.en : personalInfo.positioningHeadline.id}
              </p>
              <p className="mt-3 text-sm sm:text-base text-navy/80">
                {language === 'en' ? personalInfo.positioningStatement.en : personalInfo.positioningStatement.id}
              </p>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-navy/80 font-sans leading-relaxed">
              {(language === 'en' ? personalInfo.aboutBio.en : personalInfo.aboutBio.id).map((para, i) => (
                <p key={i}>
                  {para}
                </p>
              ))}
            </div>

            {/* Quick Core Pillars Cards */}
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {corePillars.map((pillar, idx) => {
                const IconComponent = pillar.icon;
                return (
                  <div 
                    key={idx}
                    className="p-4 rounded-xl bg-ivory-card border border-navy/10 hover:border-navy/30 transition-all shadow-sm"
                  >
                    <div className="flex items-center gap-2.5 mb-2">
                      <div className={`p-1.5 rounded-lg border ${pillar.accent}`}>
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <h4 className="font-headline font-bold text-sm text-navy">
                        {pillar.title}
                      </h4>
                    </div>
                    <p className="text-xs text-navy/70 leading-normal font-sans">
                      {pillar.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Visual Highlight Cards (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {/* Card 1: GPA & Education */}
            <div className="p-6 rounded-2xl bg-navy text-ivory border border-ivory/10 shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-lime/10 rounded-full blur-2xl pointer-events-none"></div>
              <div className="flex items-start justify-between">
                <div>
                  <span className="font-mono text-xs text-lime uppercase tracking-widest flex items-center gap-1.5">
                    <GraduationCap className="w-4 h-4 text-lime" />
                    <span>Academic Distinction</span>
                  </span>
                  <div className="mt-2 flex items-baseline gap-2">
                    <span className="font-headline font-bold text-5xl text-ivory tracking-tight">3.85</span>
                    <span className="font-mono text-xl text-ivory/60">/ 4.00</span>
                  </div>
                  <h4 className="font-headline font-bold text-base text-ivory mt-2">
                    Universitas Sains Al-Qur'an (UNSIQ)
                  </h4>
                  <p className="text-xs text-ivory/70 mt-1">
                    S1 Teknik Informatika • Summa Cum Laude Honors
                  </p>
                </div>
                <span className="w-8 h-8 rounded-full bg-lime/15 text-lime flex items-center justify-center font-mono text-sm">
                  ⟡
                </span>
              </div>
            </div>

            {/* Card 2: Scientific Publications */}
            <div className="p-6 rounded-2xl bg-navy text-ivory border border-ivory/10 shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cobalt/15 rounded-full blur-2xl pointer-events-none"></div>
              <div className="flex items-start justify-between">
                <div>
                  <span className="font-mono text-xs text-cobalt uppercase tracking-widest flex items-center gap-1.5">
                    <BookOpen className="w-4 h-4 text-cobalt" />
                    <span>Scientific Output</span>
                  </span>
                  <div className="mt-2 flex items-baseline gap-2">
                    <span className="font-headline font-bold text-5xl text-ivory tracking-tight">3</span>
                    <span className="font-mono text-base text-ivory/60">Publications</span>
                  </div>
                  <h4 className="font-headline font-bold text-base text-ivory mt-2">
                    Jurnal SINTA 3, ITB & UNS Conferences
                  </h4>
                  <p className="text-xs text-ivory/70 mt-1">
                    Geospatial Machine Learning, Biomechanics & AI Accessibility
                  </p>
                </div>
                <span className="w-8 h-8 rounded-full bg-cobalt/20 text-cobalt flex items-center justify-center font-mono text-sm">
                  ◈
                </span>
              </div>
            </div>

            {/* Card 3: Top 99 IndonesiaNEXT */}
            <div className="p-6 rounded-2xl bg-navy text-ivory border border-ivory/10 shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-coral/15 rounded-full blur-2xl pointer-events-none"></div>
              <div className="flex items-start justify-between">
                <div>
                  <span className="font-mono text-xs text-coral uppercase tracking-widest flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-coral" />
                    <span>National Recognition</span>
                  </span>
                  <div className="mt-2 flex items-baseline gap-2">
                    <span className="font-headline font-bold text-4xl text-ivory tracking-tight">Top 99</span>
                    <span className="font-mono text-xs text-coral font-bold px-2 py-0.5 rounded bg-coral/20">
                      / 7,000+
                    </span>
                  </div>
                  <h4 className="font-headline font-bold text-base text-ivory mt-2">
                    IndonesiaNEXT Batch 9 — Telkomsel
                  </h4>
                  <p className="text-xs text-ivory/70 mt-1">
                    Digital Talent Development, UI/UX & AI Product Ideation
                  </p>
                </div>
                <span className="w-8 h-8 rounded-full bg-coral/20 text-coral flex items-center justify-center font-mono text-sm">
                  ⌘
                </span>
              </div>
            </div>

            {/* Card 4: Finalist Krenova Wonosobo 2025 */}
            <div className="p-6 rounded-2xl bg-navy text-ivory border border-ivory/10 shadow-xl relative overflow-hidden group">
              <div className="flex items-start justify-between">
                <div>
                  <span className="font-mono text-xs text-lavender uppercase tracking-widest flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-lavender" />
                    <span>Regional Innovation</span>
                  </span>
                  <div className="mt-2 flex items-baseline gap-2">
                    <span className="font-headline font-bold text-4xl text-ivory tracking-tight">Finalist</span>
                    <span className="font-mono text-sm text-ivory/60">Top 20</span>
                  </div>
                  <h4 className="font-headline font-bold text-base text-ivory mt-2">
                    Krenova Wonosobo Regency 2025
                  </h4>
                  <p className="text-xs text-ivory/70 mt-1">
                    "Sampah Cerdas" Digital Waste Logistics & Reward System
                  </p>
                </div>
                <span className="w-8 h-8 rounded-full bg-lavender/20 text-lavender flex items-center justify-center font-mono text-sm">
                  ⎔
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
