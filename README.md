# ⟡ Mizana Amaliya — Personal Portfolio Website
### Modern Editorial × Creative Technology × Data Aesthetic

> Personal portfolio website for **Mizana Amaliya** — Informatics Graduate (UNSIQ, GPA 3.85/4.00), Data Enthusiast, Software Developer, Machine Learning Researcher, and Scientific Author.

---

## ✦ Design Concept & Architecture

- **Visual Concept**: Modern Editorial × Creative Technology × Data Aesthetic.
- **Color Palette**:
  - `Midnight Navy (#151B2E)` — High-contrast authority and depth.
  - `Warm Ivory (#F5F0E6)` — Sophisticated editorial base.
  - `Electric Lime (#C5F36B)` — Energetic data & active accents.
  - `Cobalt Blue (#6378FF)` — Analytical tech and academic highlights.
  - `Soft Coral (#FF8066)` — Humanistic, accessible highlights.
  - `Lavender (#BCA9F5)` — Creative research & intelligent exploration.
- **Typography**:
  - **Headlines**: Space Grotesk (bold, modern, architectural).
  - **Body**: DM Sans (clean, highly readable for HRD & recruiters).
  - **Editorial Accents**: Instrument Serif & Playfair Display.
  - **Data Glyphs & Tech**: JetBrains Mono.
- **Glyphs & Visual Motifs**: `⟡ ⌬ ⌘ ⊹ ⌖ ⧉ ⌁ ◈ ⎔ ↗`
- **Language Support**: Instant dual-language toggle between **English** (default) and **Bahasa Indonesia**.

---

## ✦ Key Sections Included

1. **Editorial Navbar**: Sticky, minimalist, with brand glyph, responsive drawer, language switcher (`EN | ID`), and "Let's Talk" CTA.
2. **Hero Section**:
   - Master headline: *"Turning Data Into Insights, Ideas Into Impact."*
   - Positioning statement: *"Data. Technology. Meaningful Impact."*
   - Live credential pills: Informatics Graduate (UNSIQ), Wonosobo ID, GPA 3.85 / 4.00, 3 Scientific Publications, IndonesiaNEXT Top 99.
   - Interactive profile card with live SVG monogram & photo fallback, coordinates, and floating ML accuracy badges.
   - Marquee ticker of verified skills and milestones.
3. **About Me ("More Than Just a Degree")**:
   - Compelling professional narrative detailing academic excellence, data processing, and applied research.
   - Core pillar cards: Data Processing & Analysis, Database Architecture, Full-Stack Development, Machine Learning & Research.
   - 4 high-impact highlight cards (GPA 3.85, 3 Publications, Top 99 IndonesiaNEXT, Krenova 2025 Finalist).
4. **Professional Experience**:
   - **Badan Pusat Statistik (BPS)**: Asisten Pranata Komputer (Sept 2026 – Present, Ongoing) with confidential compliance framing.
   - **Asah — Dicoding Indonesia**: Cohort React & Backend Developer (Aug 2025 – Jan 2026).
   - **IndonesiaNEXT Batch 9 — Telkomsel**: Top 99 National Participant (Apr 2025 – Aug 2025) from 7,000+ applicants.
   - **Universitas Syiah Kuala — PMM Batch 4**: Student Exchange Mobility (Jan 2024 – Jun 2024).
5. **Selected Works & Digital Experiments (Asymmetrical Bento Showcase)**:
   - **Flagship 1: Longsor Wonosobo** (Machine Learning & Geospatial Susceptibility Classifier with 93.4% accuracy benchmark, RF, SVM, XGBoost).
   - **Flagship 2: SD Tahfidzul Qur'an Qurrota A'yun Information System** (Full-Stack 8-module school portal, PPDB, 3NF relational MySQL).
   - **Flagship 3: AI Learning Insight** (Adaptive analytics platform developed during Asah-Dicoding cohort).
   - **Supporting 4: Sampah Cerdas** (Top 20 Finalist Krenova Kabupaten Wonosobo 2025).
   - **Supporting 5: RelayCare** (BISINDO Deaf & hearing inclusive mobile communication bridge).
   - **Supporting 6: Cinema Rakyat** (Web ticketing & interactive seating matrix portal).
   - **Supporting 7: Penitipan Snack** (Snack consignment frontend service).
   - **Supporting 8: Tajwid Master** (Native Android Kotlin application with 6 modules).
   - Full interactive **Project Modal** for deep dives into problem statements, metrics, architecture, and repositories.
6. **Research & Scientific Publications**:
   - Academic journal cards featuring all 3 peer-reviewed publications:
     1. *Comparative Analysis of RF, SVM, and XGBoost for Landslide Susceptibility in Wonosobo* — Jurnal INSTEK (SINTA 3, 2026).
     2. *Standardizing Smartphone Camera Placement for Joint Angle Measurement* — ICEHP 2026, ITB.
     3. *AI Vision for Paralympic and Disability Sport* — SAPTA 2026, Universitas Sebelas Maret (UNS).
   - Interactive abstract drawer and links to publication venues.
7. **Skills & Technical Fluency**:
   - Categorized into Data & Database, Web & Mobile Development, Tools & Design, and Professional Competencies.
   - Contextual tool descriptions, no fake percentage bars.
8. **Achievements & Milestones**:
   - High-impact typography cards highlighting GPA 3.85, Top 99 national, 3 Publications, Top 20 Krenova, IBM SkillsBuild, and PMM Batch 4.
9. **Contact & Direct Inquiries**:
   - Direct mailto dispatch form with pre-filled subject and body.
   - One-click copy email button with instant toast confirmation.
   - Direct links to LinkedIn, GitHub, and CV download.
   - Dynamic year footer with Wonosobo location indicator.

---

## ✦ Getting Started & Running Locally

### 1. Requirements
- Node.js (v18 or higher recommended)
- npm or pnpm

### 2. Run the Development Server
```bash
# In the terminal:
cd mizana-portfolio
npm run dev
```
Open your browser at `http://localhost:3000` to preview the site with instant hot-reloading!

### 3. Build for Production
```bash
npm run build
```
The optimized static build will be placed in `dist/`.

---

## ✦ How to Personalize Your Content

All data is completely separated in `src/data/portfolioData.ts` so you can update anything in seconds without touching layout components:

| Item | File Location | How to Update |
| :--- | :--- | :--- |
| **Profile Photo** | `public/profile-mizana.jpg` | Save your formal/professional photo in `public/profile-mizana.jpg` (or `.svg`). |
| **CV PDF** | `public/CV_Mizana_Amaliya.pdf` | Place your CV PDF in `public/` with this exact filename. |
| **Projects & Links** | `src/data/portfolioData.ts` | Edit demo URLs, GitHub repository links, or descriptions in `selectedProjects`. |
| **BPS Experience** | `src/data/portfolioData.ts` | Update `experiences[0]` once your internship concludes to add dataset volumes & tools. |
| **Publications** | `src/data/portfolioData.ts` | Add official DOI / PDF URLs to `publications[i].link`. |
| **Contact Info** | `src/data/portfolioData.ts` | Update email, phone, or LinkedIn in `personalInfo`. |

---

## ✦ Deployment in 1 Click

You can deploy this website for free to **Vercel**, **Netlify**, or **GitHub Pages**:
- **Vercel**: Import your GitHub repository, choose framework preset `Vite`, and click Deploy.
- **Netlify**: Drag and drop the `dist` folder or connect via Git.
