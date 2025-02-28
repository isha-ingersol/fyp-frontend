import React from 'react';
import useToggle from '../../Hooks/useToggle.js';
import BackToTop from '../BackToTop.jsx';
import FooterHome from '../Main/FooterHome.jsx';
import Drawer from '../Mobile/Drawer.jsx';
import HeaderNews from '../News/HeaderNews.jsx';
import HeroNews from '../News/HeroNews.jsx';

function AboutUsTwo() {
    const [drawer, drawerAction] = useToggle(false);
    return (
        <>
            <Drawer drawer={drawer} action={drawerAction.toggle} />
            <HeaderNews action={drawerAction.toggle} />
            <HeroNews
                title="About Us 2"
                breadcrumb={[
                    { link: '/', title: 'Home' },
                    { link: '/about-us-another', title: 'About us' },
                ]}
            />
            {/* <ServicesHomeThree style={{ paddingTop: '90px' }} /> */}
            {/* <FunFactHomeThree /> */}
            {/* <WorkPartHomeEight className="pt-100" /> */}
            {/* <TestimonialHomeEight /> */}
            {/* <SignupHomeEight /> */}
            <FooterHome className="dyscoverAI-footer-about-area" />
            <BackToTop />
        </>
    );
}

export default AboutUsTwo;
