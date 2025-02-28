import React, { useEffect } from 'react';
import useToggle from '../../Hooks/useToggle.js';
import StickyMenu from '../../lib/StickyMenu.js';
import BackToTop from '../BackToTop.jsx';
import FooterHome from '../Main/FooterHome.jsx';
import ProjectHome from '../Main/ProjectHome.jsx';
import Drawer from '../Mobile/Drawer.jsx';
import DetailsService from './DetailsService.jsx';
import HeaderService from './HeaderService.jsx';
import HeroService from './HeroService.jsx';

function Service() {
    useEffect(() => {
        StickyMenu();
    });
    const [drawer, drawerAction] = useToggle(false);
    return (
        <>
            <Drawer drawer={drawer} action={drawerAction.toggle} />
            <HeaderService action={drawerAction.toggle} />
            <HeroService />
            <DetailsService />
            <ProjectHome />
            <FooterHome />
            <BackToTop />
        </>
    );
}

export default Service;
