/**
 * The `HeroSection` component represents the hero section of the application's homepage.
 * It displays the user's name, title, a brief description, and links to their GitHub and LinkedIn profiles.
 * The component also includes a button to download the user's CV.
 */
import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import AnoopJoseImage from '../images/anoop-jose.png';
import CV from '../assets/cv.pdf';

const HeroSection: React.FC = () => {
    return (
        <div className="hero-section">
            <div className="hero-content">
                <h1>Hi, I'm <span className="highlight">Anoop Jose</span></h1>
                <h2>Software Developer & Tech Enthusiast</h2>
                <p>
                    I specialize in building modern web and mobile applications using React, Flutter, and iOS/Android platforms.
                    With a background in Nano Science and Technology, I bring a unique perspective to software development.
                </p>
                <div className="cta-buttons">
                    <Link to="/projects" className="primary-btn">View My Work</Link>
                    <a href={CV} download className="secondary-btn">Download CV</a>
                </div>
                <div className="social-links">
                    <a href="https://github.com/its-me-anoop" target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                        <p>Github</p>
                    </a>
                    <a href="https://www.linkedin.com/in/anoop-jose-0b308a296/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                        <p>LinkedIn</p>
                    </a>
                </div>
            </div>
            <div className="hero-image">
                <img src={AnoopJoseImage} alt="Anoop Jose" />
            </div>
        </div>
    );
};

export default HeroSection;
