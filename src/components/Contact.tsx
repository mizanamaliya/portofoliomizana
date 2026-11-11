import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { personalInfo } from '../data/portfolioData';
import { 
  Mail, 
  Linkedin, 
  Github, 
  FileText, 
  ArrowUpRight, 
  Copy, 
  Check, 
  Send, 
  Sparkles,
  MapPin
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const Contact: React.FC = () => {
  const { language } = useLanguage();
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleDownloadCV = () => {
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.7 },
        colors: ['#151B2E', '#C5F36B', '#6378FF', '#FF8066']
      });
    } catch (e) {
      // ignore
    }
  };

  const handleSubmitEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      subject || 'Inquiry regarding Data & Tech Collaboration'
    )}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="py-24 bg-ivory relative border-b border-navy/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-navy/60 mb-3">
            <span className="text-lime bg-navy px-1.5 py-0.5 rounded text-[11px] font-bold">07</span>
            <span>Get In Touch</span>
          </div>
          <h2 className="font-headline font-bold text-4xl sm:text-6xl text-navy tracking-tight leading-tight">
            Have an Idea? <br />
            <span className="font-serif italic font-normal text-cobalt underline decoration-lime decoration-4 underline-offset-6">
              Let's Make It Happen.
            </span>
          </h2>

          <p className="mt-6 text-base sm:text-lg text-navy/80 leading-relaxed font-sans max-w-2xl">
            {language === 'en'
              ? "Open to opportunities, meaningful collaborations, and projects where data engineering, modern web architectures, and machine learning can create real, measurable value."
              : "Terbuka untuk peluang karir, kolaborasi riset, serta proyek inovatif di mana pengolahan data dan rekayasa teknologi dapat menghasilkan dampak nyata."}
          </p>
        </div>

        {/* 2-Column Contact Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct channels & Quick triggers (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {/* Email Primary Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-navy text-ivory border border-navy shadow-xl relative overflow-hidden group">
              <span className="font-mono text-xs text-lime uppercase tracking-widest block mb-2">
                Primary Direct Channel
              </span>
              <h3 className="font-headline font-bold text-xl sm:text-2xl text-ivory mb-2">
                Drop Me a Message
              </h3>
              <p className="text-xs text-ivory/70 font-mono mb-6">
                Direct response within 24–48 hours.
              </p>

              <div className="flex flex-col gap-3">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="w-full py-3.5 px-4 rounded-xl bg-lime text-navy font-headline font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-lime/90 transition-all shadow-md"
                >
                  <Mail className="w-4 h-4 text-navy" />
                  <span>Send Direct Email</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="w-full py-3 px-4 rounded-xl bg-navy-surface border border-ivory/20 text-ivory font-mono text-xs flex items-center justify-center gap-2 hover:bg-ivory/10 transition-colors"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-lime" />
                      <span className="text-lime font-bold">Email Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-ivory/70" />
                      <span>Copy: {personalInfo.email}</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* LinkedIn & GitHub & CV Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* LinkedIn */}
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-5 rounded-2xl bg-ivory-card border border-navy/15 hover:border-cobalt transition-all group flex flex-col justify-between shadow-sm"
              >
                <div className="flex items-center justify-between text-navy/40 group-hover:text-cobalt mb-3">
                  <Linkedin className="w-5 h-5" />
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
                <div>
                  <span className="font-mono text-[10px] text-navy/50 uppercase block">Professional Network</span>
                  <h4 className="font-headline font-bold text-base text-navy">LinkedIn</h4>
                  <span className="text-xs font-mono text-cobalt mt-1 block">/in/mizana-amaliya</span>
                </div>
              </a>

              {/* GitHub */}
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="p-5 rounded-2xl bg-ivory-card border border-navy/15 hover:border-navy transition-all group flex flex-col justify-between shadow-sm"
              >
                <div className="flex items-center justify-between text-navy/40 group-hover:text-navy mb-3">
                  <Github className="w-5 h-5" />
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
                <div>
                  <span className="font-mono text-[10px] text-navy/50 uppercase block">Code Repositories</span>
                  <h4 className="font-headline font-bold text-base text-navy">GitHub</h4>
                  <span className="text-xs font-mono text-navy/70 mt-1 block">@mizana-amaliya</span>
                </div>
              </a>
            </div>

            {/* Download CV Card */}
            <div className="p-5 rounded-2xl bg-ivory-card border border-navy/15 flex items-center justify-between shadow-sm">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-navy text-lime font-mono">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-headline font-bold text-sm text-navy">
                    Curriculum Vitae (PDF)
                  </h4>
                  <p className="text-xs text-navy/60 font-mono">
                    Updated 2026 • English / Indonesian
                  </p>
                </div>
              </div>

              <a
                href={`#`}
                onClick={(e) => {
                  e.preventDefault();
                  handleDownloadCV();
                  alert(language === 'en' 
                    ? "CV file placeholder is ready. Place your final PDF as CV_Mizana_Amaliya.pdf in the public/ directory."
                    : "File CV siap diunduh. Letakkan file PDF resmi Anda dengan nama CV_Mizana_Amaliya.pdf pada folder public/.");
                }}
                className="px-4 py-2 rounded-full border border-navy text-navy font-mono text-xs font-bold hover:bg-navy hover:text-lime transition-all flex items-center gap-1.5"
              >
                <span>Download</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Quick Inquiry Form (7 cols) */}
          <div className="lg:col-span-7 bg-ivory-card rounded-3xl border border-navy/15 p-6 sm:p-10 shadow-sm relative">
            <div className="flex items-center justify-between pb-4 border-b border-navy/10 mb-6">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-lime border border-navy"></span>
                <span className="font-mono text-xs uppercase tracking-wider text-navy/70 font-semibold">
                  {language === 'en' ? 'Direct Message Dispatch' : 'Kirim Pesan Cepat'}
                </span>
              </div>
              <span className="text-xs font-mono text-navy/40">
                Wonosobo, Indonesia (GMT+7)
              </span>
            </div>

            <form onSubmit={handleSubmitEmail} className="space-y-4">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-navy/70 mb-1.5 font-semibold">
                  {language === 'en' ? 'Subject / Purpose' : 'Subjek / Perihal'}
                </label>
                <input
                  type="text"
                  required
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder={language === 'en' ? 'e.g. Job Opportunity / Research Collaboration / Project Discussion' : 'Contoh: Peluang Kerja / Diskusi Proyek / Kolaborasi Riset'}
                  className="w-full px-4 py-3 rounded-xl bg-ivory border border-navy/20 focus:border-cobalt focus:outline-none font-sans text-sm text-navy placeholder:text-navy/40"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-navy/70 mb-1.5 font-semibold">
                  {language === 'en' ? 'Message' : 'Isi Pesan'}
                </label>
                <textarea
                  rows={5}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={language === 'en' ? 'Hi Mizana, I would love to connect regarding...' : 'Halo Mizana, saya tertarik untuk mendiskusikan...'}
                  className="w-full px-4 py-3 rounded-xl bg-ivory border border-navy/20 focus:border-cobalt focus:outline-none font-sans text-sm text-navy placeholder:text-navy/40 resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-navy text-ivory font-headline font-bold text-xs uppercase tracking-wider hover:bg-navy/90 hover:shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4 text-lime" />
                  <span>{language === 'en' ? 'Launch Mail Client' : 'Kirimkan Pesan Sekarang'}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <p className="text-[11px] font-mono text-navy/50 mt-3">
                * Clicking launch will open your default email app with the subject and body pre-formatted for direct delivery to mizanaamaliya1123@gmail.com.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
