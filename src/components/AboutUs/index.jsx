import React from 'react';
import useToggle from '../../Hooks/useToggle.js';
import BackToTop from '../BackToTop.jsx';
import FooterHome from '../Main/FooterHome.jsx';
import Drawer from '../Mobile/Drawer.jsx';
import HeaderAbout from './HeaderAbout.jsx';
import HeroAbout from './HeroAbout.jsx';
import ServicesAbout from './ServicesAbout.jsx';
import TeamAbout from './TeamAbout.jsx';

function AboutUs() {
    const [drawer, drawerAction] = useToggle(false);

    return (
        <>
            <Drawer drawer={drawer} action={drawerAction.toggle} />
            <HeaderAbout drawer={drawer} action={drawerAction.toggle} />
            <HeroAbout />
            <ServicesAbout />
            <TeamAbout />
            {/* <SponserHomeTwo /> */}
            {/* <SignupHomeEight /> */}
            <FooterHome className="dyscoverAI-footer-about-area" />
            <BackToTop />
        </>
    );
}

export default AboutUs;
