// src/components/News.tsx
import React from 'react';
import './News.css';

const News: React.FC = () => {
    return (
        <section className="news-section">
            <h2>Berita & Acara</h2>
            <div className="news-grid">
                <div className="news-item">
                    <img src="/images/finalis-iot.jpg" alt="News 1" />
                    <h3>Robotika UTY masuk finalis technocorner UGM</h3>
                    <p>Robotika UTY masuk finalis technocorner UGM, dengan membawa tim After Code, Robotika UTY memasukin 5 finalis besar kompetisi bergensi tersebut.</p>
                </div>
                <div className="news-item">
                    <img src="/assets/news2.jpg" alt="News 2" />
                    <h3>Judul Berita 2</h3>
                    <p>Deskripsi singkat tentang berita atau acara yang terkait. Bisa mencakup informasi mengenai kegiatan terbaru atau pengumuman penting.</p>
                </div>
                {/* Tambahkan lebih banyak berita atau acara sesuai kebutuhan */}
            </div>
        </section>
    );
};

export default News;
