/**
 * Renders a section displaying the latest projects from the `projects-list` data.
 * 
 * The section includes a title and a container displaying up to 3 of the latest projects.
 * Each project is rendered using the `HeroProject` component, which displays the project's
 * title, description, image, and link.
 * 
 * The projects are sorted in reverse order (most recent first) and the first 3 are displayed.
 */
import React from 'react';
import HeroProject from "./hero-project";
import SandbourneImage from '../assets/images/sandbourne.png';
import MontisCareImage from '../assets/images/montiscare.png';
import JJPaperEssentialsImage from '../assets/images/jjpaper.png';
import DBRMImage from '../assets/images/dbrm.png';
import GoodwillImage from '../assets/images/goodwill.png';
import NurselyImage from '../assets/images/nursely.png';

interface Project {
    title: string;
    description: string;
    image: string;
    projectLink: string;
}

const projects: Project[] = [
    {
        title: 'Daily Bible Reading Mission (DBRM) App',
        description: 'Daily Bible Reading Mission (DBRM) App is a mobile application built with Flutter and Firebase, designed to help users track their daily Bible reading progress. The app provides a user-friendly interface that allows users to log their daily Bible reading, set goals, and track their progress over time. The app also includes features such as reminders and progress tracking.',
        image: DBRMImage,
        projectLink: 'https://apps.apple.com/gb/app/daily-bible-reading-mission/id1456112276',
    },
    {
        title: 'Goodwill Dairy Website',
        description: 'Website for Goodwill Dairy built with HTML, CSS and Javascript. It is a static website that showcases the products and services offered by Goodwill Dairy. The website is designed to be user-friendly and visually appealing, with a focus on showcasing the high-quality products and services offered by Goodwill Dairy.',
        image: GoodwillImage,
        projectLink: 'https://goodwilldairy.com',
    },
    {
        title: 'Nursely App',
        description: 'Nursely is an effective staff management app for the healthcare industry. It is built with Flutter and Firebase cloud functions. The app is designed to help healthcare providers manage their staff and schedule appointments. The app includes features such as staff scheduling, time tracking, and performance management.',
        image: NurselyImage,
        projectLink: 'https://apps.apple.com/gb/app/nursely/id1538772521',
    },
    {
        title: 'JJ Paper Essentials Website',
        description: 'The JJ Paper Essentials website is an elegantly designed, responsive platform built using Webflow. The website aims to establish a strong online presence for JJ Paper Essentials, showcasing their wide range of paper products and enabling easy customer engagement. The use of Webflow provides a flexible, no-code solution that allows for quick updates and design changes, ensuring that the website remains modern and aligned with the company\'s evolving needs.',
        image: JJPaperEssentialsImage,
        projectLink: 'https://www.jjpaperessential.com/',
    },
    {
        title: 'Montis Care Website',
        description: 'The Montis Care website is a professionally designed platform built using WordPress, aimed at enhancing the online visibility and accessibility of Montis Care\'s services. The website serves as a digital gateway for individuals seeking quality care services, providing key information about Montis Care\'s offerings and fostering trust with potential clients.The site includes a blog for sharing news, tips, and updates on the latest in care services, helping to engage visitors and build trust. The site is hosted on a reliable WordPress-friendly server with regular backups and security measures in place.',
        image: MontisCareImage,
        projectLink: 'https://montiscare.co.uk/',
    },
    {
        title: 'Sandbourne Care Website',
        description: 'The Sandbourne Care website is a responsive and user-friendly platform built using React.js, designed to provide an easy and efficient online presence for Sandbourne Care. The primary goal of the website is to showcase the services and values of the care facility, making it accessible to potential clients, families, and caregivers. The website is securely hosted on Firebase, benefiting from Firebase\'s fast load times, scalability, and robust security features. The site is optimized for search engines, ensuring better visibility in relevant searches to reach the target audience.',
        image: SandbourneImage,
        projectLink: 'https://sandbournecare.co.uk/',
    }
];

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