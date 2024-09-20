/**
 * Renders a section displaying the latest projects.
 * 
 * The `LatestProjects` component fetches an array of project data, including the project title, description, image, and link. It then renders a section with a title and a container of up to 3 `HeroProject` components, each displaying information about one of the latest projects.
 * 
 * @returns {JSX.Element} The rendered `LatestProjects` section.
 */
import React from 'react';
import HeroProject from "./hero-project";
import projects from "../data/projects-list";

const LatestProjects: React.FC = () => {
    return (
        <section>
            <h2 className="projects-section-title">My Latest Projects</h2>
            <div className="project-container">
                {projects.slice().reverse().slice(0, 3).map((project, index) => (
                    <div key={index}>
                        <HeroProject
                            ProjectTitle={project.title}
                            ProjectDescription={project.description}
                            ProjectImage={project.image}
                            ProjectLink={project.projectLink}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}

export default LatestProjects;