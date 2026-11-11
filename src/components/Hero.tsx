import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { personalInfo } from '../data/portfolioData';
import { 
  ArrowDown, 
  ArrowUpRight, 
  FileText, 
  MapPin, 
  Sparkles, 
  Terminal, 
  Database, 
  Cpu, 
  Check, 
  Copy,
  ExternalLink
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const Hero: React.FC = () => {
  const { language } = useLanguage();
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleDownloadCV = (e: React.MouseEvent) => {
    // Confetti effect
    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#151B2E', '#C5F36B', '#6378FF', '#FF8066']
      });
    } catch (err) {
      // ignore
    }
  };

  return (
    <section className="relative min-h-[92vh] pt-32 pb-20 overflow-hidden bg-ivory bg-grid-ivory flex flex-col justify-between">
      {/* Editorial floating glyph accents */}
      <div className="absolute top-28 right-8 lg:right-24 font-mono text-2xl text-navy/15 select-none animate-pulse-subtle pointer-events-none">
        ⌬ [DATA_OPS]
      </div>
      <div className="absolute top-1/2 left-4 lg:left-12 font-mono text-lg text-cobalt/20 select-none pointer-events-none hidden md:block">
        ⌖ 07°21'S 109°54'E // WONOSOBO
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 w-full z-10">
        {/* Top Editorial Tag / Breadcrumb */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy text-lime font-mono text-xs tracking-wider uppercase shadow-sm">
            <span className="w-2 h-2 rounded-full bg-lime animate-ping"></span>
            <span>Available for Opportunities</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-navy/15 text-navy/70 font-mono text-xs">
            <MapPin className="w-3.5 h-3.5 text-coral" />
            <span>{personalInfo.locationShort}</span>
          </div>

          <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-navy/15 text-navy/70 font-mono text-xs">
            <span className="text-cobalt font-bold">IPK</span>
            <span className="font-bold text-navy">{personalInfo.gpa}</span>
          </div>
        </div>

        {/* Asymmetrical Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headlines & Editorial Story (7 cols) */}
          <div className="lg:col-span-7 flex flex-col">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-headline font-bold text-4xl sm:text-6xl xl:text-7xl leading-[1.08] tracking-tight text-navy"
            >
              Turning <span className="text-cobalt underline decoration-lime decoration-4 underline-offset-4">Data</span> Into Insights,{' '}
              <span className="font-serif italic font-normal text-navy/90 block sm:inline">
                Ideas Into Impact.
              </span>
            </motion.h1>

            {/* Subheadline & Bio snippet */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-6 flex flex-col gap-4 max-w-2xl"
            >
              <p className="text-lg sm:text-xl font-headline font-medium text-navy/90 leading-snug">
                Hi, I'm <span className="font-bold text-navy border-b-2 border-lime">Mizana Amaliya</span> —{' '}
                {language === 'en' 
                  ? personalInfo.heroSubtitle.en 
                  : personalInfo.heroSubtitle.id}
              </p>

              <p className="text-base text-navy/75 leading-relaxed font-sans">
                {language === 'en'
                  ? personalInfo.positioningStatement.en
                  : personalInfo.positioningStatement.id}
              </p>
            </motion.div>

            {/* Credential Highlights Pills */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 py-4 border-y border-navy/10"
            >
              <div className="flex flex-col">
                <span className="font-mono text-xs uppercase text-navy/50 flex items-center gap-1">
                  <span>⟡</span> Degree
                </span>
                <span className="font-headline font-bold text-sm text-navy mt-0.5">
                  B.Comp.Sc.
                </span>
                <span className="text-[11px] text-navy/60 font-mono">Informatics UNSIQ</span>
              </div>

              <div className="flex flex-col">
                <span className="font-mono text-xs uppercase text-navy/50 flex items-center gap-1">
                  <span>⌬</span> GPA
                </span>
                <span className="font-headline font-bold text-sm text-cobalt mt-0.5">
                  3.85 / 4.00
                </span>
                <span className="text-[11px] text-navy/60 font-mono">Summa Cum Laude</span>
              </div>

              <div className="flex flex-col">
                <span className="font-mono text-xs uppercase text-navy/50 flex items-center gap-1">
                  <span>◈</span> Research
                </span>
                <span className="font-headline font-bold text-sm text-navy mt-0.5">
                  3 Publications
                </span>
                <span className="text-[11px] text-navy/60 font-mono">SINTA 3, ITB, UNS</span>
              </div>

              <div className="flex flex-col">
                <span className="font-mono text-xs uppercase text-navy/50 flex items-center gap-1">
                  <span>⌘</span> Honors
                </span>
                <span className="font-headline font-bold text-sm text-coral mt-0.5">
                  Top 99 Natl
                </span>
                <span className="text-[11px] text-navy/60 font-mono">IndonesiaNEXT Batch 9</span>
              </div>
            </motion.div>

            {/* CTA Action Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              {/* Explore My Work */}
              <a
                href="#projects"
                className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-navy text-ivory font-headline font-semibold text-sm hover:bg-navy/90 hover:shadow-xl transition-all"
              >
                <span>{language === 'en' ? 'Explore My Work' : 'Lihat Portofolio'}</span>
                <ArrowDown className="w-4 h-4 text-lime group-hover:translate-y-1 transition-transform" />
              </a>

              {/* Download CV */}
              <a
                href={`#contact`}
                onClick={handleDownloadCV}
                className="group inline-flex items-center gap-2.5 px-5 py-3.5 rounded-full border-2 border-navy text-navy font-headline font-semibold text-sm hover:bg-navy hover:text-ivory transition-all"
              >
                <FileText className="w-4 h-4 text-cobalt group-hover:text-lime transition-colors" />
                <span>{language === 'en' ? 'Download CV' : 'Unduh CV'}</span>
                <span className="text-xs font-mono opacity-70 group-hover:text-lime">.PDF</span>
              </a>

              {/* Quick Copy Email button */}
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-full border border-navy/20 bg-ivory/80 text-navy/80 hover:text-navy hover:border-navy text-xs font-mono transition-colors"
                title="Copy email to clipboard"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-green-600" />
                    <span className="text-green-700 font-semibold">{language === 'en' ? 'Email Copied!' : 'Email Tersalin!'}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-navy/50" />
                    <span>mizanaamaliya1123@gmail.com</span>
                  </>
                )}
              </button>
            </motion.div>
          </div>

          {/* Right Column: Visual Portrait & Creative Tech Elements (5 cols) */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            {/* Background Decorative Rings / Orbitals */}
            <div className="absolute w-[360px] h-[360px] sm:w-[440px] sm:h-[440px] rounded-full border border-navy/10 animate-spin-slow pointer-events-none"></div>
            <div className="absolute w-[290px] h-[290px] sm:w-[360px] sm:h-[360px] rounded-full border border-dashed border-cobalt/25 pointer-events-none"></div>
            
            {/* Main Interactive Editorial Frame */}
            <div className="relative w-full max-w-[380px] z-10">
              {/* Top Bar of the Editorial Frame */}
              <div className="bg-navy rounded-t-2xl px-5 py-3 flex items-center justify-between text-ivory border-b border-ivory/10">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-coral"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-lime"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-cobalt"></span>
                  <span className="text-xs font-mono text-ivory/70 ml-2">mizana.amaliya.id</span>
                </div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-lime">
                  ⟡ VERIFIED
                </span>
              </div>

              {/* Photo & Identity Display Container */}
              <div className="bg-navy-surface border-x-2 border-b-2 border-navy rounded-b-2xl p-6 text-ivory relative overflow-hidden shadow-2xl">
                {/* Visual Avatar / Profile Area */}
                <div className="relative aspect-[4/4.5] w-full rounded-xl overflow-hidden bg-gradient-to-br from-navy to-navy-surface border border-ivory/10 flex flex-col items-center justify-center p-4 text-center group">
                  {/* Subtle Geometric Graphic behind avatar */}
                  <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#C5F36B_1px,transparent_1px)] [background-size:16px_16px]"></div>
                  
                  {/* Avatar Frame with User Image Fallback */}
                  <div className="relative w-36 h-36 rounded-2xl bg-gradient-to-tr from-cobalt/30 via-lime/20 to-lavender/30 p-1 mb-4 shadow-inner">
                    <div className="w-full h-full rounded-xl bg-navy border border-ivory/20 flex flex-col items-center justify-center overflow-hidden relative">
                      {/* Stylized monogram / photo placeholder that user can replace with their real photo */}
                      <img 
                        src="/profile-mizana.svg" 
                        alt="Mizana Amaliya"
                        onError={(e) => {
                          const target = e.currentTarget;
                          target.style.display = 'none';
                          const fallback = target.nextElementSibling as HTMLElement;
                          if (fallback) fallback.style.display = 'flex';
                        }}
                        className="w-full h-full object-cover"
                      />
                      <div className="hidden flex-col items-center justify-center w-full h-full text-center p-3 bg-navy">
                        <span className="font-headline font-bold text-4xl text-lime tracking-tighter">MA</span>
                        <span className="text-[10px] font-mono text-ivory/60 mt-1 uppercase">Mizana Amaliya</span>
                      </div>
                    </div>
                  </div>

                  <h3 className="font-headline font-bold text-lg text-ivory">Mizana Amaliya</h3>
                  <p className="text-xs font-mono text-lime mt-0.5">Informatics • Data Analyst • ML</p>
                  
                  <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-ivory/10 border border-ivory/15 text-[11px] font-mono text-ivory/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-lime"></span>
                    BPS Asisten Pranata Komputer
                  </div>
                </div>

                {/* Floating Micro-Badge 1: ML Model Accuracy */}
                <motion.div 
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="absolute -top-3 -right-3 sm:-right-4 bg-lime text-navy p-3 rounded-xl shadow-lg border border-navy max-w-[170px]"
                >
                  <div className="flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-wider text-navy/70">
                    <Database className="w-3 h-3 text-navy" />
                    <span>ML Research</span>
                  </div>
                  <p className="font-headline font-bold text-xs mt-0.5 text-navy leading-tight">
                    93.4% Acc. XGBoost Landslide Classifier
                  </p>
                </motion.div>

                {/* Floating Micro-Badge 2: Current Status */}
                <motion.div 
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="absolute -bottom-3 -left-3 sm:-left-4 bg-navy text-ivory p-3 rounded-xl shadow-xl border border-ivory/15 max-w-[190px]"
                >
                  <div className="flex items-center gap-1.5 text-[10px] font-mono text-coral font-bold uppercase">
                    <Cpu className="w-3 h-3" />
                    <span>Publications</span>
                  </div>
                  <p className="font-headline font-medium text-xs mt-0.5 text-ivory/90 leading-tight">
                    3 Peer-Reviewed Papers (SINTA 3 & Conferences)
                  </p>
                </motion.div>
              </div>

              {/* Note for the user */}
              <div className="text-center mt-2">
                <span className="text-[11px] font-mono text-navy/50">
                  Photo placeholder: put <code className="text-navy font-semibold">profile-mizana.jpg</code> in <code className="text-navy font-semibold">public/</code>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Editorial Bottom Ticker / Marquee */}
      <div className="mt-14 border-y border-navy/15 bg-ivory/50 py-3 overflow-hidden select-none">
        <div className="flex whitespace-nowrap animate-marquee items-center gap-8 font-mono text-xs uppercase tracking-widest text-navy/70">
          <span>⟡ GEOSPATIAL MACHINE LEARNING</span>
          <span>•</span>
          <span>⌬ POSTGRESQL & MYSQL DATABASE DESIGN</span>
          <span>•</span>
          <span>⌘ FULL-STACK REACT & LARAVEL</span>
          <span>•</span>
          <span>⌖ SINTA 3 SCIENTIFIC PUBLICATION</span>
          <span>•</span>
          <span>◈ TELKOMSEL INDONESIANEXT TOP 99</span>
          <span>•</span>
          <span>⎔ KRENOVA 2025 FINALIST</span>
          <span>•</span>
          <span>⟡ BPS DATA OPERATIONS</span>
          <span>•</span>
          <span>⌬ COMPUTER VISION & BIOMECHANICS</span>
          <span>•</span>
          {/* Duplicate for seamless infinite loop */}
          <span>⟡ GEOSPATIAL MACHINE LEARNING</span>
          <span>•</span>
          <span>⌬ POSTGRESQL & MYSQL DATABASE DESIGN</span>
          <span>•</span>
          <span>⌘ FULL-STACK REACT & LARAVEL</span>
          <span>•</span>
          <span>⌖ SINTA 3 SCIENTIFIC PUBLICATION</span>
          <span>•</span>
          <span>◈ TELKOMSEL INDONESIANEXT TOP 99</span>
          <span>•</span>
          <span>⎔ KRENOVA 2025 FINALIST</span>
          <span>•</span>
          <span>⟡ BPS DATA OPERATIONS</span>
          <span>•</span>
          <span>⌬ COMPUTER VISION & BIOMECHANICS</span>
        </div>
      </div>
    </section>
  );
};
