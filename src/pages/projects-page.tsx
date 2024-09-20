/**
 * Renders the Projects page, which displays a list of projects with their titles, descriptions, images, and links.
 * The projects are fetched from the `projects-list.ts` data file and displayed in reverse order.
 * Each project is rendered using the `HeroProject` component.
 */
import React from "react";
import HeroProject from "../components/hero-project";
import projects from "../data/projects-list";

const ProjectsPage: React.FC = () => {
    return (
        <div>
            <div className="project-container">
                {projects
                    .slice()
                    .reverse()
                    .map((project, index) => (
                        <div key={index}>
                            <HeroProject
                                ProjectTitle={project.title}
                                ProjectDescription={project.description}
                                ProjectImage={project.image}
                                ProjectLink={project.projectLink}
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default ProjectsPage;