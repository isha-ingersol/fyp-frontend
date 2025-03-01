import React, { useEffect } from 'react';
import useToggle from '../../Hooks/useToggle.js';
import BackToTop from '../BackToTop.jsx';
import LearnMore from '../Main/LearnMore.jsx';
import FooterHome from '../Main/FooterHome.jsx';
import Home from '../Main/Home.jsx';
import NavBar from '../Main/NavBar.jsx';
import HowItWorks from '../Main/HowItWorks.jsx';
import Drawer from '../Mobile/Drawer.jsx';



import PricingHome from '../Main/PricingHome.jsx';
import ProjectHome from '../Main/ProjectHome.jsx';
import TeamHome from '../Main/TeamHome.jsx';
import TestimonialHome from '../Main/TestimonialHome.jsx';
import TrafficHome from '../Main/TrafficHome.jsx';

function HomeDark() {
    const [drawer, drawerAction] = useToggle(false);
    const [darkMode, setDarkMode] = useToggle(false);

    useEffect(() => {
        document.body.classList.add('dyscoverAI-init');
        if (darkMode) {
            document.body.classList.add('dyscoverAI-dark');
        } else {
            document.body.classList.remove('dyscoverAI-dark');
        }
        return () => {
            document.body.classList.remove('dyscoverAI-dark');
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
            <Home className={darkMode ? 'dyscoverAI-hero-area-dark' : ''} />
            <HowItWorks className={darkMode ? 'dyscoverAI-service-area-dark' : ''} />
            <LearnMore className={darkMode ? 'dyscoverAI-features-area-dark' : ''} />
            {/* <TrafficHome className={darkMode ? 'dyscoverAI-traffic-area-dark' : ''} />
            <TestimonialHome />
            <TeamHome className={darkMode ? 'dyscoverAI-team-area-dark' : ''} />
            <PricingHome className={darkMode ? 'dyscoverAI-pricing-area-dark' : ''} />
            <FaqHome className={darkMode ? 'dyscoverAI-faq-area-dark' : ''} />
            <BlogHome className={darkMode ? 'dyscoverAI-blog-area-dark' : ''} />
            <ProjectHome /> */}
            <FooterHome className={darkMode ? 'dyscoverAI-footer-area-dark' : ''} />
            <BackToTop />
        </>
    );
}

export default HomeDark;
