import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ArrowUpRight, Menu, X, Sparkles, Globe } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { language, toggleLanguage } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: language === 'en' ? 'About' : 'Tentang' },
    { href: '#experience', label: language === 'en' ? 'Experience' : 'Pengalaman' },
    { href: '#projects', label: language === 'en' ? 'Projects' : 'Proyek' },
    { href: '#publications', label: language === 'en' ? 'Research' : 'Riset & Jurnal' },
    { href: '#skills', label: language === 'en' ? 'Skills' : 'Keahlian' },
    { href: '#contact', label: language === 'en' ? 'Contact' : 'Kontak' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-ivory/90 backdrop-blur-md border-b border-navy/10 py-3 shadow-sm'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#"
            className="group flex items-center gap-3 text-navy transition-opacity hover:opacity-85"
          >
            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-navy text-lime font-mono text-base font-bold transition-transform duration-300 group-hover:rotate-12 group-hover:scale-105">
              ⟡
            </span>
            <div className="flex flex-col">
              <span className="font-headline font-bold text-base tracking-tight leading-none">
                MIZANA AMALIYA
              </span>
              <span className="text-[10px] uppercase font-mono tracking-widest text-navy/60 mt-1 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-lime inline-block animate-pulse"></span>
                Data • Tech • Research
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs uppercase tracking-widest font-mono text-navy/70 hover:text-navy hover:font-medium transition-all relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-navy hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right actions: Language switch & Contact CTA */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Language Selector */}
            <button
              onClick={toggleLanguage}
              title={language === 'en' ? 'Switch to Bahasa Indonesia' : 'Ganti ke Bahasa Inggris'}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full border border-navy/15 text-xs font-mono font-medium hover:bg-navy hover:text-ivory transition-colors"
            >
              <Globe className="w-3.5 h-3.5 text-cobalt" />
              <span className={language === 'en' ? 'font-bold text-navy' : 'text-navy/50'}>EN</span>
              <span className="text-navy/30">/</span>
              <span className={language === 'id' ? 'font-bold text-navy' : 'text-navy/50'}>ID</span>
            </button>

            {/* Quick CTA */}
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-navy text-ivory text-xs font-mono uppercase tracking-wider hover:bg-navy/90 hover:shadow-lg transition-all"
            >
              <span>{language === 'en' ? "Let's Talk" : 'Hubungi Saya'}</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-lime transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={toggleLanguage}
              className="px-2 py-1 rounded border border-navy/20 text-xs font-mono"
            >
              {language.toUpperCase()}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-navy/5 text-navy hover:bg-navy/10 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-navy/95 backdrop-blur-xl text-ivory flex flex-col justify-between p-8 pt-28 animate-in fade-in duration-200">
          <div className="flex flex-col gap-6">
            <span className="font-mono text-xs uppercase tracking-widest text-lime flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" /> Navigation Menu
            </span>
            <div className="flex flex-col gap-4">
              {navLinks.map((link, idx) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="font-headline text-3xl font-bold hover:text-lime transition-colors flex items-center justify-between border-b border-ivory/10 pb-3"
                >
                  <span>{link.label}</span>
                  <span className="font-mono text-xs text-ivory/40">0{idx + 1}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-ivory/15 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-ivory/60">Language / Bahasa</span>
              <button
                onClick={toggleLanguage}
                className="px-3 py-1.5 rounded-full bg-ivory/10 font-mono text-xs text-lime border border-lime/30"
              >
                Switch to {language === 'en' ? 'Bahasa Indonesia' : 'English'}
              </button>
            </div>
            <a
              href="#contact"
              onClick={handleLinkClick}
              className="w-full text-center py-3 rounded-full bg-lime text-navy font-headline font-bold text-sm tracking-wider uppercase"
            >
              {language === 'en' ? "Get In Touch ↗" : "Hubungi Sekarang ↗"}
            </a>
          </div>
        </div>
      )}
    </>
  );
};
