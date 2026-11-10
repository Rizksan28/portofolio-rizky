// PasarAkar case-study content.
// Sources: NACOPS 2026 business-plan proposal, the team pitch deck ("PasarAkar OD.pdf"), the official NACOPS 7.0 certificates
// and the supplied award/team photographs. Market sizes and financials are business-plan assumptions and projections,
// not realised results. The app screens are Figma prototype designs (the deck's QR code resolves to a Figma prototype).

const base = "/projects/pasarakar";

export type PaStatus = "prototype" | "partial" | "concept";

export interface PaShot {
  id: string;
  label: string;
  caption: string;
  src: string;
  width: number;
  height: number;
}

export interface PaFeature {
  id: string;
  n: string;
  name: string;
  status: PaStatus;
  summary: string;
  detail: string;
  note: string;
  shotId?: string;
}

const shot = (id: string, label: string, caption: string, height: number): PaShot => ({
  id, label, caption, src: `${base}/screenshots/${id}.webp`, width: 700, height,
});

export const pasarakar = {
  name: "PASARAKAR",
  slug: "pasarakar",
  archiveId: "RSP-006",
  category: "Agritech / Digital Innovation",
  year: "2026",
  teamName: "KAMI AKAN MENANG",
  tagline: ["FROM THE ROOTS OF THE VILLAGE", "TO THE FUTURE OF AGRICULTURE."],
  description:
    "PasarAkar adalah konsep super-app agritech berbasis offline-first yang mengintegrasikan prediksi harga, penjualan panen kolektif, marketplace B2B, logistik, dan akses pembiayaan melalui ekosistem BUMDes serta koperasi desa.",
  fullConcept:
    "Dari Desa untuk Kedaulatan Pangan: PasarAkar sebagai Super-App Integrasi BUMDes & Katalis Transformasi Kesejahteraan Petani.",
  colors: { black: "#151319", forest: "#166534", deep: "#123D2C", earth: "#68442D", gold: "#D9A441", cream: "#F1E5D0" },
  hero: { src: `${base}/hero/mobile-showcase.webp`, width: 1348, height: 1456 },
  deckUrl: `${base}/documents/pasarakar-presentation-deck.pdf`,
  prototypeUrl: "https://www.figma.com/proto/WHloaEmqnIWGLLximK7SpS/Trio-durjana-menang-lomba?node-id=261-213&t=HcRzcMF8aYDXzDGj-1",

  story: [
    "Indonesia adalah negara agraris, tetapi petani desa sering menjadi pihak yang paling dirugikan dalam rantai pasok yang mereka gerakkan sendiri.",
    "Harga ditentukan tengkulak, informasi pasar sulit dijangkau, pembeli besar sulit ditemui, dan pembiayaan formal jarang tersedia. Solusi digital yang ada pun belum menjangkau desa-desa terpencil secara merata.",
    "PasarAkar mencoba menjawabnya dengan satu super-app yang tetap berfungsi tanpa internet, dan yang berjalan lewat lembaga yang sudah ada di desa: BUMDes dan Koperasi Desa. Tujuannya akses informasi, pasar, dan modal yang lebih setara bagi petani.",
  ],
  pillarsNote:
    "PasarAkar disusun sebagai konsep bisnis dan prototipe desain untuk NACOPS 7.0. Fokus awal yang diusulkan adalah petani cengkeh dan pala di Kabupaten Maluku Tengah sebagai wilayah percontohan.",

  problem: {
    items: [
      { n: "01", title: "Harga komoditas tidak transparan", text: "Petani jarang memiliki informasi harga yang akurat dan real-time, sehingga harga ditentukan pengepul." },
      { n: "02", title: "Ketergantungan pada perantara", text: "Komoditas mudah rusak memaksa petani menjual cepat, berapa pun harganya." },
      { n: "03", title: "Posisi tawar petani lemah", text: "Petani individual sulit bernegosiasi dengan pembeli atau tengkulak." },
      { n: "04", title: "Akses pembeli institusional terbatas", text: "Volume per petani kecil, sehingga sulit memenuhi minimum order pembeli besar." },
      { n: "05", title: "Keterbatasan konektivitas digital", text: "Pengguna internet masih terpusat di perkotaan, sementara petani sering belum memakai smartphone aktif." },
      { n: "06", title: "Sulit mengakses pembiayaan formal", text: "Minim riwayat dan agunan membuat petani kesulitan mengakses pinjaman resmi." },
    ],
    stats: [
      { id: "A", big: "Rp10.000 → Rp50.000", unit: "/kg", label: "rentang harga cabai antara panen raya dan produksi menurun", source: "Jurnal IICET (2023), dikutip dalam proposal NACOPS" },
      { id: "B", big: "69,5% : 30,5%", unit: "", label: "porsi pengguna internet perkotaan berbanding perdesaan", source: "APJII, dikutip dalam proposal NACOPS" },
      { id: "C", big: "±Rp300", unit: " triliun", label: "perkiraan nilai yang diraup rentenir dan tengkulak dari rantai pasok pangan desa", source: "Tempo.co (2025), dikutip dalam proposal NACOPS" },
    ],
    note:
      "Angka di atas adalah data riset pihak ketiga yang dikutip dalam proposal PasarAkar sebagai latar belakang masalah. Bukan hasil yang dicapai aplikasi.",
    opportunity:
      "Program Koperasi Desa Merah Putih (target 70–80 ribu koperasi) membuka peluang, tetapi infrastruktur digital untuk menggerakkannya belum tersedia.",
  },

  solution: {
    intro:
      "PasarAkar dirancang sebagai ekosistem agritech terpadu yang berjalan lewat BUMDes dan koperasi desa, bukan menggantikannya.",
    pillars: [
      { title: "Informasi harga transparan", text: "Prediksi harga komoditas 7, 14, dan 30 hari dengan sinyal sederhana." },
      { title: "Agregasi panen kolektif", text: "Petani menggabungkan stok menjadi satu penawaran yang memenuhi minimum order." },
      { title: "Marketplace B2B", text: "Akses ke pembeli terverifikasi dengan proteksi harga minimum." },
      { title: "Integrasi logistik desa", text: "Ojek desa, pickup, dan gudang BUMDes dalam satu alur pengiriman." },
      { title: "Konsep akses pembiayaan", text: "Pinjaman mikro lewat mitra resmi berbasis riwayat transaksi." },
      { title: "Inklusi digital offline-first", text: "Tetap berjalan tanpa koneksi dan terhubung lewat WhatsApp atau SMS." },
    ],
    flow: [
      { n: "01", label: "FARMER", text: "Petani mendaftarkan komoditas dan estimasi volume." },
      { n: "02", label: "PRICE INFO", text: "AgroPrice AI menampilkan prediksi harga: tahan atau jual." },
      { n: "03", label: "COLLECTIVE ORDER", text: "Stok petani satu klaster digabung menjadi satu penawaran." },
      { n: "04", label: "BUYER", text: "Penawaran dikirim ke pembeli terverifikasi untuk dinegosiasikan." },
      { n: "05", label: "LOGISTICS", text: "Pengiriman lewat jaringan transportasi dan gudang desa." },
      { n: "06", label: "RECORD", text: "Transaksi tercatat dan menjadi dasar riwayat bagi pembiayaan." },
    ],
    statusNote:
      "Yang ada: konsep bisnis lengkap dan prototipe desain antarmuka (Figma) untuk dashboard, harga, KolektifOrder, dan PasarKomoditas. Integrasi BUMDes, koperasi, pembeli, bank, dan logistik adalah rencana dan belum diklaim berjalan.",
  },

  features: [
    { id: "agroprice", n: "01", name: "AgroPrice AI", status: "prototype", summary: "Prediksi harga komoditas.", detail: "Sistem yang diusulkan memprediksi harga 7, 14, dan 30 hari ke depan memakai data BPS, cuaca, dan kalender panen, dengan petunjuk visual hijau untuk tahan dan merah untuk jual.", note: "Antarmuka prototipe tersedia. Model prediksi belum dibangun dan tidak ada angka akurasi yang dilaporkan.", shotId: "agroprice" },
    { id: "kolektif", n: "02", name: "KolektifOrder", status: "prototype", summary: "Gabungkan panen menjadi penawaran kolektif.", detail: "Petani satu desa atau klaster menggabungkan stok agar memenuhi minimum order pembeli besar, dengan kontribusi dan estimasi pendapatan yang transparan.", note: "Antarmuka prototipe dengan data contoh. Belum ada transaksi nyata.", shotId: "kolektiforder" },
    { id: "pasar", n: "03", name: "PasarKomoditas", status: "prototype", summary: "Marketplace B2B untuk petani dan pembeli.", detail: "Menampilkan permintaan pembeli terverifikasi, harga penawaran, volume, dan tenggat, serta tombol untuk menawarkan panen.", note: "Antarmuka prototipe dengan pembeli contoh. Belum ada kemitraan pembeli yang diklaim.", shotId: "pasarkomoditas" },
    { id: "logis", n: "04", name: "LogisDesa", status: "concept", summary: "Integrasi logistik desa.", detail: "Diusulkan menghubungkan ojek desa, truk pickup, dan gudang BUMDes ke sistem pengiriman yang dapat dilacak.", note: "Konsep dalam proposal. Belum ada layar prototipe untuk fitur ini." },
    { id: "kredit", n: "05", name: "AkarKredit", status: "partial", summary: "Akses pembiayaan lewat mitra resmi.", detail: "Diusulkan sebagai jembatan pinjaman mikro dari lembaga resmi berbasis riwayat transaksi. Pada prototipe, hanya ada kartu akses kredit dan menu di dashboard.", note: "Hanya titik masuk di dashboard. Layanan pembiayaan dan kemitraan lembaga keuangan adalah rencana.", shotId: "dashboard" },
    { id: "offline", n: "06", name: "Offline Mode", status: "partial", summary: "Offline-first dan sinkronisasi.", detail: "Konsep aplikasi yang menyimpan data lokal dan menyinkronkannya saat ada jaringan, dengan notifikasi lewat WhatsApp atau SMS. Dashboard prototipe menampilkan penanda mode offline dan waktu sinkronisasi.", note: "Baru berupa penanda antarmuka pada desain. Arsitektur PWA dan integrasi WhatsApp/SMS adalah rencana.", shotId: "dashboard" },
  ] as PaFeature[],

  shots: [
    shot("splash", "Splash Screen", "Layar pembuka dengan identitas PasarAkar dan slogan Dari Desa untuk Indonesia.", 1396),
    shot("dashboard", "Dashboard", "Beranda dengan harga hari ini, pesanan kolektif, status panen, dan menu utama.", 1396),
    shot("kolektiforder", "KolektifOrder", "Kelompok panen aktif dengan progres volume terkumpul dan tombol gabung order.", 1441),
    shot("pasarkomoditas", "PasarKomoditas", "Daftar pembeli terverifikasi dengan komoditas, kebutuhan, dan harga penawaran.", 1396),
    shot("agroprice", "AgroPrice AI", "Grafik harga dan rekomendasi AI untuk menahan atau menjual panen.", 1396),
  ] as PaShot[],

  business: {
    revenue: [
      { name: "Komisi transaksi KolektifOrder", text: "Usulan komisi sekitar 1,5–2,5% per transaksi." },
      { name: "Langganan BUMDes dan koperasi", text: "Biaya bulanan untuk dashboard manajemen." },
      { name: "Pendapatan layanan pembiayaan", text: "Melalui AkarKredit bersama mitra yang sesuai." },
      { name: "Iklan penyedia sarana tani", text: "Pupuk dan benih yang menjangkau petani secara tertarget." },
    ],
    market: [
      { label: "TAM", value: "33 juta", text: "pekerja sektor agrikultur di Indonesia" },
      { label: "SAM", value: "6,5 juta", text: "petani di Indonesia Timur dengan akses seluler dasar" },
      { label: "SOM", value: "25.000", text: "petani cengkeh dan pala di Maluku Tengah (pilot)" },
    ],
    marketNote: "Ukuran pasar adalah estimasi yang diusulkan dalam proposal, bukan data terverifikasi.",
    projection: [
      { label: "NPV 5 tahun (proyeksi)", value: "Rp5,65 miliar" },
      { label: "Payback (proyeksi)", value: "2,07 tahun" },
      { label: "Total pendanaan rencana", value: "Rp1,30 miliar" },
      { label: "IRR (proyeksi)", value: "38,7%" },
    ],
    projectionNote:
      "Seluruh angka adalah proyeksi rencana bisnis lima tahun dari proposal dan deck, bukan pendapatan atau hasil keuangan yang sudah terealisasi. Kelayakan bergantung pada asumsi pendapatan, aktivasi petani, kerja sama BUMDes/koperasi, dan pembeli jangkar.",
    years: [
      { year: "Thn 1", revenue: 0.37, net: -0.75 },
      { year: "Thn 2", revenue: 0.97, net: -0.28 },
      { year: "Thn 3", revenue: 1.63, net: 0.1602 },
      { year: "Thn 4", revenue: 2.4, net: 0.623 },
      { year: "Thn 5", revenue: 3.39, net: 1.2816 },
    ],
    funding: [
      { name: "Modal sendiri (equity)", value: "Rp277 jt", share: 22 },
      { name: "Hibah dan inkubasi pemerintah", value: "Rp300 jt", share: 24 },
      { name: "Impact investor / venture capital", value: "Rp600 jt", share: 48 },
      { name: "Kemitraan strategis (BUMDes/BUMN)", value: "Rp123 jt", share: 6 },
    ],
    costs: [
      ["Estimasi biaya awal", "Rp627 jt"],
      ["Biaya operasional / tahun", "Rp1,12 miliar"],
      ["Investasi tetap", "Rp330 jt"],
      ["Biaya pemasaran / tahun", "Rp320 jt"],
      ["Biaya SDM / tahun", "Rp720 jt"],
    ],
    contribution: {
      title: "MY CONTRIBUTION — FINANCIAL STRATEGY",
      role: "Chief Financial Officer (CFO)",
      items: [
        "Pemodelan kelayakan finansial",
        "Valuasi bisnis",
        "Struktur unit economics",
        "Perencanaan keuangan",
        "Analisis keuangan model bisnis",
      ],
      note: "Kontribusi sesuai deskripsi proyek yang saya berikan. Tidak ada deliverable lain yang diklaim di sini.",
    },
  },

  team: {
    name: "KAMI AKAN MENANG",
    photo: { src: `${base}/team/team-celebration.jpg`, width: 360, height: 480 },
    photoCaption: "Momen tim setelah penghargaan, dengan piala dan medali.",
    members: [
      { name: "Tristan Khayru Abiyudha", role: "CEO", full: "Chief Executive Officer" },
      { name: "Rizky Sandi Pratama", role: "CFO", full: "Chief Financial Officer" },
      { name: "Harbima Razan Adhitya", role: "CTO", full: "Chief Technology Officer" },
    ],
    note:
      "Peran mengikuti pembagian tanggung jawab proyek pada deck presentasi. Dokumen proposal yang diserahkan ke kompetisi mencatat Rizky Sandi Pratama sebagai ketua tim pada lembar pengesahan; dokumen itu tidak diubah.",
  },

  award: {
    slug: "nacops-7-2026",
    title: "AN IDEA ROOTED IN IMPACT.",
    title2: "RECOGNIZED FOR EXCELLENCE.",
    highlights: [
      { big: "1ST", label: "PLACE", sub: "Juara 1" },
      { big: "BEST", label: "PRESENTATION", sub: "Presentasi Terbaik" },
    ],
    event: "NACOPS 7.0 National Business Plan Competition 2026",
    organizer: "Pertemanan Sejiwa",
    date: "28 Juni 2026",
    theme: "Inovasi Bisnis Bertumpu pada Sumber Daya Daerah",
    certificateNo: "VI/PS/ESEPS/2026/9",
    recipient: "Rizky Sandi Pratama",
    photo: { src: `${base}/achievements/award-photo-trophy-medal-certificates.jpg`, width: 480, height: 270 },
    certJuara1: { src: `${base}/achievements/certificate-juara-1.jpg`, width: 807, height: 570 },
    certPresentasi: { src: `${base}/achievements/certificate-presentasi-terbaik.jpg`, width: 807, height: 570 },
    note: "Nama acara, penyelenggara, tanggal, dan nomor diambil dari sertifikat resmi yang tidak diubah.",
  },

  live: {
    title: "ROOTED IN THE VILLAGE.",
    title2: "BUILT FOR THE FUTURE.",
    text: "Belum ada aplikasi PasarAkar yang dirilis ke publik. Yang tersedia adalah dokumentasi presentasi dan prototipe desain Figma yang dirujuk lewat kode QR pada deck tim.",
  },
};
