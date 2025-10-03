import React from 'react';
const images = [
  { id: 1, src: '/images/1.jpg', alt: 'Sesi Pelatihan' },
  { id: 2, src: '/images/2.jpg', alt: 'Acara Peresmian' },
  { id: 3, src: '/images/3.png', alt: 'Workshop Internal Tim' },
  { id: 4, src: '/images/4.jpg', alt: 'Pameran Produk Teknologi' },
  { id: 5, src: '/images/5.jpg', alt: 'Foto Bersama Staf' },
];

const Galeri = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Galeri Kegiatan Kami</h2>
      <hr />
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
        gap: '20px' 
      }}>
        {images.map((img) => (
          <div key={img.id} style={{ 
            border: '1px solid #ddd', 
            borderRadius: '5px', 
            overflow: 'hidden', 
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)' 
          }}>
            <img 
              src={img.src} 
              alt={img.alt} 
              style={{ width: '100%', height: '200px', objectFit: 'cover' }} 
              onError={(e) => { e.target.onerror = null; e.target.src = "https://via.placeholder.com/280x200?text=Gambar+Tidak+Ditemukan" }}
            />
            <p style={{ textAlign: 'center', margin: '10px 0', fontWeight: 'bold' }}>{img.alt}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Galeri;