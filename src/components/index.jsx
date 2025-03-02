import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import useToggle from '../Hooks/useToggle.js';
import BackToTop from './BackToTop.jsx';
import LearnMore from './LearnMore.jsx';
import FooterHome from './Footer.jsx';
import Home from './Home.jsx';
import NavBar from './NavBar.jsx';
import HowItWorks from './HowItWorks.jsx';
import Drawer from './MobileDrawer.jsx';

function Main() {
    const [drawer, drawerAction] = useToggle(false);
    const [darkMode, setDarkMode] = useToggle(false);
    const location = useLocation();

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
    }, [darkMode]); // ✅ Runs only when darkMode changes

    useEffect(() => {
        if (location.pathname === "/how-it-works") {
            requestAnimationFrame(() => {
                setTimeout(() => {
                    const section = document.getElementById("how-it-works");
                    if (section) {
                        section.scrollIntoView({ behavior: "smooth" });
                    }
                }, 100); // ✅ Reduced delay
            });
        }
    }, [location.pathname]);

    useEffect(() => {
        if (location.pathname === "/learn-more") {
            requestAnimationFrame(() => {
                setTimeout(() => {
                    const section = document.getElementById("learn-more");
                    if (section) {
                        section.scrollIntoView({ behavior: "smooth" });
                    }
                }, 100); // ✅ Reduced delay
            });
        }
    }, [location.pathname]);

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
            <HowItWorks id="how-it-works" className={darkMode ? 'dyscoverAI-service-area-dark' : ''} />
            <LearnMore id="learn-more" className={darkMode ? 'dyscoverAI-features-area-dark' : ''} />
            <FooterHome className={darkMode ? 'dyscoverAI-footer-area-dark' : ''} />
            <BackToTop />
        </>
    );
}

export default Main;
