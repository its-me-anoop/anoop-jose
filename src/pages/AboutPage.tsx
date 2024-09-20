/**
 * The `AboutPage` component represents the about page of the application.
 * It displays information about the developer, including their education, experience, and skills.
 */
import React from 'react';
import { FaGraduationCap, FaBriefcase, FaCode } from 'react-icons/fa';

const AboutPage: React.FC = () => {
    return (
        <div className="about-page">
            <h1 className="page-title">About Me</h1>

            <section className="bio">
                <h2>Anoop Jose</h2>
                <p>
                    I'm a passionate Software Developer with a unique background in Nano Science and Technology.
                    My journey in tech has led me to specialize in building modern web and mobile applications
                    using React, Flutter, and iOS/Android platforms.
                </p>
            </section>

            <section className="education">
                <h2><FaGraduationCap /> Education</h2>
                <ul>
                    <li>M.Tech in Nano Science and Technology</li>
                    <li>B.Tech in Electronics and Communication Engineering</li>
                    <li>Various online courses and certifications in software development</li>
                </ul>
            </section>

            <section className="experience">
                <h2><FaBriefcase /> Experience</h2>
                <ul>
                    <li>Software Developer at XYZ Company (2020 - Present)</li>
                    <li>Freelance Web Developer (2018 - 2020)</li>
                </ul>
            </section>

            <section className="skills">
                <h2><FaCode /> Skills</h2>
                <ul>
                    <li>React.js</li>
                    <li>Flutter</li>
                    <li>iOS/Android Development</li>
                    <li>JavaScript/TypeScript</li>
                    <li>HTML/CSS</li>
                    <li>Git</li>
                </ul>
            </section>
        </div>
    );
};

export default AboutPage;
