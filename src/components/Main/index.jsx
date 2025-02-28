import React from 'react';
import useToggle from '../../Hooks/useToggle.js';
import BackToTop from '../BackToTop.jsx';
import Drawer from '../Mobile/Drawer.jsx';
import BlogHome from './BlogHome.jsx';
import FaqHome from './FaqHome.jsx';
import FeaturesHome from './FeaturesHome.jsx';
import FooterHome from './FooterHome.jsx';
import Home from './Home.jsx';
import NavBar from './NavBar.jsx';
import PricingHome from './PricingHome.jsx';
import ProjectHome from './ProjectHome.jsx';
// import ServicesHome from './ServicesHome.jsx';
import HowItWorks from './HowItWorks.jsx';
import TeamHome from './TeamHome.jsx';
import TestimonialHome from './TestimonialHome.jsx';
import TrafficHome from './TrafficHome.jsx';

function Main() {
    const [drawer, drawerAction] = useToggle(false);

    return (
        <>
            <Drawer drawer={drawer} action={drawerAction.toggle} />
            <NavBar action={drawerAction.toggle} />
            <Home />
            <HowItWorks />
            <FeaturesHome />
            <TrafficHome />
            <TestimonialHome />
            <TeamHome />
            <PricingHome />
            <FaqHome />
            <BlogHome />
            <ProjectHome />
            <FooterHome />
            <BackToTop />
        </>
    );
}

export default Main;
