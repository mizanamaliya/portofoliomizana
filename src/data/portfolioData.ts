import { ProjectItem, PublicationItem, ExperienceItem, SkillCategory, AchievementItem } from '../types';

export const personalInfo = {
  name: "Mizana Amaliya",
  preferredName: "Mizana",
  location: "Wonosobo, Central Java, Indonesia",
  locationShort: "Wonosobo, ID",
  email: "mizanaamaliya1123@gmail.com",
  linkedin: "https://linkedin.com/in/mizana-amaliya/",
  github: "https://github.com/mizana-amaliya",
  gpa: "3.85 / 4.00",
  university: "Universitas Sains Al-Qur'an (UNSIQ)",
  degree: "Bachelor of Computer Science (S1 Teknik Informatika)",
  status: "Fresh Graduate",
  cvDownloadFileName: "CV_Mizana_Amaliya_Informatics.pdf",
  
  heroTagline: {
    en: "Turning Data Into Insights, Ideas Into Impact.",
    id: "Mengubah Data Menjadi Wawasan, Gagasan Menjadi Dampak.",
  },
  heroSubtitle: {
    en: "Informatics Graduate, Data Enthusiast & Technology Explorer.",
    id: "Lulusan Teknik Informatika, Penggiat Data & Pengembang Teknologi.",
  },
  heroDescription: {
    en: "Exploring the intersection of data, software engineering, and intelligent systems to develop meaningful solutions and rigorous scientific research.",
    id: "Mengeksplorasi titik temu antara data, rekayasa perangkat lunak, dan sistem cerdas untuk menciptakan solusi digital berdampak dan riset ilmiah teruji.",
  },
  positioningHeadline: {
    en: "Data. Technology. Meaningful Impact.",
    id: "Data. Teknologi. Dampak Nyata.",
  },
  positioningStatement: {
    en: "An Informatics graduate with a strong foundation in data processing, analytical thinking, and technology development. Experienced in transforming raw data into meaningful information, architecting digital solutions, and exploring machine learning through research and practical projects.",
    id: "Lulusan S1 Teknik Informatika dengan fondasi kuat dalam pengolahan data, penalaran analitis, dan pengembangan teknologi. Berpengalaman mengolah data mentah menjadi wawasan berharga, merancang solusi digital, dan meneliti machine learning melalui publikasi ilmiah serta proyek praktis.",
  },
  aboutBio: {
    en: [
      "Graduated with a 3.85/4.00 GPA in Informatics from Universitas Sains Al-Qur'an, I bridge the worlds of data engineering, modern web architectures, and applied machine learning.",
      "My journey goes beyond theoretical coursework: from deploying geospatial predictive models for landslide susceptibility, to architecting complete school information systems, to authoring three peer-reviewed scientific publications at national (SINTA 3) and international conferences (ITB & UNS).",
      "I actively refine my technical edge through premier digital talent accelerators such as Telkomsel IndonesiaNEXT (Top 99 national from 7,000+ applicants), Dicoding Asah (React & Cloud), and university student exchange (PMM Batch 4).",
      "Currently contributing to data processing and technology initiatives at Badan Pusat Statistik (BPS), I bring analytical precision, algorithmic problem-solving, and a collaborative spirit to forward-thinking tech teams."
    ],
    id: [
      "Lulusan S1 Teknik Informatika Universitas Sains Al-Qur'an dengan IPK 3.85/4.00 yang memadukan keahlian pengolahan data, arsitektur web modern, dan machine learning terapan.",
      "Perjalanan saya melampaui teori akademik: mulai dari mengimplementasikan model prediktif kerawanan longsor berbasis geospasial, merancang sistem informasi sekolah terintegrasi, hingga menerbitkan 3 publikasi ilmiah bereputasi pada jurnal SINTA 3 serta konferensi internasional di ITB dan UNS.",
      "Saya konsisten mengasah kompetensi melalui program talenta digital bergengsi seperti IndonesiaNEXT Batch 9 Telkomsel (Top 99 Nasional dari 7.000+ peserta), Dicoding Asah (React & Cloud), dan Pertukaran Mahasiswa Merdeka (PMM Batch 4).",
      "Saat ini aktif berkontribusi dalam pengolahan data dan teknologi di Badan Pusat Statistik (BPS), siap menghadirkan ketelitian analisis, solusi algoritma, dan kerja sama tim dalam organisasi teknologi."
    ]
  }
};

export const quickStats = [
  { value: "3.85", sub: "/ 4.00", label: "Grade Point Average", labelId: "Indeks Prestasi Kumulatif", glyph: "⟡" },
  { value: "3", sub: "Papers", label: "Scientific Publications", labelId: "Publikasi Ilmiah", glyph: "◈" },
  { value: "Top 99", sub: "/ 7K+", label: "IndonesiaNEXT Finalist", labelId: "Finalis Nasional Telkomsel", glyph: "⌘" },
  { value: "8+", sub: "Projects", label: "Shipped Applications", labelId: "Aplikasi Selesai", glyph: "⌖" },
];

