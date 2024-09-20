/**
 * The `Header` component represents the header section of the application.
 * It includes a logo, a navigation menu, and a toggle button to show/hide the menu on smaller screens.
 * The navigation menu items are defined in the `menuItems` array, and each item has a `to` property for the link URL,
 * a `label` property for the display text, and an `icon` property for the corresponding icon.
 * The `isOpen` state is used to control the visibility of the navigation menu on smaller screens.
 * The `location.pathname` is used to highlight the active navigation link.
 */
import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaUser, FaProjectDiagram, FaEnvelope, FaTimes } from 'react-icons/fa';

interface MenuItem {
    to: string;
    label: string;
    icon: JSX.Element;
}

const Header: React.FC = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false);

    const location = useLocation();

    const menuItems: MenuItem[] = [
        { to: '/about', label: 'About', icon:  <FaUser /> },
        { to: '/projects', label: 'Projects', icon: <FaProjectDiagram /> },
        { to: '/contact', label: 'Contact', icon: <FaEnvelope /> },
    ];

    return (
        <header className='header'>
            <div className="header-container">
                <h1><Link to="/" aria-label="Home" className="logo">Anoop Jose</Link></h1>
                <button className="menu-toggle-button" aria-label="Toggle Navigation" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>
            <nav className={`${isOpen ? 'block' : 'hidden'} md:block w-full md:w-auto`} aria-label="Main Navigation">
                <ul className='main-nav'>
                    {menuItems.map((item, index) => (
                        <li key={index} className="nav-link-container">
                            <Link
                                to={item.to}
                                className={`nav-link ${location.pathname === item.to ? 'active' : ''}`}
                            >
                                <span className="main-nav-icon">{item.icon}</span>
                                <span>{item.label}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Header;