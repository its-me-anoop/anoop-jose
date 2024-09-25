import React from 'react'
import { Helmet } from 'react-helmet'
import HeroSection from '../components/Hero-Section'
import Skills from '../components/skills'
import LatestProjects from '../components/latest-projects'

const HomePage: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>Anoop Jose - Web Developer Portfolio</title>
                <meta name="description" content="Anoop Jose is a skilled web developer showcasing his latest projects and technical skills. Explore his portfolio to learn more." />
                <meta name="keywords" content="Anoop Jose, web developer, portfolio, projects, skills" />
                <link rel="canonical" href="https://anoop-jose.web.app" />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://anoop-jose.web.app" />
                <meta property="og:title" content="Anoop Jose - Web Developer Portfolio" />
                <meta property="og:description" content="Explore Anoop Jose's web development projects and skills." />
                <meta property="og:image" content="https://anoop-jose.web.app/og-image.jpg" />

                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://anoop-jose.web.app" />
                <meta property="twitter:title" content="Anoop Jose - Web Developer Portfolio" />
                <meta property="twitter:description" content="Explore Anoop Jose's web development projects and skills." />
                <meta property="twitter:image" content="https://anoop-jose.web.app/twitter-image.jpg" />

                {/* iOS styling */}
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
                <meta name="apple-mobile-web-app-title" content="Anoop Jose" />
                <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
                <link rel="apple-touch-startup-image" href="/launch-image.png" />
            </Helmet>
            <main>
                <h1>Anoop Jose - Web Developer</h1>
                <HeroSection />
                <Skills />
                <LatestProjects />
            </main>
        </>
    )
}

export default HomePage