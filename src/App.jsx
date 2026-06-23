import React, { useState, useEffect } from 'react';

// Inline SVGs for elegant iconography
const IconWater = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22a7 7 0 0 0 7-7c0-4.3-7-11-7-11S5 10.7 5 15a7 7 0 0 0 7 7z"/>
  </svg>
);

const IconSettings = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.1a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>
);

const IconInfo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <line x1="12" y1="16" x2="12" y2="12"/>
    <line x1="12" y1="8" x2="12.01" y2="8"/>
  </svg>
);

const IconBook = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
  </svg>
);

const IconScale = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="3" x2="12" y2="21"/>
    <line x1="2" y1="7" x2="22" y2="7"/>
    <path d="M5 7c0 4 3 6 7 6s7-2 7-6"/>
    <path d="M22 7c0 4-3 6-7 6"/>
  </svg>
);

// Isometric 3D SVG Shape Illustrations
const IsometricBox = () => (
  <svg viewBox="0 0 100 100" width="70" height="70" className="isometric-svg">
    <polygon points="50,15 85,32 50,50 15,32" fill="#06b6d4" opacity="0.85" stroke="#22d3ee" strokeWidth="2.5" strokeLinejoin="round"/>
    <polygon points="15,32 50,50 50,85 15,67" fill="#0e7490" opacity="0.9" stroke="#0891b2" strokeWidth="2.5" strokeLinejoin="round"/>
    <polygon points="50,50 85,32 85,67 50,85" fill="#0891b2" opacity="0.95" stroke="#0e7490" strokeWidth="2.5" strokeLinejoin="round"/>
  </svg>
);

const IsometricCylinder = () => (
  <svg viewBox="0 0 100 100" width="70" height="70" className="isometric-svg">
    <path d="M20,30 V70 C20,80 80,80 80,70 V30 Z" fill="url(#cyl-grad)" stroke="#14b8a6" strokeWidth="2.5" strokeLinejoin="round"/>
    <ellipse cx="50" cy="30" rx="30" ry="10" fill="#2dd4bf" stroke="#14b8a6" strokeWidth="2.5"/>
    <defs>
      <linearGradient id="cyl-grad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#0f766e" />
        <stop offset="50%" stopColor="#115e59" />
        <stop offset="100%" stopColor="#134e4a" />
      </linearGradient>
    </defs>
  </svg>
);



