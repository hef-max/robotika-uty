import React from 'react';
import './About.css';

const About: React.FC = () => {
    return (
        <section id="about" className="about-section">
            <h2>Tentang Kami</h2>
            <div className='about-content'>
                <p>
                    Club Robotika UTY (Universitas Teknologi Yogyakarta) yang kemudian disebut Robotika,
                    merupakan Unit Kegiatan Mahasiswa (UKM) yang berada di lingkungan Universitas Teknologi Yogyakarta,
                    yang berfungsi sebagai sarana pengembangan dan pembentukan karakter diri sebagai insan yang menjunjung tinggi akhlak dan disiplin ilmu,
                    sehingga bermanfaat bagi diri sendiri dan masyarakat luas. Didirikan oleh Mahasiswa Jurusan Teknik Elektro, Fakultas Sains dan Teknologi,
                    Universitas Teknologi Yogyakarta pada tanggal 3 Juni 2008.
                </p>
                
                {/* Video Profile Section */}
                <div className="video-container">
                    <video controls className="profile-video">
                        <source src="/images/FINAL VIDEO UKM ROBOTIKA UTY.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </section>
    );
};

export default About;
