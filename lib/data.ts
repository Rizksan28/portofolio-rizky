export const projects = [
  {
    id: "daging-people-hris",
    title: "DagingPeople HRIS",
    category: "Full-Stack · Sistem HR",
    description:
      "Sistem HR untuk jaringan toko daging: absensi (GPS dan NFC), jadwal shift, cuti, persetujuan berjenjang, penggajian, dan ekspor bank.",
    tech: ["Next.js", "React", "TypeScript"],
    image: "/images/project-hris.jpg",
    type: "proyek",
  },
  {
    id: "costtrack",
    title: "CostTrack",
    category: "Capstone · Best Project",
    description:
      "Sistem perhitungan Harga Perkiraan Estimasi (HPE) dengan integrasi kurs JISDOR Bank Indonesia dan dukungan multi-mata uang.",
    tech: ["Next.js", "Express.js", "MongoDB"],
    image: "/images/project-costtrack.jpg",
    type: "proyek",
  },
  {
    id: "tasktracker",
    title: "TaskTracker",
    category: "Full-Stack · TypeScript",
    description:
      "Aplikasi manajemen tugas dengan status, deadline, prioritas, dan statistik, dibangun dengan React + TypeScript dan FastAPI.",
    tech: ["React", "TypeScript", "Vite"],
    image: "/images/project-task.jpg",
    type: "proyek",
  },
];

export const certificates = [
  {
    id: "cert-pm",
    title: "Foundations of Project Management",
    issuer: "Google",
    date: "Apr 2026",
    image: "/images/cert-placeholder.jpg",
  },
  {
    id: "cert-delf",
    title: "DELF A1 – Diplôme d'études en langue française",
    issuer: "France Éducation international",
    date: "Jul 2025",
    image: "/images/cert-placeholder.jpg",
  },
  {
    id: "cert-sap-hr",
    title: "SAP HR050 – Business Processes in HCM",
    issuer: "PT Harfan Tri Megah (Edugate)",
    date: "Des 2025",
    image: "/images/cert-placeholder.jpg",
  },
  {
    id: "cert-sap-scm",
    title: "SAP SCM500 – Business Processes in Procurement",
    issuer: "PT Harfan Tri Megah (Edugate)",
    date: "Des 2024",
    image: "/images/cert-placeholder.jpg",
  },
];

export const techStack = [
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { category: "Backend", items: ["Express.js", "FastAPI", "Laravel", "MongoDB", "MySQL"] },
  { category: "UI/UX Design", items: ["Figma", "Adobe XD", "Photoshop", "Illustrator", "Canva"] },
  { category: "Tools & Productivity", items: ["Git", "SAP ERP", "Jira", "Trello", "Notion", "VS Code"] },
];

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

export const experiences = [
  {
    id: "exp-1",
    title: "Kepala Laboratorium ERP & Proyek (ERPIFY)",
    org: "ERPIFY Laboratory – Telkom University Jakarta",
    period: "Jan 2026 – Saat ini",
    desc: "Memimpin 5 divisi di 3 modul SAP utama (SCM, HCM, Accounting). Mengelola 25+ asisten laboratorium untuk memastikan keunggulan akademik.",
    type: "org",
  },
  {
    id: "exp-2",
    title: "Ketua Himpunan Mahasiswa Sistem Informasi (HIMSI)",
    org: "HIMSI – Telkom University Jakarta",
    period: "Jan 2026 – Saat ini",
    desc: "Memimpin komunitas seluruh mahasiswa Sistem Informasi. Mengelola 6 departemen dengan 30+ staf inti.",
    type: "org",
  },
  {
    id: "exp-3",
    title: "Asisten Lab – Manajemen Sumber Daya Manusia",
    org: "Telkom University Jakarta",
    period: "Mar 2026 – Saat ini",
    desc: "Mendampingi 40+ mahasiswa dalam modul SAP HR050 (HCM): Manajemen Organisasi, Administrasi Personalia, dan Penggajian.",
    type: "work",
  },
  {
    id: "exp-4",
    title: "Asisten Laboratorium Sistem Enterprise",
    org: "Telkom University Jakarta",
    period: "Sep 2025 – Jan 2026",
    desc: "Membimbing 42 mahasiswa di SAP ERP; tingkat kelulusan 100% pada mata kuliah Enterprise Systems.",
    type: "work",
  },
  {
    id: "exp-5",
    title: "Project Manager – Cikasungka Village Profile Website",
    org: "Telkom University Jakarta",
    period: "Mar 2025 – Jun 2025",
    desc: "Memimpin tim 12 mahasiswa untuk mendigitalisasi layanan desa; merancang UI/UX di Figma, sosialisasi ke 30+ warga.",
    type: "project",
  },
];

export const testimonials = [
  {
    id: "t1",
    quote:
      "Rizky adalah developer yang responsif, detail, dan sangat memahami kebutuhan bisnis. Hasil kerjanya sangat rapi dan berkualitas tinggi.",
    name: "Nama Klien A",
    role: "Founder / Perusahaan",
    avatar: "/images/avatar-placeholder.jpg",
  },
  {
    id: "t2",
    quote:
      "Bekerja dengan Rizky sangat menyenangkan. Ia cepat tanggap, komunikatif, dan mampu memberikan solusi yang tepat untuk setiap tantangan.",
    name: "Nama Klien B",
    role: "CTO / Startup",
    avatar: "/images/avatar-placeholder.jpg",
  },
  {
    id: "t3",
    quote:
      "Rizky punya kemampuan teknis yang kuat, terutama di full-stack dan integrasi API. Ia juga berorientasi pada hasil dan selalu tepat waktu.",
    name: "Nama Klien C",
    role: "Marketing Lead / Perusahaan",
    avatar: "/images/avatar-placeholder.jpg",
  },
];

export const featuredWork = [
  {
    id: "fw-1",
    title: "Finance Dashboard",
    category: "Web App",
    description: "Aplikasi manajemen keuangan dengan analitik real-time.",
    image: "/images/featured-finance.jpg",
    color: "from-blue-900 to-blue-700",
  },
  {
    id: "fw-2",
    title: "Elevate Your Brand",
    category: "Branding",
    description: "Website desain & branding untuk bisnis modern.",
    image: "/images/featured-brand.jpg",
    color: "from-slate-800 to-slate-600",
  },
  {
    id: "fw-3",
    title: "Wellness Companion",
    category: "Mobile App",
    description: "Aplikasi pendamping kesehatan dan gaya hidup.",
    image: "/images/featured-wellness.jpg",
    color: "from-indigo-800 to-indigo-600",
  },
];
