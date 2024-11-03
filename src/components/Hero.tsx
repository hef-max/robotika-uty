// src/components/Hero.tsx
import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
    return (
        <section className="hero-section">
            <div className="hero-content">
                <h1>Explore the Power of Robotics UTY</h1>
                <p>Unleasing Your Potential Through Competitive Robotics Selection</p>
                <a href="#about">
                    <button className="cta-button">Explore More</button>
                </a>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLScU9XH0_3J6sOcsDhO8clbYYqK3k8hqrQWCz115ohFXkKmOuw/viewform">
                    <button className="cta-button">Daftar Robotika 2024 </button>
                </a>
            </div>
            <div className="hero-image">
                {/* <img src="/images/images2.png" alt="Robot Illustration" /> */}
            </div>
        </section>
    );
};

export default Hero;
