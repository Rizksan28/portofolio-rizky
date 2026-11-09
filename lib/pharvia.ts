// PHARVIA case-study content.
// Sources: PHARVIA_Project_Brief_Rizky_Sandi_Pratama.pdf, the team pitch deck, and the Business Model Canvas.
// Statistics are research figures cited by those documents. Financial values are pitch-deck projections,
// not operational results. Prototype data and flows in the demo are sample/simulated.

const base = "/projects/pharvia";

export type FeatureStatus = "prototype" | "partial" | "concept";

export interface Screen {
  id: string;
  label: string;
  caption: string;
  src: string;
  width: number;
  height: number;
}

export interface Feature {
  id: string;
  n: string;
  name: string;
  status: FeatureStatus;
  summary: string;
  detail: string;
  note: string;
  screenId?: string;
  liveId?: string;
}

export const pharvia = {
  name: "PHARVIA",
  slug: "pharvia",
  archiveId: "RSP-001",
  category: "Digital Innovation",
  year: "2026",
  subtitle: "Digital Pharmaceutical Take-Back & Traceability Platform",
  tagline: "Turning Pharmaceutical Waste into a Sustainable Ecosystem.",
  fullConcept:
    "Dari Limbah Farmasi menuju Ekosistem Berkelanjutan: PHARVIA sebagai Digital Ecosystem untuk Pengembalian, Verifikasi, dan Pengelolaan Obat Tidak Terpakai.",
  quote: "Kembalikan obat dengan aman, bukan sekadar dibuang.",
  summary:
    "Dari obat tidak terpakai menuju pengembalian yang lebih aman, mudah, terlacak, dan berkelanjutan.",
  liveUrl: "https://pharvia.vercel.app/",
  deckUrl: `${base}/documentation/PHARVIA_Pitch_Deck_Halte_Terminal_Corruscant.pdf`,
  heroImage: { src: `${base}/hero/mobile-showcase.webp`, width: 1291, height: 1700 },
  overviewImage: { src: `${base}/hero/app-overview.webp`, width: 2400, height: 888 },
  colors: { navy: "#0B3A5C", teal: "#2BD4B4", green: "#6EDC7C", blue: "#1B7FD4" },

  story: [
    "Obat sisa dan kedaluwarsa jarang punya tujuan yang jelas. Di banyak rumah tangga, jalan keluarnya hanya satu: tempat sampah.",
    "Pharvia menjawabnya dengan satu pengalaman digital yang menyatukan edukasi, pemindaian obat, titik pengembalian, insentif, dan pelacakan, sehingga mengembalikan obat terasa semudah membuangnya.",
    "Proyek ini dirancang dengan pendekatan B2B2C dan dikembangkan oleh tim Halte Terminal Corruscant. Gagasan bisnisnya diuji dalam kompetisi Business Model Canvas, dan alurnya dapat dicoba lewat prototipe web.",
  ],

  problem: {
    core: "Pembuangan obat bersama sampah rumah tangga berpotensi menimbulkan pencemaran, penyalahgunaan, dan hilangnya jejak pengelolaan pascakonsumsi.",
    stats: [
      { value: "86,7", unit: "%", label: "membuang obat sisa melalui sampah rumah tangga", lit: 17 },
      { value: "~1,6", unit: "%", label: "menggunakan jalur pengembalian resmi", lit: 1 },
      { value: "64,9", unit: "%", label: "apoteker bersedia menerima obat tidak terpakai", lit: 13 },
    ],
    sourceNote:
      "Angka latar belakang dikutip dari materi riset pada presentasi dan BMC Pharvia. Ini adalah data riset yang dirujuk proyek, bukan hasil yang telah dicapai Pharvia.",
    risks: [
      { id: "01", title: "Lingkungan", text: "Residu obat dapat masuk ke tanah dan air sehingga meningkatkan risiko ekologis." },
      { id: "02", title: "Kesehatan", text: "Penyimpanan dan pembuangan yang tidak aman meningkatkan risiko keracunan dan penyalahgunaan." },
      { id: "03", title: "Traceability", text: "Minimnya kanal return membuat status obat pascakonsumsi sulit dilacak." },
    ],
    opportunity:
      "Peluangnya: satukan edukasi, pemindaian obat, titik return, insentif, dan pelacakan dalam satu pengalaman digital.",
  },

  solution: {
    intro:
      "Pharvia dirancang sebagai platform pengembalian dan pelacakan obat yang menghubungkan masyarakat, apotek, perusahaan farmasi, dan pengelola limbah berizin.",
    steps: [
      { n: "01", title: "Scan obat", text: "Pindai kemasan, lihat informasi dan panduan pengembalian." },
      { n: "02", title: "Cari titik", text: "Temukan apotek atau collection point terdekat." },
      { n: "03", title: "Daftar setoran", text: "Catat obat yang akan dikembalikan sebelum diserahkan." },
      { n: "04", title: "Pantau & poin", text: "Lihat status setoran dan kumpulkan EcoPoint." },
    ],
    benefits: [
      { title: "Return lebih mudah", text: "Alur digital sederhana untuk menemukan titik dan mengembalikan obat." },
      { title: "Traceability lebih baik", text: "Konsep pelacakan dari pengumpulan hingga pengelolaan akhir." },
      { title: "Pemangku kepentingan terhubung", text: "Masyarakat, apotek, mitra farmasi, dan pengelola berizin dalam satu ekosistem." },
      { title: "Dampak yang terukur", text: "Pelaporan keberlanjutan sebagai kapabilitas ekosistem yang direncanakan." },
    ],
    stakeholders: [
      { n: "01", title: "Masyarakat", text: "Memindai dan mendaftarkan obat untuk return." },
      { n: "02", title: "Apotek / Faskes", text: "Menjadi titik pengembalian dan memverifikasi setoran." },
      { n: "03", title: "Mitra Farmasi", text: "Mendukung program take-back dan pelaporan dampak." },
      { n: "04", title: "Pengelola Berizin", text: "Menangani pengangkutan dan pengelolaan akhir." },
    ],
    statusNote:
      "Yang ada di prototipe: Scan, Cari Titik, daftar setoran, EcoPoints, serta ringkasan aktivitas dan dampak untuk pengguna, dengan data dan alur contoh/simulasi. Smart Pickup, pelacakan perjalanan limbah bersama mitra, dan pelaporan dampak untuk mitra masih konsep ekosistem.",
  },

  features: [
    {
      id: "scan",
      n: "01",
      name: "Pharvia Scan",
      status: "prototype",
      summary: "Pindai obat, lihat informasi dan panduan pengembalian.",
      detail:
        "Pengguna mengarahkan kamera ke kemasan obat untuk melihat nama, kedaluwarsa, bentuk dan jumlah, serta panduan pengembalian. Layar ini juga menyediakan mode barcode dan input manual.",
      note: "Data obat pada demo adalah contoh. Fitur ini tidak memberi diagnosis atau saran klinis.",
      screenId: "scan",
    },
    {
      id: "point",
      n: "02",
      name: "Pharvia Point",
      status: "prototype",
      summary: "Temukan lokasi apotek atau collection point.",
      detail:
        "Peta menampilkan titik pengumpulan terdekat beserta jarak, jam buka, dan kapasitas kotak setoran, dengan filter semua titik, apotek mitra, dan drop-box.",
      note: "Lokasi pada demo adalah contoh/simulasi, bukan daftar mitra operasional yang telah diverifikasi.",
      screenId: "map",
      liveId: "map",
    },
    {
      id: "drop",
      n: "03",
      name: "Smart Drop",
      status: "prototype",
      summary: "Pendaftaran setoran dan verifikasi return berbasis QR.",
      detail:
        "Pengguna menyusun daftar obat yang akan dikembalikan, melihat ringkasan setoran, lalu menyerahkannya di titik pengembalian. Verifikasi berbasis QR menjadi bagian dari konsep alur.",
      note: "Alur setoran pada demo bersifat simulasi. Verifikasi QR dengan mitra nyata belum diklaim operasional.",
      screenId: "returns",
      liveId: "setoran",
    },
    {
      id: "ecopoint",
      n: "04",
      name: "EcoPoint",
      status: "prototype",
      summary: "Insentif untuk mendorong perilaku return berulang.",
      detail:
        "Konsep poin yang diperoleh setelah pengembalian obat, lengkap dengan level pengguna, ringkasan dampak, dan katalog reward.",
      note: "Poin dan reward pada demo adalah contoh. Reward belum dapat ditukarkan secara nyata.",
      screenId: "ecopoint",
      liveId: "ecopoints",
    },
    {
      id: "pickup",
      n: "05",
      name: "Smart Pickup",
      status: "concept",
      summary: "Konsep penjadwalan pengambilan bagi mitra.",
      detail:
        "Usulan alur koordinasi antara collection point dan pengelola limbah berizin untuk menjadwalkan pengambilan dan merapikan logistik.",
      note: "Kapabilitas ekosistem yang diusulkan. Belum ada di demo dan belum ada kemitraan logistik yang diklaim.",
    },
    {
      id: "trace",
      n: "06",
      name: "Pharvia Trace & Impact",
      status: "partial",
      summary: "Pelacakan proses dan ringkasan dampak pengelolaan.",
      detail:
        "Di prototipe, tab Aktivitas menampilkan ringkasan bulanan setoran, status verifikasi, dan poin yang diperoleh. Pelacakan perjalanan limbah bersama mitra dan pelaporan dampak untuk mitra tetap berupa konsep.",
      note: "Ringkasan aktivitas pada demo memakai data contoh. Traceability end-to-end dengan mitra dan pelaporan dampak masih konsep dan proyeksi. Belum ada data dampak nyata yang dilaporkan.",
      liveId: "aktivitas",
    },
  ] as Feature[],

  screens: [
    { id: "splash", label: "Splash Screen", caption: "Layar pembuka dengan identitas Pharvia.", src: `${base}/screenshots/splash.webp`, width: 700, height: 1474 },
    { id: "home", label: "Home Dashboard", caption: "Beranda dengan akses cepat dan setoran aktif.", src: `${base}/screenshots/home.webp`, width: 700, height: 1474 },
    { id: "scan", label: "Medicine Scanner", caption: "Pemindai obat dengan informasi kedaluwarsa dan panduan return.", src: `${base}/screenshots/scan.webp`, width: 700, height: 1474 },
    { id: "map", label: "Collection Point Map", caption: "Peta titik pengumpulan terdekat dan kapasitas kotak setoran.", src: `${base}/screenshots/map.webp`, width: 700, height: 1474 },
    { id: "returns", label: "Medicine Return List", caption: "Daftar setoran dengan ringkasan jenis dan jumlah obat.", src: `${base}/screenshots/returns.webp`, width: 700, height: 1474 },
    { id: "ecopoint", label: "EcoPoint", caption: "Poin, ringkasan dampak, dan katalog reward.", src: `${base}/screenshots/ecopoint.webp`, width: 328, height: 687 },
  ] as Screen[],

  liveScreens: [
    { id: "home", label: "Beranda", caption: "Beranda aplikasi live dengan akses cepat dan setoran aktif contoh.", src: `${base}/live/home.webp`, width: 780, height: 1688 },
    { id: "setoran", label: "Setoran Saya", caption: "Daftar setoran setelah satu contoh obat (Paracetamol 500 mg) ditambahkan lewat mode Manual.", src: `${base}/live/setoran.webp`, width: 780, height: 1688 },
    { id: "map", label: "Cari Titik", caption: "Peta titik pengumpulan contoh di Jakarta Selatan dengan kapasitas kotak setoran.", src: `${base}/live/map.webp`, width: 780, height: 1688 },
    { id: "ecopoints", label: "Eco-Points", caption: "Poin, ringkasan dampak, dan katalog reward pada data contoh.", src: `${base}/live/ecopoints.webp`, width: 780, height: 1688 },
    { id: "aktivitas", label: "Aktivitas & Riwayat", caption: "Ringkasan bulanan dan status verifikasi setoran pada data contoh.", src: `${base}/live/aktivitas.webp`, width: 780, height: 1688 },
  ] as Screen[],

  business: {
    segments: [
      "Pengguna obat dan rumah tangga",
      "Apotek dan fasilitas kesehatan",
      "Perusahaan farmasi",
    ],
    valueProps: [
      "Pengembalian obat yang aman, mudah diakses, dan memberi reward",
      "Konsep traceability dari konsumen hingga pengelolaan akhir",
      "Keterlibatan apotek dengan beban operasional rendah",
      "Nilai keberlanjutan yang terukur bagi perusahaan farmasi",
    ],
    partners: [
      "Jaringan apotek, rumah sakit, dan klinik",
      "Penyedia teknologi dan verifikasi data",
      "Pengelola limbah B3 berizin dan transportasi limbah medis",
      "Pemangku kepentingan farmasi",
    ],
    revenue: [
      { name: "Corporate Take-Back", text: "Program pengembalian obat bersama mitra farmasi." },
      { name: "ESG / Impact Dashboard", text: "Laporan ringkasan collection dan dampak." },
      { name: "Sponsored Campaign", text: "Kolaborasi kampanye edukasi dan sustainability." },
      { name: "White-label & Integrasi", text: "Adaptasi platform dan sistem bagi mitra." },
    ],
    deep: [
      {
        title: "Key Activities",
        items: [
          "Pengembangan platform & Pharvia Scan",
          "Manajemen Pharvia Point & jaringan apotek",
          "End-to-end traceability",
          "Smart Pickup & koordinasi mitra",
          "Edukasi, campaign & impact reporting",
        ],
      },
      {
        title: "Key Resources",
        items: ["Tim ahli dan pengembang", "Traceability database", "Media pemasaran", "Penyimpanan data", "Ahli farmasi & limbah", "Machine learning"],
      },
      {
        title: "Customer Relationships",
        items: ["Smart Return Assistance", "Personalized Return Reminder", "EcoPoint Loyalty Program", "Transparent Impact Tracking"],
      },
      {
        title: "Channels (5A)",
        items: ["Aware", "Appeal", "Ask", "Act", "Advocate"],
      },
      {
        title: "Cost Structure",
        items: [
          "Tetap: SDM & gaji, kantor/coworking, platform & pemeliharaan",
          "Variabel: biaya collection & pengolahan, insentif EcoPoint, drop box & material",
        ],
      },
    ],
    projection: [
      { label: "NPV", value: "Rp2,28 miliar" },
      { label: "IRR", value: "44,98%" },
      { label: "Payback", value: "3,20 tahun" },
    ],
    projectionNote: "Angka adalah proyeksi pitch deck untuk skenario 5 tahun, bukan pencapaian operasional aktual.",
    bmcImage: { src: `${base}/bmc/business-model-canvas.webp`, width: 2598, height: 1898 },
  },

  team: {
    name: "Halte Terminal Corruscant",
    photo: { src: `${base}/team/team-halte-terminal-corruscant.jpg`, width: 1600, height: 962 },
    photoCaption: "Tim Halte Terminal Corruscant dengan sertifikat USK Pharmacy Fair 2026.",
    members: [
      { name: "Rizky Sandi Pratama", role: "CEO" },
      { name: "Vassell Enha Atthayya", role: "CFO" },
      { name: "Evan Octavianus Haryo Handoko", role: "CTO" },
    ],
  },

  award: {
    slug: "usk-pharmacy-fair-2026",
    title: "AN AWARD-WINNING IDEA.",
    subtitle: "1st Place — Business Model Canvas, USK Pharmacy Fair 2026.",
    result: "Juara 1 Business Model Canvas",
    event: "USK Pharmacy Fair 2026",
    organizer: "Himpunan Mahasiswa Farmasi (HIMAFAR), FMIPA, Universitas Syiah Kuala",
    dates: "6–8 Oktober 2026",
    certificateNo: "101/UPF/HIMAFAR/2026",
    recipient: "Rizky Sandi Pratama",
    certificate: { src: `${base}/achievement/certificate-juara-1.webp`, width: 2000, height: 1414 },
    announcement: { src: `${base}/achievement/award-announcement.jpg`, width: 1600, height: 900 },
  },
};