export const selectedProjects: ProjectItem[] = [
  {
    id: "longsor-wonosobo",
    title: "Longsor Wonosobo — Geospatial Susceptibility Classifier",
    category: "Machine Learning & Geospatial Data Analysis",
    featured: true,
    priority: 1,
    accentColor: "lime",
    visualType: "map",
    badge: "Flagship Research & ML",
    metrics: "93.4% Accuracy • 3 ML Models Evaluated",
    role: "Lead ML Researcher & Web Developer",
    timeline: "2025 – 2026",
    technologies: ["Python", "XGBoost", "Random Forest", "SVM", "QGIS", "React", "PostgreSQL", "Flask"],
    shortDescription: {
      en: "A geospatial machine learning study classifying landslide-prone zones across Wonosobo Regency using Random Forest, SVM, and XGBoost, coupled with an interactive web visualization dashboard.",
      id: "Riset klasifikasi kerawanan tanah longsor di Kabupaten Wonosobo berbasis data geospasial menggunakan Random Forest, SVM, dan XGBoost, dilengkapi dashboard visualisasi web interaktif."
    },
    fullDescription: {
      en: "This research systematically evaluated three supervised learning architectures (Random Forest, Support Vector Machine, and XGBoost) against multi-layer topographical, geological, and rainfall datasets across Wonosobo Regency. Beyond model benchmark and ROC-AUC validation, I engineered a responsive interactive web interface allowing local stakeholders to query regional risk indices and visualize zoned susceptibility maps dynamically.",
      id: "Penelitian ini mengevaluasi performa tiga algoritma machine learning (Random Forest, SVM, dan XGBoost) terhadap dataset topografi, geologi, dan curah hujan di Kabupaten Wonosobo. Selain validasi metrik ROC-AUC, saya membangun aplikasi web interaktif yang memungkinkan visualisasi zona kerawanan dan simulasi parameter wilayah secara intuitif."
    },
    keyHighlights: {
      en: [
        "Constructed multi-factor spatial training datasets combining slope, precipitation, soil mechanics, and land-use rasters.",
        "Benchmarked Random Forest, SVM, and XGBoost with rigorous hyperparameter tuning and k-fold cross-validation.",
        "Built a full-stack geospatial viewer for non-technical community and disaster mitigation personnel.",
        "Published findings in peer-reviewed scientific journal INSTEK (SINTA 3 accredited)."
      ],
      id: [
        "Menyusun dataset spasial multi-faktor menggabungkan kemiringan lereng, curah hujan, jenis tanah, dan tutupan lahan.",
        "Melakukan komparasi performa Random Forest, SVM, dan XGBoost dengan tuning hyperparameter dan k-fold cross-validation.",
        "Mengembangkan antarmuka web interaktif untuk visualisasi peta tematik kerawanan bencana.",
        "Dipublikasikan pada Jurnal Ilmiah Terakreditasi Nasional SINTA 3 (Jurnal INSTEK)."
      ]
    },
    demoUrl: "#projects",
    repoUrl: "https://github.com/mizana-amaliya/longsor-wonosobo-ml",
    paperUrl: "#publications"
  },
  {
    id: "sistem-informasi-sd-tq",
    title: "SD Tahfidzul Qur'an Qurrota A'yun Information System",
    category: "Web Development & Database Architecture",
    featured: true,
    priority: 2,
    accentColor: "cobalt",
    visualType: "dashboard",
    badge: "Full-Stack System",
    metrics: "8 Integrated Modules • 100% Digital Workflow",
    role: "Full-Stack Developer & Database Architect",
    timeline: "2025",
    technologies: ["PHP", "Laravel", "MySQL", "JavaScript", "Bootstrap", "REST API"],
    shortDescription: {
      en: "Comprehensive school management portal with 8 core modules, digital student enrollment, document verification, academic announcements, and relational database schema.",
      id: "Sistem informasi manajemen sekolah terpadu dengan 8 modul utama: pendaftaran murid online (PPDB), verifikasi dokumen, berita akademik, dan perancangan skema database relasional."
    },
    fullDescription: {
      en: "Designed and developed an end-to-end web management platform for SD Tahfidzul Qur'an Qurrota A'yun. The system eliminates manual paperwork by digitizing new student admissions (PPDB), parent communication, academic publishing, document validation, and administrative oversight under a normalized, high-integrity MySQL relational database.",
      id: "Merancang dan membangun platform sistem informasi sekolah menyeluruh untuk SD Tahfidzul Qur'an Qurrota A'yun. Menggantikan proses manual dengan digitalisasi pendaftaran santri baru, validasi berkas otomatis, sistem berita dan agenda sekolah, serta tata kelola administrasi berbasis database relasional terstruktur."
    },
    keyHighlights: {
      en: [
        "Designed 3NF normalized database schema handling concurrent registrations and student demographic archives.",
        "Engineered secure multi-role access control (Parents, Admissions Staff, Headmaster, Admin).",
        "Implemented automated document upload pipeline with MIME-type verification and responsive status trackers.",
        "Conducted end-user requirements gathering, user acceptance testing (UAT), and institutional handover."
      ],
      id: [
        "Merancang skema database normalisasi 3NF untuk menangani registrasi serentak dan arsip data siswa.",
        "Membangun kontrol akses berbasis peran (Wali Murid, Panitia PPDB, Kepala Sekolah, Admin).",
        "Mengembangkan modul unggah dokumen pendaftaran dengan validasi keamanan berkas otomatis.",
        "Menjalankan analisis kebutuhan pengguna langsung, User Acceptance Testing (UAT), dan pelatihan staf."
      ]
    },
    demoUrl: "#projects",
    repoUrl: "https://github.com/mizana-amaliya/si-sdtq-qurrota-ayun"
  },
  {
    id: "ai-learning-insight",
    title: "AI Learning Insight — Adaptive Analytics Platform",
    category: "AI & Web Application",
    featured: true,
    priority: 3,
    accentColor: "lavender",
    visualType: "chart",
    badge: "Capstone Spotlight",
    metrics: "Real-time Diagnostics • Asah Dicoding Capstone",
    role: "Frontend Engineer & ML Integrator",
    timeline: "2025 – 2026",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Express", "OpenAI API", "Chart.js"],
    shortDescription: {
      en: "An intelligent learning analytics suite delivering personalized diagnostics, study recommendations, and visual progress tracking, developed within the Asah Dicoding cohort.",
      id: "Platform analitik pembelajaran cerdas yang menghadirkan diagnosis adaptif, rekomendasi materi terpersonalisasi, dan pelacakan kemajuan visual hasil proyek capstone Asah Dicoding."
    },
    fullDescription: {
      en: "Collaborated in an agile multidisciplinary team to build an adaptive learning companion for Indonesian students. The platform diagnoses conceptual bottlenecks through dynamic quiz assessments and leverages AI inference to curate personalized learning pathways, revision summaries, and actionable study metrics.",
      id: "Berkolaborasi dalam tim lintas disiplin untuk membangun platform asisten belajar adaptif bagi pelajar. Sistem menganalisis kendala pemahaman melalui asesmen interaktif lalu memanfaatkan inferensi AI untuk memberikan rekomendasi materi belajar yang disesuaikan secara personal."
    },
    keyHighlights: {
      en: [
        "Built responsive client interface with React, Tailwind CSS, and reactive state management.",
        "Integrated RESTful API endpoints for intelligent prompt generation and real-time assessment scoring.",
        "Created visual learning velocity charts and competency radar diagrams for intuitive student feedback.",
        "Recognized as a high-performing capstone project in the Asah-Dicoding cohort program."
      ],
      id: [
        "Membangun antarmuka responsif menggunakan React, Tailwind CSS, dan pengelolaan state reaktif.",
        "Mengintegrasikan endpoint API RESTful untuk pemrosesan rekomendasi AI dan penilaian asesmen.",
        "Merancang grafik kecepatan belajar dan radar kompetensi visual untuk memantau kemajuan murid.",
        "Terpilih sebagai salah satu proyek capstone unggulan dalam program Asah Dicoding Indonesia."
      ]
    },
    demoUrl: "#projects",
    repoUrl: "https://github.com/mizana-amaliya/ai-learning-insight"
  },
  {
    id: "sampah-cerdas",
    title: "Sampah Cerdas — Circular Economy Digital Ecosystem",
    category: "Digital Innovation & Product Design",
    featured: false,
    priority: 4,
    accentColor: "lime",
    visualType: "mobile",
    badge: "Top 20 Finalist Krenova 2025",
    metrics: "Top 20 Finalist Wonosobo Regency 2025",
    role: "Product Designer & Technical Concept Lead",
    timeline: "2025",
    technologies: ["Figma", "UI/UX Research", "System Architecture", "Prototyping", "Flutter Concept"],
    shortDescription: {
      en: "Digital waste management app prototype featuring scheduled pickups, point-reward incentives, and community eco-education. Selected as a Top 20 Finalist at Krenova Wonosobo 2025.",
      id: "Prototipe aplikasi pengelolaan sampah digital dengan fitur penjemputan sampah terencana, reward poin daur ulang, dan edukasi lingkungan. Terpilih sebagai Top 20 Finalis Krenova Wonosobo 2025."
    },
    fullDescription: {
      en: "Sampah Cerdas addresses municipal solid waste logistics by incentivizing household waste separation. Users schedule on-demand collections, earn points convertible into local economic perks, and access verified recycling guides. Awarded Top 20 Finalist honors in the prestigious Krenova (Kreativitas dan Inovasi) Kabupaten Wonosobo 2025.",
      id: "Sampah Cerdas mentransformasi penanganan limbah rumah tangga melalui insentif digital. Pengguna dapat memesan penjemputan sampah terpilah, mengumpulkan poin reward yang dapat ditukarkan, serta mengakses panduan daur ulang. Dinobatkan sebagai Top 20 Finalis Krenova Wonosobo 2025."
    },
    keyHighlights: {
      en: [
        "Designed comprehensive user journeys for residents, waste collectors, and administrative coordinators.",
        "Formulated the gamified rewards and tokenomics engine to stimulate long-term recycling habits.",
        "Pitched functional interactive prototype before the regional innovation panel of Wonosobo Regency."
      ],
      id: [
        "Merancang customer journey map untuk warga, armada penjemput sampah, dan dinas terkait.",
        "Merumuskan sistem gamifikasi berbasis poin daur ulang untuk menumbuhkan kebiasaan memilah sampah.",
        "Mempresentasikan prototipe fungsional di hadapan dewan juri Krenova Bappeda Kabupaten Wonosobo."
      ]
    },
    demoUrl: "#projects",
    repoUrl: "https://github.com/mizana-amaliya/sampah-cerdas-app"
  },
  {
    id: "relaycare",
    title: "RelayCare — BISINDO Inclusive Communication Bridge",
    category: "Inclusive Technology & UI/UX Design",
    featured: false,
    priority: 5,
    accentColor: "coral",
    visualType: "mobile",
    badge: "Social Impact & Accessibility",
    metrics: "BISINDO Accessibility Benchmark",
    role: "UI/UX Designer & Accessibility Researcher",
    timeline: "2025",
    technologies: ["Figma", "User Research", "WCAG 2.1", "Design Thinking", "Design System"],
    shortDescription: {
      en: "Mobile application interface designed to bridge bidirectional communication between Deaf and hearing communities using Indonesian Sign Language (BISINDO).",
      id: "Perancangan aplikasi mobile inklusif untuk menjembatani komunikasi dua arah antara teman Tuli dan dengar menggunakan Bahasa Isyarat Indonesia (BISINDO)."
    },
    fullDescription: {
      en: "RelayCare addresses everyday communication barriers encountered by the Deaf community in public services and healthcare. Rooted in empathetic user interviews and WCAG 2.1 accessibility guidelines, it integrates sign recognition concepts, gesture-to-speech feedback, and quick phrase cards.",
      id: "RelayCare menjawab tantangan komunikasi yang dihadapi teman Tuli saat berinteraksi di fasilitas publik dan kesehatan. Dikembangkan melalui riset mendalam dengan teman Tuli dan pedoman aksesibilitas WCAG 2.1, menghadirkan modul pengenalan isyarat BISINDO dan kartu percakapan cepat."
    },
    keyHighlights: {
      en: [
        "Conducted participatory user interviews to identify high-friction communication touchpoints.",
        "Architected high-contrast, visual-first UI components tailored for rapid hand gesture comprehension.",
        "Built clickable interactive prototype with bidirectional text/voice-to-sign visual translations."
      ],
      id: [
        "Menjalankan wawancara partisipatif untuk memetakan titik kendala komunikasi sehari-hari.",
        "Merancang komponen UI kontras tinggi yang ramah visual untuk mempermudah navigasi.",
        "Menghasilkan prototipe interaktif teruji dengan fitur translasi teks/suara ke isyarat BISINDO."
      ]
    },
    demoUrl: "#projects",
    repoUrl: "https://github.com/mizana-amaliya/relaycare-design"
  },
  {
    id: "cinema-rakyat",
    title: "Cinema Rakyat — Web Ticketing & Theater Portal",
    category: "Web Application & UI Design",
    featured: false,
    priority: 6,
    accentColor: "cobalt",
    visualType: "dashboard",
    badge: "Full-Stack Portal",
    metrics: "Real-time Seat Matrix • Admin Control",
    role: "Full-Stack Web Developer",
    timeline: "2024",
    technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL", "Bootstrap"],
    shortDescription: {
      en: "End-to-end web ticketing system featuring movie catalog search, interactive seat selection matrix, payment simulation, digital e-ticket generation, and admin dashboard.",
      id: "Sistem pemesanan tiket bioskop berbasis web dengan pencarian film, pemilihan kursi interaktif, simulasi pembayaran, cetak e-ticket, dan panel analitik admin."
    },
    fullDescription: {
      en: "A complete movie ticketing portal engineered with responsive web standards. Customers can browse current screenings, select specific auditorium seats via a visual interactive matrix, confirm orders with instant e-ticket generation, while administrators manage schedule schedules, studio capacities, and revenue summaries.",
      id: "Portal pemesanan tiket bioskop lengkap yang dibangun dengan standar web modern. Penonton dapat mengecek jadwal tayang, memilih kursi secara visual, memperoleh e-ticket instan dengan QR code unik, sementara pihak pengelola memiliki dashboard untuk mengatur studio dan laporan pendapatan."
    },
    keyHighlights: {
      en: [
        "Developed dynamic interactive seating grid with real-time reservation status locks.",
        "Engineered transactional payment workflow and secure e-ticket voucher generator.",
        "Built administrative back-office for managing movie screening schedules and hall capacities."
      ],
      id: [
        "Membangun grid denah kursi interaktif dengan penguncian status reservasi real-time.",
        "Mengembangkan alur transaksi aman dan pembuatan e-ticket dengan kode verifikasi.",
        "Menyediakan dashboard admin untuk manajemen jadwal penayangan dan kapasitas studio."
      ]
    },
    demoUrl: "#projects",
    repoUrl: "https://github.com/mizana-amaliya/cinema-rakyat"
  },
  {
    id: "penitipan-snack",
    title: "Penitipan Snack — Consignment Service Frontend",
    category: "Frontend Web Development",
    featured: false,
    priority: 7,
    accentColor: "lavender",
    visualType: "code",
    badge: "Frontend UI",
    metrics: "Sub-second Load • Responsive UI",
    role: "Frontend Developer",
    timeline: "2024",
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Git"],
    shortDescription: {
      en: "Clean and intuitive frontend web experience for a local snack consignment service, delivering responsive catalog browsing and friction-free parcel reservations.",
      id: "Pengembangan frontend aplikasi layanan penitipan dan konsinyasi camilan dengan antarmuka responsif, katalog camilan interaktif, dan alur pemesanan praktis."
    },
    fullDescription: {
      en: "Designed and implemented a lightweight, user-friendly frontend for a snack consignment business. Focused on clean mobile responsiveness, accessibility, rapid rendering speed, and clear call-to-actions that drive customer conversions.",
      id: "Merancang dan mengimplementasikan antarmuka frontend ringan dan intuitif untuk layanan penitipan produk camilan lokal. Berfokus pada kecepatan muat tinggi, responsivitas multi-device, dan kemudahan pemesanan bagi pelanggan."
    },
    keyHighlights: {
      en: [
        "Crafted mobile-first layouts with pure CSS modern flexbox & grid architecture.",
        "Optimized client asset payload for fast loading under constrained mobile bandwidth.",
        "Organized modular and maintainable vanilla JavaScript DOM interactions."
      ],
      id: [
        "Mengembangkan layout mobile-first dengan CSS modern flexbox dan CSS grid murni.",
        "Mengoptimasi aset visual untuk memastikan akses cepat di berbagai perangkat.",
        "Struktur kode vanilla JavaScript yang rapi dan mudah dirawat."
      ]
    },
    demoUrl: "#projects",
    repoUrl: "https://github.com/mizana-amaliya/penitipan-snack"
  },
  {
    id: "tajwid-master",
    title: "Tajwid Master — Interactive Mobile Learning App",
    category: "Mobile Application Development",
    featured: false,
    priority: 8,
    accentColor: "lime",
    visualType: "mobile",
    badge: "Android Mobile",
    metrics: "6 Structured Learning Modules",
    role: "Android Developer",
    timeline: "2024",
    technologies: ["Kotlin", "Android Studio", "XML Layouts", "SQLite", "Material Design"],
    shortDescription: {
      en: "Android mobile application offering six structured Quranic tajwid learning modules with interactive quizzes, audio phonetic examples, and progress tracking.",
      id: "Aplikasi mobile pembelajaran tajwid Al-Qur'an berbasis Android dengan 6 modul terstruktur, kuis interaktif, contoh pelafalan audio, dan pemantau kemajuan belajar."
    },
    fullDescription: {
      en: "Engineered a native Android educational application in Kotlin to make Quran recitation rules (Tajwid) approachable for beginner and intermediate students. The app features 6 structured modules (Nun Mati, Mim Mati, Idgham, Mad, etc.), interactive audio pronouncers, and gamified knowledge checks.",
      id: "Membangun aplikasi edukasi Al-Qur'an berbasis Android native menggunakan bahasa Kotlin. Memudahkan pembelajaran hukum bacaan tajwid melalui 6 modul pembelajaran terstruktur (Hukum Nun Sukun, Mim Sukun, Idgham, Mad, dsb.), audio contoh pelafalan, dan kuis pemahaman materi."
    },
    keyHighlights: {
      en: [
        "Architected clean Android activities and fragments following Google Material Design guidelines.",
        "Integrated media playback services for crystal-clear tajwid phonetic examples.",
        "Built offline local storage using SQLite for saving user quiz scores and completed modules."
      ],
      id: [
        "Merancang arsitektur activity dan fragment yang rapi sesuai pedoman Material Design.",
        "Mengintegrasikan layanan audio playback untuk contoh pelafalan makhraj dan tajwid.",
        "Mengimplementasikan penyimpanan lokal SQLite untuk menyimpan skor kuis dan status modul."
      ]
    },
    demoUrl: "#projects",
    repoUrl: "https://github.com/mizana-amaliya/tajwid-master-android"
  }
];

