export const PRESETS = [
  {
    id: 'bak-fiber-120',
    name: 'Bak Mandi Fiber Standar (120L)',
    type: 'persegi',
    themeClass: 'tank-fiber',
    iconType: 'box',
    dimensions: {
      panjang: 50,
      lebar: 50,
      tinggi: 50,
      tinggiAir: 45
    },
    description: 'Bak mandi serat kaca (fiberglass) berbentuk kotak kecil yang banyak dijual di toko bangunan.'
  },
  {
    id: 'bak-beton-60',
    name: 'Bak Mandi Beton Standar (60cm)',
    type: 'persegi',
    themeClass: 'tank-concrete',
    iconType: 'box',
    dimensions: {
      panjang: 60,
      lebar: 60,
      tinggi: 60,
      tinggiAir: 60
    },
    description: 'Bak mandi semen/keramik permanen berukuran 60x60x60 cm. Pas dengan ukuran minimal 2 Kulah (216L) jika terisi penuh.'
  },
  {
    id: 'drum-biru-200',
    name: 'Drum Plastik Biru (200L)',
    type: 'silinder',
    themeClass: 'tank-drum',
    iconType: 'drum',
    dimensions: {
      diameter: 58,
      tinggi: 90,
      tinggiAir: 85
    },
    description: 'Drum penyimpanan air plastik biru yang sering digunakan untuk penampungan darurat.'
  },
  {
    id: 'toren-penguin-55',
    name: 'Toren Air Penguin TB 55 (520L)',
    type: 'silinder',
    themeClass: 'tank-toren',
    iconType: 'toren',
    dimensions: {
      diameter: 82,
      tinggi: 111,
      tinggiAir: 100
    },
    description: 'Tandon/toren air kapasitas besar merk Penguin TB 55. Sangat mencukupi batas 2 Kulah.'
  },
  {
    id: 'ember-cor-hitam',
    name: 'Ember Hitam Cor',
    type: 'silinder',
    themeClass: 'tank-ember',
    iconType: 'ember',
    dimensions: {
      diameter: 30,
      tinggi: 25,
      tinggiAir: 22
    },
    description: 'Ember plastik hitam kecil yang biasa digunakan pekerja bangunan atau di kamar mandi kecil.'
  },
  {
    id: 'custom-persegi',
    name: 'Wadah Kustom (Kotak/Persegi)',
    type: 'persegi',
    themeClass: 'tank-custom-box',
    iconType: 'custom-box',
    dimensions: {
      panjang: 50,
      lebar: 50,
      tinggi: 50,
      tinggiAir: 40
    },
    description: 'Masukkan ukuran wadah kotak Anda sendiri (panjang, lebar, tinggi).'
  },
  {
    id: 'custom-silinder',
    name: 'Wadah Kustom (Tabung/Silinder)',
    type: 'silinder',
    themeClass: 'tank-custom-cylinder',
    iconType: 'custom-cylinder',
    dimensions: {
      diameter: 50,
      tinggi: 70,
      tinggiAir: 50
    },
    description: 'Masukkan ukuran wadah silinder Anda sendiri (diameter, tinggi).'
  }
];
