// src/components/About.tsx
import React from 'react';
import './About.css';

const About: React.FC = () => {
    return (
        <section className="about-section">
            <h2>About Us</h2>
            <div className='about-content'>
            <p>Club Robotika UTY (Universitas Teknologi Yogyakarta) yang kemudian disebut Robotika,
               merupakan Unit Kegiatan Mahasiswa (UKM) yang berada di lingkungan Universitas Teknologi Yogyakarta,
                yang berfungsi sebagai sarana pengembangan dan pembentukan karakter diri sebagai insan yang menjunjung tinggi akhlak dan disiplin ilmu,
                 sehingga bermanfaat bagi diri sendiri dan masyarakat luas. Didirikan oleh Mahasiswa Jurusan Teknik Elektro, Fakultas Sains dan Teknologi,
                 Universitas Teknologi Yogyakarta pada tanggal 3 Juni 2008.</p>
            </div>
        </section>
    );
};

export default About;