function App() {
  const [type, setType] = useState('persegi'); // 'persegi' | 'silinder'
  const [standard, setStandard] = useState(216); // 216 L vs 270 L
  
  // Inputs state (updates start empty for a challenge)
  const [inputs, setInputs] = useState({
    panjang: '',
    lebar: '',
    tinggi: '',
    tinggiAir: '',
    diameter: ''
  });

  // Active state (starts at 0 on first load)
  const [activeDimensions, setActiveDimensions] = useState({
    type: 'persegi',
    panjang: 0,
    lebar: 0,
    tinggi: 0,
    tinggiAir: 0,
    diameter: 0
  });

  // Calculate volumes based on active dimensions
  const calculateVolume = (isMax = false) => {
    const h = isMax ? activeDimensions.tinggi : activeDimensions.tinggiAir;
    if (activeDimensions.type === 'persegi') {
      const vol = (activeDimensions.panjang * activeDimensions.lebar * h) / 1000;
      return parseFloat(vol.toFixed(1));
    } else {
      const radius = activeDimensions.diameter / 2;
      const vol = (Math.PI * Math.pow(radius, 2) * h) / 1000;
      return parseFloat(vol.toFixed(1));
    }
  };

  const currentVolume = calculateVolume(false);
  const maxVolume = calculateVolume(true);
  
  // Percentage of water in the tank
  const waterPercent = Math.min(100, Math.max(0, Math.round((activeDimensions.tinggiAir / activeDimensions.tinggi) * 100)));

  // Determine status
  let status = 'belum-dihitung'; // 'belum-dihitung', 'sah', 'riskan', 'tidak-sah'
  if (activeDimensions.tinggi > 0) {
    if (currentVolume >= standard) {
      status = 'sah';
    } else if (maxVolume >= standard) {
      status = 'riskan';
    } else {
      status = 'tidak-sah';
    }
  }

  // Handle shape change and reset inputs to empty
  const handleShapeChange = (selectedShape) => {
    setType(selectedShape);
    setInputs({
      panjang: '',
      lebar: '',
      tinggi: '',
      tinggiAir: '',
      diameter: ''
    });
  };

  // Handle input changes (instantly updates inputs state)
  const handleInputChange = (field, value) => {
    // Keep empty strings as empty strings for input typing comfort, otherwise parse float
    const cleanValue = value === '' ? '' : Math.max(0, parseFloat(value) || 0);
    
    setInputs(prev => {
      const newDims = { ...prev, [field]: cleanValue };
      
      // Validation: air height cannot exceed tank height
      if (field === 'tinggi' && prev.tinggiAir > cleanValue && cleanValue !== '') {
        newDims.tinggiAir = cleanValue;
      }
      if (field === 'tinggiAir' && cleanValue > prev.tinggi && prev.tinggi !== '') {
        newDims.tinggi = cleanValue;
      }
      
      return newDims;
    });
  };

  // Click handler to build/calculate
  const handleBuildContainer = (e) => {
    if (e) e.preventDefault();
    
    // Parse values to number, fallback to 0 if blank
    const parsedPanjang = parseFloat(inputs.panjang) || 0;
    const parsedLebar = parseFloat(inputs.lebar) || 0;
    const parsedTinggi = parseFloat(inputs.tinggi) || 0;
    const parsedTinggiAir = parseFloat(inputs.tinggiAir) || 0;
    const parsedDiameter = parseFloat(inputs.diameter) || 0;

    setActiveDimensions({
      type: type,
      panjang: parsedPanjang,
      lebar: parsedLebar,
      tinggi: parsedTinggi,
      tinggiAir: parsedTinggiAir,
      diameter: parsedDiameter
    });
  };

  // Check if current inputs are different from the active built container
  const isDirty = 
    type !== activeDimensions.type ||
    (parseFloat(inputs.tinggi) || 0) !== activeDimensions.tinggi ||
    (parseFloat(inputs.tinggiAir) || 0) !== activeDimensions.tinggiAir ||
    (type === 'persegi' && ((parseFloat(inputs.panjang) || 0) !== activeDimensions.panjang || (parseFloat(inputs.lebar) || 0) !== activeDimensions.lebar)) ||
    (type === 'silinder' && ((parseFloat(inputs.diameter) || 0) !== activeDimensions.diameter));

  return (
    <div className="app-container">
      {/* Header */}
      <header className="header">
        <div className="header-badge">Fikih Air Wudu • Karya Yudan Maulana</div>
        <h1>Kalkulator Air 2 Kulah</h1>
        <p>
          Atur bentuk dan ukuran wadah Anda di bawah, klik <b>Bikin Wadah</b>, dan lihat volume airnya secara langsung beserta ukuran tersemat.
        </p>
      </header>

      {/* Main content grid */}
      <main className="simplified-layout">
        
        {/* Danger Alert Banner if volume is less than standard (Only when built) */}
        {activeDimensions.tinggi > 0 && currentVolume < standard && (
          <div className="danger-alert-banner">
            <div className="danger-alert-icon">⚠️</div>
            <div className="danger-alert-content">
              <strong>PERINGATAN: Air Kurang dari 2 Kulah ({currentVolume} L / {standard} L)</strong>
              <p>
                Tinggi air saat ini hanya <b>{activeDimensions.tinggiAir} cm</b>. Volume air <b>kurang dari 2 Kulah</b>, sehingga air ini sangat rentan menjadi najis (mutanajjis) jika kemasukan kotoran sekecil apa pun. <b>DILARANG berwudu langsung dari dalam wadah ini jika air telah bercampur najis</b>.
              </p>
              {maxVolume < standard && (
                <div className="danger-alert-tip">
                  *Wadah terlalu kecil untuk menampung air 2 Kulah. Agar wudu sah dan terhindar dari air musta'mal/najis, alirkan air keluar wadah (misal dengan keran) atau tuangkan air, jangan mencelupkan anggota tubuh langsung ke dalam wadah ini.
                </div>
              )}
            </div>
          </div>
        )}

        {/* SECTION 1: UNIFIED VISUALIZER & STATUS CARD (TOP) */}
        <div className="panel visual-status-panel">
          
          {/* Visual Tank Container with Dimension Label lines */}
          <div className="visualizer-side">
            <div className="visualizer-header">
              <IconWater />
              <h3>Visual Wadah & Ukuran</h3>
            </div>
            
            <div className="schematic-container">
              {/* Width / Diameter Label Line (Top) */}
              <div className="dim-line-h">
                {activeDimensions.type === 'persegi' 
                  ? `P: ${activeDimensions.panjang} cm` 
                  : `D: ${activeDimensions.diameter} cm`}
              </div>

              {/* Total Height Label Line (Left) */}
              <div className="dim-line-v">
                T: {activeDimensions.tinggi} cm
              </div>

              {/* Visual themed tank container based on active built container */}
              <div className={`tank-view ${activeDimensions.type} ${activeDimensions.type === 'persegi' ? 'tank-custom-box' : 'tank-custom-cylinder'}`}>
                {/* Water layer */}
                <div 
                  className="water-body"
                  style={{ height: `${waterPercent}%` }}
                />
              </div>

              {/* Water Height Label Line (Right) */}
              <div className="dim-line-water">
                Air: {activeDimensions.tinggiAir} cm
              </div>

              {/* Depth Label Line (Bottom - For rectangular only) */}
              {activeDimensions.type === 'persegi' && (
                <div className="dim-line-d">
                  L: {activeDimensions.lebar} cm
                </div>
              )}
            </div>

            <div className="liters-display">
              <div className="liters-number">{currentVolume} L</div>
              <div className="liters-label">Air Saat Ini / Maksimal {maxVolume}L</div>
            </div>
          </div>

          {/* Status info details */}
          <div className="status-side">
            <div className={`status-badge-compact ${status}`}>
              {status === 'sah' && '✅ SAH (Air Cukup)'}
              {status === 'riskan' && '⚠️ RISKAN (Air Kurang)'}
              {status === 'tidak-sah' && '❌ TIDAK SAH (Wadah Kecil)'}
            </div>
            
            <div className="status-text-details">
              <h4>Hukum Fiqih Bersuci:</h4>
              <p>
                {status === 'sah' && (
                  `Volume air Anda (${currentVolume}L) sudah mencapai batas minimal 2 Kulah (${standard}L). Air ini suci mensucikan. Wudu di dalam wadah ini tetap sah dan air tidak bisa menjadi najis kecuali jika berubah bau, rasa, atau warna.`
                )}
                {status === 'riskan' && (
                  `Kapasitas wadah mencukupi (${maxVolume}L), namun pengisian air saat ini (${currentVolume}L) masih kurang dari batas ${standard}L. Silakan sesuaikan tinggi pengisian air wadah Anda agar volume airnya mencukupi.`
                )}
                {status === 'tidak-sah' && (
                  `Volume maksimal wadah ini hanya ${maxVolume}L, kurang dari batas 2 Kulah (${standard}L). Wudu tetap sah asalkan air tidak terkena najis/bekas bersuci. Sangat disarankan berwudu menggunakan aliran keran/kucuran agar terhindar dari najis.`
                )}
              </p>
            </div>
            
            <div className="quick-stats">
              <div className="stat-item">
                <span className="stat-label">Bentuk Fisik:</span>
                <span className="stat-val" style={{ textTransform: 'capitalize' }}>{activeDimensions.type === 'persegi' ? 'Balok / Persegi Panjang' : 'Silinder / Tabung'}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Batas 2 Kulah:</span>
                <span className="stat-val">{standard} Liter</span>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 2: CONTROLS & CONFIGURATION (MIDDLE) */}
        <div className="panel">
          <div className="panel-title">
            <IconSettings />
            <h2>Kontrol & Pengaturan Wadah</h2>
          </div>

          {/* STEP 1: SHAPE SELECTOR WITH 3D ISOMETRIC CARDS */}
          <div style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: '0.75rem', fontWeight: 600 }}>
              1. Pilih Bentuk Wadah:
            </h3>
            <div className="shape-select-container">
              <button
                type="button"
                className={`shape-card ${type === 'persegi' ? 'active' : ''}`}
                onClick={() => handleShapeChange('persegi')}
              >
                <div className="shape-icon-wrapper">
                  <IsometricBox />
                </div>
                <div className="shape-info">
                  <span className="shape-title">Balok / Persegi Panjang</span>
                  <span className="shape-desc">Bak mandi panjang, kolam persegi panjang, bak beton</span>
                </div>
              </button>

              <button
                type="button"
                className={`shape-card ${type === 'silinder' ? 'active' : ''}`}
                onClick={() => handleShapeChange('silinder')}
              >
                <div className="shape-icon-wrapper">
                  <IsometricCylinder />
                </div>
                <div className="shape-info">
                  <span className="shape-title">Silinder / Tabung</span>
                  <span className="shape-desc">Drum air, toren air, ember besar</span>
                </div>
              </button>
            </div>
          </div>

          {/* STEP 2: DIMENSIONS INPUTS (DIRECTLY SHOWN) */}
          <form onSubmit={handleBuildContainer} className="calculator-form">
            <h3 style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: '0.25rem', fontWeight: 600 }}>
              2. Masukkan Ukuran Wadah (cm):
            </h3>

            {type === 'persegi' ? (
              <div className="form-group-row">
                <div className="form-group">
                  <label htmlFor="panjang">Panjang (cm)</label>
                  <div className="input-container">
                    <input
                      id="panjang"
                      type="number"
                      value={inputs.panjang}
                      onChange={(e) => handleInputChange('panjang', e.target.value)}
                    />
                    <span className="suffix">cm</span>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="lebar">Lebar (cm)</label>
                  <div className="input-container">
                    <input
                      id="lebar"
                      type="number"
                      value={inputs.lebar}
                      onChange={(e) => handleInputChange('lebar', e.target.value)}
                    />
                    <span className="suffix">cm</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="form-group" style={{ maxWidth: '280px' }}>
                <label htmlFor="diameter">Diameter Wadah (cm)</label>
                <div className="input-container">
                  <input
                    id="diameter"
                    type="number"
                    value={inputs.diameter}
                    onChange={(e) => handleInputChange('diameter', e.target.value)}
                  />
                  <span className="suffix">cm</span>
                </div>
              </div>
            )}

            <div className="form-group-row">
              <div className="form-group">
                <label htmlFor="tinggi">Tinggi Total Wadah (cm)</label>
                <div className="input-container">
                  <input
                    id="tinggi"
                    type="number"
                    value={inputs.tinggi}
                    onChange={(e) => handleInputChange('tinggi', e.target.value)}
                  />
                  <span className="suffix">cm</span>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="tinggiAir">Tinggi Pengisian Air (cm)</label>
                <div className="input-container">
                  <input
                    id="tinggiAir"
                    type="number"
                    max={inputs.tinggi}
                    value={inputs.tinggiAir}
                    onChange={(e) => handleInputChange('tinggiAir', e.target.value)}
                  />
                  <span className="suffix">cm</span>
                </div>
              </div>
            </div>

            {/* STEP 3: WATER LEVEL SLIDER */}
            <div className="form-group input-with-slider">
              <label htmlFor="water-slider-direct" style={{ fontWeight: 600 }}>
                3. Sesuaikan Tinggi Air Wadah:
                <span className="unit" style={{ fontWeight: 'bold' }}>{inputs.tinggiAir} cm ({Math.round((inputs.tinggiAir / inputs.tinggi) * 100) || 0}% Terisi)</span>
              </label>
              <input
                id="water-slider-direct"
                type="range"
                min="0"
                max={inputs.tinggi}
                value={inputs.tinggiAir}
                onChange={(e) => handleInputChange('tinggiAir', e.target.value)}
              />
            </div>

            {/* STEP 4: STANDARD ULAMA */}
            <div>
              <h3 style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: '0.5rem', fontWeight: 600 }}>
                4. Batas Volume 2 Kulah:
              </h3>
              <div className="standard-switcher">
                <button
                  type="button"
                  className={`standard-btn ${standard === 216 ? 'active' : ''}`}
                  onClick={() => setStandard(216)}
                >
                  216 Liter (Syafi'i)
                </button>
                <button
                  type="button"
                  className={`standard-btn ${standard === 270 ? 'active' : ''}`}
                  onClick={() => setStandard(270)}
                >
                  270 Liter (Ikhtiyat)
                </button>
              </div>
            </div>

            {/* ACTION SUBMIT BUTTON: BIKIN WADAH */}
            <div style={{ marginTop: '0.5rem' }}>
              <button 
                type="submit" 
                className={`build-btn ${isDirty ? 'pulse-glow' : ''}`}
              >
                🛠️ BIKIN WADAH & HITUNG VOLUME
              </button>
              {isDirty && (
                <span className="dirty-indicator">
                  *Terdapat perubahan ukuran yang belum diterapkan. Klik tombol di atas untuk menggambar wadah!
                </span>
              )}
            </div>

          </form>
        </div>

        {/* SECTION 3: EDUCATIONAL NOTES (BOTTOM) */}
        <div className="panel edu-grid">
          <div>
            <div className="panel-title">
              <IconBook />
              <h2>Panduan Fikih & Air 2 Kulah</h2>
            </div>
            
            <div className="faq-list">
              <div className="faq-item">
                <div className="faq-q">
                  <span>❓</span> Mengapa Batas 2 Kulah Sangat Penting?
                </div>
                <div className="faq-a">
                  Dalam fiqih Mazhab Syafi'i, batas volume air 2 Kulah membagi hukum air menjadi dua ketegori penting jika terkena najis:
                  <ul style={{ marginLeft: '1.25rem', marginTop: '0.5rem' }}>
                    <li><strong>Kurang dari 2 Kulah:</strong> Air langsung menjadi najis (Mutanajjis) seketika jika kejatuhan najis, meskipun bau, rasa, dan warna air tidak berubah.</li>
                    <li><strong>Mencapai 2 Kulah atau lebih:</strong> Air tidak menjadi najis kecuali jika najis tersebut mengubah salah satu dari tiga sifat air (warna, bau, atau rasa).</li>
                  </ul>
                </div>
              </div>

              <div className="faq-item">
                <div className="faq-q">
                  <span>❓</span> Bagaimana Hukum Air Bekas Bersuci (Musta'mal)?
                </div>
                <div className="faq-a">
                  Air bekas wudu/mandi wajib yang kurang dari 2 Kulah disebut <em>air musta'mal</em>. Air ini suci namun tidak bisa digunakan lagi untuk bersuci. Tetapi, jika air musta'mal dikumpulkan di satu wadah besar hingga mencapai volume 2 Kulah, maka air tersebut secara otomatis menjadi <strong>Suci Mensucikan kembali</strong>.
                </div>
              </div>
            </div>
          </div>

          <div className="ref-card">
            <div className="panel-title">
              <IconScale />
              <h2>Dasar & Referensi Hitungan</h2>
            </div>

            <div className="ref-item">
              <div className="ref-num">1</div>
              <div className="ref-text">
                <strong>Hadits Rasulullah SAW</strong>
                "Jika air telah mencapai dua kulah, maka ia tidak mengandung kotoran/najis." (HR. Abu Dawud, Tirmidzi, Nasai, Ibnu Majah).
              </div>
            </div>

            <div className="ref-item">
              <div className="ref-num">2</div>
              <div className="ref-text">
                <strong>Mazhab Syafi'i (216 Liter)</strong>
                Dihitung dari kubus berukuran 1.25 hasta x 1.25 hasta. Karena 1 hasta adalah sekitar 48 cm, maka wadah berukuran 60 cm x 60 cm x 60 cm = 216.000 cm³ (216 Liter). Ini adalah pendapat resmi yang banyak dianut di Asia Tenggara.
              </div>
            </div>

            <div className="ref-item">
              <div className="ref-num">3</div>
              <div className="ref-text">
                <strong>Standar Kehati-hatian (270 Liter)</strong>
                Sebagian ulama kontemporer seperti Syekh Wahbah al-Zuhaili menaksir berat 500 Baghdad Ratl setara dengan 270 Liter air untuk menjamin kehati-hatian (*ikhtiyat*).
              </div>
            </div>

            <div className="info-note">
              <IconInfo />
              <div>
                <strong>Tips Wudu:</strong> Jika wadah Anda kurang dari 2 Kulah (misalnya ember cor), Anda tetap bisa berwudu sah dengan cara mengambil air menggunakan gayung atau mengalirkan keran tanpa mencelupkan tangan secara langsung yang dapat membuat air musta'mal.
              </div>
            </div>
          </div>
        </div>

      </main>

      <footer>
        <p>
          Dibuat oleh <strong>Yudan Maulana</strong> sebagai referensi edukasi bersuci sesuai Fiqih Islam. Aplikasi ini berjalan sepenuhnya di perangkat lokal Anda.
        </p>
      </footer>
    </div>
  );
}

export default App;
