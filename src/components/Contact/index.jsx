import React from 'react';
import useToggle from '../../Hooks/useToggle.js';
import BackToTop from '../BackToTop.jsx';
import FooterHome from '../Main/FooterHome.jsx';
import Drawer from '../Mobile/Drawer.jsx';
import HeaderNews from '../News/HeaderNews.jsx';
import HeroNews from '../News/HeroNews.jsx';
import Forms from './Forms.jsx';

function Contact() {
    const [drawer, drawerAction] = useToggle(false);

    return (
        <>
            <Drawer drawer={drawer} action={drawerAction.toggle} />
            <HeaderNews drawer={drawer} action={drawerAction.toggle} />
            <HeroNews
                title="Blogs"
                breadcrumb={[
                    { link: '/', title: 'home' },
                    { link: '/news', title: 'Blogs' },
                ]}
            />
            <Forms />
            <FooterHome />
            <BackToTop />
        </>
    );
}

export default Contact;