export const publications: PublicationItem[] = [
  {
    id: "pub-landslide-wonosobo",
    title: "Comparative Analysis of Random Forest, Support Vector Machine, and XGBoost Algorithms for Geospatial-Based Landslide Susceptibility Classification in Wonosobo Regency",
    journal: "Jurnal Ilmiah Sains dan Teknologi (INSTEK)",
    venueType: "Journal",
    indexation: "SINTA 3 Accredited",
    year: "June 2026",
    authors: "Mizana Amaliya, et al.",
    tags: ["Machine Learning", "XGBoost", "Random Forest", "SVM", "Geospatial", "Disaster Mitigation"],
    accent: "lime",
    link: "https://ejournal.unisi.ac.id/index.php/instek",
    abstract: {
      en: "Investigates landslide susceptibility modeling across high-relief terrains of Wonosobo Regency, Central Java. By comparing Random Forest, Support Vector Machine (SVM), and Extreme Gradient Boosting (XGBoost) against spatial variables (slope, lithology, rainfall intensity, and distance to faults), the study identifies optimum hyperparameters, spatial weight matrices, and model explainability to support proactive regional disaster mitigation planning.",
      id: "Meneliti pemodelan kerawanan tanah longsor di wilayah bertopografi curam Kabupaten Wonosobo, Jawa Tengah. Membandingkan algoritma Random Forest, SVM, dan XGBoost terhadap variabel spasial (kemiringan lereng, litologi, curah hujan, dan tata guna lahan) untuk mengidentifikasi model dengan akurasi optimal sebagai acuan mitigasi bencana daerah."
    }
  },
  {
    id: "pub-smartphone-joint-angle",
    title: "Standardizing Smartphone Camera Placement for Reliable Joint Angle Measurement During Fundamental Exercises: A Biomechanical Validation Blueprint",
    journal: "International Conference on Exercise, Health and Physiology (ICEHP 2026)",
    venueType: "International Conference",
    indexation: "Institut Teknologi Bandung (ITB)",
    year: "2026",
    authors: "Mizana Amaliya, et al.",
    tags: ["Computer Vision", "Biomechanical Validation", "Pose Estimation", "Camera Calibration", "Sports Science"],
    accent: "cobalt",
    link: "https://icehp.itb.ac.id",
    abstract: {
      en: "Establishes a standardized experimental protocol and mathematical calibration framework for smartphone camera positioning to ensure reliable, parallax-resistant joint angle tracking during sagittal and frontal plane fundamental exercises, validating mobile computer vision algorithms against gold-standard laboratory sensors.",
      id: "Menyusun blueprint standardisasi protokol dan kalibrasi posisi kamera smartphone untuk memastikan pengukuran sudut persendian yang presisi dan bebas distorsi paralaks selama latihan fisik, memvalidasi algoritma computer vision mobile terhadap instrumen laboratorium baku."
    }
  },
  {
    id: "pub-ai-vision-paralympic",
    title: "Artificial Intelligence Vision for Paralympic and Disability Sport: A Scoping Review and Conceptual Blueprint",
    journal: "International Conference on Sports, Accessibility, Physical Education, Technology Innovation, Disability Inclusion, and Action (SAPTA 2026)",
    venueType: "International Conference",
    indexation: "Universitas Sebelas Maret (UNS)",
    year: "2026",
    authors: "Mizana Amaliya, et al.",
    tags: ["Artificial Intelligence", "Computer Vision", "Disability Inclusion", "Paralympic Sport", "Assistive Tech"],
    accent: "lavender",
    link: "https://sapta.uns.ac.id",
    abstract: {
      en: "Synthesizes state-of-the-art computer vision and machine learning architectures applied in parasports. Maps technological opportunities in automated classification, biomechanical fatigue alerts, and adaptive coaching tools, proposing a scalable conceptual blueprint for accessible sports technology in developing nations.",
      id: "Melakukan scoping review komprehensif terhadap penerapan computer vision dan machine learning dalam olahraga disabilitas dan paralimpiade. Memetakan peluang klasifikasi otomatis, deteksi kelelahan biomekanis, dan mengusulkan blueprint arsitektur teknologi olahraga inklusif yang dapat diadopsi luas."
    }
  }
];

