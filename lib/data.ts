export interface Project {
  id: string;
  slug: string;
  archiveId: string;
  title: string;
  category: string;
  year: string;
  description: string;
  longDesc?: string;
  problem?: string;
  solution?: string;
  features?: string[];
  tech: string[];
  tags?: string[];
  image?: string;
  color?: string;
  type?: string;
  role?: string;
  team?: string;
  accent?: string;
  cover?: string;
  liveUrl?: string;
  featured?: boolean;
}

export interface Award {
  id: string;
  slug: string;
  place: string;
  label: string;
  title: string;
  issuer: string;
  date: string;
  role: string;
  team: string;
  product: string;
  desc: string;
  photos: { src: string; caption: string }[];
  projectSlug?: string;
  organizer?: string;
  eventDates?: string;
  certificateNo?: string;
  recipient?: string;
}

// ─── PROJECTS ────────────────────────────────────────────────────────────────

export const projects: Project[] = [
  {
    id: "pharvia",
    slug: "pharvia",
    archiveId: "RSP-001",
    title: "PHARVIA",
    category: "Digital Innovation · Sustainability",
    year: "2026",
    description:
      "Platform digital pengembalian dan pelacakan obat tidak terpakai yang menghubungkan masyarakat, apotek, mitra farmasi, dan pengelola limbah berizin.",
    longDesc:
      "Pharvia adalah konsep Digital Pharmaceutical Take-Back & Traceability Platform yang dirancang agar obat sisa dan kedaluwarsa dapat dikembalikan dengan lebih aman, mudah, terlacak, dan berkelanjutan. Proyek ini meraih Juara 1 Business Model Canvas di USK Pharmacy Fair 2026.",
    problem:
      "Obat sisa rumah tangga masih banyak dibuang bersama sampah biasa, sementara jalur pengembalian resmi nyaris tidak dipakai. Akibatnya muncul risiko lingkungan, kesehatan, dan hilangnya jejak pengelolaan pascakonsumsi.",
    solution:
      "Satu pengalaman digital yang menyatukan edukasi, pemindaian obat, titik pengembalian, pendaftaran setoran, insentif EcoPoint, dan konsep pelacakan.",
    features: ["Pharvia Scan", "Pharvia Point", "Smart Drop", "EcoPoint", "Smart Pickup", "Pharvia Trace & Impact"],
    tech: [],
    tags: ["Digital Health", "Sustainability", "B2B2C"],
    role: "CEO",
    team: "Halte Terminal Corruscant · 3 members",
    accent: "#2BD4B4",
    cover: "/projects/pharvia/hero/mobile-showcase.webp",
    liveUrl: "https://pharvia.vercel.app/",
    featured: true,
  },
  {
    id: "amanin",
    slug: "amanin",
    archiveId: "RSP-005",
    title: "AMANIN",
    category: "AI & Cybersecurity",
    year: "2026",
    description:
      "AI Anti-Scam Decision Assistant: konsep dan prototipe untuk memeriksa chat, tautan, screenshot, dan QR sebelum percaya, klik, atau bayar.",
    longDesc:
      "AMANIN adalah konsep platform keamanan digital yang membantu pengguna menilai risiko penipuan sebelum bertindak lewat alur Receive, Share, Check, Decide. Hasilnya berupa skor risiko 0–100, alasan, dan rekomendasi tindakan, sebagai indikasi awal dan bukan jaminan keamanan.",
    problem:
      "Pesan, tautan, dan QR palsu sering sampai ke pengguna tepat saat mereka harus memutuskan, sementara cara memverifikasinya tidak jelas.",
    solution:
      "Satu alur pemeriksaan yang menjelaskan indikator risiko dan menyarankan langkah aman sebelum pengguna bertindak.",
    features: ["Chat Scam Check", "QR Scam Check", "Screenshot Scanner", "Scam Risk Score", "Smart Recommendation", "Cyber Education"],
    tech: [],
    tags: ["AI", "Cybersecurity", "Digital Innovation"],
    role: "CEO",
    team: "Halte Terminal Rawamangun · 3 members",
    accent: "#38D5F3",
    liveUrl: "https://mobile-webpage-amanin.vercel.app/",
    featured: true,
  },
  {
    id: "pasarakar",
    slug: "pasarakar",
    archiveId: "RSP-006",
    title: "PASARAKAR",
    category: "Agritech · Digital Innovation",
    year: "2026",
    description:
      "Konsep super-app agritech offline-first untuk prediksi harga, penjualan panen kolektif, marketplace B2B, logistik, dan akses pembiayaan lewat BUMDes dan koperasi desa.",
    longDesc:
      "PasarAkar adalah konsep bisnis dan prototipe desain untuk membantu petani desa mengakses informasi harga, pasar, dan modal secara lebih setara. Proyek ini meraih Juara 1 dan Presentasi Terbaik di NACOPS 7.0 2026.",
    problem:
      "Petani sering menjual dengan harga yang ditentukan tengkulak karena minim informasi harga, posisi tawar, dan akses pembeli maupun pembiayaan.",
    solution:
      "Satu ekosistem offline-first yang menyatukan informasi harga, agregasi panen kolektif, marketplace B2B, logistik desa, dan konsep akses pembiayaan.",
    features: ["AgroPrice AI", "KolektifOrder", "PasarKomoditas", "LogisDesa", "AkarKredit", "Offline Mode"],
    tech: [],
    tags: ["Agritech", "BUMDes", "Digital Innovation"],
    role: "CFO",
    team: "KAMI AKAN MENANG · 3 members",
    accent: "#D9A441",
    featured: true,
  },
  {
    id: "daging-people-hris",
    slug: "daging-people-hris",
    archiveId: "RSP-002",
    title: "DagingPeople HRIS",
    category: "Full-Stack · Sistem HR",
    year: "2025",
    description:
      "Sistem HR untuk jaringan toko daging: absensi (GPS dan NFC), jadwal shift, cuti, persetujuan berjenjang, penggajian, dan ekspor bank.",
    longDesc:
      "DagingPeople HRIS dirancang khusus untuk jaringan toko daging multi-cabang. Sistem mencakup manajemen absensi dengan validasi GPS (memastikan karyawan hadir di lokasi toko yang benar) dan dukungan NFC untuk tap-in/out. Modul penggajian otomatis menghitung gaji berdasarkan kehadiran, lembur, dan potongan, dengan fitur ekspor langsung ke format transfer bank.",
    problem:
      "Jaringan toko daging dengan 10+ cabang mengelola absensi secara manual menggunakan buku catatan dan spreadsheet, mengakibatkan kesalahan hitung gaji, kecurangan absensi, dan tidak ada visibilitas real-time bagi manajer.",
    solution:
      "Membangun sistem HRIS terintegrasi dengan validasi lokasi berbasis GPS, dashboard manajer real-time, alur persetujuan cuti multi-level, dan ekspor penggajian ke file bank.",
    features: [
      "Absensi GPS dengan radius validasi per cabang",
      "Dukungan NFC tap-in/out",
      "Manajemen jadwal shift mingguan",
      "Alur pengajuan dan persetujuan cuti berjenjang",
      "Kalkulasi gaji otomatis dengan breakdown lembur",
      "Ekspor data bank (BCA, Mandiri, BNI)",
      "Dashboard analitik kehadiran real-time",
    ],
    tech: ["Next.js", "React", "TypeScript", "MongoDB", "Prisma", "Tailwind CSS"],
    role: "Full-Stack Developer",
    team: "Solo Project",
  },
  {
    id: "costtrack",
    slug: "costtrack",
    archiveId: "RSP-003",
    title: "CostTrack",
    category: "Capstone · Best Project",
    year: "2025",
    description:
      "Sistem perhitungan Harga Perkiraan Estimasi (HPE) dengan integrasi kurs JISDOR Bank Indonesia dan dukungan multi-mata uang.",
    longDesc:
      "CostTrack adalah aplikasi capstone yang meraih predikat Best Project. Dikembangkan untuk membantu tim pengadaan dan keuangan dalam menghitung Harga Perkiraan Estimasi (HPE) secara akurat dengan mempertimbangkan fluktuasi kurs valuta asing melalui integrasi API kurs JISDOR Bank Indonesia secara real-time.",
    problem:
      "Proses kalkulasi HPE di banyak instansi masih dilakukan manual via spreadsheet tanpa integrasi kurs real-time, menyebabkan ketidakakuratan estimasi proyek dan risiko over/under-budget.",
    solution:
      "Membangun web app dengan kalkulasi HPE otomatis, integrasi kurs JISDOR BI, dukungan multi-mata uang, dan riwayat kalkulasi yang bisa diekspor.",
    features: [
      "Integrasi kurs JISDOR Bank Indonesia (live)",
      "Kalkulasi HPE multi-komponen",
      "Konversi multi-mata uang otomatis",
      "Riwayat kalkulasi dengan versioning",
      "Ekspor laporan PDF dan Excel",
      "Role-based access (Admin, Operator, Viewer)",
    ],
    tech: ["Next.js", "Express.js", "MongoDB", "TypeScript", "Tailwind CSS"],
    role: "Full-Stack Developer & Project Manager",
    team: "Tim 4 orang",
  },
  {
    id: "tasktracker",
    slug: "tasktracker",
    archiveId: "RSP-004",
    title: "TaskTracker",
    category: "Full-Stack · TypeScript",
    year: "2024",
    description:
      "Aplikasi manajemen tugas dengan status, deadline, prioritas, dan statistik, dibangun dengan React + TypeScript dan FastAPI.",
    longDesc:
      "TaskTracker adalah aplikasi manajemen tugas personal yang dibangun sebagai studi eksplorasi arsitektur full-stack modern. Frontend menggunakan React dengan TypeScript murni tanpa framework CSS berat; backend FastAPI (Python) menyediakan REST API dengan autentikasi JWT.",
    problem:
      "Kebutuhan akan tool manajemen tugas sederhana yang bisa dikustomisasi sepenuhnya tanpa bergantung pada layanan SaaS pihak ketiga.",
    solution:
      "Aplikasi self-hosted dengan dashboard statistik, filter multi-dimensi (status, prioritas, deadline), dan export data.",
    features: [
      "CRUD tugas dengan status (Todo, In Progress, Done)",
      "Prioritas (High, Medium, Low)",
      "Deadline tracker dengan notifikasi overdue",
      "Dashboard statistik penyelesaian",
      "Filter dan search real-time",
      "Autentikasi JWT",
    ],
    tech: ["React", "TypeScript", "Vite", "FastAPI", "Python", "SQLite"],
    role: "Full-Stack Developer",
    team: "Solo Project",
  },
];

