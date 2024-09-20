import React from 'react'
import HeroSection from '../components/Hero-Section';
import Skills from '../components/skills';

const HomePage: React.FC = () => {
    return (
        <div>
            <HeroSection />
            <Skills />
        </div>
    );
}

export default HomePage;