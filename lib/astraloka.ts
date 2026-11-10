// AstraLoka case-study content.
// Source: "AstraLoka BMC UNDIP 2026" presentation (17 slides), Agustus 2026.
// Background statistics are third-party figures quoted from the presentation.
// Financial values are five-year business projections, not realised results.
// Personas are design personas, not real customers.

const base = "/projects/astraloka";

export const astraloka = {
  name: "ASTRALOKA",
  slug: "astraloka",
  archiveId: "RSP-007",
  category: "Travel-Tech · Eco-Cultural",
  year: "2026",
  teamName: "Jembatan Bellingham x Halland",
  tagline: "Smart Eco-Cultural Travel Planner.",
  heroLine: ["ECO-TRAVEL,", "REIMAGINED."],
  subtitle: "Smart Eco-Cultural Travel Planner berbasis AI untuk wisata lokal yang merata, berkelanjutan, dan terukur.",
  summary: "Platform satu ekosistem yang menyatukan AI itinerary, peta budaya, marketplace UMKM, dan impact tracker.",
  fullConcept:
    "AstraLoka adalah platform smart eco-travel planner yang menyatukan AI itinerary, peta budaya, marketplace UMKM, dan impact tracker — satu ekosistem untuk mendistribusikan manfaat pariwisata secara lebih merata ke seluruh daerah dan komunitas lokal.",
  quote:
    "Bagaimana teknologi bisa menjadi jembatan antara wisatawan yang ingin pengalaman bermakna dan komunitas lokal yang ingin ditemukan?",

  heroImage: { src: `${base}/mockups/app-screens.png`, width: 5462, height: 1924 },

  colors: {
    bg: "#0a1810",
    forest: "#0F2318",
    green: "#2D8B5A",
    sage: "#5BAF83",
    rust: "#C07830",
    cream: "#F5EDD8",
    amber: "#F5BA60",
    paper: "#F1E5D0",
  },

  story: [
    "Indonesia menyimpan kekayaan wisata yang belum sepenuhnya terjangkau. Dari 6.016 desa wisata yang tersebar di seluruh Nusantara, hanya segelintir destinasi besar yang menampung 15 juta kunjungan wisatawan setiap tahunnya — sementara ribuan desa budaya lain hampir tidak tersentuh.",
    "Di sisi lain, 20% belanja wisatawan bocor ke produk impor dan rantai nilai yang tidak melibatkan komunitas lokal. Ekonomi pariwisata tumbuh di permukaan, tetapi tidak menjangkau ke bawah. Produk UMKM lokal, pemandu desa, dan pengalaman budaya autentik kehilangan panggung di tengah dominasi konten destinasi mainstream.",
    "AstraLoka lahir dari pertanyaan sederhana: bagaimana teknologi bisa menjadi jembatan antara wisatawan yang ingin pengalaman bermakna dan komunitas lokal yang ingin ditemukan? Gagasan ini dirumuskan oleh tim Jembatan Bellingham x Halland dan meraih Juara 2 di kompetisi nasional BMC Diponegoro Economics Project (DEP) 2026, Agustus 2026.",
  ],

  problem: {
    core: "Pariwisata Indonesia tumbuh cepat, tetapi manfaatnya terkonsentrasi. Data latar belakang yang dikutip dari presentasi AstraLoka menggambarkan ruang masalah yang spesifik.",
    stats: [
      { value: "1,021", unit: "M", label: "perjalanan domestik per tahun", lit: 18 },
      { value: "79,5", unit: "%", label: "penetrasi internet Indonesia", lit: 16 },
      { value: "6.016", unit: "", label: "desa wisata tersebar di Indonesia", lit: 12 },
    ],
    sourceNote: "Angka di atas adalah data latar belakang pihak ketiga yang dikutip dari presentasi AstraLoka. Bukan hasil kinerja AstraLoka.",
    risks: [
      { id: "A", title: "Konsentrasi wisatawan", text: "15 juta kunjungan menumpuk di destinasi besar seperti Bali selatan, membebani infrastruktur dan melewatkan ribuan desa wisata potensial." },
      { id: "B", title: "Kebocoran ekonomi lokal", text: "20% belanja wisata bocor ke produk impor dan rantai nilai yang tidak melibatkan UMKM atau komunitas lokal." },
      { id: "C", title: "Distribusi tidak merata", text: "Destinasi budaya dan desa wisata di luar 'jalur utama' kehilangan potensi pendapatan karena tidak masuk dalam itinerary standar." },
    ],
    opportunity: "AstraLoka menjembatani wisatawan yang mencari makna dan komunitas lokal yang ingin ditemukan.",
  },

  solution: {
    intro: "AstraLoka menyatukan enam kapabilitas dalam satu ekosistem eco-travel — dari merencanakan perjalanan hingga mengukur dampaknya.",
    steps: [
      { n: "01", title: "PLAN", text: "Smart Itinerary AI menyusun rute personal berdasarkan minat, budget, dan preferensi keberlanjutan pengguna." },
      { n: "02", title: "CONNECT", text: "Cultural Map dan Concierge menghubungkan wisatawan dengan destinasi budaya dan UMKM lokal yang autentik." },
      { n: "03", title: "DISTRIBUTE", text: "Local Marketplace dan Eco-Quest mendistribusikan arus wisatawan ke daerah yang kurang terekspos." },
      { n: "04", title: "MEASURE", text: "Impact Tracker menghitung jejak ekologi dan kontribusi ekonomi setiap perjalanan — bisa dibagikan." },
    ],
    benefits: [
      { title: "Personal", text: "Rekomendasi AI yang disesuaikan dengan minat, budget, dan nilai keberlanjutan pengguna." },
      { title: "Lokal", text: "UMKM, pemandu desa, dan pengalaman budaya autentik diintegrasikan langsung ke dalam itinerary." },
      { title: "Merata", text: "Mendistribusikan arus wisatawan ke destinasi yang kurang terekspos untuk menyeimbangkan beban dan manfaat." },
      { title: "Terukur", text: "Impact Tracker menghitung dan melaporkan jejak ekologi serta kontribusi ekonomi lokal setiap perjalanan." },
    ],
    stakeholders: [
      { n: "01", title: "Conscious Traveler", text: "Wisatawan individu yang mencari pengalaman bermakna dan berkelanjutan." },
      { n: "02", title: "UMKM & Pemandu Lokal", text: "Penyedia produk, jasa, dan pengalaman budaya lokal." },
      { n: "03", title: "Pemerintah Daerah", text: "Dinas pariwisata yang ingin mendistribusikan dan mengukur dampak wisata." },
      { n: "04", title: "Institusi & Enterprise", text: "Platform travel dan lembaga yang membutuhkan data eco-travel." },
    ],
    statusNote: "AstraLoka adalah proposal bisnis yang meraih Juara 2 di kompetisi BMC UNDIP 2026. Semua fitur, angka pasar, dan proyeksi keuangan berasal dari presentasi kompetisi — belum ada produk yang diluncurkan atau pendapatan yang diperoleh.",
    sdgs: ["SDG 8: Decent Work & Economic Growth", "SDG 9: Industry, Innovation & Infrastructure", "SDG 11: Sustainable Cities & Communities", "SDG 12: Responsible Consumption & Production", "SDG 13: Climate Action"],
  },

  features: [
    {
      id: "itinerary",
      n: "01",
      name: "Smart Itinerary AI",
      summary: "Rute perjalanan personal berbasis AI.",
      detail: "Algoritma rekomendasi menyesuaikan itinerary dengan minat pengguna, waktu, budget, dan preferensi keberlanjutan. Prioritas diberikan pada destinasi lokal yang kurang terekspos untuk mendistribusikan arus wisatawan lebih merata.",
    },
    {
      id: "concierge",
      n: "02",
      name: "Cultural Concierge",
      summary: "Panduan budaya dan etika lokal.",
      detail: "Informasi kontekstual tentang tradisi, etika kunjungan, dan sejarah destinasi yang membantu wisatawan berinteraksi dengan komunitas lokal secara bermakna dan saling menghormati.",
    },
    {
      id: "map",
      n: "03",
      name: "Cultural Map",
      summary: "Peta interaktif destinasi budaya dan desa wisata.",
      detail: "Visualisasi geografis seluruh 6.016 desa wisata dan destinasi budaya Indonesia, dengan filter berdasarkan kategori, aksesibilitas, dan dampak ekonomi lokal.",
    },
    {
      id: "marketplace",
      n: "04",
      name: "Local Marketplace UMKM",
      summary: "Marketplace produk dan jasa UMKM lokal.",
      detail: "Platform terintegrasi untuk memesan produk lokal, pengalaman budaya, pemandu wisata desa, dan akomodasi komunitas — langsung dari itinerary pengguna tanpa keluar dari aplikasi.",
    },
    {
      id: "ecoquest",
      n: "05",
      name: "Eco-Quest",
      summary: "Tantangan perjalanan ramah lingkungan.",
      detail: "Sistem gamifikasi yang mendorong wisatawan memilih aktivitas berkelanjutan: menggunakan transportasi rendah emisi, belanja dari UMKM lokal, mengikuti program bersih pantai atau tanam pohon.",
    },
    {
      id: "impact",
      n: "06",
      name: "Impact Tracker",
      summary: "Laporan dampak ekologi dan ekonomi lokal per perjalanan.",
      detail: "Setiap perjalanan menghasilkan laporan yang menghitung jejak karbon, jumlah UMKM yang didukung, dan kontribusi ekonomi langsung ke komunitas lokal — bisa dibagikan ke media sosial.",
    },
  ],

  screens: [
    { id: "home", label: "Home", caption: "Halaman utama dengan kategori dan rekomendasi personal.", src: `${base}/mockups/app-screens.png`, width: 5462, height: 1924 },
  ],

  business: {
    segments: [
      "Conscious Traveler (B2C) — wisatawan yang mencari pengalaman bermakna",
      "UMKM & Pemandu Lokal (B2B) — penyedia pengalaman budaya dan produk lokal",
      "Pemerintah Daerah (B2G) — distribusi dan pengukuran dampak wisata",
      "Institusi & Enterprise (B2B) — data dan API eco-travel",
    ],
    valueProps: [
      "Smart Itinerary AI yang personal dan berkelanjutan",
      "Marketplace terintegrasi untuk UMKM dan pengalaman lokal",
      "Impact Tracker untuk mengukur jejak ekologi setiap perjalanan",
      "Cultural Map seluruh 6.016 desa wisata Indonesia",
    ],
    partners: [
      "Kemenparekraf, Dinas Pariwisata Daerah, BPDPKS",
      "Penyedia cloud & AI, GIS mapping, payment gateway",
      "Maskapai, hotel butik, operator tur lokal, UMKM binaan",
      "Komunitas konservasi, asosiasi pemandu wisata, organisasi SDGs",
    ],
    revenue: [
      { name: "Core Transactions", text: "Komisi transaksi pemesanan produk UMKM, pengalaman, dan akomodasi lokal (49,2%)." },
      { name: "Recurring Digital", text: "Langganan AstraLoka Premium dengan fitur itinerary lanjutan dan laporan dampak (12,8%)." },
      { name: "Institutional", text: "Lisensi API data pariwisata untuk pemda dan kemitraan enterprise (38,0%)." },
    ],
    projection: [
      { label: "Investasi Awal", value: "Rp2,80 M" },
      { label: "NPV (5 tahun)", value: "Rp5,65 M" },
      { label: "IRR", value: "43,8%" },
    ],
    projectionNote: "Seluruh angka keuangan adalah proyeksi bisnis lima tahun dari presentasi kompetisi. Bukan kinerja keuangan yang sudah terjadi. Revenue stream adalah usulan, bukan pendapatan yang sudah diperoleh.",
    deep: [
      { title: "Customer Segments", items: ["Conscious Traveler (B2C)", "UMKM & Pemandu Lokal (B2B)", "Pemerintah Daerah (B2G)", "Institusi & Enterprise (B2B)"] },
      { title: "Revenue Streams", items: ["Core Transactions — Marketplace & Booking (49,2%)", "Recurring Digital — Subscription & Premium (12,8%)", "Institutional — B2G API & Enterprise (38,0%)"] },
      { title: "Key Activities", items: ["Pengembangan AI & platform", "Onboarding UMKM & desa wisata", "Kemitraan pemerintah daerah", "Content curation & community"] },
      { title: "Key Resources", items: ["AI recommendation engine", "Cultural Map database (6.016 desa)", "UMKM & local partner network", "Impact measurement framework"] },
      { title: "Cost Structure", items: ["Pengembangan teknologi & cloud", "Marketing & user acquisition", "Partner onboarding & support", "Operasional & team"] },
      { title: "Market Sizing", items: ["TAM: Rp2.359T (pariwisata domestik)", "SAM: Rp188,7T (wisatawan digital)", "SOM Y5: Rp54M (target penetrasi)"] },
    ],
    market: [
      { label: "TAM", value: "Rp2.359T", text: "total pasar pariwisata domestik Indonesia" },
      { label: "SAM", value: "Rp188,7T", text: "pasar wisatawan digital berkesadaran tinggi" },
      { label: "SOM (Y5)", value: "Rp54M", text: "target penetrasi 5 tahun pertama" },
    ],
  },

  team: {
    name: "Jembatan Bellingham x Halland",
    photo: { src: "/undip/1787847613472.jpg", width: 1600, height: 900 },
    photoCaption: "Tim Jembatan Bellingham x Halland di BMC Diponegoro Economics Project 2026.",
    members: [
      { name: "Tristan Khayru Abiyudha", role: "CEO" },
      { name: "Rizky Sandi Pratama", role: "CFO" },
      { name: "Harbima Razan Adhitya", role: "CTO" },
    ],
  },

  award: {
    slug: "undip-bmc-2026",
    title: "AN AWARD-WINNING PROPOSAL.",
    subtitle: "2nd Place — BMC, Diponegoro Economics Project 2026.",
    result: "Juara 2 — Business Model Canvas",
    event: "Diponegoro Economics Project 2026",
    organizer: "Diponegoro Economics Student Community (DESC) – Universitas Diponegoro",
    dates: "21–23 Agustus 2026",
    recipient: "Rizky Sandi Pratama",
    certificate: { src: "/undip/1787847559338.jpg", width: 1200, height: 900 },
    announcement: { src: "/undip/1787847613511.jpg", width: 1200, height: 900 },
  },
};