// ─── CERTIFICATES ─────────────────────────────────────────────────────────────

export const certificates = [
  {
    id: "cert-ai",
    title: "AI for Research and Insights",
    issuer: "Google",
    date: "Jun 2026",
    credentialId: "E5AL9Z450LID",
    image: "/sertifikasi/1782191336782.jpg",
  },
  {
    id: "cert-presentation",
    title: "Develop Presentations and Slideshows",
    issuer: "Google",
    date: "Jun 2026",
    credentialId: "IOUF0009VCRW",
    image: "/sertifikasi/1782191131049.jpg",
  },
  {
    id: "cert-lkmm",
    title: "Latihan Keterampilan Manajemen Mahasiswa Tingkat Menengah (LKMM-TM)",
    issuer: "Telkom University",
    date: "Feb 2026",
    credentialId: "251/KMH01/KMH/2026",
    image: "/sertifikasi/1778475646321.jpg",
  },
  {
    id: "cert-pm",
    title: "Foundations of Project Management",
    issuer: "Google",
    date: "Apr 2026",
    credentialId: "TQIRY119XZPV",
    image: "/sertifikasi/1778475315554.jpg",
  },
  {
    id: "cert-sql",
    title: "Intermediate SQL",
    issuer: "DataCamp",
    date: "Jan 2026",
    credentialId: "45,599,580",
    image: "/sertifikasi/1778475194284.jpg",
  },
  {
    id: "cert-data",
    title: "Data Analysis Fundamental",
    issuer: "MySkill",
    date: "Des 2025",
    credentialId: "",
    image: "/sertifikasi/1778474915361.jpg",
  },
  {
    id: "cert-delf",
    title: "DELF A1 – Diplôme d'études en langue française",
    issuer: "France Éducation international",
    date: "Jul 2025",
    credentialId: "062021025914",
    image: "/sertifikasi/1761093712717.jpg",
  },
];

