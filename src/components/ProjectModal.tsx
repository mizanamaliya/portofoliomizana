import React from 'react';
import { ProjectItem } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { 
  X, 
  ExternalLink, 
  Github, 
  BookOpen, 
  CheckCircle2, 
  Layers, 
  Calendar, 
  User, 
  Cpu 
} from 'lucide-react';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const { language } = useLanguage();

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-navy/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] bg-ivory text-navy rounded-2xl shadow-2xl border border-navy/20 overflow-y-auto no-scrollbar flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="sticky top-0 z-20 bg-ivory/95 backdrop-blur-md px-6 py-4 border-b border-navy/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-lime"></span>
            <span className="font-mono text-xs uppercase tracking-wider text-navy/60">
              {project.category}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-navy/10 text-navy transition-colors"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Title & Badge */}
          <div>
            {project.badge && (
              <span className="inline-block px-3 py-1 rounded-full bg-navy text-lime font-mono text-xs font-semibold mb-3">
                {project.badge}
              </span>
            )}
            <h2 className="font-headline font-bold text-2xl sm:text-3xl text-navy">
              {project.title}
            </h2>
            {project.metrics && (
              <div className="mt-2 font-mono text-xs text-cobalt font-semibold flex items-center gap-1.5">
                <Cpu className="w-4 h-4" />
                <span>{project.metrics}</span>
              </div>
            )}
          </div>

          {/* Metadata Row */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 rounded-xl bg-ivory-light border border-navy/10 font-mono text-xs">
            {project.role && (
              <div>
                <span className="text-navy/50 block">ROLE</span>
                <span className="font-semibold text-navy">{project.role}</span>
              </div>
            )}
            {project.timeline && (
              <div>
                <span className="text-navy/50 block">TIMELINE</span>
                <span className="font-semibold text-navy">{project.timeline}</span>
              </div>
            )}
            <div>
              <span className="text-navy/50 block">CATEGORY</span>
              <span className="font-semibold text-navy">{project.visualType.toUpperCase()}</span>
            </div>
          </div>

          {/* Deep Narrative Description */}
          <div>
            <h4 className="font-headline font-bold text-sm uppercase tracking-wider text-navy/70 mb-2">
              {language === 'en' ? 'Project Overview' : 'Ringkasan Proyek'}
            </h4>
            <p className="text-navy/80 text-sm sm:text-base leading-relaxed font-sans">
              {language === 'en' ? project.fullDescription.en : project.fullDescription.id}
            </p>
          </div>

          {/* Key Deliverables & Engineering Highlights */}
          <div>
            <h4 className="font-headline font-bold text-sm uppercase tracking-wider text-navy/70 mb-3">
              {language === 'en' ? 'Key Contributions & Architecture' : 'Kontribusi Utama & Arsitektur'}
            </h4>
            <div className="space-y-2.5">
              {(language === 'en' ? project.keyHighlights.en : project.keyHighlights.id).map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-navy/80">
                  <CheckCircle2 className="w-4 h-4 text-cobalt shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technology Stack Tags */}
          <div>
            <h4 className="font-headline font-bold text-xs uppercase tracking-wider text-navy/70 mb-2">
              {language === 'en' ? 'Technologies & Frameworks' : 'Teknologi & Framework'}
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md bg-navy/5 border border-navy/15 text-xs font-mono font-medium text-navy"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="pt-6 border-t border-navy/10 flex flex-wrap items-center gap-3">
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-navy text-ivory text-xs font-mono font-medium hover:bg-navy/90 transition-colors"
              >
                <Github className="w-4 h-4 text-lime" />
                <span>{language === 'en' ? 'Source Repository' : 'Repositori GitHub'}</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-60" />
              </a>
            )}

            {project.paperUrl && (
              <a
                href={project.paperUrl}
                onClick={onClose}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-navy text-navy text-xs font-mono font-medium hover:bg-navy hover:text-ivory transition-colors"
              >
                <BookOpen className="w-4 h-4 text-cobalt" />
                <span>{language === 'en' ? 'View Scientific Paper' : 'Lihat Publikasi'}</span>
              </a>
            )}

            <button
              onClick={onClose}
              className="ml-auto text-xs font-mono text-navy/60 hover:text-navy"
            >
              Close [ESC]
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
