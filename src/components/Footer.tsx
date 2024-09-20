/**
 * The `Footer` component represents the footer section of the application.
 * It displays the copyright information and links to the author's social media profiles.
 */
import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

interface SocialLink {
    name: string;
    href: string;
    icon: JSX.Element;
}

const Footer: React.FC = () => {
    const socialLinks: SocialLink[] = [
        { name: 'GitHub', href: 'https://github.com/its-me-anoop', icon: <FaGithub /> },
        { name: 'LinkedIn', href: 'https://www.linkedin.com/in/anoop-jose-0b308a296/', icon: <FaLinkedin /> },
    ];

    return (
        <footer className="footer">
            <div className="footer-container">
                <p>© 2023 Anoop Jose</p>
                <div className="social-links">
                    {socialLinks.map((link, index) => (
                        <a key={index} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={`Follow me on ${link.name}`}>
                            {link.icon}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
}

export default Footer;