import React from 'react'
import HeroSection from '../components/Hero-Section';
import Skills from '../components/skills';
import LatestProjects from '../components/latest-projects';

const HomePage: React.FC = () => {
    return (
        <div>
            <HeroSection />
            <Skills />
            <LatestProjects />
        </div>
    );
}

export default HomePage;