// ─── TECH STACK ───────────────────────────────────────────────────────────────

export const techStack = [
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { category: "Backend", items: ["Express.js", "FastAPI", "Laravel", "MongoDB", "MySQL"] },
  { category: "UI/UX Design", items: ["Figma", "Adobe XD", "Photoshop", "Illustrator", "Canva"] },
  { category: "Tools & Productivity", items: ["Git", "SAP ERP", "Jira", "Trello", "Notion", "VS Code"] },
];

// ─── SKILLS ───────────────────────────────────────────────────────────────────

export const skills = [
  { name: "Figma", category: "Design" },
  { name: "Adobe XD", category: "Design" },
  { name: "Photoshop", category: "Design" },
  { name: "Illustrator", category: "Design" },
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "Laravel", category: "Backend" },
  { name: "Express.js", category: "Backend" },
  { name: "MySQL", category: "Backend" },
  { name: "SAP ERP", category: "Tools" },
  { name: "Jira", category: "Tools" },
  { name: "Notion", category: "Tools" },
];


// ─── COMPETENCIES ───────────────────────────────────

export const competencies = [
  { id: "product", name: "Digital Product Development", note: "Dari riset masalah, konsep, hingga prototipe yang dapat dicoba.", projects: ["pharvia", "amanin"] },
  { id: "uiux", name: "UI/UX Design", note: "Alur dan antarmuka mobile untuk pengguna awam.", projects: ["pharvia", "amanin"] },
  { id: "analysis", name: "System & Business Analysis", note: "Persona, SWOT/TOWS, analisis pasar, risiko, dan model bisnis.", projects: ["amanin", "pharvia"] },
  { id: "cyber", name: "Cybersecurity Product Concepts", note: "Konsep pencegahan penipuan berbasis skor risiko dan edukasi.", projects: ["amanin"] },
  { id: "ai", name: "AI-Assisted Product Design", note: "Merancang produk dengan asisten keputusan berbasis AI sebagai konsep.", projects: ["amanin"] },
];

