import React from 'react';
import './Projects.css';

const Projects: React.FC = () => {
    const projects = [
        { title: "Juara 1 Kontes Robot Nasional", description: "Robot Pemadam Api", image: "/assets/image1.png" },
        { title: "Juara 2 Kontes Robot Internasional", description: "Robot Penyelam", image: "/assets/image2.png" },
        { title: "Juara 3 Lomba Teknologi Inovatif", description: "Robot Pengangkut Barang", image: "/assets/image3.png" },
    ];

    return (
        <section className="projects-section">
            <div className="container">
                <h2 className="section-title">Proyek dan Prestasi</h2>
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
