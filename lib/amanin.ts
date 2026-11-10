// AMANIN case-study content.
// Sources: "AMANIN (3).pdf" (team presentation), "BMC AMANIN FIX.pdf" (Business Model Canvas), the live demo at
// https://mobile-webpage-amanin.vercel.app/ and its public page source.
// Statistics are third-party background figures quoted from the presentation. Financial values are a five-year
// business projection, not realised results. Personas are design personas, not real customers.

const base = "/projects/amanin";

export type Availability = "prototype" | "planned";

export interface Shot {
  id: string;
  label: string;
  caption: string;
  src: string;
  width: number;
  height: number;
}

export interface AmaninFeature {
  id: string;
  n: string;
  name: string;
  availability: Availability;
  summary: string;
  detail: string;
  note: string;
  shotId?: string;
}

export interface Persona {
  id: string;
  name: string;
  role: string;
  meta: string;
  quote: string;
  goals: string[];
  barriers: string[];
  needs: string[];
  image: string;
  color: string;
}

const live = (id: string, label: string, caption: string): Shot => ({
  id, label, caption, src: `${base}/live/${id}.webp`, width: 780, height: 1688,
});

const pres = (id: string, label: string, caption: string, width: number, height: number): Shot => ({
  id, label, caption, src: `${base}/screenshots/presentation-${id}.webp`, width, height,
});

