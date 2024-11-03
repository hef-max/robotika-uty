import React from 'react';
import './Projects.css';

const Projects: React.FC = () => {
    const projects = [
        { title: "Juara 1 Tingkat Nasional", description: "Wahana Sistem Kendali", image: "/images/Juaraaa.jpg"},
        { title: "TECHNO EXPO - FESTIKA 2024", description: "Project Terbaik", image: "/images/DSC00654.JPG" },
        { title: "Juara 2 Komurindo Kombat 2019", description: "Wahana Sistem Kendali", image: "/images/DSC00683.JPG" },
        { title: "Juara 2 Lomba Teknologi Inovatif", description: "Wahana Sistem Kendali", image: "/images/DSC00658.JPG"},
    ];

    return (
        <section className="projects-section">
            <div className="container">
                <h2 className="section-title">Proyek & Prestasi</h2>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card">
                            <img src={project.image} alt={project.title} className="project-image" />
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-description">{project.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
