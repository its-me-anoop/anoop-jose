/**
 * The `AboutPage` component represents the about page of the application.
 * It displays information about the developer, including their education, experience, and skills.
 */
import React from 'react';
import { FaGraduationCap, FaBriefcase, FaCode } from 'react-icons/fa';

const AboutPage: React.FC = () => {
    return (
        <div className="about-page">
            <h1>Hi, I'm <span className="highlight">Anoop Jose</span></h1>

            <section className="bio">
                <p>
                    Software Developer at Flutterly Ltd with expertise in app development, including React JS, React Native, Flutter, SwiftUI, and iOS and Android development. Master's in Nano Science and Technology and a Bachelor's in Electronics and Communication Engineering from Anna University. Strong blend of analytical and practical development skills. Previous roles as a Data Analyst at MeriSKILL and Senior Support Worker at CareAssistUK have honed abilities in data-driven decision-making and user-centered support. Certifications in Version Control, iOS Mobile Application Development, and Swift from Meta enhance capability to deliver robust, scalable solutions benefiting both the team and clients.
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
                    <li>Software Developer at Flutterly Ltd (2023 - Present)</li>
                    <li>Data Analyst at Meriskill (2023 - 2024)</li>
                    <li>Senior Support Worker at CareAssist UK (2023 - 2024)</li>
                    <li>Flutter Developer at Flutterly Ltd (2020 - 2023)</li>
                    <li>Senior Support Worker at Uniq Health Care (2021 - 2023)</li>
                    <li>App Developer at Jesus Youth International (2018 - 2019)</li>
                    <li>Data Associate at Amazon (2016 - 2018)</li>
                    <li>Production Administrator at Scientific Publishing Services Pvt Ltd (2014 - 2016)</li>
                </ul>
            </section>

            <section className="skills">
                <h2><FaCode /> Skills</h2>
                <ul>

                    <li>Problem-Solving</li>
                    <li>Programming</li>
                    <li>Object-Oriented Programming</li>
                    <li>Software Development</li>
                    <li>Code debugging</li>
                    <li>Web application development</li>
                    <li>Testing and debugging</li>
                    <li>Software Debugging</li>
                    <li>Agile development methodologies</li>
                    <li>Git proficiency</li>
                    <li>API Integration</li>
                    <li>Code Review</li>
                    <li>SQL</li>
                    <li>Front-end Frameworks</li>
                    <li>Back-end frameworks</li>
                    <li>User Experience Design</li>
                    <li>Application Development</li>
                    <li>Test-driven development</li>
                    <li>Code Review and Refactoring</li>
                    <li>Mobile Application Development</li>
                    <li>Cross-platform Development</li>
                    <li>Application Programming</li>
                    <li>Innovative</li>
                    <li>Technical Analysis</li>
                    <li>Technical Support</li>
                    <li>Hardware and software installation</li>
                    <li>Continuous Integration and Deployment</li>
                    <li>Technology Integration</li>
                    <li>Code Versioning</li>
                    <li>Customer-Oriented</li>
                    <li>Product Development</li>
                    <li>Technical consulting</li>
                    <li>Javascript</li>

                </ul>
            </section>
        </div>
    );
};

export default AboutPage;