export const experiences: ExperienceItem[] = [
  {
    id: "bps",
    company: "Badan Pusat Statistik (BPS)",
    position: {
      en: "Computer Operations Assistant (Asisten Pranata Komputer)",
      id: "Asisten Pranata Komputer"
    },
    period: {
      en: "September 2026 – Present",
      id: "September 2026 – Sekarang"
    },
    location: "Central Java, Indonesia",
    isOngoing: true,
    type: "Data Operations & IT",
    badgeColor: "lime",
    description: {
      en: "Actively engaged in governmental data processing and management operations at Badan Pusat Statistik, gaining robust hands-on institutional experience applying technology and algorithmic rigor to support national-level data workflows.",
      id: "Terlibat dalam kegiatan pengolahan dan pengelolaan data di lingkungan Badan Pusat Statistik, sekaligus mengembangkan pengalaman praktis dalam pemanfaatan teknologi untuk mendukung pekerjaan berbasis data."
    },
    highlights: {
      en: [
        "Participating in systematic data verification, cleaning, and validation workflows across official statistical surveys.",
        "Applying computerized data management best practices in adherence to institutional data governance standards.",
        "Strengthening technological capabilities in processing large-scale demographic and regional socioeconomic datasets."
      ],
      id: [
        "Terlibat dalam alur verifikasi, validasi, dan pengolahan data statistik resmi secara sistematis.",
        "Menerapkan tata kelola data komputerisasi sesuai standar prosedur institusional Badan Pusat Statistik.",
        "Mengembangkan kapasitas praktis pemanfaatan teknologi untuk analisis data daerah dan demografi."
      ]
    }
  },
  {
    id: "dicoding-asah",
    company: "Asah — Dicoding Indonesia",
    position: {
      en: "Cohort React & Backend Developer",
      id: "Cohort React & Backend Developer"
    },
    period: {
      en: "August 2025 – January 2026",
      id: "Agustus 2025 – Januari 2026"
    },
    location: "Remote / Indonesia",
    type: "National Talent Program",
    badgeColor: "cobalt",
    description: {
      en: "Completed intensive digital talent development program covering React, JavaScript, backend architecture, RESTful API design, Git workflow, and cloud computing. Collaborated in a multidisciplinary team to build AI Learning Insight, an AI-powered adaptive learning solution.",
      id: "Menyelesaikan program pengembangan talenta digital intensif yang mencakup React, JavaScript, arsitektur backend, API RESTful, Git, dan cloud computing. Berkolaborasi dalam tim multidisiplin mengembangkan aplikasi pembelajaran bertenaga AI."
    },
    highlights: {
      en: [
        "Mastered state management, reusable component architectures, and responsive UI with modern React and Tailwind CSS.",
        "Built and deployed scalable Node.js/Express REST APIs with robust error handling and JWT authentication.",
        "Delivered a full-featured capstone application featuring real-time AI analytics in a collaborative Agile/Scrum setting."
      ],
      id: [
        "Menguasai pengelolaan state, arsitektur komponen reusable, dan UI responsif dengan React dan Tailwind CSS.",
        "Merancang dan men-deploy API RESTful Node.js dengan penanganan error dan autentikasi aman.",
        "Menyelesaikan proyek capstone pembelajaran cerdas bertenaga AI dalam sprint kerja tim Agile/Scrum."
      ]
    }
  },
  {
    id: "indonesianext",
    company: "IndonesiaNEXT Batch 9 — Telkomsel",
    position: {
      en: "Top 99 National Participant",
      id: "Top 99 Peserta Nasional"
    },
    period: {
      en: "April 2025 – August 2025",
      id: "April 2025 – Agustus 2025"
    },
    location: "National / Jakarta, Indonesia",
    type: "National Digital Talent Program",
    badgeColor: "coral",
    description: {
      en: "Selected among the Top 99 national finalists from more than 7,000 applicants across Indonesia in Telkomsel's premier digital talent development program. Contributed to UI/UX design, user research, rapid prototyping, and AI-driven product innovation.",
      id: "Terpilih dalam Top 99 peserta nasional dari lebih dari 7.000 pendaftar di seluruh Indonesia dalam program pengembangan talenta digital unggulan Telkomsel. Berkontribusi dalam riset pengguna, desain UI/UX, prototyping, dan pengembangan produk berbasis AI."
    },
    highlights: {
      en: [
        "Successfully advanced through multiple competitive assessment stages (Digital Competency, Tech Assessment, Pitching).",
        "Conducted in-depth user experience research and produced production-ready Figma prototypes for digital solutions.",
        "Collaborated with top university talents nationwide to present strategic technology initiatives to industry judges."
      ],
      id: [
        "Lolos seleksi bertahap berskala nasional dari 7.000+ peserta dengan uji kompetensi digital dan presentasi ide.",
        "Menjalankan riset kebutuhan pengguna mendalam dan merancang prototipe sistem interaktif di Figma.",
        "Mempresentasikan konsep inovasi produk berbasis kecerdasan buatan di hadapan panel ahli industri."
      ]
    }
  },
  {
    id: "pmm4",
    company: "Universitas Syiah Kuala — PMM Batch 4",
    position: {
      en: "Exchange Student (Pertukaran Mahasiswa Merdeka)",
      id: "Mahasiswa Pertukaran Pelajar Merdeka"
    },
    period: {
      en: "January 2024 – June 2024",
      id: "Januari 2024 – Juni 2024"
    },
    location: "Banda Aceh, Indonesia",
    type: "Academic & Cultural Mobility",
    badgeColor: "lavender",
    description: {
      en: "Selected as an exchange student funded by the Ministry of Education, Culture, Research, and Technology. Participated in advanced computer science coursework and cross-cultural leadership activities with students from across Indonesia.",
      id: "Terpilih sebagai mahasiswa pertukaran pelajar Kemendikbudristek di Universitas Syiah Kuala. Mengikuti perkuliahan akademik ilmu komputer tingkat lanjut dan kegiatan kebhinekaan bersama mahasiswa dari seluruh nusantara."
    },
    highlights: {
      en: [
        "Completed specialized informatics modules while expanding inter-university academic perspectives.",
        "Spearheaded Modul Nusantara community initiatives fostering cultural empathy, resilience, and team dynamics.",
        "Demonstrated adaptability and leadership in diverse, multidisciplinary learning environments."
      ],
      id: [
        "Menyelesaikan mata kuliah informatika terpilih serta memperluas wawasan akademik lintas perguruan tinggi.",
        "Menginisiasi kegiatan pengabdian Modul Nusantara yang melatih kepekaan sosial dan kepemimpinan adaptif.",
        "Membangun jejaring kolaborasi dengan mahasiswa berprestasi dari berbagai wilayah Indonesia."
      ]
    }
  }
];

