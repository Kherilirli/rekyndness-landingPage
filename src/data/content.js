export const brands = [
  {
    id:        'pertywi',
    num:       '01',
    name:      'Pertywi',
    tagline:   'Pejuang Bumi',
    glyph:     'P',
    accent:    '#1B6B52',
    accentPale:'#E8F5F0',
    status:    'live',           // ← LIVE, sudah aktif dipakai user
    statusLabel: 'Aktif',
    desc:
      'Platform manajemen bank sampah digital. Nasabah bisa mencatat setoran, pengelola bisa memonitor data secara real-time. Sudah berjalan dan dipakai komunitas nyata.',
    tags:    ['Bank Sampah', 'Daur Ulang', 'Komunitas'],
    ctaLabel:'Mulai Setor Sampah',
    ctaHref: 'https://pertywi.rekyndness.id',
  },
  {
    id:        'revyva',
    num:       '02',
    name:      'Revyva',
    tagline:   'Thrift · Reborn',
    glyph:     'R',
    accent:    '#B85C38',
    accentPale:'#FDF0EA',
    status:    'coming',         // ← Dalam pengembangan, belum live ke publik
    statusLabel: 'Segera Hadir',
    desc:
      'Marketplace donasi mainan anak yang menghubungkan pemberi dan penerima. Modul baru sedang dikembangkan — segera hadir untuk komunitas.',
    tags:    ['Barang Bekas', 'Donasi', 'Mainan'],
    ctaLabel:'Daftar Waitlist',
    ctaHref: '#join',
  },
  {
    id:        'lumyna',
    num:       '03',
    name:      'Lumyna',
    tagline:   'Pintu Alam',
    glyph:     'L',
    accent:    '#7C5CBF',
    accentPale:'#F3EEFF',
    status:    'coming',         // ← Masih dev, fokus dashboard admin/mitra
    statusLabel: 'Untuk Mitra',
    desc:
      'Dashboard pengelolaan kegiatan sosial untuk mitra dan admin komunitas. Data kegiatan yang selama ini tersebar di Google Sheet kini terintegrasi dalam satu platform.',
    tags:    ['Dashboard', 'Data Kegiatan', 'Mitra'],
    ctaLabel:'Daftar sebagai Mitra',
    ctaHref: '#join',
  },
  {
    id:        'greenmynd',
    num:       '04',
    name:      'Greenmynd',
    tagline:   'Hijau · Aware',
    glyph:     'G',
    accent:    '#2E7D32',
    accentPale:'#EDF7ED',
    status:    'social',         // ← Aktif via sosmed / Instagram
    statusLabel: 'Di Instagram',
    desc:
      'Edukasi lingkungan hidup lewat konten sosial media. Komunitas yang dimulai dari satu akun Instagram kini menjadi gerakan kesadaran lingkungan bersama.',
    tags:    ['Edukasi', 'Lingkungan', 'Sosmed'],
    ctaLabel:'Ikuti di Instagram',
    ctaHref: 'https://instagram.com/rekyndness.green',
  },
]

// Stats real dari Pertywi dashboard
export const stats = [
  { num: '401',  label: 'Data sampah tercatat' },
  { num: '92',   label: 'Nasabah aktif' },
  { num: '4',    label: 'Sub-brand & program' },
]

export const features = [
  { icon: '♻️', title: 'Satu Akun, Semua Program',   desc: 'Login sekali, akses Pertywi, Revyva, Lumyna & Greenmynd.' },
  { icon: '🤝', title: 'Beragam Jenis Kebaikan',      desc: 'Donasi barang, setor sampah, belajar, atau bergabung sebagai mitra.' },
  { icon: '📊', title: 'Dampak Terukur',              desc: 'Pantau kontribusimu secara real-time — dari gram sampah hingga mainan terdonasi.' },
  { icon: '🌱', title: 'Komunitas & Aksi Nyata',      desc: 'Terhubung dengan komunitas lokal dan gerakan kebaikan di sekitarmu.' },
]

export const values = [
  {
    num:   '01',
    title: 'Ketulusan',
    text:  'Setiap gerakan kebaikan yang kami jalankan lahir dari hati, bukan dari sekadar angka. Niat yang tulus adalah fondasi dari segala yang kami kerjakan.',
  },
  {
    num:   '02',
    title: 'Keberlanjutan',
    text:  'Kami tidak sekedar membuat dampak sesaat. Kami membangun sistem kebaikan yang bisa terus berputar dan berkembang, tidak bergantung pada satu momentum.',
  },
  {
    num:   '03',
    title: 'Inklusivitas',
    text:  'Semua orang punya cara unik untuk berkontribusi. Rekyndness membuka pintu selebar-lebarnya — tidak ada yang terlalu kecil untuk membuat perubahan.',
  },
]

export const marqueeItems = [
  { icon: '♻️', label: 'Bank Sampah Digital' },
  { icon: '🧸', label: 'Donasi Mainan' },
  { icon: '🌿', label: 'Edukasi Lingkungan' },
  { icon: '🤝', label: 'Komunitas Kebaikan' },
  { icon: '📦', label: 'Barang Bekas Bermakna' },
  { icon: '💚', label: 'Dampak Nyata' },
  { icon: '🌱', label: 'Gerakan Bersama' },
]

export const subBrandColors = [
  { name: 'Pertywi',   color: '#1B6B52' },
  { name: 'Revyva',    color: '#B85C38' },
  { name: 'Lumyna',    color: '#7C5CBF' },
  { name: 'Greenmynd', color: '#2E7D32' },
]