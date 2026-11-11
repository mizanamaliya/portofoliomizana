import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ArrowUp, Sparkles, MapPin, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const { language } = useLanguage();
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy text-ivory py-16 border-t border-ivory/10 relative overflow-hidden bg-grid-navy">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Top Footer Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-12 border-b border-ivory/10 gap-8">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-lime text-navy font-mono text-base font-bold">
                ⟡
              </span>
              <span className="font-headline font-bold text-2xl tracking-tight text-ivory">
                MIZANA AMALIYA
              </span>
            </div>
            <p className="text-xs font-mono text-ivory/60 mt-2 max-w-md">
              Informatics Graduate • Data Processing & Analysis • Machine Learning • Scientific Research
            </p>
          </div>

          {/* Quick links & Back to Top */}
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-2 text-xs font-mono text-ivory/70">
              <MapPin className="w-3.5 h-3.5 text-coral" />
              <span>Wonosobo, Central Java, Indonesia</span>
            </div>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-ivory/20 hover:border-lime hover:text-lime text-xs font-mono transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom Editorial Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-ivory/50">
          <p>
            Designed &amp; Developed with curiosity by{' '}
            <span className="text-lime font-medium">Mizana Amaliya</span> © {currentYear}. All rights reserved.
          </p>

          <div className="flex items-center gap-3 text-ivory/40 select-none">
            <span>⟡</span>
            <span>⌬</span>
            <span>⌘</span>
            <span>⊹</span>
            <span>⌖</span>
            <span>◈</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