export const skillCategories: SkillCategory[] = [
  {
    categoryName: {
      en: "Data & Database",
      id: "Data & Database"
    },
    glyph: "⌬",
    color: "lime",
    skills: [
      { name: "Python", highlight: true, note: "Pandas, NumPy, Scikit-Learn" },
      { name: "PostgreSQL", highlight: true, note: "Relational modeling, indexing" },
      { name: "MySQL", highlight: true, note: "Schema design, queries" },
      { name: "Microsoft Excel", highlight: false, note: "Advanced formulas, pivot, vlookup" },
      { name: "Data Processing", highlight: true, note: "Cleaning, validation, normalization" },
      { name: "Data Analysis", highlight: true, note: "EDA, statistical analysis" },
      { name: "Machine Learning", highlight: true, note: "XGBoost, Random Forest, SVM" },
      { name: "R", highlight: false, note: "Statistical modeling & plots" }
    ]
  },
  {
    categoryName: {
      en: "Web & Mobile Development",
      id: "Web & Mobile Development"
    },
    glyph: "⌘",
    color: "cobalt",
    skills: [
      { name: "JavaScript (ES6+)", highlight: true, note: "Async/await, DOM, APIs" },
      { name: "React", highlight: true, note: "Hooks, Router, Tailwind integration" },
      { name: "HTML5 / CSS3", highlight: false, note: "Semantic layout, responsive design" },
      { name: "Node.js", highlight: false, note: "Express, RESTful endpoints" },
      { name: "PHP", highlight: false, note: "MVC architectures" },
      { name: "Laravel", highlight: true, note: "Eloquent ORM, Blade, migrations" },
      { name: "Kotlin", highlight: true, note: "Android Studio, Material UI" },
      { name: "Flutter", highlight: false, note: "Cross-platform mobile UI" }
    ]
  },
  {
    categoryName: {
      en: "Tools & Design",
      id: "Tools & Desain"
    },
    glyph: "⌖",
    color: "coral",
    skills: [
      { name: "Git & GitHub", highlight: true, note: "Branching, PRs, version control" },
      { name: "Figma", highlight: true, note: "Wireframing, prototyping, systems" },
      { name: "Canva", highlight: false, note: "Visual editorial & branding assets" },
      { name: "Microsoft Office", highlight: false, note: "Word, PowerPoint, Excel" },
      { name: "QGIS", highlight: false, note: "Geospatial vector & raster analysis" },
      { name: "Postman", highlight: false, note: "API testing & collection runs" }
    ]
  },
  {
    categoryName: {
      en: "Professional & Research Competencies",
      id: "Kompetensi Riset & Profesional"
    },
    glyph: "⟡",
    color: "lavender",
    skills: [
      { name: "Database Design", highlight: true, note: "3NF normalization, ERD architecture" },
      { name: "Research & Scientific Writing", highlight: true, note: "Methodology, literature review, IMRaD" },
      { name: "Technical Documentation", highlight: true, note: "API specs, system manuals, blueprints" },
      { name: "Analytical Problem Solving", highlight: true, note: "Algorithmic thinking, data-driven decisions" },
      { name: "Effective Communication", highlight: false, note: "Stakeholder updates, presentations" },
      { name: "Cross-Disciplinary Collaboration", highlight: false, note: "Agile, multidisciplinary teamwork" }
    ]
  }
];

