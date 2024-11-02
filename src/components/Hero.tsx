// src/components/Hero.tsx
import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
    return (
        <section className="hero-section">
            <div className="hero-content">
                <h1>Robotika UTY 2024</h1>
                <p>Innovate, Create, and Transform the Future with Robotics at Universitas Teknologi Yogyakarta.</p>
                <a href="#about">
                    <button className="cta-button">Explore More</button>
                </a>
            </div>
            <div className="hero-image">
                <img src="/images/images2.png" alt="Robot Illustration" />
            </div>
        </section>
    );
};

export default Hero;