// ─── EXPERIENCES ──────────────────────────────────────────────────────────────

export const experiences = [
  {
    id: "exp-1",
    title: "Junior Programmer",
    org: "BPJS Ketenagakerjaan · Internship",
    period: "Jul 2026 – Sep 2026 · 3 mos",
    location: "Setiabudi, Jakarta · On-site",
    desc: "Berkontribusi dalam pengembangan perangkat lunak enterprise end-to-end di bawah Deputi Arsitektur & Pengembangan TI dengan memodelkan proses bisnis menggunakan BPMN, merancang prototipe UI/UX, dan membangun solusi digital.",
    tags: ["Software Development", "BPMN", "UI/UX", "Project Management"],
    type: "work",
  },
  {
    id: "exp-2",
    title: "Chairperson – Information Systems Student Association (HIMSI TUJ) 2026",
    org: "Himpunan Mahasiswa Sistem Informasi – Telkom University Jakarta",
    period: "Jan 2026 – Saat ini · 11 mos",
    location: "South Jakarta, Jakarta, Indonesia",
    desc: "Memimpin komunitas 200+ mahasiswa Sistem Informasi sebagai ketua utama, mengelola 6 departemen dengan strategi organisasi yang terstruktur dan program kerja yang berdampak.",
    tags: ["Project Management", "Leadership", "Strategic Planning"],
    type: "org",
  },
  {
    id: "exp-3",
    title: "Undergraduate Student",
    org: "Telkom University Jakarta",
    period: "Sep 2023 – Saat ini · 3 thn 3 bln",
    location: "Jakarta, Indonesia",
    desc: "Mahasiswa aktif program studi Sistem Informasi dengan fokus pada pengembangan produk digital, manajemen proyek, dan UI/UX design.",
    tags: ["Communication", "Analytical Skills"],
    type: "work",
  },
  {
    id: "exp-4",
    title: "Deputy Head of Public Relations Department – HIMSI",
    org: "Himpunan Mahasiswa Sistem Informasi – Telkom University Jakarta",
    period: "Okt 2024 – Okt 2025 · 1 thn 1 bln",
    location: "South Jakarta, Jakarta, Indonesia",
    desc: "Memimpin tim 12 anggota untuk memastikan kelancaran strategi komunikasi dan dokumentasi kegiatan organisasi skala nasional.",
    tags: ["Public Relations", "Social Media", "Communication"],
    type: "org",
  },
  {
    id: "exp-5",
    title: "Chairperson – Dewan Ambalan (Student Scout Council)",
    org: "Dewan Ambalan SMA Labschool Cibubur",
    period: "Agu 2021 – Agu 2022 · 1 thn 1 bln",
    location: "Cibubur, Jakarta",
    desc: "Ketua pertama Dewan Ambalan; memimpin pembentukan struktur awal dengan mengelola 7 divisi dan mengkoordinasikan 20 anggota aktif. Merancang dan mengimplementasikan program strategis pasca-pandemi.",
    tags: ["Leadership", "Team Management", "Strategic Planning"],
    type: "org",
  },
];

