import React, { useEffect } from 'react';
import useToggle from '../../Hooks/useToggle.js';
import BackToTop from '../BackToTop.jsx';
import BlogHome from '../Main/BlogHome.jsx';
import FaqHome from '../Main/FaqHome.jsx';
import FeaturesHome from '../Main/FeaturesHome.jsx';
import FooterHome from '../Main/FooterHome.jsx';
import Home from '../Main/Home.jsx';
import NavBar from '../Main/NavBar.jsx';
import PricingHome from '../Main/PricingHome.jsx';
import ProjectHome from '../Main/ProjectHome.jsx';
import HowItWorks from '../Main/HowItWorks.jsx';
import TeamHome from '../Main/TeamHome.jsx';
import TestimonialHome from '../Main/TestimonialHome.jsx';
import TrafficHome from '../Main/TrafficHome.jsx';
import Drawer from '../Mobile/Drawer.jsx';

function HomeDark() {
    const [drawer, drawerAction] = useToggle(false);
    const [darkMode, setDarkMode] = useToggle(false);

    useEffect(() => {
        document.body.classList.add('discoverAI-init');
        if (darkMode) {
            document.body.classList.add('discoverAI-dark');
        } else {
            document.body.classList.remove('discoverAI-dark');
        }
        return () => {
            document.body.classList.remove('discoverAI-dark');
        };
    });

    return (
        <>
            <Drawer drawer={drawer} action={drawerAction.toggle} />
            <NavBar
                className={darkMode ? 'header-container-dark' : ''}
                dark={darkMode}
                darkEnable
                changeMode={setDarkMode.toggle}
                action={drawerAction.toggle}
            />
            <Home className={darkMode ? 'discoverAI-hero-area-dark' : ''} />
            <HowItWorks className={darkMode ? 'discoverAI-service-area-dark' : ''} />
            <FeaturesHome className={darkMode ? 'discoverAI-features-area-dark' : ''} />
            <TrafficHome className={darkMode ? 'discoverAI-traffic-area-dark' : ''} />
            <TestimonialHome />
            <TeamHome className={darkMode ? 'discoverAI-team-area-dark' : ''} />
            <PricingHome className={darkMode ? 'discoverAI-pricing-area-dark' : ''} />
            <FaqHome className={darkMode ? 'discoverAI-faq-area-dark' : ''} />
            <BlogHome className={darkMode ? 'discoverAI-blog-area-dark' : ''} />
            <ProjectHome />
            <FooterHome className={darkMode ? 'discoverAI-footer-area-dark' : ''} />
            <BackToTop />
        </>
    );
}

export default HomeDark;
