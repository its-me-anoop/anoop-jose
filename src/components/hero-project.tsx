import React from 'react';

interface HeroProjectProps {
    ProjectTitle: string;
    ProjectDescription: string;
    ProjectImage: string;
    ProjectLink: string;
}

const HeroProject: React.FC<HeroProjectProps> = ({
    ProjectTitle,
    ProjectDescription,
    ProjectImage,
    ProjectLink
}) => {
    return (
        <section className="hero-project">
            <div className="hero-project-container">
                <div className="hero-project-details">
                    <div className="hero-project-image">
                        <img src={ProjectImage} alt={ProjectTitle} className="hero-project-img" />
                    </div>
                    <div className="hero-project-info">
                        <h3 className="hero-project-title">{ProjectTitle}</h3>
                        <p className="hero-project-description">{ProjectDescription}</p>
                        <a href={ProjectLink} target="_blank" rel="noopener noreferrer">
                            <button className="hero-project-button">View Project</button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroProject;
