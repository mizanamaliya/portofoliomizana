import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { selectedProjects } from '../data/portfolioData';
import { ProjectItem } from '../types';
import { ProjectModal } from './ProjectModal';
import { 
  ArrowUpRight, 
  Github, 
  ExternalLink, 
  Layers, 
  Cpu, 
  MapPin, 
  Terminal, 
  Sparkles,
  BarChart3,
  FileCode,
  Smartphone,
  Eye
} from 'lucide-react';

export const SelectedProjects: React.FC = () => {
  const { language } = useLanguage();
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const filters = [
    { id: 'all', label: language === 'en' ? 'All Works (8)' : 'Semua Proyek (8)' },
    { id: 'ml-data', label: language === 'en' ? 'Machine Learning & Data' : 'Machine Learning & Data' },
    { id: 'web-system', label: language === 'en' ? 'Web & Database' : 'Web & Database' },
    { id: 'mobile-ui', label: language === 'en' ? 'Mobile & UI/UX' : 'Mobile & UI/UX' },
  ];

  const filteredProjects = selectedProjects.filter((project) => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'ml-data') {
      return project.category.includes('Machine Learning') || project.category.includes('Data') || project.category.includes('AI');
    }
    if (selectedFilter === 'web-system') {
      return project.category.includes('Web') || project.category.includes('Database');
    }
    if (selectedFilter === 'mobile-ui') {
      return project.category.includes('Mobile') || project.category.includes('UI/UX') || project.category.includes('Product');
    }
    return true;
  });

  // Top 3 featured vs other supporting
  const featuredTop3 = filteredProjects.filter((p) => p.featured);
  const supportingProjects = filteredProjects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 bg-ivory relative border-b border-navy/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-navy/60 mb-3">
              <span className="text-lime bg-navy px-1.5 py-0.5 rounded text-[11px] font-bold">03</span>
              <span>Engineering & Product Portfolio</span>
            </div>
            <h2 className="font-headline font-bold text-3xl sm:text-5xl text-navy tracking-tight leading-tight">
              Selected Works & <span className="font-serif italic font-normal text-cobalt">Digital Experiments.</span>
            </h2>
          </div>

          <div className="max-w-md font-mono text-xs text-navy/60 leading-relaxed">
            "Prioritizing high-stakes algorithmic research, enterprise database architectures, and human-centric software."
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-12">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setSelectedFilter(f.id)}
              className={`px-4 py-2 rounded-full font-mono text-xs transition-all ${
                selectedFilter === f.id
                  ? 'bg-navy text-lime font-bold shadow-md'
                  : 'bg-ivory-card border border-navy/15 text-navy/70 hover:border-navy hover:text-navy'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* ======================================================== */}
        {/* TOP 3 FEATURED HIGHLIGHTS (Asymmetrical Bento Grid)     */}
        {/* ======================================================== */}
        {featuredTop3.length > 0 && (
          <div className="mb-14 space-y-8">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-navy/60">
                ⟡ Primary Highlight Works (Flagship)
              </span>
              <div className="h-px bg-navy/15 flex-1"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Project 1: Longsor Wonosobo (Large 12-col or 7-col hero bento) */}
              {featuredTop3[0] && (
                <div className="lg:col-span-12 rounded-3xl bg-navy text-ivory border border-ivory/15 p-6 sm:p-10 relative overflow-hidden editorial-card-dark-hover group">
                  {/* Decorative Glow */}
                  <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-lime/10 rounded-full blur-3xl pointer-events-none"></div>

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    {/* Left details (6 cols) */}
                    <div className="lg:col-span-6 flex flex-col justify-between">
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-4">
                          <span className="px-3 py-1 rounded-full bg-lime text-navy font-mono text-xs font-bold uppercase">
                            01 • {featuredTop3[0].badge}
                          </span>
                          <span className="text-xs font-mono text-ivory/60">
                            {featuredTop3[0].timeline}
                          </span>
                        </div>

                        <h3 className="font-headline font-bold text-2xl sm:text-4xl text-ivory group-hover:text-lime transition-colors leading-tight">
                          {featuredTop3[0].title}
                        </h3>

                        <p className="font-mono text-xs text-lime mt-2 font-medium flex items-center gap-2">
                          <Cpu className="w-3.5 h-3.5" />
                          <span>{featuredTop3[0].metrics}</span>
                        </p>

                        <p className="text-sm sm:text-base text-ivory/80 font-sans leading-relaxed mt-4">
                          {language === 'en'
                            ? featuredTop3[0].shortDescription.en
                            : featuredTop3[0].shortDescription.id}
                        </p>

                        {/* Tech Stack Pills */}
                        <div className="flex flex-wrap gap-1.5 mt-6">
                          {featuredTop3[0].technologies.map((t) => (
                            <span
                              key={t}
                              className="px-2.5 py-1 rounded bg-ivory/10 border border-ivory/15 text-[11px] font-mono text-ivory/90"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Action buttons */}
                      <div className="mt-8 pt-6 border-t border-ivory/15 flex flex-wrap items-center gap-3">
                        <button
                          onClick={() => setActiveModalProject(featuredTop3[0])}
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-lime text-navy font-headline font-bold text-xs uppercase tracking-wider hover:bg-lime/90 transition-all"
                        >
                          <Eye className="w-4 h-4" />
                          <span>{language === 'en' ? 'Detailed Case Study' : 'Studi Kasus Lengkap'}</span>
                        </button>

                        <a
                          href={featuredTop3[0].repoUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-ivory/30 text-ivory text-xs font-mono hover:bg-ivory/10 transition-colors"
                        >
                          <Github className="w-3.5 h-3.5 text-lime" />
                          <span>Repository</span>
                        </a>

                        <a
                          href="#publications"
                          className="inline-flex items-center gap-1.5 text-xs font-mono text-ivory/70 hover:text-lime underline underline-offset-4 ml-auto"
                        >
                          <span>SINTA 3 Paper ↗</span>
                        </a>
                      </div>
                    </div>

                    {/* Right Visual Representation (6 cols) */}
                    <div className="lg:col-span-6 bg-navy-surface rounded-2xl p-5 border border-ivory/15 relative overflow-hidden">
                      <div className="flex items-center justify-between pb-3 border-b border-ivory/10 font-mono text-[11px] text-ivory/60">
                        <span className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-lime"></span>
                          WONOSOBO_LANDSLIDE_GIS_MODEL.SHP
                        </span>
                        <span>EPSG: 4326</span>
                      </div>

                      {/* Visual Graphic Representation */}
                      <div className="py-6 px-4 flex flex-col gap-4">
                        <div className="h-44 rounded-xl bg-gradient-to-br from-navy to-navy-surface border border-lime/30 p-4 relative flex flex-col justify-between overflow-hidden">
                          {/* Topographical contour effect simulation */}
                          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#C5F36B_1px,transparent_1px)] [background-size:12px_12px]"></div>

                          <div className="relative z-10 flex items-center justify-between">
                            <span className="text-[10px] font-mono bg-navy px-2 py-0.5 rounded border border-ivory/20 text-lime">
                              MODEL COMPARISON
                            </span>
                            <span className="text-[10px] font-mono text-ivory/70">
                              ROC-AUC 0.941
                            </span>
                          </div>

                          <div className="relative z-10 space-y-2">
                            <div>
                              <div className="flex justify-between text-[11px] font-mono text-ivory/80 mb-1">
                                <span>XGBoost (Optimized)</span>
                                <span className="text-lime font-bold">93.4% Acc</span>
                              </div>
                              <div className="w-full bg-navy/80 h-2 rounded-full overflow-hidden border border-ivory/15">
                                <div className="bg-lime h-full w-[93.4%] rounded-full"></div>
                              </div>
                            </div>

                            <div>
                              <div className="flex justify-between text-[11px] font-mono text-ivory/80 mb-1">
                                <span>Random Forest</span>
                                <span className="text-cobalt font-bold">89.7% Acc</span>
                              </div>
                              <div className="w-full bg-navy/80 h-2 rounded-full overflow-hidden border border-ivory/15">
                                <div className="bg-cobalt h-full w-[89.7%] rounded-full"></div>
                              </div>
                            </div>

                            <div>
                              <div className="flex justify-between text-[11px] font-mono text-ivory/80 mb-1">
                                <span>Support Vector Machine</span>
                                <span className="text-coral font-bold">84.2% Acc</span>
                              </div>
                              <div className="w-full bg-navy/80 h-2 rounded-full overflow-hidden border border-ivory/15">
                                <div className="bg-coral h-full w-[84.2%] rounded-full"></div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Geospatial Legend */}
                        <div className="grid grid-cols-3 gap-2 font-mono text-[10px] text-center">
                          <div className="p-2 rounded bg-red-950/40 border border-red-500/30 text-red-300">
                            High Susceptibility (Curah Hujan &gt; 3500mm)
                          </div>
                          <div className="p-2 rounded bg-yellow-950/40 border border-yellow-500/30 text-yellow-300">
                            Moderate (Lereng 25°-40°)
                          </div>
                          <div className="p-2 rounded bg-green-950/40 border border-green-500/30 text-green-300">
                            Low (Alluvial Plain)
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Project 2: Sistem Informasi SD Tahfidzul Qur'an (6 cols) */}
              {featuredTop3[1] && (
                <div className="lg:col-span-6 rounded-3xl bg-ivory-card border border-navy/15 p-6 sm:p-8 flex flex-col justify-between editorial-card-hover group shadow-sm">
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                      <span className="px-3 py-1 rounded-full bg-cobalt text-ivory font-mono text-xs font-bold uppercase">
                        02 • {featuredTop3[1].badge}
                      </span>
                      <span className="text-xs font-mono text-navy/60">
                        {featuredTop3[1].timeline}
                      </span>
                    </div>

                    <h3 className="font-headline font-bold text-2xl text-navy group-hover:text-cobalt transition-colors">
                      {featuredTop3[1].title}
                    </h3>

                    <p className="font-mono text-xs text-cobalt mt-2 font-semibold">
                      {featuredTop3[1].metrics}
                    </p>

                    <p className="text-sm text-navy/75 font-sans leading-relaxed mt-3">
                      {language === 'en'
                        ? featuredTop3[1].shortDescription.en
                        : featuredTop3[1].shortDescription.id}
                    </p>

                    {/* School modules visual simulation */}
                    <div className="mt-5 p-4 rounded-xl bg-ivory border border-navy/10 font-mono text-xs">
                      <div className="text-[10px] uppercase text-navy/50 font-bold mb-2">
                        8 INTEGRATED CORE MODULES:
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-[11px] text-navy/80">
                        <span>✓ PPDB Online & Verification</span>
                        <span>✓ Relational MySQL (3NF)</span>
                        <span>✓ Document Upload Pipeline</span>
                        <span>✓ Multi-Role Role-Based Access</span>
                        <span>✓ Academic Newsfeed CMS</span>
                        <span>✓ Student Archival Records</span>
                      </div>
                    </div>

                    {/* Tech pills */}
                    <div className="flex flex-wrap gap-1.5 mt-5">
                      {featuredTop3[1].technologies.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 rounded bg-navy/5 border border-navy/10 text-[11px] font-mono text-navy/80"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-5 border-t border-navy/10 flex items-center justify-between">
                    <button
                      onClick={() => setActiveModalProject(featuredTop3[1])}
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-cobalt hover:underline"
                    >
                      <span>{language === 'en' ? 'View Architecture' : 'Lihat Arsitektur'}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>

                    <a
                      href={featuredTop3[1].repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-mono text-navy/70 hover:text-navy flex items-center gap-1"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Code Repo</span>
                    </a>
                  </div>
                </div>
              )}

              {/* Project 3: AI Learning Insight (6 cols) */}
              {featuredTop3[2] && (
                <div className="lg:col-span-6 rounded-3xl bg-ivory-card border border-navy/15 p-6 sm:p-8 flex flex-col justify-between editorial-card-hover group shadow-sm">
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                      <span className="px-3 py-1 rounded-full bg-lavender text-navy font-mono text-xs font-bold uppercase">
                        03 • {featuredTop3[2].badge}
                      </span>
                      <span className="text-xs font-mono text-navy/60">
                        {featuredTop3[2].timeline}
                      </span>
                    </div>

                    <h3 className="font-headline font-bold text-2xl text-navy group-hover:text-cobalt transition-colors">
                      {featuredTop3[2].title}
                    </h3>

                    <p className="font-mono text-xs text-lavender-dark font-semibold text-purple-700 mt-2">
                      {featuredTop3[2].metrics}
                    </p>

                    <p className="text-sm text-navy/75 font-sans leading-relaxed mt-3">
                      {language === 'en'
                        ? featuredTop3[2].shortDescription.en
                        : featuredTop3[2].shortDescription.id}
                    </p>

                    {/* AI Diagnostics Visual Simulation */}
                    <div className="mt-5 p-4 rounded-xl bg-ivory border border-navy/10 font-mono text-xs">
                      <div className="text-[10px] uppercase text-navy/50 font-bold mb-2">
                        AI DIAGNOSTIC CAPSTONE ENGINE:
                      </div>
                      <div className="space-y-1.5 text-[11px] text-navy/80">
                        <div className="flex items-center justify-between">
                          <span>Adaptive Knowledge Velocity</span>
                          <span className="font-bold text-purple-700">High (92%)</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>Targeted Review Curriculum</span>
                          <span className="text-navy/60">Automated</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>Team Capstone Distinction</span>
                          <span className="text-green-700 font-bold">Asah Dicoding</span>
                        </div>
                      </div>
                    </div>

                    {/* Tech pills */}
                    <div className="flex flex-wrap gap-1.5 mt-5">
                      {featuredTop3[2].technologies.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 rounded bg-navy/5 border border-navy/10 text-[11px] font-mono text-navy/80"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-5 border-t border-navy/10 flex items-center justify-between">
                    <button
                      onClick={() => setActiveModalProject(featuredTop3[2])}
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-purple-800 hover:underline"
                    >
                      <span>{language === 'en' ? 'Explore Capstone' : 'Eksplor Proyek'}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>

                    <a
                      href={featuredTop3[2].repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-mono text-navy/70 hover:text-navy flex items-center gap-1"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Code Repo</span>
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* SUPPORTING DIGITAL EXPERIMENTS (5 Projects Grid)        */}
        {/* ======================================================== */}
        {supportingProjects.length > 0 && (
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-navy/60">
                ◈ Additional Products & Engineering Experiments
              </span>
              <div className="h-px bg-navy/15 flex-1"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {supportingProjects.map((project, idx) => (
                <div
                  key={project.id}
                  className="rounded-2xl bg-ivory-card border border-navy/10 p-6 flex flex-col justify-between editorial-card-hover group shadow-sm hover:border-navy/30"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs font-mono text-navy/50 mb-3">
                      <span className="uppercase text-navy/70 font-semibold">{project.category}</span>
                      <span>0{idx + 4}</span>
                    </div>

                    <h4 className="font-headline font-bold text-xl text-navy group-hover:text-cobalt transition-colors">
                      {project.title}
                    </h4>

                    {project.badge && (
                      <span className="inline-block mt-2 px-2.5 py-0.5 rounded-full bg-navy/5 border border-navy/15 text-[11px] font-mono text-coral font-semibold">
                        {project.badge}
                      </span>
                    )}

                    <p className="text-xs sm:text-sm text-navy/70 font-sans leading-relaxed mt-3">
                      {language === 'en'
                        ? project.shortDescription.en
                        : project.shortDescription.id}
                    </p>

                    <div className="flex flex-wrap gap-1 mt-4">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded bg-ivory border border-navy/10 text-[10px] font-mono text-navy/70"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-2 py-0.5 text-[10px] font-mono text-navy/40">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-navy/10 flex items-center justify-between">
                    <button
                      onClick={() => setActiveModalProject(project)}
                      className="text-xs font-mono font-bold text-navy hover:text-cobalt flex items-center gap-1"
                    >
                      <span>{language === 'en' ? 'Details' : 'Rincian'}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>

                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs font-mono text-navy/50 hover:text-navy"
                        title="View GitHub Repository"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
