// src/components/Footer.tsx
import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
    return (
        <footer className="footer-section">
            <p>&copy; 2024 Robotika UTY. All rights reserved.</p>
            <div className="social-links">
                <a href="https://www.instagram.com/robotika.uty/">Instagram</a>
                <a href="#">Twitter</a>
                <a href="#">LinkedIn</a>
            </div>
        </footer>
    );
};

export default Footer;