export const amanin = {
  name: "AMANIN",
  slug: "amanin",
  archiveId: "RSP-005",
  category: "AI / Cybersecurity",
  year: "2026",
  teamName: "Halte Terminal Rawamangun",
  tagline: "Cek dulu sebelum percaya, klik, atau bayar.",
  heroLine: ["CEK DULU.", "BARU PERCAYA."],
  subtitle: "AI-Assisted Scam Risk Detection & Digital Safety.",
  cover: "AI Anti-Scam Decision Assistant",
  fullConcept:
    "Dari Penipuan menuju Perlindungan: AMANIN sebagai AI Decision Assistant untuk Deteksi Risiko, Verifikasi, dan Edukasi Keamanan Digital.",
  liveUrl: "https://mobile-webpage-amanin.vercel.app/",
  colors: {
    tapeBlack: "#101621",
    navy: "#102C52",
    blue: "#1578FF",
    cyan: "#38D5F3",
    green: "#3AE0B0",
    amber: "#F7B955",
    red: "#F16F79",
    paper: "#F1E5D0",
  },
  assets: {
    shield: { src: `${base}/branding/amanin-logo-shield.png`, width: 298, height: 255 },
    wordmark: { src: `${base}/branding/amanin-wordmark.png`, width: 229, height: 36 },
    overview: { src: `${base}/documentation/presentation-feature-overview.webp`, width: 2332, height: 1005 },
    bmc: { src: `${base}/business/amanin-business-model-canvas.webp`, width: 2600, height: 1921 },
    team: { src: `${base}/team/team-strip.webp`, width: 534, height: 251 },
  },

  threat: {
    intro:
      "Penipuan digital jarang terlihat seperti penipuan. Ia datang sebagai pesan kurir, hadiah, verifikasi akun, atau QR pembayaran, dan menuntut keputusan saat itu juga.",
    exhibits: [
      {
        id: "A",
        value: "668.441",
        short: "668 rb",
        label: "laporan scam diterima IASC hingga Agustus 2026",
        detail: "Dengan 1,27 juta rekening terverifikasi dilaporkan.",
        source: "OJK / IASC (2026), dikutip dari presentasi proyek",
      },
      {
        id: "B",
        value: "66",
        short: "66%",
        label: "orang dewasa Indonesia pernah terpapar scam",
        detail: "Pembanding dalam studi yang sama: ASEAN 63%, global 57%.",
        source: "GASA Indonesia Chapter (2025), dikutip dari presentasi proyek",
      },
      {
        id: "C",
        value: "14,05",
        short: "14,05 poin",
        label: "selisih antara inklusi keuangan dan literasi keuangan",
        detail: "Literasi keuangan 66,46% berbanding inklusi keuangan 80,51%.",
        source: "SNLIK OJK (2025), dikutip dari presentasi proyek",
      },
    ],
    note:
      "Angka di atas adalah data latar belakang pihak ketiga yang dikutip dari presentasi AMANIN. Bukan hasil kinerja AMANIN.",
    problems: [
      { n: "01", title: "Pesan dan tautan phishing", text: "Pengguna menerima chat dan tautan mencurigakan yang meniru bank, kurir, atau layanan resmi." },
      { n: "02", title: "QR dan instruksi bayar palsu", text: "QR tempelan dan petunjuk pembayaran yang dimanipulasi dapat mengarahkan uang ke tujuan yang salah." },
      { n: "03", title: "Tidak tahu cara memeriksa", text: "Banyak orang tidak tahu bagaimana memverifikasi pesan, tautan, atau tujuan pembayaran yang meragukan." },
      { n: "04", title: "Edukasi jauh dari momen keputusan", text: "Panduan keamanan biasanya dibaca terpisah, bukan pada saat pengguna harus memutuskan klik atau bayar." },
      { n: "05", title: "Penanganan yang reaktif", text: "Respons terhadap penipuan sering datang setelah kerugian terjadi, bukan sebelum pengguna bertindak." },
    ],
  },

  idea: {
    statement: "PREVENT BEFORE ACTION.",
    text:
      "Alih-alih menunggu korban melapor, AMANIN mencoba hadir tepat di antara menerima dan bertindak. Pengguna cukup mengikuti empat langkah.",
    steps: [
      { id: "receive", n: "01", label: "RECEIVE", title: "Terima konten mencurigakan", text: "Chat, tautan, screenshot, atau QR yang membuat ragu: pesan kurir, hadiah, verifikasi akun, atau permintaan bayar.", shotId: "landing" },
      { id: "share", n: "02", label: "SHARE", title: "Bagikan ke AMANIN", text: "Tempel teks, unggah screenshot, atau pindai QR. Di prototipe, pemrosesan berjalan di perangkat pengguna menurut keterangan aplikasinya sendiri.", shotId: "chat-check" },
      { id: "check", n: "03", label: "CHECK", title: "Periksa indikator risiko", text: "Konten diperiksa terhadap pola yang sering muncul pada penipuan: permintaan OTP, tekanan waktu, iming-iming hadiah, tautan pemendek.", shotId: "risk-score" },
      { id: "decide", n: "04", label: "DECIDE", title: "Putuskan dengan informasi", text: "Pengguna membaca skor, alasan, dan rekomendasi. Keputusan akhir tetap milik pengguna.", shotId: "recommendation" },
    ],
  },

  solution: {
    capabilities: [
      { title: "Pemeriksaan konten mencurigakan", text: "Chat, tautan, screenshot, dan QR dalam satu tempat." },
      { title: "Indikator risiko", text: "Menunjukkan pola yang ditemukan, bukan hanya angka." },
      { title: "Penjelasan kontekstual", text: "Setiap hasil disertai alasan dalam bahasa sederhana." },
      { title: "Saran tindakan aman", text: "Misalnya jangan lanjutkan dulu, verifikasi lewat kanal resmi, atau lanjutkan dengan hati-hati." },
      { title: "Edukasi keamanan digital", text: "Panduan modus penipuan yang umum, dekat dengan momen pemeriksaan." },
    ],
    reality: {
      prototype: [
        "Pemeriksaan chat, screenshot, tautan, nomor/rekening, pembayaran, dan QR lewat halaman Cek Risiko.",
        "Skor risiko 0–100 dengan daftar indikator dan rekomendasi tindakan.",
        "OCR untuk screenshot memakai Tesseract.js dan pembacaan QR memakai jsQR, keduanya di browser.",
        "Pemeriksaan berbasis pola lokal. Aplikasi menyatakan sendiri bahwa hasilnya adalah indikasi awal dan bukan jaminan keamanan.",
        "Riwayat dan sesi tamu disimpan di penyimpanan browser pengguna.",
      ],
      proposed: [
        "Analisis multimodal berbasis AI dengan Scam Intelligence Database.",
        "WhatsApp Assistant dan fitur Share to AMANIN.",
        "Pelaporan dan intelijen scam berbasis komunitas.",
        "Integrasi institusi: bank, fintech, marketplace, telco, kampus.",
      ],
      verifiedNote:
        "Dari pemeriksaan source halaman live: tidak ditemukan panggilan ke layanan AI atau server backend. Karena itu prototipe ini tidak diklaim sebagai model AI yang teruji, dan tidak ada angka akurasi yang dilaporkan.",
    },
  },

  features: [
    {
      id: "chat",
      n: "01",
      name: "Chat Scam Check",
      availability: "prototype",
      summary: "Periksa teks chat yang mencurigakan.",
      detail:
        "Pengguna menempel pesan, misalnya hadiah palsu, verifikasi akun, atau permintaan pembayaran, lalu menerima skor, indikator, dan saran tindakan.",
      note: "Contoh pada layar adalah pesan contoh bawaan aplikasi, bukan pesan nyata. Hasilnya berbasis pola.",
      shotId: "chat-check",
    },
    {
      id: "qr",
      n: "02",
      name: "QR Scam Check",
      availability: "prototype",
      summary: "Baca QR dan periksa tujuan tautannya.",
      detail:
        "Pengguna mengunggah atau memotret QR. AMANIN membaca tautan di dalamnya lalu menunjukkan indikator, misalnya tidak memakai HTTPS atau domain yang meniru layanan akun.",
      note: "Yang diperiksa adalah pola pada tautan hasil bacaan. AMANIN tidak mengklaim dapat memverifikasi setiap QR atau tujuan pembayaran secara independen.",
      shotId: "qr-check",
    },
    {
      id: "screenshot",
      n: "03",
      name: "Screenshot Scanner",
      availability: "prototype",
      summary: "Periksa tangkapan layar chat atau bukti bayar.",
      detail:
        "Pengguna mengunggah screenshot. Menurut keterangan aplikasi, OCR membaca teks lalu memeriksa tautan dan pola pesan mencurigakan.",
      note: "Halaman dan alurnya tersedia di prototipe. Proses OCR tidak saya jalankan dengan gambar pengguna selama pengujian.",
      shotId: "screenshot-scanner",
    },
    {
      id: "score",
      n: "04",
      name: "Scam Risk Score",
      availability: "prototype",
      summary: "Skor 0–100, alasan, dan langkah lanjutan.",
      detail:
        "Hasil ditampilkan sebagai skor risiko dengan penanda tingkat, ringkasan, dan daftar indikator yang menjelaskan mengapa konten dianggap berisiko.",
      note: "Skor adalah alat bantu keputusan, bukan sertifikasi keamanan. Aplikasi menampilkan label \"Skor berbasis pola, bukan jaminan keamanan\".",
      shotId: "risk-score",
    },
    {
      id: "recommendation",
      n: "05",
      name: "Smart Recommendation",
      availability: "prototype",
      summary: "Hindari, verifikasi ulang, atau lanjut dengan hati-hati.",
      detail:
        "Setelah indikator, pengguna mendapat saran tindakan yang konkret, misalnya tidak mengklik tautan, tidak mengirim uang, dan tidak membagikan OTP atau PIN.",
      note: "Rekomendasi bersifat saran umum. Keputusan akhir tetap di tangan pengguna.",
      shotId: "recommendation",
    },
    {
      id: "education",
      n: "06",
      name: "Cyber Education",
      availability: "prototype",
      summary: "Panduan modus penipuan yang umum.",
      detail:
        "Halaman Radar Scam & Siber memuat panduan tentang phishing, fraud pembayaran, file APK dari chat, keamanan akun, dan kanal pelaporan resmi.",
      note: "Konten berupa panduan edukasi umum, bukan laporan statistik real-time. Aplikasi menyatakan hal yang sama.",
      shotId: "cyber-news",
    },
    {
      id: "whatsapp",
      n: "07",
      name: "WhatsApp Assistant",
      availability: "planned",
      summary: "Asisten pemeriksaan lewat WhatsApp.",
      detail:
        "Presentasi dan BMC mengusulkan asisten WhatsApp dan fitur Share to AMANIN agar pengguna dapat memeriksa tanpa mengubah kebiasaan.",
      note: "Direncanakan. Tidak ditemukan di aplikasi live maupun source-nya. Hanya WhatsApp sebagai sumber chat yang disebut.",
    },
    {
      id: "community",
      n: "08",
      name: "Community Scam Reporting",
      availability: "planned",
      summary: "Pelaporan dan intelijen scam dari komunitas.",
      detail:
        "BMC mengusulkan wadah komunitas untuk berbagi informasi dan memperkuat basis pengetahuan penipuan.",
      note: "Kapabilitas ekosistem yang diusulkan. Belum ada di prototipe.",
    },
  ] as AmaninFeature[],

  liveShots: [
    live("landing", "Landing Page", "Halaman muka prototipe dengan ajakan pemeriksaan cepat tanpa login."),
    live("chat-check", "Chat Scam Check", "Input teks chat dengan contoh pesan bawaan aplikasi."),
    live("risk-score", "Scam Risk Score", "Skor 92/100 untuk pesan contoh, berlabel indikasi berbasis pola."),
    live("recommendation", "Smart Recommendation", "Indikator pemeriksaan dan saran \"Jangan lanjutkan dulu\"."),
    live("qr-check", "QR Scam Check", "Hasil pembacaan QR contoh dengan indikator tautan."),
    live("screenshot-scanner", "Screenshot Scanner", "Unggah screenshot chat atau bukti transfer untuk diperiksa."),
    live("dashboard", "Dashboard", "Beranda sesi tamu dengan kategori pemeriksaan dan riwayat."),
    live("cyber-news", "Cyber News", "Radar Scam & Siber: panduan modus dan kanal pelaporan."),
  ] as Shot[],

  presShots: [
    pres("landing", "Landing Page", "Mockup halaman muka dari presentasi.", 681, 1467),
    pres("qr-check", "QR Scam Check", "Mockup pemeriksaan QR dari presentasi.", 681, 1476),
    pres("chat-check", "Chat Scam Check", "Mockup pemeriksaan chat dari presentasi.", 681, 1467),
    pres("recommendation", "Smart Recommendation", "Mockup skor dan rekomendasi dari presentasi.", 681, 1462),
    pres("cyber-news", "Cyber News", "Mockup radar scam dan siber dari presentasi.", 679, 1549),
  ] as Shot[],

  experience: [
    { n: "01", title: "Terima konten mencurigakan", text: "Pesan kurir, hadiah, atau permintaan verifikasi masuk dan terasa janggal.", shotId: "landing" },
    { n: "02", title: "Buka AMANIN", text: "Mulai dari halaman muka. Pemeriksaan cepat tersedia tanpa login.", shotId: "dashboard" },
    { n: "03", title: "Pilih metode pemeriksaan", text: "Chat, screenshot, tautan, nomor/rekening, pembayaran, atau QR.", shotId: "chat-check" },
    { n: "04", title: "Baca indikator risiko", text: "Skor 0–100 dan daftar alasan mengapa konten dianggap berisiko.", shotId: "risk-score" },
    { n: "05", title: "Baca rekomendasi", text: "Saran tindakan konkret: jangan klik, jangan kirim uang, jangan bagikan OTP atau PIN.", shotId: "recommendation" },
    { n: "06", title: "Putuskan: hindari, verifikasi, atau lanjut hati-hati", text: "Pengguna memutuskan. Untuk kasus keuangan, kanal pelaporan resmi dijelaskan di halaman edukasi.", shotId: "cyber-news" },
  ],

  personas: [
    {
      id: "raka",
      name: "Raka",
      role: "Mahasiswa",
      meta: "21 tahun · Pengguna aktif · Melek teknologi",
      quote: "Saya ingin memastikan pembayaran dan link yang saya terima aman, supaya terhindar dari penipuan.",
      goals: ["Memverifikasi link, rekening, dan penawaran sebelum bertransaksi", "Menjaga keamanan data pribadi", "Terhindar dari penipuan online"],
      barriers: ["Sulit membedakan link atau pesan resmi dan palsu", "Banyak modus penipuan yang semakin beragam", "Kurang yakin apakah transaksi yang diterima aman atau tidak"],
      needs: ["Cek Link & QR Berisiko", "Scan Risk Score", "Verifikasi Rekening", "Edukasi Keamanan"],
      image: `${base}/team/persona-raka.webp`,
      color: "#F16F79",
    },
    {
      id: "nadia",
      name: "Nadia",
      role: "Karyawan",
      meta: "25 tahun · Pekerja kantoran · Aktif digital",
      quote: "Saya ingin semua transaksi digital saya aman, baik pembayaran, link, maupun rekening, agar tidak tertipu.",
      goals: ["Memastikan setiap transaksi online aman", "Melindungi data pribadi dan rekening", "Menghindari penipuan digital"],
      barriers: ["Sering menerima link, email, atau chat mencurigakan", "Sulit memastikan keaslian penawaran", "Takut kehilangan uang akibat penipuan"],
      needs: ["Verifikasi Rekening", "Cek Link & QR Berisiko", "Scan Risk Score", "Analisis Invoice & Bukti Transfer"],
      image: `${base}/team/persona-nadia.webp`,
      color: "#1578FF",
    },
    {
      id: "dimas",
      name: "Dimas",
      role: "Pemilik Toko Online",
      meta: "30 tahun · Pebisnis online · Aktif teknologi",
      quote: "Saya ingin memastikan setiap pembayaran dari pelanggan aman dan terhindar dari transfer palsu atau penipuan.",
      goals: ["Memverifikasi pembayaran dari pelanggan", "Mengecek keaslian rekening, link, dan bukti transfer", "Melindungi usaha dari penipuan online"],
      barriers: ["Sering menerima bukti transfer palsu", "Sulit membedakan pelanggan asli atau penipu", "Banyak chat/DM mencurigakan berisi link atau request data"],
      needs: ["Verifikasi Bukti Transfer", "Cek Link & QR Berisiko", "Tracking Rekening", "Scan Risk Score"],
      image: `${base}/team/persona-dimas.webp`,
      color: "#3AE0B0",
    },
  ] as Persona[],
  personaNote:
    "Persona adalah representasi desain dari presentasi proyek, bukan pelanggan nyata. Kebutuhan yang tidak ada di prototipe (misalnya verifikasi rekening mendalam dan analisis invoice) adalah fitur usulan.",

  business: {
    segments: ["Pengguna digital individu", "Mahasiswa", "Keluarga", "UMKM", "Institusi keuangan dan digital"],
    valueProps: [
      "Panduan pencegahan penipuan sebelum bertindak",
      "Pemeriksaan scam yang mudah diakses",
      "Edukasi keamanan yang kontekstual",
      "Dukungan keamanan digital untuk berbagai kelompok pengguna",
    ],
    partners: [
      { title: "Financial & digital ecosystem", items: "Bank & fintech, marketplace & e-commerce, penyedia telekomunikasi" },
      { title: "Technology & data", items: "Penyedia cloud & AI, keamanan siber, data & verifikasi" },
      { title: "Government & community", items: "Regulator & pemerintah, universitas, komunitas literasi digital" },
    ],
    partnersNote: "Kategori mitra pada BMC adalah rencana, bukan kemitraan yang sudah berjalan.",
    revenue: [
      { name: "Premium Family Subscription", share: 53.2, value: "Rp13,49 M" },
      { name: "B2B Scam Intelligence API", share: 18.9, value: "Rp4,80 M" },
      { name: "Enterprise Dashboard", share: 17.0, value: "Rp4,32 M" },
      { name: "White-label & Integration", share: 5.5, value: "Rp1,40 M" },
      { name: "Cyber Safety Program", share: 5.4, value: "Rp1,36 M" },
    ],
    projection: [
      { label: "Kebutuhan dana awal", value: "Rp1,50 miliar" },
      { label: "NPV 5 tahun (proyeksi)", value: "±Rp3,39 miliar" },
      { label: "IRR (proyeksi)", value: "41%" },
      { label: "Payback (proyeksi)", value: "3,47 tahun" },
    ],
    projectionNote:
      "Seluruh angka keuangan adalah proyeksi bisnis lima tahun dari presentasi, bukan kinerja keuangan yang sudah terjadi. Revenue stream adalah usulan, bukan pendapatan yang sudah diperoleh.",
    years: [
      { year: "2026", revenue: 0.9338, net: -0.8158 },
      { year: "2027", revenue: 2.07, net: -0.1402 },
      { year: "2028", revenue: 3.89, net: 0.8654 },
      { year: "2029", revenue: 7.05, net: 2.78 },
      { year: "2030", revenue: 11.43, net: 5.57 },
    ],
    market: [
      { label: "TAM", value: "235 juta", text: "pengguna internet di Indonesia" },
      { label: "SAM", value: "65,77 juta", text: "pengguna QRIS di Indonesia" },
      { label: "SOM", value: "657,7 ribu", text: "target 1% dari SAM dalam tiga tahun" },
    ],
  },

  team: {
    name: "Halte Terminal Rawamangun",
    members: [
      { name: "Rizky Sandi Pratama", role: "CEO" },
      { name: "Vassell Enha Atthayya", role: "CFO" },
      { name: "Evan Octavianus Haryo Handoko", role: "CTO" },
    ],
    note: "Foto dan peran diambil dari BMC dan presentasi tim. Kontribusi teknis per anggota tidak dirinci di sini.",
  },

  future: {
    implemented: [
      "Prototipe web yang dapat dicoba untuk pemeriksaan chat, tautan, screenshot, dan QR",
      "Skor risiko 0–100 dengan indikator dan rekomendasi",
      "Halaman edukasi Radar Scam & Siber",
    ],
    proposed: [
      "Intelijen scam yang lebih luas",
      "Analisis AI yang lebih baik",
      "Integrasi WhatsApp",
      "Kemitraan institusi",
      "Pelaporan komunitas",
      "Edukasi keamanan digital",
    ],
    note: "Tidak ada akurasi deteksi atau hasil pencegahan nyata yang diukur atau dilaporkan di sini.",
  },
};
