export type Language = 'en' | 'id';

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  featured: boolean;
  priority: number; // 1, 2, 3 for top featured
  shortDescription: {
    en: string;
    id: string;
  };
  fullDescription: {
    en: string;
    id: string;
  };
  metrics?: string;
  technologies: string[];
  role?: string;
  timeline?: string;
  keyHighlights: {
    en: string[];
    id: string[];
  };
  demoUrl?: string;
  repoUrl?: string;
  paperUrl?: string;
  badge?: string;
  accentColor: 'lime' | 'cobalt' | 'coral' | 'lavender';
  visualType: 'chart' | 'dashboard' | 'mobile' | 'code' | 'map';
}

export interface PublicationItem {
  id: string;
  title: string;
  journal: string;
  venueType: 'Journal' | 'International Conference';
  indexation: string; // e.g. "SINTA 3", "ITB ICEHP 2026", "UNS SAPTA 2026"
  year: string;
  authors: string;
  abstract: {
    en: string;
    id: string;
  };
  tags: string[];
  link?: string;
  accent: 'lime' | 'cobalt' | 'coral' | 'lavender';
}

export interface ExperienceItem {
  id: string;
  company: string;
  position: {
    en: string;
    id: string;
  };
  period: {
    en: string;
    id: string;
  };
  location: string;
  isOngoing?: boolean;
  type: string;
  description: {
    en: string;
    id: string;
  };
  highlights?: {
    en: string[];
    id: string[];
  };
  badgeColor: 'lime' | 'cobalt' | 'coral' | 'lavender';
}

export interface SkillCategory {
  categoryName: {
    en: string;
    id: string;
  };
  glyph: string;
  color: string;
  skills: {
    name: string;
    highlight?: boolean;
    note?: string;
  }[];
}

export interface AchievementItem {
  number: string;
  prefix?: string;
  suffix?: string;
  label: {
    en: string;
    id: string;
  };
  description: {
    en: string;
    id: string;
  };
  institution: string;
  accentColor: 'lime' | 'cobalt' | 'coral' | 'lavender';
  glyph: string;
}
