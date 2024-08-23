import React from 'react';
import './News.css';

const News: React.FC = () => {
    return (
        <section className="news-section">
            <h2>Berita & Acara</h2>
            <div className="news-grid">
                <div className="news-item">
                    <img src="/images/images2.jpg" alt="News 2" className="news-image" />
                    <h3>Robotika Mengikuti Lomba KRTI 2024</h3>
                    <p>Pada tanggal 13 Agustus 2024, kami mengikuti Kontes Robot Terbang Indonesia (KRTI), dengan kategori yang diikuti Racing Plane.</p>
                </div>
                <div className="news-item">
                    <img src="/images/finalis-iot.jpg" alt="News 1" className="news-image" />
                    <h3>Robotika UTY masuk finalis technocorner UGM</h3>
                    <p>Robotika UTY masuk finalis technocorner UGM, dengan membawa tim After Code, Robotika UTY memasukin 5 finalis besar kompetisi bergengsi tersebut.</p>
                </div>
                <div className="news-item">
                    <img src="/images/IMG-20240706-WA0011.jpg" alt="News 2" className="news-image" />
                    <h3>Dies Natalis Robotika UTY ke-13!</h3>
                    <p>Pada tanggal 29 Juni 2024, kami merayakan momen istimewa ini dengan kegiatan pengabdian ke Panti Asuhan LKSA Al Haq Madania,
                         Yogyakarta. Kami berbagi keceriaan dan kebahagiaan bersama adik-adik di sana. Terima kasih atas dukungan dan partisipasi semua pihak. Mari terus berkarya dan berbagi</p>
                </div>
                {/* Tambahkan lebih banyak berita atau acara sesuai kebutuhan */}
            </div>
        </section>
    );
};

export default News;