// ─── AWARDS ───────────────────────────────────────────────────────────────────

export const awards: Award[] = [
  {
    id: "award-1",
    slug: "usk-pharmacy-fair-2026",
    place: "1st",
    label: "Juara 1",
    title: "Business Model Canvas (BMC) Competition – USK Pharmacy Fair 2026",
    issuer: "Universitas Syiah Kuala (USK) – HIMAFAR",
    date: "Oct 2026",
    role: "Chief Executive Officer (CEO)",
    team: "Team Halte Terminal Corruscant",
    product: "PHARVIA",
    desc: "Meraih Juara 1 di kompetisi BMC USK Pharmacy Fair 2026 (6–8 Oktober). Sebagai CEO bersama Vassell Enha Atthayya (CFO) dan Evan Octavianus Haryo Handoko (CTO), memimpin strategi bisnis dan desain model bisnis PHARVIA — ekosistem kesehatan digital yang berfokus pada pengelolaan limbah farmasi, verifikasi obat, dan pembuangan obat tidak terpakai.",
    photos: [
      { src: "/projects/pharvia/achievement/award-announcement.jpg", caption: "Pengumuman pemenang Juara 1 BMC" },
      { src: "/projects/pharvia/achievement/certificate-juara-1.webp", caption: "Sertifikat Juara 1 BMC — Rizky Sandi Pratama" },
      { src: "/projects/pharvia/team/team-halte-terminal-corruscant.jpg", caption: "Tim Halte Terminal Corruscant dengan sertifikat" },
    ],
    projectSlug: "pharvia",
    organizer: "Himpunan Mahasiswa Farmasi (HIMAFAR), FMIPA, Universitas Syiah Kuala",
    eventDates: "6–8 Oktober 2026",
    certificateNo: "101/UPF/HIMAFAR/2026",
    recipient: "Rizky Sandi Pratama",
  },
  {
    id: "award-2",
    slug: "undip-bmc-2026",
    place: "2nd",
    label: "Juara 2",
    title: "Business Model Canvas (BMC) National Competition 2026",
    issuer: "Diponegoro Economics Student Community (DESC) – Universitas Diponegoro",
    date: "Aug 2026",
    role: "Chief Financial Officer (CFO)",
    team: "Team Jembatan Bellingham x Halland",
    product: "AstraLoka",
    desc: "Meraih Juara 2 di Diponegoro Economics Project 2026. Sebagai CFO bersama Tristan Khayru Abiyudha (CEO) dan Harbima Razan Adhitya (CTO), menyusun pemodelan keuangan, arsitektur monetisasi hybrid, dan unit economics 5 tahun untuk AstraLoka — perencana perjalanan eco-cultural berbasis AI.",
    photos: [
      { src: "/undip/1787847559338.jpg", caption: "Piagam Penghargaan" },
      { src: "/undip/1787847613472.jpg", caption: "Foto Tim" },
      { src: "/undip/1787847613511.jpg", caption: "Foto Sendiri" },
    ],
  },
  {
    id: "award-3",
    slug: "nacops-7-2026",
    place: "1st",
    label: "Juara 1 + Best Presentation",
    title: "NACOPS 7.0 National Business Plan Competition 2026",
    issuer: "Pertemanan Sejiwa",
    date: "Jun 2026",
    role: "Chief Financial Officer (CFO) & Business Strategist",
    team: "KAMI AKAN MENANG",
    product: "PasarAkar",
    desc: "Meraih Juara 1 dan Best Presentation di kompetisi nasional bertema \"Inovasi Bisnis Bertumpu pada Sumber Daya Daerah\". Sebagai CFO bersama Tristan Khayru Abiyudha (CEO) dan Harbima Razan Adhitya (CTO), memimpin pemodelan keuangan, valuasi, dan unit economics untuk PasarAkar — agritech super-app offline-first yang mengintegrasikan BUMDes, prediksi harga AI, dan micro-financing untuk petani desa.",
    photos: [
      { src: "/projects/pasarakar/achievements/award-photo-trophy-medal-certificates.jpg", caption: "Foto penghargaan: piala, medali, dan sertifikat" },
      { src: "/projects/pasarakar/team/team-celebration.jpg", caption: "Foto tim KAMI AKAN MENANG" },
      { src: "/projects/pasarakar/achievements/certificate-juara-1.jpg", caption: "Sertifikat Juara 1" },
      { src: "/projects/pasarakar/achievements/certificate-presentasi-terbaik.jpg", caption: "Sertifikat Presentasi Terbaik" },
    ],
    projectSlug: "pasarakar",
    organizer: "Pertemanan Sejiwa",
    eventDates: "28 Juni 2026",
    certificateNo: "VI/PS/ESEPS/2026/9",
    recipient: "Rizky Sandi Pratama",
  },
  {
    id: "award-4",
    slug: "digitex-utm-2026",
    place: "silver",
    label: "Silver Medal",
    title: "Digital Innovation & Technology Exhibition (Digitex) 2026",
    issuer: "Universiti Teknologi Malaysia (UTM)",
    date: "Jun 2026",
    role: "CFO & Business Strategist",
    team: "Tim AETHER",
    product: "AETHER",
    desc: "Meraih Silver Medal di Digitex 2026, Universiti Teknologi Malaysia, bersaing melawan 100+ tim internasional. Menampilkan AETHER — kalung pintar Emotion AI yang melepaskan wewangian personal berdasarkan tingkat stres biometrik. Sebagai CFO & Business Strategist, menyusun rencana keuangan, kerangka evaluasi proyek, mockup UI/UX, dan seluruh materi marketing profesional.",
    photos: [
      { src: "/digitex/1782804127905.jpg", caption: "Certificate of Award" },
      { src: "/digitex/digit.jpg", caption: "Foto Tim di UTM" },
    ],
  },
  {
    id: "award-5",
    slug: "unj-international-2026",
    place: "3rd",
    label: "Juara 3",
    title: "International Business Strategy Competition 2026 (UNJ)",
    issuer: "Universitas Negeri Jakarta",
    date: "May 2026",
    role: "Chief Technology Officer (CTO) & Product Development",
    team: "Team Aether",
    product: "Aether",
    desc: "Meraih Juara 3 di kompetisi internasional bertema \"Empowering Future Entrepreneurs: Digital for Sustainable Innovation\". Sebagai CTO & Product Development, menyelaraskan roadmap produk teknis dengan strategi bisnis berkelanjutan. Terpilih sebagai salah satu dari 8 tim final dari pool global universitas nasional dan internasional.",
    photos: [
      { src: "/unj/1778473598530.jpg", caption: "Certificate of Achievement" },
      { src: "/unj/1778473610619.jpg", caption: "Aether Team" },
    ],
  },
  {
    id: "award-6",
    slug: "semar-uns-2025",
    place: "1st",
    label: "Juara 1",
    title: "Semar Entrepreneur 2025 – National BMC Competition",
    issuer: "Universitas Sebelas Maret",
    date: "Sep 2025",
    role: "Team Leader",
    team: "Blindbox Juara",
    product: "SobatAmbis",
    desc: "Meraih Juara 1 di Kompetisi Business Model Canvas Nasional bertema \"Future-Proof Business: Creating Innovative Solutions Amid Global Economic Turbulence\". Sebagai team leader Blindbox Juara, memimpin pengembangan SobatAmbis, mengungguli 40+ universitas se-Indonesia melalui validasi model bisnis yang ketat dan sesi pitching final.",
    photos: [
      { src: "/uns/1778473286764.jpg", caption: "Sertifikat Juara 1" },
      { src: "/uns/1778473480000.jpg", caption: "Foto Tim – Pitching Day" },
    ],
  },
  {
    id: "award-7",
    slug: "klikstart-btp-2025",
    place: "2nd",
    label: "Juara 2",
    title: "Klikstart Startup Competition 2025 – Bandung Techno Park",
    issuer: "Bandung Techno Park (BTP)",
    date: "Sep 2025",
    role: "Co-Founder",
    team: "KENICARE",
    product: "KENICARE",
    desc: "Meraih Juara 2 di Klikstart Startup Competition 2025 dengan startup KENICARE di Bandung Techno Park, diselenggarakan bekerja sama dengan Telkom University. Kompetisi ini berfokus pada inkubasi bisnis dan akselerasi startup, memvalidasi potensi komersial dan inovasi teknis solusi kami dalam ekosistem BTP Business Incubator.",
    photos: [
      { src: "/btp/1778472993393.jpg", caption: "Certificate of Achievement" },
      { src: "/btp/1778473063014.jpg", caption: "Award – Business Festival BTP" },
    ],
  },
  {
    id: "award-8",
    slug: "iofest-untar-2025",
    place: "harapan",
    label: "Harapan 1",
    title: "Business Plan I/O Festival – Tarumanagara University",
    issuer: "Tarumanagara University",
    date: "Jun 2025",
    role: "Peserta",
    team: "LOMBA M NYA MENANG",
    product: "",
    desc: "Meraih Harapan 1 di kompetisi Business Plan I/O Festival BEM FTI Universitas Tarumanagara — pengalaman kompetisi offline pertama kami. Berkesempatan mempresentasikan business plan langsung di hadapan panel juri dan menjadi fondasi penting untuk perjalanan selanjutnya.",
    photos: [
      { src: "/iofest/1760527869004.jpg", caption: "Sertifikat Harapan 1" },
      { src: "/iofest/1760527871624.jpg", caption: "Award Presentation" },
    ],
  },
];

// ─── FEATURED WORK (homepage preview) ────────────────────────────────────────
// No longer used directly; FeaturedTapes reads `projects.slice(0,3)`.
// Kept as a named export for backwards compatibility in case other pages import it.

export const featuredWork = projects.slice(0, 3).map((p) => ({
  id: p.id,
  title: p.title,
  slug: p.slug,
  category: p.category,
  description: p.description,
  image: p.cover ?? "",
  color: "",
  tech: p.tech.length ? p.tech : p.tags ?? [],
}));