export const achievements: AchievementItem[] = [
  {
    number: "3.85",
    suffix: "/4.00",
    label: {
      en: "Cumulative GPA (IPK)",
      id: "Indeks Prestasi Kumulatif (IPK)"
    },
    description: {
      en: "Bachelor of Computer Science graduate with summa cum laude level academic distinction at Universitas Sains Al-Qur'an.",
      id: "Lulusan S1 Teknik Informatika Universitas Sains Al-Qur'an dengan predikat akademik sangat memuaskan."
    },
    institution: "Universitas Sains Al-Qur'an",
    accentColor: "lime",
    glyph: "⟡"
  },
  {
    prefix: "Top",
    number: "99",
    suffix: "Natl",
    label: {
      en: "National Participant Finalist",
      id: "Finalis Peserta Nasional"
    },
    description: {
      en: "Chosen among the Top 99 national talents from a pool of 7,000+ applicants across Indonesia in Telkomsel's premier talent incubator.",
      id: "Terpilih dalam 99 talenta terbaik nasional dari 7.000+ pendaftar dalam program pembinaan talenta digital Telkomsel."
    },
    institution: "IndonesiaNEXT Batch 9 — Telkomsel",
    accentColor: "cobalt",
    glyph: "⌘"
  },
  {
    number: "3",
    suffix: "Papers",
    label: {
      en: "Peer-Reviewed Publications",
      id: "Publikasi Ilmiah Bereputasi"
    },
    description: {
      en: "Authored 3 scientific works in national accredited journal (SINTA 3) and international conferences hosted by ITB and UNS.",
      id: "Menerbitkan 3 karya ilmiah pada jurnal nasional terakreditasi SINTA 3 serta konferensi internasional ITB dan UNS."
    },
    institution: "SINTA 3, ITB ICEHP & UNS SAPTA",
    accentColor: "lavender",
    glyph: "◈"
  },
  {
    prefix: "Top",
    number: "20",
    label: {
      en: "Finalist Krenova 2025",
      id: "Finalis Krenova Kabupaten Wonosobo"
    },
    description: {
      en: "Selected as one of the 20 regional finalists in the Wonosobo Regency Creativity & Innovation Award with 'Sampah Cerdas'.",
      id: "Terpilih sebagai salah satu dari 20 finalis inovasi daerah Krenova Kabupaten Wonosobo 2025 melalui inovasi Sampah Cerdas."
    },
    institution: "Krenova Kabupaten Wonosobo",
    accentColor: "coral",
    glyph: "⎔"
  },
  {
    number: "100%",
    label: {
      en: "Outstanding Performance",
      id: "Outstanding Performance Award"
    },
    description: {
      en: "Achieved standout distinction in digital competencies, data foundations, and practical exercises.",
      id: "Meraih predikat performa luar biasa dalam penguasaan kompetensi digital dan fondasi data."
    },
    institution: "Hacktiv8 × IBM SkillsBuild",
    accentColor: "lime",
    glyph: "⊹"
  },
  {
    number: "Batch 4",
    label: {
      en: "Pertukaran Mahasiswa Merdeka",
      id: "Mahasiswa Pertukaran Merdeka"
    },
    description: {
      en: "Fully funded national student mobility grantee for academic and inter-cultural development at Universitas Syiah Kuala.",
      id: "Penerima beasiswa mobilitas pertukaran mahasiswa nasional di Universitas Syiah Kuala, Banda Aceh."
    },
    institution: "Universitas Syiah Kuala & Kemendikbudristek",
    accentColor: "cobalt",
    glyph: "⌖"
  }
];

export const editorialQuotes = [
  {
    quote: "Turning raw, unstructured numbers into dependable architectural decisions and evidence-based solutions.",
    quoteId: "Mengubah angka mentah menjadi keputusan arsitektural yang andal dan solusi berbasis bukti empiris.",
    context: "Philosophy on Data & Engineering",
    glyph: "⟡"
  },
  {
    quote: "Good software solves immediate tasks. Great research ensures the underlying model is robust, interpretable, and reproducible.",
    quoteId: "Software yang baik menyelesaikan masalah saat ini. Riset yang mendalam memastikan modelnya teruji, transparan, dan dapat direplikasi.",
    context: "Philosophy on Applied ML",
    glyph: "⌬"
  }
];
