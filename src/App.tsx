import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { SelectedProjects } from './components/SelectedProjects';
import { ResearchPublications } from './components/ResearchPublications';
import { Skills } from './components/Skills';
import { Achievements } from './components/Achievements';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-ivory text-navy font-sans selection:bg-lime selection:text-navy">
        {/* Subtle follower cursor on desktop */}
        <CustomCursor />

        {/* Sticky Minimalist Header */}
        <Navbar />

        {/* Main Content Flow */}
        <main>
          {/* 1. Hero Section (Asymmetrical Editorial, High Impact) */}
          <Hero />

          {/* 2. About Me ("More Than Just a Degree", S1 Informatics UNSIQ, Core Pillars) */}
          <About />

          {/* 3. Professional Experience (BPS Ongoing, Dicoding Asah, IndonesiaNEXT, PMM) */}
          <Experience />

          {/* 4. Selected Works & Digital Experiments (Top 3 Highlighted + 5 Supporting Bento) */}
          <SelectedProjects />

          {/* 5. Research & Scientific Publications (SINTA 3, ITB, UNS) */}
          <ResearchPublications />

          {/* 6. Skills & Technical Fluency (Categorized, Honest, Verified Stack) */}
          <Skills />

          {/* 7. Achievements & Milestones (Big Numbers, Verified Distinctions) */}
          <Achievements />

          {/* 8. Contact & Direct Inquiries ("Have an Idea? Let's Make It Happen") */}
          <Contact />
        </main>

        {/* 9. Editorial Footer */}
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default App;
